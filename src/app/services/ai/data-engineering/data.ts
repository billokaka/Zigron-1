// AI Data Engineering Service Page - Content Data
// Sourced from Knowledge Doc: Global Zigron AI Service Standards (Sections 2 & 3)

// ============================================================================
// PAGE METADATA
// ============================================================================

export const pageMetadata = {
    title: "AI Data Engineering Services | Zigron",
    description:
        "Build reliable data foundations for AI: pipelines, quality gates, feature stores, lineage, and secure access—designed for production ML workloads.",
    keywords: [
        "data engineering",
        "data pipelines",
        "feature store",
        "ETL",
        "data quality",
        "ML data",
        "data lake",
    ],
};

// ============================================================================
// HERO SECTION
// ============================================================================

export const heroData = {
    badge: "Data Foundations for AI",
    headline: "AI Data",
    headlineHighlight: "Engineering",
    subheadline:
        "Reliable data pipelines, quality gates, and feature-ready datasets. We build the foundation your ML models need to succeed in production.",
    primaryCta: { label: "Talk to an engineer", href: "/contact" },
    secondaryCta: { label: "View case studies", href: "/work" },
    trustBadges: [
        { icon: "shield", label: "100% IP Ownership", color: "green" },
        { icon: "database", label: "Production-Grade Pipelines", color: "blue" },
        { icon: "checkCircle", label: "Data Quality Guaranteed", color: "purple" },
    ],
};

// ============================================================================
// ICON TYPES
// ============================================================================

export type IconName =
    | "brain"
    | "eye"
    | "messageSquare"
    | "trendingUp"
    | "search"
    | "layers"
    | "target"
    | "cpu"
    | "zap"
    | "shield"
    | "barChart"
    | "checkCircle"
    | "database"
    | "cloud"
    | "workflow"
    | "sparkles"
    | "lock"
    | "fileText";

// ============================================================================
// DELIVERABLES (from Knowledge Doc Section 2)
// ============================================================================

export interface Deliverable {
    iconName: IconName;
    title: string;
    description: string;
}

export const deliverables: Deliverable[] = [
    {
        iconName: "workflow",
        title: "Data Ingestion Pipelines",
        description: "Batch and streaming pipelines that reliably move data from source systems to your analytics and ML infrastructure.",
    },
    {
        iconName: "fileText",
        title: "Canonical Schemas & Contracts",
        description: "Standardized data models, event contracts, and schema evolution strategies that prevent breaking changes.",
    },
    {
        iconName: "checkCircle",
        title: "Data Quality Gates",
        description: "Automated validation for completeness, validity, and timeliness—catching issues before they reach your models.",
    },
    {
        iconName: "layers",
        title: "Feature Store Integration",
        description: "Feature-ready datasets and feature store integration for consistent training and serving feature access.",
    },
    {
        iconName: "lock",
        title: "Access Controls & Audit Logging",
        description: "Role-based access, encryption at rest/in transit, and comprehensive audit trails for sensitive data.",
    },
    {
        iconName: "database",
        title: "Data Dictionary & Lineage",
        description: "Complete documentation of data sources, transformations, and lineage so every number is traceable.",
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
        title: "IoT Telemetry at Scale",
        problem:
            "Sensor data scattered across SCADA, ERP, and app logs with no unified view for ML teams.",
        solution:
            "Unified streaming and batch pipelines with canonical schemas, quality gates, and feature-ready outputs.",
        outcome: "Data prep time reduced from weeks to hours for ML teams.",
    },
    {
        title: "ML Feature Engineering",
        problem:
            "Training-serving skew causing model performance gaps between dev and production.",
        solution:
            "Feature store with consistent computation, versioning, and point-in-time correctness for both training and serving.",
        outcome: "Eliminated training-serving skew, 20% improvement in model accuracy.",
    },
    {
        title: "Regulatory Data Compliance",
        problem:
            "No audit trail for how data was transformed, accessed, or used in model training.",
        solution:
            "Lineage-tracked pipelines with role-based access, PII minimization, and reproducible dataset builds.",
        outcome: "Passed data compliance audit on first submission.",
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
        description: "Inventory source systems, map data flows, define KPIs, and assess quality baselines",
    },
    {
        iconName: "layers",
        title: "Design",
        description: "Define canonical schemas, pipeline architecture, quality rules, and access policies",
    },
    {
        iconName: "workflow",
        title: "Build",
        description: "Implement ingestion pipelines, transformations, quality gates, and feature stores",
    },
    {
        iconName: "checkCircle",
        title: "Validate",
        description: "Verify data quality, pipeline stability under load, and reproducible dataset builds",
    },
    {
        iconName: "zap",
        title: "Operate",
        description: "Production deployment with monitoring, alerting, and continuous quality enforcement",
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
    { iconName: "database", title: "Sources", subtitle: "IoT, ERP, APIs" },
    { iconName: "workflow", title: "Ingestion", subtitle: "Batch & Stream" },
    { iconName: "layers", title: "Transform", subtitle: "Quality & Schema" },
    { iconName: "sparkles", title: "Features", subtitle: "Feature Store" },
    { iconName: "brain", title: "Consumers", subtitle: "ML & Analytics" },
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
        iconName: "checkCircle",
        title: "Data Quality",
        description: "Automated validation at every stage of the pipeline.",
        color: "blue",
    },
    {
        iconName: "workflow",
        title: "Reproducibility",
        description: "Versioned datasets and deterministic transformations.",
        color: "green",
    },
    {
        iconName: "lock",
        title: "Security",
        description: "Access controls, encryption, and audit trails.",
        color: "red",
    },
    {
        iconName: "zap",
        title: "Performance",
        description: "Optimized for throughput and latency at scale.",
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
        category: "Orchestration & ETL",
        technologies: ["Apache Airflow", "dbt", "Dagster", "Prefect", "Apache Spark", "Flink"],
    },
    {
        category: "Storage & Query",
        technologies: ["Snowflake", "BigQuery", "Databricks", "PostgreSQL", "Delta Lake", "S3/GCS"],
    },
    {
        category: "Quality & Ops",
        technologies: ["Great Expectations", "Monte Carlo", "Feast", "Docker", "Terraform", "Datadog"],
    },
];

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
        title: "TerraSmart Solar Data Platform",
        services: "Streaming Pipelines, Data Lake",
        result: "Unified telemetry from 500+ solar sites into ML-ready datasets.",
        href: "/work/terrasmart-solar",
    },
    {
        title: "Abode Device Analytics",
        services: "ETL Pipelines, Feature Engineering",
        result: "300K+ device events processed daily with 99.9% data freshness.",
        href: "/work/abode-smart-home",
    },
    {
        title: "Industrial Predictive Maintenance",
        services: "Sensor Data Pipelines, Quality Gates",
        result: "Reduced data prep time by 80% for predictive ML models.",
        href: "/work/industrial-predictive",
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
        question: "Do we need a feature store?",
        answer:
            "Not always. Feature stores add value when you have multiple models sharing features, need point-in-time correctness, or face training-serving skew. We assess your needs and recommend the simplest architecture that solves the problem.",
    },
    {
        question: "How do you prevent training-serving skew?",
        answer:
            "We ensure feature computation is consistent between training and serving by using shared transformation code, feature stores where appropriate, and automated tests that compare training and serving outputs.",
    },
    {
        question: "How do you design schemas for long-lived AI products?",
        answer:
            "We use schema evolution strategies with backward compatibility, versioned contracts, and migration tooling. This lets you add new fields and data sources without breaking existing models or dashboards.",
    },
    {
        question: "How do you handle sensitive data in pipelines?",
        answer:
            "We implement PII minimization at ingestion, role-based access controls, encryption at rest and in transit, and comprehensive audit logging. Data lineage traces every transformation for compliance.",
    },
    {
        question: "What if our data quality is poor today?",
        answer:
            "That's exactly why you need data engineering. We start with a quality baseline assessment, then implement automated quality gates that progressively raise the bar. Models trained on clean data perform dramatically better.",
    },
];

// ============================================================================
// CTA SECTION
// ============================================================================

export const ctaData = {
    headline: "Ready to Build Your Data Foundation?",
    subheadline:
        "Tell us about your data challenges. Our engineers will design pipelines that turn raw data into ML-ready assets.",
    email: "ai@zigron.com",
};
