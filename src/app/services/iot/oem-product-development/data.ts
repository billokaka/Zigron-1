// IoT Product Development Service Page - Content Data
// Updated per Knowledge Doc: Global Zigron IoT Service Standards

// ============================================================================
// PAGE METADATA
// ============================================================================

export const pageMetadata = {
  title: "IoT Product Development Services | Zigron",
  description:
    "End-to-end IoT product delivery: device integration, cloud platform, apps, QA, and launch support. We build connected products that scale.",
  keywords: [
    "IoT product development",
    "connected products",
    "firmware development",
    "cloud IoT",
    "IoT platform",
    "embedded systems",
    "IoT security",
  ],
};

// ============================================================================
// HERO SECTION
// ============================================================================

export const heroData = {
  badge: "End-to-End Delivery",
  headline: "IoT Product",
  headlineHighlight: "Development",
  subheadline:
    "End-to-end IoT product delivery: device integration, cloud platform, apps, QA, and launch support. You own 100% of the IP.",
  primaryCta: { label: "Talk to an engineer", href: "/contact" },
  secondaryCta: { label: "View case studies", href: "/work" },
  trustBadges: [
    { icon: "shield", label: "100% IP Ownership", color: "green" },
    { icon: "users", label: "Dedicated Teams", color: "blue" },
    { icon: "cloud", label: "Multi-Cloud Ready", color: "purple" },
  ],
};

// ============================================================================
// ICON TYPES
// ============================================================================

export type IconName =
  | "cpu"
  | "code"
  | "server"
  | "smartphone"
  | "fileText"
  | "barChart"
  | "shield"
  | "users"
  | "cloud"
  | "search"
  | "layout"
  | "rocket"
  | "checkCircle"
  | "wifi"
  | "lock"
  | "eye"
  | "wrench"
  | "zap"
  | "target"
  | "alertTriangle"
  | "database";

// ============================================================================
// BEST-FIT CUSTOMERS (from Knowledge Doc)
// ============================================================================

export interface BestFitCustomer {
  title: string;
  description: string;
}

export const bestFitCustomers: BestFitCustomer[] = [
  {
    title: "OEMs Building Connected Products",
    description: "OEMs building branded connected products for consumer or industrial markets.",
  },
  {
    title: "Multi-Tenant Platform Needs",
    description: "Organizations needing multi-tenant platform foundations for future devices, partners, or regions.",
  },
  {
    title: "Production-Ready Requirements",
    description: "Teams requiring OTA, identity, fleet ops, and reliability baked in from day one.",
  },
];

// ============================================================================
// DELIVERABLES (from Knowledge Doc)
// ============================================================================

export interface Deliverable {
  iconName: IconName;
  title: string;
  description: string;
}

export const deliverables: Deliverable[] = [
  {
    iconName: "fileText",
    title: "Product Requirements & Technical Spec",
    description: "Comprehensive documentation of product requirements and technical specifications.",
  },
  {
    iconName: "cloud",
    title: "Cloud/Device Platform",
    description: "Device registry, command/control, telemetry ingestion, and rules engine.",
  },
  {
    iconName: "rocket",
    title: "OTA Update Pipeline",
    description: "Staged rollout strategy with safe update mechanisms and rollback paths.",
  },
  {
    iconName: "wrench",
    title: "Admin Tools",
    description: "Fleet management, diagnostics, and customer support tools.",
  },
  {
    iconName: "smartphone",
    title: "Mobile/Web App Foundations",
    description: "User onboarding, device control, and notification systems.",
  },
  {
    iconName: "checkCircle",
    title: "QA Automation & Launch Plan",
    description: "Load testing, release readiness checklist, and rollout playbook with monitoring.",
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
    iconName: "cpu",
    title: "Hardware Roadmap",
    description: "OEM hardware roadmap, device SDK/firmware baseline, or target silicon.",
  },
  {
    iconName: "smartphone",
    title: "Branding/UX Requirements",
    description: "Mobile and web branding and user experience requirements.",
  },
  {
    iconName: "users",
    title: "Support Workflow",
    description: "Customer care, RMA, and warranty signal expectations.",
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
  { metric: "Time-to-MVP", description: "Speed from kickoff to minimum viable product" },
  { metric: "Deployment Success Rate", description: "Percentage of successful device deployments" },
  { metric: "Defect Escape Rate", description: "Bugs that reach production" },
  { metric: "Fleet Onboarding Time", description: "Time to onboard devices at scale" },
  { metric: "Device Churn", description: "Device disconnection and failure rates" },
  { metric: "Uptime/SLO", description: "System availability targets" },
  { metric: "OTA Success Rate", description: "Firmware update success and rollback metrics" },
];

// ============================================================================
// ACCEPTANCE CRITERIA (from Knowledge Doc)
// ============================================================================

export const acceptanceCriteria: string[] = [
  "Pilot-to-production release gate passed (load + failure modes tested)",
  "Observability and runbooks in place",
  "Security baseline reviewed and implemented",
];

// ============================================================================
// SECURITY CONSIDERATIONS (from Knowledge Doc)
// ============================================================================

export interface SecurityConsideration {
  iconName: IconName;
  title: string;
  description: string;
}

export const securityConsiderations: SecurityConsideration[] = [
  {
    iconName: "shield",
    title: "Secure Provisioning",
    description: "Secure device provisioning with rotating credentials.",
  },
  {
    iconName: "lock",
    title: "Signed Firmware Updates",
    description: "Cryptographically signed firmware with verified rollback paths.",
  },
  {
    iconName: "eye",
    title: "Audit Logs",
    description: "Complete audit trails for admin actions and remote commands.",
  },
];

// ============================================================================
// PROCESS STEPS
// ============================================================================

export interface ProcessStep {
  iconName: IconName;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    iconName: "search",
    title: "Discover",
    description: "Requirements gathering and feasibility study",
  },
  {
    iconName: "layout",
    title: "Architect",
    description: "System design, component selection, and stack definition",
  },
  {
    iconName: "wrench",
    title: "Build",
    description: "Agile development: firmware, cloud, and applications",
  },
  {
    iconName: "checkCircle",
    title: "Validate",
    description: "QA, security audits, and certification testing",
  },
  {
    iconName: "rocket",
    title: "Deploy & Support",
    description: "Production rollout, OTA updates, and SLA support",
  },
];

// ============================================================================
// ARCHITECTURE LAYERS
// ============================================================================

export interface ArchitectureLayer {
  iconName: IconName;
  title: string;
  subtitle: string;
}

export const architectureLayers: ArchitectureLayer[] = [
  { iconName: "cpu", title: "Device", subtitle: "MCU, Sensors" },
  { iconName: "wifi", title: "Connectivity", subtitle: "NB-IoT, BLE, LoRa" },
  { iconName: "cloud", title: "Cloud Platform", subtitle: "Ingestion, Storage" },
  { iconName: "smartphone", title: "Applications", subtitle: "Web, Mobile" },
];

// ============================================================================
// TECHNICAL PILLARS
// ============================================================================

export interface TechnicalPillar {
  iconName: IconName;
  title: string;
  description: string;
  color: "blue" | "green" | "red" | "purple";
}

export const technicalPillars: TechnicalPillar[] = [
  {
    iconName: "barChart",
    title: "Scalability",
    description: "Designed to handle millions of devices.",
    color: "blue",
  },
  {
    iconName: "eye",
    title: "Observability",
    description: "Deep insights into system health.",
    color: "green",
  },
  {
    iconName: "lock",
    title: "Security",
    description: "End-to-end encryption and authentication.",
    color: "red",
  },
  {
    iconName: "wrench",
    title: "Maintainability",
    description: "Modular code and clear documentation.",
    color: "purple",
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
    category: "Cloud & DevOps",
    technologies: [
      "AWS IoT Core",
      "Azure IoT Hub",
      "Docker",
      "Kubernetes",
      "Terraform",
      "GitHub Actions",
    ],
  },
  {
    category: "Firmware & Edge",
    technologies: ["C/C++", "Rust", "FreeRTOS", "Yocto Linux", "Python", "Zephyr"],
  },
  {
    category: "Connectivity Protocols",
    technologies: ["MQTT", "CoAP", "BLE 5.2", "LoRaWAN", "Zigbee", "Matter"],
  },
];

// ============================================================================
// CROSS-LINKS (from Knowledge Doc)
// ============================================================================

export const crossLinks = {
  relatedServices: [
    { title: "Device & Firmware", href: "/services/iot/device-firmware" },
    { title: "Platform & Cloud", href: "/services/iot/platform-cloud" },
    { title: "Data & Analytics", href: "/services/iot/data-analytics" },
    { title: "Security & QA", href: "/services/iot/security-qa" },
  ],
  industries: [
    { title: "Consumer Electronics", href: "/industries/smart-home" },
    { title: "Manufacturing", href: "/industries/manufacturing" },
    { title: "Energy", href: "/industries/energy" },
  ],
  work: [
    { title: "Abode Smart Home Security", href: "/work/abode-smart-home" },
  ],
};

// ============================================================================
// CASE STUDIES
// ============================================================================

export interface CaseStudy {
  image: string;
  category: string;
  title: string;
  services: string;
  result: string;
  href: string;
}

export const caseStudies: CaseStudy[] = [
  { image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80", category: "Smart Home", title: "Abode Smart Home Security",
    services: "Cloud Engineering, Firmware Dev",
    result: "Scaled to 300,000+ devices with 99.99% uptime.",
    href: "/work/abode-smart-home",
  },
  { image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80", category: "Solar", title: "TerraSmart Solar Monitoring",
    services: "IoT Platform, Mobile Apps",
    result: "30% faster field deployment with real-time monitoring.",
    href: "/work/terrasmart-solar",
  },
  { image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80", category: "Industrial", title: "Industrial Predictive Maintenance",
    services: "Edge AI, Data Engineering",
    result: "40% reduction in unplanned downtime.",
    href: "/work",
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
    question: "Can you build around our existing firmware team?",
    answer:
      "Yes. We often augment in-house teams for specific components or phases. Our engineers integrate with your workflows, tools, and standards to provide seamless support without disruption.",
  },
  {
    question: "How do you ensure OTA safety at scale?",
    answer:
      "We implement staged rollouts with canary deployments, automatic rollback on failure detection, and comprehensive pre-deployment testing. Our OTA pipeline includes cryptographic signing and verification.",
  },
  {
    question: "Do we own the IP and deployment infrastructure?",
    answer:
      "Yes, 100%. All source code, schematics, and documentation created during the engagement are your property. We provide complete IP handover at project completion with no royalties or licensing fees.",
  },
  {
    question: "What's the typical timeline for an IoT product MVP?",
    answer:
      "For a connected product with cloud and mobile app, a typical MVP takes 3-6 months depending on hardware complexity and feature scope. We start with a 2-4 week discovery phase.",
  },
  {
    question: "What cloud platforms do you work with?",
    answer:
      "We're experienced with AWS IoT Core, Azure IoT Hub, and Google Cloud IoT. We can also work with specialized platforms like Particle or build custom backends for specific requirements.",
  },
];

// ============================================================================
// CTA SECTION
// ============================================================================

export const ctaData = {
  headline: "Ready to Build Your Connected Product?",
  subheadline:
    "Tell us about your project. Our engineers will review your requirements and provide a technical assessment.",
  email: "iot@zigron.com",
};

// ============================================================================
// LEGACY EXPORTS (for backwards compatibility with page.tsx)
// ============================================================================

export interface UseCase {
  title: string;
  problem: string;
  solution: string;
  outcome: string;
}

export const useCases: UseCase[] = [
  {
    title: "Smart Energy OEMs",
    problem:
      "Legacy grids lack real-time visibility, leading to unmanaged waste and slow response times.",
    solution:
      "Retrofit smart sensors with edge processing and secure LoRaWAN connectivity.",
    outcome: "99% data visibility & 15% reduction in loss.",
  },
  {
    title: "Medical Device Makers",
    problem:
      "Patient data is siloed in devices, preventing remote care and real-time alerts.",
    solution:
      "Secure, HIPAA-compliant IoT gateways aggregating multi-device data to cloud.",
    outcome: "Enabled 24/7 remote patient monitoring.",
  },
  {
    title: "Industrial Fleet Ops",
    problem:
      "Unpredictable equipment failure causing expensive downtime and logistics delays.",
    solution:
      "Predictive maintenance algorithms running on custom vibration sensors.",
    outcome: "30% reduction in maintenance OpEx.",
  },
];

