// IoT Device & Firmware Engineering - Content Data

export const pageMetadata = {
    title: "Embedded Firmware & Hardware Engineering | Zigron",
    description: "Bare-metal performance. Custom PCB design. RTOS architecture. We build the physical layer of your IoT product.",
};

export type IconName = "cpu" | "microchip" | "wifi" | "battery" | "code" | "server" | "layers" | "zap" | "shield" | "bluetooth" | "settings" | "activity" | "thermometer" | "radio" | "box" | "terminal" | "database" | "globe" | "cloud" | "lock" | "users";

// ============================================================================
// HERO SECTION
// ============================================================================

export const heroData = {
    badge: "Embedded Engineering",
    headline: "Hardware that Lasts.",
    headlineHighlight: "Firmware that Flies.",
    subheadline: "Custom embedded development to make hardware connectable, diagnosable, updatable, and secure in real-world conditions.",
    primaryCta: { label: "Consult an Engineer", href: "/contact" },
    secondaryCta: { label: "View Specs", href: "#specs" },
    trustBadges: [
        { icon: "cpu", label: "ARM & RISC-V Experts", color: "blue" },
        { icon: "battery", label: "Low Power Design", color: "green" },
        { icon: "shield", label: "Secure Boot", color: "purple" },
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
        title: "New Sensor/Gateway/Wearable",
        description: "Teams building new connected devices or custom board bring-up support.",
    },
    {
        title: "Smartifying Existing Devices",
        description: "Organizations adding connectivity to existing non-connected products.",
    },
    {
        title: "Field Reliability Issues",
        description: "Devices with connectivity, power, or OTA failure problems in the field.",
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
        iconName: "cpu",
        title: "Hardware Specifications",
        description: "Hardware specs, SDKs, connectivity modules, and power budget.",
    },
    {
        iconName: "cloud",
        title: "Target Protocol/Cloud",
        description: "Target communication protocol and cloud platform requirements.",
    },
    {
        iconName: "thermometer",
        title: "Field Environment",
        description: "Temperature, RF noise, offline operation, and environmental constraints.",
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
    { metric: "Power Consumption", description: "Target current draw in active/sleep modes" },
    { metric: "Reconnect Time", description: "Time to re-establish connectivity after loss" },
    { metric: "Telemetry Loss Rate", description: "Acceptable data loss threshold" },
    { metric: "OTA Success Rate", description: "Firmware update success and rollback metrics" },
    { metric: "Crash-Free Sessions", description: "Device stability and uptime metrics" },
];

// ============================================================================
// ACCEPTANCE CRITERIA (from Knowledge Doc)
// ============================================================================

export const acceptanceCriteria: string[] = [
    "Device meets connectivity and stability targets under realistic tests",
    "OTA update verified with failure scenarios and rollback",
    "Provisioning success rate validated in pilot environment",
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
        title: "Secure Boot / Signed Firmware",
        description: "Hardware-verified boot process where feasible.",
    },
    {
        iconName: "lock",
        title: "Key Storage Strategy",
        description: "TPM or secure element for cryptographic key storage.",
    },
    {
        iconName: "settings",
        title: "Tamper & Replay Protection",
        description: "Protection against physical and network-based attacks.",
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
        iconName: "microchip",
        title: "Custom PCB Design",
        description: "Altium-designed multi-layer boards optimized for RF performance, thermal management, and mass manufacturability (DFM).",
    },
    {
        iconName: "code",
        title: "RTOS & Bare Metal",
        description: "High-performance C/C++ firmware running on FreeRTOS or Zephyr. Zero bloat, deterministic timing, and granular power control.",
    },
    {
        iconName: "wifi",
        title: "Connectivity Stack",
        description: "Robust driver implementation for BLE 5.4, LoRaWAN, Cellular (NB-IoT/LTE-M), and Thread/Matter.",
    },
    {
        iconName: "battery",
        title: "Power Optimization",
        description: "Deep sleep profiling and battery life estimation. We engineer devices to run for 5+ years on a coin cell.",
    },
    {
        iconName: "shield",
        title: "Hardware Security",
        description: "Implementation of Trusted Platform Modules (TPM), Secure Boot, and encrypted OTA update pipelines.",
    },
    {
        iconName: "settings",
        title: "BSP & Drivers",
        description: "Custom Board Support Packages (BSP) and peripheral drivers written from scratch for your specific sensor suite.",
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
        title: "Medical Wearable",
        problem: "Battery life was only 12 hours, making the device unusable for sleep tracking.",
        solution: "Rewrote firmware to utilize sensor FIFO buffers and deep sleep states.",
        outcome: "Battery life extended to 14 days."
    },
    {
        title: "Industrial Gateway",
        problem: "Device overheating in outdoor enclosures causing resets.",
        solution: "Redesigned PCB for better thermal dissipation and optimized CPU clock gating.",
        outcome: "Stable operation at 85°C ambient."
    },
    {
        title: "Smart Metering",
        problem: "Unreliable connectivity in basement deployments.",
        solution: "Custom antenna tuning and implementation of LoRaWAN adaptive data rate.",
        outcome: "99.9% packet delivery rate."
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
        iconName: "microchip",
        title: "Schematic",
        description: "Component selection & circuit design."
    },
    {
        iconName: "layers",
        title: "Layout",
        description: "PCB routing & RF matching."
    },
    {
        iconName: "code",
        title: "Firmware",
        description: "Driver bring-up & logic."
    },
    {
        iconName: "activity",
        title: "Testing",
        description: "HALT/HASS & compliance."
    },
    {
        iconName: "box",
        title: "Production",
        description: "Manufacturing & flashing."
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
    { iconName: "cloud", title: "Application", subtitle: "Business Logic" },
    { iconName: "layers", title: "Middleware", subtitle: "RTOS, Filesystem" },
    { iconName: "settings", title: "Drivers", subtitle: "HAL, Peripherals" },
    { iconName: "microchip", title: "Hardware", subtitle: "MCU, Sensors" },
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
        iconName: "zap",
        title: "Efficiency",
        description: "uA-level optimization.",
        color: "blue",
    },
    {
        iconName: "shield",
        title: "Security",
        description: "Hardware root of trust.",
        color: "green",
    },
    {
        iconName: "radio",
        title: "Connectivity",
        description: "Robust RF design.",
        color: "red",
    },
    {
        iconName: "thermometer",
        title: "Reliability",
        description: "Watchdog & error correction.",
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
        category: "Microcontrollers",
        technologies: ["STM32", "Nordic nRF52/53", "ESP32", "NXP i.MX", "TI MSP430"]
    },
    {
        category: "Connectivity",
        technologies: ["Bluetooth LE", "LoRaWAN", "NB-IoT", "Zigbee", "Matter"]
    },
    {
        category: "Tools & OS",
        technologies: ["FreeRTOS", "Zephyr", "Altium Designer", "KiCad", "Segger J-Link"]
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
    { image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80", category: "Connectivity", title: "Connected Asset Tracker",
        services: "PCB Design, Firmware",
        result: "5-year battery life achieved.",
        href: "/work"
    },
    { image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80", category: "Smart Home", title: "Smart Home Controller",
        services: "Matter Integration",
        result: "First to market with Matter 1.0.",
        href: "/work"
    },
    { image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80", category: "Firmware", title: "Biometric Access Control",
        services: "Secure Boot, Fingerprint",
        result: "Hardware penetration test passed.",
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
        question: "Do you provide source code?",
        answer: "Yes. Unlike many firms, we hand over full source code, Altium project files, and manufacturing documentation (Gerbers, BOM) upon completion. You own the IP."
    },
    {
        question: "Can you help with certification?",
        answer: "Absolutely. We design for EMC/FCC compliance from day one and can manage the certification process with accredited test labs."
    },
    {
        question: "What MCUs do you support?",
        answer: "We are vendor-agnostic but specialize in STM32, Nordic, Espressif, and NXP ecosystems. We choose the best chip for your specific power and cost requirements."
    }
];

export const ctaData = {
    headline: "Build Hardware That Scale.",
    subheadline: "From prototype to production, we engineer reliability into every circuit.",
    email: "engineering@zigron.com",
};
