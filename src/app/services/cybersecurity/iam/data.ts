// Identity & Access Management - Content Data

export const pageMetadata = {
    title: "Identity & Access Management | Zigron",
    description: "SSO, MFA, zero trust, and machine identity. We design and implement IAM architectures that scale from workforce to connected devices.",
};

export type IconName = "cpu" | "microchip" | "wifi" | "battery" | "code" | "server" | "layers" | "zap" | "shield" | "bluetooth" | "settings" | "activity" | "thermometer" | "radio" | "box" | "terminal" | "database" | "globe" | "cloud" | "lock" | "users" | "signal" | "router" | "satellite";

// ============================================================================
// HERO SECTION
// ============================================================================

export const heroData = {
    badge: "Identity Engineering",
    headline: "Verify Every.",
    headlineHighlight: "Identity. Always.",
    subheadline: "SSO, MFA, RBAC/ABAC, zero trust architecture, and machine identity management for workforce, devices, and APIs.",
    primaryCta: { label: "Design Your IAM", href: "/contact" },
    secondaryCta: { label: "View Tech Stack", href: "#tech-stack" },
    trustBadges: [
        { icon: "users", label: "Zero Trust Architecture", color: "blue" },
        { icon: "lock", label: "Passwordless MFA", color: "green" },
        { icon: "shield", label: "Machine Identity", color: "purple" },
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
        title: "Enterprise Workforce",
        description: "Organizations consolidating identity across SaaS, on-prem, and cloud with SSO and lifecycle management.",
    },
    {
        title: "IoT Platform Companies",
        description: "Companies managing millions of device identities with automated provisioning and credential rotation.",
    },
    {
        title: "API-First Businesses",
        description: "Platforms requiring fine-grained API authentication, rate limiting, and partner access control.",
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
        iconName: "users",
        title: "Identity Landscape",
        description: "Current identity providers, user directories, application inventory, and access patterns.",
    },
    {
        iconName: "shield",
        title: "Access Requirements",
        description: "Compliance mandates, role definitions, privilege levels, and audit requirements.",
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
    { metric: "SSO Coverage", description: "Percentage of applications behind single sign-on" },
    { metric: "MFA Enrollment", description: "Users and devices with multi-factor authentication enabled" },
    { metric: "Privilege Creep Score", description: "Unused permissions detected and remediated" },
    { metric: "Access Review Cycle", description: "Time to complete quarterly access certifications" },
    { metric: "Identity Provisioning Time", description: "Time from request to access grant" },
];

// ============================================================================
// ACCEPTANCE CRITERIA
// ============================================================================

export const acceptanceCriteria: string[] = [
    "All applications federated through centralized SSO with MFA enforcement",
    "RBAC/ABAC policies implemented with least-privilege verification",
    "Machine identity lifecycle automated with credential rotation under 24 hours",
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
        iconName: "users",
        title: "Zero Trust Verification",
        description: "Continuous authentication and authorization for every request, regardless of network location.",
    },
    {
        iconName: "lock",
        title: "Least Privilege Access",
        description: "Just-in-time access provisioning with automatic expiration and privilege de-escalation.",
    },
    {
        iconName: "shield",
        title: "Identity Governance",
        description: "Automated access reviews, separation of duties enforcement, and orphaned account detection.",
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
        iconName: "users",
        title: "SSO & Federation",
        description: "SAML 2.0 and OIDC federation across all applications with centralized identity provider, session management, and step-up authentication.",
    },
    {
        iconName: "lock",
        title: "Multi-Factor Authentication",
        description: "Passwordless MFA with FIDO2/WebAuthn, push notifications, and risk-based adaptive authentication policies.",
    },
    {
        iconName: "shield",
        title: "RBAC & ABAC Policies",
        description: "Role-based and attribute-based access control with dynamic policy evaluation, context-aware authorization, and fine-grained permissions.",
    },
    {
        iconName: "globe",
        title: "Zero Trust Architecture",
        description: "Network-independent identity verification with continuous authentication, device trust scoring, and microsegmented access.",
    },
    {
        iconName: "cpu",
        title: "Machine Identity Management",
        description: "SPIFFE/SPIRE-based workload identity, X.509 certificate automation, and API key lifecycle management for service-to-service auth.",
    },
    {
        iconName: "cloud",
        title: "API Authentication & Gateway",
        description: "OAuth 2.0/OIDC implementation, API key management, rate limiting, and partner access portals with scoped permissions.",
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
        title: "Workforce Identity Consolidation",
        problem: "12 different identity silos across SaaS apps, VPN, and internal tools with no unified MFA.",
        solution: "Deployed Okta as central IdP with SAML/OIDC federation, FIDO2 MFA, and SCIM provisioning for all applications.",
        outcome: "Single identity for 3,000+ employees, 99.9% MFA."
    },
    {
        title: "IoT Device Identity at Scale",
        problem: "500K IoT devices using shared API keys with no individual identity or credential rotation.",
        solution: "Implemented SPIFFE-based device identity, per-device X.509 certificates, and automated 90-day rotation via EST protocol.",
        outcome: "Per-device identity with zero shared credentials."
    },
    {
        title: "API Gateway Authorization",
        problem: "Partner API access managed through manual key distribution with no granular permission scoping.",
        solution: "Built OAuth 2.0 authorization server with scoped tokens, partner portal for self-service, and real-time usage analytics.",
        outcome: "50+ partners onboarded in 2 weeks."
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
        title: "Identity Audit",
        description: "Map users & access."
    },
    {
        iconName: "users",
        title: "Architecture Design",
        description: "IdP & policy model."
    },
    {
        iconName: "lock",
        title: "MFA Rollout",
        description: "Phased enrollment."
    },
    {
        iconName: "shield",
        title: "Policy Enforcement",
        description: "RBAC/ABAC deployment."
    },
    {
        iconName: "settings",
        title: "Governance",
        description: "Reviews & monitoring."
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
    { iconName: "users", title: "Identity", subtitle: "IdP & Directory" },
    { iconName: "lock", title: "Authentication", subtitle: "MFA & SSO" },
    { iconName: "shield", title: "Authorization", subtitle: "RBAC/ABAC" },
    { iconName: "activity", title: "Governance", subtitle: "Audit & Review" },
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
        iconName: "users",
        title: "Identity",
        description: "Centralized directory.",
        color: "blue",
    },
    {
        iconName: "lock",
        title: "AuthN",
        description: "Passwordless MFA.",
        color: "green",
    },
    {
        iconName: "shield",
        title: "AuthZ",
        description: "Policy-based access.",
        color: "red",
    },
    {
        iconName: "activity",
        title: "Govern",
        description: "Continuous review.",
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
        category: "Identity Providers",
        technologies: ["Okta", "Auth0", "Keycloak", "Azure AD", "AWS IAM Identity Center", "PingIdentity"]
    },
    {
        category: "Machine Identity",
        technologies: ["SPIFFE/SPIRE", "HashiCorp Vault", "cert-manager", "AWS IoT Core", "EST Protocol", "ACME"]
    },
    {
        category: "Protocols & Standards",
        technologies: ["OAuth 2.0", "OIDC", "SAML 2.0", "FIDO2/WebAuthn", "SCIM", "LDAP"]
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
        question: "What is zero trust and how is it different from VPN-based access?",
        answer: "Zero trust assumes no implicit trust based on network location. Unlike VPN which grants broad network access once connected, zero trust verifies identity, device health, and context for every individual request. This dramatically reduces lateral movement risk if one credential is compromised."
    },
    {
        question: "How do you handle machine-to-machine identity?",
        answer: "We use SPIFFE/SPIRE for workload identity, assigning each service a cryptographic identity (SVID) that is automatically rotated. For IoT devices, we provision per-device X.509 certificates via secure elements with automated renewal through EST or ACME protocols."
    },
    {
        question: "Can you migrate us from legacy LDAP to modern SSO?",
        answer: "Yes. We perform a phased migration: first bridging LDAP to a modern IdP (Okta/Azure AD) with sync connectors, then gradually federating applications via SAML/OIDC, and finally decommissioning the LDAP directory once all apps are migrated. Users experience zero downtime."
    }
];

export const ctaData = {
    headline: "Verify Every Identity.",
    subheadline: "Get an IAM architecture that scales from 10 users to 10 million devices.",
    email: "iam@zigron.com",
};
