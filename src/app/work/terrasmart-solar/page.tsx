import { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import { pageMetadata } from "./data";
import {
  HeroSection,
  OverviewSection,
  ContextSection,
  ArchitectureSection,
  TimelineSection,
  ImpactSection,
  FutureSection,
  RelatedSection,
  CTASection,
} from "./components";

// ============================================================================
// METADATA
// ============================================================================

export const metadata: Metadata = {
  title: pageMetadata.title,
  description: pageMetadata.description,
  keywords: pageMetadata.keywords,
};

// ============================================================================
// PAGE COMPONENT
// ============================================================================

export default function TerraSmartCaseStudyPage() {
  return (
    <>
      <Header />

      <main>
        <HeroSection />
        <OverviewSection />
        <ContextSection />
        <ArchitectureSection />
        <TimelineSection />
        <ImpactSection />
        <FutureSection />
        <RelatedSection />
        <CTASection />
      </main>

      <Footer />
    </>
  );
}
