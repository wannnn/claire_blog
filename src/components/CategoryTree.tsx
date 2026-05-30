import React, { useMemo, useState } from "react";
import {
  buildCategoryTree,
  CategoryFilter,
  CategoryTreeNode,
  nodeMatchesFilter,
} from "@root/assets/category-tree";
import { PostMetadata } from "@root/assets/post-metadata";

interface CategoryTreeProps {
  posts: PostMetadata[];
  filter: CategoryFilter | null;
  onFilterChange: (filter: CategoryFilter | null) => void;
}

function TreeNode({
  node,
  depth,
  filter,
  onFilterChange,
}: {
  node: CategoryTreeNode;
  depth: number;
  filter: CategoryFilter | null;
  onFilterChange: (filter: CategoryFilter | null) => void;
}) {
  const hasChildren = node.kind !== "country" && node.children.length > 0;
  const [expanded, setExpanded] = useState(depth < 1);
  const isLeaf = node.kind === "country";
  const isSelected = isLeaf && nodeMatchesFilter(node, filter);
  const paddingLeft = depth * 12;

  const handleRowClick = () => {
    if (isLeaf) {
      if (isSelected) {
        onFilterChange(null);
        return;
      }
      onFilterChange({
        postType: node.postType,
        continent: node.continent,
        countrySlug: node.countrySlug,
      });
      return;
    }
    if (hasChildren) setExpanded((prev) => !prev);
  };

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setExpanded((prev) => !prev);
  };

  return (
    <li>
      <div
        className={`flex items-center gap-1 py-1.5 text-sm cursor-pointer select-none ${
          isSelected ? "font-medium text-black" : "text-gray-700 hover:text-black"
        }`}
        style={{ paddingLeft }}
        onClick={handleRowClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleRowClick();
          }
        }}
      >
        {hasChildren ? (
          <button
            type="button"
            onClick={handleToggle}
            className="w-4 shrink-0 text-xs text-gray-500 hover:text-black"
            aria-label={expanded ? "收合" : "展開"}
          >
            {expanded ? "▾" : "▸"}
          </button>
        ) : (
          <span className="w-4 shrink-0" />
        )}
        <span className="leading-snug">{node.label}</span>
      </div>

      {hasChildren && expanded && (
        <ul>
          {node.children.map((child) => (
            <TreeNode
              key={child.id}
              node={child}
              depth={depth + 1}
              filter={filter}
              onFilterChange={onFilterChange}
            />
          ))}
        </ul>
      )}
    </li>
  );
}

const CategoryTree = ({ posts, filter, onFilterChange }: CategoryTreeProps) => {
  const tree = useMemo(() => buildCategoryTree(posts), [posts]);

  return (
    <nav aria-label="文章分類" className="text-left w-full">
      <h2 className="text-sm font-medium tracking-widest uppercase mb-4 text-gray-900">
        分類
      </h2>
      <button
        type="button"
        onClick={() => onFilterChange(null)}
        className={`block w-full text-left text-sm py-1.5 mb-2 ${
          filter === null
            ? "font-medium text-black"
            : "text-gray-600 hover:text-black"
        }`}
      >
        全部文章
      </button>
      <ul>
        {tree.map((node) => (
          <TreeNode
            key={node.id}
            node={node}
            depth={0}
            filter={filter}
            onFilterChange={onFilterChange}
          />
        ))}
      </ul>
    </nav>
  );
};

export default CategoryTree;
