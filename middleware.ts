import { NextResponse, type NextRequest } from "next/server";

const MAIN_HOSTS = ["gabrielfragoso.com", "www.gabrielfragoso.com"];
const APPS_HOST = "apps.gabrielfragoso.com";

// Public URLs: English lives at the root, Portuguese under /pt. Internally
// the pages are served from app/[locale], so English is rewritten to /en.
//
//   gabrielfragoso.com        /  -> /en        /pt      -> /pt
//   apps.gabrielfragoso.com   /  -> /en/apps   /pt      -> /pt/apps
//   any other host (dev, previews) additionally serves /apps and /pt/apps.
export function middleware(request: NextRequest) {
  const host = (request.headers.get("host") ?? "").split(":")[0];
  const { pathname } = request.nextUrl;
  const rewrite = (path: string) =>
    NextResponse.rewrite(new URL(path, request.url));
  const redirect = (path: string, status = 308) =>
    NextResponse.redirect(new URL(path, request.url), status);

  // The internal /en prefix is never public.
  if (pathname === "/en" || pathname.startsWith("/en/")) {
    return redirect(pathname.slice(3) || "/");
  }

  if (host === APPS_HOST) {
    if (pathname === "/") return rewrite("/en/apps");
    if (pathname === "/pt") return rewrite("/pt/apps");
    if (pathname === "/apps") return redirect("/");
    if (pathname === "/pt/apps") return redirect("/pt");
    return NextResponse.next();
  }

  // The apps section moved to its own subdomain.
  if (MAIN_HOSTS.includes(host)) {
    if (pathname === "/apps") {
      return NextResponse.redirect(`https://${APPS_HOST}/`, 308);
    }
    if (pathname === "/pt/apps") {
      return NextResponse.redirect(`https://${APPS_HOST}/pt`, 308);
    }
  }

  if (pathname === "/") return rewrite("/en");
  if (pathname === "/apps") return rewrite("/en/apps");
  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/apps", "/pt", "/pt/apps", "/en", "/en/:path*"],
};
