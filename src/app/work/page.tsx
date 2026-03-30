import Image from "next/image";
import { Header, Footer } from "@/components/layout";
import { Button, Badge, Container, Section } from "@/components/ui";
import {
  ArrowRight,
  Zap,
  Sun,
  Home,
} from "lucide-react";

export const metadata = {
  title: "Our Work | Zigron",
  description: "Case studies showcasing our IoT, AI, and engineering solutions across industries.",
};

const caseStudies = [
  {
    title: "Scaling Abode's Smart Security to Millions",
    client: "Abode Systems",
    category: "Consumer IoT",
    icon: Home,
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80",
    problem: "Legacy backend couldn't handle device spike during peak demand periods.",
    approach: "Serverless AWS architecture, firmware optimization, and real-time monitoring implementation.",
    outcome: "99.99% uptime & 50% infrastructure cost reduction.",
    tags: ["IoT Platform", "AWS", "Firmware", "Scalability"],
    href: "/work/abode-smart-home",
  },
  {
    title: "Automating TerraSmart Solar Installation",
    client: "TerraSmart",
    category: "Industrial IoT",
    icon: Sun,
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
    problem: "Manual site surveys were slow, error-prone, and delayed project timelines.",
    approach: "Custom high-precision GPS rovers integrated with iPad app for field teams.",
    outcome: "30% faster field deployment speed.",
    tags: ["GPS/GNSS", "Mobile App", "Field Deployment"],
    href: "/work/terrasmart-solar",
  },
  {
    title: "AI-Driven Solar Tracking Optimization",
    client: "TerraTrak",
    category: "AI + IoT",
    icon: Zap,
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
    problem: "Standard trackers missed peak sun angles, reducing energy generation.",
    approach: "Machine learning edge model deployed on tracker controllers.",
    outcome: "+12% energy generation boost.",
    tags: ["Machine Learning", "Edge AI", "Energy"],
    href: "/work/terratrak-ai",
  },
];

export default function WorkPage() {
  return (
    <>
      <Header />

      <main>
        {/* Hero */}
        <Section background="gradient" padding="hero">
          <Container>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content Column */}
              <div>
                <Badge dot className="mb-6">Case Studies</Badge>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-black dark:text-white tracking-tight">
                  Proven Results
                  <br />
                  <span className="text-primary">In the Field</span>
                </h1>

                <p className="text-lg md:text-xl text-text-muted-light dark:text-text-muted-dark mb-10 max-w-2xl leading-relaxed">
                  Real projects, real constraints, real outcomes. See how we&apos;ve helped teams build and deploy production systems.
                </p>
              </div>

              {/* Visual Column */}
              <div className="relative hidden lg:block">
                <div className="bg-white dark:bg-surface-dark rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 p-6 relative overflow-hidden max-w-sm ml-auto">
                  <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_50%_50%,_var(--color-primary)_1px,_transparent_1px)] bg-[length:16px_16px]"></div>

                  <div className="relative z-10 mb-4 pb-3 border-b border-gray-100 dark:border-gray-700">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Project Outcomes</span>
                    </div>
                  </div>

                  <div className="relative z-10 grid grid-cols-2 gap-3">
                    <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg text-center">
                      <div className="text-xl font-black text-primary leading-none">99.9%</div>
                      <div className="text-[10px] font-semibold text-gray-400 uppercase tracking-wide mt-1">Uptime</div>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg text-center">
                      <div className="text-xl font-black text-primary leading-none">500k+</div>
                      <div className="text-[10px] font-semibold text-gray-400 uppercase tracking-wide mt-1">Devices</div>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg text-center">
                      <div className="text-xl font-black text-primary leading-none">40%</div>
                      <div className="text-[10px] font-semibold text-gray-400 uppercase tracking-wide mt-1">Cost Saved</div>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg text-center">
                      <div className="text-xl font-black text-primary leading-none">5+</div>
                      <div className="text-[10px] font-semibold text-gray-400 uppercase tracking-wide mt-1">Industries</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Case Studies */}
        <Section>
          <Container>
            <div className="grid md:grid-cols-3 gap-8">
              {caseStudies.map((study) => (
                <div
                  key={study.title}
                  className="group bg-white dark:bg-surface-dark rounded-xl overflow-hidden shadow-sm border border-gray-200 dark:border-gray-800 hover:shadow-xl hover:border-primary/30 transition-all duration-300 flex flex-col"
                >
                  <div className="h-56 relative overflow-hidden">
                    <Image src={study.image} alt={study.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute top-4 left-4 bg-white/95 dark:bg-black/80 px-3 py-1 text-[10px] font-bold rounded uppercase tracking-wide text-black dark:text-white">
                      {study.category}
                    </div>
                  </div>

                  <div className="p-8 flex-1 flex flex-col">
                    <p className="text-xs font-semibold text-gray-500 mb-2">{study.client}</p>
                    <h3 className="font-bold text-lg mb-4 text-black dark:text-white leading-tight group-hover:text-primary transition-colors">
                      {study.title}
                    </h3>

                    <div className="space-y-4 mb-8 flex-1 border-t border-gray-100 dark:border-gray-800 pt-4">
                      <div className="flex gap-4 text-xs">
                        <span className="font-bold text-gray-400 uppercase w-16 shrink-0">Problem</span>
                        <span className="text-gray-600 dark:text-gray-300">{study.problem}</span>
                      </div>
                      <div className="flex gap-4 text-xs">
                        <span className="font-bold text-gray-400 uppercase w-16 shrink-0">Approach</span>
                        <span className="text-gray-600 dark:text-gray-300">{study.approach}</span>
                      </div>
                      <div className="flex gap-4 text-xs">
                        <span className="font-bold text-primary uppercase w-16 shrink-0">Outcome</span>
                        <span className="text-gray-800 dark:text-white font-bold">{study.outcome}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {study.tags.map((tag) => (
                        <span key={tag} className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-[10px] font-semibold rounded text-gray-600 dark:text-gray-400">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Button variant="ghost" href={study.href} className="p-0">
                      Read case study <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* CTA */}
        <Section background="surface">
          <Container size="narrow" className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black dark:text-white">
              Ready to Build Something?
            </h2>
            <p className="text-gray-500 mb-10 max-w-xl mx-auto">
              Let&apos;s discuss how we can help you achieve similar results for your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" href="/contact">
                Start a conversation
              </Button>
              <Button variant="outline" size="lg" href="/services">
                Explore our services
              </Button>
            </div>
          </Container>
        </Section>
      </main>

      <Footer />
    </>
  );
}
