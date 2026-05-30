import React, { useEffect, useRef, useState } from "react";
import { SORT_OPTIONS, SortMode } from "@root/lib/post-list";

interface PostSortDropdownProps {
  value: SortMode;
  onChange: (sort: SortMode) => void;
}

const PostSortDropdown = ({ value, onChange }: PostSortDropdownProps) => {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const currentLabel =
    SORT_OPTIONS.find((o) => o.value === value)?.label ?? "Recent Posts";

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        rootRef.current &&
        !rootRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={rootRef} className="relative inline-block text-left">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-1 text-sm font-medium tracking-widest uppercase hover:text-gray-600"
        aria-expanded={open}
        aria-haspopup="listbox"
      >
        <span>{currentLabel}</span>
        <span
          className={`text-xs transition-transform ${open ? "rotate-180" : ""}`}
          aria-hidden
        >
          &#9662;
        </span>
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute left-0 z-20 mt-2 min-w-[12rem] border border-gray-200 bg-white py-1 shadow-md"
        >
          {SORT_OPTIONS.map((option) => (
            <li key={option.value} role="option" aria-selected={value === option.value}>
              <button
                type="button"
                className={`w-full px-4 py-2 text-left text-sm tracking-wide hover:bg-gray-50 ${
                  value === option.value ? "bg-gray-50 font-medium" : ""
                }`}
                onClick={() => {
                  onChange(option.value);
                  setOpen(false);
                }}
              >
                {option.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PostSortDropdown;
