import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  if (!pathname.startsWith("/install-skips-demo")) {
    return NextResponse.next();
  }

  const username = process.env.INSTALL_DEMO_USER || "install";
  const password = process.env.INSTALL_DEMO_PASSWORD || "install2026";

  const authHeader = request.headers.get("authorization");

  if (!authHeader || !authHeader.startsWith("Basic ")) {
    return new NextResponse("Authentication required", {
      status: 401,
      headers: {
        "WWW-Authenticate": 'Basic realm="Install Skips Demo"',
      },
    });
  }

  const encoded = authHeader.split(" ")[1];
  const decoded = atob(encoded);
  const [givenUser, givenPassword] = decoded.split(":");

  if (givenUser === username && givenPassword === password) {
    return NextResponse.next();
  }

  return new NextResponse("Invalid username or password", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Install Skips Demo"',
    },
  });
}

export const config = {
  matcher: ["/install-skips-demo/:path*"],
};
