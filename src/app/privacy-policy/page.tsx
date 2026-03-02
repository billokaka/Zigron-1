import { Header, Footer } from "@/components/layout";
import { Container, Section, Badge } from "@/components/ui";

export const metadata = {
    title: "Privacy Policy | Zigron",
    description: "How we collect, use, and protect your data.",
};

export default function PrivacyPolicyPage() {
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
                        <h1 className="text-4xl md:text-6xl font-black text-white mb-6">Privacy Policy</h1>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Transparency is at the core of our engineering culture. Here is how we handle your data.
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
                                    Zigron (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) respects your privacy and is committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
                                </p>

                                <h3 className="text-2xl font-bold text-black dark:text-white mt-12 mb-6">1. Information We Collect</h3>
                                <p>
                                    We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 mb-6">
                                    <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
                                    <li><strong>Contact Data:</strong> includes billing address, delivery address, email address and telephone numbers.</li>
                                    <li><strong>Technical Data:</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform.</li>
                                </ul>

                                <h3 className="text-2xl font-bold text-black dark:text-white mt-12 mb-6">2. How We Use Your Data</h3>
                                <p>
                                    We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 mb-6">
                                    <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                                    <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                                    <li>Where we need to comply with a legal or regulatory obligation.</li>
                                </ul>

                                <h3 className="text-2xl font-bold text-black dark:text-white mt-12 mb-6">3. Data Security</h3>
                                <p>
                                    We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
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
