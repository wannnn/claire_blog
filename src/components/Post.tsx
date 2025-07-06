import { PostMetadata } from "@root/assets/post-metadata";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import Head from "next/head";

const BlogPost = ({ post }: { post: PostMetadata }) => {
  return (
    <>
      <Head>
        <title>Claire Ciao</title>
        <meta name="description" content={post.description} />
        <meta property="og:title" content={post.title} />
        <meta property="og:image" content={post.thumbnailUrl} />
        <meta property="og:type" content="article" />
      </Head>

      <Link
        href={`/${post.category}/${post.id}`}
        className="flex flex-col bg-white text-black p-4 rounded-sm shadow-lg"
      >
        <Image
          src={post.thumbnailUrl}
          alt={post.title}
          className="w-full h-64 object-cover mb-4"
          width={800}
          height={600}
        />
        <p className="text-gray-500 text-sm italic">{post.createdAt}</p>
        <h3 className="text-xl font-medium my-2">{post.title}</h3>
        <p className="text-gray-700 text-sm mb-4">{post.description}</p>
        {/* <div className="flex flex-wrap gap-2 text-gray-500 italic text-sm">
              {post.tags.map((tag, idx) => (
                <span key={idx}>{tag}</span>
              ))}
            </div> */}
      </Link>
    </>
  );
};

export default BlogPost;
