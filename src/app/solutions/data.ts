// Custom Expertise Areas - Content Data
// Showcases Zigron's deep expertise across industries - NOT products for sale

// ============================================================================
// PAGE METADATA
// ============================================================================

export const pageMetadata = {
  title: "Custom Expertise Areas | Zigron",
  description:
    "Explore Zigron's deep technical expertise across industries. We build 100% custom IoT & AI solutions tailored to your unique requirements.",
  keywords: [
    "custom IoT development",
    "smart energy consulting",
    "predictive maintenance engineering",
    "fleet management solutions",
    "smart home development",
    "medical IoT development",
    "enterprise IoT consulting",
  ],
};

// ============================================================================
// HERO SECTION
// ============================================================================

export const heroData = {
  badge: "100% Custom Development",
  headline: "Expertise Built for",
  headlineHighlight: "Your Unique Challenge",
  subheadline:
    "We don't sell products. We engineer custom solutions tailored to your exact requirements. Explore the industries where we've delivered results.",
  primaryCta: { label: "Explore expertise", href: "#expertise" },
  secondaryCta: { label: "Talk to an engineer", href: "/contact" },
  stats: {
    systemStatus: "Custom Builds",
    efficiencyGain: "100%",
  },
};

// ============================================================================
// FILTER CATEGORIES
// ============================================================================

export const filterCategories = [
  "All Expertise",
  "Energy",
  "Industrial",
  "Mobility",
  "Consumer",
  "Healthcare",
];

// ============================================================================
// EXPERTISE AREAS DATA (formerly Solutions)
// ============================================================================

export type IconName = "sun" | "settings" | "truck" | "home" | "heart" | "cpu" | "cloud" | "lightbulb" | "layout" | "shield" | "building2" | "code";

export interface Solution {
  iconName: IconName;
  title: string;
  slug: string;
  bestFor: string;
  category: string;
  features: string[];
  metrics: { value: string; label: string }[];
  tags: string[];
  badge?: string;
  image?: string;
}

export const solutions: Solution[] = [
  {
    iconName: "sun",
    title: "Smart Energy & Solar",
    slug: "smart-energy-solar",
    bestFor: "Solar Farms, Utilities & Energy Grids",
    category: "Energy",
    features: [
      "Custom telemetry dashboards for energy assets",
      "Grid load balancing algorithm development",
      "Predictive outage detection systems",
    ],
    metrics: [
      { value: "15%", label: "Avg. Client Savings" },
      { value: "99.9%", label: "System Uptime" },
    ],
    tags: ["IoT Core", "TimescaleDB", "Python"],
    badge: "Deep Expertise",
    image: "/images/solutions/smart-energy.jpg",
  },
  {
    iconName: "settings",
    title: "Predictive Maintenance",
    slug: "predictive-maintenance",
    bestFor: "Manufacturers & Heavy Industry",
    category: "Industrial",
    features: [
      "Vibration & thermal anomaly detection models",
      "Custom equipment longevity algorithms",
      "Integration with existing CMMS/ERP systems",
    ],
    metrics: [
      { value: "40%", label: "Downtime Reduction" },
      { value: "3x", label: "Typical ROI" },
    ],
    tags: ["TensorFlow", "MQTT", "Edge AI"],
    image: "/images/solutions/predictive-maintenance.jpg",
  },
  {
    iconName: "truck",
    title: "Fleet & Logistics",
    slug: "fleet-logistics",
    bestFor: "Supply Chain, Transport & Cold Chain",
    category: "Mobility",
    features: [
      "Custom route optimization engines",
      "Fuel consumption analytics platforms",
      "Driver behavior scoring systems",
    ],
    metrics: [
      { value: "20%", label: "Fuel Saved" },
      { value: "Real-time", label: "Visibility" },
    ],
    tags: ["GPS/GNSS", "Cellular IoT", "React Native"],
    image: "/images/solutions/fleet-logistics.jpg",
  },
  {
    iconName: "home",
    title: "Smart Home & Consumer IoT",
    slug: "smart-home-automation",
    bestFor: "Consumer Electronics OEMs",
    category: "Consumer",
    features: [
      "Custom device interoperability layers",
      "White-label mobile app development",
      "Voice assistant integration (Alexa/Google)",
    ],
    metrics: [
      { value: "Matter", label: "Certified" },
      { value: "5 Star", label: "User Exp." },
    ],
    tags: ["BLE/Zigbee", "AWS IoT", "Mobile SDK"],
    image: "/images/solutions/smart-home.jpg",
  },
  {
    iconName: "heart",
    title: "Medical IoT & Remote Monitoring",
    slug: "medical-iot-platform",
    bestFor: "MedTech Companies & Healthcare Providers",
    category: "Healthcare",
    features: [
      "HIPAA-compliant architecture design",
      "Custom telemetry ingestion pipelines",
      "HL7/FHIR integration development",
    ],
    metrics: [
      { value: "ISO", label: "27001 Ready" },
      { value: "HIPAA", label: "Compliant" },
    ],
    tags: ["HL7/FHIR", "End-to-End Enc", "Azure Health"],
    image: "/images/solutions/medical-iot.jpg",
  },
];

// ============================================================================
// ARCHITECTURE LAYERS
// ============================================================================

export interface ArchitectureLayer {
  iconName: IconName;
  title: string;
  description: string;
}

export const architectureLayers: ArchitectureLayer[] = [
  { iconName: "cpu", title: "Device / Edge", description: "Custom firmware & hardware design" },
  { iconName: "cloud", title: "Data Ingestion", description: "Scalable MQTT, API, Streaming" },
  { iconName: "lightbulb", title: "Processing / AI", description: "Bespoke analytics & ML models" },
  { iconName: "layout", title: "App / Dashboard", description: "Tailored web & mobile UX" },
  { iconName: "shield", title: "Security / Ops", description: "Secure-by-design architecture" },
];

// ============================================================================
// STARTING POINTS (NAVIGATION PATHS)
// ============================================================================

export interface StartingPoint {
  iconName: IconName;
  title: string;
  description: string;
  href: string;
  color: "red" | "blue" | "gray";
  ctaText: string;
}

export const startingPoints: StartingPoint[] = [
  {
    iconName: "layout",
    title: "Explore by Industry",
    description: "See how we've solved challenges in your specific market vertical.",
    href: "#expertise",
    color: "red",
    ctaText: "View Industries",
  },
  {
    iconName: "building2",
    title: "See Our Work",
    description: "Browse real case studies and projects we've delivered.",
    href: "/work",
    color: "blue",
    ctaText: "View Case Studies",
  },
  {
    iconName: "code",
    title: "Engage Our Engineers",
    description: "Start a conversation about your custom development needs.",
    href: "/contact",
    color: "gray",
    ctaText: "Contact Us",
  },
];

// ============================================================================
// STATS
// ============================================================================

export interface Stat {
  value: string;
  label: string;
}

export const stats: Stat[] = [
  { value: "100+", label: "Custom Projects" },
  { value: "$500M+", label: "Client Value Created" },
  { value: "24/7", label: "Mission Critical Support" },
  { value: "15yr", label: "Engineering Track Record" },
];

// ============================================================================
// INTEGRATIONS
// ============================================================================

export const integrations = [
  "SAP",
  "Salesforce",
  "AWS",
  "Azure",
  "Google Cloud",
  "Oracle",
];

// ============================================================================
// SECURITY FEATURES
// ============================================================================

export interface SecurityFeature {
  iconName: IconName;
  title: string;
  description: string;
}

export const securityFeatures: SecurityFeature[] = [
  {
    iconName: "shield",
    title: "Enterprise-Grade Security",
    description: "SOC2 Type II Ready, End-to-End Encryption",
  },
  {
    iconName: "cloud",
    title: "Your Deployment, Your Way",
    description: "Cloud-native, On-premise, or Edge Hybrid",
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
    question: "Do you sell pre-built solutions or products?",
    answer:
      "No. Zigron is a 100% custom development shop. We don't have off-the-shelf products. Every engagement starts with your unique requirements, and we engineer a solution tailored specifically to your needs. You own the IP.",
  },
  {
    question: "Can we start with a pilot and scale?",
    answer:
      "Absolutely. We typically recommend a Proof of Concept (PoC) or Pilot phase to validate technical feasibility and ROI. Our architecture is designed for scale, meaning the transition from pilot to full production is seamless.",
  },
  {
    question: "Do you handle data pipelines + MLOps?",
    answer:
      "Yes, data engineering is a core part of our offering. We build robust data ingestion pipelines, handle data cleaning and storage, and implement MLOps pipelines to ensure your AI models remain accurate and retrainable in production.",
  },
  {
    question: "What about IP ownership?",
    answer:
      "You own 100% of the intellectual property we create for you. There are no license fees, no black boxes, and no vendor lock-in. The code, designs, and documentation are yours.",
  },
];

// ============================================================================
// CTA SECTION
// ============================================================================

export const ctaData = {
  headline: "Describe your challenge.",
  subheadline: "We'll engineer the custom solution to solve it.",
  primaryCta: { label: "Start a Conversation", href: "/contact" },
  secondaryCta: { label: "View Our Work", href: "/work" },
};
