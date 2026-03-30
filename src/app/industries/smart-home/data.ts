// Smart Home & Consumer IoT Industry Page - Content Data
// Sourced from Knowledge Doc: Industries.md Section 4

export const pageMetadata = {
    title: "Smart Home & Consumer IoT Solutions | Zigron",
    description: "Custom smart home platforms for OEMs—reliable onboarding, device control, OTA updates, and ecosystem integrations at scale.",
    keywords: ["smart home IoT", "consumer IoT", "device onboarding", "OTA updates", "Matter", "connected home", "OEM platform"],
};

export const heroData = {
    badge: "Smart Home & Consumer IoT",
    headline: "Connected Home",
    headlineHighlight: "Platform Engineering",
    subheadline: "Scale smart home products from prototype to millions of devices. We build the platform layer OEMs can't afford to get wrong.",
    primaryCta: { label: "Talk to an expert", href: "/contact" },
    secondaryCta: { label: "View case studies", href: "/work" },
};

export type IconName = "home" | "shield" | "cpu" | "barChart" | "lock" | "clock" | "clipboard" | "alertTriangle" | "wifi" | "cloud" | "users" | "target" | "zap" | "smartphone" | "settings" | "eye";

export interface Challenge { iconName: IconName; title: string; description: string; }
export const challenges: Challenge[] = [
    { iconName: "wifi", title: "Consumer Network Reliability", description: "Unreliable Wi-Fi, Bluetooth pairing failures, and device discovery issues in real homes." },
    { iconName: "alertTriangle", title: "High Support Costs", description: "Onboarding failures driving expensive customer support calls and returns." },
    { iconName: "shield", title: "Multi-Ecosystem Complexity", description: "Alexa, Google Home, and Matter certification requirements for each device type." },
    { iconName: "cloud", title: "OTA Update Risk", description: "Firmware update failures bricking devices with no recovery mechanism." },
    { iconName: "users", title: "Scaling to Millions", description: "Platform infrastructure that must handle exponential device and user growth." },
];

export interface Solution { iconName: IconName; title: string; description: string; href: string; }
export const solutions: Solution[] = [
    { iconName: "smartphone", title: "Guided Onboarding", description: "BLE-based device discovery, visual setup flows, and progressive steps that reduce drop-offs.", href: "/solutions/smart-home-automation" },
    { iconName: "settings", title: "Device Control & Automation", description: "Rules, scenes, schedules, and triggers for delightful smart home experiences.", href: "/solutions/smart-home-automation" },
    { iconName: "cloud", title: "Safe OTA Pipeline", description: "Signed firmware, staged rollout, canary monitoring, and automatic rollback.", href: "/services/iot/device-firmware" },
    { iconName: "wifi", title: "Ecosystem Integrations", description: "Certified Alexa, Google Home, and Matter integrations for multi-platform compatibility.", href: "/services/iot/connectivity" },
    { iconName: "eye", title: "Support & Care Tooling", description: "Customer care console, remote diagnostics, and device health dashboards.", href: "/services/iot/platform-cloud" },
];

export interface RecommendedSolution { title: string; description: string; bestFor: string; outcome: string; href: string; }
export const recommendedSolutions: RecommendedSolution[] = [
    { title: "Smart Home Automation", description: "Full OEM smart home platform with onboarding, control, OTA, and ecosystem integrations.", bestFor: "Smart home OEMs and consumer IoT brands", outcome: "94% onboarding completion, zero bricked devices", href: "/solutions/smart-home-automation" },
];

export interface ServiceCategory { iconName: IconName; title: string; services: string[]; }
export const serviceCategories: ServiceCategory[] = [
    { iconName: "cpu", title: "Firmware & Devices", services: ["BLE/WiFi Firmware", "Low-Power Optimization", "OTA Update Infrastructure", "Hardware-Software Integration"] },
    { iconName: "cloud", title: "Cloud Platform", services: ["Device Management & Identity", "MQTT/WebSocket Infrastructure", "Multi-Tenant Architecture", "Scale Engineering"] },
    { iconName: "smartphone", title: "Mobile & Apps", services: ["React Native / Swift / Kotlin", "Guided Onboarding Flows", "Push Notifications", "User Role Management"] },
];

export interface SecurityFeature { iconName: IconName; title: string; description: string; }
export const securityFeatures: SecurityFeature[] = [
    { iconName: "lock", title: "Device Identity & Auth", description: "Unique device identity with mutual authentication and secure provisioning." },
    { iconName: "shield", title: "Secure OTA Pipeline", description: "Signed firmware with staged rollout and automatic rollback on anomalies." },
    { iconName: "eye", title: "Audit Logging", description: "Admin actions and remote commands fully logged for security review." },
    { iconName: "clipboard", title: "Least Privilege", description: "Role-based access with minimal required permissions for each user tier." },
];

export interface CaseStudy { image: string; category: string; title: string; challenge: string; result: string; href: string; }
export const caseStudies: CaseStudy[] = [
    { image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80", category: "Consumer IoT", title: "Abode Smart Home Security", challenge: "Scaling a connected home platform with 99.99% uptime requirements.", result: "99.99% uptime & 50% infrastructure cost reduction.", href: "/work/abode-smart-home" },
    { image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80", category: "Industrial IoT", title: "TerraSmart Solar Platform", challenge: "Managing hundreds of distributed IoT devices across field sites.", result: "30% faster field deployment across 500+ installations.", href: "/work/terrasmart-solar" },
];

export interface ImplementationPattern { number: number; title: string; description: string; features: string[]; featured: boolean; }
export const implementationPatterns: ImplementationPattern[] = [
    { number: 1, title: "Discovery", description: "Device capabilities, ecosystem targets, and scale requirements.", features: ["2-3 weeks", "Device audit", "Scale modeling"], featured: false },
    { number: 2, title: "Platform Build", description: "Device management, control layer, and mobile app development.", features: ["8-12 weeks", "Core platform live", "App in TestFlight"], featured: true },
    { number: 3, title: "Integration", description: "Voice assistants, Matter certification, and ecosystem testing.", features: ["4-8 weeks", "Certified integrations", "QA validated"], featured: false },
    { number: 4, title: "Launch", description: "OTA pipeline, monitoring, and production deployment.", features: ["2-4 weeks", "Production ready", "Monitoring live"], featured: false },
];

export interface FAQ { question: string; answer: string; }
export const faqs: FAQ[] = [
    { question: "How do you reduce onboarding failures?", answer: "We design guided onboarding flows with BLE discovery, visual feedback, and progressive steps. We instrument every stage to identify drop-off points and continuously optimize the flow. Typical results: 90%+ onboarding completion rates." },
    { question: "How do you keep costs controlled at scale?", answer: "We design platform architecture for horizontal scalability with cost-optimized infrastructure choices. MQTT message routing, efficient device state management, and serverless compute help keep per-device costs predictable as fleets grow." },
    { question: "How do you ship weekly without breaking devices?", answer: "We implement safe OTA with signed firmware, staged rollout (1% → 10% → full fleet), canary monitoring, and automatic rollback. Combined with CI/CD pipelines and automated regression testing for each release cycle." },
    { question: "Can you integrate with Alexa, Google Home, and Matter?", answer: "Yes. We build certified integrations and handle the certification process. Matter support provides long-term multi-ecosystem interoperability. Timelines depend on device type and platform-specific requirements." },
];

export const ctaData = {
    headline: "Ready to Build Connected Experiences?",
    subheadline: "Tell us about your product vision. We'll engineer a connected platform your customers will love.",
    email: "smarthome@zigron.com",
};
