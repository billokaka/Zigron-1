"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";

const CONSENT_KEY = "zigron-cookie-consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const acceptRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY);
    if (!consent) {
      // Small delay so it doesn't flash on initial load
      const timer = setTimeout(() => setVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  // Focus the accept button when dialog becomes visible
  useEffect(() => {
    if (visible) {
      acceptRef.current?.focus();
    }
  }, [visible]);

  // Trap focus within the dialog
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key !== "Tab" || !dialogRef.current) return;

    const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
      'button, a[href], [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
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
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-desc"
      onKeyDown={handleKeyDown}
      className="fixed bottom-0 left-0 right-0 z-[9998] p-4 sm:p-6"
    >
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-xl shadow-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex-1">
          <p id="cookie-consent-title" className="text-sm text-zigron-black font-medium mb-1">
            We use cookies
          </p>
          <p id="cookie-consent-desc" className="text-sm text-zigron-gray">
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
            type="button"
            onClick={decline}
            className="text-sm font-semibold text-zigron-gray hover:text-zigron-black px-4 py-2 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors"
          >
            Decline
          </button>
          <button
            ref={acceptRef}
            type="button"
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
