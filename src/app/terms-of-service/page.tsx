import { Header, Footer } from "@/components/layout";
import { Container, Section, Badge } from "@/components/ui";

export const metadata = {
    title: "Terms of Service | Zigron",
    description: "The rules and regulations for the use of Zigron's Website.",
};

export default function TermsPage() {
    return (
        <>
            <Header />
            <main>
                {/* Legal Hero */}
                <Section background="dark" padding="hero" className="border-b border-gray-800">
                    <Container size="narrow" className="text-center">
                        <Badge className="bg-primary/20 text-primary border-primary/20 hover:bg-primary/20 mb-6 mx-auto">
                            Legal
                        </Badge>
                        <h1 className="text-4xl md:text-6xl font-black text-white mb-6">Terms of Service</h1>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Please read these terms carefully before using our services.
                        </p>
                    </Container>
                </Section>

                {/* Content */}
                <Section background="surface" padding="default" className="min-h-[60vh]">
                    <Container size="narrow">
                        <div className="bg-white dark:bg-surface-dark p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
                            <div className="flex items-center gap-3 mb-10 pb-10 border-b border-gray-100 dark:border-gray-800">
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                <span className="text-sm font-mono text-gray-500 uppercase tracking-widest">
                                    Last Updated: January 07, 2026
                                </span>
                            </div>

                            <div className="prose dark:prose-invert prose-lg max-w-none text-gray-600 dark:text-gray-300">
                                <p className="lead text-xl text-black dark:text-white font-medium mb-8">
                                    These Terms of Service (&quot;Terms&quot;) govern your access to and use of Zigron&apos;s website and services. By accessing or using our services, you agree to be bound by these Terms.
                                </p>

                                <h3 className="text-2xl font-bold text-black dark:text-white mt-12 mb-6">1. Interpretation and Definitions</h3>
                                <p>
                                    The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
                                </p>

                                <h3 className="text-2xl font-bold text-black dark:text-white mt-12 mb-6">2. Intellectual Property</h3>
                                <p>
                                    The Service and its original content (excluding Content provided by You or other users), features and functionality are and will remain the exclusive property of Zigron and its licensors. The Service is protected by copyright, trademark, and other laws of both the Country and foreign countries.
                                </p>

                                <h3 className="text-2xl font-bold text-black dark:text-white mt-12 mb-6">3. Links to Other Websites</h3>
                                <p>
                                    Our Service may contain links to third-party web sites or services that are not owned or controlled by Zigron. Zigron has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services.
                                </p>

                                <h3 className="text-2xl font-bold text-black dark:text-white mt-12 mb-6">4. Termination</h3>
                                <p>
                                    We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions. Upon termination, Your right to use the Service will cease immediately.
                                </p>

                                <h3 className="text-2xl font-bold text-black dark:text-white mt-12 mb-6">5. Limitation of Liability</h3>
                                <p>
                                    Notwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers under any provision of this Terms and Your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by You through the Service or 100 USD if You haven&apos;t purchased anything through the Service.
                                </p>
                            </div>
                        </div>
                    </Container>
                </Section>
            </main>
            <Footer />
        </>
    );
}
