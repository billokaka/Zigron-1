// Manufacturing Industry Page - Content Data
// Sourced from Knowledge Doc: Industries.md Section 1

export const pageMetadata = {
    title: "Manufacturing Solutions | Zigron",
    description: "Custom IoT and AI solutions for manufacturing plants—predictive maintenance, OT integration, edge computing, and CMMS/ERP workflow automation.",
    keywords: ["manufacturing IoT", "predictive maintenance", "OEE optimization", "OT integration", "CMMS integration", "smart factory"],
};

export const heroData = {
    badge: "Manufacturing",
    headline: "Smart Factory",
    headlineHighlight: "Solutions & Services",
    subheadline: "Reduce unplanned downtime, improve OEE, and connect OT with IT—custom-built for your plant operations.",
    primaryCta: { label: "Talk to an expert", href: "/contact" },
    secondaryCta: { label: "View case studies", href: "/work" },
};

export type IconName = "settings" | "shield" | "cpu" | "barChart" | "wrench" | "lock" | "clock" | "clipboard" | "alertTriangle" | "database" | "wifi" | "cloud" | "target" | "zap" | "users" | "factory";

export interface Challenge { iconName: IconName; title: string; description: string; }
export const challenges: Challenge[] = [
    { iconName: "alertTriangle", title: "Legacy Equipment Integration", description: "Connecting decades-old PLCs and proprietary protocols with modern analytics platforms." },
    { iconName: "clock", title: "Unplanned Downtime", description: "Reactive maintenance causing expensive production stoppages and overtime costs." },
    { iconName: "database", title: "Data Silos Between OT & IT", description: "SCADA, MES, and ERP data trapped in separate systems with no unified view." },
    { iconName: "shield", title: "OT Security Constraints", description: "Limited maintenance windows and strict change control requirements for production systems." },
    { iconName: "barChart", title: "Quality Defects & Scrap Rate", description: "Lack of real-time process monitoring leading to high rework and scrap costs." },
];

export interface Solution { iconName: IconName; title: string; description: string; href: string; }
export const solutions: Solution[] = [
    { iconName: "target", title: "Predictive Maintenance", description: "ML-driven failure prediction for motors, pumps, compressors, and conveyors—integrated with your CMMS.", href: "/solutions/predictive-maintenance" },
    { iconName: "cpu", title: "OT-to-IT Integration", description: "Secure data bridges connecting SCADA/HMI/PLC networks to cloud analytics platforms.", href: "/services/iot/connectivity" },
    { iconName: "zap", title: "Edge Computing", description: "Low-latency processing for real-time quality inspection and process control at the machine level.", href: "/services/ai/edge-ai" },
    { iconName: "barChart", title: "OEE Analytics Dashboards", description: "Custom dashboards tracking availability, performance, and quality across production lines.", href: "/services/ai/analytics" },
    { iconName: "wrench", title: "CMMS/ERP Workflow Automation", description: "Automated work order creation, parts ordering, and maintenance scheduling from IoT triggers.", href: "/services/iot/platform-cloud" },
];

export interface RecommendedSolution { title: string; description: string; bestFor: string; outcome: string; href: string; }
export const recommendedSolutions: RecommendedSolution[] = [
    { title: "Predictive Maintenance", description: "Telemetry-driven failure prediction with CMMS integration for automated work orders.", bestFor: "Plants with rotating equipment", outcome: "40% downtime reduction, 3x ROI", href: "/solutions/predictive-maintenance" },
    { title: "Fleet & Logistics", description: "Telematics and utilization tracking for mobile equipment and material handling.", bestFor: "Plants with mobile assets", outcome: "20% fuel savings, improved utilization", href: "/solutions/fleet-logistics" },
];

export interface ServiceCategory { iconName: IconName; title: string; services: string[]; }
export const serviceCategories: ServiceCategory[] = [
    { iconName: "cpu", title: "Edge & OT Integration", services: ["PLC/SCADA Data Extraction", "Edge Computing Gateways", "Protocol Translation (OPC-UA, Modbus)", "Real-time Signal Processing"] },
    { iconName: "cloud", title: "Cloud & Analytics", services: ["AWS/Azure IoT Architecture", "Time-Series Data Pipelines", "OEE/KPI Dashboards", "Anomaly Detection Models"] },
    { iconName: "wrench", title: "Workflow Automation", services: ["CMMS Integration (SAP PM, Maximo)", "MES/ERP Data Bridges", "Automated Work Orders", "Parts Forecasting"] },
];

export interface SecurityFeature { iconName: IconName; title: string; description: string; }
export const securityFeatures: SecurityFeature[] = [
    { iconName: "shield", title: "OT/IT Network Segmentation", description: "Secure network boundaries between production systems and cloud platforms." },
    { iconName: "lock", title: "Least Privilege Access", description: "Role-based access controls for operators, engineers, and administrators." },
    { iconName: "clipboard", title: "Change Audit Trails", description: "Complete logging of all configuration changes and remote actions." },
    { iconName: "alertTriangle", title: "Safe Change Windows", description: "Controlled deployment during maintenance windows with rollback capability." },
];

export interface CaseStudy { image: string; category: string; title: string; challenge: string; result: string; href: string; }
export const caseStudies: CaseStudy[] = [
    { image: "/images/case-studies/manufacturing-motors.jpg", category: "Predictive", title: "Motor Failure Prediction System", challenge: "Unplanned motor failures causing production line stops.", result: "45% downtime reduction, 3.2x ROI in Year 1.", href: "/work" },
    { image: "/images/case-studies/manufacturing-oee.jpg", category: "Analytics", title: "OEE Analytics Platform", challenge: "No visibility into true OEE across production lines.", result: "Real-time OEE tracking with 12% improvement.", href: "/work" },
];

export interface ImplementationPattern { number: number; title: string; description: string; features: string[]; featured: boolean; }
export const implementationPatterns: ImplementationPattern[] = [
    { number: 1, title: "Assessment", description: "Asset inventory, data audit, KPI definitions, and pilot scope.", features: ["2-3 weeks", "Asset mapping", "KPI alignment"], featured: false },
    { number: 2, title: "Pilot", description: "One asset class or line with instrumentation, ingestion, and baseline models.", features: ["6-10 weeks", "Single line validation", "ROI measurement"], featured: true },
    { number: 3, title: "Scale", description: "Expand across asset classes, lines, and sites with governance.", features: ["8-16+ weeks", "Plant-wide rollout", "Full integrations"], featured: false },
];

export interface FAQ { question: string; answer: string; }
export const faqs: FAQ[] = [
    { question: "How do you integrate without disrupting OT operations?", answer: "We use passive data extraction methods (mirrored ports, read-only OPC-UA connections) during planned maintenance windows. Our integration architecture maintains strict OT/IT segmentation so production systems are never at risk." },
    { question: "How do you prove ROI quickly?", answer: "We establish baseline metrics (current downtime, maintenance costs, scrap rate) before pilot, then measure improvement against those baselines. Typical pilots show measurable results within 8-10 weeks." },
    { question: "What's needed to start with one line or asset class?", answer: "At minimum: a telemetry feed from the target assets, some maintenance history, and access to your CMMS for work order integration. We can start small and expand based on proven results." },
    { question: "Can you work with our existing SCADA/HMI systems?", answer: "Yes. We integrate with major SCADA platforms and support standard industrial protocols (OPC-UA, Modbus TCP/RTU, EtherNet/IP). We extract data without modifying your existing control logic." },
];

export const ctaData = {
    headline: "Ready to Modernize Your Plant?",
    subheadline: "Tell us about your manufacturing challenges. We'll engineer solutions that deliver measurable ROI.",
    email: "manufacturing@zigron.com",
};
