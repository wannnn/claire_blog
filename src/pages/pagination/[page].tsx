import React from "react";
import HomePage from "@root/components/HomePage";
import { metadata } from "@root/assets/post-metadata";
import { ITEMS_PER_PAGE } from "@root/lib/pagination";

export function getStaticPaths() {
  const totalPages = Math.max(1, Math.ceil(metadata.length / ITEMS_PER_PAGE));
  const paths = Array.from({ length: Math.max(0, totalPages - 1) }, (_, i) => ({
    params: { page: String(i + 2) },
  }));

  return { paths, fallback: false };
}

export function getStaticProps() {
  return { props: {} };
}

const PaginationPage = () => {
  return <HomePage />;
};

export default PaginationPage;
