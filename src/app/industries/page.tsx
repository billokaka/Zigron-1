// Industries Hub Page - SSR
// Industry-specific IoT, AI, and engineering solutions

import { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import { Button, Badge, Container, Section } from "@/components/ui";
import {
  ArrowRight,
  Sun,
  Factory,
  Building2,
  Heart,
  Home,
  Truck,
  Zap,
  Shield,
  Clock,
  TrendingDown,
  Eye,
  CheckCircle,
  Cloud,
  Lightbulb,
  Cpu,
  Smartphone,
  type LucideIcon,
} from "lucide-react";

// Data imports
import {
  pageMetadata,
  heroData,
  industries,
  commonOutcomes,
  deliverySteps,
  complianceBadges,
  caseStudies,
  crossIndustrySolutions,
  faqs,
  ctaData,
  type IconName,
} from "./data";

// Client components
import {
  IndustriesGrid,
  CommonOutcomes,
  CrossIndustrySolutions,
  FAQAccordion,
} from "./components";

// ============================================================================
// ICON RESOLVER (for server-rendered sections)
// ============================================================================

const iconMap: Record<IconName, LucideIcon> = {
  sun: Sun,
  factory: Factory,
  building2: Building2,
  heart: Heart,
  home: Home,
  truck: Truck,
  zap: Zap,
  shield: Shield,
  clock: Clock,
  trendingDown: TrendingDown,
  eye: Eye,
  checkCircle: CheckCircle,
  cloud: Cloud,
  lightbulb: Lightbulb,
  cpu: Cpu,
  smartphone: Smartphone,
};

function getIcon(iconName: IconName): LucideIcon {
  return iconMap[iconName] || Cpu;
}

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

export default function IndustriesPage() {
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
              {/* Hero Content */}
              <div className="text-left">
                <Badge dot className="mb-6">{heroData.badge}</Badge>

                <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 text-black dark:text-white tracking-tight">
                  {heroData.headline}{" "}
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

                {/* Trust Badges */}
                <div className="border-t border-gray-200 dark:border-gray-800 pt-8">
                  <ul className="flex flex-col md:flex-row gap-6 md:gap-8 text-sm font-medium text-gray-600 dark:text-gray-400">
                    <li className="flex items-center gap-2">
                      <Shield className="w-5 h-5 text-green-500" />
                      Industry Experts
                    </li>
                    <li className="flex items-center gap-2">
                      <Shield className="w-5 h-5 text-blue-500" />
                      Compliance Ready
                    </li>
                    <li className="flex items-center gap-2">
                      <Shield className="w-5 h-5 text-primary" />
                      100+ Projects
                    </li>
                  </ul>
                </div>
              </div>

              {/* Hero Visual - Industries Stack */}
              <div className="relative h-[450px] w-full hidden lg:flex items-center justify-center bg-gray-50 dark:bg-surface-dark rounded border border-gray-200 dark:border-gray-700 p-8 shadow-inner">
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

                    {/* Node 1: Energy */}
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg border border-gray-200 dark:border-gray-600 flex items-center gap-4 w-64 relative">
                      <div className="w-10 h-10 bg-yellow-50 dark:bg-yellow-900/30 rounded flex items-center justify-center text-yellow-600">
                        <Sun className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-xs text-primary font-bold uppercase mb-0.5">
                          Energy & Utilities
                        </div>
                        <div className="text-sm font-semibold dark:text-white">
                          Solar, Grid, Oil & Gas
                        </div>
                      </div>
                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary rounded-full ring-4 ring-white dark:ring-gray-800"></div>
                    </div>

                    {/* Node 2: Healthcare */}
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg border-2 border-primary flex items-center gap-4 w-64 relative">
                      <div className="w-10 h-10 bg-red-50 dark:bg-red-900/30 rounded flex items-center justify-center text-red-600">
                        <Heart className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-xs text-primary font-bold uppercase mb-0.5">
                          Healthcare & MedTech
                        </div>
                        <div className="text-sm font-semibold dark:text-white">
                          Remote Monitoring, Devices
                        </div>
                      </div>
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary rounded-full ring-4 ring-white dark:ring-gray-800"></div>
                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary rounded-full ring-4 ring-white dark:ring-gray-800"></div>
                    </div>

                    {/* Node 3: Manufacturing */}
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg border border-gray-200 dark:border-gray-600 flex items-center gap-4 w-64 relative">
                      <div className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded flex items-center justify-center text-gray-600 dark:text-gray-300">
                        <Factory className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-xs text-primary font-bold uppercase mb-0.5">
                          Manufacturing & Industrial
                        </div>
                        <div className="text-sm font-semibold dark:text-white">
                          Predictive Maintenance
                        </div>
                      </div>
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary rounded-full ring-4 ring-white dark:ring-gray-800"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* ================================================================
            INDUSTRIES GRID (Client Component with Filtering)
        ================================================================ */}
        <Section background="surface">
          <Container>
            <IndustriesGrid industries={industries} />
          </Container>
        </Section>

        {/* ================================================================
            OUTCOMES + HOW WE DELIVER
        ================================================================ */}
        <Section border="top">
          <Container>
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              {/* Common Outcomes */}
              <div className="lg:w-1/2">
                <h2 className="text-3xl lg:text-4xl font-bold text-black dark:text-white mb-10 tracking-tight">
                  Common outcomes by industry
                </h2>
                <CommonOutcomes outcomes={commonOutcomes} />
              </div>

              {/* How We Deliver */}
              <div className="lg:w-1/2 w-full">
                <div className="bg-black text-white p-10 lg:p-12 rounded-2xl relative overflow-hidden shadow-2xl">
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-8">How we deliver</h3>
                    <div className="space-y-8">
                      {deliverySteps.map((step) => (
                        <div key={step.number} className="flex gap-5">
                          <span className="font-black text-4xl text-primary opacity-80 leading-none">
                            {step.number}
                          </span>
                          <div>
                            <h4 className="font-bold text-lg mb-1">{step.title}</h4>
                            <p className="text-gray-400 text-sm leading-relaxed">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Background decoration */}
                  <div className="absolute -right-16 -bottom-16 opacity-10 text-white">
                    <Cpu className="w-80 h-80" />
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* ================================================================
            COMPLIANCE TRUST STRIP
        ================================================================ */}
        <div className="border-y border-gray-100 dark:border-gray-800 bg-surface-light dark:bg-surface-dark py-10">
          <Container>
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex flex-col md:w-1/3 text-center md:text-left">
                <h4 className="font-bold text-black dark:text-white text-sm uppercase tracking-wider mb-2">
                  Trusted in high-stakes environments
                </h4>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Regulated, complex, mission-critical.
                </p>
              </div>
              <div className="flex flex-wrap gap-8 md:gap-12 items-center justify-center md:justify-end flex-1 opacity-60 hover:opacity-100 transition-all duration-500">
                {complianceBadges.map((badge) => {
                  const Icon = getIcon(badge.iconName);
                  return (
                    <div key={badge.label} className="flex items-center gap-2 group">
                      <Icon className="w-8 h-8 text-primary" />
                      <span className="font-bold text-sm text-black dark:text-white">
                        {badge.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </Container>
        </div>

        {/* ================================================================
            CASE STUDIES PREVIEW
        ================================================================ */}
        <Section>
          <Container>
            <div className="flex justify-between items-end mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-black dark:text-white tracking-tight">
                Recent Work
              </h2>
              <a
                href="/work"
                className="hidden md:flex items-center text-primary font-bold hover:gap-3 transition-all"
              >
                View all case studies
                <ArrowRight className="w-5 h-5 ml-1" />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {caseStudies.map((study) => (
                <div
                  key={study.title}
                  className="group flex flex-col rounded-2xl overflow-hidden bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <div className="h-56 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 group-hover:scale-105 transition-transform duration-700"></div>
                  </div>
                  <div className="p-8 flex flex-col flex-grow relative z-10 bg-white dark:bg-gray-900">
                    <div className="mb-4">
                      <span className="px-3 py-1.5 rounded-full bg-red-50 dark:bg-red-900/20 text-primary text-xs font-bold uppercase tracking-wide">
                        {study.industry}
                      </span>
                    </div>
                    <h3 className="font-bold text-xl mb-3 leading-snug text-black dark:text-white group-hover:text-primary transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 flex-grow leading-relaxed">
                      {study.result}
                    </p>
                    <a
                      href={study.href}
                      className="text-black dark:text-white font-bold text-sm flex items-center group-hover:text-primary transition-colors"
                    >
                      Read case study
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 md:hidden text-center">
              <a
                href="/work"
                className="inline-flex items-center text-primary font-bold hover:gap-3 transition-all"
              >
                View all case studies
                <ArrowRight className="w-5 h-5 ml-1" />
              </a>
            </div>
          </Container>
        </Section>

        {/* ================================================================
            CROSS-INDUSTRY SOLUTIONS
        ================================================================ */}
        <Section background="surface">
          <Container>
            <h2 className="text-2xl font-bold text-black dark:text-white mb-10 tracking-tight">
              Solutions most used across industries
            </h2>
            <CrossIndustrySolutions solutions={crossIndustrySolutions} />
          </Container>
        </Section>

        {/* ================================================================
            FAQ (Client Component)
        ================================================================ */}
        <Section>
          <Container size="narrow">
            <h2 className="text-3xl lg:text-4xl font-bold text-black dark:text-white mb-14 text-center tracking-tight">
              Frequently Asked Questions
            </h2>
            <FAQAccordion faqs={faqs} />
          </Container>
        </Section>

        {/* ================================================================
            CTA SECTION
        ================================================================ */}
        <Section background="dark" className="text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary via-gray-900 to-black"></div>
          <Container size="narrow" className="relative z-10">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
              {ctaData.headline}
            </h2>
            <p className="text-gray-300 text-lg md:text-xl max-w-xl mx-auto font-light mb-10">
              {ctaData.subheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Button
                size="lg"
                href={ctaData.primaryCta.href}
                className="shadow-xl hover:scale-105 transition-transform"
              >
                {ctaData.primaryCta.label}
              </Button>
              <Button
                variant="outline-light"
                size="lg"
                href={ctaData.secondaryCta.href}
              >
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
