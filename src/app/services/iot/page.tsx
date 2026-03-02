import { Header, Footer } from "@/components/layout";
import { Button, Badge, SectionHeader, Container, Section } from "@/components/ui";
import {
  ArrowRight,
  Cpu,
  Shield,
  Zap,
  BarChart3,
  Cloud,
  Database,
  Lock,
  CheckCircle,
  Wifi,
  Sun,
  Truck,
  Home,
  Heart,
  Settings,
} from "lucide-react";

export const metadata = {
  title: "IoT Services for OEMs & Enterprises | Zigron",
  description: "End-to-end IoT product engineering - from device firmware to cloud platforms, mobile apps, and secure deployments.",
};

const iotServices = [
  {
    icon: BarChart3,
    title: "IoT Strategy & Consulting",
    whenToUse: "Before building, to validate ROI and architecture.",
    features: ["Tech Stack Selection", "Roadmap & Cost Estimation", "Security Compliance Review"],
    href: "/services/iot/strategy-consulting",
  },
  {
    icon: Cpu,
    title: "Device & Firmware",
    whenToUse: "Designing custom hardware or embedded software.",
    features: ["PCB Design & Prototyping", "RTOS & Bare Metal Firmware", "Edge Computing Logic"],
    href: "/services/iot/device-firmware",
  },
  {
    icon: Cloud,
    title: "Platform & Cloud",
    whenToUse: "Building or modernizing the IoT backend at scale.",
    features: ["Device Registry & Digital Twin", "Telemetry Ingestion Pipeline", "Fleet Operations & Admin Tools"],
    href: "/services/iot/platform-cloud",
  },
  {
    icon: Zap,
    title: "Connectivity & Integration",
    whenToUse: "Ensuring reliable data transfer and system talk.",
    features: ["Protocol Integration (MQTT, CoAP)", "Cellular/LoRaWAN/BLE Setup", "ERP/CRM System Integration"],
    href: "/services/iot/connectivity",
  },
  {
    icon: Database,
    title: "Data & Analytics",
    whenToUse: "Turning raw sensor data into business insights.",
    features: ["Predictive Maintenance Models", "Big Data Pipelines", "Real-time Anomaly Detection"],
    href: "/services/iot/data-analytics",
  },
  {
    icon: Lock,
    title: "Security & QA",
    whenToUse: "Hardening the entire stack before launch.",
    features: ["Pen Testing & Vulnerability Scans", "Compliance Audits (ISO/IEC)", "Automated QA Testing Suites"],
    href: "/services/iot/security-qa",
  },
];

const lifecycleSteps = [
  { step: 1, title: "Discovery & Architecture", links: ["Requirements", "System Design"] },
  { step: 2, title: "Device Design & Firmware", links: ["Prototyping", "Embedded Code"] },
  { step: 3, title: "Cloud Platform & APIs", links: ["Backend Dev", "Integrations"] },
  { step: 4, title: "Dashboards & Mobile Apps", links: ["UX/UI Design", "App Dev"] },
  { step: 5, title: "Security & Testing", links: ["QA Cycles", "Certification"] },
  { step: 6, title: "Deployment & Operations", links: ["OTA Updates", "Support"] },
];

const solutions = [
  { icon: Sun, title: "Smart Energy & Solar", description: "Real-time efficiency monitoring for renewable assets.", expertise: "Telemetry & Remote Control" },
  { icon: Settings, title: "Predictive Maintenance", description: "Prevent machine downtime with vibration analysis.", expertise: "Edge Analytics & Alerts" },
  { icon: Truck, title: "Fleet & Logistics", description: "Track assets globally with precision GPS/Cellular.", expertise: "Location Tracking & Cold Chain" },
  { icon: Home, title: "Smart Home", description: "Consumer platforms for lighting, security, and climate.", expertise: "Device Mesh & App Control" },
  { icon: Heart, title: "Medical IoT", description: "HIPAA-compliant remote patient monitoring systems.", expertise: "Secure Data Transmission" },
];

const caseStudies = [
  {
    title: "Scaling Abode's Smart Security to Millions",
    category: "Consumer IoT",
    problem: "Legacy backend couldn't handle device spike.",
    approach: "Serverless AWS architecture & firmware optimization.",
    outcome: "99.99% uptime & 50% infrastructure cost reduction.",
    href: "/work/abode-smart-home",
  },
  {
    title: "Automating TerraSmart Solar Installation",
    category: "Industrial IoT",
    problem: "Manual site surveys were slow and error-prone.",
    approach: "Custom high-precision GPS rovers & iPad app.",
    outcome: "30% faster field deployment speed.",
    href: "/work/terrasmart-solar",
  },
  {
    title: "AI-Driven Solar Tracking Optimization",
    category: "AI + IoT",
    problem: "Standard trackers missed peak sun angles.",
    approach: "Machine learning edge model on tracker controllers.",
    outcome: "+12% energy generation boost.",
    href: "/work/terratrak-ai",
  },
];

const techStack = {
  Hardware: ["ARM Cortex-M", "ESP32 / ESP8266", "Nordic nRF", "STM32"],
  Protocols: ["MQTT / CoAP", "LoRaWAN", "Bluetooth LE", "Zigbee / Z-Wave"],
  Cloud: ["AWS IoT Core", "Azure IoT Hub", "Google Cloud IoT", "Kubernetes"],
  Data: ["PostgreSQL", "InfluxDB", "Snowflake", "TensorFlow Lite"],
  Security: ["TLS 1.2/1.3", "Hardware RoT", "OAuth 2.0", "X.509 Certificates"],
};

const faqs = [
  {
    question: "What's the typical IoT product build timeline?",
    answer: "It varies by complexity. A PoC can take 4-8 weeks, while a full commercial product launch typically spans 6-12 months including hardware design, certification, and cloud integration.",
  },
  {
    question: "Do you handle device certification and field deployment?",
    answer: "Yes. We guide you through FCC, CE, and carrier certifications. We also build provisioning tools to streamline field deployment.",
  },
  {
    question: "How do you secure devices and data end-to-end?",
    answer: "We implement security at every layer: Hardware Root of Trust, encrypted communication (TLS), authenticated APIs, and secure OTA update mechanisms.",
  },
  {
    question: "Can you integrate with our ERP/SCADA/CRM?",
    answer: "Absolutely. Integration is a core part of our service. We build custom middleware or use APIs to pipe IoT data directly into your existing business systems.",
  },
  {
    question: "Do you support edge computing and offline mode?",
    answer: "Yes, we design firmware to handle logic locally on the device to ensure operation during connectivity loss and to reduce data transmission costs.",
  },
  {
    question: "How do you handle OTA updates?",
    answer: "We architect robust Over-The-Air update mechanisms that allow for fleet-wide firmware updates with rollback capabilities to prevent bricking devices.",
  },
];

export default function IoTServicesPage() {
  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <Section background="gradient" padding="hero" className="relative overflow-hidden">
          <Container>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-black dark:text-white tracking-tight">
                  IoT Services for <br />
                  <span className="text-primary">OEMs & Enterprises</span>
                </h1>

                <p className="text-lg md:text-xl text-text-muted-light dark:text-text-muted-dark mb-8 max-w-lg leading-relaxed font-light">
                  We design devices, build cloud platforms, integrate connectivity, and run secure deployments—end to end.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 items-center mb-10">
                  <Button size="lg" href="/contact">
                    Talk to an IoT engineer
                  </Button>
                  <Button variant="ghost" href="#case-studies">
                    See IoT case studies
                  </Button>
                </div>

                <div className="flex flex-wrap gap-3">
                  {[
                    { icon: Zap, text: "End-to-end delivery" },
                    { icon: Shield, text: "Security-first architecture" },
                    { icon: Wifi, text: "Field-ready deployment" },
                  ].map((badge) => (
                    <div
                      key={badge.text}
                      className="bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 rounded-full px-4 py-2 text-xs font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2 shadow-sm"
                    >
                      <badge.icon className="w-4 h-4 text-primary" />
                      {badge.text}
                    </div>
                  ))}
                </div>
              </div>

              {/* Visual Dashboard */}
              <div className="relative h-96 w-full hidden lg:flex items-center justify-center">
                <div className="relative w-full max-w-md aspect-square">
                  <div className="absolute inset-0 bg-gradient-to-tr from-gray-100 to-white dark:from-surface-dark dark:to-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 flex flex-col p-6 overflow-hidden">
                    <div className="relative flex justify-between items-center mb-6 border-b border-gray-200 dark:border-gray-700 pb-4">
                      <span className="text-sm font-bold text-gray-500 uppercase tracking-wide">System Status</span>
                      <span className="flex items-center gap-2 text-xs text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/30 px-2 py-1 rounded font-medium border border-green-100 dark:border-green-800">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        Live Monitoring
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-4 flex-1 relative">
                      <div className="bg-surface-light dark:bg-black/40 rounded-lg p-4 border border-gray-200 dark:border-gray-700 flex flex-col justify-center items-center gap-3 transition hover:border-primary/50">
                        <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400">
                          <BarChart3 className="w-6 h-6" />
                        </div>
                        <span className="text-xs font-semibold text-gray-600 dark:text-gray-300">Device Telemetry</span>
                        <span className="text-[10px] text-gray-400 font-mono">120 msg/sec</span>
                      </div>

                      <div className="bg-surface-light dark:bg-black/40 rounded-lg p-4 border border-gray-200 dark:border-gray-700 flex flex-col justify-center items-center gap-3 transition hover:border-primary/50">
                        <div className="w-10 h-10 rounded-full bg-purple-50 dark:bg-purple-900/20 flex items-center justify-center text-purple-600 dark:text-purple-400">
                          <Cloud className="w-6 h-6" />
                        </div>
                        <span className="text-xs font-semibold text-gray-600 dark:text-gray-300">Cloud Sync</span>
                        <span className="text-[10px] text-gray-400 font-mono">Latency: 24ms</span>
                      </div>

                      <div className="bg-surface-light dark:bg-black/40 rounded-lg p-4 border border-gray-200 dark:border-gray-700 flex flex-col justify-center items-center gap-2 col-span-2">
                        <div className="w-full h-16 flex items-end gap-1 px-4 justify-center">
                          {[6, 8, 12, 14, 10, 8, 5].map((h, i) => (
                            <div
                              key={i}
                              className="w-3 bg-primary rounded-t-sm"
                              style={{ height: `${h * 4}px`, opacity: 0.2 + i * 0.12 }}
                            ></div>
                          ))}
                        </div>
                        <span className="text-xs font-semibold text-gray-600 dark:text-gray-300 mt-1">Analytics Dashboard</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Trust Strip */}
        <div className="bg-surface-light dark:bg-surface-dark border-y border-gray-200 dark:border-gray-800 py-8">
          <Container>
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="w-full lg:w-1/2 text-center lg:text-left">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
                  Trusted by OEM teams in Energy, Manufacturing, Smart Home
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500 items-center">
                  <span className="text-xl font-extrabold text-gray-400 dark:text-gray-500 tracking-tight">SIEMENS</span>
                  <span className="text-xl font-extrabold text-gray-400 dark:text-gray-500 font-serif italic">Honeywell</span>
                  <span className="text-xl font-extrabold text-gray-400 dark:text-gray-500 font-mono">GE Digital</span>
                  <span className="text-xl font-extrabold text-gray-400 dark:text-gray-500">Schneider</span>
                </div>
              </div>

              <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center gap-8 lg:gap-12 border-t lg:border-t-0 lg:border-l border-gray-200 dark:border-gray-700 pt-6 lg:pt-0 lg:pl-12">
                <div className="text-center">
                  <p className="text-3xl font-bold text-black dark:text-white tracking-tight">500k+</p>
                  <p className="text-[10px] text-gray-500 uppercase tracking-wide font-semibold mt-1">Devices Connected</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-black dark:text-white tracking-tight">99.9%</p>
                  <p className="text-[10px] text-gray-500 uppercase tracking-wide font-semibold mt-1">Platform Uptime</p>
                </div>
                <div className="text-center hidden sm:flex flex-col gap-2">
                  <span className="text-[10px] font-bold bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 px-3 py-1 rounded-full text-gray-600 dark:text-gray-300">ISO 27001</span>
                  <span className="text-[10px] font-bold bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 px-3 py-1 rounded-full text-gray-600 dark:text-gray-300">HIPAA Compliant</span>
                </div>
              </div>
            </div>
          </Container>
        </div>

        {/* Services Grid */}
        <Section>
          <Container>
            <SectionHeader
              label="IoT Services"
              title="Choose What You Need"
              description="Select a specialized domain to see how our engineering teams can support your product roadmap."
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {iotServices.map((service) => (
                <div
                  key={service.title}
                  className="group bg-white dark:bg-surface-dark p-8 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary transition-all duration-300 hover:shadow-xl relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-1 h-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>

                  <div className="w-12 h-12 bg-red-50 dark:bg-red-900/20 rounded-lg flex items-center justify-center mb-6 text-primary">
                    <service.icon className="w-7 h-7" />
                  </div>

                  <h3 className="text-xl font-bold mb-2 text-black dark:text-white">{service.title}</h3>

                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">
                    When to use: <span className="font-normal normal-case text-gray-600 dark:text-gray-300">{service.whenToUse}</span>
                  </p>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button variant="ghost" href={service.href} className="p-0">
                    Explore {service.title.split(" ")[0]} <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* IoT Lifecycle */}
        <Section background="surface">
          <Container>
            <h2 className="text-3xl font-bold text-center mb-16 text-black dark:text-white">
              What We Deliver: The IoT Lifecycle
            </h2>

            <div className="relative">
              {/* Connecting line pattern */}
              <div className="hidden lg:block absolute top-[26px] left-[5%] w-[90%] h-0.5 bg-gray-200 dark:bg-gray-700"></div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-4 gap-y-10 relative z-10">
                {lifecycleSteps.map((item, index) => (
                  <div key={item.step} className="flex flex-col items-center text-center group">
                    <div className={`w-12 h-12 bg-white dark:bg-surface-dark border-4 ${index === 0 ? 'border-primary text-primary' : 'border-gray-100 dark:border-gray-800 text-gray-400 group-hover:border-primary/30 group-hover:text-primary'
                      } rounded-full flex items-center justify-center font-black text-lg mb-4 relative z-10 transition-all duration-300 shadow-sm`}>
                      {item.step}
                    </div>

                    <h4 className="font-extrabold text-sm md:text-base text-black dark:text-white mb-3 h-auto min-h-[40px] flex items-center justify-center w-full px-1 leading-tight">
                      {item.title}
                    </h4>

                    <div className="flex flex-col gap-1.5 w-full px-1">
                      {item.links.map((link) => (
                        <div key={link} className="bg-gray-50 dark:bg-gray-800/50 rounded px-1.5 py-1 text-xs font-medium text-gray-500 border border-transparent hover:border-gray-200 dark:hover:border-gray-700 transition-colors whitespace-nowrap overflow-hidden text-ellipsis">
                          {link}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        {/* Solutions Powered by IoT */}
        <Section>
          <Container>
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
              <div>
                <Badge className="mb-4">Solutions</Badge>
                <h2 className="text-3xl font-bold text-black dark:text-white">IoT Powers These Solutions</h2>
                <p className="mt-2 text-text-muted-light dark:text-text-muted-dark font-light">
                  See how our core IoT services manifest in industry-specific applications.
                </p>
              </div>
              <Button variant="ghost" href="/solutions">
                View all solutions <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {solutions.map((solution) => (
                <div
                  key={solution.title}
                  className="bg-surface-light dark:bg-surface-dark p-6 rounded-xl border border-transparent hover:border-gray-200 dark:hover:border-gray-600 transition-colors group h-full flex flex-col"
                >
                  <div className="mb-4">
                    <solution.icon className="w-10 h-10 text-primary group-hover:scale-110 transition-transform" />
                  </div>

                  <h4 className="font-bold text-base mb-2 text-black dark:text-white leading-tight">
                    {solution.title}
                  </h4>

                  <p className="text-xs text-gray-500 mb-6 leading-relaxed flex-grow">
                    {solution.description}
                  </p>

                  <div className="pt-4 border-t border-gray-100 dark:border-gray-800">
                    <div className="text-[10px] uppercase font-bold text-gray-400 mb-1">
                      Our Expertise
                    </div>
                    <div className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                      {solution.expertise}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* Case Studies */}
        <Section background="surface" id="case-studies">
          <Container>
            <h2 className="text-3xl font-bold mb-12 text-black dark:text-white">Proven Results in the Field</h2>

            <div className="grid md:grid-cols-3 gap-8">
              {caseStudies.map((study) => (
                <div
                  key={study.title}
                  className="bg-white dark:bg-background-dark rounded-xl overflow-hidden shadow-sm border border-gray-200 dark:border-gray-800 flex flex-col group hover:shadow-lg transition-all"
                >
                  <div className="h-56 bg-gray-200 dark:bg-gray-700 relative overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-700 flex items-center justify-center">
                      <Zap className="w-12 h-12 text-gray-400 dark:text-gray-500" />
                    </div>
                    <div className="absolute top-4 left-4 bg-black/80 backdrop-blur text-white px-3 py-1 text-[10px] font-bold rounded uppercase tracking-wide">
                      {study.category}
                    </div>
                  </div>

                  <div className="p-8 flex-1 flex flex-col">
                    <h3 className="font-bold text-lg mb-4 text-black dark:text-white leading-tight">{study.title}</h3>

                    <div className="space-y-4 mb-8 flex-1 border-t border-gray-100 dark:border-gray-800 pt-4">
                      <div className="flex gap-4 text-xs">
                        <span className="font-bold text-gray-400 uppercase w-16 shrink-0">Problem</span>
                        <span className="text-gray-600 dark:text-gray-300">{study.problem}</span>
                      </div>
                      <div className="flex gap-4 text-xs">
                        <span className="font-bold text-gray-400 uppercase w-16 shrink-0">Approach</span>
                        <span className="text-gray-600 dark:text-gray-300">{study.approach}</span>
                      </div>
                      <div className="flex gap-4 text-xs">
                        <span className="font-bold text-primary uppercase w-16 shrink-0">Outcome</span>
                        <span className="text-gray-800 dark:text-white font-bold">{study.outcome}</span>
                      </div>
                    </div>

                    <Button variant="ghost" href={study.href} className="p-0">
                      Read case study <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* Tech Stack */}
        <Section>
          <Container>
            <SectionHeader
              label="Technology"
              title="Our Architecture & Tech Stack"
              description="We work with the best-in-class tools to build scalable, future-proof systems."
            />

            {/* Architecture Flow */}
            <div className="flex flex-row items-center md:justify-center gap-4 mb-16 text-center text-xs font-bold text-gray-600 dark:text-gray-300 overflow-x-auto py-6 px-2 scrollbar-hide snap-x">
              {[
                { icon: Cpu, label: "Device / Edge" },
                { icon: Wifi, label: "Connectivity" },
                { icon: Cloud, label: "IoT Cloud Platform", highlight: true },
                { icon: Database, label: "Data / AI" },
                { icon: BarChart3, label: "App / Dashboard" },
              ].map((item, index, arr) => (
                <div key={item.label} className="flex items-center gap-4 flex-shrink-0 snap-center">
                  <div className={`min-w-[140px] p-6 border rounded-lg flex flex-col items-center shadow-sm ${item.highlight
                    ? "border-2 border-primary border-dashed bg-red-50 dark:bg-red-900/10 transform scale-105 shadow-md"
                    : "border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-surface-dark"
                    }`}>
                    <item.icon className={`w-8 h-8 mb-3 ${item.highlight ? "text-primary" : "text-gray-400"}`} />
                    <span>{item.label}</span>
                  </div>
                  {index < arr.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-gray-300" />
                  )}
                </div>
              ))}
            </div>

            {/* Tech Categories */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 border-t border-gray-200 dark:border-gray-800 pt-12">
              {Object.entries(techStack).map(([category, items]) => (
                <div key={category}>
                  <h4 className="font-bold text-sm mb-4 text-black dark:text-white uppercase tracking-wider">{category}</h4>
                  <ul className="text-xs text-gray-500 space-y-3 font-medium">
                    {items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* Engagement Models */}
        <Section background="surface">
          <Container>
            <h2 className="text-3xl font-bold text-center mb-16 text-black dark:text-white">Engagement Models</h2>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  title: "Project Delivery",
                  subtitle: "Fixed Scope",
                  bestFor: "Defined deliverables like an MVP, a specific module update, or a prototype build.",
                  includes: ["Fixed timeline & budget", "Managed delivery team", "Final IP handover"],
                  featured: false,
                },
                {
                  title: "Dedicated Team",
                  subtitle: "Monthly Retainer",
                  bestFor: "Scale-ups needing ongoing engineering power to accelerate roadmap execution.",
                  includes: ["Full-time experts embedded", "Agile sprint cycles", "Flexible scope adjustment"],
                  featured: true,
                },
                {
                  title: "OEM Partnership",
                  subtitle: "Long-term Roadmap",
                  bestFor: "Enterprises outsourcing entire product lines or requiring lifecycle support.",
                  includes: ["Strategic roadmap planning", "SLA-based maintenance", "Volume deployment support"],
                  featured: false,
                },
              ].map((model) => (
                <div
                  key={model.title}
                  className={`bg-white dark:bg-background-dark p-8 rounded-lg shadow-sm border transition relative ${model.featured
                    ? "border-2 border-primary shadow-xl transform md:-translate-y-4 z-10"
                    : "border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-600"
                    }`}
                >
                  {model.featured && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                      Most Popular
                    </div>
                  )}

                  <h3 className="text-xl font-bold text-black dark:text-white mb-1">{model.title}</h3>
                  <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-6">{model.subtitle}</p>

                  <hr className="border-gray-100 dark:border-gray-800 mb-6" />

                  <p className="text-xs font-bold uppercase text-primary mb-3">Best For:</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{model.bestFor}</p>

                  <p className="text-xs font-bold uppercase text-primary mb-3">Includes:</p>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
                    {model.includes.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* FAQ */}
        <Section>
          <Container size="narrow">
            <h2 className="text-3xl font-bold text-center mb-12 text-black dark:text-white">Common Questions</h2>

            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.question} className="border-b border-gray-200 dark:border-gray-800 pb-6">
                  <h4 className="font-bold text-base text-black dark:text-white mb-2">{faq.question}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* CTA */}
        <Section background="surface" className="relative overflow-hidden">
          <div className="absolute -right-20 -top-20 w-96 h-96 bg-gray-200 dark:bg-gray-800 rounded-full opacity-30 blur-3xl"></div>
          <div className="absolute -left-20 bottom-0 w-72 h-72 bg-red-100 dark:bg-red-900/10 rounded-full opacity-30 blur-3xl"></div>

          <Container size="narrow" className="relative z-10 text-center">
            <h2 className="text-4xl font-bold mb-4 text-black dark:text-white tracking-tight">
              Tell us what you&apos;re building.
            </h2>
            <p className="text-gray-500 mb-10 max-w-2xl mx-auto font-light">
              Whether it&apos;s a new connected product or an industrial automation platform, our engineering team is ready to help you scope and execute.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" href="/contact">
                Talk to Engineering <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="outline" size="lg" href="/work">
                View case studies
              </Button>
            </div>
          </Container>
        </Section>
      </main>

      <Footer />
    </>
  );
}
