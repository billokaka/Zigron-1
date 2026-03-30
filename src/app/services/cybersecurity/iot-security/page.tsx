// IoT Security & Device Protection Page - SSR
// Follows IoT Connectivity & Integration layout pattern

import { Fragment } from "react";
import { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import { Button, Badge, Container, Section } from "@/components/ui";
import {
    ArrowRight,
    Cpu,
    Microchip,
    Wifi,
    Battery,
    Code,
    Server,
    Layers,
    Zap,
    Shield,
    Bluetooth,
    Settings,
    Activity,
    Thermometer,
    Radio,
    Box,
    Terminal,
    Database,
    Globe,
    Cloud,
    Lock,
    Users,
    Signal,
    Router,
    Satellite,
    type LucideIcon,
} from "lucide-react";

// Data imports
import {
    pageMetadata,
    heroData,
    deliverables,
    useCases,
    processSteps,
    architectureLayers,
    technicalPillars,
    techStack,
    caseStudies,
    faqs,
    ctaData,
} from "./data";

// Client components
import { FAQAccordion } from "./components";
import { ServiceProcessTimeline, SystemArchitecturePipeline } from "@/app/services/components";

// ============================================================================
// ICON RESOLVER (Server)
// ============================================================================

const iconMap: Record<string, LucideIcon> = {
    cpu: Cpu,
    microchip: Microchip,
    wifi: Wifi,
    battery: Battery,
    code: Code,
    server: Server,
    layers: Layers,
    zap: Zap,
    shield: Shield,
    bluetooth: Bluetooth,
    settings: Settings,
    activity: Activity,
    thermometer: Thermometer,
    radio: Radio,
    box: Box,
    terminal: Terminal,
    database: Database,
    globe: Globe,
    cloud: Cloud,
    lock: Lock,
    users: Users,
    signal: Signal,
    router: Router,
    satellite: Satellite,
};

function getIconServer(name: string): LucideIcon {
    return iconMap[name] || Shield;
}

const trustColorMap = {
    green: "text-green-600",
    blue: "text-blue-600",
    purple: "text-purple-600",
};

const pillarColorMap = {
    blue: "bg-blue-50 dark:bg-blue-900/20 text-blue-600",
    green: "bg-green-50 dark:bg-green-900/20 text-green-600",
    red: "bg-red-50 dark:bg-red-900/20 text-primary",
    purple: "bg-purple-50 dark:bg-purple-900/20 text-purple-600",
};

// ============================================================================
// METADATA
// ============================================================================

export const metadata: Metadata = {
    title: pageMetadata.title,
    description: pageMetadata.description,
};

// ============================================================================
// PAGE COMPONENT
// ============================================================================

export default function IoTSecurityPage() {
    return (
        <>
            <Header />

            <main>
                {/* ================================================================
            HERO SECTION
        ================================================================ */}
                <Section
                    background="default"
                    padding="hero"
                    className="relative overflow-hidden bg-gradient-to-b from-transparent to-surface-light/30 dark:to-surface-dark/30"
                >
                    <Container>
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div className="text-left">
                                <Badge dot className="mb-6">
                                    {heroData.badge}
                                </Badge>

                                <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 text-black dark:text-white tracking-tight">
                                    {heroData.headline} <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500">
                                        {heroData.headlineHighlight}
                                    </span>
                                </h1>

                                <p className="text-lg md:text-xl text-text-muted-light dark:text-text-muted-dark mb-10 max-w-lg leading-relaxed">
                                    {heroData.subheadline}
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                                    <Button size="lg" href={heroData.primaryCta.href}>
                                        {heroData.primaryCta.label}
                                        <ArrowRight className="w-4 h-4 ml-2" />
                                    </Button>
                                    {heroData.secondaryCta && (
                                        <Button
                                            variant="outline"
                                            size="lg"
                                            href={heroData.secondaryCta.href}
                                        >
                                            {heroData.secondaryCta.label}
                                        </Button>
                                    )}
                                </div>

                                <div className="border-t border-gray-200 dark:border-gray-800 pt-8">
                                    <ul className="flex flex-col md:flex-row gap-6 md:gap-8 text-sm font-medium text-gray-600 dark:text-gray-400">
                                        {heroData.trustBadges.map((badge) => (
                                            <li key={badge.label} className="flex items-center gap-2">
                                                <Shield
                                                    className={`w-5 h-5 ${trustColorMap[badge.color as keyof typeof trustColorMap]
                                                        }`}
                                                />
                                                {badge.label}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Hero Visual - Security Shield Abstract */}
                            <div className="relative h-[450px] w-full flex items-center justify-center bg-gray-900 rounded border border-gray-700 p-8 shadow-2xl overflow-hidden">
                                <div
                                    className="absolute inset-0 z-0 opacity-20"
                                    style={{
                                        backgroundImage: "radial-gradient(circle, rgba(20, 184, 166, 0.2) 2px, transparent 2px)",
                                        backgroundSize: "30px 30px",
                                    }}
                                ></div>
                                {/* Shield Pulse */}
                                <div className="absolute w-[600px] h-[600px] rounded-full border border-teal-500/20 animate-[ping_3s_linear_infinite]"></div>
                                <div className="absolute w-[400px] h-[400px] rounded-full border border-teal-500/30 animate-[ping_3s_linear_infinite_1s]"></div>
                                <div className="absolute w-[200px] h-[200px] rounded-full border border-teal-500/40 animate-[ping_3s_linear_infinite_0.5s]"></div>

                                <div className="relative z-10 w-24 h-24 bg-teal-600 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(20,184,166,0.5)]">
                                    <Shield className="w-10 h-10 text-white animate-pulse" />
                                </div>

                                <div className="absolute top-20 left-20 bg-gray-800 p-2 rounded-full border border-gray-600">
                                    <Lock className="w-6 h-6 text-gray-400" />
                                </div>
                                <div className="absolute bottom-32 right-12 bg-gray-800 p-2 rounded-full border border-gray-600">
                                    <Cpu className="w-6 h-6 text-gray-400" />
                                </div>
                                <div className="absolute bottom-10 left-32 bg-gray-800 p-2 rounded-full border border-gray-600">
                                    <Settings className="w-6 h-6 text-gray-400" />
                                </div>
                            </div>
                        </div>
                    </Container>
                </Section>

                {/* ================================================================
            DELIVERABLES
        ================================================================ */}
                <Section background="surface" border="both">
                    <Container>
                        <div className="mb-14">
                            <span className="text-primary font-bold uppercase tracking-widest text-sm">
                                Security Services
                            </span>
                            <h2 className="text-3xl font-bold mt-2 text-black dark:text-white">
                                Core Capabilities
                            </h2>
                            <p className="mt-4 text-text-muted-light dark:text-text-muted-dark max-w-2xl text-lg">
                                End-to-end device security from silicon to cloud.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
                            {deliverables.map((deliverable) => {
                                const Icon = getIconServer(deliverable.iconName);
                                return (
                                    <div
                                        key={deliverable.title}
                                        className="bg-white dark:bg-background-dark p-8 rounded shadow-sm border border-gray-100 dark:border-gray-700 flex items-start gap-5 hover:border-primary/30 transition-colors"
                                    >
                                        <div className="flex-shrink-0 mt-1">
                                            <Icon className="w-8 h-8 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-black dark:text-white">
                                                {deliverable.title}
                                            </h4>
                                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 leading-relaxed">
                                                {deliverable.description}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </Container>
                </Section>

                {/* ================================================================
            USE CASES
        ================================================================ */}
                <Section>
                    <Container>
                        <div className="flex justify-between items-end mb-14">
                            <div>
                                <span className="text-primary font-bold uppercase tracking-widest text-sm">
                                    Problem Solvers
                                </span>
                                <h2 className="text-3xl font-bold mt-2 text-black dark:text-white">
                                    Common Challenges
                                </h2>
                                <p className="mt-4 text-text-muted-light dark:text-text-muted-dark">
                                    Security where it matters most.
                                </p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {useCases.map((useCase) => (
                                <div
                                    key={useCase.title}
                                    className="bg-white dark:bg-surface-dark p-8 rounded shadow-sm hover:shadow-xl transition border-t-4 border-primary flex flex-col h-full"
                                >
                                    <h3 className="text-xl font-bold mb-6 text-black dark:text-white">
                                        {useCase.title}
                                    </h3>
                                    <div className="space-y-5 flex-1">
                                        <div className="bg-red-50 dark:bg-red-900/10 p-4 rounded">
                                            <p className="text-xs font-bold text-primary mb-1 uppercase tracking-wide">
                                                Problem
                                            </p>
                                            <p className="text-sm text-gray-700 dark:text-gray-300">
                                                {useCase.problem}
                                            </p>
                                        </div>
                                        <div className="px-1">
                                            <p className="text-xs font-bold text-gray-400 mb-1 uppercase tracking-wide">
                                                Our Fix
                                            </p>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                                {useCase.solution}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="border-t border-gray-100 dark:border-gray-700 pt-4 mt-6">
                                        <p className="text-xs font-bold text-green-600 dark:text-green-400 mb-1 uppercase tracking-wide">
                                            Outcome
                                        </p>
                                        <p className="text-sm font-semibold text-black dark:text-white">
                                            {useCase.outcome}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Container>
                </Section>

                {/* ================================================================
            PROCESS
        ================================================================ */}
                <Section background="surface">
                    <Container>
                        <div className="text-center mb-20">
                            <span className="text-primary font-bold uppercase tracking-widest text-sm">
                                Security Lifecycle
                            </span>
                            <h2 className="text-3xl font-bold mt-2 text-black dark:text-white">
                                From Threat Model to Certification
                            </h2>
                        </div>

                        <ServiceProcessTimeline
                            steps={processSteps.map((step, index) => {
                                const Icon = getIconServer(step.iconName);
                                return {
                                    id: index + 1,
                                    title: step.title,
                                    desc: step.description,
                                    iconNode: <Icon />,
                                };
                            })}
                        />
                    </Container>
                </Section>

                {/* ================================================================
            ARCHITECTURE
        ================================================================ */}
                <Section>
                    <Container>
                        <div className="mb-16 text-center">
                            <span className="text-primary font-bold uppercase tracking-widest text-sm">
                                Defense in Depth
                            </span>
                            <h2 className="text-3xl font-bold mt-2 text-black dark:text-white">
                                System Architecture
                            </h2>
                            <p className="mt-4 text-text-muted-light dark:text-text-muted-dark">
                                Multi-layer security from silicon to cloud.
                            </p>
                        </div>

                        <SystemArchitecturePipeline
                            layers={architectureLayers.map((layer) => {
                                const Icon = getIconServer(layer.iconName);
                                return {
                                    title: layer.title,
                                    subtitle: layer.subtitle,
                                    iconNode: <Icon />,
                                };
                            })}
                            pillars={technicalPillars.map((pillar) => {
                                const Icon = getIconServer(pillar.iconName);
                                return {
                                    title: pillar.title,
                                    description: pillar.description,
                                    iconNode: <Icon />,
                                };
                            })}
                        />
                    </Container>
                </Section>

                {/* ================================================================
            TECH STACK
        ================================================================ */}
                <Section background="surface" id="tech-stack">
                    <Container>
                        <div className="flex flex-col items-center mb-16">
                            <h3 className="text-3xl font-bold mb-4 text-black dark:text-white">
                                Security Technologies
                            </h3>
                            <p className="text-text-muted-light dark:text-text-muted-dark max-w-2xl text-center">
                                Hardware and software security primitives we work with.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-10">
                            {techStack.map((category) => (
                                <div key={category.category}>
                                    <h4 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-6 border-b border-gray-200 dark:border-gray-700 pb-3">
                                        {category.category}
                                    </h4>
                                    <div className="flex flex-wrap gap-2.5">
                                        {category.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3.5 py-1.5 bg-white dark:bg-background-dark border border-gray-200 dark:border-gray-700 rounded text-sm font-medium text-gray-700 dark:text-gray-300"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Container>
                </Section>

                {/* ================================================================
            CASE STUDIES
        ================================================================ */}
                <Section>
                    <Container>
                        <div className="flex justify-between items-end mb-12">
                            <div>
                                <span className="text-primary font-bold uppercase tracking-widest text-sm">
                                    Proof
                                </span>
                                <h2 className="text-3xl font-bold mt-2 text-black dark:text-white">
                                    Security Engagements
                                </h2>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {caseStudies.map((study) => (
                                <div
                                    key={study.title}
                                    className="bg-white dark:bg-surface-dark rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-gray-100 dark:border-gray-800 flex flex-col group"
                                >
                                    <div className="h-52 bg-gray-900 relative overflow-hidden flex items-center justify-center">
                                        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 10px, #14b8a6 10px, #14b8a6 20px)" }}></div>
                                        <Shield className="w-16 h-16 text-teal-500 opacity-80 group-hover:scale-110 transition-transform duration-500" />
                                        <div className="absolute top-4 left-4 bg-white/95 dark:bg-black/80 px-3 py-1 text-xs font-bold rounded uppercase tracking-wider z-10">
                                            {study.category}
                                        </div>
                                    </div>
                                    <div className="p-6 flex-1 flex flex-col">
                                        <h3 className="font-bold text-lg mb-3 text-black dark:text-white leading-tight">
                                            {study.title}
                                        </h3>
                                        <div className="text-xs text-gray-500 space-y-2 mb-6 flex-1 border-t border-gray-100 dark:border-gray-700 pt-3">
                                            <p>
                                                <strong className="text-gray-800 dark:text-gray-300">
                                                    Services:
                                                </strong>{" "}
                                                {study.services}
                                            </p>
                                            <p className="text-green-600 dark:text-green-400 font-semibold">
                                                <strong className="text-gray-800 dark:text-gray-300">
                                                    Result:
                                                </strong>{" "}
                                                {study.result}
                                            </p>
                                        </div>
                                        <a
                                            href={study.href}
                                            className="text-primary font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all"
                                        >
                                            Read case study
                                            <ArrowRight className="w-3.5 h-3.5" />
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Container>
                </Section>

                {/* ================================================================
            FAQ SECTION
        ================================================================ */}
                <Section background="surface">
                    <Container size="narrow">
                        <h2 className="text-3xl font-bold mb-10 text-center text-black dark:text-white">
                            IoT Security FAQs
                        </h2>
                        <FAQAccordion faqs={faqs} />
                    </Container>
                </Section>

                {/* ================================================================
            CTA SECTION
        ================================================================ */}
                <Section className="relative overflow-hidden">
                    <div className="absolute -right-20 -top-20 w-96 h-96 bg-teal-100 dark:bg-teal-900 rounded-full opacity-20 blur-3xl pointer-events-none"></div>
                    <div className="absolute -left-20 bottom-0 w-80 h-80 bg-primary opacity-5 blur-3xl rounded-full pointer-events-none"></div>
                    <Container className="relative z-10">
                        <div className="text-center mb-10">
                            <h2 className="text-4xl font-bold mb-4 text-black dark:text-white">
                                {ctaData.headline}
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto">
                                {ctaData.subheadline}
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" href="/contact">
                                Talk to an engineer <ArrowRight className="w-4 h-4 ml-2" />
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
