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

export const metadata: Metadata = {
    title: pageMetadata.title,
    description: pageMetadata.description,
    keywords: pageMetadata.keywords,
};

export default function AbodeSmartHomeCaseStudyPage() {
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
