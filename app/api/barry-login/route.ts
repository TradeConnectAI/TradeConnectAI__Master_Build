import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const username = String(body?.username || "").trim();
    const password = String(body?.password || "").trim();

    // Credentials must come from env — no hardcoded shipping defaults.
    const validUser = process.env.BARRY_BETA_USER;
    const validPass = process.env.BARRY_BETA_PASSWORD;

    if (!validUser || !validPass) {
      return NextResponse.json(
        { ok: false, message: "Beta login is not configured." },
        { status: 503 }
      );
    }

    if (username !== validUser || password !== validPass) {
      return NextResponse.json(
        { ok: false, message: "Invalid login details." },
        { status: 401 }
      );
    }

    const response = NextResponse.json({ ok: true });

    response.cookies.set("barry_beta_auth", "yes", {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 12,
    });

    return response;
  } catch {
    return NextResponse.json(
      { ok: false, message: "Login failed." },
      { status: 500 }
    );
  }
}
