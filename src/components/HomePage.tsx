import React from "react";
import SimpleNavbar from "./Header";
import BlogPost from "@root/components/Post";
import { metadata } from "@root/assets/post-metadata";
import { useRouter } from "next/router";
import Link from "next/link";

const itemsPerPage = 8;

const HomePage = () => {
  const router = useRouter();
  const page = parseInt(router.query.page?.toString() || "1");

  const skip = (page - 1) * itemsPerPage;
  const pagedPosts = metadata.slice(skip, skip + itemsPerPage);
  const totalPages = Math.ceil(metadata.length / itemsPerPage);

  return (
    <div className="min-h-screen bg-white text-black px-8 py-10">
      {/* Header */}
      <SimpleNavbar />

      {/* Blog Posts */}
      <div className="flex flex-col items-center mt-12">
        <div className="w-full max-w-6xl text-center mb-8">
          <div className="flex items-center space-x-2">
            <h2 className="text-sm font-medium tracking-widest uppercase">
              Recent Posts
            </h2>
            <span className="text-xs">&#9662;</span> {/* 小箭頭 */}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl w-full">
          {pagedPosts.map((post) => (
            <BlogPost key={post.id} post={post} />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-between w-full max-w-6xl mt-12">
          <Link
            href={`/pagination/${page - 1}`}
            className={`text-sm tracking-wider ${
              page <= 1 ? "invisible" : "hover:text-gray-600"
            }`}
          >
            ← PREVIOUS POSTS
          </Link>
          <Link
            href={`/pagination/${page + 1}`}
            className={`text-sm tracking-wider ${
              page >= totalPages ? "invisible" : "hover:text-gray-600"
            }`}
          >
            NEXT POSTS →
          </Link>
        </div>
      </div>
      {/* Footer */}
      <footer className="mt-20 border-t pt-8 text-center text-gray-500 text-sm">
        <div>Copyright © {new Date().getFullYear()} Claire Blog</div>
        <div className="mt-1">All rights reserved.</div>
      </footer>
    </div>
  );
};

export default HomePage;
