// Geotechnical Engineering Service Page - Content Data
// Sourced from Knowledge Doc: Section 6 (geotechnical-engineering)

export const pageMetadata = {
    title: "Geotechnical Engineering Services | Zigron",
    description:
        "Geotechnical engineering: investigations interpretation, slope stability, foundation recommendations, settlement analysis, deep foundation acceptance support.",
    keywords: ["geotechnical engineering", "soil analysis", "foundation design", "slope stability", "deep foundations", "geotech report", "PLAXIS"],
};

export const heroData = {
    badge: "Geotechnical Engineering",
    headline: "Geotechnical",
    headlineHighlight: "Engineering",
    subheadline:
        "Foundation recommendations, slope stability, settlement analysis, and deep foundation acceptance—ground-truth engineering to de-risk construction.",
    primaryCta: { label: "Talk to an engineer", href: "/contact" },
    secondaryCta: { label: "View case studies", href: "/work" },
    trustBadges: [
        { icon: "shield", label: "USCS-Classified Soils", color: "green" },
        { icon: "checkCircle", label: "FHWA-Aligned Acceptance", color: "blue" },
        { icon: "zap", label: "Automation-Ready Workflows", color: "purple" },
    ],
};

export type IconName = "building" | "mountain" | "shield" | "checkCircle" | "zap" | "ruler" | "calculator" | "compass" | "layers" | "target" | "search" | "wind" | "droplets" | "database" | "workflow" | "penTool";

export interface Deliverable { iconName: IconName; title: string; description: string; }
export const deliverables: Deliverable[] = [
    { iconName: "search", title: "Preliminary Assessment Reports", description: "Early-stage geotechnical risk assessment based on available data, identifying investigation needs and design constraints." },
    { iconName: "mountain", title: "Investigation & Interpretive Reports", description: "Borelog interpretation, lab test analysis, soil classification (ASTM D2487/USCS), and subsurface characterization." },
    { iconName: "calculator", title: "Analysis & Design Reports", description: "Foundation recommendations, settlement calculations, bearing capacity, and slope stability with explicit assumptions." },
    { iconName: "layers", title: "Slope Stability Analysis", description: "2D slope stability modeling using PLAXIS, Slope/W, and Rocscience with sensitivity analysis for groundwater variability." },
    { iconName: "checkCircle", title: "Deep Foundation Acceptance", description: "Acceptance procedures and documentation aligned to FHWA GEC 15 guidance for driven piles and drilled shafts." },
    { iconName: "database", title: "Instrumentation & Monitoring", description: "Field monitoring data interpretation, reporting, and construction verification recommendations." },
];

export interface UseCase { title: string; problem: string; solution: string; outcome: string; }
export const useCases: UseCase[] = [
    { title: "Solar Farm Foundation Feasibility", problem: "Multi-site solar program needing consistent foundation recommendations across variable soil conditions.", solution: "Site-specific borelog interpretation, foundation type recommendations, and design parameters standardized across the program.", outcome: "Foundation costs reduced 20% through site-specific optimization." },
    { title: "Slope Stability for Embankments", problem: "Road embankment on soft ground with stability risk and settlement concerns.", solution: "PLAXIS 2D modeling with staged construction analysis, groundwater sensitivity, and monitoring-based verification.", outcome: "Construction proceeded on schedule with real-time stability confirmation." },
    { title: "Deep Foundation Acceptance", problem: "Bridge foundation requiring documented acceptance procedures that satisfy FHWA requirements.", solution: "Acceptance test plan, dynamic and static testing coordination, and documentation aligned to FHWA GEC 15 guidance.", outcome: "Foundation acceptance completed with zero re-drives needed." },
];

export interface ProcessStep { iconName: IconName; title: string; description: string; }
export const processSteps: ProcessStep[] = [
    { iconName: "search", title: "Data Review", description: "Review borelogs, lab tests, site history, and design requirements" },
    { iconName: "mountain", title: "Characterize", description: "Interpret subsurface conditions, classify soils, and define design parameters" },
    { iconName: "calculator", title: "Analyze", description: "Run stability, settlement, and bearing capacity analyses with sensitivity checks" },
    { iconName: "penTool", title: "Report", description: "Document recommendations with explicit assumptions, limitations, and construction notes" },
    { iconName: "checkCircle", title: "Support", description: "Construction verification, monitoring interpretation, and acceptance documentation" },
];

export interface ArchitectureLayer { iconName: IconName; title: string; subtitle: string; }
export const architectureLayers: ArchitectureLayer[] = [
    { iconName: "search", title: "Investigation", subtitle: "Borelogs & Tests" },
    { iconName: "mountain", title: "Characterization", subtitle: "Soil Profiles" },
    { iconName: "calculator", title: "Analysis", subtitle: "FOS & Settlement" },
    { iconName: "penTool", title: "Recommendations", subtitle: "Design Params" },
    { iconName: "checkCircle", title: "Verification", subtitle: "Construction QA" },
];

export interface TechnicalPillar { iconName: IconName; title: string; description: string; color: "blue" | "green" | "red" | "purple"; }
export const technicalPillars: TechnicalPillar[] = [
    { iconName: "shield", title: "Risk-Based", description: "Explicit uncertainty treatment and sensitivity.", color: "blue" },
    { iconName: "calculator", title: "Data-Driven", description: "Recommendations tied directly to test data.", color: "green" },
    { iconName: "checkCircle", title: "Constructable", description: "Practical notes for field implementation.", color: "red" },
    { iconName: "target", title: "Auditable", description: "Clear assumptions and limitations documented.", color: "purple" },
];

export interface TechCategory { category: string; technologies: string[]; }
export const techStack: TechCategory[] = [
    { category: "Geotechnical Analysis", technologies: ["PLAXIS 2D", "Slope/W", "Seep/W", "LPile", "AllPile", "Rocscience"] },
    { category: "Design & Coordination", technologies: ["Civil 3D", "Revit", "AutoCAD", "MathCAD", "Excel VBA"] },
    { category: "Standards & Codes", technologies: ["ASTM D2487", "FHWA GEC 15", "FHWA GEC-12", "IBC 2024", "ASCE 7-22"] },
];

export interface CaseStudy { title: string; services: string; result: string; href: string; }
export const caseStudies: CaseStudy[] = [
    { title: "TerraSmart Solar Geotechnical", services: "Foundation Feasibility, Soil Classification", result: "20% foundation cost reduction through site-specific optimization.", href: "/work/terrasmart-solar" },
    { title: "Highway Embankment Stability", services: "PLAXIS Modeling, Monitoring Plan", result: "On-schedule construction with real-time stability verification.", href: "/work/terrasmart-solar" },
    { title: "Bridge Deep Foundations", services: "Acceptance Testing, FHWA Documentation", result: "Zero re-drives with documented acceptance procedures.", href: "/work/industrial-predictive" },
];

export interface FAQ { question: string; answer: string; }
export const faqs: FAQ[] = [
    { question: "What minimum investigation data is needed for reliable foundation design?", answer: "It depends on the structure type and site variability. For typical solar sites, borelogs at representative locations with SPT data and lab classification are the minimum. We assess data adequacy early and recommend supplemental investigation if needed." },
    { question: "How do you treat slope stability risk and sensitivity to groundwater?", answer: "We model multiple groundwater scenarios and assess factor-of-safety sensitivity. Our reports explicitly state which groundwater assumption governs and what monitoring is recommended during construction." },
    { question: "How do you define acceptance criteria for deep foundations?", answer: "We align acceptance criteria with FHWA GEC 15 guidance for driven piles and develop project-specific acceptance test plans. Criteria are defined before construction and verified through dynamic or static testing." },
    { question: "Can you automate geotechnical analysis workflows?", answer: "Yes. For repeatable analysis like slope stability pipelines or borelog processing, we build automated workflows using Civil 3D, scripts, and report generation tools. This reduces cycle time and improves consistency across multi-site programs." },
    { question: "How do you coordinate with structural and civil teams?", answer: "We provide design parameters (bearing capacity, settlement limits, lateral resistance) in formats directly usable by structural engineers. Soil profiles and constraints are coordinated with civil grading and drainage designs." },
];

export const ctaData = {
    headline: "Ready to De-Risk Your Foundations?",
    subheadline: "Tell us about your geotechnical challenges. Our engineers will deliver ground-truth recommendations for reliable construction.",
    email: "engineering@zigron.com",
};
