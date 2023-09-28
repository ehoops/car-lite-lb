import { NextRequest, NextResponse } from "next/server";

const PUBLIC_FILE = /\.([a-zA-Z0-9]+$)/;

export function middleware(request: NextRequest) {
  // We need to clean up the pathName as for some reason the vercel hosted
  // middleware gets the locale in the path.
  // This is not the case when the code runs locally.

  const cleanPathName = request.nextUrl.pathname.startsWith("/default")
    ? request.nextUrl.pathname.replace("/default", "/").replace("//", "/")
    : request.nextUrl.pathname;

  const cleanerPathName = cleanPathName.startsWith("/en")
    ? cleanPathName.replace("/en", "/")
    : cleanPathName;

  const shouldHandleLocale =
    !PUBLIC_FILE.test(cleanerPathName) &&
    !cleanerPathName.includes("/api/") &&
    request.nextUrl.locale === "default";

  return shouldHandleLocale
    ? NextResponse.redirect(new URL(`${cleanerPathName}`, request.url))
    : undefined;
}
