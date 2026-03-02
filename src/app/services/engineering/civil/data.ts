// Civil Engineering Service Page - Content Data
// Sourced from Knowledge Doc: Section 4 (civil-engineering)

export const pageMetadata = {
    title: "Civil Engineering Services | Zigron",
    description:
        "Civil/site engineering for constructable layouts: grading, drainage, access roads, trenching coordination, earthwork quantities, and permitting-ready site plans.",
    keywords: ["civil engineering", "site engineering", "grading", "drainage design", "earthwork", "site plans", "solar civil"],
};

export const heroData = {
    badge: "Civil / Site Engineering",
    headline: "Civil",
    headlineHighlight: "Engineering",
    subheadline:
        "Grading, drainage, access roads, trenching coordination, and earthwork balancing—standardized civil packages built for multi-site rollouts.",
    primaryCta: { label: "Talk to an engineer", href: "/contact" },
    secondaryCta: { label: "View case studies", href: "/work" },
    trustBadges: [
        { icon: "shield", label: "AHJ-Compliant Plans", color: "green" },
        { icon: "zap", label: "Workflow Automation", color: "blue" },
        { icon: "checkCircle", label: "Earthwork Optimization", color: "purple" },
    ],
};

export type IconName = "building" | "mountain" | "shield" | "checkCircle" | "zap" | "ruler" | "calculator" | "compass" | "layers" | "target" | "search" | "wind" | "droplets" | "database" | "workflow" | "penTool" | "mapPin" | "sun";

export interface Deliverable { iconName: IconName; title: string; description: string; }
export const deliverables: Deliverable[] = [
    { iconName: "mapPin", title: "Site Layout Plans", description: "Roads, fencing, pads, access points, and equipment locations—fully coordinated with structural and electrical layouts." },
    { iconName: "mountain", title: "Grading Plans & Earthwork", description: "Cut/fill balancing, slope optimization, and earthwork quantities tied directly to Civil 3D models for traceability." },
    { iconName: "droplets", title: "Drainage & Stormwater", description: "Drainage concepts and stormwater routing aligned to local AHJ requirements, with erosion and sediment control support." },
    { iconName: "zap", title: "Trenching Coordination", description: "Cable routing and trench layout coordinated with electrical discipline—minimizing field conflicts and change orders." },
    { iconName: "calculator", title: "Quantity Takeoffs (BOQ)", description: "Construction quantities traceable to model/drawings, enabling accurate bidding and material procurement." },
    { iconName: "checkCircle", title: "Permitting-Ready Packages", description: "Site plans meeting local jurisdiction requirements with construction notes, erosion control, and coordination documentation." },
];

export interface UseCase { title: string; problem: string; solution: string; outcome: string; }
export const useCases: UseCase[] = [
    { title: "Multi-Site Solar Civil", problem: "Dozens of solar sites each requiring standardized civil packages—grading, drainage, and access—with fast turnaround.", solution: "Templatized Civil 3D workflows with automation for grading analysis, earthwork reporting, and consistent drawing production.", outcome: "50% faster civil package delivery across 40+ solar sites." },
    { title: "Industrial Site Development", problem: "Greenfield site needing coordinated civil, structural, and electrical design for manufacturing facility.", solution: "Integrated site engineering with grading optimization, utility coordination, and permitting support across all disciplines.", outcome: "Zero civil-related RFIs during construction phase." },
    { title: "Infrastructure Access Roads", problem: "Remote industrial sites needing cost-effective access road design with challenging terrain and drainage.", solution: "Civil 3D-driven road alignment with optimized vertical profiles, balanced earthwork, and drainage culvert sizing.", outcome: "30% earthwork reduction through optimized alignment." },
];

export interface ProcessStep { iconName: IconName; title: string; description: string; }
export const processSteps: ProcessStep[] = [
    { iconName: "search", title: "Survey & Review", description: "Review topo, geotech, hydrology, and local permitting requirements" },
    { iconName: "mapPin", title: "Site Layout", description: "Define roads, pads, fencing, and equipment locations with construction access" },
    { iconName: "mountain", title: "Grading & Drainage", description: "Optimize earthwork, design drainage, and balance cut/fill" },
    { iconName: "checkCircle", title: "Coordination", description: "Cross-discipline checks with structural, electrical, and geotechnical" },
    { iconName: "penTool", title: "Deliverables", description: "Production-ready plan sets, BOQ, and permitting documentation" },
];

export interface ArchitectureLayer { iconName: IconName; title: string; subtitle: string; }
export const architectureLayers: ArchitectureLayer[] = [
    { iconName: "database", title: "Survey Data", subtitle: "Topo & GIS" },
    { iconName: "mapPin", title: "Site Layout", subtitle: "Plans & Access" },
    { iconName: "mountain", title: "Grading", subtitle: "Cut/Fill Balance" },
    { iconName: "droplets", title: "Drainage", subtitle: "Stormwater" },
    { iconName: "penTool", title: "Deliverables", subtitle: "Plans & BOQ" },
];

export interface TechnicalPillar { iconName: IconName; title: string; description: string; color: "blue" | "green" | "red" | "purple"; }
export const technicalPillars: TechnicalPillar[] = [
    { iconName: "target", title: "Optimization", description: "Earthwork balanced for minimum cost.", color: "blue" },
    { iconName: "workflow", title: "Automation", description: "Repeatable workflows for multi-site programs.", color: "green" },
    { iconName: "compass", title: "Coordination", description: "Civil integrated with all disciplines.", color: "red" },
    { iconName: "shield", title: "Compliance", description: "Permit-ready for any AHJ.", color: "purple" },
];

export interface TechCategory { category: string; technologies: string[]; }
export const techStack: TechCategory[] = [
    { category: "Design & Modeling", technologies: ["Civil 3D", "AutoCAD", "Revit", "InfraWorks", "MicroStation"] },
    { category: "Analysis & Hydrology", technologies: ["HEC-HMS", "StormCAD", "HydroCAD", "ArcGIS", "QGIS"] },
    { category: "Standards", technologies: ["AASHTO Green Book", "IBC 2024", "Local AHJ Codes", "NPDES", "SWPPP"] },
];

export interface CaseStudy { title: string; services: string; result: string; href: string; }
export const caseStudies: CaseStudy[] = [
    { title: "TerraSmart Solar Site Civil", services: "Grading, Drainage, Earthwork Optimization", result: "50% faster civil delivery with templatized workflows.", href: "/work/terrasmart-solar" },
    { title: "Industrial Facility Site Work", services: "Site Layout, Utility Coordination, Permitting", result: "Zero civil-related RFIs during construction.", href: "/work/industrial-predictive" },
    { title: "Infrastructure Road Design", services: "Alignment, Grading, Drainage", result: "30% earthwork reduction through optimized profiles.", href: "/work/terrasmart-solar" },
];

export interface FAQ { question: string; answer: string; }
export const faqs: FAQ[] = [
    { question: "Can you standardize civil templates across dozens of sites?", answer: "Yes. We build templatized Civil 3D workflows that standardize layers, annotation styles, drawing templates, and reporting. Once established, each new site leverages the template for consistent output and faster turnaround." },
    { question: "How do you reduce grading cost while staying constructable?", answer: "We optimize earthwork balancing in Civil 3D to minimize off-site hauling. We also design slopes and pads within constructability tolerances, considering equipment access and installation sequences." },
    { question: "Can you coordinate civil + electrical trenching + structural pads in one package?", answer: "Absolutely. We coordinate across disciplines within our team, aligning trenching routes with cable plans, equipment pads with structural foundations, and access roads with construction logistics." },
    { question: "What local permitting requirements do you handle?", answer: "We design to the requirements of the Authority Having Jurisdiction (AHJ). This includes stormwater management, erosion control, setbacks, and any jurisdiction-specific plan requirements. We maintain a checklist per AHJ." },
    { question: "How do you handle workflow automation for civil engineering?", answer: "For repeatable tasks like grading analysis, earthwork reporting, and drawing production, we use scripted workflows in Civil 3D. This reduces turnaround time and improves consistency across multi-site programs." },
];

export const ctaData = {
    headline: "Ready to Optimize Your Site Civil?",
    subheadline: "Tell us about your site engineering requirements. Our team will deliver constructable, permit-ready civil packages.",
    email: "engineering@zigron.com",
};
