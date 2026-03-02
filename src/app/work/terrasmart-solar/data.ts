// TerraSmart Solar Case Study - Content Data

// ============================================================================
// PAGE METADATA
// ============================================================================

export const pageMetadata = {
  title: "TerraSmart Solar OEM Optimization | Case Study | Zigron",
  description:
    "How Zigron helped TerraSmart achieve 30% faster solar installation through custom IoT hardware and automated tracking systems.",
  keywords: [
    "TerraSmart",
    "solar installation",
    "IoT case study",
    "GPS tracking",
    "renewable energy",
    "solar OEM",
    "field automation",
  ],
};

// ============================================================================
// HERO SECTION
// ============================================================================

export const heroData = {
  breadcrumb: [
    { label: "Work", href: "/work" },
    { label: "Energy", href: "/industries/energy" },
    { label: "TerraSmart", href: null },
  ],
  title: "TerraSmart Solar OEM Optimization",
  subtitle:
    "Achieving a 30% increase in field installation efficiency through custom IoT hardware and automated tracking.",
  tags: ["Renewable Energy", "IoT Engineering", "Cloud Analytics"],
  stats: [
    { value: "5MW+", label: "Site Capacity" },
    { value: "50k", label: "Sensors Deployed" },
  ],
  image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDFxP4LyvJAT9yT5pc9f_d268gtjP1_-5_ZrJqRS3oQvg1iNx1sWEcAkYSaWZG9FEVrqA4FSPls-rRMtKuueE_F5FECR-xgFB2S9S5VEHhHWvKVnV7vVEqO7rFT0FbI7iKGoWQCdwy504ytJ75DP-Zf1u5x5nDgAmDT4_lbFzXhIU5wvrYNPZaamUUJ3bmgD-vm7Cd1PaKP77sFF9y4jE3N42Kgg-NbGOdQC7OREwQ58_pZsE0e3gwUvx90PlZ2VEYYaiDsvCaYQnM",
};

// ============================================================================
// OVERVIEW
// ============================================================================

export const overviewData = {
  challenge: {
    title: "The Challenge",
    description:
      "TerraSmart faced spiraling labor costs due to manual surveying and alignment of solar piles in difficult terrains. Existing GPS solutions were too slow and lacked the precision needed for automated workflows, causing installation bottlenecks.",
  },
  solution: {
    title: "What We Built",
    description:
      "We engineered a ruggedized IoT sensor ecosystem capable of sub-centimeter accuracy. This system integrates directly with installation machinery, feeding real-time geospatial data to a cloud dashboard for automated alignment and tracking.",
  },
  results: {
    title: "The Results",
    description:
      "The solution reduced survey time by 45% and improved overall installation speed by 30%. Manual errors were virtually eliminated, and project managers gained unprecedented real-time visibility into site progress from anywhere in the world.",
  },
};

// ============================================================================
// CONTEXT & COMPLEXITY
// ============================================================================

export const contextData = {
  paragraphs: [
    "Solar farms are often situated in hostile environments—remote deserts with extreme temperatures, dust storms, and zero cellular connectivity. Standard consumer-grade electronics fail within days.",
    "The user base consisted of field technicians operating heavy machinery who needed a system that was \"grab-and-go\" simple. The interface had to be legible in bright sunlight and responsive despite high latency or intermittent connectivity.",
    "Furthermore, security was paramount. The system transmits proprietary geospatial data that constitutes the client's competitive advantage. Any data leak or system downtime would directly translate to millions in stalled construction costs.",
  ],
  constraints: [
    {
      icon: "sun",
      title: "Extreme Environment",
      description: "Operating range -20°C to +60°C, IP67 dust/water resistance required.",
    },
    {
      icon: "wifi",
      title: "Connectivity",
      description: "No reliance on public cellular/WiFi. Must use localized mesh network.",
    },
    {
      icon: "building",
      title: "Precision Hardware",
      description: "Hardware tolerances within 2mm for pile driving alignment.",
    },
  ],
};

// ============================================================================
// SOLUTION ARCHITECTURE
// ============================================================================

export const architectureData = {
  layers: [
    { icon: "smartphone", title: "Edge Devices", subtitle: "RTK GPS & Sensors", status: "active" },
    { icon: "server", title: "Local Gateway", subtitle: "LoRaWAN Mesh", status: "normal" },
    { icon: "cloud", title: "Cloud Platform", subtitle: "AWS IoT Core", status: "highlighted" },
  ],
  features: [
    {
      icon: "zap",
      title: "Offline-First Architecture",
      description: "Local data caching ensures zero data loss during connectivity blackouts.",
    },
    {
      icon: "map",
      title: "RTK Positioning Engine",
      description: "Custom algorithms delivering 1-2cm precision for pile placement.",
    },
    {
      icon: "fileText",
      title: "Automated QA Reporting",
      description: "Instant generation of as-built reports replacing manual data entry.",
    },
    {
      icon: "battery",
      title: "Adaptive Power Management",
      description: "Solar-assisted battery life extension for 24/7 operation.",
    },
  ],
  approach:
    "We moved beyond standard off-the-shelf components, designing custom PCBs to handle the vibration and thermal loads of the construction machinery. The firmware was written in bare-metal C++ for maximum efficiency, while the cloud backend utilized serverless AWS architecture to scale automatically with the number of active construction sites.",
  techStack: ["C++", "AWS IoT Core", "LoRaWAN", "React Native", "DynamoDB"],
};

// ============================================================================
// TIMELINE
// ============================================================================

export interface TimelinePhase {
  title: string;
  duration: string;
  description: string;
  active: boolean;
}

export const timeline: TimelinePhase[] = [
  {
    title: "Phase 1: Discovery & Prototyping",
    duration: "4 Weeks",
    description:
      "Site analysis, requirements gathering, and rapid 3D printing of enclosure concepts. Initial LoRa range testing.",
    active: true,
  },
  {
    title: "Phase 2: Hardware Engineering & Firmware",
    duration: "12 Weeks",
    description:
      "Custom PCB design, fabrication, and rigorous thermal testing. Firmware development for RTK positioning.",
    active: false,
  },
  {
    title: "Phase 3: Field Validation",
    duration: "6 Weeks",
    description:
      "Deployment of 50 pilot units at a live site in Nevada. QA loops to refine UI based on technician feedback.",
    active: false,
  },
  {
    title: "Phase 4: Full Scale Rollout",
    duration: "Ongoing",
    description: "Production manufacturing and deployment to 12 global sites.",
    active: false,
  },
];

export const securityNote = {
  title: "Security & QA Assurance",
  description:
    "Zigron implemented device-level X.509 certificates for authentication and AES-256 encryption for all data in transit. The system underwent third-party penetration testing before Phase 3 release.",
};

// ============================================================================
// IMPACT METRICS
// ============================================================================

export interface ImpactMetric {
  value: string;
  label: string;
}

export const impactMetrics: ImpactMetric[] = [
  { value: "30%", label: "Improvement in Installation Speed" },
  { value: "45%", label: "Reduction in Surveying Labor" },
  { value: "<12mo", label: "Return on Investment (ROI)" },
  { value: "99.9%", label: "System Uptime in Extreme Heat" },
];

// ============================================================================
// FUTURE / SCALABILITY
// ============================================================================

export const futureData = {
  title: "Scalability & The Future",
  description:
    "The platform's success has opened the door for fully autonomous installation robots. The current IoT infrastructure serves as the data backbone, enabling future integration of AI-driven rovers that can navigate the site using the existing precision mesh network. Zigron is currently prototyping the next generation of these autonomous agents.",
};

// ============================================================================
// RELATED CONTENT
// ============================================================================

export const relatedCaseStudies = [
  {
    title: "Abode Smart Home Security",
    category: "IoT Platform",
    description: "Scaling consumer IoT to millions of users.",
    href: "/work/abode-smart-home",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuChO7UnQXffsjMvnP7gYJ7ADAmWDnksq9kVx3Js-O8HvxO85SA7rpZtFWhDx1c2-kDDnNJQG_bX5H8sP1jxVpSE74SvbKK6PdCXTf0_WTCLpudIr8RDf81pwAjUwh7K6ivHeUHUympUDoZZ5J9CneA1uQrlZisZfZ3Y5rWALFzwSryT4_TAm_mMyLladIAvB74F1gdFwacsYli22e7sFpek86rARkJn_np55PcL9kw4fNlNLuBHc9zVBNvfTuXUOAzZc-PWdvSgVaM",
  },
  {
    title: "TerraTrak AI Solar Tracking",
    category: "AI Systems",
    description: "Machine learning for energy maximization.",
    href: "/work/terratrak-ai",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDlyxDAKz3Gi7EaPPtlL9m5qLDxn1tyDfrU_SfIXJ8GQmRUk4XXHdNJrom4bXAjKV5ECAdLdydR2YKQxqJMIku3KT9TKJRQ3vQpFso2tfowdet_PKuCrie1MeOqbijUBQQ5wjduLtvmBlA--QisgpWrQTiVm2IYSW9zr8Rmj23bjQM8wSRm61dwXAXlONSlvzfIO429U5nUY-oXZ-COjJuQ1cecaCCnDXRxtHiq0OUr5QOlcztIIYQOpxviuRGbO9a30SgUt2YWMO4",
  },
];

export const relatedLinks = [
  {
    title: "Explore IoT Services",
    description: "End-to-end firmware & cloud",
    href: "/services/iot",
  },
  {
    title: "Energy Industry Solutions",
    description: "Tailored for Oil, Gas & Solar",
    href: "/industries/energy",
  },
];

// ============================================================================
// CTA
// ============================================================================

export const ctaData = {
  title: "Ready to Engineer Your Success?",
  subtitle:
    "Whether you need a similar solution or a completely custom build, our team is ready to scope your challenge.",
  formTitle: "Discuss this project",
  placeholder: "I'm interested in a solution similar to TerraSmart...",
};
