import { Header, Footer } from "@/components/layout";
import { Button, Badge, SectionHeader, Container, Section } from "@/components/ui";
import { Globe, Users, Target, Zap, Shield, Trophy } from "lucide-react";

export const metadata = {
    title: "About Zigron | Engineering the Future of Connected Systems",
    description: "We are a team of engineers, architects, and builders dedicated to solving complex problems in IoT, AI, and Cloud Computing.",
};

const values = [
    {
        icon: Target,
        title: "First Principles Thinking",
        description: "We don't just follow trends. We deconstruct problems to their core and build solutions that are fundamentally sound and efficient.",
    },
    {
        icon: Shield,
        title: "Radical Transparency",
        description: "No black boxes. You get full visibility into our code, our process, and our challenges. We believe trust is built on honesty.",
    },
    {
        icon: Zap,
        title: "Speed with Precision",
        description: "We move fast, but never break things. Our CI/CD pipelines and automated testing ensure rapid delivery without compromising quality.",
    },
    {
        icon: Users,
        title: "Owner's Mindset",
        description: "We treat your product as our own. Every engineer is empowered to make decisions that drive long-term value, not just short-term fixes.",
    },
    {
        icon: Trophy,
        title: "Excellence as Standard",
        description: "Good enough isn't. We strive for world-class engineering in every line of code, every pixel, and every architecture decision.",
    },
    {
        icon: Globe,
        title: "Global Perspective",
        description: "We bring diverse viewpoints and engineering capabilities to your projects, wherever you are.",
    },
];

export default function AboutPage() {
    return (
        <>
            <Header />

            <main>
                {/* Hero Section */}
                <Section background="gradient" padding="hero" className="relative overflow-hidden">
                    <Container>
                        <div className="max-w-4xl mx-auto text-center">
                            <Badge className="mb-6 mx-auto">Who We Are</Badge>
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-black dark:text-white mb-8 tracking-tight leading-tight">
                                Engineering the Future of <br className="hidden md:block" />
                                <span className="text-primary">Connected Systems</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-text-muted-light dark:text-text-muted-dark mb-10 max-w-2xl mx-auto leading-relaxed font-light">
                                We are a team of architects, builders, and problem solvers dedicated to the art of rigorous engineering.
                            </p>
                        </div>
                    </Container>

                    <div className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
                        style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
                    </div>
                </Section>

                {/* Our Story / Mission */}
                <Section>
                    <Container>
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <SectionHeader
                                    label="Our Mission"
                                    title="Why We Exist"
                                    description="To bridge the gap between physical devices and digital intelligence with uncompromising quality."
                                />
                                <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                    <p>
                                        Zigron began with a simple observation:
                                        the IoT landscape was filled with &quot;demos&quot; that failed in production. The world didn&apos;t need
                                        more prototypes; it needed industrial-grade connectivity.
                                    </p>
                                    <p>
                                        We set out to build a different kind of engineering firm—one that treats firmware with the
                                        same rigor as financial software, and cloud architecture with the same precision as hardware design.
                                    </p>
                                    <p>
                                        Today, we tackle the hardest problems in the industry: managing concurrent device connections,
                                        securing critical infrastructure, and deploying AI to the rugged edge.
                                    </p>
                                </div>
                            </div>

                            <div className="relative">
                                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800 relative z-10 shadow-2xl">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center">
                                        <Globe className="w-24 h-24 text-gray-400 dark:text-gray-500 opacity-50" />
                                    </div>
                                </div>
                                <div className="absolute -bottom-10 -right-10 w-2/3 h-2/3 bg-primary/5 rounded-2xl -z-10"></div>
                            </div>
                        </div>
                    </Container>
                </Section>

                {/* Values Section */}
                <Section background="surface">
                    <Container>
                        <SectionHeader
                            label="Our Values"
                            title="How We Work"
                            description="Our culture is defined by a relentless pursuit of truth and technical excellence."
                        />

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {values.map((val) => (
                                <div key={val.title} className="bg-white dark:bg-background-dark p-8 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary">
                                        <val.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold text-black dark:text-white mb-3">{val.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                                        {val.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </Container>
                </Section>

                {/* CTA */}
                <Section background="gradient" className="text-center pt-0 pb-32">
                    <Container size="narrow">
                        <h2 className="text-4xl font-extrabold text-black dark:text-white mb-6">Let&apos;s Build Together</h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed">
                            Have a project in mind? Talk to our engineering team about what you&apos;re building.
                        </p>
                        <div className="flex justify-center gap-4">
                            <Button size="lg" href="/contact">
                                Contact Sales
                            </Button>
                        </div>
                    </Container>
                </Section>
            </main>

            <Footer />
        </>
    );
}
