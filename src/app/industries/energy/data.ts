// Energy & Utilities Industry Page - Content Data
// Updated per Knowledge Doc: Industries.md Section 2

// ============================================================================
// PAGE METADATA
// ============================================================================

export const pageMetadata = {
  title: "Energy & Utilities Solutions | Zigron",
  description:
    "Smart monitoring, SCADA integration, and predictive maintenance for solar, wind, and utilities. Engineering-aware analytics for energy asset optimization.",
  keywords: [
    "energy IoT",
    "utilities solutions",
    "solar monitoring",
    "SCADA integration",
    "predictive maintenance energy",
    "renewable energy IoT",
    "smart grid",
  ],
};

// ============================================================================
// HERO SECTION
// ============================================================================

export const heroData = {
  badge: "Energy & Utilities",
  headline: "Smart Energy",
  headlineHighlight: "Solutions & Services",
  subheadline:
    "Maximize energy yield and extend asset longevity with IoT monitoring, AI forecasting, and SCADA integration. We reduce technical risk for mission-critical infrastructure.",
  primaryCta: { label: "Talk to an expert", href: "/contact" },
  secondaryCta: { label: "View case studies", href: "/work" },
};

// ============================================================================
// ICON TYPES
// ============================================================================

export type IconName =
  | "zap"
  | "sun"
  | "cpu"
  | "barChart"
  | "battery"
  | "shield"
  | "lock"
  | "clock"
  | "clipboard"
  | "alertTriangle"
  | "database"
  | "wifi"
  | "cloud"
  | "users"
  | "target"
  | "wrench";

// ============================================================================
// BUYER ROLES (from Knowledge Doc)
// ============================================================================

export interface BuyerRole {
  title: string;
  description: string;
}

export const buyerRoles: BuyerRole[] = [
  { title: "Asset Owner / Operator Leadership", description: "Executive decision makers for infrastructure investments" },
  { title: "Plant Operations Manager", description: "Day-to-day operational oversight and performance optimization" },
  { title: "SCADA/Controls Engineer", description: "Technical integration with existing OT systems" },
  { title: "Reliability Engineering", description: "Maintenance strategy and asset health monitoring" },
  { title: "Cybersecurity / Compliance", description: "Security posture and regulatory compliance" },
];

// ============================================================================
// OPERATING ENVIRONMENT (from Knowledge Doc)
// ============================================================================

export interface OperatingEnvironment {
  iconName: IconName;
  title: string;
  description: string;
}

export const operatingEnvironment: OperatingEnvironment[] = [
  {
    iconName: "wifi",
    title: "Remote Sites",
    description: "Remote locations, harsh environments, and variable connectivity.",
  },
  {
    iconName: "clock",
    title: "High Uptime Requirements",
    description: "Mission-critical uptime expectations with safety and operational risk.",
  },
  {
    iconName: "cpu",
    title: "OT Systems",
    description: "Existing OT systems with strict change control requirements.",
  },
];

// ============================================================================
// TYPICAL INTEGRATIONS (from Knowledge Doc)
// ============================================================================

export const typicalIntegrations: string[] = [
  "SCADA systems",
  "Inverters and trackers",
  "Weather stations",
  "CMMS platforms",
  "Asset management systems",
  "Utility dispatch and reporting",
];

// ============================================================================
// SECURITY/COMPLIANCE EXPECTATIONS (from Knowledge Doc)
// ============================================================================

export interface SecurityExpectation {
  iconName: IconName;
  title: string;
  description: string;
}

export const securityExpectations: SecurityExpectation[] = [
  {
    iconName: "shield",
    title: "OT Cybersecurity Posture",
    description: "Strong identity and access control for operational technology.",
  },
  {
    iconName: "alertTriangle",
    title: "Monitoring & Incident Response",
    description: "Real-time monitoring with incident response readiness.",
  },
  {
    iconName: "clipboard",
    title: "Audit Trails",
    description: "Complete audit logging for compliance and forensics.",
  },
];

// ============================================================================
// CORE KPIs (from Knowledge Doc)
// ============================================================================

export interface CoreKPI {
  metric: string;
  description: string;
}

export const coreKPIs: CoreKPI[] = [
  { metric: "Availability/Uptime", description: "System and asset availability targets" },
  { metric: "Downtime Minutes", description: "Total unplanned downtime tracking" },
  { metric: "MTTR", description: "Mean time to repair for incidents" },
  { metric: "Energy Yield", description: "Performance ratio and energy capture" },
  { metric: "Forecast Error", description: "MAPE/MAE for energy production forecasting" },
  { metric: "Curtailment Impacts", description: "Revenue loss from curtailment events" },
  { metric: "Maintenance Cost per MW", description: "Operational cost efficiency" },
];

// ============================================================================
// ZIGRON FIT - WHAT WE BUILD (from Knowledge Doc)
// ============================================================================

export interface ZigronCapability {
  iconName: IconName;
  title: string;
  description: string;
}

export const zigronFit: ZigronCapability[] = [
  {
    iconName: "barChart",
    title: "Smart Energy Monitoring + Forecasting",
    description: "Real-time monitoring platforms with AI-driven yield forecasting.",
  },
  {
    iconName: "cpu",
    title: "SCADA + Cloud Integration",
    description: "Secure integration architecture connecting OT and IT systems.",
  },
  {
    iconName: "wrench",
    title: "Predictive Maintenance Workflows",
    description: "Failure prediction and maintenance prioritization for energy assets.",
  },
  {
    iconName: "database",
    title: "Engineering-Aware Analytics",
    description: "Analytics with structural and geotechnical context for deeper insights.",
  },
];

// ============================================================================
// RECOMMENDED SOLUTIONS (from Knowledge Doc)
// ============================================================================

export interface RecommendedSolution {
  title: string;
  description: string;
  bestFor: string;
  outcome: string;
  href: string;
}

export const recommendedSolutions: RecommendedSolution[] = [
  {
    title: "Smart Energy Solar",
    description: "Comprehensive solar fleet monitoring, forecasting, and optimization platform.",
    bestFor: "Utility-scale solar operators",
    outcome: "Improved yield and reduced downtime",
    href: "/solutions/smart-energy-solar",
  },
  {
    title: "Predictive Maintenance",
    description: "AI-driven failure prediction for rotating equipment and energy assets.",
    bestFor: "Reducing unplanned outages",
    outcome: "30%+ reduction in maintenance OpEx",
    href: "/solutions/predictive-maintenance",
  },
];

// ============================================================================
// CHALLENGES
// ============================================================================

export interface Challenge {
  iconName: IconName;
  title: string;
  description: string;
}

export const challenges: Challenge[] = [
  {
    iconName: "alertTriangle",
    title: "Legacy Infrastructure Integration",
    description:
      "Connecting decades-old SCADA systems with modern cloud IoT platforms without disrupting operations.",
  },
  {
    iconName: "shield",
    title: "Strict Cybersecurity Requirements",
    description:
      "Navigating complex OT cybersecurity frameworks for connected devices.",
  },
  {
    iconName: "clock",
    title: "Unplanned Asset Downtime",
    description:
      "Reactive maintenance leading to expensive truck rolls and lost generation capacity.",
  },
  {
    iconName: "database",
    title: "Data Silos & Interoperability",
    description:
      "Fragmented data sources across distributed sites preventing unified visibility.",
  },
  {
    iconName: "wifi",
    title: "Edge Connectivity Issues",
    description:
      "Maintaining reliable data transmission in remote areas with unstable network coverage.",
  },
];

// ============================================================================
// ENGINEERING SERVICES
// ============================================================================

export interface ServiceCategory {
  iconName: IconName;
  title: string;
  services: string[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    iconName: "cpu",
    title: "Embedded & Firmware",
    services: [
      "RTOS Development",
      "Sensor Integration",
      "Low-Power Wireless (LoRaWAN)",
      "Edge Computing Algorithms",
    ],
  },
  {
    iconName: "cloud",
    title: "Cloud & DevOps",
    services: [
      "AWS/Azure IoT Architecture",
      "Serverless Backend",
      "Infrastructure as Code",
      "Scalable API Design",
    ],
  },
  {
    iconName: "zap",
    title: "AI & Data Engineering",
    services: [
      "Time-Series Forecasting",
      "Anomaly Detection Models",
      "Big Data Pipelines",
      "Performance Analytics",
    ],
  },
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
    title: "OT/IT Segmentation",
    description:
      "Secure network segmentation between operational technology and IT systems.",
  },
  {
    iconName: "lock",
    title: "End-to-End Encryption",
    description:
      "AES-256 data encryption at rest and TLS 1.3 in transit.",
  },
  {
    iconName: "clock",
    title: "Immutable Audit Logs",
    description:
      "Comprehensive logging for forensics and regulatory reporting.",
  },
  {
    iconName: "clipboard",
    title: "RBAC & Least Privilege",
    description:
      "Strict role-based access control for operators and admins.",
  },
];

// ============================================================================
// CASE STUDIES
// ============================================================================

export interface CaseStudy {
  image: string;
  category: string;
  title: string;
  challenge: string;
  result: string;
  href: string;
}

export const caseStudies: CaseStudy[] = [
  {
    image: "/images/case-studies/terrasmart.jpg",
    category: "Solar",
    title: "TerraSmart Solar Installation Tracking",
    challenge: "Manual tracking caused delays in deploying massive solar fields.",
    result: "30% efficiency boost with automated IoT ground sensors.",
    href: "/work/terrasmart-solar",
  },
  {
    image: "/images/case-studies/terratrak.jpg",
    category: "AI Optimization",
    title: "TerraTrak AI Solar Tracking",
    challenge: "Static algorithms failed to optimize panel angles for variable weather.",
    result: "+12% energy output per panel via real-time ML adjustment.",
    href: "/work/terratrak-ai",
  },
];

// ============================================================================
// IMPLEMENTATION PATTERNS
// ============================================================================

export interface ImplementationPattern {
  number: number;
  title: string;
  description: string;
  features: string[];
  featured: boolean;
}

export const implementationPatterns: ImplementationPattern[] = [
  {
    number: 1,
    title: "Discovery",
    description:
      "Data inventory, KPI definitions, architecture design, and pilot scope definition.",
    features: ["2-4 weeks", "KPI alignment", "Architecture review"],
    featured: false,
  },
  {
    number: 2,
    title: "Pilot",
    description:
      "Ingestion, dashboards, first alerts, and baseline models at a single site.",
    features: ["6-10 weeks", "Single site validation", "Baseline metrics"],
    featured: true,
  },
  {
    number: 3,
    title: "Rollout",
    description:
      "Multi-site scaling, integrations, and platform hardening.",
    features: ["8-16+ weeks", "Fleet-wide deployment", "Full integrations"],
    featured: false,
  },
];

// ============================================================================
// FAQs (from Knowledge Doc)
// ============================================================================

export interface FAQ {
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    question: "Can you integrate with SCADA and still keep OT boundaries?",
    answer:
      "Yes. We design secure integration architectures with proper OT/IT segmentation. Our gateways support standard industrial protocols (Modbus, DNP3, OPC-UA) to extract data without compromising OT security.",
  },
  {
    question: "How do you standardize across many sites?",
    answer:
      "We use template-based design systems that provide standardized data models, dashboards, and alerts while allowing site-specific customization. This enables consistent operations across your entire fleet.",
  },
  {
    question: "How do you prevent noisy alerting?",
    answer:
      "We design alerting logic based on operational workflows, not just thresholds. This includes trend analysis, anomaly detection with context, and tunable alert rules that produce actionable outcomes rather than noise.",
  },
  {
    question: "What's the typical timeline for a pilot?",
    answer:
      "A typical pilot takes 6-10 weeks from kickoff to live dashboards and alerts. This includes data integration, KPI validation, and initial model training.",
  },
];

// ============================================================================
// CTA SECTION
// ============================================================================

export const ctaData = {
  headline: "Ready to Optimize Your Energy Assets?",
  subheadline:
    "Describe your environment and goals. Our engineers will review your needs before we connect.",
  email: "energy@zigron.com",
};

// ============================================================================
// LEGACY EXPORTS (for backwards compatibility with page.tsx)
// ============================================================================

export interface Solution {
  iconName: IconName;
  title: string;
  description: string;
  href: string;
}

export const solutions: Solution[] = [
  {
    iconName: "zap",
    title: "Advanced Metering (AMI)",
    description:
      "Secure firmware and connectivity modules for next-gen smart meters and aggregators.",
    href: "/solutions/smart-metering",
  },
  {
    iconName: "sun",
    title: "Renewable Asset Management",
    description:
      "Centralized platforms to monitor performance of solar arrays, wind farms, and battery storage.",
    href: "/solutions/renewable-asset-management",
  },
  {
    iconName: "cpu",
    title: "Grid Edge Intelligence",
    description:
      "Edge computing solutions that process data locally for real-time load balancing and fault detection.",
    href: "/solutions/grid-edge",
  },
  {
    iconName: "barChart",
    title: "Predictive Analytics Dashboards",
    description:
      "Custom BI tools integrating weather data, usage patterns, and asset health for better forecasting.",
    href: "/solutions/energy-analytics",
  },
  {
    iconName: "battery",
    title: "Energy Storage Systems (BESS)",
    description:
      "Control software and battery management system (BMS) integration for grid stability.",
    href: "/solutions/energy-storage",
  },
];

