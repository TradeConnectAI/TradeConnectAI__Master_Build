import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protectedPaths = [
  "/complete-options-beta",
  "/complete-options-demo",
  "/complete-options-login",
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const shouldProtect = protectedPaths.some((path) =>
    pathname === path || pathname.startsWith(`${path}/`)
  );

  if (!shouldProtect) {
    return NextResponse.next();
  }

  const authCookie = request.cookies.get("complete_options_auth")?.value;

  if (authCookie === "true") {
    return NextResponse.next();
  }

  const loginUrl = new URL("/complete-options-login", request.url);
  loginUrl.searchParams.set("next", pathname);

  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: [
    "/complete-options-beta/:path*",
    "/complete-options-demo/:path*",
    "/complete-options-login",
  ],
};
