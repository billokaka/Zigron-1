"use client";

import { useState } from "react";
import {
  ChevronDown,
  ArrowRight,
  Sun,
  Settings,
  Truck,
  Home,
  Heart,
  Cpu,
  Cloud,
  Lightbulb,
  Layout,
  Shield,
  Building2,
  Code,
  type LucideIcon,
} from "lucide-react";
import type { Solution, FAQ, StartingPoint, IconName } from "./data";

// ============================================================================
// ICON RESOLVER
// ============================================================================

const iconMap: Record<IconName, LucideIcon> = {
  sun: Sun,
  settings: Settings,
  truck: Truck,
  home: Home,
  heart: Heart,
  cpu: Cpu,
  cloud: Cloud,
  lightbulb: Lightbulb,
  layout: Layout,
  shield: Shield,
  building2: Building2,
  code: Code,
};
// ============================================================================
// SOLUTION FILTER TABS
// ============================================================================

interface SolutionFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export function SolutionFilter({
  categories,
  activeCategory,
  onCategoryChange,
}: SolutionFilterProps) {
  return (
    <div className="flex gap-3 overflow-x-auto pb-4 items-center scrollbar-hide">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full px-6 transition-colors ${activeCategory === category
            ? "bg-black dark:bg-white text-white dark:text-black shadow-sm"
            : "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-primary/50 hover:text-primary text-gray-600 dark:text-gray-300"
            }`}
        >
          <span className="text-sm font-semibold">{category}</span>
        </button>
      ))}
    </div>
  );
}

// ============================================================================
// SOLUTION CARD VISUALS (From Homepage)
// ============================================================================

function TileOneVisual() {
  return (
    <div className="relative w-full h-full">
      <svg className="absolute inset-0 w-full h-full opacity-50" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M0,80 Q20,60 40,80 T80,50 T100,50" fill="none" stroke="#CCC" strokeWidth="2" vectorEffect="non-scaling-stroke" />
      </svg>
      <svg className="absolute inset-0 w-full h-full group-hover:scale-105 transition-transform duration-300" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M0,80 Q20,60 40,80 T80,50 T100,20 L100,100 L0,100 Z" fill="url(#grad1)" />
        <path d="M0,80 Q20,60 40,80 T80,50 T100,20" fill="none" stroke="#10B981" strokeWidth="3" vectorEffect="non-scaling-stroke" />
        <defs>
          <linearGradient id="grad1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#10B981" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute top-[40%] left-[38%] bg-zigron-red text-white text-[9px] font-bold px-1.5 py-0.5 rounded flex items-center gap-1 shadow-sm opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" /> LOSS DETECTED
      </div>
    </div>
  );
}

function TileTwoVisual() {
  return (
    <div className="relative flex items-center justify-center w-full h-full overflow-hidden">
      <div className="relative group-hover:scale-110 transition-transform duration-500">
        <svg width="100" height="100" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="none" stroke="#E5E7EB" strokeWidth="8" />
          <circle cx="50" cy="50" r="40" fill="none" stroke="#F59E0B" strokeWidth="8" strokeLinecap="round" strokeDasharray="251" strokeDashoffset="45" className="group-hover:stroke-[#10B981] transition-colors duration-500" />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center font-poppins font-bold text-zigron-black text-[24px]">
          <span className="group-hover:hidden">82</span>
          <span className="hidden group-hover:block transition-all text-[#10B981]">97</span>
        </div>
      </div>
      <div className="absolute bottom-6 right-6 bg-[#10B981] text-white text-[9px] font-bold px-1.5 py-0.5 rounded shadow-sm opacity-100 lg:opacity-0 group-hover:-translate-y-2 group-hover:opacity-100 transition-all duration-300 delay-100">
        TICKET CREATED
      </div>
    </div>
  );
}

function TileThreeVisual() {
  return (
    <div className="relative w-full h-full">
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#9ca3af 2px, transparent 2px)', backgroundSize: '16px 16px' }} />
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M20,80 Q40,40 80,30" fill="none" stroke="#C0272D" strokeWidth="2" strokeDasharray="4 4" className="group-hover:animate-[dashFlow_1s_linear_infinite]" vectorEffect="non-scaling-stroke" />
        <circle cx="20" cy="80" r="4" fill="#1A1A1A" />
        <circle cx="50" cy="50" r="4" fill="#1A1A1A" className="group-hover:fill-zigron-red transition-colors" />
        <circle cx="80" cy="30" r="4" fill="#10B981" />
      </svg>
      <div className="absolute top-[40%] left-[55%] bg-zigron-red text-white text-[9px] font-bold px-1.5 py-0.5 rounded shadow-sm opacity-100 lg:opacity-0 group-hover:-translate-x-2 group-hover:opacity-100 transition-all duration-300">
        DELAY RISK
      </div>
    </div>
  );
}

function TileFourVisual() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center group-hover:scale-105 transition-transform duration-300">
      <div className="w-12 h-12 bg-white rounded-full shadow-sm border-[2px] border-[#CCC] flex items-center justify-center z-10 group-hover:border-[#10B981] transition-colors">
        <div className="w-4 h-4 bg-zigron-black rounded-full" />
      </div>
      <div className="absolute inset-0 flex justify-center items-center z-0">
        <div className="w-[100px] h-[2px] bg-[#CCC] rotate-45 group-hover:bg-[#10B981] transition-colors" />
        <div className="w-[100px] h-[2px] bg-[#CCC] -rotate-45 group-hover:bg-[#10B981] transition-colors" />
      </div>
      <div className="absolute top-8 right-[20%] w-6 h-6 bg-white rounded-full border-[2px] border-[#CCC] group-hover:border-[#10B981] transition-colors" />
      <div className="absolute bottom-8 left-[20%] w-6 h-6 bg-white rounded-full border-[2px] border-[#CCC] group-hover:border-[#10B981] transition-colors" />
      <div className="absolute bottom-4 right-4 w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
        <div className="h-full bg-[#10B981] w-[30%] lg:w-[30%] group-hover:w-[100%] transition-all duration-1000 ease-out" />
      </div>
      <span className="absolute bottom-[28px] right-4 text-[9px] font-mono font-bold text-[#10B981] opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity delay-300">RELEASED</span>
    </div>
  );
}

function TileFiveVisual() {
  return (
    <div className="relative w-full h-full p-6 flex flex-col justify-center gap-2">
      <div className="flex gap-2 items-center w-[80%] opacity-100 transition-opacity">
        <div className="w-6 h-6 rounded bg-zigron-black flex items-center justify-center flex-shrink-0">
          <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
        </div>
        <div className="h-2 flex-grow bg-zigron-red rounded-full overflow-hidden relative">
          <div className="absolute inset-0 bg-white/30 w-1/2 -skew-x-12 translate-x-[-100%] animate-[slideRight_1.5s_infinite]" />
        </div>
      </div>
      <div className="h-4 w-full bg-white rounded border border-gray-200 shadow-sm" />
      <div className="h-4 w-[70%] bg-white rounded border border-gray-200 shadow-sm" />
      <div className="absolute top-4 right-4 bg-zigron-red text-white text-[9px] font-bold px-1.5 py-0.5 rounded shadow-sm opacity-100 lg:opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-300">
        AUDIT LOG
      </div>
      <style>{`@keyframes slideRight { to { transform: translateX(250%); } }`}</style>
    </div>
  );
}

// Map the index to the corresponding visual
const getTileVisual = (index: number) => {
  switch (index % 5) {
    case 0: return <TileOneVisual />;
    case 1: return <TileTwoVisual />;
    case 2: return <TileThreeVisual />;
    case 3: return <TileFourVisual />;
    case 4: return <TileFiveVisual />;
    default: return <TileFiveVisual />;
  }
};

// ============================================================================
// SOLUTION CARD
// ============================================================================

interface SolutionCardProps {
  solution: Solution;
  index: number;
}

export function SolutionCard({ solution, index }: SolutionCardProps) {
  // Determine the column span based on index to replicate the homepage layout (60/40 then 33/33/33)
  let colSpan = "lg:col-span-2"; // default (33%)
  if (index % 5 === 0) colSpan = "lg:col-span-4"; // 60% wide
  else if (index % 5 === 1) colSpan = "lg:col-span-2"; // 40% wide

  return (
    <div className={`sol-tile w-full ${colSpan} bg-white border border-[#CCCCCC] rounded-[16px] overflow-hidden group hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgba(192,39,45,0.12)] hover:border-zigron-red transition-all duration-250 flex flex-col`}>
      {/* Top Visual Component */}
      <div className="h-[160px] bg-zigron-light relative overflow-hidden flex items-center justify-center">
        <span className="absolute top-4 left-4 bg-white border border-zigron-red text-zigron-red font-mono text-[11px] font-medium uppercase px-2 py-0.5 rounded-[4px] z-10">
          {solution.category || "Solution"}
        </span>
        {getTileVisual(index)}
      </div>

      {/* Content Body */}
      <div className="p-7 flex flex-col flex-grow">
        <h3 className="font-poppins font-bold text-[22px] text-zigron-black mb-2">{solution.title}</h3>

        <p className="font-poppins text-[15px] text-zigron-gray mb-6 flex-grow">
          {/* Construct a promise string or use bestFor as a fallback */}
          {solution.bestFor ? `Engineered for ${solution.bestFor}.` : "Customized for your specific technical requirements."}
        </p>

        {/* Feature Chips */}
        <div className="flex flex-wrap gap-2 mb-6">
          {solution.features.map((feature, i) => (
            <span key={i} className="bg-zigron-light border border-[#CCCCCC] font-poppins font-medium text-[12px] text-zigron-gray px-2.5 py-1 rounded-[4px]">
              {feature.substring(0, 30)}{feature.length > 30 ? '...' : ''}
            </span>
          ))}
        </div>

        {/* CTA */}
        <a href={`/solutions/${solution.slug}`} className="font-poppins font-semibold text-[14px] text-zigron-red group-hover:underline flex items-center mt-auto">
          Explore solution <ArrowRight className="w-4 h-4 ml-1" />
        </a>
      </div>
    </div>
  );
}

// ============================================================================
// SOLUTIONS GRID (with filtering)
// ============================================================================

interface SolutionsGridProps {
  solutions: Solution[];
  categories: string[];
}

export function SolutionsGrid({ solutions, categories }: SolutionsGridProps) {
  const [activeCategory, setActiveCategory] = useState("All Expertise");

  const filteredSolutions =
    activeCategory === "All Expertise"
      ? solutions
      : solutions.filter((s) => s.category === activeCategory);

  return (
    <>
      <div className="flex flex-col gap-6 mb-12">
        <h2 className="text-3xl font-poppins font-bold text-black dark:text-white">
          Custom Expertise Areas
        </h2>
        <SolutionFilter
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
      </div>

      <div className="sol-grid grid grid-cols-1 lg:grid-cols-6 gap-6">
        {filteredSolutions.map((solution, index) => (
          <SolutionCard key={solution.slug} solution={solution} index={index} />
        ))}
      </div>
    </>
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
    <div className="flex flex-col gap-5">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className={`bg-white dark:bg-gray-900 rounded-xl shadow-sm border transition-all duration-300 ${openIndex === index
            ? "ring-2 ring-primary/20 border-primary/50"
            : "border-gray-200 dark:border-gray-800"
            }`}
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="flex cursor-pointer items-center justify-between p-6 w-full text-left font-bold text-black dark:text-white text-lg"
          >
            <span>{faq.question}</span>
            <ChevronDown
              className={`w-6 h-6 text-gray-400 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-96" : "max-h-0"
              }`}
          >
            <div className="px-6 pb-6 text-gray-600 dark:text-gray-300 text-base leading-relaxed">
              {faq.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// ============================================================================
// STARTING POINT CARD
// ============================================================================

interface StartingPointCardProps {
  point: StartingPoint;
}

export function StartingPointCard({ point }: StartingPointCardProps) {
  const IconComponent = iconMap[point.iconName] || Cpu;

  const colorStyles = {
    red: {
      bg: "bg-red-50 dark:bg-red-900/20",
      text: "text-primary",
      hoverBg: "group-hover:bg-primary",
      ctaColor: "text-primary",
    },
    blue: {
      bg: "bg-blue-50 dark:bg-blue-900/20",
      text: "text-blue-600",
      hoverBg: "group-hover:bg-blue-600",
      ctaColor: "text-blue-600",
    },
    gray: {
      bg: "bg-gray-100 dark:bg-gray-800",
      text: "text-gray-600 dark:text-gray-300",
      hoverBg: "group-hover:bg-gray-800",
      ctaColor: "text-gray-600 dark:text-gray-300",
    },
  };

  const style = colorStyles[point.color];

  return (
    <a
      href={point.href}
      className="group relative flex flex-col p-8 bg-white dark:bg-background-dark rounded-xl shadow-sm border border-transparent hover:border-gray-100 dark:hover:border-gray-700 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
    >
      <div
        className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors ${style.bg} ${style.text} ${style.hoverBg} group-hover:text-white`}
      >
        <IconComponent className="w-8 h-8" />
      </div>
      <h3 className="text-xl font-bold text-black dark:text-white mb-3">
        {point.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 text-sm mb-8 flex-1 leading-relaxed">
        {point.description}
      </p>
      <div
        className={`flex items-center font-bold text-sm gap-1 group-hover:gap-2 transition-all ${style.ctaColor}`}
      >
        {point.ctaText}
        <ArrowRight className="w-4 h-4" />
      </div>
    </a>
  );
}
