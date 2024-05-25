"use client";
import Card from "@/components/Card";
import { useAppStore } from "@/store";
import React from "react";

function Bookmarks() {
  const { bookmarked } = useAppStore();

  return (
    <main className="flex-1 p-6">
      <div className="max-w-md mx-auto">
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

export default Bookmarks;
