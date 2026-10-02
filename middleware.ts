import { NextResponse, type NextRequest } from "next/server";

const MAIN_HOST = "gabrielfragoso.com";
const APPS_HOST = "apps.gabrielfragoso.com";

export function middleware(request: NextRequest) {
  const host = (request.headers.get("host") ?? "").split(":")[0];
  const { pathname } = request.nextUrl;

  // apps.gabrielfragoso.com serves the /apps page at its root.
  if (host === APPS_HOST) {
    if (pathname === "/") {
      return NextResponse.rewrite(new URL("/apps", request.url));
    }
    if (pathname === "/apps") {
      return NextResponse.redirect(new URL("/", request.url));
    }
    return NextResponse.next();
  }

  // Old /apps path on the main domain moves to the subdomain.
  if ((host === MAIN_HOST || host === `www.${MAIN_HOST}`) && pathname === "/apps") {
    return NextResponse.redirect(`https://${APPS_HOST}/`, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/apps"],
};
