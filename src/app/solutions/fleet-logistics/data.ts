// Fleet & Logistics Solution Page - Content Data
// Sourced from Knowledge Doc: SOLUTIONS.md Section 3

export const pageMetadata = {
    title: "Fleet & Logistics Solutions | Zigron",
    description: "Fleet telematics solution for visibility, compliance, utilization optimization, and operational efficiency across vehicles and mobile assets.",
    keywords: ["fleet management", "telematics", "logistics", "route optimization", "fleet tracking", "fuel analytics"],
};

export const heroData = {
    badge: "Fleet & Logistics",
    headline: "Fleet Intelligence",
    headlineHighlight: "That Delivers",
    subheadline: "Custom telematics for visibility, compliance, utilization optimization, and operational efficiency—integrated with your dispatch and TMS.",
    primaryCta: { label: "Discuss your fleet", href: "/contact" },
    secondaryCta: { label: "View case studies", href: "/work" },
    trustBadges: [
        { icon: "shield", label: "20% Fuel Savings", color: "green" },
        { icon: "checkCircle", label: "Real-time Visibility", color: "blue" },
        { icon: "zap", label: "TMS Integrated", color: "purple" },
    ],
};

export type IconName = "truck" | "shield" | "checkCircle" | "zap" | "search" | "database" | "workflow" | "target" | "layers" | "cpu" | "cloud" | "barChart" | "mapPin" | "navigation" | "activity" | "eye";

export interface Module { iconName: IconName; title: string; description: string; features: string[]; }
export const modules: Module[] = [
    { iconName: "cpu", title: "Telematics Ingestion", description: "GPS, engine signals, driver events, fault codes—unified in one pipeline.", features: ["GPS/GNSS tracking", "Engine signal capture", "Driver event logging", "Fault code processing"] },
    { iconName: "barChart", title: "Fleet Operations Dashboard", description: "Utilization, idling, routes, dwell time, geofencing, and exceptions.", features: ["Real-time fleet map", "Utilization analytics", "Idle time tracking", "Geofence alerting"] },
    { iconName: "activity", title: "Maintenance Analytics", description: "Service intervals, failure patterns, and predictive maintenance hooks.", features: ["Service schedule tracking", "Failure pattern detection", "Parts consumption analytics", "Predictive hooks"] },
    { iconName: "shield", title: "Compliance Data Exports", description: "Data pipelines and reporting feeds for regulatory compliance.", features: ["HOS compliance feeds", "DVIR digital records", "Regulatory report generation", "Audit trail exports"] },
    { iconName: "navigation", title: "Route Optimization", description: "Route insights, ETA quality, and utilization balancing.", features: ["Route efficiency scoring", "ETA accuracy tracking", "Load balancing suggestions", "Fuel optimization insights"] },
    { iconName: "workflow", title: "Integration Layer", description: "TMS/ERP, dispatch, ticketing, and customer portal integrations.", features: ["TMS/ERP connectors", "Dispatch system sync", "Customer portal APIs", "Event-driven webhooks"] },
];

export interface UseCase { title: string; problem: string; solution: string; outcome: string; metrics: { value: string; label: string }[]; }
export const useCases: UseCase[] = [
    { title: "Regional Delivery Fleet", problem: "Poor visibility into driver behavior and fuel costs across 500+ vehicle fleet.", solution: "Custom telematics platform with real-time tracking, idling alerts, driver scoring, and fuel analytics dashboard.", outcome: "Fuel costs reduced by 22% within 6 months.", metrics: [{ value: "22%", label: "Fuel Reduction" }, { value: "500+", label: "Vehicles Tracked" }] },
    { title: "Cold Chain Logistics", problem: "Temperature excursions during transit causing product loss and compliance violations.", solution: "IoT temperature monitoring integrated with GPS tracking, automated alerts, and compliance-ready audit logs.", outcome: "Temperature excursions reduced by 95%.", metrics: [{ value: "95%", label: "Excursion Reduction" }, { value: "$2M+", label: "Loss Prevention" }] },
    { title: "Heavy Equipment Operations", problem: "Low equipment utilization and unpredictable maintenance costs across construction sites.", solution: "Telematics-driven utilization dashboards with maintenance scheduling and fault code analytics.", outcome: "Equipment utilization increased from 45% to 72%.", metrics: [{ value: "72%", label: "Utilization Rate" }, { value: "35%", label: "Maintenance Savings" }] },
];

export interface DeliveryPhase { iconName: IconName; title: string; description: string; }
export const deliveryPhases: DeliveryPhase[] = [
    { iconName: "search", title: "Connect", description: "Integrate telematics devices, APIs, and data sources" },
    { iconName: "database", title: "Normalize", description: "Unify data models across vehicle types and signal formats" },
    { iconName: "barChart", title: "Operate", description: "Deploy dashboards, alerts, and reporting workflows" },
    { iconName: "navigation", title: "Optimize", description: "Route insights, utilization balancing, and TMS integration" },
];

export interface ArchitectureLayer { iconName: IconName; title: string; subtitle: string; }
export const architectureLayers: ArchitectureLayer[] = [
    { iconName: "cpu", title: "Devices", subtitle: "GPS & Telematics" },
    { iconName: "cloud", title: "Ingestion", subtitle: "Data Pipeline" },
    { iconName: "database", title: "Data Store", subtitle: "Fleet History" },
    { iconName: "barChart", title: "Analytics", subtitle: "Dashboards" },
    { iconName: "workflow", title: "Integrations", subtitle: "TMS/ERP" },
];

export interface SecurityControl { iconName: IconName; title: string; description: string; }
export const securityControls: SecurityControl[] = [
    { iconName: "shield", title: "Privacy Controls", description: "Role-based access—driver vs manager views with data separation." },
    { iconName: "eye", title: "Audit Logging", description: "Full audit trails for configuration changes and data access." },
    { iconName: "checkCircle", title: "Retention Policies", description: "Configurable data retention and export rules per jurisdiction." },
    { iconName: "workflow", title: "Secrets Management", description: "Secure credential storage and least-privilege access controls." },
];

export interface InputRequired { iconName: IconName; title: string; description: string; }
export const inputsRequired: InputRequired[] = [
    { iconName: "truck", title: "Vehicle & Device Types", description: "Fleet composition, device types, and available signals." },
    { iconName: "database", title: "Data Access Method", description: "Vendor APIs, device protocols, or direct telematics feeds." },
    { iconName: "mapPin", title: "Operating Regions", description: "Geographies, business rules, and compliance requirements." },
    { iconName: "workflow", title: "Integration Targets", description: "TMS, dispatch systems, and customer portals to connect." },
];

export interface KPI { metric: string; description: string; }
export const kpis: KPI[] = [
    { metric: "On-Time Delivery %", description: "SLA adherence improvement" },
    { metric: "Fuel Efficiency", description: "Per-mile or per-route fuel reduction" },
    { metric: "Idle Reduction", description: "Non-productive engine hours decreased" },
    { metric: "Maintenance Cost", description: "Total maintenance spend reduction" },
    { metric: "ETA Accuracy", description: "Delivery time prediction precision" },
    { metric: "Exception Resolution", description: "Time to resolve fleet exceptions" },
];

export interface TechCategory { category: string; technologies: string[]; }
export const techStack: TechCategory[] = [
    { category: "Telematics & IoT", technologies: ["GPS/GNSS", "Cellular IoT", "CAN Bus", "OBD-II", "BLE Sensors"] },
    { category: "Data & Analytics", technologies: ["Kafka", "TimescaleDB", "PostgreSQL", "Apache Spark", "Grafana"] },
    { category: "Mobile & Integration", technologies: ["React Native", "REST APIs", "Webhooks", "SAP TM", "Oracle TMS"] },
];

export interface CaseStudy { title: string; services: string; result: string; href: string; }
export const caseStudies: CaseStudy[] = [
    { title: "Regional Delivery Fleet", services: "Telematics Platform, Fuel Analytics", result: "22% fuel cost reduction across 500+ vehicles.", href: "/work" },
    { title: "Cold Chain Monitoring", services: "IoT Sensors, Compliance Reporting", result: "95% reduction in temperature excursions.", href: "/work" },
    { title: "Heavy Equipment Fleet", services: "Utilization Dashboards, Maintenance Analytics", result: "Equipment utilization increased to 72%.", href: "/work" },
];

export interface FAQ { question: string; answer: string; }
export const faqs: FAQ[] = [
    { question: "What signals do we get from different vehicle types?", answer: "It depends on the telematics hardware and vehicle type. Modern trucks provide GPS, engine RPM, fuel consumption, fault codes, and driver events. We assess available signals during discovery and design the data model accordingly." },
    { question: "Can you integrate with our TMS/dispatch system?", answer: "Yes. We build integrations with major TMS platforms (SAP TM, Oracle TMS) and custom dispatch systems. Data flows bidirectionally—fleet events to TMS and dispatch assignments to vehicles." },
    { question: "How do you manage driver privacy and access?", answer: "We implement role-based access controls that separate driver views from manager views. Retention policies are configurable per jurisdiction, and all data access is audit-logged." },
    { question: "Can you handle cold chain compliance requirements?", answer: "Absolutely. We integrate temperature and humidity sensors with GPS tracking, automated excursion alerts, and compliance-ready audit logs with configurable retention." },
    { question: "How long does deployment take for a mid-size fleet?", answer: "For a 200-500 vehicle fleet with standard telematics, expect 6-10 weeks from discovery to operational dashboards. Integration with TMS/dispatch adds 2-4 weeks depending on complexity." },
];

export const ctaData = {
    headline: "Ready to Optimize Your Fleet?",
    subheadline: "Tell us about your fleet operations. We'll build custom telematics that deliver real visibility and savings.",
    email: "solutions@zigron.com",
};
