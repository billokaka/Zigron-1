"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const CONSENT_KEY = "zigron-cookie-consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY);
    if (!consent) {
      // Small delay so it doesn't flash on initial load
      const timer = setTimeout(() => setVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(CONSENT_KEY, "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem(CONSENT_KEY, "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-[9998] p-4 sm:p-6"
    >
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-xl shadow-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex-1">
          <p className="text-sm text-zigron-black font-medium mb-1">
            We use cookies
          </p>
          <p className="text-sm text-zigron-gray">
            We use cookies to improve your experience. By continuing to browse,
            you agree to our{" "}
            <Link
              href="/cookie-policy"
              className="text-zigron-red hover:underline font-medium"
            >
              Cookie Policy
            </Link>
            .
          </p>
        </div>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={decline}
            className="text-sm font-semibold text-zigron-gray hover:text-zigron-black px-4 py-2 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors"
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="text-sm font-semibold text-white bg-zigron-red hover:bg-red-800 px-4 py-2 rounded-lg transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
