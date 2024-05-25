"use client";
import Card from "@/components/Card";
import { useAppStore } from "@/store";
import React from "react";

function Bookmarks() {
  const { bookmarked, clearBookmarks } = useAppStore();

  const handleClear = () => {
    clearBookmarks();
  };

  return (
    <main className="flex-1 p-6">
      <div className="max-w-md mx-auto">
        {bookmarked?.length > 0 && (
          <div className="flex justify-between">
            <h1 className="text-xl font-bold text-gray-800">Bookmarks</h1>
            <button
              onClick={handleClear}
              className="flex gap-2 items-center text-sm border px-4"
            >
              Clear All
              <ClearIcon />
            </button>
          </div>
        )}

        <div className="space-y-4 mt-5">
          {bookmarked.map((item) => (
            <Card key={item.id} {...item} />
          ))}
          {bookmarked.length === 0 && (
            <div className="flex flex-col items-center justify-center h-[50vh]">
              <BookmarkIcon className="h-12 w-12 text-gray-400 mb-4" />
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                No bookmarks found
              </h2>
              <p className="text-gray-500 mb-6">
                Start bookmarking repositories to see them here.
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

const BookmarkIcon = ({ className }: { className: string }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2l2.29 7.74h7.71l-6.29 4.82 2.29 7.74-6.29-4.82-6.29 4.82 2.29-7.74-6.29-4.82h7.71z" />
    </svg>
  );
};

const ClearIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
      <line x1="10" x2="10" y1="11" y2="17" />
      <line x1="14" x2="14" y1="11" y2="17" />
    </svg>
  );
};

export default Bookmarks;
