// IoT Data & Analytics Service Page - Content Data
// Sourced from Knowledge Doc: Global Zigron IoT Service Standards (Section 8)

// ============================================================================
// PAGE METADATA
// ============================================================================

export const pageMetadata = {
    title: "IoT Data & Analytics Services | Zigron",
    description:
        "Turn IoT telemetry into operational intelligence: KPI dashboards, anomaly detection, alerting, and decision workflows—designed for scale and trust.",
    keywords: [
        "IoT analytics",
        "telemetry dashboards",
        "anomaly detection",
        "IoT data engineering",
        "operational intelligence",
        "KPI dashboards",
        "IoT monitoring",
    ],
};

// ============================================================================
// HERO SECTION
// ============================================================================

export const heroData = {
    badge: "Operational Intelligence",
    headline: "IoT Data &",
    headlineHighlight: "Analytics",
    subheadline:
        "Turn IoT telemetry into actionable intelligence: KPI dashboards, anomaly detection, alerting, and decision workflows. Tailored to your requirements.",
    primaryCta: { label: "Talk to an engineer", href: "/contact" },
    secondaryCta: { label: "View case studies", href: "/work" },
    trustBadges: [
        { icon: "shield", label: "100% IP Ownership", color: "green" },
        { icon: "barChart", label: "Real-Time Insights", color: "blue" },
        { icon: "eye", label: "AI-Ready Pipelines", color: "purple" },
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
        title: "Telemetry Model & KPI Definitions",
        description: "Single source of truth for telemetry schemas, KPI calculations, and data lineage documentation.",
    },
    {
        iconName: "barChart",
        title: "Operational Dashboards",
        description: "Real-time dashboards for ops teams, executives, and support—built around actual workflows, not vanity charts.",
    },
    {
        iconName: "alertTriangle",
        title: "Alerting Logic & Automation",
        description: "Threshold-based, trend, and anomaly-detection alerting that produces actionable outcomes, not noise.",
    },
    {
        iconName: "checkCircle",
        title: "Data Quality Checks & Lineage",
        description: "Automated validation, completeness checks, and lineage documentation for every data pipeline.",
    },
    {
        iconName: "code",
        title: "Analytics API Endpoints",
        description: "Well-documented APIs for apps, partners, and internal tools to consume processed IoT data.",
    },
    {
        iconName: "eye",
        title: "AI/ML Readiness Layer",
        description: "Data pipelines designed for future predictive analytics, forecasting, and machine learning programs.",
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
        title: "Fleet Performance Monitoring",
        problem:
            "No clear visibility into fleet health—issues discovered only after outages or customer complaints.",
        solution:
            "Real-time KPI dashboards with anomaly detection, SLA tracking, and drill-down diagnostics per device/site.",
        outcome: "60% faster incident detection, 35% reduction in MTTR.",
    },
    {
        title: "Energy & Asset Insights",
        problem:
            "Energy data siloed across meters, inverters, and BMS systems with no unified view.",
        solution:
            "Unified telemetry pipeline aggregating multi-source data into normalized KPI dashboards.",
        outcome: "15% improvement in energy yield through data-driven optimization.",
    },
    {
        title: "AI/Forecasting Readiness",
        problem:
            "Data quality and schema inconsistencies prevent meaningful ML model training.",
        solution:
            "Clean, validated, and documented data pipelines designed for downstream AI consumption.",
        outcome: "Reduced data prep time from weeks to hours for ML teams.",
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
        description: "Map telemetry schemas, device metadata, desired KPIs, and operational workflows",
    },
    {
        iconName: "layout",
        title: "Design",
        description: "Define data models, pipeline architecture, dashboard layouts, and alerting logic",
    },
    {
        iconName: "wrench",
        title: "Build",
        description: "Implement ingestion pipelines, storage layers, dashboards, and API endpoints",
    },
    {
        iconName: "checkCircle",
        title: "Validate",
        description: "Verify data quality, alert precision/recall, and dashboard accuracy against real data",
    },
    {
        iconName: "rocket",
        title: "Deploy & Tune",
        description: "Production rollout with ongoing alert tuning, dashboard refinement, and performance optimization",
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
    { iconName: "cloud", title: "Ingestion", subtitle: "MQTT, Kafka, HTTP" },
    { iconName: "database", title: "Storage", subtitle: "Time-Series, Lake" },
    { iconName: "barChart", title: "Analytics", subtitle: "KPIs, Alerts" },
    { iconName: "smartphone", title: "Consumers", subtitle: "Dashboards, APIs" },
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
        title: "Data Quality",
        description: "Validated, complete, and documented pipelines you can trust.",
        color: "blue",
    },
    {
        iconName: "zap",
        title: "Real-Time",
        description: "Sub-second data freshness for operational decision-making.",
        color: "green",
    },
    {
        iconName: "lock",
        title: "Security",
        description: "PII minimization, role-based access, and audit trails.",
        color: "red",
    },
    {
        iconName: "eye",
        title: "AI-Ready",
        description: "Schemas and pipelines designed for downstream ML consumption.",
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
        category: "Data & Streaming",
        technologies: [
            "Apache Kafka",
            "AWS Kinesis",
            "Azure Event Hubs",
            "Apache Flink",
            "Spark Streaming",
            "dbt",
        ],
    },
    {
        category: "Storage & Query",
        technologies: ["TimescaleDB", "InfluxDB", "ClickHouse", "PostgreSQL", "Redshift", "BigQuery"],
    },
    {
        category: "Visualization & Ops",
        technologies: ["Grafana", "Apache Superset", "Datadog", "PagerDuty", "Terraform", "Docker"],
    },
];

// ============================================================================
// CROSS-LINKS (from Knowledge Doc)
// ============================================================================

export const crossLinks = {
    relatedServices: [
        { title: "Platform & Cloud", href: "/services/iot/platform-cloud" },
        { title: "Connectivity", href: "/services/iot/connectivity" },
        { title: "Security & QA", href: "/services/iot/security-qa" },
        { title: "ML Development", href: "/services/ai/ml-development" },
    ],
    solutions: [
        { title: "Smart Energy & Solar", href: "/solutions/smart-energy-solar" },
        { title: "Predictive Maintenance", href: "/solutions/predictive-maintenance" },
    ],
    work: [
        { title: "TerraSmart Solar Monitoring", href: "/work/terrasmart-solar" },
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
    { image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80", category: "Solar", title: "TerraSmart Solar Monitoring",
        services: "Telemetry Pipeline, KPI Dashboards",
        result: "Real-time monitoring across 500+ solar installations.",
        href: "/work/terrasmart-solar",
    },
    { image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80", category: "Smart Home", title: "Abode Smart Home Security",
        services: "Device Analytics, Alerting Logic",
        result: "300,000+ devices monitored with 99.99% data freshness.",
        href: "/work/abode-smart-home",
    },
    { image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80", category: "AI + IoT", title: "TerraTrak AI Performance Analytics",
        services: "ML Analytics, Energy Optimization Dashboards",
        result: "+12% energy generation through data-driven optimization.",
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
        question: "How do you avoid noisy alerting?",
        answer:
            "We design alerts around operational workflows—every alert must have a clear owner, escalation path, and expected action. We measure alert precision/recall and continuously tune thresholds based on real operational data.",
    },
    {
        question: "What's required to make analytics trustworthy?",
        answer:
            "Trustworthy analytics start with clean data. We implement schema validation, completeness checks, freshness SLOs, and lineage documentation so every dashboard number can be traced back to its source.",
    },
    {
        question: "How do we design telemetry schemas for future AI?",
        answer:
            "We follow event-driven patterns with rich metadata, consistent timestamps, and normalized units. Schemas are versioned and documented so ML teams can consume data without weeks of preprocessing.",
    },
    {
        question: "Can you integrate with our existing BI tools?",
        answer:
            "Yes. We build analytics API layers that work with any BI tool—Grafana, Superset, Tableau, Power BI, or custom portals. Data is exposed through standard SQL or REST/GraphQL endpoints.",
    },
    {
        question: "Do we retain full ownership of the data pipelines?",
        answer:
            "Absolutely. All pipeline code, configurations, dashboards, and documentation are your IP. We provide complete handover with runbooks so your team can operate independently.",
    },
];

// ============================================================================
// CTA SECTION
// ============================================================================

export const ctaData = {
    headline: "Ready to Unlock Your IoT Data?",
    subheadline:
        "Tell us about your telemetry challenges. Our data engineers will design a pipeline that turns raw signals into operational intelligence.",
    email: "iot@zigron.com",
};
