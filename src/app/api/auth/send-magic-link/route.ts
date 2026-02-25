import { NextRequest, NextResponse } from "next/server";
import { isEmailAllowed, createMagicLinkToken } from "@/lib/auth";
import { sendMagicLink } from "@/lib/email";

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    const normalizedEmail = email.toLowerCase().trim();

    if (!isEmailAllowed(normalizedEmail)) {
      // Don't reveal whether the email exists - always show success
      return NextResponse.json({ success: true });
    }

    const token = await createMagicLinkToken(normalizedEmail);
    await sendMagicLink(normalizedEmail, token);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Magic link error:", error);
    return NextResponse.json(
      { error: "Failed to send magic link" },
      { status: 500 }
    );
  }
}
