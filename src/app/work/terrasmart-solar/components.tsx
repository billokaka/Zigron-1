"use client";

import Image from "next/image";
import { Button, Container, Section } from "@/components/ui";
import {
  ArrowRight,
  Sun,
  Wifi,
  Building,
  Smartphone,
  Server,
  Cloud,
  Zap,
  Map,
  FileText,
  Battery,
  Shield,
  AlertTriangle,
  Cpu,
  CheckCircle,
} from "lucide-react";
import {
  heroData,
  overviewData,
  contextData,
  architectureData,
  timeline,
  securityNote,
  impactMetrics,
  futureData,
  relatedCaseStudies,
  relatedLinks,
  ctaData,
} from "./data";

// ============================================================================
// HERO SECTION
// ============================================================================

export function HeroSection() {
  return (
    <Section background="surface" padding="hero" className="relative overflow-hidden">
      <Container>
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-gray-500 mb-8 uppercase tracking-wider font-semibold">
          {heroData.breadcrumb.map((item, index) => (
            <span key={item.label} className="flex items-center gap-2">
              {item.href ? (
                <a href={item.href} className="hover:text-primary transition">
                  {item.label}
                </a>
              ) : (
                <span className="text-primary">{item.label}</span>
              )}
              {index < heroData.breadcrumb.length - 1 && (
                <span className="text-gray-300">/</span>
              )}
            </span>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="text-left pt-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-black dark:text-white">
              {heroData.title}
            </h1>

            <p className="text-xl md:text-2xl font-light text-text-muted-light dark:text-text-muted-dark mb-8 leading-relaxed border-l-4 border-primary pl-6">
              {heroData.subtitle}
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              {heroData.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center px-3 py-1 rounded bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-xs font-bold uppercase tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>

            <Button size="lg" href="/contact">
              Talk to us about a similar project
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          <div className="relative h-[500px] w-full bg-gray-100 dark:bg-surface-dark rounded-xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800">
            <Image
              src={heroData.image}
              alt="Solar Panels Installation"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
              <div className="flex items-center gap-4 text-white">
                {heroData.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-white/10 backdrop-blur-md p-3 rounded-lg border border-white/20"
                  >
                    <span className="block text-2xl font-bold">{stat.value}</span>
                    <span className="text-xs uppercase opacity-80">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

// ============================================================================
// OVERVIEW SECTION
// ============================================================================

export function OverviewSection() {
  const items = [
    { ...overviewData.challenge, icon: AlertTriangle },
    { ...overviewData.solution, icon: Cpu },
    { ...overviewData.results, icon: CheckCircle },
  ];

  return (
    <Section className="border-b border-gray-200 dark:border-gray-800">
      <Container>
        <div className="grid md:grid-cols-3 gap-12 relative divide-y md:divide-y-0 md:divide-x divide-gray-200 dark:divide-gray-700">
          {items.map((item, index) => (
            <div
              key={item.title}
              className={`${index === 0 ? "md:pr-8" : ""} ${index === 1 ? "md:px-8 pt-8 md:pt-0" : ""} ${index === 2 ? "md:pl-8 pt-8 md:pt-0" : ""}`}
            >
              <div className="flex items-center gap-3 mb-4 text-primary">
                <item.icon className="w-8 h-8" strokeWidth={1.5} />
                <h3 className="font-bold text-lg uppercase tracking-wide">{item.title}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

// ============================================================================
// CONTEXT SECTION
// ============================================================================

export function ContextSection() {
  const iconMap: Record<string, React.ElementType> = {
    sun: Sun,
    wifi: Wifi,
    building: Building,
  };

  return (
    <Section>
      <Container>
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <h2 className="text-3xl font-bold mb-6 text-black dark:text-white">
              Context & Complexity
            </h2>
            {contextData.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className={`text-gray-600 dark:text-gray-400 leading-relaxed ${index === 0 ? "text-lg mb-6" : "mb-6"}`}
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="lg:col-span-5">
            <div className="bg-surface-light dark:bg-surface-dark p-8 rounded-lg border-l-4 border-primary">
              <h3 className="font-bold text-xl mb-6 text-black dark:text-white">
                Key Constraints
              </h3>
              <ul className="space-y-6">
                {contextData.constraints.map((constraint) => {
                  const Icon = iconMap[constraint.icon] || Sun;
                  return (
                    <li key={constraint.title} className="flex gap-4">
                      <Icon className="w-6 h-6 text-gray-400 shrink-0" />
                      <div>
                        <strong className="block text-sm text-black dark:text-white">
                          {constraint.title}
                        </strong>
                        <span className="text-sm text-gray-500">{constraint.description}</span>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

// ============================================================================
// ARCHITECTURE SECTION
// ============================================================================

export function ArchitectureSection() {
  const layerIcons: Record<string, React.ElementType> = {
    smartphone: Smartphone,
    server: Server,
    cloud: Cloud,
  };

  const featureIcons: Record<string, React.ElementType> = {
    zap: Zap,
    map: Map,
    fileText: FileText,
    battery: Battery,
  };

  return (
    <Section background="default" className="border-y border-gray-200 dark:border-gray-800">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-black dark:text-white">
            The Solution Architecture
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            A fully integrated OEM ecosystem bridging rugged hardware, local edge computing, and
            cloud intelligence.
          </p>
        </div>

        {/* Architecture Diagram */}
        <div className="relative h-80 w-full flex items-center justify-center bg-gray-50 dark:bg-black rounded-xl border border-gray-200 dark:border-gray-700 p-8 mb-16 shadow-inner overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <div className="w-96 h-96 border border-dashed border-gray-400 rounded-full animate-spin-slow"></div>
          </div>

          <div className="flex justify-between items-center relative z-10 w-full max-w-3xl">
            {architectureData.layers.map((layer, index, arr) => {
              const Icon = layerIcons[layer.icon] || Smartphone;
              return (
                <div key={layer.title} className="flex items-center">
                  <div className="flex flex-col items-center gap-3">
                    <div
                      className={`w-20 h-20 rounded-xl shadow-lg flex items-center justify-center border relative z-20 ${layer.status === "highlighted"
                          ? "bg-primary text-white"
                          : "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-600"
                        }`}
                    >
                      {layer.status === "active" && (
                        <span className="absolute -top-2 -right-2 bg-green-500 w-3 h-3 rounded-full animate-pulse"></span>
                      )}
                      <Icon
                        className={`w-10 h-10 ${layer.status === "highlighted" ? "text-white" : "text-primary"}`}
                      />
                    </div>
                    <div className="text-center">
                      <span className="block text-sm font-bold text-black dark:text-white">
                        {layer.title}
                      </span>
                      <span className="text-xs text-gray-500">{layer.subtitle}</span>
                    </div>
                  </div>
                  {index < arr.length - 1 && (
                    <div className="h-1 bg-gray-300 dark:bg-gray-600 w-24 mx-4 relative overflow-hidden rounded">
                      <div className="absolute inset-0 bg-primary/50 w-1/2 h-full animate-pulse"></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-6 text-black dark:text-white">
              Core Solution Features
            </h3>
            <div className="grid grid-cols-1 gap-4">
              {architectureData.features.map((feature) => {
                const Icon = featureIcons[feature.icon] || Zap;
                return (
                  <div key={feature.title} className="flex items-start gap-3">
                    <Icon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <strong className="block text-black dark:text-white text-sm">
                        {feature.title}
                      </strong>
                      <p className="text-xs text-gray-500">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-black dark:text-white">
              Engineering Approach
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
              {architectureData.approach}
            </p>
            <div className="p-5 bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-widest block mb-3">
                Tech Stack
              </span>
              <div className="flex flex-wrap gap-2">
                {architectureData.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="bg-white dark:bg-surface-dark border border-gray-300 dark:border-gray-600 px-2 py-1 rounded text-xs font-mono text-gray-700 dark:text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

// ============================================================================
// TIMELINE SECTION
// ============================================================================

export function TimelineSection() {
  return (
    <Section>
      <Container>
        <h2 className="text-2xl font-bold mb-10 text-black dark:text-white">
          Implementation Timeline
        </h2>

        <div className="relative border-l-2 border-gray-200 dark:border-gray-700 ml-3 space-y-12">
          {timeline.map((phase) => (
            <div key={phase.title} className="relative pl-10">
              <span
                className={`absolute -left-[9px] top-1 w-4 h-4 rounded-full border-4 border-white dark:border-background-dark shadow-sm ${phase.active ? "bg-primary" : "bg-gray-300 dark:bg-gray-600"
                  }`}
              ></span>
              <h4 className="font-bold text-lg text-black dark:text-white">{phase.title}</h4>
              <p className="text-sm text-gray-500 mb-1">Duration: {phase.duration}</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{phase.description}</p>
            </div>
          ))}
        </div>

        {/* Security Note */}
        <div className="mt-16 bg-gray-900 dark:bg-black p-8 rounded-lg text-white flex flex-col md:flex-row items-center gap-6 border border-gray-800 shadow-xl">
          <Shield className="w-12 h-12 text-gray-400 shrink-0" strokeWidth={1.5} />
          <div>
            <h4 className="font-bold text-lg">{securityNote.title}</h4>
            <p className="text-gray-400 text-sm mt-1">{securityNote.description}</p>
          </div>
        </div>
      </Container>
    </Section>
  );
}

// ============================================================================
// IMPACT SECTION
// ============================================================================

export function ImpactSection() {
  return (
    <Section background="surface">
      <Container>
        <h2 className="text-3xl font-bold mb-12 text-center text-black dark:text-white">
          Measurable Impact
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-300 dark:divide-gray-700">
          {impactMetrics.map((metric) => (
            <div key={metric.label} className="px-4 py-4 md:py-0">
              <p className="text-5xl font-extrabold text-black dark:text-white mb-2">
                {metric.value}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

// ============================================================================
// FUTURE SECTION
// ============================================================================

export function FutureSection() {
  return (
    <Section>
      <Container size="narrow" className="text-center">
        <span className="text-primary font-bold uppercase tracking-widest text-xs mb-4 block">
          Looking Ahead
        </span>
        <h2 className="text-3xl font-bold text-black dark:text-white mb-6">
          {futureData.title}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          {futureData.description}
        </p>
      </Container>
    </Section>
  );
}

// ============================================================================
// RELATED SECTION
// ============================================================================

export function RelatedSection() {
  return (
    <Section background="surface" className="border-t border-gray-200 dark:border-gray-800">
      <Container>
        <h3 className="text-xl font-bold mb-8 text-black dark:text-white">
          Related Case Studies & Services
        </h3>

        <div className="grid md:grid-cols-3 gap-8">
          {relatedCaseStudies.map((study) => (
            <a
              key={study.title}
              href={study.href}
              className="group block bg-white dark:bg-background-dark rounded-lg overflow-hidden shadow hover:shadow-xl transition duration-300"
            >
              <div className="h-40 bg-gray-200 dark:bg-gray-700 relative overflow-hidden">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-cover transform group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition"></div>
              </div>
              <div className="p-5">
                <span className="text-xs font-bold text-primary uppercase mb-2 block">
                  {study.category}
                </span>
                <h4 className="font-bold text-base text-black dark:text-white mb-1">
                  {study.title}
                </h4>
                <p className="text-xs text-gray-500">{study.description}</p>
              </div>
            </a>
          ))}

          <div className="flex flex-col gap-4">
            {relatedLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className="flex items-center justify-between p-5 bg-white dark:bg-background-dark rounded shadow hover:border-l-4 hover:border-primary transition-all group"
              >
                <div>
                  <span className="block font-bold text-black dark:text-white text-sm">
                    {link.title}
                  </span>
                  <span className="text-xs text-gray-500">{link.description}</span>
                </div>
                <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
              </a>
            ))}
          </div>
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
    <Section background="surface" className="relative overflow-hidden">
      <div className="absolute -right-20 -top-20 w-96 h-96 bg-gray-200 dark:bg-gray-800 rounded-full opacity-20 blur-3xl"></div>

      <Container size="narrow" className="relative z-10 text-center">
        <h2 className="text-4xl font-bold mb-4 text-black dark:text-white">{ctaData.title}</h2>
        <p className="text-gray-500 mb-10">{ctaData.subtitle}</p>

        <div className="bg-white dark:bg-background-dark p-8 rounded-lg shadow-xl max-w-2xl mx-auto text-left border border-gray-100 dark:border-gray-800">
          <h3 className="font-bold text-lg mb-6 text-black dark:text-white">{ctaData.formTitle}</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-1">Name</label>
              <input
                type="text"
                className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded p-2 text-sm focus:ring-primary focus:border-primary outline-none text-black dark:text-white placeholder-gray-400"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-1">
                Company Email
              </label>
              <input
                type="email"
                className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded p-2 text-sm focus:ring-primary focus:border-primary outline-none text-black dark:text-white placeholder-gray-400"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-xs font-semibold text-gray-500 mb-1">
              How can we help?
            </label>
            <textarea
              className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded p-2 text-sm focus:ring-primary focus:border-primary outline-none text-black dark:text-white placeholder-gray-400"
              placeholder={ctaData.placeholder}
              rows={3}
            ></textarea>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <Button size="lg">Request Consultation</Button>
            <span className="text-xs text-gray-400">
              or{" "}
              <a href="/contact" className="underline hover:text-primary transition">
                schedule a 15-min intro call
              </a>
            </span>
          </div>
        </div>
      </Container>
    </Section>
  );
}
