"use client";

import { createSupabaseBrowserClient } from "@/lib/supabase/client";

type Bookmark = {
  id: string;
  title: string;
  url: string;
};

export default function BookmarkList({ bookmarks }: { bookmarks: Bookmark[] }) {
  const supabase = createSupabaseBrowserClient();

  const deleteBookmark = async (id: string) => {
    const { error } = await supabase
      .from("bookmarks")
      .delete()
      .eq("id", id);

    if (error) {
      console.error("Delete failed:", error);
      alert(error.message);
    }
  };

  if (!bookmarks.length) {
    return (
      <p className="text-sm text-gray-500">
        No bookmarks added yet.
      </p>
    );
  }

  return (
    <ul className="space-y-4">
      {bookmarks.map((b) => (
        <li
          key={b.id}
          className="bg-white border rounded-xl p-4 shadow-sm hover:shadow transition"
        >
          <div className="flex items-center justify-between gap-4">
            <div className="min-w-0 flex-1">
              <p className="font-medium text-gray-900 truncate">
                {b.title}
              </p>
              <p className="text-sm text-gray-500 truncate">
                {b.url}
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => deleteBookmark(b.id)}
                className="text-sm text-red-600 hover:underline"
              >
                Delete
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
