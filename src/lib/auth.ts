import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || "dev-secret-change-in-production-min-32-chars!"
);

const ALLOWED_EMAILS = (process.env.ALLOWED_EMAILS || "")
  .split(",")
  .map((e) => e.trim().toLowerCase())
  .filter(Boolean);

const SESSION_COOKIE = "smos_session";
const SESSION_DURATION = 7 * 24 * 60 * 60; // 7 days in seconds

export function isEmailAllowed(email: string): boolean {
  if (ALLOWED_EMAILS.length === 0) return true; // No whitelist = allow all (dev mode)
  return ALLOWED_EMAILS.includes(email.toLowerCase().trim());
}

export async function createMagicLinkToken(email: string): Promise<string> {
  return new SignJWT({ email: email.toLowerCase().trim(), purpose: "magic-link" })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("15m")
    .sign(SECRET);
}

export async function verifyMagicLinkToken(
  token: string
): Promise<{ email: string } | null> {
  try {
    const { payload } = await jwtVerify(token, SECRET);
    if (payload.purpose !== "magic-link") return null;
    return { email: payload.email as string };
  } catch {
    return null;
  }
}

export async function createSession(email: string): Promise<void> {
  const token = await new SignJWT({ email, purpose: "session" })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(`${SESSION_DURATION}s`)
    .sign(SECRET);

  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: SESSION_DURATION,
    path: "/",
  });
}

export async function getSession(): Promise<{ email: string } | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_COOKIE)?.value;
  if (!token) return null;

  try {
    const { payload } = await jwtVerify(token, SECRET);
    if (payload.purpose !== "session") return null;
    return { email: payload.email as string };
  } catch {
    return null;
  }
}

export async function destroySession(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE);
}

export async function requireAuth(): Promise<{ email: string }> {
  const session = await getSession();
  if (!session) redirect("/");
  return session;
}
