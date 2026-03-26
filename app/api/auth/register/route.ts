import { NextRequest, NextResponse } from "next/server";
import { registerUser, setSession } from "@/lib/auth";

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const firstName = String(formData.get("firstName") ?? "").trim();
  const lastName = String(formData.get("lastName") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");
  const confirmPassword = String(formData.get("confirmPassword") ?? "");

  if (!firstName || !lastName || !email || !password || !confirmPassword) {
    return NextResponse.redirect(new URL("/register?error=Please+fill+all+fields", request.url), { status: 303 });
  }

  if (password.length < 8) {
    return NextResponse.redirect(new URL("/register?error=Password+must+be+at+least+8+characters", request.url), { status: 303 });
  }

  if (password !== confirmPassword) {
    return NextResponse.redirect(new URL("/register?error=Passwords+do+not+match", request.url), { status: 303 });
  }

  const result = await registerUser({ firstName, lastName, email, password });
  if (!result.ok) {
    return NextResponse.redirect(new URL(`/register?error=${encodeURIComponent(result.error)}`, request.url), { status: 303 });
  }

  await setSession(result.user);
  return NextResponse.redirect(new URL("/account", request.url), { status: 303 });
}
