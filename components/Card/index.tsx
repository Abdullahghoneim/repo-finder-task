import formatStars from "@/utils/formatNumber";
import React from "react";

export default function Card({
  title,
  description,
  stars,
}: {
  title: string;
  description: string;
  stars: number;
}) {
  return (
    <div className="shadow border rounded-md p-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold"> {title} </h2>
          <p className="text-gray-500 text-sm"> {description} </p>
        </div>
      </div>

      <div className="flex items-center mt-5 justify-between">
        <div className="flex items-center space-x-2 text-gray-500">
          <StarIcon className="h-4 w-4" />
          <span>{formatStars(stars)}</span>
        </div>
        <button className="px-3 border items-center justify-center text-sm gap-2 py-1 rounded-md flex ">
          <Bookmark className="h-4 w-4" />
          Bookmark
        </button>
      </div>
    </div>
  );
}

function StarIcon({ className }: { className: string }) {
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
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

const Bookmark = ({ className }: { className: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
  </svg>
);
