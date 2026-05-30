import { PostMetadata } from "@root/assets/post-metadata";
import { CategoryFilter } from "@root/assets/category-tree";
import { getContinentForCountry } from "@root/assets/country-meta";

export type SortMode = "recent" | "newest" | "oldest";

export const SORT_OPTIONS: { value: SortMode; label: string }[] = [
  { value: "recent", label: "Recent Posts" },
  { value: "newest", label: "Date (newest first)" },
  { value: "oldest", label: "Date (oldest first)" },
];

export function filterPosts(
  posts: PostMetadata[],
  filter: CategoryFilter | null
): PostMetadata[] {
  if (!filter) return posts;

  return posts.filter((post) => {
    if (post.postType !== filter.postType) return false;

    const continent = getContinentForCountry(post.country);
    if (filter.countrySlug) {
      return post.country === filter.countrySlug;
    }
    if (filter.continent) {
      return continent === filter.continent;
    }
    return true;
  });
}

export function sortPosts(
  posts: PostMetadata[],
  sort: SortMode,
  originalOrder: PostMetadata[]
): PostMetadata[] {
  if (sort === "recent") {
    const orderIndex = new Map(originalOrder.map((p, i) => [p.id, i]));
    return [...posts].sort(
      (a, b) => (orderIndex.get(a.id) ?? 0) - (orderIndex.get(b.id) ?? 0)
    );
  }

  const sorted = [...posts].sort(
    (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
  );
  return sort === "newest" ? sorted.reverse() : sorted;
}

export function parseSortMode(value: string | string[] | undefined): SortMode {
  const raw = Array.isArray(value) ? value[0] : value;
  if (raw === "newest" || raw === "oldest") return raw;
  return "recent";
}
