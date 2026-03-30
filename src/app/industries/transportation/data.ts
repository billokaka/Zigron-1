// Transportation & Fleet Industry Page - Content Data
// Sourced from Knowledge Doc: Industries.md Section 5

export const pageMetadata = {
    title: "Transportation & Fleet Solutions | Zigron",
    description: "Fleet telematics, route optimization, and predictive maintenance for transportation companies—custom-built for visibility, compliance, and efficiency.",
    keywords: ["fleet management", "transportation IoT", "telematics", "route optimization", "fleet maintenance", "logistics technology"],
};

export const heroData = {
    badge: "Transportation & Fleet",
    headline: "Fleet Intelligence",
    headlineHighlight: "& Logistics Platforms",
    subheadline: "Custom fleet telematics platforms for visibility, compliance, and efficiency—built for operations teams who need real-time data they can act on.",
    primaryCta: { label: "Talk to an expert", href: "/contact" },
    secondaryCta: { label: "View case studies", href: "/work" },
};

export type IconName = "truck" | "shield" | "cpu" | "barChart" | "lock" | "clock" | "clipboard" | "alertTriangle" | "database" | "wifi" | "cloud" | "users" | "target" | "zap" | "mapPin" | "navigation";

export interface Challenge { iconName: IconName; title: string; description: string; }
export const challenges: Challenge[] = [
    { iconName: "wifi", title: "Roaming Connectivity", description: "Maintaining reliable data transmission across varying cellular coverage zones and rural areas." },
    { iconName: "database", title: "Multi-Vendor Device Fragmentation", description: "Different telematics vendors per fleet segment with incompatible data formats." },
    { iconName: "shield", title: "Driver Privacy & Compliance", description: "Balancing fleet visibility with driver privacy requirements and regulatory compliance." },
    { iconName: "clock", title: "Reactive Maintenance Costs", description: "Roadside breakdowns causing missed deliveries, towing costs, and customer dissatisfaction." },
    { iconName: "alertTriangle", title: "Operational Blind Spots", description: "Dispatch teams making decisions without real-time visibility into exceptions and delays." },
];

export interface Solution { iconName: IconName; title: string; description: string; href: string; }
export const solutions: Solution[] = [
    { iconName: "database", title: "Fleet Data Unification", description: "Normalized ingestion from multiple telematics vendors into a single operational view.", href: "/services/ai/data-engineering" },
    { iconName: "barChart", title: "Dashboards & Exception Workflows", description: "Real-time fleet dashboards with exception alerts and dispatch integration.", href: "/services/ai/analytics" },
    { iconName: "target", title: "Predictive Maintenance", description: "Vehicle health scoring and failure prediction to prevent roadside breakdowns.", href: "/solutions/predictive-maintenance" },
    { iconName: "navigation", title: "Route & Dispatch Integration", description: "Integration with TMS/dispatch systems for optimized routing and load management.", href: "/services/iot/platform-cloud" },
    { iconName: "mapPin", title: "Utilization Analytics", description: "Asset utilization, idle time, and fuel efficiency tracking across the fleet.", href: "/services/ai/analytics" },
];

export interface RecommendedSolution { title: string; description: string; bestFor: string; outcome: string; href: string; }
export const recommendedSolutions: RecommendedSolution[] = [
    { title: "Predictive Maintenance", description: "Telemetry-driven failure prediction and maintenance prioritization for fleet vehicles.", bestFor: "Fleet operators (50+ vehicles)", outcome: "40% downtime reduction, 3x ROI", href: "/solutions/predictive-maintenance" },
    { title: "Predictive Maintenance", description: "Vehicle health monitoring and failure prediction for reduced downtime.", bestFor: "Fleets with mixed vehicle types", outcome: "30%+ maintenance cost reduction", href: "/solutions/predictive-maintenance" },
];

export interface ServiceCategory { iconName: IconName; title: string; services: string[]; }
export const serviceCategories: ServiceCategory[] = [
    { iconName: "cpu", title: "Telematics & Edge", services: ["Multi-Vendor Data Ingestion", "Edge Processing for Offline", "GPS/CAN Bus Integration", "Geofencing & Events"] },
    { iconName: "cloud", title: "Cloud & Platform", services: ["Scalable Fleet Platform", "TMS/Dispatch Integration", "Real-Time Event Streaming", "Multi-Tenant Architecture"] },
    { iconName: "barChart", title: "Analytics & AI", services: ["Vehicle Health Scoring", "Route Optimization Models", "Fuel & Idle Analytics", "Exception Pattern Detection"] },
];

export interface SecurityFeature { iconName: IconName; title: string; description: string; }
export const securityFeatures: SecurityFeature[] = [
    { iconName: "lock", title: "Access Controls", description: "Role-based access for drivers, dispatchers, managers, and administrators." },
    { iconName: "shield", title: "Driver Privacy", description: "Configurable privacy zones and role-scoped data visibility." },
    { iconName: "clipboard", title: "Audit & Retention", description: "Complete audit logs with configurable data retention and export." },
    { iconName: "database", title: "Secure Integrations", description: "Encrypted API connections with secrets management for all vendor integrations." },
];

export interface CaseStudy { image: string; category: string; title: string; challenge: string; result: string; href: string; }
export const caseStudies: CaseStudy[] = [
    { image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80", category: "Industrial IoT", title: "TerraSmart Solar Fleet Monitoring", challenge: "Monitoring distributed solar assets across hundreds of field sites.", result: "30% faster field deployment with real-time fleet visibility.", href: "/work/terrasmart-solar" },
    { image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80", category: "AI + IoT", title: "TerraTrak AI Asset Optimization", challenge: "Maximizing asset performance with predictive intelligence.", result: "+12% energy generation through AI-driven optimization.", href: "/work/terratrak-ai" },
];

export interface ImplementationPattern { number: number; title: string; description: string; features: string[]; featured: boolean; }
export const implementationPatterns: ImplementationPattern[] = [
    { number: 1, title: "Discovery", description: "Fleet audit, vendor inventory, KPI definitions, and pilot scope.", features: ["2-3 weeks", "Vendor mapping", "KPI alignment"], featured: false },
    { number: 2, title: "Pilot", description: "Single depot or fleet segment with ingestion, dashboards, and alerts.", features: ["6-10 weeks", "One depot validated", "Baseline metrics"], featured: true },
    { number: 3, title: "Rollout", description: "Fleet-wide deployment, TMS integration, and advanced analytics.", features: ["8-16+ weeks", "Full fleet coverage", "All integrations live"], featured: false },
];

export interface FAQ { question: string; answer: string; }
export const faqs: FAQ[] = [
    { question: "What vehicle signals are available across OEMs?", answer: "Signal availability varies significantly across vehicle makes and telematics vendors. During discovery, we inventory available signals and design ingestion pipelines that normalize data across vendors while flagging gaps. We can work with CAN bus, J1939, OBD-II, and proprietary vendor APIs." },
    { question: "How do you manage privacy and access for driver data?", answer: "We implement role-based access controls with configurable privacy zones. Driver-level data is scoped to authorized roles only. Location data can be suppressed in defined zones. All access is audit-logged for compliance." },
    { question: "Can you integrate with our dispatch/TMS?", answer: "Yes. We build API integrations with major TMS and dispatch platforms. During discovery, we assess your specific system's API capabilities and design the integration architecture accordingly." },
    { question: "How quickly can we see results with a pilot?", answer: "A typical pilot covers one depot or fleet segment over 6-10 weeks. This includes vendor integration, dashboard deployment, and initial analytics. We establish baseline metrics upfront so ROI is measurable from day one." },
];

export const ctaData = {
    headline: "Ready to Optimize Your Fleet?",
    subheadline: "Tell us about your fleet operations. We'll engineer platforms that deliver real-time visibility and measurable savings.",
    email: "fleet@zigron.com",
};
