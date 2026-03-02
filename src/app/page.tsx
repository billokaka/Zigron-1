import { Header, Footer } from "@/components/layout";
import { HeroSection, SliderSection, ModernizeSection, SolutionsSection, CaseStudiesSection, CapabilitiesSection, ProcessSection, CTASection } from "@/components/homepage";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-zigron-light selection:bg-zigron-red selection:text-white">
      <Header />

      <main className="w-full overflow-hidden">
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
