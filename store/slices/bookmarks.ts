// @ts-nocheck
import { Item } from "@/types/githubResult";
import { StateCreator } from "zustand";
import { persist } from "zustand/middleware";

export interface BookmarkSlice {
  bookmarked: Item[];
  addBookmark: (item: Item) => void;
  removeBookmark: (id: number) => void;
}

export const createBookmarkSlice = persist<BookmarkSlice>(
  (set) => ({
    bookmarked: [],
    addBookmark: (item) => {
      set((state) => ({
        bookmarked: [...state.bookmarked, item],
      }));
    },
    removeBookmark: (id: number) => {
      set((state) => ({
        bookmarked: state.bookmarked.filter((item) => item.id !== id),
      }));
    },
  }),
  {
    name: "bookmarks",
    partialize: (state) => ({ bookmarked: state.bookmarked }),
  }
);
