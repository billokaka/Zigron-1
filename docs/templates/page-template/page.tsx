// [PAGE_NAME] - Page
// Copy this template to: src/app/[route]/[slug]/page.tsx

import { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import { pageMetadata } from "./data";
import {
  HeroSection,
  FeaturesSection,
  UseCasesSection,
  ProcessSection,
  TechStackSection,
  CaseStudiesSection,
  FAQSection,
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

export default function PageName() {
  // Rename this function to match your page (e.g., PredictiveMaintenancePage)
  return (
    <>
      <Header />

      <main>
        {/* Include only the sections you need */}
        <HeroSection />
        <FeaturesSection />
        <UseCasesSection />
        <ProcessSection />
        <TechStackSection />
        <CaseStudiesSection />
        <FAQSection />
        <CTASection />
      </main>

      <Footer />
    </>
  );
}
