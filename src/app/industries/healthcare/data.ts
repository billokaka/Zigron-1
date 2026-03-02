// Healthcare Industry Page - Content Data
// Sourced from Knowledge Doc: Industries.md Section 3

export const pageMetadata = {
    title: "Healthcare & Medical IoT Solutions | Zigron",
    description: "Secure medical IoT platforms, clinical workflow automation, and audit-ready operations for digital health teams and medical device OEMs.",
    keywords: ["healthcare IoT", "medical devices", "remote patient monitoring", "clinical workflows", "HIPAA", "HL7 FHIR", "digital health"],
};

export const heroData = {
    badge: "Healthcare & MedTech",
    headline: "Secure Medical",
    headlineHighlight: "IoT & Data Platforms",
    subheadline: "Custom platforms for medical device data pipelines, clinical workflows, and audit-ready operations—built for interoperability and cybersecurity readiness.",
    primaryCta: { label: "Talk to an expert", href: "/contact" },
    secondaryCta: { label: "View case studies", href: "/work" },
};

export type IconName = "heart" | "shield" | "cpu" | "barChart" | "lock" | "clock" | "clipboard" | "alertTriangle" | "database" | "cloud" | "users" | "target" | "zap" | "activity" | "fileText" | "eye";

export interface Challenge { iconName: IconName; title: string; description: string; }
export const challenges: Challenge[] = [
    { iconName: "shield", title: "Data Security & Access Control", description: "Protecting sensitive health data with administrative, physical, and technical safeguards." },
    { iconName: "alertTriangle", title: "Alert Fatigue & Missed Events", description: "Poorly designed alerting leading to alarm fatigue or missed critical patient events." },
    { iconName: "database", title: "Interoperability Complexity", description: "Varying EHR requirements and standards across providers and health systems." },
    { iconName: "clipboard", title: "Audit & Compliance Burden", description: "Complex documentation requirements for cybersecurity, access control, and data integrity." },
    { iconName: "clock", title: "Uptime & Reliability", description: "Critical alert pathways require high availability SLOs with minimal latency." },
];

export interface Solution { iconName: IconName; title: string; description: string; href: string; }
export const solutions: Solution[] = [
    { iconName: "database", title: "Secure Data Ingestion", description: "Validated, normalized health device data pipelines with integrity controls.", href: "/services/ai/data-engineering" },
    { iconName: "lock", title: "Identity & Access Control", description: "Patient-device identity models with RBAC and multi-tenant isolation.", href: "/services/iot/security-qa" },
    { iconName: "alertTriangle", title: "Clinical Alert Engine", description: "Multi-tier alerting with clinician routing, escalation, and acknowledgement tracking.", href: "/solutions/medical-iot-platform" },
    { iconName: "fileText", title: "Audit & Compliance", description: "Immutable audit logs, data retention policies, and compliance-ready reporting.", href: "/services/iot/platform-cloud" },
    { iconName: "activity", title: "Analytics & Risk Scoring", description: "Patient trend analysis, risk score computation, and predictive health insights.", href: "/services/ai/analytics" },
];

export interface RecommendedSolution { title: string; description: string; bestFor: string; outcome: string; href: string; }
export const recommendedSolutions: RecommendedSolution[] = [
    { title: "Medical IoT Platform", description: "Secure device data pipelines, clinical workflows, and audit-ready operations.", bestFor: "Digital health product teams & medical device OEMs", outcome: "68% faster clinical event response", href: "/solutions/medical-iot-platform" },
];

export interface ServiceCategory { iconName: IconName; title: string; services: string[]; }
export const serviceCategories: ServiceCategory[] = [
    { iconName: "shield", title: "Security & Compliance", services: ["Access Control Architecture", "Audit Logging & Monitoring", "Encryption (Transit & Rest)", "SBOM & Cybersecurity Documentation"] },
    { iconName: "cloud", title: "Platform & Integration", services: ["Azure Health Data Services", "HL7/FHIR API Development", "EHR Integration Services", "Device Data Pipelines"] },
    { iconName: "barChart", title: "AI & Analytics", services: ["Clinical NLP/Triage Automation", "Patient Risk Scoring", "Trend Analysis Dashboards", "Predictive Health Models"] },
];

export interface SecurityFeature { iconName: IconName; title: string; description: string; }
export const securityFeatures: SecurityFeature[] = [
    { iconName: "lock", title: "Access Control", description: "Administrative, physical, and technical safeguards with RBAC." },
    { iconName: "clipboard", title: "Audit Controls", description: "Comprehensive logging of all data access, modifications, and admin actions." },
    { iconName: "shield", title: "Integrity Controls", description: "Data validation and tamper-proof storage for critical health events." },
    { iconName: "cloud", title: "Transmission Security", description: "End-to-end encryption for data in transit and at rest." },
];

export interface CaseStudy { image: string; category: string; title: string; challenge: string; result: string; href: string; }
export const caseStudies: CaseStudy[] = [
    { image: "/images/case-studies/remote-monitoring.jpg", category: "Remote Monitoring", title: "Remote Cardiac Monitoring Platform", challenge: "High alert fatigue and missed critical cardiac events.", result: "68% faster response, 85% alert precision.", href: "/work" },
    { image: "/images/case-studies/wearable-platform.jpg", category: "Device Platform", title: "Multi-Device Wellness Platform", challenge: "Fragmented data from 12 wearable device types.", result: "Unified patient view with 99.9% data completeness.", href: "/work" },
];

export interface ImplementationPattern { number: number; title: string; description: string; features: string[]; featured: boolean; }
export const implementationPatterns: ImplementationPattern[] = [
    { number: 1, title: "Discovery", description: "Device types, data classification, workflow requirements, and compliance scope.", features: ["2-4 weeks", "Compliance assessment", "Architecture design"], featured: false },
    { number: 2, title: "Foundation", description: "Secure ingestion, validation, identity model, and audit trail implementation.", features: ["6-10 weeks", "Data pipeline live", "Security validated"], featured: true },
    { number: 3, title: "Workflows", description: "Alert engine, escalation rules, interoperability layer, and monitoring.", features: ["4-8 weeks", "Clinical workflows live", "Integration tested"], featured: false },
];

export interface FAQ { question: string; answer: string; }
export const faqs: FAQ[] = [
    { question: "How do you ensure only authorized users access sensitive data?", answer: "We implement comprehensive access control with RBAC, multi-tenant isolation, and session management. All access is audit-logged with tamper-proof storage. Access policies are reviewed and validated during security assessments." },
    { question: "How do you design alerting to avoid alarm fatigue?", answer: "We implement multi-tier threshold alerting with clinician-specific routing, acknowledgement tracking, and escalation chains. Alert precision is tracked as a KPI and thresholds are tuned to maintain clinically actionable rates." },
    { question: "What's the path to EHR integration?", answer: "We build HL7/FHIR-compliant APIs and can map device data to standard clinical resources. Integration scope and certification requirements are assessed during discovery based on your specific EHR targets and use cases." },
    { question: "Can you support FDA cybersecurity documentation?", answer: "Yes. For regulated devices, we support cybersecurity documentation readiness including SBOM processes, risk assessments, and security control documentation aligned with FDA premarket guidance." },
];

export const ctaData = {
    headline: "Ready to Build Secure Healthcare Solutions?",
    subheadline: "Tell us about your medical device platform. We'll engineer secure, compliant, interoperable solutions.",
    email: "healthcare@zigron.com",
};
