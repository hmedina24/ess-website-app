import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { token } = await req.json();

  const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    body: new URLSearchParams({
      secret: process.env.TURNSTILE_SECRET_KEY!,
      response: token,
    }),
  });

  const data = await res.json();
  if (!data.success) {
    return NextResponse.json({ error: "Verification failed" }, { status: 400 });
  }

  return NextResponse.json({ success: true });
}