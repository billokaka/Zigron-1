// Custom Expertise Areas Hub - SSR
// Showcases Zigron's deep industry expertise - NOT products for sale

import { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import { Button, Badge, Container, Section } from "@/components/ui";
import {
  ArrowRight,
  Sun,
  Settings,
  Truck,
  Home,
  Heart,
  Cpu,
  Cloud,
  Lightbulb,
  Layout,
  Shield,
  Building2,
  Code,
  type LucideIcon,
} from "lucide-react";
import type { IconName } from "./data";

// Data imports
import {
  pageMetadata,
  heroData,
  filterCategories,
  solutions,
  architectureLayers,
  startingPoints,
  stats,
  integrations,
  securityFeatures,
  faqs,
  ctaData,
} from "./data";

// Client components
import {
  SolutionsGrid,
  FAQAccordion,
  StartingPointCard,
} from "./components";

// ============================================================================
// ICON RESOLVER (for server-rendered sections)
// ============================================================================

const iconMap: Record<IconName, LucideIcon> = {
  sun: Sun,
  settings: Settings,
  truck: Truck,
  home: Home,
  heart: Heart,
  cpu: Cpu,
  cloud: Cloud,
  lightbulb: Lightbulb,
  layout: Layout,
  shield: Shield,
  building2: Building2,
  code: Code,
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

export default function SolutionsPage() {
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

                {/* Trust Badges */}
                <div className="border-t border-gray-200 dark:border-gray-800 pt-8">
                  <ul className="flex flex-col md:flex-row gap-6 md:gap-8 text-sm font-medium text-gray-600 dark:text-gray-400">
                    <li className="flex items-center gap-2">
                      <Shield className="w-5 h-5 text-green-500" />
                      100% Custom IP
                    </li>
                    <li className="flex items-center gap-2">
                      <Shield className="w-5 h-5 text-blue-500" />
                      No Vendor Lock-in
                    </li>
                    <li className="flex items-center gap-2">
                      <Shield className="w-5 h-5 text-primary" />
                      Enterprise Support
                    </li>
                  </ul>
                </div>
              </div>

              {/* Hero Visual - Connected Node Diagram */}
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

                    {/* Node 1: Discovery */}
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg border border-gray-200 dark:border-gray-600 flex items-center gap-4 w-64 relative">
                      <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/30 rounded flex items-center justify-center text-blue-600">
                        <Lightbulb className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-xs text-primary font-bold uppercase mb-0.5">
                          Phase 1
                        </div>
                        <div className="text-sm font-semibold dark:text-white">
                          Discovery & Design
                        </div>
                      </div>
                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary rounded-full ring-4 ring-white dark:ring-gray-800"></div>
                    </div>

                    {/* Node 2: Custom Build */}
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg border-2 border-primary flex items-center gap-4 w-64 relative">
                      <div className="w-10 h-10 bg-red-50 dark:bg-red-900/30 rounded flex items-center justify-center text-primary">
                        <Code className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-xs text-primary font-bold uppercase mb-0.5">
                          Core
                        </div>
                        <div className="text-sm font-semibold dark:text-white">
                          Custom Build
                        </div>
                      </div>
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary rounded-full ring-4 ring-white dark:ring-gray-800"></div>
                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary rounded-full ring-4 ring-white dark:ring-gray-800"></div>
                    </div>

                    {/* Node 3: Deployment */}
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg border border-gray-200 dark:border-gray-600 flex items-center gap-4 w-64 relative">
                      <div className="w-10 h-10 bg-green-50 dark:bg-green-900/30 rounded flex items-center justify-center text-green-600">
                        <Cloud className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-xs text-primary font-bold uppercase mb-0.5">
                          Phase 3
                        </div>
                        <div className="text-sm font-semibold dark:text-white">
                          Deploy & Scale
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
            SOLUTIONS GRID (Client Component with Filtering)
        ================================================================ */}
        <Section background="surface" id="expertise">
          <Container>
            <SolutionsGrid solutions={solutions} categories={filterCategories} />
          </Container>
        </Section>

        {/* ================================================================
            ARCHITECTURE SECTION
        ================================================================ */}
        <Section>
          <Container size="default">
            <div className="mb-16 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-black text-black dark:text-white mb-6">
                How we build custom solutions
              </h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl text-lg leading-relaxed">
                A tailored, secure-by-design architecture engineered to fit
                your specific requirements and existing infrastructure.
              </p>
            </div>

            <div className="relative">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
                {architectureLayers.map((layer) => {
                  const Icon = getIcon(layer.iconName);
                  return (
                    <div
                      key={layer.title}
                      className="flex flex-row md:flex-col items-center md:text-center gap-6 md:gap-4 group"
                    >
                      <div className="w-20 h-20 rounded-2xl bg-white dark:bg-gray-800 text-primary flex items-center justify-center border border-gray-100 dark:border-gray-700 shadow-xl shadow-gray-200/50 dark:shadow-none shrink-0 transition-transform group-hover:scale-110 duration-300">
                        <Icon className="w-10 h-10" />
                      </div>
                      <div className="text-left md:text-center">
                        <h4 className="font-bold text-lg text-black dark:text-white mb-1">
                          {layer.title}
                        </h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {layer.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Connection line */}
              <div className="hidden md:block absolute top-10 left-0 w-full h-0.5 border-t-2 border-dashed border-gray-200 dark:border-gray-800 -z-0"></div>
            </div>
          </Container>
        </Section>

        {/* ================================================================
            STARTING POINTS
        ================================================================ */}
        <Section background="surface" border="both">
          <Container>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-black dark:text-white">
                How can we help you?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {startingPoints.map((point) => (
                <StartingPointCard key={point.title} point={point} />
              ))}
            </div>
          </Container>
        </Section>

        {/* ================================================================
            STATS & INTEGRATION
        ================================================================ */}
        <Section>
          <Container>
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-gray-100 dark:border-gray-800 mb-20">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`flex flex-col gap-2 border-l-4 pl-6 ${index === 0
                    ? "border-primary"
                    : "border-gray-100 dark:border-gray-700 hover:border-primary"
                    } transition-colors duration-500`}
                >
                  <h4 className="text-5xl font-black text-black dark:text-white">
                    {stat.value}
                  </h4>
                  <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Integration Section */}
            <div className="bg-surface-light dark:bg-surface-dark rounded-2xl p-8 md:p-14 flex flex-col lg:flex-row gap-16 items-start">
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-black dark:text-white mb-6">
                  Integration & Compatibility
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg leading-relaxed">
                  We don&apos;t build in silos. Our solutions are engineered to fit
                  your ecosystem, whether on-premise, cloud, or hybrid.
                </p>
                <div className="flex flex-wrap gap-3">
                  {integrations.map((integration) => (
                    <span
                      key={integration}
                      className="px-4 py-2 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 text-sm font-semibold text-gray-700 dark:text-gray-200 shadow-sm"
                    >
                      {integration}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex-1 w-full">
                <div className="grid grid-cols-1 gap-6">
                  {securityFeatures.map((feature) => {
                    const Icon = getIcon(feature.iconName);
                    return (
                      <div
                        key={feature.title}
                        className="flex items-start gap-5 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow"
                      >
                        <Icon className="w-8 h-8 text-primary shrink-0" />
                        <div>
                          <h5 className="text-xl font-bold text-black dark:text-white mb-1">
                            {feature.title}
                          </h5>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* ================================================================
            FAQ (Client Component)
        ================================================================ */}
        <Section background="surface">
          <Container size="narrow">
            <h2 className="text-3xl font-black text-black dark:text-white text-center mb-12">
              Frequently Asked Questions
            </h2>
            <FAQAccordion faqs={faqs} />
          </Container>
        </Section>

        {/* ================================================================
            CTA SECTION
        ================================================================ */}
        <Section className="text-center">
          <Container size="narrow">
            <h2 className="text-4xl md:text-5xl font-black text-black dark:text-white mb-6">
              {ctaData.headline}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
              {ctaData.subheadline}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-5">
              <Button size="lg" href={ctaData.primaryCta.href} className="shadow-xl">
                {ctaData.primaryCta.label}
              </Button>
              <Button
                variant="secondary"
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
