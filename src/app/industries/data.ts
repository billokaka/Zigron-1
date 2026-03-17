// Industries Hub - Content Data
// All page content is centralized here for maintainability and SEO

// ============================================================================
// PAGE METADATA
// ============================================================================

export const pageMetadata = {
  title: "Industries Hub | Zigron",
  description:
    "Industry-specific IoT, AI, and engineering solutions for Energy, Manufacturing, Healthcare, Smart Home, Fleet & Logistics, and Commercial Real Estate.",
  keywords: [
    "industrial IoT",
    "manufacturing IoT",
    "healthcare IoT",
    "smart home",
    "fleet management",
    "energy IoT",
    "predictive maintenance",
  ],
};

// ============================================================================
// HERO SECTION
// ============================================================================

export const heroData = {
  badge: "B2B IoT & Engineering",
  headline: "Industries",
  headlineHighlight: "We Serve",
  subheadline:
    "We build IoT, AI, and engineering systems tailored to regulated and operationally complex industries.",
  primaryCta: { label: "Talk to an expert", href: "/contact" },
  secondaryCta: { label: "View case studies", href: "/work" },
};

// ============================================================================
// ICON TYPES
// ============================================================================

export type IconName =
  | "sun"
  | "factory"
  | "building2"
  | "heart"
  | "home"
  | "truck"
  | "zap"
  | "shield"
  | "clock"
  | "trendingDown"
  | "eye"
  | "checkCircle"
  | "cloud"
  | "lightbulb"
  | "cpu"
  | "smartphone";

// ============================================================================
// FILTER CATEGORIES
// ============================================================================

export const filterCategories = [
  "All Industries",
  "Operational Efficiency",
  "Asset Monitoring",
  "Compliance & Security",
  "Automation",
];

// ============================================================================
// INDUSTRIES DATA
// ============================================================================

export interface Industry {
  iconName: IconName;
  title: string;
  slug: string;
  shortDescription: string;
  category: string;
  capabilities: string[];
  relatedSolutions: string[];
  caseStudy: { title: string; result: string };
}

export const industries: Industry[] = [
  {
    iconName: "zap",
    title: "Energy",
    slug: "energy",
    shortDescription: "Grid optimization and renewable asset management systems.",
    category: "Asset Monitoring",
    capabilities: [
      "Smart Metering Infrastructure",
      "Grid Load Balancing AI",
      "Renewable Asset Tracking",
    ],
    relatedSolutions: ["Smart Grid", "Solar/Wind Tech"],
    caseStudy: { title: "TerraSmart Solar", result: "30% faster deployment" },
  },
  {
    iconName: "heart",
    title: "Healthcare",
    slug: "healthcare",
    shortDescription: "HIPAA-compliant remote patient monitoring and IoMT.",
    category: "Compliance & Security",
    capabilities: [
      "IoMT Device Integration",
      "Telehealth Platforms",
      "Secure Patient Data Pipelines",
    ],
    relatedSolutions: ["MedTech", "HIPAA Compliance"],
    caseStudy: { title: "Medical IoT Platform", result: "ISO 27001 certified" },
  },
  {
    iconName: "home",
    title: "Smart Home",
    slug: "smart-home",
    shortDescription: "Connected consumer ecosystems and home automation.",
    category: "Automation",
    capabilities: [
      "Matter/Zigbee Hubs",
      "Mobile Companion Apps",
      "Voice Control Integration",
    ],
    relatedSolutions: ["Consumer IoT", "Home Automation"],
    caseStudy: { title: "Abode Security", result: "99.99% uptime achieved" },
  },
  {
    iconName: "building2",
    title: "Commercial Real Estate",
    slug: "commercial-real-estate",
    shortDescription: "Smart building solutions for energy management and occupancy analytics.",
    category: "Operational Efficiency",
    capabilities: [
      "Building Management Systems",
      "Energy Optimization",
      "Occupancy Analytics",
    ],
    relatedSolutions: ["Smart Buildings", "HVAC Automation"],
    caseStudy: { title: "Smart Building", result: "25% energy reduction" },
  },
];

// ============================================================================
// COMMON OUTCOMES
// ============================================================================

export interface CommonOutcome {
  iconName: IconName;
  title: string;
}

export const commonOutcomes: CommonOutcome[] = [
  { iconName: "trendingDown", title: "Downtime reduction" },
  { iconName: "zap", title: "Energy optimization" },
  { iconName: "eye", title: "Remote monitoring" },
  { iconName: "checkCircle", title: "Safety compliance" },
];

// ============================================================================
// HOW WE DELIVER
// ============================================================================

export interface DeliveryStep {
  number: string;
  title: string;
  description: string;
}

export const deliverySteps: DeliveryStep[] = [
  {
    number: "01",
    title: "IoT Connectivity",
    description: "Seamless hardware-to-cloud data pipelines utilizing best-in-class protocols.",
  },
  {
    number: "02",
    title: "AI & Analytics",
    description: "Actionable insights derived from raw sensor data through advanced ML models.",
  },
  {
    number: "03",
    title: "Engineering Excellence",
    description: "Robust software architecture built for scale, security, and maintainability.",
  },
];

// ============================================================================
// COMPLIANCE BADGES
// ============================================================================

export interface ComplianceBadge {
  iconName: IconName;
  label: string;
}

export const complianceBadges: ComplianceBadge[] = [
  { iconName: "shield", label: "ISO 27001" },
  { iconName: "heart", label: "HIPAA Compliant" },
  { iconName: "shield", label: "GDPR Ready" },
  { iconName: "clock", label: "Agile Delivery" },
];

// ============================================================================
// CASE STUDIES PREVIEW
// ============================================================================

export interface CaseStudyPreview {
  industry: string;
  title: string;
  result: string;
  image: string;
  href: string;
}

export const caseStudies: CaseStudyPreview[] = [
  {
    industry: "Energy",
    title: "Predictive Maintenance for Offshore Rigs",
    result: "Saved $2M/year in reduced downtime using vibration sensor analysis.",
    image: "/images/case-studies/energy-offshore.jpg",
    href: "/work/offshore-predictive-maintenance",
  },
  {
    industry: "Healthcare",
    title: "Remote Cardiac Monitoring Platform",
    result: "HIPAA-compliant cloud architecture handling 50k+ daily patients.",
    image: "/images/case-studies/healthcare-cardiac.jpg",
    href: "/work/cardiac-monitoring",
  },
  {
    industry: "Logistics",
    title: "Cold Chain Logistics Tracker",
    result: "Real-time temperature monitoring for pharmaceutical transport.",
    image: "/images/case-studies/logistics-cold-chain.jpg",
    href: "/work/cold-chain-tracker",
  },
];

// ============================================================================
// CROSS-INDUSTRY SOLUTIONS
// ============================================================================

export interface CrossIndustrySolution {
  iconName: IconName;
  title: string;
  description: string;
  href: string;
}

export const crossIndustrySolutions: CrossIndustrySolution[] = [
  {
    iconName: "cloud",
    title: "IoT Cloud Platforms",
    description: "Scalable backend infrastructure",
    href: "/services/iot",
  },
  {
    iconName: "lightbulb",
    title: "Edge AI",
    description: "On-device intelligence",
    href: "/services/ai",
  },
  {
    iconName: "cpu",
    title: "Embedded Firmware",
    description: "Low-level device coding",
    href: "/services/engineering",
  },
  {
    iconName: "smartphone",
    title: "Mobile Apps",
    description: "User control interfaces",
    href: "/services/engineering",
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
    question: "Do you work with regulated data (healthcare, infrastructure)?",
    answer:
      "Yes, we specialize in high-compliance environments. Our engineering practices adhere to ISO 27001, HIPAA, and GDPR standards. We build secure data pipelines from the edge device all the way to the cloud.",
  },
  {
    question: "Can you integrate into existing systems (SCADA/ERP)?",
    answer:
      "Absolutely. We rarely start with a blank slate. Our team has extensive experience building middleware and API layers to bridge modern IoT solutions with legacy systems like SCADA, EHRs, SAP, and other ERPs.",
  },
  {
    question: "Do you support multi-site rollouts?",
    answer:
      "Yes. We build scalable provisioning systems that allow for zero-touch deployment of devices across multiple geographies, ensuring consistency and ease of management.",
  },
  {
    question: "Can you start with an MVP then scale?",
    answer:
      'We recommend it. Our "Discovery to Delivery" process is designed to validate technical feasibility and ROI quickly with a POC or MVP before committing to full-scale engineering and manufacturing.',
  },
];

// ============================================================================
// CTA SECTION
// ============================================================================

export const ctaData = {
  headline: "Tell us your industry + challenge",
  subheadline: "Ready to modernize your operations? Our engineers are ready to scope your solution.",
  primaryCta: { label: "Schedule a Consultation", href: "/contact" },
  secondaryCta: { label: "Contact Sales", href: "/contact" },
};
