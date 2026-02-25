import { NextRequest, NextResponse } from "next/server";
import { verifyMagicLinkToken, createSession } from "@/lib/auth";
import { prisma } from "@/lib/db";

export async function GET(request: NextRequest) {
  const token = request.nextUrl.searchParams.get("token");

  if (!token) {
    return NextResponse.redirect(new URL("/?error=missing_token", request.url));
  }

  const result = await verifyMagicLinkToken(token);

  if (!result) {
    return NextResponse.redirect(
      new URL("/?error=invalid_or_expired", request.url)
    );
  }

  // Upsert user in database
  await prisma.user.upsert({
    where: { email: result.email },
    update: {},
    create: { email: result.email },
  });

  // Create session
  await createSession(result.email);

  return NextResponse.redirect(new URL("/dashboard", request.url));
}
