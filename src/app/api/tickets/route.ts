import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/lib/auth";
import { prisma } from "@/lib/db";

export async function GET(request: NextRequest) {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const type = request.nextUrl.searchParams.get("type");
  const user = await prisma.user.findUnique({ where: { email: session.email } });
  if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

  const tickets = await prisma.ticket.findMany({
    where: {
      userId: user.id,
      ...(type ? { type } : {}),
    },
    include: { responses: { orderBy: { createdAt: "asc" } } },
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json(tickets);
}

export async function POST(request: NextRequest) {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { title, description, type, loomUrl, docUrl } = await request.json();

  if (!title || !description || !type) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const user = await prisma.user.findUnique({ where: { email: session.email } });
  if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

  const ticket = await prisma.ticket.create({
    data: {
      title,
      description,
      type,
      priority: "normal",
      loomUrl: loomUrl || null,
      docUrl: docUrl || null,
      userId: user.id,
    },
  });

  return NextResponse.json(ticket, { status: 201 });
}
