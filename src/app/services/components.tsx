"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  ArrowRight,
  CheckCircle,
  Settings,
  Lightbulb,
  Building2,
  Zap,
  Users,
  Briefcase,
  Cpu,
  Cloud,
  Smartphone,
  Shield,
  Database,
  BarChart,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui";
import type {
  ServiceVertical,
  EngagementModel,
  Capability,
  ProcessStep,
  IconName,
} from "./data";

// ============================================================================
// ICON RESOLVER
// ============================================================================

const iconMap: Record<IconName, LucideIcon> = {
  settings: Settings,
  lightbulb: Lightbulb,
  building2: Building2,
  checkCircle: CheckCircle,
  zap: Zap,
  users: Users,
  briefcase: Briefcase,
  cpu: Cpu,
  cloud: Cloud,
  smartphone: Smartphone,
  shield: Shield,
  database: Database,
  barChart: BarChart,
};
// ============================================================================
// SERVICE VERTICAL CARD
// ============================================================================

interface ServiceVerticalCardProps {
  vertical: ServiceVertical;
}

export function ServiceVerticalCard({ vertical }: ServiceVerticalCardProps) {
  const IconComponent = iconMap[vertical.iconName] || Cpu;

  return (
    <div className="group bg-white dark:bg-surface-dark p-8 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary transition-all duration-300 hover:shadow-xl relative overflow-hidden flex flex-col">
      <div className="absolute top-0 left-0 w-1 h-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>

      <div className="w-14 h-14 bg-red-50 dark:bg-red-900/20 rounded-lg flex items-center justify-center mb-6 text-primary">
        <IconComponent className="w-8 h-8" />
      </div>

      <h3 className="text-xl font-bold mb-3 text-black dark:text-white">
        {vertical.title}
      </h3>

      <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
        {vertical.description}
      </p>

      <ul className="space-y-3 mb-8 flex-grow">
        {vertical.features.map((feature) => (
          <li
            key={feature}
            className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400"
          >
            <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
            {feature}
          </li>
        ))}
      </ul>

      <Button
        variant="ghost"
        href={`/services/${vertical.slug}`}
        className="p-0 justify-start"
      >
        Explore {vertical.title.split(" ")[0]} Services
        <ArrowRight className="w-4 h-4 ml-1" />
      </Button>
    </div>
  );
}

// ============================================================================
// ENGAGEMENT MODEL CARD
// ============================================================================

interface EngagementModelCardProps {
  model: EngagementModel;
}

export function EngagementModelCard({ model }: EngagementModelCardProps) {
  return (
    <div
      className={`bg-white dark:bg-background-dark p-8 rounded-lg shadow-sm border transition relative ${model.featured
        ? "border-2 border-primary shadow-xl transform md:-translate-y-4 z-10"
        : "border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-600"
        }`}
    >
      {model.featured && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
          Most Popular
        </div>
      )}

      <h3 className="text-xl font-bold text-black dark:text-white mb-1">
        {model.title}
      </h3>
      <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-6">
        {model.subtitle}
      </p>

      <hr className="border-gray-100 dark:border-gray-800 mb-6" />

      <p className="text-xs font-bold uppercase text-primary mb-3">Best For:</p>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
        {model.bestFor}
      </p>

      <p className="text-xs font-bold uppercase text-primary mb-3">Includes:</p>
      <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
        {model.includes.map((item) => (
          <li key={item} className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-500" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

// ============================================================================
// CAPABILITIES GRID
// ============================================================================

interface CapabilitiesGridProps {
  capabilities: Capability[];
}

export function CapabilitiesGrid({ capabilities }: CapabilitiesGridProps) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {capabilities.map((cap) => {
        const IconComponent = iconMap[cap.iconName] || Cpu;
        return (
          <div
            key={cap.title}
            className="bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary/30 hover:shadow-lg transition-all group"
          >
            <div className="w-12 h-12 bg-red-50 dark:bg-red-900/20 rounded-lg flex items-center justify-center mb-4 text-primary group-hover:scale-110 transition-transform">
              <IconComponent className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-black dark:text-white mb-2">
              {cap.title}
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              {cap.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {cap.services.map((service) => (
                <span
                  key={service}
                  className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-xs font-medium rounded text-gray-600 dark:text-gray-400"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ============================================================================
// PROCESS STEPS
// ============================================================================

interface ProcessStepsProps {
  steps: ProcessStep[];
}

export function ProcessSteps({ steps }: ProcessStepsProps) {
  return (
    <div className="grid md:grid-cols-4 gap-8">
      {steps.map((step, index) => (
        <div key={step.number} className="relative">
          {/* Connection line */}
          {index < steps.length - 1 && (
            <div className="hidden md:block absolute top-8 left-full w-full h-0.5 border-t-2 border-dashed border-gray-200 dark:border-gray-700 -z-10"></div>
          )}
          <div className="flex flex-col items-start">
            <span className="text-5xl font-black text-primary/20 mb-4">
              {step.number}
            </span>
            <h4 className="font-bold text-lg text-black dark:text-white mb-2">
              {step.title}
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              {step.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

// ============================================================================
// SERVICE PROCESS TIMELINE
// ============================================================================

export interface ServiceProcessStep {
  id: number;
  title: string;
  desc: string;
  iconNode: React.ReactNode;
}

export function ServiceProcessTimeline({ steps }: { steps: ServiceProcessStep[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState<number | null>(null);

  useEffect(() => {
    // Only register ScrollTrigger if we are in browser
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        const mm = gsap.matchMedia();

        // ----------------------------------------------------
        // DESKTOP / LARGE ANIMATIONS (≥ 768px)
        // ----------------------------------------------------
        mm.add("(min-width: 768px)", () => {
          gsap.from(".proc-node", {
            scale: 0.8,
            opacity: 0,
            duration: 0.5,
            stagger: 0.15,
            ease: "back.out(1.5)",
            scrollTrigger: { trigger: ".proc-track", start: "top 80%" },
          });

          gsap.fromTo(
            ".proc-line",
            { scaleX: 0, transformOrigin: "left center" },
            {
              scaleX: 1,
              duration: 1.2,
              ease: "power2.inOut",
              scrollTrigger: { trigger: ".proc-track", start: "top 80%" },
            }
          );
        });

        // ----------------------------------------------------
        // MOBILE / TABLET ANIMATIONS (< 768px)
        // ----------------------------------------------------
        mm.add("(max-width: 767px)", () => {
          const trackElem = document.querySelector('.proc-vertical-track');
          const trackHeight = trackElem ? trackElem.clientHeight : 500;

          // Scrub the vertical line down as the user scrolls
          gsap.fromTo(
            ".proc-line-mobile-fill",
            { scaleY: 0, transformOrigin: "top center" },
            {
              scaleY: 1,
              ease: "none",
              scrollTrigger: {
                trigger: ".proc-track",
                start: "top 60%",
                end: () => `+=${trackHeight}`,
                scrub: 0.5,
              },
            }
          );
        });
      }, containerRef);
      return () => ctx.revert();
    }
  }, []);

  return (
    <div ref={containerRef} className="proc-track relative mb-12">
      {/* Connecting Line (Desktop) */}
      <div
        className="hidden md:block absolute top-[40px] h-[2px] bg-gray-200 dark:bg-gray-800 z-0"
        style={{
          left: `${100 / (steps.length * 2)}%`,
          right: `${100 / (steps.length * 2)}%`,
        }}
      >
        <div className="proc-line h-full bg-zigron-red w-full origin-left" />
      </div>

      {/* Connecting Line (Mobile) */}
      <div className="proc-vertical-track md:hidden absolute top-[40px] bottom-[40px] left-[40px] w-[2px] bg-gray-200 dark:bg-gray-800 z-0 overflow-hidden">
        <div className="proc-line-mobile-fill h-full bg-zigron-red w-full origin-top" />
      </div>

      <div className={`grid grid-cols-1 gap-8 md:gap-4 relative z-10 ${steps.length === 3 ? 'md:grid-cols-3' : steps.length === 4 ? 'md:grid-cols-4' : 'md:grid-cols-5'}`}>
        {steps.map((step) => {
          const isActive = activeStep === step.id;

          return (
            <div
              key={step.id}
              className="proc-node flex flex-row md:flex-col items-start md:items-center text-left md:text-center group gap-5 md:gap-0"
              onMouseEnter={() => setActiveStep(step.id)}
              onMouseLeave={() => setActiveStep(null)}
            >
              {/* Node Circle */}
              <div
                className={`w-[80px] h-[80px] flex-shrink-0 rounded-full border-[3px] flex flex-col justify-center items-center bg-white dark:bg-surface-dark mb-0 md:mb-6 transition-all duration-300 relative shadow-sm cursor-default ${isActive
                  ? "border-zigron-red scale-110 shadow-lg"
                  : "border-gray-200 dark:border-gray-700 group-hover:border-zigron-red/50"
                  }`}
              >
                {/* Pulsing background ring when active */}
                {isActive && (
                  <div className="absolute inset-0 rounded-full border-[2px] border-zigron-red animate-[ping_1.5s_cubic-bezier(0,0,0.2,1)_infinite]" />
                )}
                <span
                  className={`font-mono text-[10px] font-bold mb-1 ${isActive ? "text-zigron-red" : "text-gray-400 dark:text-gray-500"
                    }`}
                >
                  0{step.id}
                </span>
                <div
                  className={`w-5 h-5 flex items-center justify-center [&>svg]:w-full [&>svg]:h-full [&>svg]:stroke-[2] ${isActive ? "text-zigron-red" : "text-gray-400 dark:text-gray-500"
                    }`}
                >
                  {step.iconNode}
                </div>
              </div>

              {/* Content below node (desktop) / right of node (mobile) */}
              <div
                className={`transition-all duration-300 pt-2 md:pt-0 ${isActive ? "opacity-100 translate-y-0" : "md:opacity-60 md:translate-y-2"
                  }`}
              >
                <h3
                  className={`font-poppins font-bold text-[16px] mb-3 transition-colors ${isActive ? "text-zigron-black dark:text-white" : "text-gray-600 dark:text-gray-400"
                    }`}
                >
                  {step.title}
                </h3>
                <p className="font-poppins text-[14px] text-zigron-gray dark:text-gray-400 leading-[1.6]">
                  {step.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ============================================================================
// SYSTEM ARCHITECTURE PIPELINE
// ============================================================================

export interface SystemArchitectureLayer {
  title: string;
  subtitle: string;
  iconNode: React.ReactNode;
}

export interface TechnicalPillar {
  title: string;
  description: string;
  iconNode: React.ReactNode;
}

export interface SystemArchitecturePipelineProps {
  layers: SystemArchitectureLayer[];
  pillars?: TechnicalPillar[];
}

export function SystemArchitecturePipeline({ layers, pillars }: SystemArchitecturePipelineProps) {
  // Desktop: Grid cols based on layers length (usually 4 or 5)
  const gridColsClass = layers.length === 5 ? "lg:grid-cols-5" : layers.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4";
  const pillarColsClass = pillars?.length === 2 ? "lg:grid-cols-2" : pillars?.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4";

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        // matchMedia for different viewports
        const mm = gsap.matchMedia();

        // ----------------------------------------------------
        // DESKTOP / LARGE ANIMATIONS (≥ 1024px)
        // ----------------------------------------------------
        mm.add("(min-width: 1024px)", () => {
          // Draw the horizontal line
          gsap.fromTo(
            ".arch-line-desktop-fill",
            { scaleX: 0, transformOrigin: "left center" },
            {
              scaleX: 1,
              duration: 1.5,
              ease: "power2.inOut",
              scrollTrigger: { trigger: ".arch-pipeline-container", start: "top 75%" },
            }
          );

          // Pop in the nodes
          gsap.fromTo(
            ".arch-node",
            { scale: 0.8, opacity: 0, y: 20 },
            {
              scale: 1,
              opacity: 1,
              y: 0,
              duration: 0.6,
              stagger: 0.15,
              ease: "back.out(1.5)",
              scrollTrigger: { trigger: ".arch-pipeline-container", start: "top 75%" },
            }
          );
        });

        // ----------------------------------------------------
        // MOBILE / TABLET ANIMATIONS (< 1024px)
        // ----------------------------------------------------
        mm.add("(max-width: 1023px)", () => {
          // Calculate dynamic end point based on content height
          const trackElem = document.querySelector('.arch-vertical-track');
          const trackHeight = trackElem ? trackElem.clientHeight : 500;

          // Scrub the vertical line down as the user scrolls
          gsap.fromTo(
            ".arch-line-mobile-fill",
            { scaleY: 0, transformOrigin: "top center" },
            {
              scaleY: 1,
              ease: "none", // Linear ease for scrubbing
              scrollTrigger: {
                trigger: ".arch-pipeline-container",
                start: "top 60%",
                // End when the bottom of the container reaches the middle of the screen
                end: () => `+=${trackHeight}`,
                scrub: 0.5,
              },
            }
          );
        });
      }, containerRef);
      return () => ctx.revert();
    }
  }, []);

  return (
    <div ref={containerRef} className="arch-pipeline-container w-full relative">
      {/* 1. The Stepper / Timeline Pipeline */}
      <div className="relative z-10 mb-12 lg:mb-16">
        {/* The Desktop Horizontal Glowing Line */}
        <div className="hidden lg:block absolute top-[47px] left-[10%] right-[10%] h-[2px] bg-gray-200 dark:bg-gray-800 z-0">
          <div className="arch-line-desktop-fill absolute top-0 left-0 h-full bg-primary/70 w-full"></div>
          <div className="arch-line-desktop-fill absolute top-0 left-0 h-full bg-gradient-to-r from-transparent via-primary to-transparent opacity-50 blur-[2px] w-full"></div>
        </div>

        {/* The Mobile Vertical Track */}
        <div className="arch-vertical-track lg:hidden absolute top-4 bottom-4 left-[27px] w-[2px] bg-gray-200 dark:bg-gray-800 z-0 overflow-hidden rounded-full">
          <div className="arch-line-mobile-fill absolute top-0 left-0 w-full bg-primary/70 h-full"></div>
          <div className="arch-line-mobile-fill absolute top-0 left-0 w-full bg-gradient-to-b from-transparent via-primary to-transparent opacity-50 blur-[2px] h-full"></div>
        </div>

        <div className={`grid grid-cols-1 gap-8 lg:gap-6 relative z-10 ${gridColsClass}`}>
          {layers.map((layer, index) => (
            <div key={index} className="arch-node flex flex-row lg:flex-col items-center lg:items-start xl:items-center relative group">
              {/* Icon Container (Acts as the node on mobile) */}
              <div className="shrink-0 w-14 h-14 lg:w-[96px] lg:h-[96px] mx-0 lg:mx-auto bg-white dark:bg-surface-dark border-2 border-gray-200 dark:border-gray-700 rounded-xl flex items-center justify-center text-primary group-hover:border-primary/50 transition-all duration-300 shadow-sm z-20 group-hover:-translate-y-1 relative">
                <div className="[&>svg]:w-6 [&>svg]:h-6 lg:[&>svg]:w-10 lg:[&>svg]:h-10">
                  {layer.iconNode}
                </div>
              </div>

              {/* Card Content */}
              <div className="flex-1 ml-6 lg:ml-0 lg:mt-6 w-full lg:text-center p-5 lg:p-6 bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm group-hover:border-primary/30 transition-colors">
                <h4 className="font-bold text-black dark:text-white text-base lg:text-lg mb-2">
                  {layer.title}
                </h4>
                <p className="font-mono text-xs text-primary font-semibold uppercase tracking-widest break-words leading-relaxed">
                  {layer.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. The Features Box (Bottom Row) */}
      {pillars && pillars.length > 0 && (
        <div className="bg-white/60 dark:bg-surface-dark/50 backdrop-blur-md border border-gray-200 dark:border-gray-800 rounded-2xl p-6 lg:p-8 relative overflow-hidden shadow-sm">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-primary/5 to-transparent pointer-events-none"></div>

          <div className={`grid grid-cols-2 ${pillarColsClass} gap-6 lg:gap-8 relative z-10`}>
            {pillars.map((pillar, index) => (
              <div key={index} className="flex flex-col items-center lg:items-start text-center lg:text-left group">
                <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800/80 flex items-center justify-center text-primary mb-3 transition-colors group-hover:bg-primary/10">
                  <div className="[&>svg]:w-5 [&>svg]:h-5">
                    {pillar.iconNode}
                  </div>
                </div>
                <h4 className="font-bold text-black dark:text-white text-sm mb-1.5">{pillar.title}</h4>
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
