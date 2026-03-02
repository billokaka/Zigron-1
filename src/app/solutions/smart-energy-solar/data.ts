// Smart Energy & Solar Solution Page - Content Data
// Updated per Knowledge Doc: SOLUTIONS.md Section 1

// ============================================================================
// PAGE METADATA
// ============================================================================

export const pageMetadata = {
  title: "Smart Energy & Solar Solutions | Zigron",
  description:
    "OEM/enterprise solution for utility-scale solar performance, reliability, and cost optimization. SCADA/IoT telemetry, AI forecasting, and engineering-aware analytics.",
  keywords: [
    "smart energy",
    "solar monitoring",
    "renewable energy IoT",
    "solar farm management",
    "energy analytics",
    "SCADA integration",
    "predictive maintenance",
  ],
};

// ============================================================================
// HERO SECTION
// ============================================================================

export const heroData = {
  badge: "Smart Energy Solutions",
  headline: "Smart Energy &",
  headlineHighlight: "Solar Platform",
  subheadline:
    "Custom-built solutions for utility-scale solar performance, reliability, and cost optimization—combining SCADA/IoT telemetry, AI forecasting, and engineering-aware analytics. You own 100% of the IP.",
  primaryCta: { label: "Talk to an expert", href: "/contact" },
  secondaryCta: { label: "View case studies", href: "/work" },
  trustBadges: [
    { icon: "zap", label: "Improved Yield", color: "green" },
    { icon: "eye", label: "Real-time Visibility", color: "blue" },
    { icon: "shield", label: "99.99% Uptime", color: "purple" },
  ],
};

// ============================================================================
// ICON TYPES
// ============================================================================

export type IconName =
  | "sun"
  | "zap"
  | "eye"
  | "barChart"
  | "shield"
  | "cpu"
  | "cloud"
  | "settings"
  | "alertTriangle"
  | "trendingUp"
  | "battery"
  | "wifi"
  | "database"
  | "smartphone"
  | "checkCircle"
  | "layers"
  | "lock"
  | "target"
  | "wrench"
  | "users";

// ============================================================================
// BEST-FIT CUSTOMERS (from Knowledge Doc)
// ============================================================================

export interface BestFitCustomer {
  title: string;
  description: string;
}

export const bestFitCustomers: BestFitCustomer[] = [
  {
    title: "Solar OEMs and EPCs",
    description: "Equipment manufacturers and engineering, procurement, and construction companies.",
  },
  {
    title: "Utility-Scale Solar Operators",
    description: "Single site or fleet operators needing centralized monitoring.",
  },
  {
    title: "Asset Owners",
    description: "Organizations needing forecasting, maintenance triggers, and performance optimization.",
  },
];

// ============================================================================
// PRIMARY OUTCOMES (from Knowledge Doc)
// ============================================================================

export const primaryOutcomes: string[] = [
  "Improve yield and energy capture",
  "Reduce unplanned downtime and mechanical failures",
  "Improve forecasting accuracy and operational decision-making",
  "Reduce material and engineering cost through optimized design inputs",
];

// ============================================================================
// MODULES / CAPABILITIES (from Knowledge Doc)
// ============================================================================

export interface Module {
  iconName: IconName;
  title: string;
  description: string;
  features: string[];
}

export const modules: Module[] = [
  {
    iconName: "database",
    title: "Telemetry Ingestion & Normalization",
    description: "Unified data collection from all field equipment.",
    features: [
      "Inverter data collection",
      "Tracker telemetry",
      "Weather and irradiance",
      "SCADA tag integration",
    ],
  },
  {
    iconName: "barChart",
    title: "Fleet Performance Monitoring",
    description: "KPIs, scorecards, and anomaly detection across your portfolio.",
    features: [
      "Site performance scorecards",
      "Anomaly detection hooks",
      "Customizable alerting",
      "Historical trending",
    ],
  },
  {
    iconName: "wrench",
    title: "Predictive Maintenance Workflow",
    description: "AI-driven failure prediction and maintenance optimization.",
    features: [
      "Failure risk scoring",
      "Work order triggers",
      "Maintenance prioritization",
      "CMMS integration",
    ],
  },
  {
    iconName: "trendingUp",
    title: "Energy Yield Forecasting",
    description: "Short and long-horizon forecasts with uncertainty bands.",
    features: [
      "Day-ahead forecasting",
      "Seasonal modeling",
      "Weather integration",
      "Uncertainty quantification",
    ],
  },
  {
    iconName: "settings",
    title: "Tracker Optimization",
    description: "Control recommendations for tracking system optimization.",
    features: [
      "Angle optimization",
      "Backtracking algorithms",
      "Weather-responsive control",
      "Performance validation",
    ],
  },
  {
    iconName: "smartphone",
    title: "Operations Console",
    description: "Role-based dashboards for all stakeholders.",
    features: [
      "Operator dashboards",
      "Reliability views",
      "Executive summaries",
      "Mobile access",
    ],
  },
];

// ============================================================================
// INPUTS REQUIRED (from Knowledge Doc)
// ============================================================================

export interface InputRequired {
  iconName: IconName;
  title: string;
  description: string;
}

export const inputsRequired: InputRequired[] = [
  {
    iconName: "database",
    title: "Tag List / Telemetry Definitions",
    description: "SCADA tags, device metadata, and naming standards.",
  },
  {
    iconName: "layers",
    title: "Site/Fleet Topology",
    description: "Site hierarchy and naming standards.",
  },
  {
    iconName: "wrench",
    title: "Maintenance History",
    description: "Historical failures and taxonomy (if predictive maintenance in scope).",
  },
  {
    iconName: "sun",
    title: "Weather/Irradiance Sources",
    description: "Weather data providers and requirements.",
  },
  {
    iconName: "cpu",
    title: "Integration Targets",
    description: "CMMS, ERP, ticketing system requirements.",
  },
];

// ============================================================================
// KPIs (from Knowledge Doc)
// ============================================================================

export interface KPI {
  metric: string;
  description: string;
}

export const kpis: KPI[] = [
  { metric: "Energy Capture / Yield Lift", description: "Improvement in energy generation" },
  { metric: "Downtime Reduction", description: "Reduced unplanned outages" },
  { metric: "MTBF Improvement", description: "Increased mean time between failures" },
  { metric: "MTTR Reduction", description: "Faster incident resolution" },
  { metric: "Forecast Error", description: "MAPE/MAE and bias reduction" },
  { metric: "Alert Precision", description: "Actionable alert percentage / noise rate" },
  { metric: "Cost per Site/Month", description: "Operational cost efficiency" },
];

// ============================================================================
// ACCEPTANCE CRITERIA (from Knowledge Doc)
// ============================================================================

export const acceptanceCriteria: string[] = [
  "KPI definitions and site scorecards agreed and implemented",
  "Monitoring dashboards live with validated data contracts",
  "Alerting and escalation rules tested with historical scenarios",
  "Predictive workflows validated (pilot) before broad rollout",
  "Observability (SLOs, dashboards, runbooks) delivered",
];

// ============================================================================
// SECURITY CONTROLS (from Knowledge Doc)
// ============================================================================

export interface SecurityControl {
  iconName: IconName;
  title: string;
  description: string;
}

export const securityControls: SecurityControl[] = [
  {
    iconName: "shield",
    title: "OT/IT Segmentation",
    description: "Segmented access between SCADA/OT and IT/cloud systems.",
  },
  {
    iconName: "lock",
    title: "Strict RBAC",
    description: "Role-based access for operators and admins with audit logs.",
  },
  {
    iconName: "checkCircle",
    title: "Signed Updates",
    description: "Signed update mechanisms for any deployed edge components.",
  },
  {
    iconName: "users",
    title: "Safe-Fallback Modes",
    description: "Human approval gates for automation when needed.",
  },
];

// ============================================================================
// DELIVERY PHASES (from Knowledge Doc)
// ============================================================================

export interface DeliveryPhase {
  phase: number;
  title: string;
  duration: string;
  description: string;
  activities: string[];
}

export const deliveryPhases: DeliveryPhase[] = [
  {
    phase: 1,
    title: "Discovery",
    duration: "2-4 weeks",
    description: "Data inventory, KPI definitions, architecture, pilot scope",
    activities: ["Data inventory", "KPI alignment", "Architecture design", "Pilot scoping"],
  },
  {
    phase: 2,
    title: "Pilot",
    duration: "6-10 weeks",
    description: "Ingestion, dashboards, first alerts, baseline models",
    activities: ["Data ingestion", "Dashboard development", "Initial alerting", "Model training"],
  },
  {
    phase: 3,
    title: "Rollout",
    duration: "8-16+ weeks",
    description: "Multi-site scaling, integrations, hardening",
    activities: ["Fleet deployment", "CMMS integration", "Security hardening", "Training"],
  },
  {
    phase: 4,
    title: "Operate",
    duration: "Ongoing",
    description: "Tuning, incident response, model monitoring, cost optimization",
    activities: ["Ongoing tuning", "Incident support", "Model retraining", "Cost optimization"],
  },
];

// ============================================================================
// CROSS-LINKS (from Knowledge Doc)
// ============================================================================

export const crossLinks = {
  services: [
    { title: "Connectivity", href: "/services/iot/connectivity" },
    { title: "Data & Analytics", href: "/services/iot/data-analytics" },
    { title: "Analytics & BI", href: "/services/ai/analytics" },
    { title: "MLOps", href: "/services/ai/mlops" },
    { title: "Structural Engineering", href: "/services/engineering/structural" },
    { title: "Civil Engineering", href: "/services/engineering/civil" },
  ],
  industries: [
    { title: "Energy & Utilities", href: "/industries/energy" },
  ],
  work: [
    { title: "TerraSmart Solar OEM", href: "/work/terrasmart-solar" },
    { title: "TerraTrak AI Solar Tracking", href: "/work/terratrak-ai" },
  ],
};

// ============================================================================
// ARCHITECTURE
// ============================================================================

export interface ArchitectureLayer {
  iconName: IconName;
  title: string;
  components: string[];
}

export const architectureLayers: ArchitectureLayer[] = [
  {
    iconName: "cpu",
    title: "Field Layer",
    components: ["Inverters", "Trackers", "Weather Stations", "Smart Meters"],
  },
  {
    iconName: "wifi",
    title: "Connectivity",
    components: ["Modbus/TCP", "OPC-UA", "Cellular/Satellite", "Edge Gateways"],
  },
  {
    iconName: "cloud",
    title: "Platform",
    components: ["Data Ingestion", "Time-series DB", "ML Pipeline", "API Layer"],
  },
  {
    iconName: "smartphone",
    title: "Applications",
    components: ["Operator Dashboard", "Mobile App", "Reports", "SCADA Integration"],
  },
];

// ============================================================================
// TECH STACK
// ============================================================================

export interface TechCategory {
  category: string;
  technologies: string[];
}

export const techStack: TechCategory[] = [
  {
    category: "Data Pipeline",
    technologies: ["Apache Kafka", "TimescaleDB", "InfluxDB", "Grafana"],
  },
  {
    category: "Edge Computing",
    technologies: ["ARM-based Gateways", "Modbus Libraries", "OPC-UA Client", "Edge ML"],
  },
  {
    category: "Analytics & ML",
    technologies: ["Python", "TensorFlow", "Prophet", "Custom Algorithms"],
  },
  {
    category: "Cloud Infrastructure",
    technologies: ["AWS IoT Core", "Azure IoT Hub", "Kubernetes", "Terraform"],
  },
];

// ============================================================================
// CASE STUDIES
// ============================================================================

export interface CaseStudy {
  title: string;
  client: string;
  result: string;
  href: string;
}

export const caseStudies: CaseStudy[] = [
  {
    title: "TerraSmart Solar Installation Tracking",
    client: "TerraSmart",
    result: "30% efficiency boost with automated IoT ground sensors.",
    href: "/work/terrasmart-solar",
  },
  {
    title: "TerraTrak AI-Powered Solar Tracking",
    client: "TerraSmart",
    result: "+12% energy generation with ML-optimized tracking algorithms.",
    href: "/work/terratrak-ai",
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
    question: "How do you integrate with SCADA without risking operations?",
    answer:
      "We design secure integration architectures with proper OT/IT segmentation. Our approach uses read-only connections where possible, with strict access controls and audit logging for any write operations. We never compromise operational safety.",
  },
  {
    question: "What data is needed for forecasting and predictive maintenance?",
    answer:
      "For forecasting: historical generation data, weather/irradiance, and equipment metadata. For predictive maintenance: telemetry from key components, maintenance history, and failure taxonomy. We can start with partial data and expand.",
  },
  {
    question: "How do you prevent noisy alerts?",
    answer:
      "We design alerting based on operational workflows, not just thresholds. This includes trend analysis, anomaly detection with context, severity classification, and tunable rules. The goal is actionable alerts, not noise.",
  },
  {
    question: "Do we own the platform and code?",
    answer:
      "Yes, 100%. Zigron builds custom solutions—you own all intellectual property, code, and documentation. There are no license fees or vendor lock-in. The platform is yours to operate or have us manage.",
  },
];

// ============================================================================
// CTA SECTION
// ============================================================================

export const ctaData = {
  headline: "Ready to Optimize Your Solar Assets?",
  subheadline:
    "Describe your portfolio and goals. Our engineers will assess your requirements and propose a tailored solution.",
  email: "energy@zigron.com",
};

// ============================================================================
// LEGACY EXPORTS (for backwards compatibility with components)
// ============================================================================

// Alias modules as capabilities for component compatibility
export const capabilities = modules;

// Use cases for the page
export interface UseCase {
  title: string;
  challenge: string;
  solution: string;
  outcome: string;
  metrics: { value: string; label: string }[];
}

export const useCases: UseCase[] = [
  {
    title: "Utility-Scale Solar Farm",
    challenge:
      "A 200MW solar farm was experiencing unexplained performance degradation across multiple inverters.",
    solution:
      "Deployed real-time monitoring with ML-based anomaly detection to identify and diagnose issues.",
    outcome:
      "Identified faulty combiner boxes and soiling patterns, recovering 8% of lost generation.",
    metrics: [
      { value: "+8%", label: "Generation Recovered" },
      { value: "2 weeks", label: "Time to Deploy" },
    ],
  },
  {
    title: "Distributed Generation Portfolio",
    challenge:
      "Managing 150+ rooftop installations across multiple states with inconsistent monitoring.",
    solution:
      "Unified monitoring platform with standardized data ingestion and automated reporting.",
    outcome:
      "Reduced O&M costs by 25% and improved issue resolution time from days to hours.",
    metrics: [
      { value: "-25%", label: "O&M Cost" },
      { value: "4hr", label: "Avg Resolution" },
    ],
  },
  {
    title: "Solar + Storage Microgrid",
    challenge:
      "Optimizing battery dispatch for a commercial facility with demand charges and time-of-use rates.",
    solution:
      "AI-driven energy management system with real-time optimization and forecasting.",
    outcome:
      "Achieved 40% reduction in demand charges and enabled participation in grid services.",
    metrics: [
      { value: "-40%", label: "Demand Charges" },
      { value: "$50K", label: "Annual Savings" },
    ],
  },
];

// Key features
export interface Feature {
  title: string;
  description: string;
}

export const keyFeatures: Feature[] = [
  {
    title: "Multi-Site Portfolio View",
    description: "Aggregate performance across your entire fleet with drill-down to individual sites and devices.",
  },
  {
    title: "Automated Fault Detection",
    description: "Rule-based and ML-driven fault detection with automatic severity classification and routing.",
  },
  {
    title: "Revenue Analytics",
    description: "Track actual vs. expected generation with PPA billing integration and curtailment analysis.",
  },
  {
    title: "SCADA Integration",
    description: "Bi-directional integration with existing SCADA systems via standard protocols.",
  },
  {
    title: "Weather Intelligence",
    description: "Hyperlocal weather forecasting for generation prediction and storm preparation.",
  },
  {
    title: "Regulatory Compliance",
    description: "Automated reporting for NERC, RTO/ISO requirements, and renewable energy certificates.",
  },
];

// Integrations
export const integrations = [
  { name: "SMA", category: "Inverters" },
  { name: "SolarEdge", category: "Inverters" },
  { name: "Huawei", category: "Inverters" },
  { name: "NEXTracker", category: "Trackers" },
  { name: "Array Technologies", category: "Trackers" },
  { name: "Also Energy", category: "Monitoring" },
  { name: "PowerFactors", category: "Monitoring" },
  { name: "Salesforce", category: "CRM" },
];

// Deployment options
export interface DeploymentOption {
  title: string;
  description: string;
  features: string[];
  bestFor: string;
}

export const deploymentOptions: DeploymentOption[] = [
  {
    title: "SaaS Platform",
    description: "Fully managed cloud deployment with automatic updates and scaling.",
    features: ["Multi-tenant", "Auto-scaling", "99.9% SLA", "Managed updates"],
    bestFor: "Rapid deployment, distributed portfolios",
  },
  {
    title: "Private Cloud",
    description: "Dedicated instance in your cloud environment with full data control.",
    features: ["Single tenant", "Your VPC", "Custom security", "Data sovereignty"],
    bestFor: "Enterprise requirements, regulated industries",
  },
  {
    title: "On-Premise",
    description: "Deploy in your data center with complete control.",
    features: ["Air-gapped option", "Full control", "Custom integration", "Local support"],
    bestFor: "Utilities, critical infrastructure, no cloud policy",
  },
];

