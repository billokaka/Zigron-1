// Cloud & Infrastructure Security - Content Data

export const pageMetadata = {
    title: "Cloud & Infrastructure Security | Zigron",
    description: "CSPM, network segmentation, WAF, container security, and encryption. We harden your multi-cloud infrastructure from the ground up.",
};

export type IconName = "cpu" | "microchip" | "wifi" | "battery" | "code" | "server" | "layers" | "zap" | "shield" | "bluetooth" | "settings" | "activity" | "thermometer" | "radio" | "box" | "terminal" | "database" | "globe" | "cloud" | "lock" | "users" | "signal" | "router" | "satellite";

// ============================================================================
// HERO SECTION
// ============================================================================

export const heroData = {
    badge: "Cloud Security Engineering",
    headline: "Harden Your.",
    headlineHighlight: "Cloud Infrastructure.",
    subheadline: "Posture management, network segmentation, container security, and encryption for AWS, Azure, and GCP workloads.",
    primaryCta: { label: "Assess Your Cloud", href: "/contact" },
    secondaryCta: { label: "View Tech Stack", href: "#tech-stack" },
    trustBadges: [
        { icon: "cloud", label: "Multi-Cloud CSPM", color: "blue" },
        { icon: "shield", label: "Zero Trust Network", color: "green" },
        { icon: "lock", label: "Encryption at Rest/Transit", color: "purple" },
    ],
};

// ============================================================================
// BEST-FIT CUSTOMERS
// ============================================================================

export interface BestFitCustomer {
    title: string;
    description: string;
}

export const bestFitCustomers: BestFitCustomer[] = [
    {
        title: "Multi-Cloud Enterprises",
        description: "Organizations running workloads across AWS, Azure, and GCP needing unified security posture.",
    },
    {
        title: "Container-Native Teams",
        description: "Kubernetes-heavy deployments requiring cluster hardening and runtime security.",
    },
    {
        title: "Regulated Industries",
        description: "Healthcare, finance, and government organizations with strict data residency and encryption mandates.",
    },
];

// ============================================================================
// INPUTS REQUIRED
// ============================================================================

export interface InputRequired {
    iconName: IconName;
    title: string;
    description: string;
}

export const inputsRequired: InputRequired[] = [
    {
        iconName: "cloud",
        title: "Cloud Architecture",
        description: "Current cloud providers, account structure, VPC topology, and IAM configuration.",
    },
    {
        iconName: "shield",
        title: "Compliance Requirements",
        description: "Target frameworks (SOC 2, HIPAA, PCI-DSS), data classification, and regulatory constraints.",
    },
];

// ============================================================================
// KPIs
// ============================================================================

export interface KPI {
    metric: string;
    description: string;
}

export const kpis: KPI[] = [
    { metric: "CSPM Score", description: "Cloud security posture benchmark across all accounts" },
    { metric: "Misconfiguration Count", description: "Open security groups, public buckets, unencrypted volumes" },
    { metric: "Mean Time to Remediate", description: "Average time from detection to fix for cloud findings" },
    { metric: "Encryption Coverage", description: "Percentage of data encrypted at rest and in transit" },
    { metric: "Network Segmentation", description: "Blast radius reduction through VPC and subnet isolation" },
];

// ============================================================================
// ACCEPTANCE CRITERIA
// ============================================================================

export const acceptanceCriteria: string[] = [
    "All cloud accounts pass CSPM baseline with zero critical findings",
    "Network segmentation validated with no unauthorized cross-VPC traffic",
    "Container images scanned and signed before production deployment",
];

// ============================================================================
// SECURITY CONSIDERATIONS
// ============================================================================

export interface SecurityConsideration {
    iconName: IconName;
    title: string;
    description: string;
}

export const securityConsiderations: SecurityConsideration[] = [
    {
        iconName: "cloud",
        title: "Cloud Posture Management",
        description: "Continuous monitoring and auto-remediation of cloud misconfigurations.",
    },
    {
        iconName: "lock",
        title: "Data Encryption",
        description: "KMS-managed encryption for all data at rest and TLS 1.3 for data in transit.",
    },
    {
        iconName: "shield",
        title: "Network Isolation",
        description: "Microsegmentation with security groups, NACLs, and service mesh policies.",
    },
];

// ============================================================================
// DELIVERABLES
// ============================================================================

export interface Deliverable {
    iconName: IconName;
    title: string;
    description: string;
}

export const deliverables: Deliverable[] = [
    {
        iconName: "cloud",
        title: "Cloud Security Posture Management",
        description: "Continuous CSPM scanning across AWS, Azure, and GCP with auto-remediation for critical misconfigurations and drift detection.",
    },
    {
        iconName: "router",
        title: "Network Segmentation & WAF",
        description: "VPC architecture design, subnet isolation, WAF rule configuration, and DDoS protection with AWS Shield or Cloudflare.",
    },
    {
        iconName: "lock",
        title: "Encryption & Key Management",
        description: "KMS configuration, envelope encryption, TLS certificate automation, and secrets management with Vault or AWS Secrets Manager.",
    },
    {
        iconName: "box",
        title: "Container & Kubernetes Security",
        description: "Cluster hardening, pod security policies, network policies, runtime threat detection, and image signing workflows.",
    },
    {
        iconName: "code",
        title: "Serverless Security",
        description: "Lambda/Functions permission scoping, event injection prevention, cold start security, and API Gateway authorization patterns.",
    },
    {
        iconName: "database",
        title: "Data Pipeline Encryption",
        description: "End-to-end encryption for ETL pipelines, streaming data, data lakes, and cross-account data sharing with fine-grained access.",
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
        title: "Multi-Cloud Posture Management",
        problem: "3 cloud providers, 47 accounts, no unified security visibility or baseline.",
        solution: "Deployed Wiz across all accounts with custom policies, auto-remediation, and executive dashboards.",
        outcome: "Critical findings reduced 94% in 60 days."
    },
    {
        title: "Kubernetes Cluster Hardening",
        problem: "Production EKS clusters running privileged containers with no network policies.",
        solution: "Implemented OPA Gatekeeper policies, Calico network policies, Falco runtime detection, and signed images.",
        outcome: "CIS Kubernetes Benchmark Level 2 achieved."
    },
    {
        title: "Data Pipeline Encryption",
        problem: "PII flowing through Kafka and Spark pipelines with no encryption or access controls.",
        solution: "Implemented field-level encryption, KMS integration, and column-level access controls in data lake.",
        outcome: "HIPAA and SOC 2 compliant data pipeline."
    }
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
        iconName: "activity",
        title: "Cloud Audit",
        description: "Account & resource inventory."
    },
    {
        iconName: "shield",
        title: "Posture Assessment",
        description: "CSPM baseline scan."
    },
    {
        iconName: "router",
        title: "Network Design",
        description: "VPC & segmentation plan."
    },
    {
        iconName: "lock",
        title: "Encryption Setup",
        description: "KMS & secrets deployment."
    },
    {
        iconName: "settings",
        title: "Continuous Monitoring",
        description: "SIEM & alerting pipeline."
    }
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
    { iconName: "server", title: "Compute", subtitle: "VMs & Containers" },
    { iconName: "router", title: "Network", subtitle: "VPC & WAF" },
    { iconName: "database", title: "Storage", subtitle: "Encrypted Data" },
    { iconName: "cloud", title: "Control Plane", subtitle: "CSPM & SIEM" },
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
        iconName: "cloud",
        title: "Visibility",
        description: "Full asset inventory.",
        color: "blue",
    },
    {
        iconName: "shield",
        title: "Protection",
        description: "WAF & segmentation.",
        color: "green",
    },
    {
        iconName: "lock",
        title: "Encryption",
        description: "KMS-managed keys.",
        color: "red",
    },
    {
        iconName: "activity",
        title: "Detection",
        description: "Real-time monitoring.",
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
        category: "CSPM & Detection",
        technologies: ["Wiz", "Prisma Cloud", "AWS GuardDuty", "Azure Defender", "CloudTrail", "Falco"]
    },
    {
        category: "Network & WAF",
        technologies: ["AWS VPC", "Azure NSG", "Cloudflare WAF", "Calico", "Istio", "AWS Shield"]
    },
    {
        category: "Encryption & Secrets",
        technologies: ["AWS KMS", "Azure Key Vault", "HashiCorp Vault", "cert-manager", "SOPS", "Sealed Secrets"]
    }
];

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
    {
        image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800\&q=80",
        category: "Consumer IoT",
        title: "Scaling Abode's Smart Security to Millions",
        services: "Serverless AWS, Firmware Optimization",
        result: "99.99% uptime \& 50% infrastructure cost reduction.",
        href: "/work/abode-smart-home"
    },
    {
        image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800\&q=80",
        category: "Industrial IoT",
        title: "Automating TerraSmart Solar Installation",
        services: "GPS Rovers, Mobile App, Field Deployment",
        result: "30% faster field deployment speed.",
        href: "/work/terrasmart-solar"
    },
    {
        image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800\&q=80",
        category: "AI + IoT",
        title: "AI-Driven Solar Tracking Optimization",
        services: "Machine Learning, Edge AI, Energy",
        result: "+12% energy generation boost.",
        href: "/work/terratrak-ai"
    }
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
        question: "What is CSPM and why do we need it?",
        answer: "Cloud Security Posture Management continuously scans your cloud accounts for misconfigurations like public S3 buckets, overly permissive security groups, or unencrypted volumes. Without CSPM, these issues go undetected until an attacker exploits them."
    },
    {
        question: "How do you handle multi-cloud environments?",
        answer: "We deploy cloud-agnostic CSPM tools like Wiz or Prisma Cloud that normalize findings across AWS, Azure, and GCP into a single dashboard. Policies are written once and enforced everywhere, with provider-specific auto-remediation."
    },
    {
        question: "Can you secure our existing Kubernetes clusters?",
        answer: "Yes. We perform a CIS Kubernetes Benchmark assessment, then implement OPA/Gatekeeper admission policies, Calico network policies, Falco runtime monitoring, and image signing with Cosign to harden your clusters without disrupting workloads."
    }
];

export const ctaData = {
    headline: "Harden Your Cloud.",
    subheadline: "Get a cloud security architecture that scales with your infrastructure.",
    email: "cloud-security@zigron.com",
};
