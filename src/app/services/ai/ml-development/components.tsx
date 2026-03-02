"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui";
import type { FAQ } from "./data";

// ============================================================================
// FAQ ACCORDION
// ============================================================================

interface FAQAccordionProps {
  faqs: FAQ[];
}

export function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div
          key={faq.question}
          className="bg-white dark:bg-surface-dark rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full text-left p-6 flex items-center justify-between gap-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
          >
            <span className="font-bold text-black dark:text-white">
              {faq.question}
            </span>
            <ChevronDown
              className={`w-5 h-5 text-gray-400 transition-transform ${openIndex === index ? "rotate-180" : ""
                }`}
            />
          </button>
          {openIndex === index && (
            <div className="px-6 pb-6 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

// ============================================================================
// CONTACT FORM
// ============================================================================

interface ContactFormProps {
  email: string;
}

export function ContactForm({ email }: ContactFormProps) {
  return (
    <div className="bg-white dark:bg-surface-dark p-8 md:p-10 rounded-xl shadow-2xl border border-gray-100 dark:border-gray-700">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-wider">
            Name
          </label>
          <input
            type="text"
            placeholder="Your name"
            className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-md p-3 text-sm focus:ring-purple-500 focus:border-purple-500 outline-none transition"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-wider">
            Company Email
          </label>
          <input
            type="email"
            placeholder="name@company.com"
            className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-md p-3 text-sm focus:ring-purple-500 focus:border-purple-500 outline-none transition"
          />
        </div>
      </div>

      <div className="mb-8">
        <label className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-wider">
          Project Details
        </label>
        <textarea
          placeholder="Describe your ML use case, data assets, and goals..."
          rows={4}
          className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-md p-3 text-sm focus:ring-purple-500 focus:border-purple-500 outline-none transition resize-none"
        ></textarea>
      </div>

      <div className="flex flex-col gap-4">
        <Button size="lg" className="w-full justify-center">
          Talk to ML Engineering
        </Button>
        <div className="text-center">
          <span className="text-xs text-gray-400">
            Or email us at{" "}
            <a href={`mailto:${email}`} className="text-purple-500 hover:underline">
              {email}
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
