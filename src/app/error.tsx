"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-zigron-light px-6">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-zigron-red mb-4">Error</h1>
        <h2 className="text-xl font-semibold text-zigron-black mb-4">
          Something went wrong
        </h2>
        <p className="text-zigron-gray mb-8">
          An unexpected error occurred. Please try again or return to the
          homepage.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="bg-zigron-red hover:bg-red-800 text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            Try again
          </button>
          <Link
            href="/"
            className="border-2 border-zigron-black text-zigron-black hover:bg-zigron-black hover:text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}
