// Abode Smart Home Security - Case Study Data
// Sourced from Knowledge Doc: WORK_CASE_STUDIES.md Section 1

export const pageMetadata = {
    title: "Abode Smart Home Security | Case Study | Zigron",
    description:
        "How Zigron engineered and scaled Abode's smart home IoT ecosystem to 1M+ devices with 99.99% uptime, real-time video, and multi-ecosystem integrations.",
    keywords: [
        "Abode",
        "smart home",
        "IoT case study",
        "device management",
        "AWS IoT",
        "home security",
        "consumer IoT",
    ],
};

export const heroData = {
    breadcrumb: [
        { label: "Work", href: "/work" },
        { label: "Smart Home", href: "/industries/smart-home" },
        { label: "Abode", href: null },
    ],
    title: "Abode Smart Home Security Platform",
    subtitle:
        "Engineering a production-grade IoT ecosystem serving 1M+ devices with real-time video, multi-ecosystem integration, and 99.99% uptime.",
    tags: ["Consumer IoT", "Cloud Platform", "DevOps", "Video Streaming"],
    stats: [
        { value: "1M+", label: "Active Devices" },
        { value: "99.99%", label: "Platform Uptime" },
    ],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuChO7UnQXffsjMvnP7gYJ7ADAmWDnksq9kVx3Js-O8HvxO85SA7rpZtFWhDx1c2-kDDnNJQG_bX5H8sP1jxVpSE74SvbKK6PdCXTf0_WTCLpudIr8RDf81pwAjUwh7K6ivHeUHUympUDoZZ5J9CneA1uQrlZisZfZ3Y5rWALFzwSryT4_TAm_mMyLladIAvB74F1gdFwacsYli22e7sFpek86rARkJn_np55PcL9kw4fNlNLuBHc9zVBNvfTuXUOAzZc-PWdvSgVaM",
};

export const overviewData = {
    challenge: {
        title: "The Challenge",
        description:
            "Abode Systems needed to scale their smart home security platform from an initial device fleet to over a million connected devices—while maintaining sub-second responsiveness, real-time video streaming, and integrations with Alexa, Google Home, and Apple HomeKit.",
    },
    solution: {
        title: "What We Built",
        description:
            "As a core technology partner, Zigron engineered the complete IoT platform: device connection and authentication, digital twin state synchronization, cloud infrastructure, CI/CD pipelines, real-time video via AWS Kinesis, and multi-ecosystem smart assistant integrations.",
    },
    results: {
        title: "The Results",
        description:
            "The platform scaled from 300K to 1M+ active devices with 99.99% uptime. Deployment-related bugs dropped 35%, video streaming latency stayed under 300ms, and the team shipped weekly with zero-downtime releases.",
    },
};

export const contextData = {
    paragraphs: [
        "Smart home security is one of the most demanding consumer IoT verticals. Users expect instant response to alarms, flawless video streaming, and seamless voice assistant integration—all with zero tolerance for downtime.",
        "The system had to support a heterogeneous fleet of sensors, cameras, keypads, and hubs communicating over Z-Wave, Zigbee, and Wi-Fi. Each device type required unique onboarding flows, OTA update pipelines, and state synchronization logic.",
        "Security was non-negotiable. The platform stores sensitive user data (video, alarm events, access patterns) and controls physical locks and alarm systems. Any breach or service disruption would directly impact customer safety and brand trust.",
    ],
    constraints: [
        {
            icon: "shield",
            title: "Security-First Architecture",
            description: "IAM least privilege, GuardDuty, CloudTrail audit logging for every action.",
        },
        {
            icon: "video",
            title: "Real-Time Video",
            description: "Sub-300ms latency streaming via Kinesis Video Streams at fleet scale.",
        },
        {
            icon: "smartphone",
            title: "Multi-Ecosystem",
            description: "Certified integrations with Alexa, Google Home, and Apple HomeKit.",
        },
    ],
};

export const architectureData = {
    layers: [
        { icon: "smartphone", title: "IoT Devices", subtitle: "Sensors & Cameras", status: "active" },
        { icon: "server", title: "AWS IoT Core", subtitle: "Device Shadows", status: "normal" },
        { icon: "cloud", title: "Cloud Platform", subtitle: "Lambda & APIs", status: "highlighted" },
    ],
    features: [
        {
            icon: "zap",
            title: "Digital Twin System",
            description: "Two-way device shadow synchronization for real-time state management.",
        },
        {
            icon: "video",
            title: "Kinesis Video Streams",
            description: "AWS Rekognition-powered event recognition with sub-300ms latency.",
        },
        {
            icon: "shield",
            title: "DevSecOps Pipeline",
            description: "Security checks integrated into CI/CD: Inspector, Config, GuardDuty.",
        },
        {
            icon: "cloud",
            title: "Multi-Region Scalability",
            description: "Serverless architecture on Lambda/S3 scaling to 1M+ devices.",
        },
    ],
    approach:
        "We architected the platform on AWS with a serverless-first approach—Lambda functions for API logic, DynamoDB for device state, and Kinesis for real-time event streaming. The CI/CD pipeline combined Jenkins with AWS CodePipeline and integrated security scanning at every stage. Infrastructure as Code via Terraform ensured reproducible, auditable deployments across regions.",
    techStack: ["AWS IoT Core", "Kinesis Video", "Lambda", "DynamoDB", "Terraform", "Jenkins"],
};

export interface TimelinePhase {
    title: string;
    duration: string;
    description: string;
    active: boolean;
}

export const timeline: TimelinePhase[] = [
    {
        title: "Phase 1: Platform Foundation",
        duration: "8 Weeks",
        description:
            "Core IoT platform architecture, device authentication, and shadow system. Initial device onboarding for sensors and keypads.",
        active: true,
    },
    {
        title: "Phase 2: Video & DevOps",
        duration: "12 Weeks",
        description:
            "Kinesis Video Streams integration, Rekognition event detection, CI/CD pipeline with DevSecOps controls.",
        active: false,
    },
    {
        title: "Phase 3: Ecosystem Integrations",
        duration: "10 Weeks",
        description:
            "Alexa, Google Home, and Apple HomeKit certifications. Mobile and web app development.",
        active: false,
    },
    {
        title: "Phase 4: Scale & Operations",
        duration: "Ongoing",
        description: "Fleet scaling to 1M+ devices, 24/7 monitoring, weekly zero-downtime deployments, continuous improvement.",
        active: false,
    },
];

export const securityNote = {
    title: "Security & Operational Maturity",
    description:
        "Zigron implemented IAM least privilege, configuration audits, GuardDuty threat detection, and CloudTrail logging. Monitoring dashboards with alerting and runbooks ensure rapid incident response. DevSecOps controls are integrated into every build pipeline.",
};

export interface ImpactMetric {
    value: string;
    label: string;
}

export const impactMetrics: ImpactMetric[] = [
    { value: "1M+", label: "Active Devices Managed" },
    { value: "99.99%", label: "Platform Uptime" },
    { value: "35%", label: "Reduction in Deployment Bugs" },
    { value: "<300ms", label: "Video Streaming Latency" },
];

export const futureData = {
    title: "Continuous Innovation",
    description:
        "With the platform running at scale, Zigron continues to drive innovation—evolving the OTA update pipeline, expanding device support, and integrating next-generation AI capabilities for smarter alarm verification and proactive home monitoring.",
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
        title: "TerraTrak AI Solar Tracking",
        category: "AI Systems",
        description: "Machine learning for energy maximization.",
        href: "/work/terratrak-ai",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDlyxDAKz3Gi7EaPPtlL9m5qLDxn1tyDfrU_SfIXJ8GQmRUk4XXHdNJrom4bXAjKV5ECAdLdydR2YKQxqJMIku3KT9TKJRQ3vQpFso2tfowdet_PKuCrie1MeOqbijUBQQ5wjduLtvmBlA--QisgpWrQTiVm2IYSW9zr8Rmj23bjQM8wSRm61dwXAXlONSlvzfIO429U5nUY-oXZ-COjJuQ1cecaCCnDXRxtHiq0OUr5QOlcztIIYQOpxviuRGbO9a30SgUt2YWMO4",
    },
];

export const relatedLinks = [
    {
        title: "Smart Home Solutions",
        description: "End-to-end platform engineering",
        href: "/solutions/smart-home-automation",
    },
    {
        title: "Smart Home Industry",
        description: "Consumer IoT expertise",
        href: "/industries/smart-home",
    },
];

export const ctaData = {
    title: "Ready to Scale Your IoT Platform?",
    subtitle:
        "Whether you're launching a new connected product or scaling an existing fleet, our team is ready to engineer your success.",
    formTitle: "Discuss this project",
    placeholder: "I'm interested in building a platform similar to Abode...",
};
