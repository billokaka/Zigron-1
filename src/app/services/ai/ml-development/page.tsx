// ML Development Service Page - SSR
// Strictly aligned with IoT Strategy Consulting page layout pattern

import React from "react";
import { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import { Button, Badge, Container, Section } from "@/components/ui";
import {
  ArrowRight,
  CheckCircle,
  Brain,
  Eye,
  MessageSquare,
  TrendingUp,
  Search,
  Layers,
  Target,
  Cpu,
  Zap,
  Shield,
  BarChart3,
  Database,
  Cloud,
  Workflow,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

// Data imports
import {
  pageMetadata,
  heroData,
  mlCapabilities,
  useCases,
  processSteps,
  techStack,
  architectureComponents,
  differentiators,
  caseStudies,
  faqs,
  ctaData,
  type IconName,
} from "./data";

// Client components (FAQ Accordion & Contact Form)
import { FAQAccordion } from "./components";
import { ServiceProcessTimeline, SystemArchitecturePipeline } from "@/app/services/components";

// ============================================================================
// ICON RESOLVER (Server)
// ============================================================================

const iconMap: Record<IconName, LucideIcon> = {
  brain: Brain,
  eye: Eye,
  messageSquare: MessageSquare,
  trendingUp: TrendingUp,
  search: Search,
  layers: Layers,
  target: Target,
  cpu: Cpu,
  zap: Zap,
  shield: Shield,
  barChart: BarChart3,
  checkCircle: CheckCircle,
  database: Database,
  cloud: Cloud,
  workflow: Workflow,
  sparkles: Sparkles,
};

function getIconServer(name: IconName): LucideIcon {
  return iconMap[name] || Brain;
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
};

// ============================================================================
// PAGE COMPONENT
// ============================================================================

export default function MLDevelopmentPage() {
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
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-400">
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

              {/* Hero Visual - ML Training Dashboard */}
              <div className="relative h-[450px] w-full flex items-center justify-center bg-gray-50 dark:bg-surface-dark rounded border border-gray-200 dark:border-gray-700 p-8 shadow-inner overflow-hidden">
                <div
                  className="absolute inset-0 z-0 opacity-10"
                  style={{
                    backgroundImage: "radial-gradient(#9333EA 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                  }}
                ></div>
                <div className="relative w-full max-w-md z-10">
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-600 mb-4">
                    <div className="flex justify-between items-center mb-4 border-b border-gray-200 dark:border-gray-700 pb-3">
                      <span className="text-sm font-bold text-gray-500 uppercase tracking-wide">Model Training</span>
                      <span className="flex items-center gap-2 text-xs text-green-600 bg-green-50 dark:bg-green-900/30 px-2 py-1 rounded font-medium">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        Epoch 47/100
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded">
                        <Brain className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                        <span className="text-xs text-gray-500 block">Accuracy</span>
                        <span className="text-xl font-bold text-purple-600">94.7%</span>
                      </div>
                      <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded">
                        <TrendingUp className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                        <span className="text-xs text-gray-500 block">Loss</span>
                        <span className="text-xl font-bold text-blue-600">0.032</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* ================================================================
            ML CAPABILITIES (DELIVERABLES)
        ================================================================ */}
        <Section background="surface" border="both">
          <Container>
            <div className="mb-14">
              <span className="text-primary font-bold uppercase tracking-widest text-sm">
                Capabilities
              </span>
              <h2 className="text-3xl font-bold mt-2 text-black dark:text-white">
                Machine Learning Expertise
              </h2>
              <p className="mt-4 text-text-muted-light dark:text-text-muted-dark max-w-2xl text-lg">
                We develop custom models across the ML spectrum—from classical algorithms to deep learning.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
              {mlCapabilities.map((capability) => {
                const Icon = getIconServer(capability.iconName);
                return (
                  <div
                    key={capability.title}
                    className="bg-white dark:bg-background-dark p-8 rounded shadow-sm border border-gray-100 dark:border-gray-700 flex items-start gap-5 hover:border-primary/30 transition-colors"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <Icon className="w-8 h-8 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-black dark:text-white">
                        {capability.title}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 leading-relaxed mb-4">
                        {capability.description}
                      </p>
                      <ul className="space-y-2">
                        {capability.techniques.map((technique) => (
                          <li key={technique} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                            <CheckCircle className="w-4 h-4 text-purple-500 flex-shrink-0" />
                            {technique}
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
                  Real-World ML Applications
                </h2>
                <p className="mt-4 text-text-muted-light dark:text-text-muted-dark">
                  Examples of how we&apos;ve applied machine learning to solve business problems.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {useCases.map((useCase) => (
                <div
                  key={useCase.title}
                  className="bg-white dark:bg-surface-dark p-8 rounded shadow-sm hover:shadow-xl transition border-t-4 border-purple-600 flex flex-col h-full"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs font-semibold rounded-full">
                      {useCase.industry}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-6 text-black dark:text-white">
                    {useCase.title}
                  </h3>
                  <div className="space-y-5 flex-1">
                    <div className="bg-purple-50 dark:bg-purple-900/10 p-4 rounded">
                      <p className="text-xs font-bold text-purple-600 mb-1 uppercase tracking-wide">
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
                Our ML Development Process
              </h2>
            </div>

            <ServiceProcessTimeline
              steps={processSteps.map((step, index) => {
                const deliverablesText = step.deliverables?.length ? ` Deliverables: ${step.deliverables.join(", ")}` : '';
                return {
                  id: index + 1,
                  title: step.title,
                  desc: step.description + deliverablesText,
                  iconNode: <span className="text-xl font-bold">{step.number}</span>,
                };
              })}
            />
          </Container>
        </Section>

        {/* ================================================================
            ARCHITECTURE (SYSTEM LAYERS)
        ================================================================ */}
        <Section>
          <Container>
            <div className="mb-16 text-center">
              <span className="text-primary font-bold uppercase tracking-widest text-sm">
                Architecture
              </span>
              <h2 className="text-3xl font-bold mt-2 text-black dark:text-white">
                ML System Architecture
              </h2>
              <p className="mt-4 text-text-muted-light dark:text-text-muted-dark">
                Production-ready ML pipelines from data ingestion to model serving.
              </p>
            </div>

            <SystemArchitecturePipeline
              layers={architectureComponents.map((component) => {
                const Icon = getIconServer(component.iconName);
                return {
                  title: component.title,
                  subtitle: component.subtitle,
                  iconNode: <Icon />,
                };
              })}
              pillars={differentiators.map((diff) => {
                const Icon = getIconServer(diff.iconName);
                return {
                  title: diff.title,
                  description: diff.description,
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
                Our ML Technology Stack
              </h3>
              <p className="text-text-muted-light dark:text-text-muted-dark max-w-2xl text-center">
                Modern, battle-tested tools for building production ML systems.
              </p>
            </div>

            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-10">
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
                  Proof Points
                </span>
                <h2 className="text-3xl font-bold mt-2 text-black dark:text-white">
                  ML in Production
                </h2>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {caseStudies.map((study) => (
                <div
                  key={study.title}
                  className="bg-white dark:bg-surface-dark rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-gray-100 dark:border-gray-800 flex flex-col group"
                >
                  <div className="h-52 bg-gray-200 dark:bg-gray-700 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-purple-800 group-hover:scale-105 transition-transform duration-500"></div>
                    <div className="absolute top-4 left-4 bg-white/95 dark:bg-black/80 px-3 py-1 text-xs font-bold rounded uppercase tracking-wider">
                      ML Project
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="font-bold text-lg mb-3 text-black dark:text-white leading-tight">
                      {study.title}
                    </h3>
                    <div className="text-xs text-gray-500 space-y-2 mb-6 flex-1 border-t border-gray-100 dark:border-gray-700 pt-3">
                      <p>
                        <strong className="text-gray-800 dark:text-gray-300">
                          Focus:
                        </strong>{" "}
                        {study.services}
                      </p>
                      <p className="text-green-600 dark:text-green-400 font-semibold">
                        <strong className="text-gray-800 dark:text-gray-300">
                          Outcome:
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
          <div className="absolute -left-20 bottom-0 w-80 h-80 bg-purple-500 opacity-5 blur-3xl rounded-full pointer-events-none"></div>
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
