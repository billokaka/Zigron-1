// [PAGE_NAME] - Content Data
// Copy this template to: src/app/[route]/[slug]/data.ts

// ============================================================================
// PAGE METADATA
// ============================================================================

export const pageMetadata = {
  title: "[Page Title] | Zigron",
  description: "[SEO description - 150-160 characters]",
  keywords: [
    "[keyword1]",
    "[keyword2]",
    "[keyword3]",
  ],
};

// ============================================================================
// HERO SECTION
// ============================================================================

export const heroData = {
  badge: "[Section Badge]",
  headline: "[Main Headline]",
  headlineHighlight: "[Highlighted Part]",
  subheadline: "[Supporting text that explains the value proposition]",
  primaryCta: { label: "[Primary Button]", href: "/contact" },
  secondaryCta: { label: "[Secondary Link]", href: "#section" },
  trustBadges: [
    { icon: "zap", label: "[Badge 1]", color: "blue" },
    { icon: "shield", label: "[Badge 2]", color: "green" },
    { icon: "cpu", label: "[Badge 3]", color: "purple" },
  ],
};

// ============================================================================
// ICON TYPES (customize based on what icons you use)
// ============================================================================

export type IconName =
  | "cpu"
  | "cloud"
  | "zap"
  | "shield"
  | "checkCircle"
  | "settings"
  | "database"
  | "barChart";

// ============================================================================
// FEATURES / CAPABILITIES
// ============================================================================

export interface Feature {
  iconName: IconName;
  title: string;
  description: string;
  items?: string[];
}

export const features: Feature[] = [
  {
    iconName: "cpu",
    title: "[Feature 1 Title]",
    description: "[Feature 1 description]",
    items: ["[Item 1]", "[Item 2]", "[Item 3]"],
  },
  {
    iconName: "cloud",
    title: "[Feature 2 Title]",
    description: "[Feature 2 description]",
    items: ["[Item 1]", "[Item 2]", "[Item 3]"],
  },
  // Add more features...
];

// ============================================================================
// USE CASES / EXAMPLES
// ============================================================================

export interface UseCase {
  title: string;
  category: string;
  problem: string;
  solution: string;
  outcome: string;
}

export const useCases: UseCase[] = [
  {
    title: "[Use Case 1]",
    category: "[Category]",
    problem: "[Problem description]",
    solution: "[Solution description]",
    outcome: "[Measurable outcome]",
  },
  // Add more use cases...
];

// ============================================================================
// PROCESS / TIMELINE
// ============================================================================

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  { number: "01", title: "[Step 1]", description: "[Description]" },
  { number: "02", title: "[Step 2]", description: "[Description]" },
  { number: "03", title: "[Step 3]", description: "[Description]" },
  { number: "04", title: "[Step 4]", description: "[Description]" },
];

// ============================================================================
// TECH STACK
// ============================================================================

export interface TechCategory {
  category: string;
  technologies: string[];
}

export const techStack: TechCategory[] = [
  { category: "[Category 1]", technologies: ["[Tech 1]", "[Tech 2]"] },
  { category: "[Category 2]", technologies: ["[Tech 1]", "[Tech 2]"] },
];

// ============================================================================
// CASE STUDIES / RELATED WORK
// ============================================================================

export interface CaseStudy {
  title: string;
  services: string;
  result: string;
  href: string;
}

export const caseStudies: CaseStudy[] = [
  {
    title: "[Case Study Title]",
    services: "[Services Used]",
    result: "[Key Result]",
    href: "/work/[slug]",
  },
];

// ============================================================================
// FAQs
// ============================================================================

export interface FAQ {
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    question: "[Question 1]?",
    answer: "[Answer 1]",
  },
  {
    question: "[Question 2]?",
    answer: "[Answer 2]",
  },
];

// ============================================================================
// CTA SECTION
// ============================================================================

export const ctaData = {
  headline: "[CTA Headline]",
  subheadline: "[CTA supporting text]",
  email: "[team]@zigron.com",
};
