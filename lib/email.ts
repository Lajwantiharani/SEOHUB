import nodemailer from "nodemailer";

let cachedTransporter: nodemailer.Transporter | null = null;

function getRequiredEnv(name: string) {
  const value = process.env[name]?.trim();
  if (!value) {
    throw new Error(`Missing ${name} environment variable.`);
  }

  return value;
}

function getTransporter() {
  if (cachedTransporter) {
    return cachedTransporter;
  }

  const host = getRequiredEnv("SMTP_HOST");
  const port = Number(process.env.SMTP_PORT ?? "587");
  const user = getRequiredEnv("SMTP_USER");
  const pass = getRequiredEnv("SMTP_PASS");
  const secure = process.env.SMTP_SECURE
    ? process.env.SMTP_SECURE === "true"
    : port === 465;

  cachedTransporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user,
      pass
    }
  });

  return cachedTransporter;
}

export async function sendPasswordResetEmail(input: {
  to: string;
  resetUrl: string;
}) {
  const from = process.env.SMTP_FROM?.trim() || getRequiredEnv("SMTP_USER");
  const transporter = getTransporter();

  await transporter.sendMail({
    from,
    to: input.to,
    subject: "Reset your SeoHub password",
    text: [
      "We received a request to reset your SeoHub password.",
      "",
      `Open this link to choose a new password: ${input.resetUrl}`,
      "",
      "If you did not request this, you can ignore this email."
    ].join("\n"),
    html: `
      <div style="font-family:Arial,sans-serif;line-height:1.6;color:#1a1a1a;max-width:640px;margin:0 auto;padding:24px;">
        <p style="font-size:14px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#8b6200;margin:0 0 16px;">SeoHub Ltd</p>
        <h1 style="font-size:28px;line-height:1.1;margin:0 0 16px;">Reset your password</h1>
        <p style="margin:0 0 20px;">We received a request to reset your SeoHub password.</p>
        <p style="margin:0 0 24px;">
          <a href="${input.resetUrl}" style="display:inline-block;padding:12px 22px;border-radius:999px;background:#ffbf1f;color:#1c1200;text-decoration:none;font-weight:700;">Choose a new password</a>
        </p>
        <p style="margin:0 0 8px;word-break:break-all;">If the button does not work, open this link:</p>
        <p style="margin:0 0 20px;word-break:break-all;"><a href="${input.resetUrl}" style="color:#8b6200;">${input.resetUrl}</a></p>
        <p style="margin:0;color:#6b5f48;">If you did not request this, you can ignore this email.</p>
      </div>
    `
  });
}
