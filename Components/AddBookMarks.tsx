"use client";

import { useState } from "react";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

export default function AddBookmark() {
  const supabase = createSupabaseBrowserClient();
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const router = useRouter();

  const addBookmark = async () => {
    if (!title || !url) return;

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      alert("Not authenticated");
      return;
    }

    const { error } = await supabase.from("bookmarks").insert({
      title,
      url,
      user_auth_id: user.id, 
    });

    if (error) {
      console.error(error);
      alert(error.message);
    }

    setTitle("");
    setUrl("");
    router.refresh();
  };

  return (
    <div className="bg-white border rounded-xl p-4 space-y-3 shadow-sm">
      <h2 className="text-sm font-medium text-gray-700">
        Add a new bookmark
      </h2>

      <div className="flex flex-col sm:flex-row gap-3">
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="flex-1 rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black bg-gray-100 text-black"
        />

        <input
          placeholder="URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="flex-1 rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black bg-gray-100 text-black"
        />

        <button
          onClick={addBookmark}
          disabled={!title || !url}
          className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white disabled:opacity-100 hover:bg-blue-900"
        >
          Add
        </button>
      </div>
    </div>
  );
}
