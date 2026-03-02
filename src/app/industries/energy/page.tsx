// Smart Energy & Utilities Industry Page - SSR
// Enterprise IoT and AI solutions for the energy sector

import { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import { Button, Badge, Container, Section } from "@/components/ui";
import {
  ArrowRight,
  CheckCircle,
  Zap,
  Sun,
  Cpu,
  BarChart,
  Battery,
  Shield,
  Lock,
  Clock,
  Clipboard,
  AlertTriangle,
  Database,
  Wifi,
  Cloud,
  Users,
  Target,
  Wrench,
  type LucideIcon,
} from "lucide-react";

// Data imports
import {
  pageMetadata,
  heroData,
  challenges,
  solutions,
  recommendedSolutions,
  serviceCategories,
  securityFeatures,
  caseStudies,
  implementationPatterns,
  faqs,
  ctaData,
  type IconName,
} from "./data";

// Client components
import { FAQAccordion, getIcon } from "./components";

// ============================================================================
// ICON RESOLVER (for server-rendered sections)
// ============================================================================

const iconMap: Record<IconName, LucideIcon> = {
  zap: Zap,
  sun: Sun,
  cpu: Cpu,
  barChart: BarChart,
  battery: Battery,
  shield: Shield,
  lock: Lock,
  clock: Clock,
  clipboard: Clipboard,
  alertTriangle: AlertTriangle,
  database: Database,
  wifi: Wifi,
  cloud: Cloud,
  users: Users,
  target: Target,
  wrench: Wrench,
};

function getIconServer(iconName: IconName): LucideIcon {
  return iconMap[iconName] || Zap;
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

export default function SmartEnergyIndustryPage() {
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
          className="relative overflow-hidden border-b border-gray-200 dark:border-gray-800"
        >
          <Container>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <Badge dot className="mb-6">
                  {heroData.badge}
                </Badge>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-black dark:text-white">
                  {heroData.headline} <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-600">
                    {heroData.headlineHighlight}
                  </span>
                </h1>

                <p className="text-lg md:text-xl text-text-muted-light dark:text-text-muted-dark mb-8 max-w-lg leading-relaxed">
                  {heroData.subheadline}
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" href={heroData.primaryCta.href}>
                    {heroData.primaryCta.label}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    href={heroData.secondaryCta.href}
                  >
                    {heroData.secondaryCta.label}
                  </Button>
                </div>
              </div>

              {/* Hero Visual */}
              <div className="relative h-96 w-full flex items-center justify-center bg-gray-50 dark:bg-surface-dark rounded-xl border border-gray-200 dark:border-gray-700 p-8 shadow-inner">
                <div className="relative w-full max-w-md">
                  <div className="flex justify-between items-center relative z-10">
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-16 h-16 bg-white dark:bg-gray-800 rounded-lg shadow-lg flex items-center justify-center border border-gray-200 dark:border-gray-600 group hover:border-primary transition-colors">
                        <Database className="w-8 h-8 text-primary" />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                        Grid Data
                      </span>
                    </div>
                    <div className="h-0.5 bg-gray-300 w-12 relative">
                      <div className="absolute right-0 -top-1 w-2 h-2 border-t-2 border-r-2 border-gray-300 rotate-45"></div>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-16 h-16 bg-white dark:bg-gray-800 rounded-lg shadow-lg flex items-center justify-center border border-gray-200 dark:border-gray-600 group hover:border-blue-500 transition-colors">
                        <Cpu className="w-8 h-8 text-blue-500" />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                        Processing
                      </span>
                    </div>
                    <div className="h-0.5 bg-gray-300 w-12 relative">
                      <div className="absolute right-0 -top-1 w-2 h-2 border-t-2 border-r-2 border-gray-300 rotate-45"></div>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-16 h-16 bg-primary text-white rounded-lg shadow-lg flex items-center justify-center group hover:bg-primary-dark transition-colors">
                        <BarChart className="w-8 h-8" />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                        Optimization
                      </span>
                    </div>
                  </div>
                  <div className="mt-8 text-center">
                    <span className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs px-3 py-1.5 rounded font-mono border border-green-200 dark:border-green-800">
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                      Status: Secure & Optimized
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* ================================================================
            CHALLENGES SECTION
        ================================================================ */}
        <Section>
          <Container>
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-black dark:text-white">
                  Critical Challenges in Modern Energy Operations
                </h2>
                <p className="text-text-muted-light dark:text-text-muted-dark leading-relaxed mb-8 text-lg">
                  The energy sector faces unprecedented pressure to modernize.
                  From aging infrastructure to rigorous compliance standards,
                  operational bottlenecks can lead to costly downtime and
                  security vulnerabilities.
                </p>
                <div className="p-6 bg-surface-light dark:bg-surface-dark rounded-lg border-l-4 border-primary">
                  <p className="text-sm italic text-gray-600 dark:text-gray-300 font-medium">
                    &quot;We understand that in the energy sector, 99.9% uptime
                    isn&apos;t a goal—it&apos;s the bare minimum requirement for
                    operation.&quot;
                  </p>
                </div>
              </div>

              <div className="bg-surface-light dark:bg-surface-dark p-8 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
                <ul className="space-y-6">
                  {challenges.map((challenge) => {
                    const Icon = getIconServer(challenge.iconName);
                    return (
                      <li
                        key={challenge.title}
                        className="flex gap-4 items-start group"
                      >
                        <div className="mt-1 flex-shrink-0">
                          <Icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                        </div>
                        <div>
                          <h4 className="font-bold text-black dark:text-white mb-1">
                            {challenge.title}
                          </h4>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {challenge.description}
                          </p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </Container>
        </Section>

        {/* ================================================================
            WHAT WE BUILD
        ================================================================ */}
        <Section background="surface" border="both">
          <Container>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-black dark:text-white">
                What We Build for Energy & Utilities
              </h2>
              <p className="mt-4 text-text-muted-light dark:text-text-muted-dark max-w-2xl mx-auto">
                End-to-end engineering from device firmware to cloud analytics,
                ensuring robust and scalable solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution) => {
                const Icon = getIconServer(solution.iconName);
                return (
                  <a
                    key={solution.title}
                    href={solution.href}
                    className="group block bg-white dark:bg-background-dark p-8 rounded-lg shadow-sm hover:shadow-xl border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="w-14 h-14 bg-red-50 dark:bg-red-900/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                      <Icon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-black dark:text-white">
                      {solution.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                      {solution.description}
                    </p>
                    <span className="text-primary text-sm font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                      Learn more
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </a>
                );
              })}
            </div>
          </Container>
        </Section>

        {/* ================================================================
            RECOMMENDED SOLUTIONS
        ================================================================ */}
        <Section>
          <Container>
            <h2 className="text-3xl font-bold mb-12 text-black dark:text-white">
              Recommended Solutions
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {recommendedSolutions.map((solution) => (
                <a
                  key={solution.title}
                  href={solution.href}
                  className="relative overflow-hidden bg-surface-light dark:bg-surface-dark rounded-lg border border-gray-200 dark:border-gray-700 p-8 hover:border-primary transition-colors group flex flex-col justify-between"
                >
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-primary transform origin-left scale-y-100 transition-transform"></div>
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-black dark:text-white group-hover:text-primary transition-colors">
                        {solution.title}
                      </h3>
                      <BarChart className="w-6 h-6 text-gray-400 group-hover:text-primary transition-colors" />
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                      {solution.description}
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-6 text-sm border-t border-gray-200 dark:border-gray-700 pt-6 mt-auto">
                    <div>
                      <span className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">
                        Best For
                      </span>
                      <span className="text-black dark:text-white font-medium">
                        {solution.bestFor}
                      </span>
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">
                        Outcome
                      </span>
                      <span className="text-green-600 dark:text-green-400 font-bold">
                        {solution.outcome}
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </Container>
        </Section>

        {/* ================================================================
            ENGINEERING SERVICES
        ================================================================ */}
        <Section background="surface" border="both">
          <Container>
            <div className="flex flex-col md:flex-row justify-between items-end mb-12">
              <div>
                <h2 className="text-3xl font-bold text-black dark:text-white">
                  Engineering Services for Energy
                </h2>
                <p className="text-gray-500 dark:text-gray-400 mt-2 text-lg">
                  Deep technical expertise tailored for the utilities vertical.
                </p>
              </div>
              <a
                href="/services"
                className="hidden md:flex items-center gap-2 text-primary font-bold hover:underline mt-4 md:mt-0 group"
              >
                View all services
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              {serviceCategories.map((category) => {
                const Icon = getIconServer(category.iconName);
                return (
                  <div key={category.title}>
                    <div className="flex items-center gap-3 mb-6 border-b border-gray-300 dark:border-gray-700 pb-3">
                      <Icon className="w-7 h-7 text-primary" />
                      <h3 className="font-bold text-lg text-black dark:text-white">
                        {category.title}
                      </h3>
                    </div>
                    <ul className="space-y-4">
                      {category.services.map((service) => (
                        <li key={service}>
                          <a
                            href="#"
                            className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary flex items-center gap-2 group transition-colors"
                          >
                            <ArrowRight className="w-3 h-3 text-gray-400 group-hover:text-primary transition-colors" />
                            {service}
                          </a>
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
            SECURITY & COMPLIANCE
        ================================================================ */}
        <Section>
          <Container>
            <div className="bg-gray-900 dark:bg-black rounded-2xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden border border-gray-800">
              <div className="absolute right-0 top-0 w-80 h-80 bg-primary opacity-10 blur-3xl rounded-full transform translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-8">
                  Built for Security & Compliance
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {securityFeatures.map((feature) => {
                    const Icon = getIconServer(feature.iconName);
                    return (
                      <div key={feature.title}>
                        <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mb-4 text-primary border border-gray-700">
                          <Icon className="w-6 h-6" />
                        </div>
                        <h4 className="font-bold text-base mb-2">
                          {feature.title}
                        </h4>
                        <p className="text-sm text-gray-400 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
                <div className="mt-10 pt-8 border-t border-gray-800 flex justify-end">
                  <a
                    href="#"
                    className="text-sm font-semibold hover:text-primary transition flex items-center gap-2 group"
                  >
                    Read our Security Whitepaper
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* ================================================================
            CASE STUDIES
        ================================================================ */}
        <Section background="surface">
          <Container>
            <h2 className="text-3xl font-bold mb-12 text-black dark:text-white">
              Proven Success in Energy & Utilities
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {caseStudies.map((study) => (
                <div
                  key={study.title}
                  className="bg-white dark:bg-background-dark rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700 flex flex-col group"
                >
                  <div className="h-56 bg-gray-200 dark:bg-gray-700 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-600 to-gray-800 transform group-hover:scale-105 transition-transform duration-500"></div>
                    <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1 text-xs font-bold rounded uppercase tracking-wider">
                      {study.category}
                    </div>
                  </div>
                  <div className="p-8 flex-1 flex flex-col">
                    <h3 className="font-bold text-xl mb-3 text-black dark:text-white leading-tight">
                      {study.title}
                    </h3>
                    <div className="text-sm text-gray-600 dark:text-gray-400 space-y-3 mb-6 flex-1">
                      <p>
                        <strong className="text-black dark:text-white font-semibold">
                          Challenge:
                        </strong>{" "}
                        {study.challenge}
                      </p>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                        <p className="text-green-700 dark:text-green-400 font-medium text-sm">
                          {study.result}
                        </p>
                      </div>
                    </div>
                    <a
                      href={study.href}
                      className="text-primary font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all"
                    >
                      Read full story
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* ================================================================
            IMPLEMENTATION PATTERNS
        ================================================================ */}
        <Section border="bottom">
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-black dark:text-white">
                Flexible Implementation Patterns
              </h2>
              <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                We adapt to your business model, whether you need a quick proof
                of concept or a global rollout.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 text-left">
              {implementationPatterns.map((pattern) => (
                <div
                  key={pattern.number}
                  className={`p-8 rounded-lg transition ${pattern.featured
                    ? "border-2 border-primary shadow-lg relative bg-white dark:bg-background-dark"
                    : "border border-gray-200 dark:border-gray-700 hover:shadow-lg bg-surface-light dark:bg-surface-dark group"
                    }`}
                >
                  {pattern.featured && (
                    <div className="absolute top-0 right-0 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-bl uppercase tracking-wide">
                      Most Popular
                    </div>
                  )}
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 font-bold text-xl shadow-sm ${pattern.featured
                      ? "bg-primary text-white shadow-md"
                      : "bg-white dark:bg-gray-800 text-black dark:text-white border border-gray-200 dark:border-gray-600 group-hover:border-primary group-hover:text-primary transition-colors"
                      }`}
                  >
                    {pattern.number}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-black dark:text-white">
                    {pattern.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {pattern.description}
                  </p>
                  <ul className="text-xs text-gray-500 dark:text-gray-400 space-y-2">
                    {pattern.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
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
          <div className="absolute -left-20 bottom-0 w-80 h-80 bg-primary opacity-5 blur-3xl rounded-full pointer-events-none"></div>
          <Container size="narrow" className="relative z-10 text-center">
            <h2 className="text-4xl font-bold mb-4 text-black dark:text-white">
              {ctaData.headline}
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mb-10 text-lg">
              {ctaData.subheadline}
            </p>
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
