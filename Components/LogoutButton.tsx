"use client";

import { createSupabaseBrowserClient } from "@/lib/supabase/client";

export default function LogoutButton() {
  const supabase = createSupabaseBrowserClient();

  const logout = async () => {
    await supabase.auth.signOut();
    window.location.href = "/login";
  };

  return (
    <button className="text-sm text-gray-600 hover:underline" onClick={logout}>
      Logout
    </button>
  );
}
