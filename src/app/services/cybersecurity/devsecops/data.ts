// DevSecOps & Secure CI/CD - Content Data

export const pageMetadata = {
    title: "DevSecOps & Secure CI/CD | Zigron",
    description: "SAST/DAST integration, container scanning, policy-as-code, and software supply chain security baked into your CI/CD pipeline.",
};

export type IconName = "cpu" | "microchip" | "wifi" | "battery" | "code" | "server" | "layers" | "zap" | "shield" | "bluetooth" | "settings" | "activity" | "thermometer" | "radio" | "box" | "terminal" | "database" | "globe" | "cloud" | "lock" | "users" | "signal" | "router" | "satellite";

// ============================================================================
// HERO SECTION
// ============================================================================

export const heroData = {
    badge: "DevSecOps Engineering",
    headline: "Ship Secure.",
    headlineHighlight: "Ship Fast.",
    subheadline: "Embed security scanning, policy gates, and supply chain integrity directly into your CI/CD pipelines without slowing down releases.",
    primaryCta: { label: "Secure Your Pipeline", href: "/contact" },
    secondaryCta: { label: "View Tech Stack", href: "#tech-stack" },
    trustBadges: [
        { icon: "code", label: "SAST/DAST Integration", color: "blue" },
        { icon: "shield", label: "Supply Chain Security", color: "green" },
        { icon: "terminal", label: "Policy-as-Code", color: "purple" },
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
        title: "High-Velocity Engineering Teams",
        description: "Organizations shipping multiple times per day needing automated security gates that do not block velocity.",
    },
    {
        title: "Regulated Software Vendors",
        description: "Companies requiring audit trails, SBOM generation, and compliance evidence for every release.",
    },
    {
        title: "ML/AI Platform Teams",
        description: "Teams running ML training pipelines needing supply chain integrity for models and data.",
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
        iconName: "terminal",
        title: "CI/CD Architecture",
        description: "Current pipeline tools, artifact registries, deployment targets, and branching strategy.",
    },
    {
        iconName: "shield",
        title: "Security Requirements",
        description: "Compliance frameworks, vulnerability SLAs, approval workflows, and audit needs.",
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
    { metric: "Vulnerability Escape Rate", description: "Security issues reaching production per release" },
    { metric: "Pipeline Security Scan Time", description: "Time added to CI/CD by security gates" },
    { metric: "SBOM Coverage", description: "Percentage of releases with complete software bill of materials" },
    { metric: "Dependency Currency", description: "Dependencies with known vulnerabilities in production" },
    { metric: "Policy Compliance Rate", description: "Deployments passing all policy-as-code checks" },
];

// ============================================================================
// ACCEPTANCE CRITERIA
// ============================================================================

export const acceptanceCriteria: string[] = [
    "All pipelines include SAST, DAST, and dependency scanning with configurable severity gates",
    "Container images scanned and signed before registry push",
    "SBOM generated and attested for every production release",
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
        iconName: "code",
        title: "Shift-Left Scanning",
        description: "SAST and SCA integrated at pull request stage for earliest detection.",
    },
    {
        iconName: "shield",
        title: "Artifact Signing",
        description: "Sigstore-based signing and verification for all build artifacts.",
    },
    {
        iconName: "lock",
        title: "Supply Chain Integrity",
        description: "SLSA Level 3 provenance for reproducible and verifiable builds.",
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
        iconName: "code",
        title: "SAST/DAST Integration",
        description: "Static and dynamic application security testing embedded in CI pipelines with configurable severity gates and developer-friendly reporting.",
    },
    {
        iconName: "box",
        title: "Container & Image Scanning",
        description: "Automated vulnerability scanning of container images with Trivy, blocking deployments with critical CVEs and generating fix recommendations.",
    },
    {
        iconName: "layers",
        title: "Dependency & SCA Scanning",
        description: "Software composition analysis for open-source dependencies, license compliance checking, and automated PR-based remediation with Snyk.",
    },
    {
        iconName: "terminal",
        title: "Policy-as-Code Gates",
        description: "OPA/Rego and Checkov policies enforced at admission and deployment, ensuring infrastructure and workloads meet security baselines.",
    },
    {
        iconName: "shield",
        title: "Signed Artifacts & SBOM",
        description: "Sigstore-based artifact signing, SBOM generation in CycloneDX/SPDX formats, and SLSA provenance attestation for supply chain integrity.",
    },
    {
        iconName: "lock",
        title: "Secure Supply Chain",
        description: "Dependency pinning, reproducible builds, verified base images, and Gatekeeper admission control to prevent unauthorized code from reaching production.",
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
        title: "Securing ML Training Pipelines",
        problem: "ML models trained on unverified data with no provenance tracking or artifact signing.",
        solution: "Implemented SLSA Level 3 provenance for model artifacts, signed training data manifests, and policy gates on model registry.",
        outcome: "Full audit trail for every model in production."
    },
    {
        title: "Automated Compliance Gates",
        problem: "Manual security reviews creating 2-week bottleneck before every release.",
        solution: "Replaced manual reviews with automated SAST/DAST/SCA scans, OPA policy checks, and evidence collection for audit.",
        outcome: "Release cycle reduced from 14 days to 4 hours."
    },
    {
        title: "Software Supply Chain Integrity",
        problem: "Compromised npm dependency went undetected for 3 weeks in production.",
        solution: "Deployed Snyk with real-time monitoring, lockfile integrity checks, Sigstore signing, and automated remediation PRs.",
        outcome: "Zero supply chain incidents in 12 months."
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
        title: "Pipeline Audit",
        description: "Map current CI/CD flow."
    },
    {
        iconName: "code",
        title: "Scanner Integration",
        description: "SAST/DAST/SCA setup."
    },
    {
        iconName: "terminal",
        title: "Policy Gates",
        description: "OPA/Checkov rules."
    },
    {
        iconName: "shield",
        title: "Artifact Signing",
        description: "Sigstore & SBOM."
    },
    {
        iconName: "settings",
        title: "Continuous Tuning",
        description: "Reduce false positives."
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
    { iconName: "code", title: "Source", subtitle: "SCM & PR Scans" },
    { iconName: "terminal", title: "Build", subtitle: "CI Security Gates" },
    { iconName: "box", title: "Artifact", subtitle: "Sign & Attest" },
    { iconName: "cloud", title: "Deploy", subtitle: "Admission Control" },
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
        iconName: "code",
        title: "Detect",
        description: "SAST/DAST scanning.",
        color: "blue",
    },
    {
        iconName: "terminal",
        title: "Enforce",
        description: "Policy-as-code gates.",
        color: "green",
    },
    {
        iconName: "shield",
        title: "Attest",
        description: "Signed provenance.",
        color: "red",
    },
    {
        iconName: "settings",
        title: "Monitor",
        description: "Runtime detection.",
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
        category: "Scanning & Analysis",
        technologies: ["Snyk", "SonarQube", "Trivy", "OWASP ZAP", "Semgrep", "Grype"]
    },
    {
        category: "Policy & Compliance",
        technologies: ["OPA/Gatekeeper", "Checkov", "tfsec", "Kyverno", "Conftest", "SLSA"]
    },
    {
        category: "Supply Chain & Signing",
        technologies: ["Sigstore/Cosign", "Syft (SBOM)", "GitHub Actions", "GitLab CI", "in-toto", "Notation"]
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
        question: "How much time does security scanning add to our CI/CD pipeline?",
        answer: "Typically 2-5 minutes per pipeline run. We optimize by running SAST/SCA in parallel, caching vulnerability databases, using incremental scanning for unchanged files, and only running DAST on staging deployments rather than every commit."
    },
    {
        question: "What is SLSA and why should we care about supply chain security?",
        answer: "SLSA (Supply-chain Levels for Software Artifacts) is a framework for ensuring the integrity of software artifacts. After incidents like SolarWinds and Log4Shell, supply chain security is critical. We implement SLSA Level 3 provenance so you can prove exactly how every artifact was built."
    },
    {
        question: "Can you integrate with our existing CI/CD tools?",
        answer: "Yes. We support GitHub Actions, GitLab CI, Jenkins, CircleCI, Azure DevOps, and ArgoCD. Our security gates are tool-agnostic — they run as pipeline steps that fail the build if policy violations are found, regardless of the CI platform."
    }
];

export const ctaData = {
    headline: "Secure Your Pipeline.",
    subheadline: "Ship code with confidence knowing every release is scanned, signed, and attested.",
    email: "devsecops@zigron.com",
};
