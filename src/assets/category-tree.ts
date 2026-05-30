import { PostMetadata } from "@root/assets/post-metadata";
import {
  CONTINENT_LABELS,
  CONTINENT_ORDER,
  COUNTRY_META,
  ContinentId,
  formatCountryLabel,
} from "@root/assets/country-meta";

export type PostType = "deep-observation" | "travel-diary";

export const POST_TYPE_LABELS: Record<PostType, string> = {
  "deep-observation": "深度觀察",
  "travel-diary": "旅遊流水帳",
};

const POST_TYPE_ORDER: PostType[] = ["deep-observation", "travel-diary"];

export type CategoryTreeNode =
  | {
      kind: "post-type";
      id: string;
      postType: PostType;
      label: string;
      children: CategoryTreeNode[];
    }
  | {
      kind: "continent";
      id: string;
      postType: PostType;
      continent: ContinentId;
      label: string;
      children: CategoryTreeNode[];
    }
  | {
      kind: "country";
      id: string;
      postType: PostType;
      continent: ContinentId;
      countrySlug: string;
      label: string;
    };

export function buildCategoryTree(posts: PostMetadata[]): CategoryTreeNode[] {
  const countriesByTypeContinent = new Map<string, Set<string>>();

  for (const post of posts) {
    const continent = COUNTRY_META[post.country]?.continent;
    if (!continent) continue;
    const key = `${post.postType}:${continent}`;
    if (!countriesByTypeContinent.has(key)) {
      countriesByTypeContinent.set(key, new Set());
    }
    countriesByTypeContinent.get(key)!.add(post.country);
  }

  const tree: CategoryTreeNode[] = [];

  for (const postType of POST_TYPE_ORDER) {
    const continentNodes: CategoryTreeNode[] = [];

    for (const continent of CONTINENT_ORDER) {
      const mapKey = `${postType}:${continent}`;
      const countrySlugs = countriesByTypeContinent.get(mapKey);
      if (!countrySlugs?.size) continue;

      const countryNodes: CategoryTreeNode[] = [...countrySlugs]
        .sort((a, b) =>
          formatCountryLabel(a).localeCompare(formatCountryLabel(b), "en")
        )
        .map((slug) => ({
          kind: "country" as const,
          id: `${postType}:${continent}:${slug}`,
          postType,
          continent,
          countrySlug: slug,
          label: formatCountryLabel(slug),
        }));

      continentNodes.push({
        kind: "continent",
        id: `${postType}:${continent}`,
        postType,
        continent,
        label: CONTINENT_LABELS[continent],
        children: countryNodes,
      });
    }

    tree.push({
      kind: "post-type",
      id: postType,
      postType,
      label: POST_TYPE_LABELS[postType],
      children: continentNodes,
    });
  }

  return tree;
}

export type CategoryFilter = {
  postType: PostType;
  continent?: ContinentId;
  countrySlug?: string;
};

export function categoryFilterFromQuery(query: {
  type?: string | string[];
  continent?: string | string[];
  country?: string | string[];
}): CategoryFilter | null {
  const type = Array.isArray(query.type) ? query.type[0] : query.type;
  if (type !== "deep-observation" && type !== "travel-diary") {
    return null;
  }

  const continentRaw = Array.isArray(query.continent)
    ? query.continent[0]
    : query.continent;
  const countryRaw = Array.isArray(query.country)
    ? query.country[0]
    : query.country;

  const filter: CategoryFilter = { postType: type };

  if (
    continentRaw &&
    continentRaw in CONTINENT_LABELS &&
    typeof continentRaw === "string"
  ) {
    filter.continent = continentRaw as ContinentId;
  }

  if (countryRaw && typeof countryRaw === "string" && COUNTRY_META[countryRaw]) {
    filter.countrySlug = countryRaw;
    const meta = COUNTRY_META[countryRaw];
    filter.continent = meta.continent;
  }

  return filter;
}

export function categoryFilterToQuery(
  filter: CategoryFilter | null
): Record<string, string> {
  if (!filter) return {};
  const query: Record<string, string> = { type: filter.postType };
  if (filter.continent) query.continent = filter.continent;
  if (filter.countrySlug) query.country = filter.countrySlug;
  return query;
}

export function nodeMatchesFilter(
  node: CategoryTreeNode,
  filter: CategoryFilter | null
): boolean {
  if (!filter) return false;
  if (node.kind === "post-type") {
    return (
      filter.postType === node.postType &&
      !filter.continent &&
      !filter.countrySlug
    );
  }
  if (node.kind === "continent") {
    return (
      filter.postType === node.postType &&
      filter.continent === node.continent &&
      !filter.countrySlug
    );
  }
  return (
    filter.postType === node.postType &&
    filter.continent === node.continent &&
    filter.countrySlug === node.countrySlug
  );
}
