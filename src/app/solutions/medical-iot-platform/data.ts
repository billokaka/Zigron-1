// Medical IoT & Remote Monitoring Solution Page - Content Data
// Sourced from Knowledge Doc: SOLUTIONS.md Section 5

export const pageMetadata = {
    title: "Medical IoT & Remote Monitoring Solutions | Zigron",
    description: "Secure medical IoT platform for device data pipelines, patient workflows, and audit-ready operations—designed for interoperability and cybersecurity readiness.",
    keywords: ["medical IoT", "remote monitoring", "health data", "clinical workflows", "device data", "HIPAA", "HL7", "FHIR"],
};

export const heroData = {
    badge: "Medical IoT Platform",
    headline: "Secure Medical",
    headlineHighlight: "Device Intelligence",
    subheadline: "Custom medical IoT platform for secure data pipelines, clinical workflows, and audit-ready operations—designed for interoperability and cybersecurity readiness.",
    primaryCta: { label: "Discuss your platform", href: "/contact" },
    secondaryCta: { label: "View case studies", href: "/work" },
    trustBadges: [
        { icon: "shield", label: "HIPAA Ready", color: "green" },
        { icon: "checkCircle", label: "ISO 27001", color: "blue" },
        { icon: "zap", label: "HL7/FHIR Ready", color: "purple" },
    ],
};

export type IconName = "heart" | "shield" | "checkCircle" | "zap" | "search" | "database" | "workflow" | "target" | "layers" | "cpu" | "cloud" | "lock" | "alertTriangle" | "activity" | "eye" | "fileText";

export interface Module { iconName: IconName; title: string; description: string; features: string[]; }
export const modules: Module[] = [
    { iconName: "database", title: "Device Data Ingestion", description: "Secure ingestion and validation of health device telemetry.", features: ["Multi-device protocol support", "Data validation & normalization", "Sampling rate management", "Format standardization"] },
    { iconName: "lock", title: "Identity & Access Control", description: "Patient/device identity model with role-based access.", features: ["Patient-device pairing", "Role-based access (RBAC)", "Multi-tenant isolation", "Session management"] },
    { iconName: "alertTriangle", title: "Clinical Workflow Events", description: "Alerts, thresholds, escalation, and acknowledgements.", features: ["Threshold-based alerting", "Escalation chains", "Acknowledgement tracking", "Priority classification"] },
    { iconName: "fileText", title: "Audit Trails & Data Store", description: "Immutable logs for critical actions and events.", features: ["Tamper-proof audit logs", "Event timeline", "Data retention policies", "Compliance reporting"] },
    { iconName: "workflow", title: "Interoperability Layer", description: "APIs and mapping to standards-based resources.", features: ["HL7/FHIR mapping", "EHR integration APIs", "Standard data formats", "Provider system connectors"] },
    { iconName: "activity", title: "Analytics & Risk Scoring", description: "Trend analysis, risk scoring, and predictive hooks.", features: ["Patient trend analysis", "Risk score computation", "Alert pattern detection", "Population health insights"] },
];

export interface UseCase { title: string; problem: string; solution: string; outcome: string; metrics: { value: string; label: string }[]; }
export const useCases: UseCase[] = [
    { title: "Remote Patient Monitoring", problem: "High alert fatigue and missed critical events in remote cardiac monitoring.", solution: "Custom alert engine with multi-tier thresholds, clinician-specific routing, and acknowledgement tracking with escalation.", outcome: "Critical event response time reduced by 68%.", metrics: [{ value: "68%", label: "Faster Response" }, { value: "85%", label: "Alert Precision" }] },
    { title: "Wearable Wellness Platform", problem: "Fragmented data from multiple wearable device types with no unified patient view.", solution: "Unified ingestion pipeline normalizing data across device types with patient-centric dashboards and trend analytics.", outcome: "Unified view across 12 device types.", metrics: [{ value: "12", label: "Device Types Unified" }, { value: "99.9%", label: "Data Completeness" }] },
    { title: "Clinical Trial Data Platform", problem: "Manual data collection processes causing delays and data quality issues in clinical trials.", solution: "Automated device-to-cloud data pipeline with validation rules, audit trails, and eCRF integration.", outcome: "Data collection time reduced by 75%.", metrics: [{ value: "75%", label: "Faster Data Collection" }, { value: "Zero", label: "Data Integrity Issues" }] },
];

export interface DeliveryPhase { iconName: IconName; title: string; description: string; }
export const deliveryPhases: DeliveryPhase[] = [
    { iconName: "search", title: "Discovery", description: "Device types, data classification, workflow requirements, and compliance scope" },
    { iconName: "database", title: "Data Foundation", description: "Secure ingestion, validation, identity model, and audit trails" },
    { iconName: "workflow", title: "Workflows", description: "Alert engine, escalation rules, and interoperability layer" },
    { iconName: "shield", title: "Security", description: "Access controls, encryption, compliance validation" },
    { iconName: "eye", title: "Operate", description: "Monitoring, incident workflows, and continuous improvement" },
];

export interface ArchitectureLayer { iconName: IconName; title: string; subtitle: string; }
export const architectureLayers: ArchitectureLayer[] = [
    { iconName: "cpu", title: "Devices", subtitle: "Medical Hardware" },
    { iconName: "lock", title: "Security", subtitle: "Encryption & Auth" },
    { iconName: "database", title: "Data Store", subtitle: "Audit & Retention" },
    { iconName: "workflow", title: "Interop", subtitle: "HL7/FHIR" },
    { iconName: "activity", title: "Analytics", subtitle: "Risk & Trends" },
];

export interface SecurityControl { iconName: IconName; title: string; description: string; }
export const securityControls: SecurityControl[] = [
    { iconName: "lock", title: "Access Controls", description: "Administrative, physical, and technical safeguards model." },
    { iconName: "shield", title: "Audit Controls", description: "Comprehensive logging of all data access and modifications." },
    { iconName: "checkCircle", title: "Integrity Controls", description: "Data validation and tamper-proof storage for all critical events." },
    { iconName: "cloud", title: "Transmission Security", description: "End-to-end encryption for all data in transit and at rest." },
];

export interface InputRequired { iconName: IconName; title: string; description: string; }
export const inputsRequired: InputRequired[] = [
    { iconName: "cpu", title: "Device Types & Data Format", description: "Device specifications, sampling rates, and data schemas." },
    { iconName: "fileText", title: "Data Classification & Retention", description: "Data sensitivity levels and retention policy requirements." },
    { iconName: "workflow", title: "Workflow Requirements", description: "Who gets alerted, how, when, and escalation procedures." },
    { iconName: "database", title: "Integration Targets", description: "EHR systems, provider platforms, and portal requirements." },
];

export interface KPI { metric: string; description: string; }
export const kpis: KPI[] = [
    { metric: "Data Completeness", description: "Percentage of expected data points received" },
    { metric: "Data Freshness SLA", description: "Latency from device to platform availability" },
    { metric: "Alert Delivery Time", description: "Time from event detection to clinician notification" },
    { metric: "Alert Acknowledgement", description: "Time to clinician acknowledgement of critical alerts" },
    { metric: "False Alarm Rate", description: "Percentage of non-actionable alerts (target: < 5%)" },
    { metric: "Platform Uptime", description: "SLO target for critical alert path availability" },
];

export interface TechCategory { category: string; technologies: string[]; }
export const techStack: TechCategory[] = [
    { category: "Healthcare Standards", technologies: ["HL7", "FHIR", "DICOM", "IHE Profiles", "SNOMED CT"] },
    { category: "Security & Compliance", technologies: ["End-to-End Encryption", "RBAC", "Audit Logging", "OAuth 2.0", "mTLS"] },
    { category: "Cloud & Data", technologies: ["Azure Health Data Services", "AWS HealthLake", "PostgreSQL", "TimescaleDB", "Kafka"] },
];

export interface CaseStudy { image: string; category: string; title: string; services: string; result: string; href: string; }
export const caseStudies: CaseStudy[] = [
    { image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80", category: "Consumer IoT", title: "Abode Smart Home Secure Platform", services: "Secure Data Pipelines, Device Monitoring", result: "99.99% uptime & 50% infrastructure cost reduction.", href: "/work/abode-smart-home" },
    { image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80", category: "Industrial IoT", title: "TerraSmart Solar Telemetry Platform", services: "IoT Data Ingestion, Real-Time Monitoring", result: "30% faster field deployment across 500+ sites.", href: "/work/terrasmart-solar" },
    { image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80", category: "AI + IoT", title: "TerraTrak AI Analytics Platform", services: "ML Analytics, Performance Optimization", result: "+12% energy generation through AI-driven insights.", href: "/work/terratrak-ai" },
];

export interface FAQ { question: string; answer: string; }
export const faqs: FAQ[] = [
    { question: "How do you protect sensitive health data end-to-end?", answer: "We implement administrative, physical, and technical safeguards including end-to-end encryption, role-based access controls, audit logging, and data classification. All access is logged and retention policies are configurable per regulation." },
    { question: "How do you design alerting to avoid alarm fatigue?", answer: "We implement multi-tier threshold alerting with clinician-specific routing, acknowledgement tracking, and escalation chains. Alert precision is tracked as a KPI and thresholds are tuned to maintain clinically actionable rates." },
    { question: "What interoperability options exist for EHR integration?", answer: "We build HL7/FHIR-compliant APIs and can map device data to standard clinical resources. Integration scope and certification requirements are assessed during discovery based on your specific EHR targets." },
    { question: "Can you support FDA cybersecurity documentation?", answer: "Yes. If your device is regulated, we support cybersecurity documentation readiness including SBOM processes, risk assessments, and security control documentation aligned with FDA premarket guidance." },
    { question: "How do you handle multi-tenant isolation?", answer: "We implement strict tenant isolation at the data, API, and infrastructure layers. Each organization's data is logically or physically separated with independent access controls and audit trails." },
];

export const ctaData = {
    headline: "Ready to Build Secure Medical IoT?",
    subheadline: "Tell us about your medical device platform vision. We'll engineer secure, compliant, interoperable solutions.",
    email: "solutions@zigron.com",
};
