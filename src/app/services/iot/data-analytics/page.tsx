// IoT Data & Analytics Service Page - SSR
// Operational intelligence from IoT telemetry

import React from "react";
import { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import { Button, Badge, Container, Section } from "@/components/ui";
import {
    ArrowRight,
    Cpu,
    Code,
    Server,
    Smartphone,
    FileText,
    BarChart,
    Shield,
    Users,
    Cloud,
    Search,
    Layout,
    Rocket,
    CheckCircle,
    Wifi,
    Lock,
    Eye,
    Wrench,
    Zap,
    Database,
    AlertTriangle,
    Target,
    Layers,
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
    type IconName,
} from "./data";

// Client components
import { FAQAccordion } from "./components";
import { ServiceProcessTimeline, SystemArchitecturePipeline } from "@/app/services/components";

// ============================================================================
// ICON RESOLVER (for server-rendered sections)
// ============================================================================

const iconMap: Record<IconName, LucideIcon> = {
    cpu: Cpu,
    code: Code,
    server: Server,
    smartphone: Smartphone,
    fileText: FileText,
    barChart: BarChart,
    shield: Shield,
    users: Users,
    cloud: Cloud,
    search: Search,
    layout: Layout,
    rocket: Rocket,
    checkCircle: CheckCircle,
    wifi: Wifi,
    lock: Lock,
    eye: Eye,
    wrench: Wrench,
    zap: Zap,
    database: Database,
    alertTriangle: AlertTriangle,
    target: Target,
    layers: Layers,
};

function getIconServer(iconName: IconName): LucideIcon {
    return iconMap[iconName] || Cpu;
}

const trustColorMap = {
    green: "text-green-600",
    blue: "text-blue-600",
    purple: "text-purple-600",
};

// ============================================================================
// METADATA
// ============================================================================

export const metadata: Metadata = {
    title: pageMetadata.title,
    description: pageMetadata.description,
    keywords: pageMetadata.keywords,
    openGraph: {
        title: pageMetadata.title,
        description: pageMetadata.description,
        type: "website",
    },
};

// ============================================================================
// PAGE COMPONENT
// ============================================================================

export default function IoTDataAnalyticsPage() {
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
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-600">
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
                                    <Button
                                        variant="outline"
                                        size="lg"
                                        href={heroData.secondaryCta.href}
                                    >
                                        {heroData.secondaryCta.label}
                                    </Button>
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

                            {/* Hero Visual */}
                            <div className="relative h-[450px] w-full flex items-center justify-center bg-gray-50 dark:bg-surface-dark rounded border border-gray-200 dark:border-gray-700 p-8 shadow-inner">
                                <div
                                    className="absolute inset-0 z-0 opacity-10"
                                    style={{
                                        backgroundImage: "radial-gradient(#B62427 1px, transparent 1px)",
                                        backgroundSize: "20px 20px",
                                    }}
                                ></div>
                                <div className="relative w-full max-w-md z-10">
                                    <div className="flex flex-col justify-between items-center relative h-80">
                                        <div className="absolute left-1/2 top-10 bottom-10 w-0.5 bg-gradient-to-b from-gray-300 via-primary to-gray-300 -translate-x-1/2 -z-10"></div>

                                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg border border-gray-200 dark:border-gray-600 flex items-center gap-4 w-64 relative">
                                            <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/30 rounded flex items-center justify-center text-blue-600">
                                                <BarChart className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <div className="text-xs text-primary font-bold uppercase mb-0.5">
                                                    Output
                                                </div>
                                                <div className="text-sm font-semibold dark:text-white">
                                                    Dashboards & APIs
                                                </div>
                                            </div>
                                            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary rounded-full ring-4 ring-white dark:ring-gray-800"></div>
                                        </div>

                                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg border-2 border-primary flex items-center gap-4 w-72 z-20 scale-110">
                                            <div className="w-12 h-12 bg-primary text-white rounded flex items-center justify-center shadow-lg">
                                                <Database className="w-7 h-7" />
                                            </div>
                                            <div>
                                                <div className="text-xs text-gray-400 font-bold uppercase mb-0.5">
                                                    Core
                                                </div>
                                                <div className="text-base font-bold dark:text-white">
                                                    Analytics Engine
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg border border-gray-200 dark:border-gray-600 flex items-center gap-4 w-64 relative">
                                            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary rounded-full ring-4 ring-white dark:ring-gray-800"></div>
                                            <div className="w-10 h-10 bg-green-50 dark:bg-green-900/30 rounded flex items-center justify-center text-green-600">
                                                <Cpu className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <div className="text-xs text-primary font-bold uppercase mb-0.5">
                                                    Input
                                                </div>
                                                <div className="text-sm font-semibold dark:text-white">
                                                    Device Telemetry
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
                                Deliverables
                            </span>
                            <h2 className="text-3xl font-bold mt-2 text-black dark:text-white">
                                What You Get With Zigron
                            </h2>
                            <p className="mt-4 text-text-muted-light dark:text-text-muted-dark max-w-2xl text-lg">
                                Analytics solutions built around your actual operational
                                workflows—not generic dashboard templates.
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
                                    Use Cases
                                </span>
                                <h2 className="text-3xl font-bold mt-2 text-black dark:text-white">
                                    Who Is This For?
                                </h2>
                                <p className="mt-4 text-text-muted-light dark:text-text-muted-dark">
                                    From fleet monitoring to AI readiness, we help teams make data-driven decisions.
                                </p>
                            </div>
                            <a
                                href="/industries"
                                className="hidden md:flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-primary transition group"
                            >
                                Not sure? View all industries
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </a>
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
                                                Solution Approach
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
                                Process
                            </span>
                            <h2 className="text-3xl font-bold mt-2 text-black dark:text-white">
                                How We Deliver Excellence
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

                        <div className="mt-16 p-8 bg-white dark:bg-background-dark border border-gray-200 dark:border-gray-700 rounded text-center max-w-3xl mx-auto shadow-sm">
                            <h4 className="font-bold text-lg mb-3 text-black dark:text-white">
                                Flexible Engagement Models
                            </h4>
                            <p className="text-gray-600 dark:text-gray-400">
                                Whether you need a{" "}
                                <span className="text-primary font-bold">
                                    Dedicated Data Team
                                </span>{" "}
                                to build and maintain pipelines or a{" "}
                                <span className="text-primary font-bold">
                                    Project-Based Delivery
                                </span>
                                , we adapt to your workflow.
                            </p>
                        </div>
                    </Container>
                </Section>

                {/* ================================================================
            ARCHITECTURE
        ================================================================ */}
                <Section>
                    <Container>
                        <div className="mb-16 text-center">
                            <span className="text-primary font-bold uppercase tracking-widest text-sm">
                                Architecture
                            </span>
                            <h2 className="text-3xl font-bold mt-2 text-black dark:text-white">
                                Technical Approach
                            </h2>
                            <p className="mt-4 text-text-muted-light dark:text-text-muted-dark">
                                End-to-end data flow from device telemetry to actionable insights.
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
                <Section background="surface">
                    <Container>
                        <div className="flex flex-col items-center mb-16">
                            <h3 className="text-3xl font-bold mb-4 text-black dark:text-white">
                                Tools & Technologies
                            </h3>
                            <p className="text-text-muted-light dark:text-text-muted-dark max-w-2xl text-center">
                                Best-in-class tools for streaming, storage, and visualization at
                                IoT scale.
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
                                    Our Work
                                </span>
                                <h2 className="text-3xl font-bold mt-2 text-black dark:text-white">
                                    Success Stories
                                </h2>
                            </div>
                            <a
                                href="/work"
                                className="hidden md:flex items-center gap-2 text-primary font-semibold hover:opacity-80 group"
                            >
                                View all work
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {caseStudies.map((study) => (
                                <div
                                    key={study.title}
                                    className="bg-white dark:bg-surface-dark rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-gray-100 dark:border-gray-800 flex flex-col group"
                                >
                                    <div className="h-52 bg-gray-200 dark:bg-gray-700 relative overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-br from-gray-600 to-gray-800 group-hover:scale-105 transition-transform duration-500"></div>
                                        <div className="absolute top-4 left-4 bg-white/95 dark:bg-black/80 px-3 py-1 text-xs font-bold rounded uppercase tracking-wider">
                                            Data Analytics
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
                            Frequently Asked Questions
                        </h2>
                        <FAQAccordion faqs={faqs} />
                    </Container>
                </Section>

                {/* ================================================================
            CTA SECTION
        ================================================================ */}
                <Section className="relative overflow-hidden">
                    <div className="absolute -right-20 -top-20 w-96 h-96 bg-gray-200 dark:bg-gray-800 rounded-full opacity-20 blur-3xl pointer-events-none"></div>
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
