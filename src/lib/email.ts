import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

export async function sendMagicLink(email: string, token: string) {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
  const magicLink = `${baseUrl}/api/auth/verify?token=${token}`;

  // In development without Resend, log to console
  if (!resend) {
    console.log("\n========================================");
    console.log("  MAGIC LINK (dev mode)");
    console.log(`  Email: ${email}`);
    console.log(`  Link:  ${magicLink}`);
    console.log("========================================\n");
    return { success: true };
  }

  const { error } = await resend.emails.send({
    from: process.env.EMAIL_FROM || "SMOS <noreply@yourdomain.com>",
    to: email,
    subject: "Sign in to SMOS",
    html: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 480px; margin: 0 auto; padding: 40px 20px;">
        <h2 style="color: #37352f; font-size: 20px; font-weight: 600;">Sign in to SMOS</h2>
        <p style="color: #787774; font-size: 14px; line-height: 1.6;">
          Click the button below to sign in. This link expires in 15 minutes.
        </p>
        <a href="${magicLink}" style="display: inline-block; background: #37352f; color: white; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-size: 14px; font-weight: 500; margin: 16px 0;">
          Sign in to SMOS
        </a>
        <p style="color: #b4b4b0; font-size: 12px; margin-top: 32px;">
          If you didn't request this, you can safely ignore this email.
        </p>
      </div>
    `,
  });

  if (error) {
    console.error("Failed to send magic link:", error);
    return { success: false, error: error.message };
  }

  return { success: true };
}
