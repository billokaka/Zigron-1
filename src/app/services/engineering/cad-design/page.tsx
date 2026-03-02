// CAD Design & Drafting Service Page - SSR
// Strictly aligned with IoT service pages layout pattern

import React from "react";
import { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import { Button, Badge, Container, Section } from "@/components/ui";
import {
  ArrowRight,
  CheckCircle,
  PenTool,
  Layers,
  Box,
  FileText,
  RefreshCw,
  Zap,
  Shield,
  Building,
  Sun,
  Factory,
  Truck,
  Compass,
  Ruler,
  Eye,
  Settings,
  type LucideIcon,
} from "lucide-react";

// Data imports
import {
  pageMetadata,
  heroData,
  cadCapabilities,
  industryApplications,
  processSteps,
  techStack,
  differentiators,
  sampleProjects,
  faqs,
  ctaData,
  type IconName,
} from "./data";

// Client components (FAQ Accordion & Contact Form)
import { FAQAccordion } from "./components";
import { ServiceProcessTimeline } from "@/app/services/components";

// ============================================================================
// ICON RESOLVER (Server)
// ============================================================================

const iconMap: Record<IconName, LucideIcon> = {
  penTool: PenTool,
  layers: Layers,
  box: Box,
  fileText: FileText,
  refresh: RefreshCw,
  checkCircle: CheckCircle,
  zap: Zap,
  shield: Shield,
  building: Building,
  sun: Sun,
  factory: Factory,
  truck: Truck,
  compass: Compass,
  ruler: Ruler,
  eye: Eye,
  settings: Settings,
};

function getIconServer(name: IconName): LucideIcon {
  return iconMap[name] || PenTool;
}

const trustColorMap = {
  green: "text-green-600",
  blue: "text-blue-600",
  orange: "text-orange-600",
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

export default function CADDesignPage() {
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
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">
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

              {/* Hero Visual - CAD Blueprint Style */}
              <div className="relative h-[450px] w-full flex items-center justify-center bg-gray-50 dark:bg-surface-dark rounded border border-gray-200 dark:border-gray-700 p-8 shadow-inner overflow-hidden">
                <div
                  className="absolute inset-0 z-0 opacity-10"
                  style={{
                    backgroundImage: "radial-gradient(#EA580C 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                  }}
                ></div>
                <div className="relative w-full max-w-md z-10 grid grid-cols-2 gap-4">
                  {/* Floating cards representing CAD components */}
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-600 flex flex-col items-center justify-center gap-3 transform translate-y-8">
                    <PenTool className="w-10 h-10 text-orange-500" />
                    <span className="font-bold text-sm text-center dark:text-gray-200">2D Drafting</span>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-600 flex flex-col items-center justify-center gap-3 transform -translate-y-4">
                    <Box className="w-10 h-10 text-blue-500" />
                    <span className="font-bold text-sm text-center dark:text-gray-200">3D Modeling</span>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-600 flex flex-col items-center justify-center gap-3 transform translate-y-4">
                    <Layers className="w-10 h-10 text-purple-500" />
                    <span className="font-bold text-sm text-center dark:text-gray-200">BIM</span>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-600 flex flex-col items-center justify-center gap-3 transform -translate-y-8">
                    <FileText className="w-10 h-10 text-green-500" />
                    <span className="font-bold text-sm text-center dark:text-gray-200">Documentation</span>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* ================================================================
            CAD CAPABILITIES (DELIVERABLES)
        ================================================================ */}
        <Section background="surface" border="both">
          <Container>
            <div className="mb-14">
              <span className="text-primary font-bold uppercase tracking-widest text-sm">
                Capabilities
              </span>
              <h2 className="text-3xl font-bold mt-2 text-black dark:text-white">
                CAD Design Services
              </h2>
              <p className="mt-4 text-text-muted-light dark:text-text-muted-dark max-w-2xl text-lg">
                From quick sketches to complex assemblies—professional CAD documentation for any project.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
              {cadCapabilities.map((capability) => {
                const Icon = getIconServer(capability.iconName);
                return (
                  <div
                    key={capability.title}
                    className="bg-white dark:bg-background-dark p-8 rounded shadow-sm border border-gray-100 dark:border-gray-700 flex items-start gap-5 hover:border-primary/30 transition-colors"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <Icon className="w-8 h-8 text-orange-500" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-black dark:text-white">
                        {capability.title}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 leading-relaxed mb-4">
                        {capability.description}
                      </p>
                      <ul className="space-y-2">
                        {capability.deliverables.map((deliverable) => (
                          <li key={deliverable} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                            <CheckCircle className="w-4 h-4 text-orange-500 flex-shrink-0" />
                            {deliverable}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </Container>
        </Section>

        {/* ================================================================
            INDUSTRY APPLICATIONS
        ================================================================ */}
        <Section>
          <Container>
            <div className="flex justify-between items-end mb-14">
              <div>
                <span className="text-primary font-bold uppercase tracking-widest text-sm">
                  Industries
                </span>
                <h2 className="text-3xl font-bold mt-2 text-black dark:text-white">
                  Where We Apply Our Expertise
                </h2>
                <p className="mt-4 text-text-muted-light dark:text-text-muted-dark">
                  CAD services tailored to your industry&apos;s specific requirements.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {industryApplications.map((industry) => {
                const Icon = getIconServer(industry.iconName);
                return (
                  <div
                    key={industry.title}
                    className="bg-white dark:bg-surface-dark p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 hover:border-orange-300 dark:hover:border-orange-700 transition-colors"
                  >
                    <div className="w-12 h-12 bg-orange-50 dark:bg-orange-900/20 rounded-lg flex items-center justify-center text-orange-500 mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-lg text-black dark:text-white mb-3">
                      {industry.title}
                    </h3>
                    <ul className="space-y-2">
                      {industry.examples.map((example) => (
                        <li key={example} className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-orange-400 rounded-full flex-shrink-0"></span>
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
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
                How We Work
              </h2>
            </div>

            <ServiceProcessTimeline
              steps={processSteps.map((step, index) => {
                return {
                  id: index + 1,
                  title: step.title,
                  desc: step.description,
                  iconNode: <span className="text-xl font-bold">{step.number}</span>,
                };
              })}
            />
          </Container>
        </Section>

        {/* ================================================================
            DIFFERENTIATORS
        ================================================================ */}
        <Section>
          <Container>
            <div className="mb-16 text-center">
              <span className="text-primary font-bold uppercase tracking-widest text-sm">
                Why Us
              </span>
              <h2 className="text-3xl font-bold mt-2 text-black dark:text-white">
                What Sets Us Apart
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {differentiators.map((diff) => {
                const Icon = getIconServer(diff.iconName);
                return (
                  <div
                    key={diff.title}
                    className="text-center p-6 hover:bg-surface-light dark:hover:bg-surface-dark rounded transition-colors"
                  >
                    <div className="w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-4 bg-orange-50 dark:bg-orange-900/20 text-orange-500">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h4 className="font-bold text-base mb-1 text-black dark:text-white">
                      {diff.title}
                    </h4>
                    <p className="text-sm text-gray-500">{diff.description}</p>
                  </div>
                );
              })}
            </div>
          </Container>
        </Section>

        {/* ================================================================
            TECH STACK
        ================================================================ */}
        <Section background="surface">
          <Container>
            <div className="flex flex-col items-center mb-16">
              <h3 className="text-3xl font-bold mb-4 text-black dark:text-white">
                Our CAD Toolset
              </h3>
              <p className="text-text-muted-light dark:text-text-muted-dark max-w-2xl text-center">
                Industry-standard software for professional results.
              </p>
            </div>

            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-10">
              {techStack.map((category) => (
                <div key={category.category}>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-6 border-b border-gray-200 dark:border-gray-700 pb-3">
                    {category.category}
                  </h4>
                  <div className="flex flex-wrap gap-2.5">
                    {category.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-3.5 py-1.5 bg-white dark:bg-background-dark border border-gray-200 dark:border-gray-700 rounded text-sm font-medium text-gray-700 dark:text-gray-300"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* ================================================================
            SAMPLE PROJECTS
        ================================================================ */}
        <Section>
          <Container>
            <div className="flex justify-between items-end mb-12">
              <div>
                <span className="text-primary font-bold uppercase tracking-widest text-sm">
                  Portfolio
                </span>
                <h2 className="text-3xl font-bold mt-2 text-black dark:text-white">
                  Sample Projects
                </h2>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {sampleProjects.map((project) => (
                <div
                  key={project.title}
                  className="bg-white dark:bg-surface-dark rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-gray-100 dark:border-gray-800 flex flex-col group"
                >
                  <div className="h-40 bg-gray-200 dark:bg-gray-700 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-700 group-hover:scale-105 transition-transform duration-500"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <PenTool className="w-12 h-12 text-white/40" />
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="font-bold text-lg mb-3 text-black dark:text-white leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 flex-1">
                      {project.scope}
                    </p>
                    <div className="text-xs text-gray-500 space-y-2 border-t border-gray-100 dark:border-gray-700 pt-4">
                      <p>
                        <strong className="text-gray-800 dark:text-gray-300">Deliverables:</strong>{" "}
                        {project.deliverables}
                      </p>
                      <p className="text-orange-600 dark:text-orange-400 font-medium">
                        <strong className="text-gray-800 dark:text-gray-300">Timeline:</strong>{" "}
                        {project.turnaround}
                      </p>
                    </div>
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
              Common Questions
            </h2>
            <FAQAccordion faqs={faqs} />
          </Container>
        </Section>

        {/* ================================================================
            CTA SECTION
        ================================================================ */}
        <Section className="relative overflow-hidden">
          <div className="absolute -right-20 -top-20 w-96 h-96 bg-gray-200 dark:bg-gray-800 rounded-full opacity-20 blur-3xl pointer-events-none"></div>
          <div className="absolute -left-20 bottom-0 w-80 h-80 bg-orange-500 opacity-5 blur-3xl rounded-full pointer-events-none"></div>
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
