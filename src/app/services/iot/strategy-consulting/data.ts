// IoT Strategy Consulting - Content Data
// Updated per Knowledge Doc: Global Zigron IoT Service Standards

export const pageMetadata = {
    title: "IoT Strategy & Advisory | De-Risk Your Roadmap",
    description: "Strategic and technical planning to make your IoT product buildable, scalable, secure, and supportable before heavy engineering spend.",
};

export type IconName = "compass" | "scale" | "shieldCheck" | "barChart" | "lightbulb" | "checkCircle" | "alertTriangle" | "search" | "layout" | "rocket" | "wrench" | "cpu" | "wifi" | "cloud" | "smartphone" | "fileText" | "eye" | "lock" | "zap" | "shield" | "users" | "target" | "dollarSign" | "clock" | "database";

// ============================================================================
// HERO SECTION
// ============================================================================

export const heroData = {
    badge: "Strategic Advisory",
    headline: "De-Risk Your",
    headlineHighlight: "IoT Roadmap",
    subheadline: "Strategic and technical planning to make your IoT product buildable, scalable, secure, and supportable—before heavy engineering spend.",
    primaryCta: { label: "Book Strategy Call", href: "/contact" },
    secondaryCta: { label: "View Success Stories", href: "/work" },
    trustBadges: [
        { icon: "shield", label: "Security First", color: "green" },
        { icon: "users", label: "Executive Advisory", color: "blue" },
        { icon: "cloud", label: "Cloud Agnostic", color: "purple" },
    ],
};

// ============================================================================
// BEST-FIT CUSTOMERS (from Knowledge Doc)
// ============================================================================

export interface BestFitCustomer {
    title: string;
    description: string;
}

export const bestFitCustomers: BestFitCustomer[] = [
    {
        title: "OEM Launching Connected Products",
        description: "OEMs launching a new connected product line who need architecture validation before heavy spend.",
    },
    {
        title: "Existing Fleet Issues",
        description: "Organizations with existing fleets suffering from reliability, cost, or security issues.",
    },
    {
        title: "Architecture Decisions",
        description: "Teams needing to choose cloud/edge architecture, protocols, provisioning, or OTA approach.",
    },
    {
        title: "Pilot-to-Rollout Planning",
        description: "Companies requiring a pilot-to-rollout plan across sites or regions.",
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
        iconName: "compass",
        title: "IoT Product Roadmap",
        description: "MVP → V1 → Scale phases with clear milestones and decision gates.",
    },
    {
        iconName: "layout",
        title: "Reference Architecture",
        description: "Device/edge/cloud/app architecture with complete data and event flows.",
    },
    {
        iconName: "shieldCheck",
        title: "Security Baseline",
        description: "Device identity, certs/keys, authZ model, and OTA safety requirements.",
    },
    {
        iconName: "fileText",
        title: "Build Plan",
        description: "Backlog, milestones, staffing plan, and risk register.",
    },
    {
        iconName: "dollarSign",
        title: "Cost Model",
        description: "Cost per device/month projections with data and compute assumptions.",
    },
    {
        iconName: "target",
        title: "Pilot Plan",
        description: "Success criteria and go/no-go gates for pilot validation.",
    },
];

// ============================================================================
// USE CASES
// ============================================================================

export interface UseCase {
    title: string;
    problem: string;
    solution: string;
    outcome: string;
}

export const useCases: UseCase[] = [
    {
        title: "OEM Connected Product Launch",
        problem: "Great prototype, but uncertain about cloud architecture, costs, and scalability path.",
        solution: "Reference architecture with cost modeling and phased roadmap from MVP to scale.",
        outcome: "Clear path to 100K+ devices."
    },
    {
        title: "Legacy Fleet Modernization",
        problem: "Existing devices with reliability and security issues, no clear upgrade path.",
        solution: "Security audit, OTA strategy, and migration plan with minimal fleet disruption.",
        outcome: "50% reduction in support costs."
    },
    {
        title: "Pilot-to-Rollout Planning",
        problem: "Successful pilot but struggling to standardize deployment across multiple sites.",
        solution: "Deployment playbook, success criteria, and go/no-go gates for each rollout phase.",
        outcome: "Predictable multi-site expansion."
    }
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
        title: "Device Specifications",
        description: "Device types and constraints (power, connectivity, compute).",
    },
    {
        iconName: "compass",
        title: "Target Markets",
        description: "Target markets/regions and regulatory requirements.",
    },
    {
        iconName: "database",
        title: "Current Systems",
        description: "Existing systems (SCADA/ERP/CMMS/CRM) if integrating.",
    },
    {
        iconName: "alertTriangle",
        title: "Pain Points",
        description: "Current pain points and support/operations data (if already deployed).",
    },
];

// ============================================================================
// KPIs TO DEFINE UPFRONT (from Knowledge Doc)
// ============================================================================

export interface KPI {
    metric: string;
    description: string;
}

export const kpis: KPI[] = [
    { metric: "Uptime/SLO Target", description: "System reliability and availability goals" },
    { metric: "Command Latency", description: "End-to-end command response time" },
    { metric: "Telemetry Loss Rate", description: "Acceptable data loss threshold" },
    { metric: "OTA Success Rate", description: "Firmware update success and rollback metrics" },
    { metric: "Provisioning Time", description: "Device onboarding time and failure rate targets" },
    { metric: "Cost/Device/Month", description: "Operational cost targets per device" },
    { metric: "MTTR/Incident Frequency", description: "Mean time to repair and incident goals" },
];

// ============================================================================
// ACCEPTANCE CRITERIA (from Knowledge Doc)
// ============================================================================

export const acceptanceCriteria: string[] = [
    "Signed architecture and phased roadmap with measurable KPIs",
    "Risks ranked with mitigations and assigned owners",
    "Pilot scope locked with clearly defined success gates",
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
        title: "Device Identity Strategy",
        description: "Certificate-based identity preferred for device authentication.",
    },
    {
        iconName: "lock",
        title: "Least-Privilege IAM",
        description: "Role-based access model with minimal permissions.",
    },
    {
        iconName: "alertTriangle",
        title: "Threat Modeling",
        description: "Threat model covering fleet, cloud, and mobile apps.",
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
        title: "Assessment",
        description: "Audit current infrastructure, goals, and constraints.",
    },
    {
        iconName: "layout",
        title: "Architecture",
        description: "Define hardware, firmware, and cloud blueprints.",
    },
    {
        iconName: "checkCircle",
        title: "Validation",
        description: "Prototype critical paths to identify and kill risks.",
    },
    {
        iconName: "rocket",
        title: "Roadmap",
        description: "Create phased execution plan for scaling.",
    },
    {
        iconName: "users",
        title: "Governance",
        description: "Establish teams and security protocols.",
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
    { iconName: "lightbulb", title: "Business Case", subtitle: "ROI, Market Fit" },
    { iconName: "cpu", title: "Technology", subtitle: "Hardware, Cloud" },
    { iconName: "users", title: "Organization", subtitle: "Skills, Processes" },
    { iconName: "shieldCheck", title: "Governance", subtitle: "Security, Compliance" },
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
        iconName: "scale",
        title: "Scalability",
        description: "Ready for millions of devices.",
        color: "blue",
    },
    {
        iconName: "fileText",
        title: "Compliance",
        description: "GDPR, HIPAA, SOC2 ready.",
        color: "green",
    },
    {
        iconName: "lock",
        title: "Security",
        description: "Zero Trust security model.",
        color: "red",
    },
    {
        iconName: "wrench",
        title: "Viability",
        description: "Long-term support and maintenance.",
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
        category: "Cloud Platforms",
        technologies: ["AWS IoT Core", "Azure IoT Hub", "Google Cloud IoT", "Particle"],
    },
    {
        category: "Protocols",
        technologies: ["MQTT", "CoAP", "LoRaWAN", "Thread", "Matter"],
    },
    {
        category: "Compliance",
        technologies: ["GDPR", "CCPA", "HIPAA", "SOC2", "ISO 27001"],
    },
];

// ============================================================================
// CROSS-LINKS (from Knowledge Doc)
// ============================================================================

export const crossLinks = {
    nextServices: [
        { title: "Platform & Cloud", href: "/services/iot/platform-cloud" },
        { title: "Connectivity Solutions", href: "/services/iot/connectivity" },
        { title: "Security & QA", href: "/services/iot/security-qa" },
        { title: "Data & Analytics", href: "/services/iot/data-analytics" },
    ],
    solutions: [
        { title: "Smart Energy & Solar", href: "/solutions/smart-energy-solar" },
        { title: "Predictive Maintenance", href: "/solutions/predictive-maintenance" },
    ],
    work: [
        { title: "Abode Smart Home Security", href: "/work/abode-smart-home" },
    ],
};

// ============================================================================
// CASE STUDIES
// ============================================================================

export interface CaseStudy {
    title: string;
    services: string;
    result: string;
    href: string;
}

export const caseStudies: CaseStudy[] = [
    {
        title: "Smart Home Security Platform",
        services: "Architecture, Security Assessment",
        result: "Scaled to 300,000+ devices with 99.99% uptime.",
        href: "/work/abode-smart-home",
    },
    {
        title: "TerraSmart Solar Monitoring",
        services: "Build vs Buy, Cost Modeling",
        result: "30% faster deployment with IoT-enabled tracking.",
        href: "/work/terrasmart-solar",
    },
    {
        title: "Medical IoT Compliance",
        services: "Security Audit, Compliance Roadmap",
        result: "Achieved regulatory compliance on first review.",
        href: "/work/medical-iot",
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
        question: "What's the difference between strategy consulting and platform development?",
        answer: "Strategy consulting focuses on planning and validation before you build—architecture, costs, security baseline, and pilot plan. Platform development is the actual implementation of cloud infrastructure, device management, and applications. Strategy de-risks the build phase.",
    },
    {
        question: "How do you prevent vendor lock-in while still shipping fast?",
        answer: "We design architectures with abstraction layers at key integration points. This means you can start on AWS IoT Core for speed, but migrate components later without rewriting everything. We document dependencies and provide migration paths.",
    },
    {
        question: "How do you estimate cost/device/month before building?",
        answer: "We model based on telemetry volume, message frequency, storage needs, compute requirements, and expected fleet size. We provide a detailed breakdown so you can validate assumptions and adjust the architecture to hit cost targets.",
    },
    {
        question: "How long is a typical strategy engagement?",
        answer: "Typically 2-6 weeks depending on scope. We deliver a comprehensive report, architecture diagrams, security baseline, and financial model. Most clients see the ROI immediately in avoided rework costs.",
    },
];

// ============================================================================
// CTA SECTION
// ============================================================================

export const ctaData = {
    headline: "De-Risk Before You Build",
    subheadline: "Get architectural validation and a clear roadmap before committing to development.",
    email: "strategy@zigron.com",
};
