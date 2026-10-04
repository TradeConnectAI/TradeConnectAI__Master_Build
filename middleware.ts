import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protectedPaths = [
  "/complete-options-beta",
  "/complete-options-demo",
  "/complete-options-login",
];

// Containment: internal admin pages and the lead-listing API are not public.
// They return 404 until a proper login is added.
function isBlocked(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (pathname === "/admin" || pathname.startsWith("/admin/")) return true;
  if (pathname === "/api/growth/leads" && request.method === "GET") return true;
  return false;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (isBlocked(request)) {
    return new NextResponse("Not found", { status: 404 });
  }

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
    "/admin",
    "/admin/:path*",
    "/api/growth/leads",
    "/complete-options-beta/:path*",
    "/complete-options-demo/:path*",
    "/complete-options-login",
  ],
};
