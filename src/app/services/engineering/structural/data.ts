// Structural Analysis Service Page - Content Data
// Sourced from Knowledge Doc: Section 5 (structural-engineering)

export const pageMetadata = {
    title: "Structural Engineering & Analysis Services | Zigron",
    description:
        "Structural design and analysis for renewable energy, industrial, and infrastructure: foundations, steel/concrete systems, seismic/wind design, and optimization.",
    keywords: ["structural engineering", "structural analysis", "FEA", "foundation design", "seismic design", "steel structures", "concrete design"],
};

export const heroData = {
    badge: "Structural Engineering",
    headline: "Structural",
    headlineHighlight: "Analysis & Design",
    subheadline:
        "Foundations, steel and concrete systems, seismic and wind design—engineered for code compliance, material efficiency, and constructability.",
    primaryCta: { label: "Talk to an engineer", href: "/contact" },
    secondaryCta: { label: "View case studies", href: "/work" },
    trustBadges: [
        { icon: "shield", label: "Code-Compliant Design", color: "green" },
        { icon: "checkCircle", label: "Independent QA/QC", color: "blue" },
        { icon: "zap", label: "Material Optimization", color: "purple" },
    ],
};

export type IconName = "building" | "mountain" | "shield" | "checkCircle" | "zap" | "ruler" | "calculator" | "compass" | "layers" | "target" | "search" | "wind" | "sun" | "database" | "workflow" | "penTool";

export interface Deliverable { iconName: IconName; title: string; description: string; }
export const deliverables: Deliverable[] = [
    { iconName: "calculator", title: "Design Criteria & Load Matrix", description: "Comprehensive load case definitions including wind, seismic, snow, operational, and erection cases aligned to ASCE/SEI 7-22." },
    { iconName: "building", title: "Structural Calculation Package", description: "Foundation, steel, and concrete calculations with sealed-ready formatting. Full documentation of assumptions, methods, and code references." },
    { iconName: "penTool", title: "Structural Drawings", description: "Framing plans, connection details, schedules, and sections coordinated with civil and electrical disciplines." },
    { iconName: "compass", title: "Connection Design & Constructability", description: "Practical connection concepts and constructability notes that reduce fabrication complexity and field issues." },
    { iconName: "checkCircle", title: "Peer Review & Value Engineering", description: "Independent design checks and VE proposals that reduce material cost without compromising structural integrity." },
    { iconName: "layers", title: "Retrofit & Strengthening", description: "Structural assessments and strengthening packages for existing structures needing capacity upgrades or code compliance." },
];

export interface UseCase { title: string; problem: string; solution: string; outcome: string; }
export const useCases: UseCase[] = [
    { title: "Solar Tracker Foundation Optimization", problem: "Over-designed foundations driving up material costs across hundreds of solar sites.", solution: "Site-specific foundation optimization using geotechnical data, FEA analysis, and value engineering to right-size every pile and pier.", outcome: "18% steel reduction across 200+ tracker foundations." },
    { title: "Industrial Building Seismic Retrofit", problem: "Pre-code industrial facility failing modern seismic requirements for equipment installation.", solution: "Structural assessment, load path analysis, and targeted strengthening design—carbon fiber wraps and steel bracing minimizing downtime.", outcome: "Full seismic compliance achieved with 60% less disruption than full rebuild." },
    { title: "Wind Turbine Foundation Design", problem: "Complex geotechnical conditions requiring custom foundation solutions for onshore wind turbines.", solution: "Soil-structure interaction analysis with PLAXIS, optimized gravity base foundation design, and construction monitoring plan.", outcome: "Foundations completed on schedule with 15% material savings." },
];

export interface ProcessStep { iconName: IconName; title: string; description: string; }
export const processSteps: ProcessStep[] = [
    { iconName: "search", title: "Scope & Criteria", description: "Define loads, codes, site conditions, and performance targets with the project team" },
    { iconName: "calculator", title: "Analysis & Design", description: "Run structural models (FEA, hand calcs), size members, design connections and foundations" },
    { iconName: "penTool", title: "Documentation", description: "Produce calculation packages, drawings, and coordination documents" },
    { iconName: "checkCircle", title: "QA/QC Review", description: "Independent design check, interdisciplinary coordination review, and VE assessment" },
    { iconName: "building", title: "Construction Support", description: "RFI responses, submittal reviews, field observation support, and as-built updates" },
];

export interface ArchitectureLayer { iconName: IconName; title: string; subtitle: string; }
export const architectureLayers: ArchitectureLayer[] = [
    { iconName: "mountain", title: "Geotechnical", subtitle: "Soil & Foundation" },
    { iconName: "building", title: "Substructure", subtitle: "Foundations" },
    { iconName: "layers", title: "Superstructure", subtitle: "Framing & Bracing" },
    { iconName: "compass", title: "Connections", subtitle: "Joints & Details" },
    { iconName: "wind", title: "Load Resistance", subtitle: "Wind, Seismic, Snow" },
];

export interface TechnicalPillar { iconName: IconName; title: string; description: string; color: "blue" | "green" | "red" | "purple"; }
export const technicalPillars: TechnicalPillar[] = [
    { iconName: "shield", title: "Code Compliance", description: "IBC, AISC 360, ACI 318, ASCE 7—jurisdiction-specific.", color: "blue" },
    { iconName: "calculator", title: "Material Efficiency", description: "Optimized sections and connections that reduce cost.", color: "green" },
    { iconName: "checkCircle", title: "Constructability", description: "Practical details that work in the field.", color: "red" },
    { iconName: "target", title: "Coordination", description: "Integrated with civil, electrical, and geotech.", color: "purple" },
];

export interface TechCategory { category: string; technologies: string[]; }
export const techStack: TechCategory[] = [
    { category: "Analysis & FEA", technologies: ["ANSYS", "RISA-3D", "STAAD.Pro", "SAP2000", "ETABS", "PLAXIS"] },
    { category: "Design & Detailing", technologies: ["AutoCAD", "Revit Structure", "Tekla Structures", "Civil 3D", "MathCAD"] },
    { category: "Standards & Codes", technologies: ["IBC 2024", "AISC 360-22", "ACI 318-25", "ASCE 7-22", "AWS D1.1"] },
];

export interface CaseStudy { title: string; services: string; result: string; href: string; }
export const caseStudies: CaseStudy[] = [
    { title: "TerraSmart Solar Foundations", services: "Foundation Design, FEA Optimization", result: "18% steel reduction across 200+ tracker foundations.", href: "/work/terrasmart-solar" },
    { title: "Industrial Seismic Retrofit", services: "Structural Assessment, Strengthening", result: "Full seismic compliance with 60% less disruption.", href: "/work/industrial-predictive" },
    { title: "Wind Farm Foundations", services: "Soil-Structure Analysis, Foundation Design", result: "On-schedule delivery with 15% material savings.", href: "/work/terrasmart-solar" },
];

export interface FAQ { question: string; answer: string; }
export const faqs: FAQ[] = [
    { question: "Can you optimize foundations to reduce material without increasing risk?", answer: "Yes. We use site-specific geotechnical data, refined load analysis, and FEA to right-size foundations. Every optimization is validated against code requirements and documented with explicit safety factors." },
    { question: "Which code editions do you design to across multiple jurisdictions?", answer: "We design to the code edition adopted by the Authority Having Jurisdiction (AHJ). For multi-state projects, we maintain a code matrix showing the governing edition for each site. Common references include IBC 2024, AISC 360-22, and ACI 318-25." },
    { question: "How do you coordinate soil-structure interaction and settlement risk?", answer: "We work with geotechnical data to model soil-structure interaction using tools like PLAXIS. Foundation stiffness, bearing capacity, and settlement are checked against structural tolerance requirements and clearly documented." },
    { question: "Can you peer review designs from another firm?", answer: "Absolutely. We provide independent design reviews with categorized findings (severity, code reference, resolution recommendation) and track closure status. Your EOR stays in control." },
    { question: "How do you handle value engineering without compromising safety?", answer: "Every VE proposal is quantified (material savings, schedule impact, risk assessment) and validated against code requirements. We never recommend reducing capacity below code minimums—we find efficiency within the requirements." },
];

export const ctaData = {
    headline: "Ready to Optimize Your Structures?",
    subheadline: "Tell us about your structural engineering challenges. Our team will design efficient, code-compliant solutions.",
    email: "engineering@zigron.com",
};
