import { NextRequest, NextResponse } from "next/server";
import { resetPassword, setSession } from "@/lib/auth";

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const token = String(formData.get("token") ?? "");
  const password = String(formData.get("password") ?? "");
  const confirmPassword = String(formData.get("confirmPassword") ?? "");

  if (!token || !password || !confirmPassword) {
    return NextResponse.redirect(new URL("/reset-password?error=Please+fill+all+fields", request.url), { status: 303 });
  }

  if (password.length < 8) {
    return NextResponse.redirect(new URL(`/reset-password?token=${encodeURIComponent(token)}&error=Password+must+be+at+least+8+characters`, request.url), { status: 303 });
  }

  if (password !== confirmPassword) {
    return NextResponse.redirect(new URL(`/reset-password?token=${encodeURIComponent(token)}&error=Passwords+do+not+match`, request.url), { status: 303 });
  }

  const result = await resetPassword(token, password);
  if (!result.ok) {
    return NextResponse.redirect(new URL(`/reset-password?error=${encodeURIComponent(result.error)}`, request.url), { status: 303 });
  }

  await setSession(result.user);
  return NextResponse.redirect(new URL("/account?message=Password+updated+successfully", request.url), { status: 303 });
}
