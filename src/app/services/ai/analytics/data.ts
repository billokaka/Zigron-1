// Analytics & Visualization Service Page - Content Data
// Sourced from Knowledge Doc: Section 9 (predictive-analytics) + Section 1 (strategy-consulting)

export const pageMetadata = {
    title: "AI Analytics & Visualization Services | Zigron",
    description:
        "Forecasting, predictive decision support, and actionable dashboards—built around business outcomes, not just charts.",
    keywords: ["predictive analytics", "AI forecasting", "data visualization", "BI dashboards", "time series", "demand forecasting"],
};

export const heroData = {
    badge: "Predictive Intelligence",
    headline: "Analytics &",
    headlineHighlight: "Visualization",
    subheadline:
        "Forecasting, anomaly detection, and actionable dashboards—turning raw data into decisions that drive measurable business outcomes.",
    primaryCta: { label: "Talk to an engineer", href: "/contact" },
    secondaryCta: { label: "View case studies", href: "/work" },
    trustBadges: [
        { icon: "shield", label: "100% IP Ownership", color: "green" },
        { icon: "barChart", label: "Actionable Insights", color: "blue" },
        { icon: "checkCircle", label: "Decision-Ready Outputs", color: "purple" },
    ],
};

export type IconName = "brain" | "eye" | "search" | "layers" | "target" | "cpu" | "zap" | "shield" | "barChart" | "checkCircle" | "database" | "cloud" | "workflow" | "sparkles" | "lock" | "trendingUp" | "lineChart";

export interface Deliverable { iconName: IconName; title: string; description: string; }
export const deliverables: Deliverable[] = [
    { iconName: "trendingUp", title: "Forecast Models", description: "Time-series and ML-based forecasting with uncertainty bands, confidence intervals, and bias tracking." },
    { iconName: "target", title: "Scenario Analysis", description: "What-if tooling that lets decision-makers explore outcomes before committing to actions." },
    { iconName: "barChart", title: "Operational Dashboards", description: "Real-time dashboards with alert triggers tied directly to operational decisions and escalation workflows." },
    { iconName: "checkCircle", title: "Backtesting Reports", description: "Historical validation proving model accuracy before deployment, with ongoing recalibration plans." },
    { iconName: "sparkles", title: "Anomaly Detection", description: "Automated identification of outliers, regime changes, and emerging patterns in your data streams." },
    { iconName: "workflow", title: "Decision Integration", description: "Forecasts and alerts integrated directly into your operational workflows—not siloed in a separate tool." },
];

export interface UseCase { title: string; problem: string; solution: string; outcome: string; }
export const useCases: UseCase[] = [
    { title: "Energy Yield Forecasting", problem: "Solar farm operators making decisions on outdated production estimates, leading to revenue loss.", solution: "ML-based energy yield forecasting with weather integration, uncertainty bands, and automated alerts for underperformance.", outcome: "15% improvement in forecast accuracy, enabling better grid commitments." },
    { title: "Predictive Maintenance Alerts", problem: "Equipment failures discovered after costly damage, zero advance warning from data.", solution: "Time-series anomaly detection on sensor data with escalation workflows and maintenance scheduling integration.", outcome: "40% reduction in unplanned downtime through early failure detection." },
    { title: "Demand & Supply Planning", problem: "Inventory decisions based on gut feel, resulting in overstocking and stockouts.", solution: "Demand forecasting with seasonal decomposition, external signal integration, and scenario planning dashboards.", outcome: "25% reduction in inventory costs while improving fill rates." },
];

export interface ProcessStep { iconName: IconName; title: string; description: string; }
export const processSteps: ProcessStep[] = [
    { iconName: "search", title: "Define", description: "Map business decisions, data sources, forecast horizons, and success criteria" },
    { iconName: "database", title: "Prepare", description: "Build data pipelines, handle missing data, engineer features, and validate quality" },
    { iconName: "brain", title: "Model", description: "Train, evaluate, and backtest forecast models with uncertainty quantification" },
    { iconName: "barChart", title: "Visualize", description: "Build dashboards, alerts, and scenario tools integrated into decision workflows" },
    { iconName: "zap", title: "Operate", description: "Deploy with monitoring, recalibration triggers, and continuous accuracy tracking" },
];

export interface ArchitectureLayer { iconName: IconName; title: string; subtitle: string; }
export const architectureLayers: ArchitectureLayer[] = [
    { iconName: "database", title: "Data Sources", subtitle: "IoT, ERP, APIs" },
    { iconName: "workflow", title: "Pipelines", subtitle: "ETL & Features" },
    { iconName: "brain", title: "Models", subtitle: "Forecast & Detect" },
    { iconName: "barChart", title: "Dashboards", subtitle: "Viz & Alerts" },
    { iconName: "target", title: "Decisions", subtitle: "Actions & Triggers" },
];

export interface TechnicalPillar { iconName: IconName; title: string; description: string; color: "blue" | "green" | "red" | "purple"; }
export const technicalPillars: TechnicalPillar[] = [
    { iconName: "trendingUp", title: "Accuracy", description: "Backtested models with transparent error bounds.", color: "blue" },
    { iconName: "target", title: "Actionability", description: "Insights tied directly to operational decisions.", color: "green" },
    { iconName: "sparkles", title: "Adaptability", description: "Self-recalibrating models that evolve with your data.", color: "red" },
    { iconName: "barChart", title: "Transparency", description: "Every forecast explainable and auditable.", color: "purple" },
];

export interface TechCategory { category: string; technologies: string[]; }
export const techStack: TechCategory[] = [
    { category: "Forecasting & ML", technologies: ["Prophet", "XGBoost", "LightGBM", "PyTorch Forecasting", "statsmodels", "scikit-learn"] },
    { category: "Visualization & BI", technologies: ["Grafana", "Apache Superset", "Streamlit", "Plotly Dash", "D3.js", "Metabase"] },
    { category: "Data & Infra", technologies: ["Apache Spark", "dbt", "Snowflake", "BigQuery", "TimescaleDB", "InfluxDB"] },
];

export interface CaseStudy { title: string; services: string; result: string; href: string; }
export const caseStudies: CaseStudy[] = [
    { title: "Solar Energy Yield Prediction", services: "Time-Series Forecasting, Dashboards", result: "+15% forecast accuracy enabling better grid commitments.", href: "/work/terrasmart-solar" },
    { title: "Industrial Predictive Maintenance", services: "Anomaly Detection, Alert System", result: "40% reduction in unplanned downtime via early warnings.", href: "/work/industrial-predictive" },
    { title: "TerraTrak AI Analytics", services: "ML Analytics, Performance Dashboards", result: "+12% energy generation through data-driven optimization.", href: "/work/terratrak-ai" },
];

export interface FAQ { question: string; answer: string; }
export const faqs: FAQ[] = [
    { question: "How do you include uncertainty in decisions?", answer: "Every forecast includes confidence intervals and uncertainty bands. We design decision rules that incorporate uncertainty—for example, trigger maintenance at 70% failure probability rather than waiting for certainty." },
    { question: "How often do you retrain models?", answer: "It depends on your data dynamics. We set up automated recalibration triggered by drift detection or scheduled cadence. Models recalibrate when they need to, not on arbitrary schedules." },
    { question: "What data is required for high accuracy?", answer: "More data is better, but quality matters more than quantity. We assess your data early and set realistic accuracy expectations. Even 6-12 months of clean historical data can deliver valuable forecasts." },
    { question: "Can we add custom KPIs and alerts?", answer: "Absolutely. Dashboards are built around your specific business KPIs with configurable alert thresholds. We design alerts that trigger actions, not just notifications." },
    { question: "Do we need real-time analytics or is batch sufficient?", answer: "It depends on your decision latency. If decisions are daily, batch is fine and cheaper. If you need sub-minute responses, we design streaming analytics. We optimize for cost-effectiveness." },
];

export const ctaData = {
    headline: "Ready to Turn Data Into Decisions?",
    subheadline: "Tell us about your forecasting and analytics challenges. Our engineers will build predictive intelligence that drives real business outcomes.",
    email: "ai@zigron.com",
};
