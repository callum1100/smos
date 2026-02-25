import { NextResponse } from "next/server";
import { createSession, isEmailAllowed } from "@/lib/auth";
import { prisma } from "@/lib/db";

// Temporary dev login — bypasses magic link email
// Remove this route once Resend is configured
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const email = searchParams.get("email");

  if (!email || !isEmailAllowed(email)) {
    return NextResponse.json({ error: "Not allowed" }, { status: 403 });
  }

  // Find or create user
  let user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    user = await prisma.user.create({
      data: { email, name: email.split("@")[0] },
    });
  }

  await createSession(email);

  const appUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
  return NextResponse.redirect(`${appUrl}/dashboard`);
}
