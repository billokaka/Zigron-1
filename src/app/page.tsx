import dynamic from "next/dynamic";
import { Header, Footer } from "@/components/layout";
import { HeroSection } from "@/components/homepage";

// Lazy-load below-the-fold sections to reduce initial bundle size
const SliderSection = dynamic(() => import("@/components/homepage/SliderSection").then((m) => ({ default: m.SliderSection })));
const ModernizeSection = dynamic(() => import("@/components/homepage/ModernizeSection").then((m) => ({ default: m.ModernizeSection })));
const SolutionsSection = dynamic(() => import("@/components/homepage/SolutionsSection").then((m) => ({ default: m.SolutionsSection })));
const CaseStudiesSection = dynamic(() => import("@/components/homepage/CaseStudiesSection").then((m) => ({ default: m.CaseStudiesSection })));
const CapabilitiesSection = dynamic(() => import("@/components/homepage/CapabilitiesSection").then((m) => ({ default: m.CapabilitiesSection })));
const ProcessSection = dynamic(() => import("@/components/homepage/ProcessSection").then((m) => ({ default: m.ProcessSection })));
const CTASection = dynamic(() => import("@/components/homepage/CTASection").then((m) => ({ default: m.CTASection })));

export default function HomePage() {
  return (
    <div className="min-h-screen bg-zigron-light selection:bg-zigron-red selection:text-white">
      <Header />

      <main id="main-content" className="w-full overflow-hidden">
        <HeroSection />
        <SliderSection />
        <ModernizeSection />
        <SolutionsSection />
        <CaseStudiesSection />
        <CapabilitiesSection />
        <ProcessSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
