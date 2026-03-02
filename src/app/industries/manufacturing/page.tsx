import React from "react";
import { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import { Button, Badge, Container, Section } from "@/components/ui";
import { ArrowRight, CheckCircle, Settings, Shield, Cpu, BarChart, Wrench, Lock, Clock, Clipboard, AlertTriangle, Database, Wifi, Cloud, Target, Zap, Users, Factory, type LucideIcon } from "lucide-react";
import { pageMetadata, heroData, challenges, solutions, recommendedSolutions, serviceCategories, securityFeatures, caseStudies, implementationPatterns, faqs, ctaData, type IconName } from "./data";
import { FAQAccordion } from "./components";
import { ServiceProcessTimeline, SystemArchitecturePipeline } from "@/app/services/components";

const iconMap: Record<IconName, LucideIcon> = { settings: Settings, shield: Shield, cpu: Cpu, barChart: BarChart, wrench: Wrench, lock: Lock, clock: Clock, clipboard: Clipboard, alertTriangle: AlertTriangle, database: Database, wifi: Wifi, cloud: Cloud, target: Target, zap: Zap, users: Users, factory: Factory };
function getIconServer(name: IconName): LucideIcon { return iconMap[name] || Settings; }

export const metadata: Metadata = { title: pageMetadata.title, description: pageMetadata.description, keywords: pageMetadata.keywords, openGraph: { title: pageMetadata.title, description: pageMetadata.description, type: "website" } };

export default function ManufacturingPage() {
    return (
        <>
            <Header />
            <main>
                {/* HERO */}
                <Section background="default" padding="hero" className="relative overflow-hidden bg-gradient-to-b from-transparent to-surface-light/30 dark:to-surface-dark/30">
                    <Container>
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div className="text-left">
                                <Badge dot className="mb-6">{heroData.badge}</Badge>
                                <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 text-black dark:text-white tracking-tight">{heroData.headline} <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-600">{heroData.headlineHighlight}</span></h1>
                                <p className="text-lg md:text-xl text-text-muted-light dark:text-text-muted-dark mb-10 max-w-lg leading-relaxed">{heroData.subheadline}</p>
                                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                                    <Button size="lg" href={heroData.primaryCta.href}>{heroData.primaryCta.label}<ArrowRight className="w-4 h-4 ml-2" /></Button>
                                    <Button variant="outline" size="lg" href={heroData.secondaryCta.href}>{heroData.secondaryCta.label}</Button>
                                </div>
                            </div>
                            <div className="relative h-[450px] w-full hidden lg:flex items-center justify-center bg-gray-50 dark:bg-surface-dark rounded border border-gray-200 dark:border-gray-700 p-8 shadow-inner">
                                <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: "radial-gradient(#B62427 1px, transparent 1px)", backgroundSize: "20px 20px" }}></div>
                                <div className="relative w-full max-w-md z-10"><div className="flex flex-col justify-between items-center relative h-80"><div className="absolute left-1/2 top-10 bottom-10 w-0.5 bg-gradient-to-b from-gray-300 via-primary to-gray-300 -translate-x-1/2 -z-10"></div>
                                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg border border-gray-200 dark:border-gray-600 flex items-center gap-4 w-64 relative"><div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/30 rounded flex items-center justify-center text-blue-600"><BarChart className="w-6 h-6" /></div><div><div className="text-xs text-primary font-bold uppercase mb-0.5">Output</div><div className="text-sm font-semibold dark:text-white">OEE Dashboards</div></div><div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary rounded-full ring-4 ring-white dark:ring-gray-800"></div></div>
                                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg border-2 border-primary flex items-center gap-4 w-72 z-20 scale-110"><div className="w-12 h-12 bg-primary text-white rounded flex items-center justify-center shadow-lg"><Factory className="w-7 h-7" /></div><div><div className="text-xs text-gray-400 font-bold uppercase mb-0.5">Core</div><div className="text-base font-bold dark:text-white">Smart Factory</div></div></div>
                                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg border border-gray-200 dark:border-gray-600 flex items-center gap-4 w-64 relative"><div className="absolute -top-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary rounded-full ring-4 ring-white dark:ring-gray-800"></div><div className="w-10 h-10 bg-green-50 dark:bg-green-900/30 rounded flex items-center justify-center text-green-600"><Cpu className="w-6 h-6" /></div><div><div className="text-xs text-primary font-bold uppercase mb-0.5">Input</div><div className="text-sm font-semibold dark:text-white">OT Telemetry</div></div></div>
                                </div></div>
                            </div>
                        </div>
                    </Container>
                </Section>

                {/* CHALLENGES */}
                <Section background="surface" border="both"><Container><div className="mb-14"><span className="text-primary font-bold uppercase tracking-widest text-sm">Industry Challenges</span><h2 className="text-3xl font-bold mt-2 text-black dark:text-white">Critical Challenges We Solve</h2></div><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">{challenges.map((c) => { const Icon = getIconServer(c.iconName); return (<div key={c.title} className="bg-white dark:bg-background-dark p-6 rounded-lg border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow"><Icon className="w-8 h-8 text-primary mb-4" /><h4 className="font-bold text-black dark:text-white mb-2">{c.title}</h4><p className="text-sm text-gray-600 dark:text-gray-400">{c.description}</p></div>); })}</div></Container></Section>

                {/* WHAT WE BUILD */}
                <Section><Container><div className="mb-14"><span className="text-primary font-bold uppercase tracking-widest text-sm">What We Build</span><h2 className="text-3xl font-bold mt-2 text-black dark:text-white">Custom Solutions for Manufacturing</h2></div><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">{solutions.map((s) => { const Icon = getIconServer(s.iconName); return (<div key={s.title} className="bg-white dark:bg-surface-dark p-8 rounded-lg border border-gray-100 dark:border-gray-700 shadow-sm hover:border-primary/30 transition-colors group"><Icon className="w-10 h-10 text-primary mb-5" /><h4 className="text-lg font-bold text-black dark:text-white mb-3">{s.title}</h4><p className="text-sm text-gray-600 dark:text-gray-400 mb-5 leading-relaxed">{s.description}</p><a href={s.href} className="text-primary text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">Learn more<ArrowRight className="w-3.5 h-3.5" /></a></div>); })}</div></Container></Section>

                {/* RECOMMENDED SOLUTIONS */}
                <Section background="surface"><Container><div className="mb-14"><span className="text-primary font-bold uppercase tracking-widest text-sm">Recommended Solutions</span><h2 className="text-3xl font-bold mt-2 text-black dark:text-white">Start Here</h2></div><div className="grid md:grid-cols-2 gap-8">{recommendedSolutions.map((rs) => (<div key={rs.title} className="bg-white dark:bg-background-dark p-8 rounded-lg border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-lg transition-shadow"><h4 className="text-xl font-bold text-black dark:text-white mb-3">{rs.title}</h4><p className="text-sm text-gray-600 dark:text-gray-400 mb-5">{rs.description}</p><div className="space-y-2 mb-6 text-sm"><p><strong className="text-gray-800 dark:text-gray-300">Best for:</strong> <span className="text-gray-600 dark:text-gray-400">{rs.bestFor}</span></p><p><strong className="text-gray-800 dark:text-gray-300">Outcome:</strong> <span className="text-green-600 dark:text-green-400 font-semibold">{rs.outcome}</span></p></div><Button href={rs.href} variant="outline" size="sm">Explore solution <ArrowRight className="w-3.5 h-3.5 ml-1" /></Button></div>))}</div></Container></Section>

                {/* ENGINEERING SERVICES */}
                <Section><Container><div className="mb-14"><span className="text-primary font-bold uppercase tracking-widest text-sm">Engineering Services</span><h2 className="text-3xl font-bold mt-2 text-black dark:text-white">Technical Capabilities</h2></div><div className="grid md:grid-cols-3 gap-8">{serviceCategories.map((cat) => { const Icon = getIconServer(cat.iconName); return (<div key={cat.title} className="bg-white dark:bg-surface-dark p-8 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700"><Icon className="w-10 h-10 text-primary mb-5" /><h4 className="text-lg font-bold text-black dark:text-white mb-4">{cat.title}</h4><ul className="space-y-2">{cat.services.map((s) => (<li key={s} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"><CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />{s}</li>))}</ul></div>); })}</div></Container></Section>

                {/* SECURITY & COMPLIANCE */}
                <Section background="surface"><Container><div className="mb-16 text-center"><span className="text-primary font-bold uppercase tracking-widest text-sm">Security & Compliance</span><h2 className="text-3xl font-bold mt-2 text-black dark:text-white">Industrial-Grade Security</h2></div><SystemArchitecturePipeline layers={[{ title: "OT Layer", subtitle: "PLCs & SCADA", iconNode: <Cpu /> }, { title: "Edge Gateway", subtitle: "Protocol Translation", iconNode: <Wifi /> }, { title: "Secure Ingestion", subtitle: "Encrypted Pipeline", iconNode: <Lock /> }, { title: "Cloud Platform", subtitle: "Analytics & ML", iconNode: <Cloud /> }, { title: "Dashboards", subtitle: "Insights & Alerts", iconNode: <BarChart /> }]} pillars={securityFeatures.map((p) => { const Icon = getIconServer(p.iconName); return { title: p.title, description: p.description, iconNode: <Icon /> }; })} /></Container></Section>

                {/* CASE STUDIES */}
                <Section><Container><div className="flex justify-between items-end mb-12"><div><span className="text-primary font-bold uppercase tracking-widest text-sm">Proven Success</span><h2 className="text-3xl font-bold mt-2 text-black dark:text-white">Manufacturing Results</h2></div><a href="/work" className="hidden md:flex items-center gap-2 text-primary font-semibold hover:opacity-80 group">View all work<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></a></div><div className="grid md:grid-cols-2 gap-8">{caseStudies.map((s) => (<div key={s.title} className="bg-white dark:bg-surface-dark rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-gray-100 dark:border-gray-800 flex flex-col group"><div className="h-52 bg-gray-200 dark:bg-gray-700 relative overflow-hidden"><div className="absolute inset-0 bg-gradient-to-br from-gray-600 to-gray-800 group-hover:scale-105 transition-transform duration-500"></div><div className="absolute top-4 left-4 bg-white/95 dark:bg-black/80 px-3 py-1 text-xs font-bold rounded uppercase tracking-wider">{s.category}</div></div><div className="p-6 flex-1 flex flex-col"><h3 className="font-bold text-lg mb-3 text-black dark:text-white">{s.title}</h3><div className="text-xs text-gray-500 space-y-2 mb-6 flex-1 border-t border-gray-100 dark:border-gray-700 pt-3"><p><strong className="text-gray-800 dark:text-gray-300">Challenge:</strong> {s.challenge}</p><p className="text-green-600 dark:text-green-400 font-semibold"><strong className="text-gray-800 dark:text-gray-300">Result:</strong> {s.result}</p></div><a href={s.href} className="text-primary font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">Read case study<ArrowRight className="w-3.5 h-3.5" /></a></div></div>))}</div></Container></Section>

                {/* IMPLEMENTATION */}
                <Section background="surface"><Container><div className="text-center mb-20"><span className="text-primary font-bold uppercase tracking-widest text-sm">Implementation</span><h2 className="text-3xl font-bold mt-2 text-black dark:text-white">How We Deliver Results</h2></div><ServiceProcessTimeline steps={implementationPatterns.map((p) => ({ id: p.number, title: p.title, desc: p.description, iconNode: p.number === 1 ? <Target /> : p.number === 2 ? <Cpu /> : <Zap /> }))} /></Container></Section>

                {/* FAQ */}
                <Section><Container size="narrow"><h2 className="text-3xl font-bold mb-10 text-center text-black dark:text-white">Frequently Asked Questions</h2><FAQAccordion faqs={faqs} /></Container></Section>

                {/* CTA */}
                <Section className="relative overflow-hidden"><div className="absolute -right-20 -top-20 w-96 h-96 bg-gray-200 dark:bg-gray-800 rounded-full opacity-20 blur-3xl pointer-events-none"></div><Container className="relative z-10"><div className="text-center mb-10"><h2 className="text-4xl font-bold mb-4 text-black dark:text-white">{ctaData.headline}</h2><p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto">{ctaData.subheadline}</p></div><div className="flex flex-col sm:flex-row gap-4 justify-center"><Button size="lg" href="/contact">Talk to an expert <ArrowRight className="w-4 h-4 ml-2" /></Button><Button variant="outline" size="lg" href="/work">View case studies</Button></div></Container></Section>
            </main>
            <Footer />
        </>
    );
}
