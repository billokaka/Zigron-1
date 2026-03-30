// Services Hub - Content Data
// All page content is centralized here for maintainability and SEO

// ============================================================================
// PAGE METADATA
// ============================================================================

export const pageMetadata = {
  image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
        category: "Technology",
        title: "Services Hub | Zigron",
  description:
    "End-to-end engineering services across IoT, AI, and core engineering disciplines. From device to cloud to dashboard.",
  keywords: [
    "IoT services",
    "AI services",
    "engineering services",
    "firmware development",
    "cloud platform",
    "machine learning",
    "data engineering",
  ],
};

// ============================================================================
// HERO SECTION
// ============================================================================

export const heroData = {
  badge: "Engineering Services",
  headline: "Full-Stack Engineering",
  headlineHighlight: "Across Three Pillars",
  subheadline:
    "Most projects fail at the seams—between device, data, AI, and deployment. We build with the seams in mind, delivering end-to-end solutions.",
  primaryCta: { label: "Talk to an engineer", href: "/contact" },
  secondaryCta: { label: "View case studies", href: "/work" },
};

// ============================================================================
// ICON TYPES
// ============================================================================

export type IconName =
  | "settings"
  | "lightbulb"
  | "building2"
  | "checkCircle"
  | "zap"
  | "users"
  | "briefcase"
  | "cpu"
  | "cloud"
  | "smartphone"
  | "shield"
  | "database"
  | "barChart";

// ============================================================================
// SERVICE VERTICALS
// ============================================================================

export interface ServiceVertical {
  iconName: IconName;
  title: string;
  slug: string;
  description: string;
  features: string[];
  color: "blue" | "purple" | "orange" | "teal";
}

export const serviceVerticals: ServiceVertical[] = [
  {
    iconName: "settings",
    title: "IoT Product & Platform Engineering",
    slug: "iot",
    description:
      "From custom devices to cloud platforms, we help you build connected systems that are deployable, maintainable, and secure.",
    features: [
      "Device & Firmware Development",
      "Cloud Platform & APIs",
      "Mobile & Web Applications",
      "Connectivity & Integration",
      "Security & Compliance",
    ],
    color: "blue",
  },
  {
    iconName: "lightbulb",
    title: "AI & Data Systems",
    slug: "ai",
    description:
      "Build AI you can ship—supported by strong data foundations, deployment workflows, and ongoing monitoring.",
    features: [
      "Data Engineering & Pipelines",
      "ML / CV / NLP Development",
      "GenAI Integration",
      "MLOps & Model Optimization",
      "Analytics & Visualization",
    ],
    color: "purple",
  },
  {
    iconName: "building2",
    title: "Engineering Design & Analysis",
    slug: "engineering",
    description:
      "Practical engineering services that support product development and infrastructure delivery—designed for accuracy and speed.",
    features: [
      "CAD Design & Drafting",
      "Structural Analysis",
      "Civil Engineering",
      "Geotechnical Engineering",
      "Project Management",
    ],
    color: "orange",
  },
  {
    iconName: "shield",
    title: "Cybersecurity",
    slug: "cybersecurity",
    description:
      "Protect your devices, cloud infrastructure, and data pipelines with security built into every layer—from IoT endpoints to CI/CD.",
    features: [
      "IoT Security & Device Protection",
      "Cloud & Infrastructure Security",
      "DevSecOps & Secure CI/CD",
      "Identity & Access Management",
      "Vulnerability Assessment & Pen Testing",
    ],
    color: "teal",
  },
];

// ============================================================================
// ENGAGEMENT MODELS
// ============================================================================

export interface EngagementModel {
  iconName: IconName;
  title: string;
  subtitle: string;
  bestFor: string;
  includes: string[];
  featured: boolean;
}

export const engagementModels: EngagementModel[] = [
  {
    iconName: "briefcase",
    title: "Project Delivery",
    subtitle: "Fixed Scope",
    bestFor:
      "Defined deliverables like an MVP, a specific module update, or a prototype build.",
    includes: [
      "Fixed timeline & budget",
      "Managed delivery team",
      "Final IP handover",
    ],
    featured: false,
  },
  {
    iconName: "users",
    title: "Dedicated Team",
    subtitle: "Monthly Retainer",
    bestFor:
      "Scale-ups needing ongoing engineering power to accelerate roadmap execution.",
    includes: [
      "Full-time experts embedded",
      "Agile sprint cycles",
      "Flexible scope adjustment",
    ],
    featured: true,
  },
  {
    iconName: "zap",
    title: "OEM Partnership",
    subtitle: "Long-term Roadmap",
    bestFor:
      "Enterprises outsourcing entire product lines or requiring lifecycle support.",
    includes: [
      "Strategic roadmap planning",
      "SLA-based maintenance",
      "Volume deployment support",
    ],
    featured: false,
  },
];

// ============================================================================
// CASE STUDIES
// ============================================================================

export interface CaseStudy {
  image: string;
  title: string;
  category: string;
  outcome: string;
  href: string;
}

export const caseStudies: CaseStudy[] = [
  {
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80",
    title: "Abode Smart Home Security",
    category: "IoT Services",
    outcome: "99.99% uptime & 50% infrastructure cost reduction",
    href: "/work/abode-smart-home",
  },
  {
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
    title: "TerraSmart Solar OEM",
    category: "IoT + Engineering",
    outcome: "30% faster field deployment speed",
    href: "/work/terrasmart-solar",
  },
  {
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
    title: "TerraTrak AI Solar Tracking",
    category: "AI + IoT",
    outcome: "+12% energy generation boost",
    href: "/work/terratrak-ai",
  },
];

// ============================================================================
// CAPABILITIES GRID
// ============================================================================

export interface Capability {
  iconName: IconName;
  title: string;
  description: string;
  services: string[];
}

export const capabilities: Capability[] = [
  {
    iconName: "cpu",
    title: "Embedded & Firmware",
    description: "Custom device development from prototype to production",
    services: ["RTOS/Bare-metal", "BLE/WiFi/Cellular", "Secure Boot & OTA"],
  },
  {
    iconName: "cloud",
    title: "Cloud & Backend",
    description: "Scalable platforms built for IoT workloads",
    services: ["AWS/Azure/GCP", "Microservices", "Real-time Processing"],
  },
  {
    iconName: "smartphone",
    title: "Mobile & Web Apps",
    description: "User-facing applications for device control and analytics",
    services: ["React Native", "React/Next.js", "Native iOS/Android"],
  },
  {
    iconName: "database",
    title: "Data Engineering",
    description: "Robust pipelines from ingestion to analytics",
    services: ["ETL/ELT", "Data Lakes", "Time-series DBs"],
  },
  {
    iconName: "lightbulb",
    title: "AI/ML Development",
    description: "From model training to production deployment",
    services: ["TensorFlow/PyTorch", "Computer Vision", "NLP/LLMs"],
  },
  {
    iconName: "shield",
    title: "Security & Compliance",
    description: "Enterprise-grade security built into every layer",
    services: ["HIPAA/SOC2", "E2E Encryption", "Penetration Testing"],
  },
];

// ============================================================================
// PROCESS STEPS
// ============================================================================

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery",
    description:
      "Understand your goals, constraints, and existing systems to define a clear project scope.",
  },
  {
    number: "02",
    title: "Architecture",
    description:
      "Design scalable, maintainable systems with security and compliance in mind.",
  },
  {
    number: "03",
    title: "Build & Iterate",
    description:
      "Agile sprints with continuous delivery, testing, and stakeholder feedback.",
  },
  {
    number: "04",
    title: "Deploy & Support",
    description:
      "Production launch with monitoring, documentation, and ongoing maintenance.",
  },
];

// ============================================================================
// CTA SECTION
// ============================================================================

export const ctaData = {
  headline: "Ready to Start Building?",
  subheadline:
    "Tell us about your project and we'll connect you with the right engineering team.",
  primaryCta: { label: "Book a consultation", href: "/contact" },
  secondaryCta: { label: "View our work", href: "/work" },
};
