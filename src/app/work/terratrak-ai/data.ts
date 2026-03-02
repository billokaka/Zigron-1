// TerraTrak AI Solar Tracking - Case Study Data
// Sourced from Knowledge Doc: WORK_CASE_STUDIES.md Section 3

export const pageMetadata = {
    title: "TerraTrak AI Solar Tracking | Case Study | Zigron",
    description:
        "How Zigron built an AI-powered solar tracking system that increased energy capture by 15% and reduced mechanical failure by 20% through SCADA integration and ML optimization.",
    keywords: [
        "TerraTrak",
        "solar tracking",
        "AI case study",
        "IoT SCADA",
        "predictive maintenance",
        "solar energy AI",
        "tracker optimization",
    ],
};

export const heroData = {
    breadcrumb: [
        { label: "Work", href: "/work" },
        { label: "Energy", href: "/industries/energy" },
        { label: "TerraTrak", href: null },
    ],
    title: "TerraTrak AI Solar Tracking System",
    subtitle:
        "Building AI + SCADA-connected tracking intelligence that improves solar yield by 15% while lowering downtime—paired with structural engineering collaboration.",
    tags: ["AI & ML", "SCADA Integration", "IoT Embedded", "Renewable Energy"],
    stats: [
        { value: "+15%", label: "Energy Capture" },
        { value: "-20%", label: "Mechanical Failure" },
    ],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDlyxDAKz3Gi7EaPPtlL9m5qLDxn1tyDfrU_SfIXJ8GQmRUk4XXHdNJrom4bXAjKV5ECAdLdydR2YKQxqJMIku3KT9TKJRQ3vQpFso2tfowdet_PKuCrie1MeOqbijUBQQ5wjduLtvmBlA--QisgpWrQTiVm2IYSW9zr8Rmj23bjQM8wSRm61dwXAXlONSlvzfIO429U5nUY-oXZ-COjJuQ1cecaCCnDXRxtHiq0OUr5QOlcztIIYQOpxviuRGbO9a30SgUt2YWMO4",
};

export const overviewData = {
    challenge: {
        title: "The Challenge",
        description:
            "Solar trackers relied on static algorithms that couldn't adapt to real-time weather changes, resulting in suboptimal panel angles, mechanical stress, and lost energy yield. Operators lacked fleet-level visibility into tracker health.",
    },
    solution: {
        title: "What We Built",
        description:
            "Zigron delivered a complete AI + IoT solution: an autonomous decision-support engine fusing tracker telemetry with weather and inverter data, embedded IoT SDKs on controllers, bidirectional SCADA communication, and a central dashboard for fleet visualization.",
    },
    results: {
        title: "The Results",
        description:
            "Energy capture efficiency increased 15%, mechanical failure and downtime dropped 20%, and sub-minute alignment adjustments became possible in dynamic weather. Material usage was reduced 20% through structural optimization.",
    },
};

export const contextData = {
    paragraphs: [
        "Solar tracker systems operate in extreme environments where weather conditions change rapidly. Static tracking algorithms miss significant energy capture opportunities and cause unnecessary mechanical wear on tracker components.",
        "The challenge required deep integration across multiple domains: AI/ML for optimization, industrial IoT for controller communication, SCADA for command and control, and structural/mechanical engineering for load analysis and response tuning.",
        "The system needed to be reliable enough for unmanned solar sites. Faults in tracking logic could damage equipment or cause safety events, requiring rigorous validation and fail-safe design across the entire stack.",
    ],
    constraints: [
        {
            icon: "cpu",
            title: "Multi-Domain Integration",
            description: "AI, IoT, SCADA, and structural engineering under one system.",
        },
        {
            icon: "wifi",
            title: "Industrial Protocols",
            description: "Modbus RTU, MQTT, LoRaWAN, and LTE connectivity options.",
        },
        {
            icon: "shield",
            title: "Safety-Critical",
            description: "Fail-safe design for unmanned sites with wind and mechanical loads.",
        },
    ],
};

export const architectureData = {
    layers: [
        { icon: "cpu", title: "Controllers", subtitle: "Embedded IoT SDK", status: "active" },
        { icon: "server", title: "SCADA Layer", subtitle: "Modbus / MQTT", status: "normal" },
        { icon: "cloud", title: "AI Platform", subtitle: "ML Optimization", status: "highlighted" },
    ],
    features: [
        {
            icon: "brain",
            title: "AI Optimization Engine",
            description: "Autonomous decision support for tracker alignment using weather + telemetry fusion.",
        },
        {
            icon: "zap",
            title: "Real-Time Fault Detection",
            description: "Bidirectional SCADA communication with instant alerting and commands.",
        },
        {
            icon: "cloud",
            title: "Secure OTA Updates",
            description: "Signed firmware updates via REST/GraphQL API for OEM integration.",
        },
        {
            icon: "shield",
            title: "Structural Optimization",
            description: "Wind-tunnel data integration for mechanical response and load reduction.",
        },
    ],
    approach:
        "The AI engine fuses three data streams—tracker sensor telemetry, weather/irradiance data, and inverter output—to compute optimal alignment in real-time. Controllers run embedded IoT SDKs communicating via Modbus RTU and MQTT. The SCADA layer enables bidirectional commands with fail-safe logic, while the structural team integrated geotechnical modeling and wind-tunnel analysis to optimize mechanical response.",
    techStack: ["Python/ML", "Modbus RTU", "MQTT", "LoRaWAN", "AWS SageMaker", "GraphQL"],
};

export interface TimelinePhase {
    title: string;
    duration: string;
    description: string;
    active: boolean;
}

export const timeline: TimelinePhase[] = [
    {
        title: "Phase 1: Data Fusion & AI Architecture",
        duration: "6 Weeks",
        description:
            "Sensor telemetry mapping, weather data integration, and AI engine architecture. Initial ML model training on historical tracker data.",
        active: true,
    },
    {
        title: "Phase 2: IoT & SCADA Integration",
        duration: "10 Weeks",
        description:
            "Embedded IoT SDK development, Modbus/MQTT protocol implementation, and bidirectional SCADA communication layer.",
        active: false,
    },
    {
        title: "Phase 3: Structural Collaboration",
        duration: "8 Weeks",
        description:
            "Foundation analysis, geotechnical modeling, wind-tunnel data integration, and mechanical response optimization.",
        active: false,
    },
    {
        title: "Phase 4: Fleet Deployment",
        duration: "Ongoing",
        description: "OTA firmware rollout, central dashboard deployment, and continuous ML model improvement across fleet.",
        active: false,
    },
];

export const securityNote = {
    title: "Industrial Safety & Reliability",
    description:
        "The system implements fail-safe logic at every layer: controller-level safety limits, SCADA watchdog timers, and cloud-side anomaly detection. OTA firmware updates are signed with staged rollout and automatic rollback on anomalies.",
};

export interface ImpactMetric {
    value: string;
    label: string;
}

export const impactMetrics: ImpactMetric[] = [
    { value: "+15%", label: "Energy Capture Efficiency" },
    { value: "-20%", label: "Mechanical Failure & Downtime" },
    { value: "-20%", label: "Material Usage Reduction" },
    { value: "<1min", label: "Dynamic Alignment Adjustments" },
];

export const futureData = {
    title: "Next-Generation Intelligence",
    description:
        "The AI engine continues to learn from fleet-wide data, improving optimization accuracy over time. Future capabilities include autonomous tracker fleet management, predictive component replacement, and integration with energy storage systems for holistic solar site optimization.",
};

export const relatedCaseStudies = [
    {
        title: "TerraSmart Solar OEM",
        category: "IoT Engineering",
        description: "Ruggedized IoT for solar field automation.",
        href: "/work/terrasmart-solar",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDFxP4LyvJAT9yT5pc9f_d268gtjP1_-5_ZrJqRS3oQvg1iNx1sWEcAkYSaWZG9FEVrqA4FSPls-rRMtKuueE_F5FECR-xgFB2S9S5VEHhHWvKVnV7vVEqO7rFT0FbI7iKGoWQCdwy504ytJ75DP-Zf1u5x5nDgAmDT4_lbFzXhIU5wvrYNPZaamUUJ3bmgD-vm7Cd1PaKP77sFF9y4jE3N42Kgg-NbGOdQC7OREwQ58_pZsE0e3gwUvx90PlZ2VEYYaiDsvCaYQnM",
    },
    {
        title: "Abode Smart Home Security",
        category: "IoT Platform",
        description: "Scaling consumer IoT to 1M+ devices.",
        href: "/work/abode-smart-home",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuChO7UnQXffsjMvnP7gYJ7ADAmWDnksq9kVx3Js-O8HvxO85SA7rpZtFWhDx1c2-kDDnNJQG_bX5H8sP1jxVpSE74SvbKK6PdCXTf0_WTCLpudIr8RDf81pwAjUwh7K6ivHeUHUympUDoZZ5J9CneA1uQrlZisZfZ3Y5rWALFzwSryT4_TAm_mMyLladIAvB74F1gdFwacsYli22e7sFpek86rARkJn_np55PcL9kw4fNlNLuBHc9zVBNvfTuXUOAzZc-PWdvSgVaM",
    },
];

export const relatedLinks = [
    {
        title: "Smart Energy Solutions",
        description: "Solar monitoring & optimization",
        href: "/solutions/smart-energy-solar",
    },
    {
        title: "Energy Industry",
        description: "Solutions for energy operators",
        href: "/industries/energy",
    },
];

export const ctaData = {
    title: "Ready to Optimize Your Energy Assets?",
    subtitle:
        "Whether you need AI-driven tracker optimization or a custom energy platform, our team is ready to scope your challenge.",
    formTitle: "Discuss this project",
    placeholder: "I'm interested in AI-driven solar optimization...",
};
