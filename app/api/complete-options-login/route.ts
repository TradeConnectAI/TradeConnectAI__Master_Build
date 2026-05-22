import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const password = String(body?.password || "");

    const validPassword =
      process.env.COMPLETE_OPTIONS_PASSWORD || "complete2026";

    if (password !== validPassword) {
      return NextResponse.json(
        { ok: false, message: "Wrong password" },
        { status: 401 }
      );
    }

    const response = NextResponse.json({ ok: true });

    response.cookies.set("complete_options_auth", "1", {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 8,
    });

    return response;
  } catch {
    return NextResponse.json(
      { ok: false, message: "Login failed" },
      { status: 500 }
    );
  }
}
