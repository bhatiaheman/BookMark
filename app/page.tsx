import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import AddBookmark from "@/Components/AddBookMarks";
import BookmarkList from "@/Components/BookMarkList";
import Realtime from "@/Components/Realtime";
import LogoutButton from "@/Components/LogoutButton";

export default async function HomePage() {
  const supabase = await createSupabaseServerClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) redirect("/login");

  const { data: bookmarks, error } = await supabase
    .from("bookmarks")
    .select("*")

  if (error) {
    console.error("Failed to fetch bookmarks:", error);
  }

  return (
    <div className="min-h-screen bg-gray-200">
      <Realtime />

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-8">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h1 className="text-2xl font-semibold text-gray-900">
              Smart Bookmarks
            </h1>
            <p className="text-sm text-gray-500">
              Logged in as {session.user.user_metadata.full_name}
            </p>
          </div>

          <LogoutButton />
        </div>

        <AddBookmark />
        <BookmarkList bookmarks={bookmarks ?? []} />
      </div>
    </div>
  );
}
