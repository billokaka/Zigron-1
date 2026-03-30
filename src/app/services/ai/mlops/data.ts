// MLOps & Model Management Service Page - Content Data
// Sourced from Knowledge Doc: Sections 10 (mlops-deployment) & 12 (model-optimization)

export const pageMetadata = {
    title: "MLOps & Model Management Services | Zigron",
    description:
        "Productionize models: CI/CD for ML, model registries, automated evaluation gates, scalable serving, and continuous monitoring.",
    keywords: ["MLOps", "model deployment", "ML pipeline", "model monitoring", "model registry", "CI/CD ML", "model serving"],
};

export const heroData = {
    badge: "Production ML Infrastructure",
    headline: "MLOps & Model",
    headlineHighlight: "Management",
    subheadline:
        "CI/CD for ML, model registries, automated evaluation gates, scalable serving, and continuous monitoring—so your models actually run in production.",
    primaryCta: { label: "Talk to an engineer", href: "/contact" },
    secondaryCta: { label: "View case studies", href: "/work" },
    trustBadges: [
        { icon: "shield", label: "100% IP Ownership", color: "green" },
        { icon: "workflow", label: "Automated ML Pipelines", color: "blue" },
        { icon: "checkCircle", label: "Regression-Proof Deploys", color: "purple" },
    ],
};

export type IconName = "brain" | "eye" | "search" | "layers" | "target" | "cpu" | "zap" | "shield" | "barChart" | "checkCircle" | "database" | "cloud" | "workflow" | "sparkles" | "lock";

export interface Deliverable { iconName: IconName; title: string; description: string; }
export const deliverables: Deliverable[] = [
    { iconName: "workflow", title: "Automated Training Pipelines", description: "End-to-end ML pipelines that retrain, evaluate, and promote models without manual intervention." },
    { iconName: "database", title: "Model Registry & Versioning", description: "Central registry with artifact versioning, lineage tracking, and approval workflows." },
    { iconName: "checkCircle", title: "Automated Evaluation Gates", description: "Quality gates that prevent regressions—models only deploy if they beat the current production baseline." },
    { iconName: "cloud", title: "Scalable Serving Patterns", description: "Batch, real-time, and streaming inference patterns with auto-scaling, load balancing, and caching." },
    { iconName: "barChart", title: "Production Monitoring", description: "Drift detection, performance degradation alerts, data quality checks, and cost tracking dashboards." },
    { iconName: "lock", title: "Audit & Compliance", description: "Audit-ready decision logs, model lineage, and governance controls aligned to NIST AI RMF." },
];

export interface UseCase { title: string; problem: string; solution: string; outcome: string; }
export const useCases: UseCase[] = [
    { title: "Model Won't Deploy", problem: "Data science team trained a great model but can't get it into production reliably.", solution: "MLOps pipeline with containerized training, automated evaluation, model registry, and one-click deployment with rollback.", outcome: "Model deployment time reduced from weeks to hours." },
    { title: "Silent Model Failures", problem: "Production models degrading without anyone noticing until business metrics suffer.", solution: "Monitoring stack with drift detection, performance alerts, data quality checks, and automated retraining triggers.", outcome: "95% reduction in time-to-detect model degradation." },
    { title: "Regulated ML Systems", problem: "Need audit trails and traceability for every model decision in regulated environments.", solution: "Complete model lineage, versioned artifacts, decision logging, and governance controls for compliance.", outcome: "Passed ML compliance audit on first submission." },
];

export interface ProcessStep { iconName: IconName; title: string; description: string; }
export const processSteps: ProcessStep[] = [
    { iconName: "search", title: "Assess", description: "Evaluate current ML workflow, infra, deployment constraints, and compliance requirements" },
    { iconName: "layers", title: "Design", description: "Define pipeline architecture, serving patterns, monitoring strategy, and governance controls" },
    { iconName: "workflow", title: "Build", description: "Implement training pipelines, model registry, serving infrastructure, and CI/CD automation" },
    { iconName: "checkCircle", title: "Validate", description: "Test evaluation gates, rollback mechanisms, monitoring alerts, and load handling" },
    { iconName: "zap", title: "Operate", description: "Production handover with runbooks, incident playbooks, and ongoing optimization" },
];

export interface ArchitectureLayer { iconName: IconName; title: string; subtitle: string; }
export const architectureLayers: ArchitectureLayer[] = [
    { iconName: "database", title: "Data", subtitle: "Pipelines & Features" },
    { iconName: "brain", title: "Training", subtitle: "Experiments & Eval" },
    { iconName: "layers", title: "Registry", subtitle: "Versions & Artifacts" },
    { iconName: "cloud", title: "Serving", subtitle: "APIs & Batch" },
    { iconName: "barChart", title: "Monitoring", subtitle: "Drift & Alerts" },
];

export interface TechnicalPillar { iconName: IconName; title: string; description: string; color: "blue" | "green" | "red" | "purple"; }
export const technicalPillars: TechnicalPillar[] = [
    { iconName: "workflow", title: "Automation", description: "End-to-end pipelines with zero manual steps.", color: "blue" },
    { iconName: "checkCircle", title: "Quality Gates", description: "Models deploy only when they prove they're better.", color: "green" },
    { iconName: "barChart", title: "Observability", description: "Every model metric tracked, alerted, and dashboarded.", color: "red" },
    { iconName: "lock", title: "Governance", description: "Audit trails and compliance baked into the pipeline.", color: "purple" },
];

export interface TechCategory { category: string; technologies: string[]; }
export const techStack: TechCategory[] = [
    { category: "ML Platforms", technologies: ["MLflow", "Kubeflow", "SageMaker", "Vertex AI", "Weights & Biases", "DVC"] },
    { category: "Serving & Infra", technologies: ["Kubernetes", "Seldon Core", "TensorFlow Serving", "Triton", "Docker", "Terraform"] },
    { category: "Monitoring & Ops", technologies: ["Evidently AI", "Great Expectations", "Prometheus", "Grafana", "Datadog", "PagerDuty"] },
];

export interface CaseStudy { image: string; category: string; title: string; services: string; result: string; href: string; }
export const caseStudies: CaseStudy[] = [
    { image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80", category: "Solar", title: "AI Solar Tracking Optimization", services: "ML Pipeline, Model Registry, Edge Deployment", result: "Automated retraining pipeline with zero-downtime model updates.", href: "/work/terratrak-ai" },
    { image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80", category: "Solar", title: "TerraSmart Solar MLOps Pipeline", services: "Automated Retraining, Monitoring, Drift Detection", result: "30% faster deployment with continuous model updates across sites.", href: "/work/terrasmart-solar" },
    { image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80", category: "Smart Home", title: "Abode Smart Home Model Ops", services: "Model Serving, Quality Gates, A/B Testing", result: "99.99% uptime with automated model lifecycle management.", href: "/work/abode-smart-home" },
];

export interface FAQ { question: string; answer: string; }
export const faqs: FAQ[] = [
    { question: "What should trigger model retraining?", answer: "We define retraining triggers based on your use case: data drift (feature distribution shifts), performance degradation (metric drops below threshold), or scheduled cadence. Every trigger is monitored and logged." },
    { question: "How do you measure drift in production?", answer: "We implement statistical tests on feature distributions, prediction output distributions, and business KPIs. Alerts fire when drift exceeds configurable thresholds, with dashboards showing trends over time." },
    { question: "How do you prevent 'silent model failures'?", answer: "By monitoring not just model accuracy but data quality, feature freshness, prediction confidence distributions, and downstream business metrics. If any signal degrades, the team is alerted before users are affected." },
    { question: "Can you work with our existing ML tools?", answer: "Yes. We integrate with your existing training frameworks, experiment tracking, and cloud infrastructure. We build the operational layer on top—pipelines, serving, monitoring—using tools that fit your stack." },
    { question: "How do you handle model rollback?", answer: "Every deployment includes automatic rollback capability. If a new model fails evaluation gates or monitoring detects regression, the system reverts to the last known-good version within minutes, not hours." },
];

export const ctaData = {
    headline: "Ready to Productionize Your Models?",
    subheadline: "Tell us about your ML deployment challenges. Our engineers will build the infrastructure that turns experiments into reliable production systems.",
    email: "ai@zigron.com",
};
