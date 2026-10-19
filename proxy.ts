import { NextResponse, type NextRequest } from "next/server";
import { DEFAULT_LOCALE, LOCALES, LOCALE_COOKIE, hasLocale, type Locale } from "@/lib/i18n/config";

// Picks the visitor's language: saved choice first, then browser preferences
function getLocale(request: NextRequest): Locale {
  const saved = request.cookies.get(LOCALE_COOKIE)?.value;
  if (saved && hasLocale(saved)) return saved;

  const preferred = (request.headers.get("accept-language") ?? "")
    .split(",")
    .map((entry) => {
      const [tag, quality] = entry.trim().split(";q=");
      return { language: tag.split("-")[0].toLowerCase(), quality: quality ? Number(quality) : 1 };
    })
    .sort((a, b) => b.quality - a.quality);

  return preferred.find(({ language }) => hasLocale(language))?.language as Locale ?? DEFAULT_LOCALE;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const current = LOCALES.find(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );
  if (current) {
    // Remember the language the visitor is reading for their next visit to "/"
    const response = NextResponse.next();
    if (request.cookies.get(LOCALE_COOKIE)?.value !== current) {
      response.cookies.set(LOCALE_COOKIE, current, { path: "/", maxAge: 60 * 60 * 24 * 365, sameSite: "lax" });
    }
    return response;
  }

  request.nextUrl.pathname = `/${getLocale(request)}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  // Skip Next internals and public files (anything with an extension)
  matcher: ["/((?!_next|.*\\..*).*)"],
};
