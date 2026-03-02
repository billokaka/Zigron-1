import { Header, Footer } from "@/components/layout";
import { Container, Section, Badge } from "@/components/ui";

export const metadata = {
    title: "Cookie Policy | Zigron",
    description: "How Zigron uses cookies to improve your experience.",
};

export default function CookiePage() {
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
                        <h1 className="text-4xl md:text-6xl font-black text-white mb-6">Cookie Policy</h1>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Plain English explanation of our tracking technologies.
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
                                    This Cookie Policy explains how Zigron (&quot;we&quot;, &quot;us&quot;, and &quot;our&quot;) uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
                                </p>

                                <h3 className="text-2xl font-bold text-black dark:text-white mt-12 mb-6">1. What are cookies?</h3>
                                <p>
                                    Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
                                </p>
                                <p>
                                    Cookies set by the website owner (in this case, Zigron) are called &quot;first-party cookies.&quot; Cookies set by parties other than the website owner are called &quot;third-party cookies.&quot; Third-party cookies enable third-party features or functionality to be provided on or through the website (e.g., advertising, interactive content, and analytics).
                                </p>

                                <h3 className="text-2xl font-bold text-black dark:text-white mt-12 mb-6">2. Why do we use cookies?</h3>
                                <p>
                                    We use first-party and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our Website to operate, and we refer to these as &quot;essential&quot; or &quot;strictly necessary&quot; cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our Online Properties. Third parties serve cookies through our Website for advertising, analytics, and other purposes.
                                </p>

                                <h3 className="text-2xl font-bold text-black dark:text-white mt-12 mb-6">3. How can I control cookies?</h3>
                                <p>
                                    You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in the Cookie Consent Manager. The Cookie Consent Manager allows you to select which categories of cookies you accept or reject. Essential cookies cannot be rejected as they are strictly necessary to provide you with services.
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
