// middleware.ts
import { NextRequest, NextResponse } from 'next/server'

const PUBLIC_FILE = /\.(.*)$/;
const DEFAULT_LOCALE = 'en';
const SUPPORTED_LOCALES = ['en', 'fa']; // adjust to your supported languages

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip public files, API routes, and static paths
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  // Check if locale is already in the path
  const pathnameIsMissingLocale = SUPPORTED_LOCALES.every(
    (locale) => !pathname.startsWith(`/${locale}`)
  );

  if (pathnameIsMissingLocale) {
    // Try get locale from cookie
    const localeFromCookie = request.cookies.get('NEXT_LOCALE')?.value;

    const locale = localeFromCookie && SUPPORTED_LOCALES.includes(localeFromCookie)
      ? localeFromCookie
      : DEFAULT_LOCALE;

    // Rewrite to locale prefixed path and set cookie
    const response = NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
    response.cookies.set('NEXT_LOCALE', locale, {
      path: '/',
      maxAge: 60 * 60 * 24 * 365, // 1 year
    });

    return response;
  }

  return NextResponse.next();
}
