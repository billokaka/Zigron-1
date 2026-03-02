// Services Hub Page - SSR
// End-to-end engineering services across IoT, AI, and core engineering

import { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import { Button, Badge, SectionHeader, Container, Section } from "@/components/ui";
import { ArrowRight } from "lucide-react";

// Data imports
import {
  pageMetadata,
  heroData,
  serviceVerticals,
  engagementModels,
  caseStudies,
  capabilities,
  processSteps,
  ctaData,
} from "./data";

// Client components
import {
  ServiceVerticalCard,
  EngagementModelCard,
  CapabilitiesGrid,
  ProcessSteps,
} from "./components";

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

export default function ServicesPage() {
  return (
    <>
      <Header />

      <main>
        {/* ================================================================
            HERO SECTION
        ================================================================ */}
        <Section background="gradient" padding="hero">
          <Container>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content Column */}
              <div>
                <Badge dot className="mb-6">
                  {heroData.badge}
                </Badge>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-black dark:text-white tracking-tight">
                  {heroData.headline}
                  <br />
                  <span className="text-primary">{heroData.headlineHighlight}</span>
                </h1>

                <p className="text-lg md:text-xl text-text-muted-light dark:text-text-muted-dark mb-10 max-w-2xl leading-relaxed">
                  {heroData.subheadline}
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" href={heroData.primaryCta.href}>
                    {heroData.primaryCta.label}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  <Button
                    variant="secondary"
                    size="lg"
                    href={heroData.secondaryCta.href}
                  >
                    {heroData.secondaryCta.label}
                  </Button>
                </div>
              </div>

              {/* Visual Column */}
              <div className="relative hidden lg:flex items-center justify-center">
                <div className="relative w-full max-w-md aspect-square">
                  {/* Animated rings */}
                  <div className="absolute inset-0 border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-full animate-spin" style={{ animationDuration: '30s' }}></div>
                  <div className="absolute inset-8 border border-primary/20 rounded-full animate-pulse"></div>

                  {/* Center */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-surface-dark p-6 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 z-10">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-3">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <span className="text-sm font-bold text-black dark:text-white">Full Stack</span>
                      <span className="block text-xs text-gray-500">Engineering</span>
                    </div>
                  </div>

                  {/* Orbiting service pillars */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4 bg-white dark:bg-surface-dark px-4 py-3 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                        </svg>
                      </div>
                      <span className="text-xs font-bold">IoT</span>
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-1/4 transform -translate-x-1/2 translate-y-4 bg-white dark:bg-surface-dark px-4 py-3 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                      <span className="text-xs font-bold">AI</span>
                    </div>
                  </div>

                  <div className="absolute bottom-0 right-1/4 transform translate-x-1/2 translate-y-4 bg-white dark:bg-surface-dark px-4 py-3 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <span className="text-xs font-bold">Engineering</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>


        {/* ================================================================
            SERVICE VERTICALS
        ================================================================ */}
        <Section>
          <Container>
            <SectionHeader
              label="Service Verticals"
              title="Choose Your Engineering Focus"
              description="Select a specialized domain to see how our engineering teams can support your product roadmap."
            />

            <div className="grid lg:grid-cols-3 gap-8">
              {serviceVerticals.map((vertical) => (
                <ServiceVerticalCard key={vertical.slug} vertical={vertical} />
              ))}
            </div>
          </Container>
        </Section>

        {/* ================================================================
            CAPABILITIES GRID
        ================================================================ */}
        <Section background="surface">
          <Container>
            <SectionHeader
              label="Technical Capabilities"
              title="What We Build"
              description="Deep expertise across the full stack of IoT and AI product development."
            />

            <CapabilitiesGrid capabilities={capabilities} />
          </Container>
        </Section>

        {/* ================================================================
            PROCESS STEPS
        ================================================================ */}
        <Section>
          <Container>
            <SectionHeader
              label="Our Process"
              title="How We Work"
              description="A proven methodology that balances speed with quality."
            />

            <ProcessSteps steps={processSteps} />
          </Container>
        </Section>

        {/* ================================================================
            ENGAGEMENT MODELS
        ================================================================ */}
        <Section background="surface">
          <Container>
            <SectionHeader
              label="Work With Us"
              title="Engagement Models"
              description="Choose the engagement style that best fits your project needs and organizational structure."
            />

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {engagementModels.map((model) => (
                <EngagementModelCard key={model.title} model={model} />
              ))}
            </div>
          </Container>
        </Section>

        {/* ================================================================
            CASE STUDIES
        ================================================================ */}
        <Section>
          <Container>
            <div className="flex flex-col md:flex-row justify-between items-end mb-12">
              <div>
                <Badge className="mb-4">Case Studies</Badge>
                <h2 className="text-3xl font-bold mb-2 text-black dark:text-white">
                  See Our Work in Action
                </h2>
                <p className="text-gray-500 max-w-xl">
                  Real projects, real outcomes. See how we&apos;ve helped teams like yours.
                </p>
              </div>
              <Button
                variant="ghost"
                href="/work"
                className="hidden md:inline-flex mt-4 md:mt-0"
              >
                View All Work <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {caseStudies.map((study) => (
                <div
                  key={study.title}
                  className="bg-white dark:bg-surface-dark p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-primary transition-all hover:shadow-lg"
                >
                  <p className="text-xs font-semibold text-primary mb-2 uppercase tracking-wide">
                    {study.category}
                  </p>
                  <h3 className="font-bold text-lg mb-4 text-black dark:text-white">
                    {study.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
                    <span className="font-semibold text-green-600">Outcome:</span>{" "}
                    {study.outcome}
                  </p>
                  <Button variant="ghost" href={study.href} className="p-0">
                    Read case study <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              ))}
            </div>

            <div className="md:hidden mt-8 text-center">
              <Button variant="ghost" href="/work">
                View All Work <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </Container>
        </Section>

        {/* ================================================================
            CTA SECTION
        ================================================================ */}
        <Section background="surface">
          <Container size="narrow" className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black dark:text-white">
              {ctaData.headline}
            </h2>
            <p className="text-gray-500 mb-10 max-w-xl mx-auto">
              {ctaData.subheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" href={ctaData.primaryCta.href}>
                {ctaData.primaryCta.label}
              </Button>
              <Button variant="outline" size="lg" href={ctaData.secondaryCta.href}>
                {ctaData.secondaryCta.label}
              </Button>
            </div>
          </Container>
        </Section>
      </main>

      <Footer />
    </>
  );
}
