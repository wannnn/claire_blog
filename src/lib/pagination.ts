import type { NextRouter } from "next/router";

export const ITEMS_PER_PAGE = 8;

/** Path for list page 1 is `/`, page 2+ is `/pagination/{n}/` (trailingSlash enabled). */
export function paginationPath(page: number): string {
  if (page <= 1) return "/";
  return `/pagination/${page}/`;
}

export function getCurrentPage(router: NextRouter): number {
  if (!router.isReady) return 1;
  const raw = router.query.page;
  const value = Array.isArray(raw) ? raw[0] : raw;
  const parsed = parseInt(value ?? "1", 10);
  return Number.isFinite(parsed) && parsed >= 1 ? parsed : 1;
}
