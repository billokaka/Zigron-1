// IoT Security & Device Protection - Content Data

export const pageMetadata = {
    title: "IoT Security & Device Protection | Zigron",
    description: "Firmware hardening, secure boot, device identity management, and OTA security. We protect every layer of your connected device ecosystem.",
};

export type IconName = "cpu" | "microchip" | "wifi" | "battery" | "code" | "server" | "layers" | "zap" | "shield" | "bluetooth" | "settings" | "activity" | "thermometer" | "radio" | "box" | "terminal" | "database" | "globe" | "cloud" | "lock" | "users" | "signal" | "router" | "satellite";

// ============================================================================
// HERO SECTION
// ============================================================================

export const heroData = {
    badge: "IoT Security Engineering",
    headline: "Secure Every.",
    headlineHighlight: "Connected Device.",
    subheadline: "Firmware hardening, device identity, secure boot chains, and OTA protection for connected devices operating in hostile environments.",
    primaryCta: { label: "Secure Your Devices", href: "/contact" },
    secondaryCta: { label: "View Tech Stack", href: "#tech-stack" },
    trustBadges: [
        { icon: "shield", label: "PSA Certified", color: "blue" },
        { icon: "lock", label: "Hardware Root of Trust", color: "green" },
        { icon: "cpu", label: "Secure Boot Chain", color: "purple" },
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
        title: "Medical Device Manufacturers",
        description: "FDA-regulated devices requiring security by design and post-market vulnerability management.",
    },
    {
        title: "Industrial OEMs",
        description: "Control systems and PLCs exposed to OT networks needing firmware integrity verification.",
    },
    {
        title: "Consumer IoT Companies",
        description: "Large device device groups requiring scalable secure provisioning and OTA update infrastructure.",
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
        iconName: "cpu",
        title: "Hardware Platform Details",
        description: "MCU/SoC selection, available crypto accelerators, secure element availability, JTAG exposure.",
    },
    {
        iconName: "shield",
        title: "Threat Model & Compliance",
        description: "Target certification (PSA, SESIP), regulatory requirements, threat environment assumptions.",
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
    { metric: "Secure Boot Coverage", description: "Percentage of device group with verified boot chain" },
    { metric: "OTA Success Rate", description: "Signed firmware update delivery and verification rate" },
    { metric: "Key Rotation Compliance", description: "Devices with current cryptographic credentials" },
    { metric: "Vulnerability SLA", description: "Time from CVE disclosure to patched firmware rollout" },
    { metric: "Tamper Detection Rate", description: "Physical and logical tamper events detected" },
];

// ============================================================================
// ACCEPTANCE CRITERIA
// ============================================================================

export const acceptanceCriteria: string[] = [
    "Secure boot chain validated from ROM to application on all target hardware",
    "OTA update mechanism verified with rollback protection and signature validation",
    "Device identity provisioning tested at scale with mutual authentication",
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
        iconName: "shield",
        title: "Hardware Root of Trust",
        description: "Immutable trust anchor in silicon using TPM 2.0 or ATECC608 secure elements.",
    },
    {
        iconName: "lock",
        title: "Firmware Integrity",
        description: "Cryptographic signature verification at every stage of the boot chain.",
    },
    {
        iconName: "settings",
        title: "Anti-Tamper Measures",
        description: "Physical and logical tamper detection with automatic key zeroization.",
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
        iconName: "shield",
        title: "Firmware Hardening",
        description: "Memory protection, stack canaries, ASLR, and secure coding practices to eliminate common vulnerability classes in embedded systems.",
    },
    {
        iconName: "lock",
        title: "Secure Boot Implementation",
        description: "Multi-stage verified boot from ROM bootloader through RTOS/Linux kernel with hardware-backed signature validation.",
    },
    {
        iconName: "cpu",
        title: "Device Identity & PKI",
        description: "X.509 certificate provisioning, per-device key generation using secure elements, and certificate lifecycle management.",
    },
    {
        iconName: "cloud",
        title: "OTA Security Architecture",
        description: "Signed and encrypted firmware delivery with rollback protection, differential updates, and A/B partition schemes.",
    },
    {
        iconName: "settings",
        title: "Physical Tamper Resistance",
        description: "JTAG/SWD lockdown, debug port protection, enclosure tamper detection, and secure key storage against side-channel attacks.",
    },
    {
        iconName: "globe",
        title: "Device-to-Cloud Trust",
        description: "Mutual TLS authentication, device attestation, and zero-trust network architecture from edge to cloud.",
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
        title: "Medical Device Security",
        problem: "FDA requires pre-market cybersecurity documentation and post-market vulnerability management.",
        solution: "Implemented SBOM generation, secure boot, encrypted storage, and automated CVE monitoring pipeline.",
        outcome: "FDA 510(k) cleared with zero security findings."
    },
    {
        title: "Industrial Control Hardening",
        problem: "Legacy PLCs and RTUs exposed on flat OT networks with no firmware integrity verification.",
        solution: "Retrofitted secure boot, network microsegmentation, and signed OTA updates with rollback protection.",
        outcome: "IEC 62443 SL2 compliance achieved."
    },
    {
        title: "Consumer IoT Fleet Protection",
        problem: "2M+ smart home devices with shared credentials and no secure update mechanism.",
        solution: "Deployed per-device identity via ATECC608, mutual TLS, and delta OTA with code signing.",
        outcome: "Zero credential compromise across device group."
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
        title: "Threat Modeling",
        description: "STRIDE analysis & attack trees."
    },
    {
        iconName: "cpu",
        title: "Hardware Assessment",
        description: "Secure element & MCU audit."
    },
    {
        iconName: "shield",
        title: "Secure Boot Design",
        description: "Chain of trust implementation."
    },
    {
        iconName: "lock",
        title: "Identity Provisioning",
        description: "PKI & certificate deployment."
    },
    {
        iconName: "settings",
        title: "Validation & Certification",
        description: "PSA / SESIP / FDA review."
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
    { iconName: "cpu", title: "Silicon", subtitle: "Secure Element & TPM" },
    { iconName: "microchip", title: "Firmware", subtitle: "Hardened Boot Chain" },
    { iconName: "shield", title: "Transport", subtitle: "mTLS & Attestation" },
    { iconName: "cloud", title: "Cloud", subtitle: "Device Management" },
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
        iconName: "lock",
        title: "Identity",
        description: "Per-device PKI.",
        color: "blue",
    },
    {
        iconName: "shield",
        title: "Integrity",
        description: "Verified boot chain.",
        color: "green",
    },
    {
        iconName: "settings",
        title: "Resilience",
        description: "Tamper detection.",
        color: "red",
    },
    {
        iconName: "cloud",
        title: "Updates",
        description: "Signed OTA delivery.",
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
        category: "Secure Elements & Hardware",
        technologies: ["ATECC608", "TPM 2.0", "ARM TrustZone", "JTAG Protection", "Infineon OPTIGA"]
    },
    {
        category: "Standards & Certification",
        technologies: ["PSA Certified", "SESIP", "IEC 62443", "NIST 800-183", "FDA Cybersecurity Guidance"]
    },
    {
        category: "Protocols & Crypto",
        technologies: ["X.509", "ECDSA P-256", "AES-256-GCM", "DTLS 1.3", "SUIT Manifest"]
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
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
        category: "Medical IoT",
        title: "Surgical Robot Security",
        services: "Secure Boot & FDA Compliance",
        result: "FDA 510(k) cleared, zero critical findings.",
        href: "/work"
    },
    {
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80",
        category: "Industrial",
        title: "Smart Grid Controller Hardening",
        services: "Firmware Hardening & OTA",
        result: "IEC 62443 SL2 certified in 8 weeks.",
        href: "/work"
    },
    {
        image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80",
        category: "Consumer IoT",
        title: "Smart Lock Fleet Security",
        services: "Device Identity & PKI",
        result: "2M devices secured with per-device keys.",
        href: "/work"
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
        question: "What is a hardware root of trust and why does it matter?",
        answer: "A hardware root of trust is an immutable cryptographic anchor embedded in silicon (like TPM 2.0 or ATECC608). It ensures that the first code executed on your device is verified and trusted, making it impossible for attackers to persist malware across reboots."
    },
    {
        question: "How do you handle OTA updates securely?",
        answer: "We implement signed firmware packages with ECDSA verification, encrypted delivery channels, A/B partition schemes for atomic rollback, and version anti-rollback counters stored in one-time-programmable fuses to prevent downgrade attacks."
    },
    {
        question: "Can you retrofit security onto existing devices?",
        answer: "Yes, depending on the hardware capabilities. If the MCU supports secure boot and has available crypto accelerators, we can add firmware hardening, secure update mechanisms, and certificate-based identity without a hardware redesign."
    }
];

export const ctaData = {
    headline: "Secure Your Connected Devices.",
    subheadline: "Get a device security architecture that withstands real-world attacks.",
    email: "security@zigron.com",
};
