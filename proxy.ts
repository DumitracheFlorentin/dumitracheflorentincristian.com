import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const ALLOWED_PROJECT_SLUGS = [
  "circle-resume",
  // "unde-stau-studentii", // maintenance mode
];
const ALLOWED_WORK_EXPERIENCE_SLUGS = ["luxoft", "decathlon"];

/** Path has a file extension (static asset), so allow without redirect. */
const STATIC_EXT =
  /\.(mp4|webm|mov|png|jpg|jpeg|gif|webp|svg|ico|woff2?|css|js)(\?|$)/i;
function isStaticAsset(pathname: string): boolean {
  return STATIC_EXT.test(pathname);
}

function getFirstSegment(path: string, prefix: string): string {
  return path.slice(prefix.length).replace(/\/$/, "").split("/")[0];
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Static assets under /projects/ or /work-experience/ (e.g. videos, images) — allow
  if (isStaticAsset(pathname)) {
    return NextResponse.next();
  }

  // Projects: only /projects/circle-resume
  // (unde-stau-studentii is in maintenance mode)
  if (pathname === "/projects") {
    return NextResponse.redirect(new URL("/", request.url));
  }
  if (pathname.startsWith("/projects/")) {
    const slug = getFirstSegment(pathname, "/projects/");
    if (!ALLOWED_PROJECT_SLUGS.includes(slug)) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  // Work experience: only /work-experience/luxoft and /work-experience/decathlon
  if (pathname === "/work-experience") {
    return NextResponse.redirect(new URL("/", request.url));
  }
  if (pathname.startsWith("/work-experience/")) {
    const slug = getFirstSegment(pathname, "/work-experience/");
    if (!ALLOWED_WORK_EXPERIENCE_SLUGS.includes(slug)) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  return NextResponse.next();
}
