"use client";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import useSWR from "swr";
import axios from "axios";
import { GitHubResult } from "@/types/githubResult";
import Card from "@/components/Card";

function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

export default function Home() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState<GitHubResult>();

  // Debounced API call
  const searchAPI = useCallback(
    debounce(async (query: string) => {
      if (query) {
        try {
          const response = await axios.get(
            `https://api.github.com/search/repositories?q=${query}`
          );
          setResults(response.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    }, 500),
    []
  );

  useEffect(() => {
    searchAPI(search);
  }, [search, searchAPI]);

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
          {results?.items.map((item) => (
            <Card
              key={item.id}
              title={item.full_name}
              description={item.description}
              stars={item.stargazers_count}
            />
          ))}
          {/* <Card title={"aaaa"} /> */}
        </div>
      </div>
    </main>
  );
}
