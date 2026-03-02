import { Header, Footer } from "@/components/layout";
import { Button, Badge, SectionHeader, Container, Section } from "@/components/ui";
import { Globe, Users, Target, Zap, Shield, Trophy, MapPin } from "lucide-react";

export const metadata = {
    title: "About Zigron | Engineering the Future of Connected Systems",
    description: "We are an elite team of engineers, architects, and builders dedicated to solving complex problems in IoT, AI, and Cloud Computing.",
};

const stats = [
    { label: "Years of Experience", value: "12+" },
    { label: "Global Offices", value: "5" },
    { label: "Engineers", value: "150+" },
    { label: "Projects Delivered", value: "300+" },
];

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
        description: "With teams across 3 continents, we bring diverse viewpoints and 24/7 engineering capabilities to your projects.",
    },
];



const locations = [
    { city: "San Francisco", custom: "HQ - Innovation Hub" },
    { city: "Berlin", custom: "Engineering Center" },
    { city: "Singapore", custom: "APAC Operations" },
    { city: "Austin", custom: "IoT Lab" },
    { city: "London", custom: "Strategic Sales" },
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
                                We are a global team of architects, builders, and problem solvers dedicated to the art of rigorous engineering.
                            </p>
                        </div>
                    </Container>

                    {/* Abstract Grid Background */}
                    <div className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
                        style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
                    </div>
                </Section>

                {/* Stats Strip */}
                <div className="bg-surface-light dark:bg-surface-dark border-y border-gray-200 dark:border-gray-800">
                    <Container>
                        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-200 dark:divide-gray-800">
                            {stats.map((stat) => (
                                <div key={stat.label} className="py-8 md:py-12 text-center px-4">
                                    <div className="text-4xl md:text-5xl font-extrabold text-black dark:text-white mb-2 tracking-tight">
                                        {stat.value}
                                    </div>
                                    <div className="text-xs md:text-sm font-bold text-gray-500 uppercase tracking-widest">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Container>
                </div>

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
                                        Founded in 2014 by a group of systems engineers, Zigron began with a simple observation:
                                        the IoT landscape was filled with &quot;demos&quot; that failed in production. The world didn&apos;t need
                                        more prototypes; it needed industrial-grade connectivity.
                                    </p>
                                    <p>
                                        We set out to build a different kind of engineering firm—one that treats firmware with the
                                        same rigor as financial software, and cloud architecture with the same precision as hardware design.
                                    </p>
                                    <p>
                                        Today, we tackle the hardest problems in the industry: managing millions of concurrent device connections,
                                        securing critical infrastructure, and deploying AI to the rugged edge.
                                    </p>
                                </div>
                            </div>

                            <div className="relative">
                                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800 relative z-10 shadow-2xl">
                                    {/* Placeholder for high-quality team/office image */}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center">
                                        <Globe className="w-24 h-24 text-gray-400 dark:text-gray-500 opacity-50" />
                                    </div>
                                </div>
                                {/* Decorative element */}
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

                {/* Global Presence */}
                <Section>
                    <Container>
                        <div className="bg-black dark:bg-surface-dark rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
                            <div className="relative z-10">
                                <Badge className="mb-6 bg-white/10 text-white border-white/20 hover:bg-white/20">Global Presence</Badge>
                                <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-12 tracking-tight">
                                    Building Locally,<br />Deploying Globally
                                </h2>

                                <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                                    {locations.map((loc) => (
                                        <div key={loc.city} className="bg-white/5 backdrop-blur-sm border border-white/10 px-6 py-4 rounded-xl hover:bg-white/10 transition-colors text-left min-w-[160px]">
                                            <div className="flex items-center gap-2 mb-1">
                                                <MapPin className="w-4 h-4 text-primary" />
                                                <span className="font-bold text-white">{loc.city}</span>
                                            </div>
                                            <span className="text-xs text-start text-gray-400 font-medium uppercase tracking-wider">{loc.custom}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Map Background Placeholder */}
                            <div className="absolute inset-0 opacity-20 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')] bg-cover bg-center bg-no-repeat pointer-events-none mix-blend-overlay"></div>
                        </div>
                    </Container>
                </Section>

                {/* CTA */}
                <Section background="gradient" className="text-center pt-0 pb-32">
                    <Container size="narrow">
                        <h2 className="text-4xl font-extrabold text-black dark:text-white mb-6">Ready to Join Us?</h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed">
                            We are always looking for exceptional engineers who want to build the future of IoT.
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
