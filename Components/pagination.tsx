"use client";

import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange?: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const pages = [1, 2, 3, "...", totalPages];

  return (
    <div className="flex justify-between items-center mt-4 text-sm">
      <p
        className={`text-gray-500 cursor-pointer ${
          currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={() => currentPage > 1 && onPageChange?.(currentPage - 1)}
      >
        ← Previous
      </p>
      <div className="flex gap-1">
        {pages.map((page, idx) => (
          <button
            key={idx}
            onClick={() => typeof page === "number" && onPageChange?.(page)}
            className={`px-3 py-1 rounded-lg ${
              page === currentPage
                ? "bg-green-600 text-white"
                : "bg-gray-100 text-gray-700"
            }`}
            disabled={page === "..."}
          >
            {page}
          </button>
        ))}
      </div>
      <p
        className={`text-gray-500 cursor-pointer ${
          currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={() =>
          currentPage < totalPages && onPageChange?.(currentPage + 1)
        }
      >
        Next →
      </p>
    </div>
  );
};

export default Pagination;
