// [PAGE_NAME] - Components
// Copy this template to: src/app/[route]/[slug]/components.tsx

"use client";

import { Button, Badge, SectionHeader, Container, Section } from "@/components/ui";
import {
  ArrowRight,
  CheckCircle,
  Cpu,
  Cloud,
  Zap,
  Shield,
  Settings,
  Database,
  BarChart3,
  LucideIcon,
} from "lucide-react";
import {
  heroData,
  features,
  useCases,
  processSteps,
  techStack,
  caseStudies,
  faqs,
  ctaData,
  IconName,
} from "./data";

// ============================================================================
// ICON MAPPING
// ============================================================================

const iconMap: Record<IconName, LucideIcon> = {
  cpu: Cpu,
  cloud: Cloud,
  zap: Zap,
  shield: Shield,
  checkCircle: CheckCircle,
  settings: Settings,
  database: Database,
  barChart: BarChart3,
};

const getIcon = (name: IconName): LucideIcon => iconMap[name] || Cpu;

// ============================================================================
// HERO SECTION
// ============================================================================

export function HeroSection() {
  return (
    <Section background="gradient" padding="hero" className="relative overflow-hidden">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <Badge className="mb-6">{heroData.badge}</Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-black dark:text-white tracking-tight">
              {heroData.headline} <br />
              <span className="text-primary">{heroData.headlineHighlight}</span>
            </h1>

            <p className="text-lg md:text-xl text-text-muted-light dark:text-text-muted-dark mb-8 max-w-lg leading-relaxed font-light">
              {heroData.subheadline}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-center mb-10">
              <Button size="lg" href={heroData.primaryCta.href}>
                {heroData.primaryCta.label}
              </Button>
              <Button variant="ghost" href={heroData.secondaryCta.href}>
                {heroData.secondaryCta.label}
              </Button>
            </div>

            <div className="flex flex-wrap gap-3">
              {heroData.trustBadges.map((badge) => {
                const Icon = getIcon(badge.icon as IconName);
                return (
                  <div
                    key={badge.label}
                    className="bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 rounded-full px-4 py-2 text-xs font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2 shadow-sm"
                  >
                    <Icon className="w-4 h-4 text-primary" />
                    {badge.label}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Optional: Visual/Dashboard - customize or remove */}
          <div className="relative h-96 w-full hidden lg:flex items-center justify-center">
            <div className="w-full max-w-md aspect-square bg-gradient-to-tr from-gray-100 to-white dark:from-surface-dark dark:to-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 flex items-center justify-center">
              <Cpu className="w-24 h-24 text-gray-300 dark:text-gray-600" />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

// ============================================================================
// FEATURES SECTION
// ============================================================================

export function FeaturesSection() {
  return (
    <Section>
      <Container>
        <SectionHeader
          label="Features"
          title="[Section Title]"
          description="[Section description]"
        />

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature) => {
            const Icon = getIcon(feature.iconName);
            return (
              <div
                key={feature.title}
                className="bg-white dark:bg-surface-dark p-8 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-red-50 dark:bg-red-900/20 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                    <Icon className="w-7 h-7" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 text-black dark:text-white">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      {feature.description}
                    </p>
                    {feature.items && (
                      <ul className="space-y-2">
                        {feature.items.map((item) => (
                          <li key={item} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}

// ============================================================================
// USE CASES SECTION
// ============================================================================

export function UseCasesSection() {
  return (
    <Section background="surface">
      <Container>
        <SectionHeader
          label="Use Cases"
          title="[Use Cases Title]"
          description="[Use cases description]"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase) => (
            <div
              key={useCase.title}
              className="bg-white dark:bg-background-dark p-6 rounded-xl border border-gray-200 dark:border-gray-800"
            >
              <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                {useCase.category}
              </span>
              <h3 className="text-lg font-bold text-black dark:text-white mt-4 mb-3">
                {useCase.title}
              </h3>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="font-bold text-gray-400 uppercase text-xs">Problem</span>
                  <p className="text-gray-600 dark:text-gray-400">{useCase.problem}</p>
                </div>
                <div>
                  <span className="font-bold text-gray-400 uppercase text-xs">Solution</span>
                  <p className="text-gray-600 dark:text-gray-400">{useCase.solution}</p>
                </div>
                <div>
                  <span className="font-bold text-primary uppercase text-xs">Outcome</span>
                  <p className="text-gray-800 dark:text-white font-semibold">{useCase.outcome}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

// ============================================================================
// PROCESS SECTION
// ============================================================================

export function ProcessSection() {
  return (
    <Section>
      <Container>
        <SectionHeader
          label="Process"
          title="[Process Title]"
          description="[Process description]"
        />

        <div className="grid md:grid-cols-4 gap-6">
          {processSteps.map((step, index) => (
            <div key={step.number} className="relative">
              <div className="bg-white dark:bg-surface-dark p-6 rounded-xl border border-gray-200 dark:border-gray-700 h-full">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold mb-4">
                  {step.number}
                </div>
                <h4 className="font-bold text-black dark:text-white mb-2">{step.title}</h4>
                <p className="text-sm text-gray-500">{step.description}</p>
              </div>
              {index < processSteps.length - 1 && (
                <ArrowRight className="hidden md:block absolute top-1/2 -right-3 w-6 h-6 text-gray-300 -translate-y-1/2" />
              )}
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

// ============================================================================
// TECH STACK SECTION
// ============================================================================

export function TechStackSection() {
  return (
    <Section background="surface">
      <Container>
        <SectionHeader
          label="Technology"
          title="[Tech Stack Title]"
          description="[Tech stack description]"
        />

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {techStack.map((category) => (
            <div key={category.category} className="bg-white dark:bg-background-dark p-6 rounded-xl border border-gray-200 dark:border-gray-800">
              <h4 className="font-bold text-sm mb-4 text-black dark:text-white uppercase tracking-wider">
                {category.category}
              </h4>
              <ul className="text-xs text-gray-500 space-y-2 font-medium">
                {category.technologies.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

// ============================================================================
// CASE STUDIES SECTION
// ============================================================================

export function CaseStudiesSection() {
  return (
    <Section>
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <Badge className="mb-4">Case Studies</Badge>
            <h2 className="text-3xl font-bold text-black dark:text-white">[Case Studies Title]</h2>
          </div>
          <Button variant="ghost" href="/work">
            View all work <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <div
              key={study.title}
              className="bg-white dark:bg-surface-dark rounded-xl overflow-hidden shadow-sm border border-gray-200 dark:border-gray-800 group hover:shadow-lg transition-all"
            >
              <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center">
                <Cpu className="w-12 h-12 text-primary/60" />
              </div>
              <div className="p-6">
                <p className="text-xs text-primary font-semibold uppercase tracking-wide mb-2">
                  {study.services}
                </p>
                <h3 className="font-bold text-lg text-black dark:text-white mb-3">
                  {study.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  {study.result}
                </p>
                <Button variant="ghost" href={study.href} className="p-0">
                  Read case study <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

// ============================================================================
// FAQ SECTION
// ============================================================================

export function FAQSection() {
  return (
    <Section background="surface">
      <Container size="narrow">
        <h2 className="text-3xl font-bold text-center mb-12 text-black dark:text-white">
          Common Questions
        </h2>

        <div className="space-y-6">
          {faqs.map((faq) => (
            <div key={faq.question} className="border-b border-gray-200 dark:border-gray-800 pb-6">
              <h4 className="font-bold text-base text-black dark:text-white mb-2">
                {faq.question}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

// ============================================================================
// CTA SECTION
// ============================================================================

export function CTASection() {
  return (
    <Section className="relative overflow-hidden">
      <div className="absolute -right-20 -top-20 w-96 h-96 bg-primary/10 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute -left-20 bottom-0 w-72 h-72 bg-primary/5 rounded-full opacity-30 blur-3xl"></div>

      <Container size="narrow" className="relative z-10 text-center">
        <h2 className="text-4xl font-bold mb-4 text-black dark:text-white tracking-tight">
          {ctaData.headline}
        </h2>
        <p className="text-gray-500 mb-10 max-w-2xl mx-auto font-light">
          {ctaData.subheadline}
        </p>

        <div className="bg-white dark:bg-surface-dark p-8 md:p-10 rounded-xl shadow-2xl max-w-2xl mx-auto text-left border border-gray-100 dark:border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-wider">
                Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-md p-3 text-sm outline-none transition"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-wider">
                Company Email
              </label>
              <input
                type="email"
                placeholder="name@company.com"
                className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-md p-3 text-sm outline-none transition"
              />
            </div>
          </div>

          <div className="mb-8">
            <label className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-wider">
              Project Details
            </label>
            <textarea
              placeholder="Tell us about your project..."
              rows={4}
              className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-md p-3 text-sm outline-none transition resize-none"
            ></textarea>
          </div>

          <div className="flex flex-col gap-4">
            <Button size="lg" className="w-full justify-center">
              Get Started
            </Button>
            <div className="text-center">
              <span className="text-xs text-gray-400">
                Or email us at{" "}
                <a href={`mailto:${ctaData.email}`} className="text-primary hover:underline">
                  {ctaData.email}
                </a>
              </span>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
