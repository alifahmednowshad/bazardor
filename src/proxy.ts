import { NextRequest, NextResponse } from "next/server";
import { getSessionCookie } from "better-auth/cookies";

export function proxy(request: NextRequest) {
  const sessionCookie = getSessionCookie(request);

  console.log("[AUTH DEBUG]", {
    pathname: request.nextUrl.pathname,
    hasSessionCookie: Boolean(sessionCookie),
  });

  if (!sessionCookie) {
    const url = new URL("/signin", request.url);
    url.searchParams.set("reason", "login");
    url.searchParams.set("next", request.nextUrl.pathname);

    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/product/:path*", "/my-profile/:path*"],
};
