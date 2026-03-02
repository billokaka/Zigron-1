// CAD Design & Drafting Service Page - Content Data

// ============================================================================
// PAGE METADATA
// ============================================================================

export const pageMetadata = {
  title: "CAD Design & Drafting Services | Zigron",
  description:
    "Professional CAD design and drafting services for construction, manufacturing, and infrastructure projects. 2D/3D modeling, BIM, and production drawings.",
  keywords: [
    "CAD design services",
    "drafting services",
    "AutoCAD",
    "Revit",
    "BIM modeling",
    "construction drawings",
    "3D modeling",
    "technical drawings",
  ],
};

// ============================================================================
// HERO SECTION
// ============================================================================

export const heroData = {
  badge: "Engineering Design",
  headline: "CAD Design &",
  headlineHighlight: "Drafting Services",
  subheadline:
    "From concept sketches to production-ready drawings—we deliver precise, code-compliant CAD documentation that keeps your projects moving.",
  primaryCta: { label: "Get a quote", href: "/contact" },
  secondaryCta: { label: "View portfolio", href: "/work" },
  trustBadges: [
    { icon: "penTool", label: "2D/3D CAD Experts", color: "orange" },
    { icon: "layers", label: "BIM Specialists", color: "blue" },
    { icon: "zap", label: "Fast Turnaround", color: "green" },
  ],
};

// ============================================================================
// ICON TYPES
// ============================================================================

export type IconName =
  | "penTool"
  | "layers"
  | "box"
  | "fileText"
  | "refresh"
  | "checkCircle"
  | "zap"
  | "shield"
  | "building"
  | "sun"
  | "factory"
  | "truck"
  | "compass"
  | "ruler"
  | "eye"
  | "settings";

// ============================================================================
// CAD CAPABILITIES
// ============================================================================

export interface CADCapability {
  iconName: IconName;
  title: string;
  description: string;
  deliverables: string[];
}

export const cadCapabilities: CADCapability[] = [
  {
    iconName: "penTool",
    title: "2D Drafting & Documentation",
    description:
      "Precise technical drawings for permits, construction, and manufacturing.",
    deliverables: [
      "Construction Document Sets",
      "Shop Drawings & Fabrication Dwgs",
      "As-Built Documentation",
      "Detail Sheets & Sections",
    ],
  },
  {
    iconName: "box",
    title: "3D Modeling & Visualization",
    description:
      "Detailed 3D models for design validation, clash detection, and stakeholder review.",
    deliverables: [
      "Solid & Surface Modeling",
      "Assembly Models",
      "Rendered Visualizations",
      "Animation & Walkthroughs",
    ],
  },
  {
    iconName: "layers",
    title: "BIM Development",
    description:
      "Information-rich building models for coordination and facility management.",
    deliverables: [
      "Revit Family Creation",
      "LOD 200-400 Models",
      "Clash Detection Reports",
      "4D/5D BIM Integration",
    ],
  },
  {
    iconName: "refresh",
    title: "Legacy Drawing Conversion",
    description:
      "Converting paper drawings and legacy formats to modern CAD/BIM standards.",
    deliverables: [
      "Paper to CAD Digitization",
      "DWG/DXF Conversion",
      "2D to 3D Model Creation",
      "Standards Migration",
    ],
  },
];

// ============================================================================
// INDUSTRY APPLICATIONS
// ============================================================================

export interface IndustryApplication {
  iconName: IconName;
  title: string;
  examples: string[];
}

export const industryApplications: IndustryApplication[] = [
  {
    iconName: "sun",
    title: "Solar & Renewable Energy",
    examples: ["Tracker system layouts", "Electrical single-lines", "Site civil plans", "Foundation details"],
  },
  {
    iconName: "building",
    title: "Commercial Construction",
    examples: ["Architectural drawings", "Structural steel details", "MEP coordination", "Tenant improvements"],
  },
  {
    iconName: "factory",
    title: "Industrial & Manufacturing",
    examples: ["Equipment layouts", "Piping & instrumentation", "Facility expansions", "Process flow diagrams"],
  },
  {
    iconName: "truck",
    title: "Infrastructure & Utilities",
    examples: ["Road profiles", "Utility corridors", "Drainage plans", "Traffic control"],
  },
];

// ============================================================================
// PROCESS STEPS
// ============================================================================

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Scope & Standards Review",
    description:
      "We review your requirements, existing drawings, and applicable standards to define the deliverable scope.",
  },
  {
    number: "02",
    title: "Drafting & Modeling",
    description:
      "Our CAD team creates drawings following your standards or industry best practices.",
  },
  {
    number: "03",
    title: "Internal QC Check",
    description:
      "Every drawing goes through our quality control process for accuracy and completeness.",
  },
  {
    number: "04",
    title: "Client Review Cycle",
    description:
      "You review the drawings and provide feedback—we incorporate revisions quickly.",
  },
  {
    number: "05",
    title: "Final Delivery & Handoff",
    description:
      "Finalized drawings delivered in your preferred formats with full documentation.",
  },
];

// ============================================================================
// TECH STACK
// ============================================================================

export interface TechCategory {
  category: string;
  tools: string[];
}

export const techStack: TechCategory[] = [
  {
    category: "2D CAD",
    tools: ["AutoCAD", "AutoCAD LT", "DraftSight", "BricsCAD"],
  },
  {
    category: "3D Modeling",
    tools: ["SolidWorks", "Inventor", "Fusion 360", "Rhino"],
  },
  {
    category: "BIM",
    tools: ["Revit", "Navisworks", "ArchiCAD", "Tekla"],
  },
  {
    category: "Civil/Site",
    tools: ["Civil 3D", "Grading Optimization", "HEC-RAS", "StormCAD"],
  },
  {
    category: "Electrical",
    tools: ["AutoCAD Electrical", "ETAP", "SKM PowerTools", "Bluebeam"],
  },
];

// ============================================================================
// DIFFERENTIATORS
// ============================================================================

export interface Differentiator {
  iconName: IconName;
  title: string;
  description: string;
}

export const differentiators: Differentiator[] = [
  {
    iconName: "zap",
    title: "Fast Turnaround",
    description:
      "Multiple shifts and a deep bench allow us to meet aggressive deadlines without sacrificing quality.",
  },
  {
    iconName: "ruler",
    title: "Standards Compliance",
    description:
      "We work to your CAD standards or industry standards (ASME, ISO, NEC, IBC) as required.",
  },
  {
    iconName: "eye",
    title: "Rigorous QC Process",
    description:
      "Every deliverable goes through a multi-point quality check before client review.",
  },
  {
    iconName: "settings",
    title: "Flexible Scaling",
    description:
      "Scale up or down based on project needs—from single drawings to large-volume programs.",
  },
];

// ============================================================================
// SAMPLE PROJECTS
// ============================================================================

export interface SampleProject {
  title: string;
  scope: string;
  deliverables: string;
  turnaround: string;
}

export const sampleProjects: SampleProject[] = [
  {
    title: "500MW Solar Farm Permit Set",
    scope: "Full construction document package for utility-scale solar installation.",
    deliverables: "180 sheets including civil, structural, and electrical drawings.",
    turnaround: "6 weeks from kickoff to IFC release.",
  },
  {
    title: "Manufacturing Facility Expansion",
    scope: "Equipment layout and structural modifications for production line addition.",
    deliverables: "3D model, shop drawings, and as-built documentation.",
    turnaround: "4 weeks for design, ongoing as-builts during construction.",
  },
  {
    title: "Multi-Site Retail Rollout",
    scope: "Standardized design package adapted for 50+ locations.",
    deliverables: "Template drawings with site-specific customization per location.",
    turnaround: "2-3 days per site after template establishment.",
  },
];

// ============================================================================
// FAQs
// ============================================================================

export interface FAQ {
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    question: "What CAD formats do you deliver?",
    answer:
      "We deliver in whatever format you need—DWG, DXF, PDF, RVT, NWC, STEP, IGES, and more. We can also match your layer standards and title block requirements.",
  },
  {
    question: "Can you work from our existing CAD standards?",
    answer:
      "Yes. We regularly adopt client CAD standards including layer naming, dimension styles, title blocks, and file naming conventions. We can also help you develop standards if needed.",
  },
  {
    question: "What's your typical turnaround time?",
    answer:
      "It depends on scope and complexity. Simple drawings can be completed in days, while full permit sets typically take weeks. We provide detailed timelines during scoping and offer expedited options.",
  },
  {
    question: "Do you do field verification and as-builts?",
    answer:
      "Yes. We can coordinate field surveys using laser scanning, total stations, or drone photogrammetry. We then produce accurate as-built drawings reflecting actual site conditions.",
  },
  {
    question: "How do you handle revisions and markups?",
    answer:
      "We use Bluebeam and similar tools for efficient markup review. Revisions are tracked with revision clouds and tables. We typically include 2-3 revision cycles in our scope.",
  },
];

// ============================================================================
// CTA SECTION
// ============================================================================

export const ctaData = {
  headline: "Need CAD Support for Your Project?",
  subheadline:
    "Tell us about your drawing requirements and we'll provide a quote with timeline.",
  email: "cad@zigron.com",
};
