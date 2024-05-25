"use client";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { GitHubResult } from "@/types/githubResult";
import Card from "@/components/Card";
import debounce from "@/utils/debounce";
import Loading from "@/components/Card/Loading";

export default function Home() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState<GitHubResult>();
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Debounced API call
  const searchAPI = useCallback(
    debounce(async (query: string, pageNum: number) => {
      if (query) {
        setLoading(true);
        setError(null);
        try {
          const response = await axios.get(
            `https://api.github.com/search/repositories?q=${query}&per_page=10&page=${pageNum}`
          );
          setResults(response.data);
          setTotalPages(Math.ceil(response.data.total_count / 10));
          setLoading(false);
        } catch (error) {
          setLoading(false);
          setError("An error occurred while fetching data.");
          console.error("Error fetching data:", error);
        }
      }
    }, 500),
    []
  );

  useEffect(() => {
    searchAPI(search, page);
  }, [search, searchAPI, page]);

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  return (
    <main className="flex-1 p-6">
      <div className="max-w-md mx-auto">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border px-4 py-2 rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500"
          placeholder="Search GitHub username or repository"
          type="text"
        />
        <div className="space-y-4 mt-5">
          {loading ? (
            <>
              <Loading />
            </>
          ) : error ? (
            <div className="flex flex-col items-center justify-center h-[50vh]">
              <TriangleAlertIcon className="h-12 w-12 text-red-500 mb-4" />
              <h2 className="text-2xl font-bold text-gray-800 mb-2">{error}</h2>
              <p className="text-gray-500 mb-6" />
            </div>
          ) : (
            results?.items.map((item) => <Card key={item.id} {...item} />)
          )}
          {results && results?.items?.length === 0 && (
            <div className="flex flex-col items-center justify-center h-[50vh]">
              <SearchIcon className="h-12 w-12 text-gray-400 mb-4" />
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                No results found
              </h2>
              <p className="text-gray-500 mb-6">
                Try searching for a different username or repository.
              </p>
            </div>
          )}
        </div>
        <div className="mt-4 flex justify-center">
          {results && results?.items?.length > 0 && (
            <div className="flex gap-4">
              <button
                onClick={handlePrevPage}
                className="flex items-center text-sm"
                disabled={page === 1}
              >
                <PrevIcon />
                Previous
              </button>
              <button
                className="flex items-center text-sm"
                onClick={handleNextPage}
                disabled={page === totalPages}
              >
                Next
                <NextIcon />
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

const NextIcon = () => (
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
    <path d="m9 18 6-6-6-6" />
  </svg>
);

const PrevIcon = () => (
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
    <path d="m15 18-6-6 6-6" />
  </svg>
);

function TriangleAlertIcon({ className }: { className: string }) {
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
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
    </svg>
  );
}
function SearchIcon({ className }: { className: string }) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
