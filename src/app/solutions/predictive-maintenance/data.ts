// Predictive Maintenance Solution Page - Content Data
// Sourced from Knowledge Doc: SOLUTIONS.md Section 2

export const pageMetadata = {
    title: "Predictive Maintenance Solutions | Zigron",
    description:
        "Predict failures, prioritize maintenance, and reduce unplanned downtime using telemetry, maintenance history, and operational context—integrated into real workflows.",
    keywords: ["predictive maintenance", "condition monitoring", "anomaly detection", "CMMS integration", "asset reliability", "failure prediction"],
};

export const heroData = {
    badge: "Predictive Maintenance",
    headline: "Predict Failures",
    headlineHighlight: "Before They Happen",
    subheadline:
        "Telemetry-driven failure prediction and maintenance prioritization—designed to integrate into real workflows and deliver measurable ROI.",
    primaryCta: { label: "Discuss your assets", href: "/contact" },
    secondaryCta: { label: "View case studies", href: "/work" },
    trustBadges: [
        { icon: "shield", label: "40% Downtime Reduction", color: "green" },
        { icon: "checkCircle", label: "3x Typical ROI", color: "blue" },
        { icon: "zap", label: "CMMS Integrated", color: "purple" },
    ],
};

export type IconName = "settings" | "shield" | "checkCircle" | "zap" | "search" | "database" | "workflow" | "target" | "layers" | "cpu" | "cloud" | "barChart" | "alertTriangle" | "tool" | "activity" | "eye";

export interface Module { iconName: IconName; title: string; description: string; features: string[]; }
export const modules: Module[] = [
    { iconName: "database", title: "Data Foundation", description: "Unified telemetry, maintenance logs, and asset hierarchy.", features: ["Sensor data ingestion", "Maintenance log integration", "Asset hierarchy mapping", "Data quality gates"] },
    { iconName: "activity", title: "Condition Monitoring", description: "Real-time KPIs and anomaly detection hooks across asset classes.", features: ["Vibration & thermal monitoring", "Performance degradation tracking", "Threshold-based alerting", "Trend analysis dashboards"] },
    { iconName: "target", title: "Failure Risk Scoring", description: "Asset-class specific prediction models with explainability.", features: ["ML-driven risk scoring", "Remaining useful life estimation", "Root-cause hints", "Confidence intervals"] },
    { iconName: "tool", title: "Work Order Automation", description: "CMMS integration with prioritization rules and approval gates.", features: ["Automated work order creation", "Priority-based scheduling", "Parts & resource planning", "CMMS/ERP integration"] },
    { iconName: "eye", title: "Analyst Workbench", description: "Explainability, root-cause analysis, and event replay for engineers.", features: ["Model explainability views", "Event timeline replay", "Failure pattern library", "What-if scenario analysis"] },
    { iconName: "workflow", title: "Monitoring & Governance", description: "Model drift detection, performance tracking, and incident workflows.", features: ["Model drift monitoring", "Alert precision tracking", "Incident response workflows", "Cost impact reporting"] },
];

export interface UseCase { title: string; problem: string; solution: string; outcome: string; metrics: { value: string; label: string }[]; }
export const useCases: UseCase[] = [
    { title: "Manufacturing Plant Motors", problem: "Unplanned motor failures causing production line stops and overtime maintenance costs.", solution: "Vibration and current signature analysis with ML-based failure prediction, integrated with SAP PM for automated work orders.", outcome: "Shifted 80% of maintenance from reactive to planned.", metrics: [{ value: "45%", label: "Downtime Reduction" }, { value: "3.2x", label: "ROI in Year 1" }] },
    { title: "Solar Tracker Systems", problem: "Tracker motor failures reducing energy yield and requiring expensive field dispatches.", solution: "Telemetry-driven anomaly detection across tracker fleet with prioritized maintenance scheduling.", outcome: "Early detection of 90% of tracker failures before energy loss.", metrics: [{ value: "90%", label: "Early Detection" }, { value: "25%", label: "Maintenance Cost Savings" }] },
    { title: "Heavy Equipment Fleet", problem: "Unpredictable hydraulic and drivetrain failures causing project delays and safety risks.", solution: "Engine and hydraulic telemetry monitoring with failure risk scoring and parts pre-staging recommendations.", outcome: "Fleet availability increased from 78% to 94%.", metrics: [{ value: "94%", label: "Fleet Availability" }, { value: "60%", label: "Fewer Emergency Repairs" }] },
];

export interface DeliveryPhase { iconName: IconName; title: string; description: string; }
export const deliveryPhases: DeliveryPhase[] = [
    { iconName: "search", title: "Discovery", description: "Asset inventory, data audit, failure taxonomy, and pilot scope definition" },
    { iconName: "database", title: "Data Foundation", description: "Telemetry ingestion, maintenance log integration, and baseline models" },
    { iconName: "target", title: "Pilot", description: "One asset class, validated predictions, CMMS integration, and ROI measurement" },
    { iconName: "layers", title: "Scale", description: "Expand across asset classes and sites with governance and monitoring" },
    { iconName: "workflow", title: "Operate", description: "Continuous model tuning, drift monitoring, and cost optimization" },
];

export interface ArchitectureLayer { iconName: IconName; title: string; subtitle: string; }
export const architectureLayers: ArchitectureLayer[] = [
    { iconName: "cpu", title: "Sensors", subtitle: "Telemetry & Signals" },
    { iconName: "cloud", title: "Ingestion", subtitle: "Data Pipeline" },
    { iconName: "database", title: "Data Store", subtitle: "History & Context" },
    { iconName: "target", title: "ML Models", subtitle: "Prediction Engine" },
    { iconName: "tool", title: "CMMS/ERP", subtitle: "Work Orders" },
];

export interface SecurityControl { iconName: IconName; title: string; description: string; }
export const securityControls: SecurityControl[] = [
    { iconName: "shield", title: "Human Approval Gates", description: "High-impact actions require human confirmation before execution." },
    { iconName: "eye", title: "Audit Trails", description: "Full traceability for model recommendations and operator overrides." },
    { iconName: "checkCircle", title: "Data Quality Gates", description: "Input validation to prevent false alarms from bad data." },
    { iconName: "workflow", title: "Model Governance", description: "Drift detection and performance monitoring with alerting." },
];

export interface InputRequired { iconName: IconName; title: string; description: string; }
export const inputsRequired: InputRequired[] = [
    { iconName: "database", title: "Asset Registry & Hierarchy", description: "Line → cell → asset structure with equipment metadata." },
    { iconName: "activity", title: "Telemetry Schema", description: "Sensor types, sampling rates, and signal definitions." },
    { iconName: "tool", title: "Maintenance History", description: "Failures, parts replaced, work orders, and failure modes." },
    { iconName: "barChart", title: "Business Cost Model", description: "False positive vs false negative cost to calibrate alert thresholds." },
];

export interface KPI { metric: string; description: string; }
export const kpis: KPI[] = [
    { metric: "Downtime Reduction", description: "Decrease in unplanned downtime hours" },
    { metric: "MTBF Increase", description: "Mean time between failures improvement" },
    { metric: "MTTR Reduction", description: "Mean time to repair decrease" },
    { metric: "Planned vs Unplanned Ratio", description: "Shift from reactive to planned maintenance" },
    { metric: "Alert Precision", description: "Percentage of actionable alerts (low noise)" },
    { metric: "Maintenance Cost Reduction", description: "Total maintenance spend decrease" },
];

export interface TechCategory { category: string; technologies: string[]; }
export const techStack: TechCategory[] = [
    { category: "ML & Analytics", technologies: ["TensorFlow", "PyTorch", "scikit-learn", "Apache Spark", "MLflow"] },
    { category: "Data & Streaming", technologies: ["MQTT", "Kafka", "TimescaleDB", "InfluxDB", "Apache Airflow"] },
    { category: "Edge & Integration", technologies: ["Edge AI Runtime", "SAP PM", "Maximo", "ServiceNow", "REST APIs"] },
];

export interface CaseStudy { title: string; services: string; result: string; href: string; }
export const caseStudies: CaseStudy[] = [
    { title: "TerraTrak AI Solar Tracking", services: "Anomaly Detection, Telemetry Analytics", result: "90% early detection of tracker failures.", href: "/work" },
    { title: "Manufacturing Plant Reliability", services: "Vibration Analysis, CMMS Integration", result: "45% downtime reduction in first year.", href: "/work" },
    { title: "Heavy Equipment Fleet Health", services: "Hydraulic Monitoring, Risk Scoring", result: "Fleet availability increased to 94%.", href: "/work" },
];

export interface FAQ { question: string; answer: string; }
export const faqs: FAQ[] = [
    { question: "What minimum data do we need to start?", answer: "At minimum, you need a telemetry feed (sensor data at reasonable sampling rates) and some maintenance history. We can start with one asset class and limited history—the models improve as more data accumulates." },
    { question: "How do you avoid alert fatigue?", answer: "We calibrate alert thresholds using your business cost model (false positive vs false negative cost). We track alert precision as a KPI and tune continuously to maintain a high actionability rate." },
    { question: "How do you measure ROI credibly?", answer: "We establish baseline metrics (current downtime, maintenance spend, reactive vs planned ratio) before pilot, then measure improvement against those baselines. ROI calculations include both direct savings and avoided costs." },
    { question: "Can you integrate with our existing CMMS/ERP?", answer: "Yes. We build standard integrations with SAP PM, Maximo, ServiceNow, and custom CMMS systems. Work orders are created with full context (risk score, recommended action, parts) for technician use." },
    { question: "How long does a pilot take?", answer: "Typical pilot is 8-14 weeks from discovery to validated results on one asset class. This includes data integration, model training, CMMS workflow setup, and measured ROI." },
];

export const ctaData = {
    headline: "Ready to Predict, Not React?",
    subheadline: "Tell us about your assets. We'll design a predictive maintenance system that delivers measurable ROI.",
    email: "solutions@zigron.com",
};
