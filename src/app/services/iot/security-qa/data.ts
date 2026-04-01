// IoT Security & QA Service Page - Content Data
// Sourced from Knowledge Doc: Global Zigron IoT Service Standards (Sections 10 & 11)

// ============================================================================
// PAGE METADATA
// ============================================================================

export const pageMetadata = {
    title: "IoT Security & Quality Assurance | Zigron",
    description:
        "End-to-end IoT security and QA: threat modeling, device identity, OTA safety, penetration testing, and automated regression—built for real-world failure modes.",
    keywords: [
        "IoT security",
        "IoT QA",
        "device identity",
        "OTA safety",
        "IoT testing",
        "threat model",
        "firmware security",
    ],
};

// ============================================================================
// HERO SECTION
// ============================================================================

export const heroData = {
    badge: "Security-First Engineering",
    headline: "IoT Security &",
    headlineHighlight: "Quality Assurance",
    subheadline:
        "Security engineering and QA across device, cloud, and applications—preventing fleet compromise and ensuring production readiness. No vendor lock-in.",
    primaryCta: { label: "Talk to an engineer", href: "/contact" },
    secondaryCta: { label: "View case studies", href: "/work" },
    trustBadges: [
        { icon: "shield", label: "100% IP Ownership", color: "green" },
        { icon: "lock", label: "Zero-Trust Architecture", color: "blue" },
        { icon: "checkCircle", label: "Production Validated", color: "purple" },
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
// DELIVERABLES (from Knowledge Doc — combined Security + QA)
// ============================================================================

export interface Deliverable {
    iconName: IconName;
    title: string;
    description: string;
}

export const deliverables: Deliverable[] = [
    {
        iconName: "shield",
        title: "IoT Threat Model",
        description: "Comprehensive threat analysis across device, cloud, mobile/web, and admin attack surfaces.",
    },
    {
        iconName: "lock",
        title: "Device Identity & Provisioning",
        description: "Certificate-based identity strategy, secure provisioning flows, and credential rotation plans.",
    },
    {
        iconName: "users",
        title: "Access Control Model",
        description: "RBAC/ABAC implementation with least-privilege policies for devices, users, admins, and partners.",
    },
    {
        iconName: "rocket",
        title: "OTA Security & Safety Plan",
        description: "Firmware signing, staged rollouts, automatic rollback, and bricking prevention mechanisms.",
    },
    {
        iconName: "checkCircle",
        title: "Full IoT Test Strategy",
        description: "Automated regression suites covering device, cloud, app, and integration test layers.",
    },
    {
        iconName: "eye",
        title: "Release Readiness & Audit",
        description: "Load/scale testing, OTA validation, go/no-go gates, and security audit logging.",
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
        title: "Consumer IoT at Scale",
        problem:
            "Millions of devices in homes create a massive, attractive attack surface with weak identity controls.",
        solution:
            "Zero-trust device identity with certificate rotation, secure provisioning, and OTA signing verified at every step.",
        outcome: "Zero security incidents across 300K+ deployed devices.",
    },
    {
        title: "Pre-Launch QA & Certification",
        problem:
            "High field failure rates and OTA bricking incidents due to insufficient pre-release testing.",
        solution:
            "Comprehensive test strategy covering failure modes, network loss scenarios, and load testing at target scale.",
        outcome: "95% reduction in post-release defect escape rate.",
    },
    {
        title: "Regulated Environments",
        problem:
            "Healthcare and energy devices need strict audit trails, data classification, and compliance evidence.",
        solution:
            "Security baseline with audit logging, PII/PHI handling, network segmentation, and penetration testing coordination.",
        outcome: "Passed regulatory audits on first submission.",
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
        title: "Assess",
        description: "Map attack surfaces, classify data, review device capabilities, and identify regulatory requirements",
    },
    {
        iconName: "layout",
        title: "Design",
        description: "Build threat model, define identity strategy, access control policies, and test plans",
    },
    {
        iconName: "wrench",
        title: "Implement",
        description: "Deploy security controls, provisioning flows, audit logging, and automated test suites",
    },
    {
        iconName: "target",
        title: "Validate",
        description: "Penetration testing coordination, failure mode testing, load testing, and security audit verification",
    },
    {
        iconName: "rocket",
        title: "Harden & Monitor",
        description: "Production hardening, credential rotation, incident response playbooks, and ongoing compliance",
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
    { iconName: "cpu", title: "Device", subtitle: "Identity, Secure Boot" },
    { iconName: "wifi", title: "Transport", subtitle: "mTLS, Encryption" },
    { iconName: "cloud", title: "Cloud", subtitle: "IAM, Audit Logs" },
    { iconName: "smartphone", title: "Applications", subtitle: "AuthN, RBAC" },
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
        iconName: "shield",
        title: "Defense in Depth",
        description: "Security controls at every layer, from silicon to cloud.",
        color: "blue",
    },
    {
        iconName: "checkCircle",
        title: "Automated Testing",
        description: "Regression, load, and failure mode testing in CI/CD.",
        color: "green",
    },
    {
        iconName: "lock",
        title: "Zero Trust",
        description: "Every device and user authenticated and authorized per request.",
        color: "red",
    },
    {
        iconName: "eye",
        title: "Observability",
        description: "Audit trails, incident metrics, and compliance dashboards.",
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
        category: "Security & Identity",
        technologies: [
            "AWS IoT Device Defender",
            "Azure IoT Security",
            "HashiCorp Vault",
            "OWASP ZAP",
            "Snyk",
            "SonarQube",
        ],
    },
    {
        category: "Testing & QA",
        technologies: ["Cypress", "Playwright", "k6", "JMeter", "pytest", "Robot Framework"],
    },
    {
        category: "DevSecOps",
        technologies: ["GitHub Actions", "Terraform", "Docker", "Trivy", "Falco", "Datadog"],
    },
];

// ============================================================================
// CROSS-LINKS (from Knowledge Doc)
// ============================================================================

export const crossLinks = {
    relatedServices: [
        { title: "Platform & Cloud", href: "/services/iot/platform-cloud" },
        { title: "Device & Firmware", href: "/services/iot/device-firmware" },
        { title: "Connectivity", href: "/services/iot/connectivity" },
        { title: "Data & Analytics", href: "/services/iot/data-analytics" },
    ],
    industries: [
        { title: "Healthcare", href: "/industries/healthcare" },
        { title: "Energy & Utilities", href: "/industries/energy" },
        { title: "Consumer Electronics", href: "/industries/smart-home" },
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
        services: "Device Auth, OTA Safety, Security Audit",
        result: "Zero compromises across 300,000+ consumer devices.",
        href: "/work/abode-smart-home",
    },
    { image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80", category: "Solar", title: "TerraSmart Solar Monitoring",
        services: "Field Security, QA Automation",
        result: "99.9% provisioning success rate across 500+ sites.",
        href: "/work/terrasmart-solar",
    },
    { image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80", category: "Industrial", title: "Industrial Predictive Maintenance",
        services: "OT/IT Security, Load Testing",
        result: "Passed industrial compliance audit on first submission.",
        href: "/work",
    },
];

// ============================================================================
// FAQs (from Knowledge Doc — combined Security + QA)
// ============================================================================

export interface FAQ {
    question: string;
    answer: string;
}

export const faqs: FAQ[] = [
    {
        question: "How do you secure device provisioning at scale?",
        answer:
            "We implement certificate-based provisioning with unique device identities, secure element support where available, and automated credential rotation. Every provisioning event is audited and monitored.",
    },
    {
        question: "How do you prevent unauthorized remote commands?",
        answer:
            "All commands go through authenticated and authorized channels with audit logging. We implement mutual TLS, command signing, and rate limiting with anomaly detection on command patterns.",
    },
    {
        question: "What's your OTA safety checklist?",
        answer:
            "Our OTA pipeline includes cryptographic signing, staged canary rollouts, automatic rollback on failure detection, bricking prevention mechanisms, and post-update health verification before proceeding to wider rollout.",
    },
    {
        question: "How do you test IoT at scale without massive device labs?",
        answer:
            "We combine device simulators, cloud-based test harnesses, and progressive rollout strategies. Load tests simulate target concurrency with realistic message patterns, and failure mode testing covers network loss, retries, and duplicates.",
    },
    {
        question: "What's in an OTA 'safe release' checklist?",
        answer:
            "Release gates include: regression suite green, load test passed, failure mode tests verified, security scan clean, monitoring/alerting confirmed, rollback tested, and staged rollout plan approved.",
    },
];

// ============================================================================
// CTA SECTION
// ============================================================================

export const ctaData = {
    headline: "Ready to Harden Your IoT System?",
    subheadline:
        "Tell us about your security and quality challenges. Our engineers will design a strategy that protects your fleet and your customers.",
    email: "iot@zigron.com",
};
