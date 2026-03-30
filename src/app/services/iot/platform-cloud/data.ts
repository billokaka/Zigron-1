// IoT Platform & Cloud Service Page - Content Data
// Sourced from Knowledge Doc: Global Zigron IoT Service Standards (Section 4)

// ============================================================================
// PAGE METADATA
// ============================================================================

export const pageMetadata = {
    title: "IoT Platform & Cloud Development | Zigron",
    description:
        "Build or modernize your IoT backend: device management, data ingestion, digital twin, rules engine, APIs, and fleet operations—designed to scale from pilot to millions of devices.",
    keywords: [
        "IoT platform",
        "cloud IoT",
        "device management",
        "digital twin",
        "fleet operations",
        "IoT backend",
        "telemetry ingestion",
    ],
};

// ============================================================================
// HERO SECTION
// ============================================================================

export const heroData = {
    badge: "Scalable Infrastructure",
    headline: "IoT Platform &",
    headlineHighlight: "Cloud",
    subheadline:
        "Build or modernize the IoT backend: device management, data ingestion, digital twin, rules/automation, APIs, and fleet operations. You own 100% of the IP.",
    primaryCta: { label: "Talk to an engineer", href: "/contact" },
    secondaryCta: { label: "View case studies", href: "/work" },
    trustBadges: [
        { icon: "shield", label: "100% IP Ownership", color: "green" },
        { icon: "cloud", label: "Multi-Cloud Ready", color: "blue" },
        { icon: "barChart", label: "1M+ Device Scale", color: "purple" },
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
    | "database"
    | "layers";

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
        iconName: "database",
        title: "Device Registry & Fleet Grouping",
        description: "Scalable device registry with fleet grouping, metadata model, and lifecycle management.",
    },
    {
        iconName: "layers",
        title: "Digital Twin / Device Shadow",
        description: "Desired vs. reported state synchronization for real-time device representation and control.",
    },
    {
        iconName: "barChart",
        title: "Telemetry Ingestion Pipeline",
        description: "High-throughput data ingestion with flexible storage models for time-series and event data.",
    },
    {
        iconName: "zap",
        title: "Command/Control & Job Execution",
        description: "Remote command framework with job scheduling, queuing, and delivery confirmation.",
    },
    {
        iconName: "alertTriangle",
        title: "Rules Engine & Automation",
        description: "Configurable alert rules, threshold-based triggers, and automated operational workflows.",
    },
    {
        iconName: "eye",
        title: "Observability & Admin Portal",
        description: "Dashboards, alerts, runbooks, and admin tools for operations and support teams.",
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
        title: "Scale from Pilot to 1M+ Devices",
        problem:
            "Existing architecture buckles under load as device counts grow beyond pilot phase.",
        solution:
            "Multi-region, multi-tenant platform engineered for horizontal scale with auto-partitioning and load shedding.",
        outcome: "99.99% uptime at 1M+ concurrent device connections.",
    },
    {
        title: "Modernize a Brittle Platform",
        problem:
            "Legacy IoT backend is expensive to operate, hard to change, and lacks visibility.",
        solution:
            "Incremental migration to modern event-driven architecture with observability built in.",
        outcome: "40% reduction in infrastructure costs, 10x faster feature delivery.",
    },
    {
        title: "Multi-Tenant OEM Readiness",
        problem:
            "Platform needs to support multiple device lines, partners, and regional deployments.",
        solution:
            "Tenant isolation, configurable data retention, and partner API layer with RBAC.",
        outcome: "3 new OEM partners onboarded in under 4 weeks each.",
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
        description: "Map device message formats, command use cases, data consumers, and scale targets",
    },
    {
        iconName: "layout",
        title: "Architect",
        description: "Design ingestion pipelines, device registry, digital twin strategy, and API contracts",
    },
    {
        iconName: "wrench",
        title: "Build",
        description: "Implement platform components with CI/CD, staged environments, and automated testing",
    },
    {
        iconName: "checkCircle",
        title: "Load Test",
        description: "Validate at target concurrency, test failure modes, retries, duplicates, and offline buffering",
    },
    {
        iconName: "rocket",
        title: "Deploy & Operate",
        description: "Production rollout with observability, runbooks, and incident response processes",
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
    { iconName: "cpu", title: "Devices", subtitle: "Sensors, Gateways" },
    { iconName: "wifi", title: "Ingestion", subtitle: "MQTT, HTTP, WebSocket" },
    { iconName: "database", title: "Storage", subtitle: "Time-Series, Events" },
    { iconName: "cloud", title: "Platform", subtitle: "Registry, Twin, Rules" },
    { iconName: "smartphone", title: "Applications", subtitle: "APIs, Portals" },
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
        description: "Designed for millions of concurrent device connections.",
        color: "blue",
    },
    {
        iconName: "eye",
        title: "Observability",
        description: "Full-stack dashboards, SLOs, and incident runbooks.",
        color: "green",
    },
    {
        iconName: "lock",
        title: "Security",
        description: "Identity, access control, and audit trails for every operation.",
        color: "red",
    },
    {
        iconName: "wrench",
        title: "Maintainability",
        description: "Modular services, clear API contracts, and comprehensive docs.",
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
        category: "Cloud & IoT",
        technologies: [
            "AWS IoT Core",
            "Azure IoT Hub",
            "Google Cloud IoT",
            "Kafka",
            "RabbitMQ",
            "EMQX",
        ],
    },
    {
        category: "Data & Storage",
        technologies: ["TimescaleDB", "InfluxDB", "PostgreSQL", "Redis", "S3", "DynamoDB"],
    },
    {
        category: "DevOps & Infra",
        technologies: ["Terraform", "Kubernetes", "Docker", "GitHub Actions", "Datadog", "Grafana"],
    },
];

// ============================================================================
// CROSS-LINKS (from Knowledge Doc)
// ============================================================================

export const crossLinks = {
    relatedServices: [
        { title: "Device & Firmware", href: "/services/iot/device-firmware" },
        { title: "Connectivity", href: "/services/iot/connectivity" },
        { title: "Data & Analytics", href: "/services/iot/data-analytics" },
        { title: "Security & QA", href: "/services/iot/security-qa" },
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
    image: string;
    category: string;
    title: string;
    services: string;
    result: string;
    href: string;
}

export const caseStudies: CaseStudy[] = [
    { image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80", category: "Smart Home", title: "Abode Smart Home Security",
        services: "Cloud Platform, Digital Twin, Fleet Ops",
        result: "Scaled to 300,000+ devices with 99.99% uptime.",
        href: "/work/abode-smart-home",
    },
    { image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80", category: "Solar", title: "TerraSmart Solar Monitoring",
        services: "IoT Platform, Telemetry Pipeline",
        result: "Real-time monitoring across 500+ solar sites.",
        href: "/work/terrasmart-solar",
    },
    { image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80", category: "Industrial", title: "Industrial Predictive Maintenance",
        services: "Data Ingestion, Rules Engine",
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
        question: "Can you migrate from our existing platform without downtime?",
        answer:
            "Yes. We design incremental migration strategies with parallel-run periods, shadow traffic testing, and automated rollback so your fleet stays online throughout the transition.",
    },
    {
        question: "How do you keep platform costs predictable at scale?",
        answer:
            "We implement cost modeling early—tracking cost/device/month across compute, storage, and data transfer. Architecture decisions like edge aggregation, tiered storage, and auto-scaling keep spend proportional to actual usage.",
    },
    {
        question: "How do you support multiple OEM device lines?",
        answer:
            "Our platforms use tenant-isolated environments with device-line-specific schemas, firmware channels, and RBAC policies. Each OEM partner gets their own API keys, dashboards, and data boundaries.",
    },
    {
        question: "What if we need to integrate with existing enterprise systems?",
        answer:
            "We build well-documented API and event connector layers designed for integration with SCADA, ERP, CMMS, and billing systems. Each integration gets its own contract tests and monitoring.",
    },
    {
        question: "Do we own the platform IP?",
        answer:
            "Yes, 100%. All source code, infrastructure templates, runbooks, and documentation are your property. We provide complete handover with no licensing fees or vendor lock-in.",
    },
];

// ============================================================================
// CTA SECTION
// ============================================================================

export const ctaData = {
    headline: "Ready to Scale Your IoT Platform?",
    subheadline:
        "Tell us about your device fleet and scale targets. Our platform engineers will design a solution that grows with you.",
    email: "iot@zigron.com",
};
