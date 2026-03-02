"use client";

import { useState } from "react";
import {
  ChevronDown,
  Zap,
  Sun,
  Cpu,
  BarChart,
  Battery,
  Shield,
  Lock,
  Clock,
  Clipboard,
  AlertTriangle,
  Database,
  Wifi,
  Cloud,
  Users,
  Target,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui";
import type { FAQ, IconName } from "./data";

// ============================================================================
// ICON RESOLVER
// ============================================================================

const iconMap: Record<IconName, LucideIcon> = {
  zap: Zap,
  sun: Sun,
  cpu: Cpu,
  barChart: BarChart,
  battery: Battery,
  shield: Shield,
  lock: Lock,
  clock: Clock,
  clipboard: Clipboard,
  alertTriangle: AlertTriangle,
  database: Database,
  wifi: Wifi,
  cloud: Cloud,
  users: Users,
  target: Target,
  wrench: Wrench,
};

export function getIcon(iconName: IconName): LucideIcon {
  return iconMap[iconName] || Zap;
}

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
        <details
          key={index}
          className="group bg-white dark:bg-background-dark p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm transition-all duration-300 open:shadow-md"
          open={openIndex === index}
          onClick={(e) => {
            e.preventDefault();
            setOpenIndex(openIndex === index ? null : index);
          }}
        >
          <summary className="flex justify-between items-center cursor-pointer font-bold text-black dark:text-white select-none list-none">
            {faq.question}
            <ChevronDown
              className={`w-5 h-5 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                }`}
            />
          </summary>
          <div
            className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-96 mt-4" : "max-h-0"
              }`}
          >
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed pl-1">
              {faq.answer}
            </p>
          </div>
        </details>
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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white dark:bg-background-dark p-8 md:p-10 rounded-xl shadow-xl max-w-2xl mx-auto text-left border border-gray-200 dark:border-gray-800"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide mb-2">
            Name
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded p-3 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow text-black dark:text-white placeholder-gray-400"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide mb-2">
            Company Email
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded p-3 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow text-black dark:text-white placeholder-gray-400"
            placeholder="john@company.com"
          />
        </div>
      </div>
      <div className="mb-8">
        <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide mb-2">
          Briefly describe your challenge or project
        </label>
        <textarea
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded p-3 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow text-black dark:text-white placeholder-gray-400"
          placeholder="e.g. We need to integrate legacy Modbus controllers with Azure IoT..."
          rows={4}
        />
      </div>
      <Button type="submit" size="lg" className="w-full shadow-lg hover:shadow-xl">
        Talk to an expert
      </Button>
      <div className="text-center mt-6">
        <p className="text-xs text-gray-400">
          Or email us at{" "}
          <a
            href={`mailto:${email}`}
            className="text-primary hover:underline font-semibold"
          >
            {email}
          </a>
        </p>
      </div>
    </form>
  );
}
