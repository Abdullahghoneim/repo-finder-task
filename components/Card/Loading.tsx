import React from "react";

export default function Loading() {
  return (
    <div className="shadow border rounded-md p-4 animate-pulse">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2"></div>
        </div>
      </div>
      <div className="flex items-center mt-5 justify-between">
        <div className="flex items-center space-x-2 text-gray-300">
          <div className="h-4 w-4 bg-gray-300 rounded"></div>
          <div className="h-4 bg-gray-300 rounded w-10"></div>
        </div>
        <div className="px-3 border items-center justify-center text-sm gap-2 py-1 rounded-md flex bg-gray-300 h-6 w-24"></div>
      </div>
    </div>
  );
}
