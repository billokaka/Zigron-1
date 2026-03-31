// Vulnerability Assessment & Penetration Testing - Content Data

export const pageMetadata = {
    title: "Vulnerability Assessment & Penetration Testing | Zigron",
    description: "Network, web app, and IoT penetration testing. Red team exercises, compliance audits, and security certification for connected products.",
};

export type IconName = "cpu" | "microchip" | "wifi" | "battery" | "code" | "server" | "layers" | "zap" | "shield" | "bluetooth" | "settings" | "activity" | "thermometer" | "radio" | "box" | "terminal" | "database" | "globe" | "cloud" | "lock" | "users" | "signal" | "router" | "satellite";

// ============================================================================
// HERO SECTION
// ============================================================================

export const heroData = {
    badge: "Offensive Security",
    headline: "Find Weaknesses.",
    headlineHighlight: "Before Attackers Do.",
    subheadline: "Network, web application, and IoT device penetration testing with detailed remediation guidance and compliance-ready reporting.",
    primaryCta: { label: "Request a Pen Test", href: "/contact" },
    secondaryCta: { label: "View Tech Stack", href: "#tech-stack" },
    trustBadges: [
        { icon: "shield", label: "OWASP Methodology", color: "blue" },
        { icon: "terminal", label: "Red Team Operations", color: "green" },
        { icon: "lock", label: "Compliance Reports", color: "purple" },
    ],
};

// ============================================================================
// BEST-FIT CUSTOMERS
// ============================================================================

export interface BestFitCustomer {
    title: string;
    description: string;
}

export const bestFitCustomers: BestFitCustomer[] = [
    {
        title: "Pre-Launch Products",
        description: "Companies preparing for product launch needing security validation before going to market.",
    },
    {
        title: "Compliance-Driven Organizations",
        description: "Businesses requiring annual pen tests for PCI-DSS, SOC 2, HIPAA, or ISO 27001 compliance.",
    },
    {
        title: "IoT Device Manufacturers",
        description: "OEMs seeking security certification (PSA, ETSI EN 303 645) for connected products.",
    },
];

// ============================================================================
// INPUTS REQUIRED
// ============================================================================

export interface InputRequired {
    iconName: IconName;
    title: string;
    description: string;
}

export const inputsRequired: InputRequired[] = [
    {
        iconName: "globe",
        title: "Scope Definition",
        description: "Target systems, IP ranges, application URLs, device models, and rules of engagement.",
    },
    {
        iconName: "shield",
        title: "Compliance Context",
        description: "Required compliance frameworks, previous findings, risk appetite, and reporting format needs.",
    },
];

// ============================================================================
// KPIs
// ============================================================================

export interface KPI {
    metric: string;
    description: string;
}

export const kpis: KPI[] = [
    { metric: "Critical Findings", description: "Number of critical/high vulnerabilities discovered" },
    { metric: "Exploitation Success", description: "Percentage of identified vulnerabilities successfully exploited" },
    { metric: "Remediation Rate", description: "Percentage of findings fixed within SLA" },
    { metric: "Retest Pass Rate", description: "Previously found vulnerabilities confirmed resolved" },
    { metric: "Coverage Depth", description: "Attack surface percentage tested against scope" },
];

// ============================================================================
// ACCEPTANCE CRITERIA
// ============================================================================

export const acceptanceCriteria: string[] = [
    "All in-scope systems tested with documented methodology and evidence",
    "Executive summary and technical report delivered within 5 business days",
    "Remediation retest completed within 30 days of fix deployment",
];

// ============================================================================
// SECURITY CONSIDERATIONS
// ============================================================================

export interface SecurityConsideration {
    iconName: IconName;
    title: string;
    description: string;
}

export const securityConsiderations: SecurityConsideration[] = [
    {
        iconName: "shield",
        title: "Safe Testing Protocols",
        description: "Non-destructive testing methodologies with rollback plans and production safeguards.",
    },
    {
        iconName: "lock",
        title: "Secure Report Handling",
        description: "PGP-encrypted report delivery with findings classified by CVSS severity.",
    },
    {
        iconName: "settings",
        title: "Responsible Disclosure",
        description: "Coordinated disclosure for zero-day findings with vendor notification timelines.",
    },
];

// ============================================================================
// DELIVERABLES
// ============================================================================

export interface Deliverable {
    iconName: IconName;
    title: string;
    description: string;
}

export const deliverables: Deliverable[] = [
    {
        iconName: "globe",
        title: "Network Penetration Testing",
        description: "External and internal network assessments covering firewall bypass, lateral movement, privilege escalation, and Active Directory attacks.",
    },
    {
        iconName: "code",
        title: "Web Application Testing",
        description: "OWASP Top 10 and beyond: injection, authentication bypass, business logic flaws, API security, and session management vulnerabilities.",
    },
    {
        iconName: "cpu",
        title: "IoT Device Testing",
        description: "Firmware extraction, hardware debug port analysis, RF protocol fuzzing, and cloud API security testing for connected products.",
    },
    {
        iconName: "users",
        title: "Social Engineering",
        description: "Phishing campaigns, vishing, physical security assessments, and security awareness benchmarking with employee-specific metrics.",
    },
    {
        iconName: "terminal",
        title: "Red Team Exercises",
        description: "Objective-based adversary simulation using real-world TTPs (MITRE ATT&CK), testing detection and response capabilities end-to-end.",
    },
    {
        iconName: "shield",
        title: "Compliance Pen Test Reports",
        description: "PCI-DSS, SOC 2, HIPAA, and ISO 27001 compliant reports with evidence packages, CVSS scoring, and remediation prioritization.",
    },
];

// ============================================================================
// USE CASES
// ============================================================================

export interface UseCase {
    title: string;
    problem: string;
    solution: string;
    outcome: string;
}

export const useCases: UseCase[] = [
    {
        title: "Pre-Launch Security Audit",
        problem: "SaaS platform launching in 6 weeks with no security testing performed on the application or infrastructure.",
        solution: "Performed web app pen test, API security review, cloud infrastructure assessment, and provided prioritized fix list.",
        outcome: "12 critical findings fixed before launch."
    },
    {
        title: "Annual Compliance Pen Test",
        problem: "PCI-DSS annual requirement for network pen test with previous vendor missing critical findings.",
        solution: "Comprehensive internal/external network pen test with AD attack paths, segmentation validation, and cardholder data exposure testing.",
        outcome: "PCI-DSS v4.0 attestation achieved."
    },
    {
        title: "IoT Device Security Certification",
        problem: "Smart thermostat OEM needs ETSI EN 303 645 certification for European market entry.",
        solution: "Full device pen test: firmware extraction, BLE protocol fuzzing, cloud API testing, and OTA update integrity verification.",
        outcome: "ETSI certified, zero residual critical findings."
    }
];

// ============================================================================
// PROCESS STEPS
// ============================================================================

export interface ProcessStep {
    iconName: IconName;
    title: string;
    description: string;
}

export const processSteps: ProcessStep[] = [
    {
        iconName: "activity",
        title: "Scoping",
        description: "Define targets & rules."
    },
    {
        iconName: "globe",
        title: "Reconnaissance",
        description: "OSINT & enumeration."
    },
    {
        iconName: "terminal",
        title: "Exploitation",
        description: "Vulnerability validation."
    },
    {
        iconName: "shield",
        title: "Reporting",
        description: "Findings & remediation."
    },
    {
        iconName: "settings",
        title: "Retest",
        description: "Verify fixes applied."
    }
];

// ============================================================================
// ARCHITECTURE LAYERS
// ============================================================================

export interface ArchitectureLayer {
    iconName: IconName;
    title: string;
    subtitle: string;
}

export const architectureLayers: ArchitectureLayer[] = [
    { iconName: "globe", title: "External", subtitle: "Perimeter & DNS" },
    { iconName: "router", title: "Network", subtitle: "Internal & Lateral" },
    { iconName: "code", title: "Application", subtitle: "Web & API" },
    { iconName: "cpu", title: "Device", subtitle: "Firmware & Hardware" },
];

// ============================================================================
// TECHNICAL PILLARS
// ============================================================================

export interface TechnicalPillar {
    iconName: IconName;
    title: string;
    description: string;
    color: "blue" | "green" | "red" | "purple";
}

export const technicalPillars: TechnicalPillar[] = [
    {
        iconName: "globe",
        title: "Recon",
        description: "Attack surface mapping.",
        color: "blue",
    },
    {
        iconName: "terminal",
        title: "Exploit",
        description: "Vulnerability validation.",
        color: "green",
    },
    {
        iconName: "shield",
        title: "Report",
        description: "CVSS-scored findings.",
        color: "red",
    },
    {
        iconName: "settings",
        title: "Verify",
        description: "Remediation retest.",
        color: "purple",
    },
];

// ============================================================================
// TECH STACK
// ============================================================================

export interface TechCategory {
    category: string;
    technologies: string[];
}

export const techStack: TechCategory[] = [
    {
        category: "Web & Application",
        technologies: ["Burp Suite Pro", "OWASP ZAP", "Nuclei", "SQLMap", "Nikto", "ffuf"]
    },
    {
        category: "Network & Infrastructure",
        technologies: ["Metasploit", "Nessus", "Nmap", "Cobalt Strike", "BloodHound", "Kali Linux"]
    },
    {
        category: "IoT & Hardware",
        technologies: ["Ghidra", "Binwalk", "JTAG/SWD Debuggers", "HackRF", "Logic Analyzers", "Bus Pirate"]
    }
];

// ============================================================================
// CASE STUDIES
// ============================================================================

export interface CaseStudy {
    image: string;
    category: string;
    title: string;
    services: string;
    result: string;
    href: string;
}

export const caseStudies: CaseStudy[] = [
    {
        image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800\&q=80",
        category: "Consumer IoT",
        title: "Scaling Abode's Smart Security to Millions",
        services: "Serverless AWS, Firmware Optimization",
        result: "99.99% uptime \& 50% infrastructure cost reduction.",
        href: "/work/abode-smart-home"
    },
    {
        image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800\&q=80",
        category: "Industrial IoT",
        title: "Automating TerraSmart Solar Installation",
        services: "GPS Rovers, Mobile App, Field Deployment",
        result: "30% faster field deployment speed.",
        href: "/work/terrasmart-solar"
    },
    {
        image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800\&q=80",
        category: "AI + IoT",
        title: "AI-Driven Solar Tracking Optimization",
        services: "Machine Learning, Edge AI, Energy",
        result: "+12% energy generation boost.",
        href: "/work/terratrak-ai"
    }
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
        question: "Will a pen test disrupt our production systems?",
        answer: "We use non-destructive testing techniques by default. Before testing, we agree on rules of engagement that define which systems can be tested and how. For production environments, we avoid denial-of-service attacks and use rate-limited scanning. Critical exploitation is performed on staging when possible."
    },
    {
        question: "How is a pen test different from a vulnerability scan?",
        answer: "A vulnerability scan is automated and finds known vulnerabilities. A penetration test goes further: our engineers manually attempt to exploit vulnerabilities, chain them together, test business logic, and simulate real-world attack scenarios. Pen tests find what scanners miss, including misconfigurations, logic flaws, and chained attack paths."
    },
    {
        question: "What compliance frameworks require penetration testing?",
        answer: "PCI-DSS requires annual pen tests (Requirement 11.4). SOC 2 expects regular security assessments. HIPAA requires risk assessments including technical testing. ISO 27001 requires vulnerability management. Many cyber insurance policies also require annual pen tests as a coverage condition."
    }
];

export const ctaData = {
    headline: "Test Your Defenses.",
    subheadline: "Find and fix vulnerabilities before attackers exploit them.",
    email: "pentest@zigron.com",
};
