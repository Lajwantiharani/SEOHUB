import { NextRequest, NextResponse } from "next/server";
import { createPasswordReset } from "@/lib/auth";
import { sendPasswordResetEmail } from "@/lib/email";

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const email = String(formData.get("email") ?? "").trim();

  if (!email) {
    return NextResponse.redirect(new URL("/forgot-password?error=Please+enter+your+email", request.url), { status: 303 });
  }

  const result = await createPasswordReset(email);

  if (result.token) {
    try {
      const appUrl = process.env.APP_URL?.trim() || new URL(request.url).origin;
      const resetUrl = new URL(`/reset-password?token=${encodeURIComponent(result.token)}`, appUrl).toString();
      await sendPasswordResetEmail({
        to: result.email,
        resetUrl
      });
    } catch (error) {
      console.error("Failed to send password reset email", error);
      return NextResponse.redirect(
        new URL("/forgot-password?error=Unable+to+send+reset+email.+Check+mail+settings.", request.url),
        { status: 303 }
      );
    }
  }

  const redirectUrl = new URL("/forgot-password", request.url);
  redirectUrl.searchParams.set("message", "If the email exists, a reset link has been sent.");
  return NextResponse.redirect(redirectUrl, { status: 303 });
}
