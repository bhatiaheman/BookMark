"use client";

import { createSupabaseBrowserClient } from "@/lib/supabase/client";

export default function LoginButton() {
  const supabase = createSupabaseBrowserClient();

  const handleGoogleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${location.origin}/auth/callback`,
      },
    });
  };

  return (
    <button
      onClick={handleGoogleLogin}
      className="w-full flex items-center justify-center gap-3 rounded-md border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-200 transition focus:outline-none focus:ring-2 focus:ring-black"
    >
      {/* Google Icon */}
      <svg
        viewBox="0 0 24 24"
        width="18"
        height="18"
        aria-hidden="true"
      >
        <path
          fill="#4285F4"
          d="M23.49 12.27c0-.81-.07-1.59-.2-2.34H12v4.44h6.47a5.53 5.53 0 01-2.4 3.63v3.01h3.88c2.27-2.09 3.54-5.18 3.54-8.74z"
        />
        <path
          fill="#34A853"
          d="M12 24c3.24 0 5.96-1.07 7.95-2.89l-3.88-3.01c-1.08.72-2.46 1.15-4.07 1.15-3.13 0-5.79-2.11-6.74-4.94H1.27v3.11A11.997 11.997 0 0012 24z"
        />
        <path
          fill="#FBBC05"
          d="M5.26 14.31A7.21 7.21 0 015.02 12c0-.8.14-1.57.24-2.31V6.58H1.27A11.996 11.996 0 000 12c0 1.93.46 3.75 1.27 5.42l3.99-3.11z"
        />
        <path
          fill="#EA4335"
          d="M12 4.77c1.76 0 3.35.61 4.6 1.8l3.45-3.45C17.96.95 15.24 0 12 0 7.31 0 3.2 2.69 1.27 6.58l3.99 3.11C6.21 6.88 8.87 4.77 12 4.77z"
        />
      </svg>

      <span>Sign in with Google</span>
    </button>
  );
}
