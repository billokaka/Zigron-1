"use client";

import { useState, useRef } from "react";
import { ArrowRight, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { submitContactForm } from "./actions";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const [loadedAt] = useState(() => Date.now());

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const formData = new FormData(e.currentTarget);
    formData.set("_t", loadedAt.toString());

    const result = await submitContactForm(formData);

    if (result.success) {
      setStatus("success");
      formRef.current?.reset();
    } else {
      setStatus("error");
      setErrorMsg(result.error || "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-16 h-16 bg-green-50 dark:bg-green-900/20 rounded-full flex items-center justify-center mb-6">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-black dark:text-white mb-2">Message Sent!</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-sm">
          Thank you for reaching out. Our engineering team will get back to you within 24 hours.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="text-primary font-semibold text-sm hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  const inputClass =
    "w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg p-3 text-sm focus:ring-primary focus:border-primary outline-none transition text-black dark:text-white";

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
      {/* Honeypot — hidden from real users, bots will fill it */}
      <div className="absolute opacity-0 -z-10 h-0 overflow-hidden" aria-hidden="true" tabIndex={-1}>
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-wider">
            First Name *
          </label>
          <input
            type="text"
            name="firstName"
            required
            placeholder="John"
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-wider">
            Last Name *
          </label>
          <input
            type="text"
            name="lastName"
            required
            placeholder="Doe"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-wider">
          Work Email *
        </label>
        <input
          type="email"
          name="email"
          required
          placeholder="john@company.com"
          className={inputClass}
        />
      </div>

      <div>
        <label className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-wider">
          Company
        </label>
        <input
          type="text"
          name="company"
          placeholder="Company Inc."
          className={inputClass}
        />
      </div>

      <div>
        <label className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-wider">
          I&apos;m interested in
        </label>
        <select
          name="interest"
          className={`${inputClass} text-gray-600 dark:text-gray-300`}
        >
          <option value="">Select an option...</option>
          <option value="iot">IoT Services</option>
          <option value="ai">AI & Data Services</option>
          <option value="engineering">Engineering Services</option>
          <option value="expertise">Industry Expertise</option>
          <option value="partnership">Partnership</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-wider">
          Tell us about your project *
        </label>
        <textarea
          name="message"
          required
          rows={5}
          maxLength={5000}
          placeholder="Describe your project goals, timeline, and any specific requirements..."
          className={`${inputClass} resize-none`}
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-wider">
            Budget Range
          </label>
          <select
            name="budget"
            className={`${inputClass} text-gray-600 dark:text-gray-300`}
          >
            <option value="">Select range...</option>
            <option value="$25k - $50k">$25k - $50k</option>
            <option value="$50k - $100k">$50k - $100k</option>
            <option value="$100k - $250k">$100k - $250k</option>
            <option value="$250k+">$250k+</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-wider">
            Timeline
          </label>
          <input
            type="text"
            name="timeline"
            placeholder="e.g., Q2 2026"
            className={inputClass}
          />
        </div>
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 text-red-600 bg-red-50 dark:bg-red-900/20 p-3 rounded-lg text-sm">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          {errorMsg}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-red-800 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-3.5 px-6 rounded-lg transition-colors text-sm"
      >
        {status === "sending" ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send Message
            <ArrowRight className="w-4 h-4" />
          </>
        )}
      </button>

      <p className="text-xs text-gray-500 text-center">
        By submitting, you agree to our privacy policy. We&apos;ll never share your information.
      </p>
    </form>
  );
}
