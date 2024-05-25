import { create } from "zustand";
import { BookmarkSlice, createBookmarkSlice } from "./slices/bookmarks";

type StoreState = BookmarkSlice;

export const useAppStore = create<StoreState>()((...a) => ({
  ...createBookmarkSlice(...a),
}));
