import React from "react";
import {
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
} from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const generatePages = () => {
    const pages: (number | string)[] = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);

      if (currentPage > 3) {
        pages.push("...");
      }

      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      if (currentPage < totalPages - 2) {
        pages.push("...");
      }

      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <div className="flex justify-center items-center mt-10">

      <div className="flex items-center gap-2">

        {/* Previous */}

        <button
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${
            currentPage === 1
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : "bg-white dark:bg-slate-800 hover:bg-blue-600 hover:text-white shadow"
          }`}
        >
          <ChevronLeft size={18} />
          Prev
        </button>

        {/* Page Numbers */}

        {generatePages().map((page, index) =>
          page === "..." ? (
            <div
              key={index}
              className="px-3 py-2"
            >
              <MoreHorizontal size={18} />
            </div>
          ) : (
            <button
              key={index}
              onClick={() => onPageChange(Number(page))}
              className={`w-11 h-11 rounded-lg font-semibold transition ${
                currentPage === page
                  ? "bg-blue-600 text-white"
                  : "bg-white dark:bg-slate-800 hover:bg-blue-100 dark:hover:bg-slate-700 shadow"
              }`}
            >
              {page}
            </button>
          )
        )}

        {/* Next */}

        <button
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${
            currentPage === totalPages
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : "bg-white dark:bg-slate-800 hover:bg-blue-600 hover:text-white shadow"
          }`}
        >
          Next
          <ChevronRight size={18} />
        </button>

      </div>

    </div>
  );
}