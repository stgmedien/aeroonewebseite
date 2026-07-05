import { NextResponse, type NextRequest } from "next/server";

/**
 * Locale-Routing ohne Prefix für die Default-Sprache:
 * - /en/*  → durchlassen ([lang]=en)
 * - /de/*  → 308-Redirect auf die prefixlose URL (kanonisch)
 * - alles andere → intern auf /de/* rewriten (URL bleibt deutsch/prefixlos)
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/en" || pathname.startsWith("/en/")) {
    return;
  }

  if (pathname === "/de" || pathname.startsWith("/de/")) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.replace(/^\/de/, "") || "/";
    return NextResponse.redirect(url, 308);
  }

  const url = request.nextUrl.clone();
  url.pathname = `/de${pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  // api, Next-Interna und alle Dateien (mit Punkt: media, icons, sitemap.xml …) auslassen
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
