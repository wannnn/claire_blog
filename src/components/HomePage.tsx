import React, { useEffect, useMemo } from "react";
import SimpleNavbar from "./Header";
import BlogPost from "@root/components/Post";
import { metadata } from "@root/assets/post-metadata";
import { useRouter } from "next/router";
import Link from "next/link";
import PostSortDropdown from "@root/components/PostSortDropdown";
import CategoryTree from "@root/components/CategoryTree";
import {
  categoryFilterFromQuery,
  categoryFilterToQuery,
  type CategoryFilter,
} from "@root/assets/category-tree";
import {
  filterPosts,
  parseSortMode,
  sortPosts,
  SortMode,
} from "@root/lib/post-list";
import {
  getCurrentPage,
  ITEMS_PER_PAGE,
  paginationPath,
} from "@root/lib/pagination";

function buildListQuery(
  sort: SortMode,
  filter: CategoryFilter | null
): Record<string, string> {
  const query = { ...categoryFilterToQuery(filter) };
  if (sort !== "recent") query.sort = sort;
  return query;
}

const HomePage = () => {
  const router = useRouter();
  const page = getCurrentPage(router);
  const sort = parseSortMode(router.query.sort);

  const categoryFilter = useMemo(
    () => categoryFilterFromQuery(router.query),
    [
      router.query.type,
      router.query.continent,
      router.query.country,
      router.isReady,
    ]
  );

  const filteredAndSorted = useMemo(() => {
    const filtered = filterPosts(metadata, categoryFilter);
    return sortPosts(filtered, sort, metadata);
  }, [categoryFilter, sort]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredAndSorted.length / ITEMS_PER_PAGE)
  );
  const safePage = Math.min(Math.max(1, page), totalPages);
  const skip = (safePage - 1) * ITEMS_PER_PAGE;
  const pagedPosts = filteredAndSorted.slice(skip, skip + ITEMS_PER_PAGE);

  const listQuery = buildListQuery(sort, categoryFilter);

  const navigateList = (next: {
    sort?: SortMode;
    filter?: CategoryFilter | null;
    page?: number;
  }) => {
    const nextSort = next.sort ?? sort;
    const nextFilter =
      next.filter !== undefined ? next.filter : categoryFilter;
    const nextPage = next.page ?? safePage;
    const query = buildListQuery(nextSort, nextFilter);
    void router.push({ pathname: paginationPath(nextPage), query });
  };

  const pageHref = (targetPage: number) => ({
    pathname: paginationPath(targetPage),
    query: listQuery,
  });

  useEffect(() => {
    if (!router.isReady || page === safePage) return;
    const query = buildListQuery(sort, categoryFilter);
    void router.replace({ pathname: paginationPath(safePage), query });
  }, [
    router.isReady,
    page,
    safePage,
    sort,
    categoryFilter,
    router,
  ]);

  return (
    <div className="min-h-screen bg-white text-black px-8 py-10">
      <SimpleNavbar />

      <div className="flex flex-col items-center mt-12">
        <div className="w-full max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-x-6 lg:gap-x-16 gap-y-0">
            <div className="lg:col-span-8 lg:row-start-1 mb-8">
              <PostSortDropdown
                value={sort}
                onChange={(nextSort) => navigateList({ sort: nextSort, page: 1 })}
              />
            </div>

            <div className="lg:col-span-8 lg:row-start-2">
              {pagedPosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  {pagedPosts.map((post) => (
                    <BlogPost key={post.id} post={post} />
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-sm py-12 text-center">
                  此分類尚無文章
                </p>
              )}
            </div>

            <aside className="lg:col-span-2 lg:row-start-2 mt-10 lg:mt-0 flex justify-start lg:pl-6">
              <CategoryTree
                posts={metadata}
                filter={categoryFilter}
                onFilterChange={(nextFilter) =>
                  navigateList({ filter: nextFilter, page: 1 })
                }
              />
            </aside>

            <div className="lg:col-span-8 lg:row-start-3 flex justify-between mt-12">
              <Link
                href={pageHref(Math.max(1, safePage - 1))}
                className={`text-sm tracking-wider ${
                  safePage <= 1 ? "invisible" : "hover:text-gray-600"
                }`}
              >
                ← PREVIOUS POSTS
              </Link>
              <Link
                href={pageHref(Math.min(totalPages, safePage + 1))}
                className={`text-sm tracking-wider ${
                  safePage >= totalPages ? "invisible" : "hover:text-gray-600"
                }`}
              >
                NEXT POSTS →
              </Link>
            </div>
          </div>
        </div>
      </div>

      <footer className="mt-20 border-t pt-8 text-center text-gray-500 text-sm">
        <div>Copyright © {new Date().getFullYear()} Claire Blog</div>
        <div className="mt-1">All rights reserved.</div>
      </footer>
    </div>
  );
};

export default HomePage;
