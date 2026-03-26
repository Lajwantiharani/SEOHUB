import { NextRequest, NextResponse } from "next/server";
import { authenticateUser, setSession } from "@/lib/auth";

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");

  if (!email || !password) {
    return NextResponse.redirect(new URL("/login?error=Please+enter+email+and+password", request.url), { status: 303 });
  }

  const result = await authenticateUser(email, password);
  if (!result.ok) {
    return NextResponse.redirect(new URL(`/login?error=${encodeURIComponent(result.error)}`, request.url), { status: 303 });
  }

  await setSession(result.user);
  return NextResponse.redirect(new URL("/account", request.url), { status: 303 });
}
