import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/lib/auth";
import { prisma } from "@/lib/db";

export async function GET(request: NextRequest) {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const type = request.nextUrl.searchParams.get("type");
  const user = await prisma.user.findUnique({ where: { email: session.email } });
  if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

  const submissions = await prisma.submission.findMany({
    where: {
      userId: user.id,
      ...(type ? { type } : {}),
    },
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json(submissions);
}

export async function POST(request: NextRequest) {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { type, data } = await request.json();

  if (!type || !data) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const user = await prisma.user.findUnique({ where: { email: session.email } });
  if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

  const submission = await prisma.submission.create({
    data: {
      type,
      data: JSON.stringify(data),
      userId: user.id,
    },
  });

  return NextResponse.json(submission, { status: 201 });
}
