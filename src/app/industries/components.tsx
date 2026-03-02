"use client";

import { useState } from "react";
import {
  ArrowRight,
  CheckCircle,
  ChevronDown,
  Sun,
  Factory,
  Building2,
  Heart,
  Home,
  Truck,
  Zap,
  Shield,
  Clock,
  TrendingDown,
  Eye,
  Cloud,
  Lightbulb,
  Cpu,
  Smartphone,
  type LucideIcon,
} from "lucide-react";
import type { Industry, FAQ, IconName, CommonOutcome, CrossIndustrySolution } from "./data";

// ============================================================================
// ICON RESOLVER
// ============================================================================

const iconMap: Record<IconName, LucideIcon> = {
  sun: Sun,
  factory: Factory,
  building2: Building2,
  heart: Heart,
  home: Home,
  truck: Truck,
  zap: Zap,
  shield: Shield,
  clock: Clock,
  trendingDown: TrendingDown,
  eye: Eye,
  checkCircle: CheckCircle,
  cloud: Cloud,
  lightbulb: Lightbulb,
  cpu: Cpu,
  smartphone: Smartphone,
};

function getIcon(iconName: IconName): LucideIcon {
  return iconMap[iconName] || Cpu;
}

// ============================================================================
// INDUSTRY FILTER TABS
// ============================================================================

interface IndustryFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export function IndustryFilter({
  categories,
  activeCategory,
  onCategoryChange,
}: IndustryFilterProps) {
  return (
    <div className="flex gap-3 overflow-x-auto pb-4 items-center scrollbar-hide">
      <span className="text-xs font-bold uppercase text-gray-400 mr-2 shrink-0 tracking-wide">
        Filter by outcome:
      </span>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`flex h-9 shrink-0 items-center px-5 rounded-full transition-colors ${activeCategory === category
            ? "bg-black dark:bg-white text-white dark:text-black shadow-sm"
            : "border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:border-primary/50 hover:text-primary"
            }`}
        >
          <span className="text-sm font-medium">{category}</span>
        </button>
      ))}
    </div>
  );
}

// ============================================================================
// INDUSTRY CARD
// ============================================================================

interface IndustryCardProps {
  industry: Industry;
}

export function IndustryCard({ industry }: IndustryCardProps) {
  const Icon = iconMap[industry.iconName] || Cpu;

  return (
    <div className="group flex flex-col bg-white dark:bg-surface-dark rounded-2xl border border-gray-200 dark:border-gray-700 p-8 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300 relative overflow-hidden">
      {/* Background icon on hover */}
      <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-5 transition-opacity">
        <Icon className="w-32 h-32" />
      </div>

      <div className="flex items-start justify-between mb-6">
        <div className="w-14 h-14 rounded-xl bg-red-50 dark:bg-red-900/20 text-primary flex items-center justify-center border border-red-100 dark:border-red-800">
          <Icon className="w-8 h-8" />
        </div>
      </div>

      <h3 className="text-2xl font-bold text-black dark:text-white mb-3 group-hover:text-primary transition-colors">
        {industry.title}
      </h3>

      <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
        {industry.shortDescription}
      </p>

      <ul className="flex flex-col gap-3 mb-8 flex-grow">
        {industry.capabilities.map((capability) => (
          <li
            key={capability}
            className="flex gap-3 text-sm text-gray-700 dark:text-gray-300 items-start"
          >
            <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            {capability}
          </li>
        ))}
      </ul>

      <div className="pt-6 border-t border-gray-100 dark:border-gray-800 mt-auto">
        <div className="flex gap-3 text-xs font-semibold text-gray-500 dark:text-gray-400 mb-5">
          {industry.relatedSolutions.map((solution, idx) => (
            <span key={solution}>
              <a className="hover:text-primary hover:underline cursor-pointer">
                {solution}
              </a>
              {idx < industry.relatedSolutions.length - 1 && " • "}
            </span>
          ))}
        </div>

        <a
          href={`/industries/${industry.slug}`}
          className="inline-flex items-center text-primary font-bold text-sm hover:gap-3 transition-all group-hover:gap-3"
        >
          Explore {industry.title}
          <ArrowRight className="w-5 h-5 ml-1" />
        </a>
      </div>
    </div>
  );
}

// ============================================================================
// INDUSTRIES GRID (No filtering)
// ============================================================================

interface IndustriesGridProps {
  industries: Industry[];
}

export function IndustriesGrid({ industries }: IndustriesGridProps) {
  return (
    <>
      <div className="mb-12 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-black dark:text-white mb-4 tracking-tight">
          Industries we serve
        </h2>
        <p className="text-lg text-text-muted-light dark:text-text-muted-dark leading-relaxed">
          Deep expertise in regulated sectors where precision, security, and scalability are non-negotiable.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {industries.map((industry) => (
          <IndustryCard key={industry.slug} industry={industry} />
        ))}
      </div>
    </>
  );
}

// ============================================================================
// COMMON OUTCOMES
// ============================================================================

interface CommonOutcomesProps {
  outcomes: CommonOutcome[];
}

export function CommonOutcomes({ outcomes }: CommonOutcomesProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {outcomes.map((outcome) => {
        const Icon = getIcon(outcome.iconName);
        return (
          <div
            key={outcome.title}
            className="flex items-center gap-4 p-5 rounded-xl bg-surface-light dark:bg-surface-dark border border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700 transition-colors"
          >
            <div className="w-10 h-10 rounded-full bg-red-50 dark:bg-red-900/20 flex items-center justify-center text-primary">
              <Icon className="w-6 h-6" />
            </div>
            <span className="font-bold text-black dark:text-white text-base">
              {outcome.title}
            </span>
          </div>
        );
      })}
    </div>
  );
}

// ============================================================================
// CROSS-INDUSTRY SOLUTIONS GRID
// ============================================================================

interface CrossIndustrySolutionsProps {
  solutions: CrossIndustrySolution[];
}

export function CrossIndustrySolutions({ solutions }: CrossIndustrySolutionsProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {solutions.map((solution) => {
        const Icon = getIcon(solution.iconName);
        return (
          <a
            key={solution.title}
            href={solution.href}
            className="bg-white dark:bg-gray-900 p-8 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary/50 hover:shadow-lg transition-all group text-center md:text-left"
          >
            <div className="mb-4 text-gray-400 group-hover:text-primary transition-colors">
              <Icon className="w-10 h-10 mx-auto md:mx-0" />
            </div>
            <h3 className="font-bold text-black dark:text-white text-lg mb-2">
              {solution.title}
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {solution.description}
            </p>
          </a>
        );
      })}
    </div>
  );
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
    <div className="space-y-5">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className={`bg-surface-light dark:bg-surface-dark rounded-2xl border transition-all duration-300 ${openIndex === index
            ? "bg-white dark:bg-gray-900 shadow-lg border-primary/10"
            : "border-gray-100 dark:border-gray-800"
            }`}
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="flex cursor-pointer items-center justify-between p-6 w-full text-left font-bold text-black dark:text-white text-lg select-none"
          >
            <span>{faq.question}</span>
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openIndex === index
                ? "bg-primary text-white"
                : "bg-gray-100 dark:bg-gray-800"
                }`}
            >
              <ChevronDown
                className={`w-5 h-5 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                  }`}
              />
            </div>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-96" : "max-h-0"
              }`}
          >
            <div className="px-6 pb-8 text-gray-600 dark:text-gray-300 leading-relaxed">
              {faq.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
