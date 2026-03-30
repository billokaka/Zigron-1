// Smart Home & Consumer IoT Solution Page - Content Data
// Sourced from Knowledge Doc: SOLUTIONS.md Section 4

export const pageMetadata = {
    title: "Smart Home & Consumer IoT Solutions | Zigron",
    description: "Smart home solution for OEMs and brands: reliable onboarding, device control, automation, OTA updates, and multi-ecosystem compatibility at scale.",
    keywords: ["smart home", "consumer IoT", "device management", "OTA updates", "Matter", "home automation", "connected devices"],
};

export const heroData = {
    badge: "Smart Home & Consumer IoT",
    headline: "Connected Home",
    headlineHighlight: "Experiences",
    subheadline: "Custom smart home platform for OEMs—reliable onboarding, device control, automation, and OTA updates designed for long-lived products.",
    primaryCta: { label: "Discuss your product", href: "/contact" },
    secondaryCta: { label: "View case studies", href: "/work" },
    trustBadges: [
        { icon: "shield", label: "Matter Certified", color: "green" },
        { icon: "checkCircle", label: "5-Star User Experience", color: "blue" },
        { icon: "zap", label: "Safe OTA Updates", color: "purple" },
    ],
};

export type IconName = "home" | "shield" | "checkCircle" | "zap" | "search" | "database" | "workflow" | "target" | "layers" | "cpu" | "cloud" | "smartphone" | "wifi" | "lock" | "eye" | "settings";

export interface Module { iconName: IconName; title: string; description: string; features: string[]; }
export const modules: Module[] = [
    { iconName: "cpu", title: "Device Lifecycle Management", description: "Identity, provisioning, fleet grouping, and diagnostics.", features: ["Device identity & auth", "Fleet provisioning", "Group management", "Health diagnostics"] },
    { iconName: "settings", title: "Control & Automation", description: "Rules, scenes, schedules, and triggers for delightful experiences.", features: ["Rule-based automation", "Scene management", "Schedule triggers", "Device grouping"] },
    { iconName: "smartphone", title: "Mobile & Web Apps", description: "Onboarding, control, notifications, and multi-user roles.", features: ["Guided onboarding flow", "Real-time device control", "Push notifications", "User role sharing"] },
    { iconName: "wifi", title: "Ecosystem Integrations", description: "Voice assistants and multi-platform interoperability.", features: ["Alexa integration", "Google Home support", "Matter compatibility", "IFTTT connectors"] },
    { iconName: "cloud", title: "OTA Update Pipeline", description: "Staged rollout, canaries, and automatic rollback.", features: ["Staged deployments", "Canary releases", "Automatic rollback", "Version management"] },
    { iconName: "eye", title: "Support Tooling", description: "Customer care console, device health, and log capture.", features: ["Customer care console", "Remote diagnostics", "Log aggregation", "Ticket integration"] },
];

export interface UseCase { title: string; problem: string; solution: string; outcome: string; metrics: { value: string; label: string }[]; }
export const useCases: UseCase[] = [
    { title: "Smart Home Security OEM", problem: "High onboarding abandonment and frequent support calls for a connected camera and sensor product line.", solution: "Custom mobile app with guided BLE onboarding, visual setup flow, and proactive device health monitoring.", outcome: "Onboarding completion increased from 62% to 94%.", metrics: [{ value: "94%", label: "Onboarding Rate" }, { value: "60%", label: "Fewer Support Calls" }] },
    { title: "Connected Appliance Brand", problem: "Fragmented device ecosystem with inconsistent user experience across product lines.", solution: "Unified platform with Matter integration, shared automation rules, and single mobile app across all devices.", outcome: "User engagement up 3x with unified experience.", metrics: [{ value: "3x", label: "User Engagement" }, { value: "Matter", label: "Certified" }] },
    { title: "Smart Lighting Platform", problem: "OTA failures bricking devices in the field with no recovery mechanism.", solution: "Safe OTA pipeline with signed firmware, staged rollout (1% → 10% → 100%), canary monitoring, and automatic rollback.", outcome: "Zero bricked devices across 50K+ OTA deployments.", metrics: [{ value: "0", label: "Bricked Devices" }, { value: "50K+", label: "OTA Deployments" }] },
];

export interface DeliveryPhase { iconName: IconName; title: string; description: string; }
export const deliveryPhases: DeliveryPhase[] = [
    { iconName: "search", title: "Discovery", description: "Device capabilities, ecosystem targets, and scale requirements" },
    { iconName: "cpu", title: "Platform Build", description: "Device management, control layer, and mobile app development" },
    { iconName: "wifi", title: "Integration", description: "Voice assistants, Matter certification, and ecosystem testing" },
    { iconName: "cloud", title: "Launch", description: "OTA pipeline, monitoring, and production deployment" },
    { iconName: "eye", title: "Operate", description: "Support tooling, health monitoring, and continuous improvement" },
];

export interface ArchitectureLayer { iconName: IconName; title: string; subtitle: string; }
export const architectureLayers: ArchitectureLayer[] = [
    { iconName: "cpu", title: "Devices", subtitle: "IoT Hardware" },
    { iconName: "wifi", title: "Connectivity", subtitle: "BLE / WiFi / Matter" },
    { iconName: "cloud", title: "Cloud Platform", subtitle: "Device Management" },
    { iconName: "smartphone", title: "Mobile Apps", subtitle: "User Interface" },
    { iconName: "settings", title: "Automation", subtitle: "Rules & Scenes" },
];

export interface SecurityControl { iconName: IconName; title: string; description: string; }
export const securityControls: SecurityControl[] = [
    { iconName: "lock", title: "Device Identity & Auth", description: "Unique identity and mutual authentication for every device." },
    { iconName: "shield", title: "Secure OTA", description: "Signed firmware with staged rollout and automatic rollback." },
    { iconName: "eye", title: "Audit Logging", description: "Admin actions and remote commands fully logged." },
    { iconName: "checkCircle", title: "Least Privilege", description: "Role-based access with minimal required permissions." },
];

export interface InputRequired { iconName: IconName; title: string; description: string; }
export const inputsRequired: InputRequired[] = [
    { iconName: "cpu", title: "Device Capabilities", description: "Hardware specs, communication protocols, and onboarding requirements." },
    { iconName: "wifi", title: "Ecosystem Targets", description: "Voice assistants, certification targets, and interop requirements." },
    { iconName: "target", title: "Scale Targets", description: "Expected device count, regions, and concurrent user load." },
];

export interface KPI { metric: string; description: string; }
export const kpis: KPI[] = [
    { metric: "Onboarding Completion", description: "Percentage of users who complete device setup" },
    { metric: "Time to First Success", description: "Minutes from unbox to first device interaction" },
    { metric: "Fleet Uptime SLO", description: "Platform availability percentage" },
    { metric: "Command Latency", description: "End-to-end device response time" },
    { metric: "OTA Success Rate", description: "Percentage of successful firmware updates" },
    { metric: "Support Ticket Rate", description: "Tickets per 1,000 active devices" },
];

export interface TechCategory { category: string; technologies: string[]; }
export const techStack: TechCategory[] = [
    { category: "IoT & Connectivity", technologies: ["BLE", "Zigbee", "Z-Wave", "Matter", "WiFi", "Thread"] },
    { category: "Cloud & Backend", technologies: ["AWS IoT Core", "Azure IoT Hub", "MQTT", "Node.js", "PostgreSQL"] },
    { category: "Mobile & Frontend", technologies: ["React Native", "Swift", "Kotlin", "Flutter", "WebSocket"] },
];

export interface CaseStudy { image: string; category: string; title: string; services: string; result: string; href: string; }
export const caseStudies: CaseStudy[] = [
    { image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80", category: "Consumer IoT", title: "Abode Smart Home Security", services: "Platform Development, Mobile App, OTA Pipeline", result: "99.99% uptime & 50% infrastructure cost reduction.", href: "/work/abode-smart-home" },
    { image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80", category: "Industrial IoT", title: "TerraSmart Solar Platform", services: "IoT Cloud Platform, Device Management", result: "30% faster field deployment across 500+ sites.", href: "/work/terrasmart-solar" },
    { image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80", category: "AI + IoT", title: "TerraTrak AI Optimization", services: "Edge AI, Intelligent Automation", result: "+12% energy generation through AI-driven tracking.", href: "/work/terratrak-ai" },
];

export interface FAQ { question: string; answer: string; }
export const faqs: FAQ[] = [
    { question: "How do you reduce onboarding drop-offs?", answer: "We design guided onboarding flows with BLE discovery, visual feedback, and progressive steps. We instrument every stage to identify drop-off points and continuously optimize the flow." },
    { question: "How do you ensure OTA safety at scale?", answer: "We implement signed firmware, staged rollout (1% → 10% → full fleet), canary monitoring with automatic rollback triggers, and version management with forced minimum versions for security patches." },
    { question: "How do you support multi-user households and roles?", answer: "We implement role-based sharing with owner, admin, and member tiers. Each role has configurable permissions for device control, automation management, and guest access." },
    { question: "Can you integrate with Alexa, Google Home, and Matter?", answer: "Yes. We build certified integrations with major voice assistants and implement Matter protocol support for multi-ecosystem interoperability. Certification timelines depend on device type and platform requirements." },
    { question: "What does ongoing support and maintenance look like?", answer: "We deliver customer care tooling (remote diagnostics, log capture, device health dashboards) and monitor platform health with SLOs, alerts, and runbooks. Ongoing support can be structured as a managed service." },
];

export const ctaData = {
    headline: "Ready to Build Connected Experiences?",
    subheadline: "Tell us about your product vision. We'll engineer a connected platform your customers will love.",
    email: "solutions@zigron.com",
};
