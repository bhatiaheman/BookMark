import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import LoginButton from "@/Components/LoginButton";

export default async function LoginPage() {
  const supabase = await createSupabaseServerClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  // If already logged in, never show login page
  if (session) {
    redirect("/");
  }

  return (
     <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white border rounded-2xl p-8 shadow-sm space-y-6">

        <div className="text-center space-y-2">
          <h1 className="text-2xl font-semibold text-gray-900">
            Smart Bookmarks
          </h1>
          <p className="text-sm text-gray-500">
            Save and access your bookmarks from anywhere
          </p>
        </div>

        <LoginButton />

        <p className="text-xs text-gray-400 text-center">
          Sign in securely using Google
        </p>
      </div>
    </div>
  );
}
