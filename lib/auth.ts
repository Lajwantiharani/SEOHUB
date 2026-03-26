import { cookies } from "next/headers";
import {
  randomBytes,
  timingSafeEqual,
  createHmac,
  createHash,
  scrypt as scryptCallback
} from "crypto";
import { ObjectId } from "mongodb";
import { getDatabase } from "@/lib/mongodb";

export type StoredUser = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  passwordHash: string;
  salt: string;
  createdAt: string;
  resetTokenHash?: string;
  resetTokenExpiresAt?: string;
};

type UserDocument = {
  _id: ObjectId;
  email: string;
  firstName: string;
  lastName: string;
  passwordHash: string;
  salt: string;
  createdAt: string;
  resetTokenHash?: string;
  resetTokenExpiresAt?: string;
};

type SessionPayload = {
  sub: string;
  email: string;
  exp: number;
};

const sessionCookieName = "seohub_session";
const sessionDurationSeconds = 60 * 60 * 24 * 7;
const resetDurationMs = 1000 * 60 * 30;
const secret = process.env.AUTH_SECRET ?? "seohub-local-dev-secret-change-me";

function scryptAsync(password: string, salt: string, keyLength: number): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    scryptCallback(password, salt, keyLength, (error, derivedKey) => {
      if (error) {
        reject(error);
        return;
      }

      resolve(derivedKey as Buffer);
    });
  });
}

async function getUsersCollection() {
  const db = await getDatabase();
  return db.collection<UserDocument>("users");
}

function mapUser(user: UserDocument): StoredUser {
  return {
    id: user._id.toHexString(),
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
    passwordHash: user.passwordHash,
    salt: user.salt,
    createdAt: user.createdAt,
    resetTokenHash: user.resetTokenHash,
    resetTokenExpiresAt: user.resetTokenExpiresAt
  };
}

export function normalizeEmail(email: string) {
  return email.trim().toLowerCase();
}

async function hashPassword(password: string, salt: string) {
  const derivedKey = await scryptAsync(password, salt, 64);
  return derivedKey.toString("hex");
}

function hashToken(token: string) {
  return createHash("sha256").update(token).digest("hex");
}

function encodeBase64Url(value: string) {
  return Buffer.from(value).toString("base64url");
}

function decodeBase64Url(value: string) {
  return Buffer.from(value, "base64url").toString("utf8");
}

function sign(value: string) {
  return createHmac("sha256", secret).update(value).digest("base64url");
}

function createSessionToken(payload: SessionPayload) {
  const encoded = encodeBase64Url(JSON.stringify(payload));
  const signature = sign(encoded);
  return `${encoded}.${signature}`;
}

function verifySessionToken(token: string): SessionPayload | null {
  const [encoded, signature] = token.split(".");
  if (!encoded || !signature) return null;

  const expected = sign(encoded);
  if (signature.length !== expected.length) return null;

  const valid = timingSafeEqual(Buffer.from(signature), Buffer.from(expected));
  if (!valid) return null;

  const payload = JSON.parse(decodeBase64Url(encoded)) as SessionPayload;
  if (payload.exp < Math.floor(Date.now() / 1000)) return null;
  return payload;
}

export async function getUsers(): Promise<StoredUser[]> {
  const collection = await getUsersCollection();
  const users = await collection.find({}).toArray();
  return users.map(mapUser);
}

export async function registerUser(input: {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}) {
  const collection = await getUsersCollection();
  const email = normalizeEmail(input.email);
  const existingUser = await collection.findOne({ email });

  if (existingUser) {
    return { ok: false as const, error: "Email already registered." };
  }

  const salt = randomBytes(16).toString("hex");
  const user: Omit<UserDocument, "_id"> = {
    email,
    firstName: input.firstName.trim(),
    lastName: input.lastName.trim(),
    salt,
    passwordHash: await hashPassword(input.password, salt),
    createdAt: new Date().toISOString()
  };

  const result = await collection.insertOne(user as UserDocument);
  return {
    ok: true as const,
    user: mapUser({ _id: result.insertedId, ...user })
  };
}

export async function authenticateUser(email: string, password: string) {
  const collection = await getUsersCollection();
  const normalizedEmail = normalizeEmail(email);
  const user = await collection.findOne({ email: normalizedEmail });

  if (!user) {
    return { ok: false as const, error: "Invalid email or password." };
  }

  const computed = await hashPassword(password, user.salt);
  if (computed.length !== user.passwordHash.length) {
    return { ok: false as const, error: "Invalid email or password." };
  }

  const valid = timingSafeEqual(Buffer.from(computed), Buffer.from(user.passwordHash));
  if (!valid) {
    return { ok: false as const, error: "Invalid email or password." };
  }

  return { ok: true as const, user: mapUser(user) };
}

export async function setSession(user: StoredUser) {
  const token = createSessionToken({
    sub: user.id,
    email: user.email,
    exp: Math.floor(Date.now() / 1000) + sessionDurationSeconds
  });

  const cookieStore = await cookies();
  cookieStore.set(sessionCookieName, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: sessionDurationSeconds
  });
}

export async function clearSession() {
  const cookieStore = await cookies();
  cookieStore.delete(sessionCookieName);
}

export async function getCurrentUser() {
  const cookieStore = await cookies();
  const token = cookieStore.get(sessionCookieName)?.value;
  if (!token) return null;

  const payload = verifySessionToken(token);
  if (!payload || !ObjectId.isValid(payload.sub)) return null;

  const collection = await getUsersCollection();
  const user = await collection.findOne({
    _id: new ObjectId(payload.sub),
    email: payload.email
  });

  return user ? mapUser(user) : null;
}

export async function createPasswordReset(email: string) {
  const collection = await getUsersCollection();
  const normalizedEmail = normalizeEmail(email);
  const user = await collection.findOne({ email: normalizedEmail });

  if (!user) {
    return { ok: true as const, token: null, email: normalizedEmail };
  }

  const token = randomBytes(24).toString("hex");
  await collection.updateOne(
    { _id: user._id },
    {
      $set: {
        resetTokenHash: hashToken(token),
        resetTokenExpiresAt: new Date(Date.now() + resetDurationMs).toISOString()
      }
    }
  );

  return { ok: true as const, token, email: normalizedEmail };
}

export async function resetPassword(token: string, password: string) {
  const collection = await getUsersCollection();
  const hashedToken = hashToken(token);
  const user = await collection.findOne({ resetTokenHash: hashedToken });

  if (!user || !user.resetTokenExpiresAt || new Date(user.resetTokenExpiresAt).getTime() < Date.now()) {
    return { ok: false as const, error: "Reset link is invalid or expired." };
  }

  const salt = randomBytes(16).toString("hex");
  const passwordHash = await hashPassword(password, salt);

  await collection.updateOne(
    { _id: user._id },
    {
      $set: {
        salt,
        passwordHash
      },
      $unset: {
        resetTokenHash: "",
        resetTokenExpiresAt: ""
      }
    }
  );

  return {
    ok: true as const,
    user: mapUser({
      ...user,
      salt,
      passwordHash,
      resetTokenHash: undefined,
      resetTokenExpiresAt: undefined
    })
  };
}
