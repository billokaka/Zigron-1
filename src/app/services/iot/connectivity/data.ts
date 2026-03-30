// IoT Connectivity & Integration - Content Data

export const pageMetadata = {
    title: "IoT Connectivity & RF Engineering | Zigron",
    description: "Cellular (LTE-M, NB-IoT), LoRaWAN, BLE, and Satellite. We engineer the invisible links that keep your fleet connected.",
};

export type IconName = "cpu" | "microchip" | "wifi" | "battery" | "code" | "server" | "layers" | "zap" | "shield" | "bluetooth" | "settings" | "activity" | "thermometer" | "radio" | "box" | "terminal" | "database" | "globe" | "cloud" | "lock" | "users" | "signal" | "router" | "satellite";

// ============================================================================
// HERO SECTION
// ============================================================================

export const heroData = {
    badge: "Connectivity Engineering",
    headline: "Stay Connected.",
    headlineHighlight: "Everywhere.",
    subheadline: "Design and implement connectivity for devices and fleets: protocol selection, reliability patterns, and deployment constraints.",
    primaryCta: { label: "Design Your Network", href: "/contact" },
    secondaryCta: { label: "Protocol Comparison", href: "#tech-stack" },
    trustBadges: [
        { icon: "signal", label: "Cellular & Satellite", color: "blue" },
        { icon: "router", label: "Mesh Networking", color: "green" },
        { icon: "shield", label: "Encrypted Transport", color: "purple" },
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
        title: "Mixed Connectivity Environments",
        description: "Deployments mixing Wi-Fi, cellular, BLE, and other protocols.",
    },
    {
        title: "Unreliable Networks",
        description: "Roaming fleets, low-power constraints, or challenging RF environments.",
    },
    {
        title: "Secure Provisioning Needs",
        description: "Organizations requiring secure device provisioning and reconnect logic.",
    },
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
        iconName: "globe",
        title: "Coverage Requirements",
        description: "Region coverage, carrier constraints, expected uptime, data volume.",
    },
    {
        iconName: "cpu",
        title: "Device Constraints",
        description: "Power budget, compute capability, antenna options, environment.",
    },
];

// ============================================================================
// KPIs (from Knowledge Doc)
// ============================================================================

export interface KPI {
    metric: string;
    description: string;
}

export const kpis: KPI[] = [
    { metric: "Reconnect Time", description: "Time to re-establish connection after loss" },
    { metric: "Session Stability", description: "Connection uptime and stability metrics" },
    { metric: "Packet Loss Resilience", description: "Recovery from network disruptions" },
    { metric: "Telemetry Delivery Rate", description: "Successful message delivery percentage" },
    { metric: "Bandwidth Usage", description: "Data consumption per device per day" },
];

// ============================================================================
// ACCEPTANCE CRITERIA (from Knowledge Doc)
// ============================================================================

export const acceptanceCriteria: string[] = [
    "Connectivity validated under poor network simulations",
    "Secure provisioning and authentication verified",
    "Measurable telemetry delivery and retry behavior documented",
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
        title: "Mutual Authentication",
        description: "Mutual TLS authentication where possible.",
    },
    {
        iconName: "lock",
        title: "Certificate Rotation",
        description: "Automated certificate rotation plan for long-lived devices.",
    },
    {
        iconName: "settings",
        title: "Replay Protection",
        description: "Protection against replay attacks in provisioning flow.",
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
        iconName: "radio",
        title: "RF Circuit Design",
        description: "Impedance matching, antenna tuning, and custom PIFA/Chip antenna integration for maximum range.",
    },
    {
        iconName: "globe",
        title: "Cellular IoT",
        description: "Global SIM management and hardware design for LTE-M and NB-IoT (Cat-M1/NB1/NB2).",
    },
    {
        iconName: "router",
        title: "LoRaWAN & LPWAN",
        description: "Long-range, low-power private networks for agriculture, utilities, and smart cities.",
    },
    {
        iconName: "bluetooth",
        title: "BLE & Mesh",
        description: "Bluetooth 5.4, Thread, and Zigbee mesh networks for high-density indoor sensor deployments.",
    },
    {
        iconName: "satellite",
        title: "Satellite Backhaul",
        description: "Iridium and Swarm integration for truly off-grid assets in maritime and forestry.",
    },
    {
        iconName: "shield",
        title: "Carrier Certification",
        description: "Full management of PTCRB, GCF, and carrier-specific (AT&T, Verizon) certification processes.",
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
        title: "Cold Chain Logistics",
        problem: "Signal loss inside refrigerated steel containers.",
        solution: "Dual-mode BLE (inside) + Cellular (gateway) architecture.",
        outcome: "100% visibility of cargo temp."
    },
    {
        title: "Smart Water Metering",
        problem: "Meters located in deep underground concrete pits.",
        solution: "Custom high-gain antenna tuning for NB-IoT penetration.",
        outcome: "-120dBm link budget achieved."
    },
    {
        title: "Distant Forest Monitoring",
        problem: "No cellular coverage for wildfire sensors.",
        solution: "Swarm Satellite integration for low-cost packet data.",
        outcome: "Real-time alerts from remote grid."
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
        title: "Site Survey",
        description: "RF spectrum analysis."
    },
    {
        iconName: "cpu",
        title: "Component Selection",
        description: "Modem/Antenna matching."
    },
    {
        iconName: "radio",
        title: "RF Design",
        description: "PCB layout & tuning."
    },
    {
        iconName: "shield",
        title: "Certification",
        description: "FCC/CE & Carrier Labs."
    },
    {
        iconName: "globe",
        title: "Deployment",
        description: "SIM provisioning."
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
    { iconName: "microchip", title: "Device", subtitle: "Modem & SIM" },
    { iconName: "signal", title: "Network", subtitle: "Cell/Sat/Gateway" },
    { iconName: "cloud", title: "Cloud", subtitle: "MQTT Broker" },
    { iconName: "database", title: "App", subtitle: "Visualization" },
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
        iconName: "signal",
        title: "Range",
        description: "Optimized link budget.",
        color: "blue",
    },
    {
        iconName: "battery",
        title: "Power",
        description: "eDRX / PSM tuning.",
        color: "green",
    },
    {
        iconName: "lock",
        title: "Security",
        description: "Encrypted transport (TLS).",
        color: "red",
    },
    {
        iconName: "router",
        title: "Scale",
        description: "Millions of nodes.",
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
        category: "Cellular & LPWAN",
        technologies: ["Quectel", "Nordic nRF91", "Semtech (LoRa)", "Telit", "u-blox"]
    },
    {
        category: "Short Range",
        technologies: ["Silicon Labs (Zigbee)", "Nordic (BLE)", "Texas Instruments", "OpenThread"]
    },
    {
        category: "SIM & Carriers",
        technologies: ["Twilio SuperSIM", "Hologram", "Soracom", "1NCE", "Emnify"]
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
    { image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80", category: "Connectivity", title: "Connected EV Chargers",
        services: "LTE-M Integration",
        result: "99.99% uptime across 50 states.",
        href: "/work"
    },
    { image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80", category: "IoT", title: "Smart Agriculture Mesh",
        services: "LoRaWAN Gateway",
        result: "Covered 5,000 acres with 1 gateway.",
        href: "/work"
    },
    { image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80", category: "Firmware", title: "Maritime Asset Tracking",
        services: "Satellite/Cellular Hybrid",
        result: "Seamless global tracking.",
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
        question: "LTE-M vs NB-IoT: Which should I choose?",
        answer: "LTE-M is better for moving assets (voice support, higher bandwidth), while NB-IoT is superior for static sensors in deep indoor locations (meters) due to better penetration and battery life."
    },
    {
        question: "How do you handle SIM cards?",
        answer: "We typically integrate eSIMs (MFF2) for soldering directly onto the PCB, providing ruggedness and the ability to switch profiles OTA (eUICC) without swapping cards."
    },
    {
        question: "What about 2G/3G sunset?",
        answer: "We design strictly for 4G LTE Cat-1, LTE-M, NB-IoT, and 5G to ensure your hardware has a 10+ year operational lifespan without obsolescence."
    }
];

export const ctaData = {
    headline: "Eliminate Dead Zones.",
    subheadline: "Get a connectivity strategy that survives the real world.",
    email: "connectivity@zigron.com",
};
