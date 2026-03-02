import React from "react";
import { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import { Button, Badge, Container, Section } from "@/components/ui";
import { ArrowRight, Truck, Shield, CheckCircle, Zap, Search, Database, Workflow, Target, Layers, Cpu, Cloud, BarChart, MapPin, Navigation, Activity, Eye, type LucideIcon } from "lucide-react";
import { pageMetadata, heroData, modules, useCases, deliveryPhases, architectureLayers, securityControls, inputsRequired, kpis, techStack, caseStudies, faqs, ctaData, type IconName } from "./data";
import { FAQAccordion } from "./components";
import { ServiceProcessTimeline, SystemArchitecturePipeline } from "@/app/services/components";

const iconMap: Record<IconName, LucideIcon> = { truck: Truck, shield: Shield, checkCircle: CheckCircle, zap: Zap, search: Search, database: Database, workflow: Workflow, target: Target, layers: Layers, cpu: Cpu, cloud: Cloud, barChart: BarChart, mapPin: MapPin, navigation: Navigation, activity: Activity, eye: Eye };
function getIconServer(name: IconName): LucideIcon { return iconMap[name] || Truck; }
const trustColorMap = { green: "text-green-600", blue: "text-blue-600", purple: "text-purple-600" };

export const metadata: Metadata = { title: pageMetadata.title, description: pageMetadata.description, keywords: pageMetadata.keywords, openGraph: { title: pageMetadata.title, description: pageMetadata.description, type: "website" } };

export default function FleetLogisticsPage() {
    return (
        <>
            <Header />
            <main>
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
                                <div className="border-t border-gray-200 dark:border-gray-800 pt-8">
                                    <ul className="flex flex-col md:flex-row gap-6 md:gap-8 text-sm font-medium text-gray-600 dark:text-gray-400">
                                        {heroData.trustBadges.map((badge) => (<li key={badge.label} className="flex items-center gap-2"><Shield className={`w-5 h-5 ${trustColorMap[badge.color as keyof typeof trustColorMap]}`} />{badge.label}</li>))}
                                    </ul>
                                </div>
                            </div>
                            <div className="relative h-[450px] w-full hidden lg:flex items-center justify-center bg-gray-50 dark:bg-surface-dark rounded border border-gray-200 dark:border-gray-700 p-8 shadow-inner">
                                <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: "radial-gradient(#B62427 1px, transparent 1px)", backgroundSize: "20px 20px" }}></div>
                                <div className="relative w-full max-w-md z-10">
                                    <div className="flex flex-col justify-between items-center relative h-80">
                                        <div className="absolute left-1/2 top-10 bottom-10 w-0.5 bg-gradient-to-b from-gray-300 via-primary to-gray-300 -translate-x-1/2 -z-10"></div>
                                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg border border-gray-200 dark:border-gray-600 flex items-center gap-4 w-64 relative">
                                            <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/30 rounded flex items-center justify-center text-blue-600"><BarChart className="w-6 h-6" /></div>
                                            <div><div className="text-xs text-primary font-bold uppercase mb-0.5">Output</div><div className="text-sm font-semibold dark:text-white">Fleet Intelligence</div></div>
                                            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary rounded-full ring-4 ring-white dark:ring-gray-800"></div>
                                        </div>
                                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg border-2 border-primary flex items-center gap-4 w-72 z-20 scale-110">
                                            <div className="w-12 h-12 bg-primary text-white rounded flex items-center justify-center shadow-lg"><Truck className="w-7 h-7" /></div>
                                            <div><div className="text-xs text-gray-400 font-bold uppercase mb-0.5">Core</div><div className="text-base font-bold dark:text-white">Fleet Analytics</div></div>
                                        </div>
                                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg border border-gray-200 dark:border-gray-600 flex items-center gap-4 w-64 relative">
                                            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary rounded-full ring-4 ring-white dark:ring-gray-800"></div>
                                            <div className="w-10 h-10 bg-green-50 dark:bg-green-900/30 rounded flex items-center justify-center text-green-600"><Cpu className="w-6 h-6" /></div>
                                            <div><div className="text-xs text-primary font-bold uppercase mb-0.5">Input</div><div className="text-sm font-semibold dark:text-white">Telematics Data</div></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </Section>

                <Section background="surface" border="both">
                    <Container>
                        <div className="mb-14"><span className="text-primary font-bold uppercase tracking-widest text-sm">Platform Capabilities</span><h2 className="text-3xl font-bold mt-2 text-black dark:text-white">What the Platform Includes</h2><p className="mt-4 text-text-muted-light dark:text-text-muted-dark max-w-2xl text-lg">End-to-end fleet intelligence from telematics to optimization.</p></div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {modules.map((m) => {
                                const Icon = getIconServer(m.iconName); return (
                                    <div key={m.title} className="bg-white dark:bg-background-dark p-8 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 hover:border-primary/30 transition-colors">
                                        <Icon className="w-10 h-10 text-primary mb-5" />
                                        <h4 className="text-lg font-bold text-black dark:text-white mb-2">{m.title}</h4>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">{m.description}</p>
                                        <ul className="space-y-1.5">{m.features.map((f) => (<li key={f} className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400"><CheckCircle className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />{f}</li>))}</ul>
                                    </div>);
                            })}
                        </div>
                    </Container>
                </Section>

                <Section>
                    <Container>
                        <div className="flex justify-between items-end mb-14"><div><span className="text-primary font-bold uppercase tracking-widest text-sm">Use Cases</span><h2 className="text-3xl font-bold mt-2 text-black dark:text-white">Who Is This For?</h2></div></div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {useCases.map((uc) => (
                                <div key={uc.title} className="bg-white dark:bg-surface-dark p-8 rounded shadow-sm hover:shadow-xl transition border-t-4 border-primary flex flex-col h-full">
                                    <h3 className="text-xl font-bold mb-6 text-black dark:text-white">{uc.title}</h3>
                                    <div className="space-y-5 flex-1">
                                        <div className="bg-red-50 dark:bg-red-900/10 p-4 rounded"><p className="text-xs font-bold text-primary mb-1 uppercase tracking-wide">Challenge</p><p className="text-sm text-gray-700 dark:text-gray-300">{uc.problem}</p></div>
                                        <div className="px-1"><p className="text-xs font-bold text-gray-400 mb-1 uppercase tracking-wide">Approach</p><p className="text-sm text-gray-600 dark:text-gray-400">{uc.solution}</p></div>
                                    </div>
                                    <div className="border-t border-gray-100 dark:border-gray-700 pt-4 mt-6"><p className="text-xs font-bold text-green-600 dark:text-green-400 mb-1 uppercase tracking-wide">Result</p><p className="text-sm font-semibold text-black dark:text-white">{uc.outcome}</p></div>
                                    <div className="flex gap-4 mt-4">{uc.metrics.map((m) => (<div key={m.label} className="text-center"><div className="text-xl font-black text-primary">{m.value}</div><div className="text-[10px] text-gray-500 uppercase tracking-wider font-bold">{m.label}</div></div>))}</div>
                                </div>))}
                        </div>
                    </Container>
                </Section>

                <Section background="surface"><Container><div className="text-center mb-20"><span className="text-primary font-bold uppercase tracking-widest text-sm">Delivery Process</span><h2 className="text-3xl font-bold mt-2 text-black dark:text-white">How We Deliver Results</h2></div><ServiceProcessTimeline steps={deliveryPhases.map((s, i) => { const Icon = getIconServer(s.iconName); return { id: i + 1, title: s.title, desc: s.description, iconNode: <Icon /> }; })} /></Container></Section>

                <Section><Container><div className="mb-16 text-center"><span className="text-primary font-bold uppercase tracking-widest text-sm">Architecture</span><h2 className="text-3xl font-bold mt-2 text-black dark:text-white">System Architecture</h2></div><SystemArchitecturePipeline layers={architectureLayers.map((l) => { const Icon = getIconServer(l.iconName); return { title: l.title, subtitle: l.subtitle, iconNode: <Icon /> }; })} pillars={securityControls.map((p) => { const Icon = getIconServer(p.iconName); return { title: p.title, description: p.description, iconNode: <Icon /> }; })} /></Container></Section>

                <Section background="surface"><Container><div className="mb-14"><span className="text-primary font-bold uppercase tracking-widest text-sm">Getting Started</span><h2 className="text-3xl font-bold mt-2 text-black dark:text-white">What We Need to Start</h2></div><div className="grid md:grid-cols-2 gap-8">{inputsRequired.map((input) => { const Icon = getIconServer(input.iconName); return (<div key={input.title} className="bg-white dark:bg-background-dark p-8 rounded shadow-sm border border-gray-100 dark:border-gray-700 flex items-start gap-5"><Icon className="w-8 h-8 text-primary flex-shrink-0 mt-1" /><div><h4 className="text-lg font-bold text-black dark:text-white">{input.title}</h4><p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{input.description}</p></div></div>); })}</div></Container></Section>

                <Section><Container><div className="mb-14 text-center"><span className="text-primary font-bold uppercase tracking-widest text-sm">Success Metrics</span><h2 className="text-3xl font-bold mt-2 text-black dark:text-white">How We Measure Success</h2></div><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">{kpis.map((kpi) => (<div key={kpi.metric} className="bg-white dark:bg-surface-dark p-6 rounded-lg border border-gray-100 dark:border-gray-700 shadow-sm"><h4 className="font-bold text-black dark:text-white mb-2">{kpi.metric}</h4><p className="text-sm text-gray-500 dark:text-gray-400">{kpi.description}</p></div>))}</div></Container></Section>

                <Section background="surface"><Container><div className="flex flex-col items-center mb-16"><h3 className="text-3xl font-bold mb-4 text-black dark:text-white">Technology Stack</h3></div><div className="grid md:grid-cols-3 gap-10">{techStack.map((cat) => (<div key={cat.category}><h4 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-6 border-b border-gray-200 dark:border-gray-700 pb-3">{cat.category}</h4><div className="flex flex-wrap gap-2.5">{cat.technologies.map((t) => (<span key={t} className="px-3.5 py-1.5 bg-white dark:bg-background-dark border border-gray-200 dark:border-gray-700 rounded text-sm font-medium text-gray-700 dark:text-gray-300">{t}</span>))}</div></div>))}</div></Container></Section>

                <Section><Container><div className="flex justify-between items-end mb-12"><div><span className="text-primary font-bold uppercase tracking-widest text-sm">Our Work</span><h2 className="text-3xl font-bold mt-2 text-black dark:text-white">Success Stories</h2></div><a href="/work" className="hidden md:flex items-center gap-2 text-primary font-semibold hover:opacity-80 group">View all work<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></a></div><div className="grid md:grid-cols-3 gap-8">{caseStudies.map((s) => (<div key={s.title} className="bg-white dark:bg-surface-dark rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-gray-100 dark:border-gray-800 flex flex-col group"><div className="h-52 bg-gray-200 dark:bg-gray-700 relative overflow-hidden"><div className="absolute inset-0 bg-gradient-to-br from-gray-600 to-gray-800 group-hover:scale-105 transition-transform duration-500"></div><div className="absolute top-4 left-4 bg-white/95 dark:bg-black/80 px-3 py-1 text-xs font-bold rounded uppercase tracking-wider">Fleet</div></div><div className="p-6 flex-1 flex flex-col"><h3 className="font-bold text-lg mb-3 text-black dark:text-white leading-tight">{s.title}</h3><div className="text-xs text-gray-500 space-y-2 mb-6 flex-1 border-t border-gray-100 dark:border-gray-700 pt-3"><p><strong className="text-gray-800 dark:text-gray-300">Services:</strong> {s.services}</p><p className="text-green-600 dark:text-green-400 font-semibold"><strong className="text-gray-800 dark:text-gray-300">Result:</strong> {s.result}</p></div><a href={s.href} className="text-primary font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">Read case study<ArrowRight className="w-3.5 h-3.5" /></a></div></div>))}</div></Container></Section>

                <Section background="surface"><Container size="narrow"><h2 className="text-3xl font-bold mb-10 text-center text-black dark:text-white">Frequently Asked Questions</h2><FAQAccordion faqs={faqs} /></Container></Section>

                <Section className="relative overflow-hidden"><div className="absolute -right-20 -top-20 w-96 h-96 bg-gray-200 dark:bg-gray-800 rounded-full opacity-20 blur-3xl pointer-events-none"></div><div className="absolute -left-20 bottom-0 w-80 h-80 bg-primary opacity-5 blur-3xl rounded-full pointer-events-none"></div><Container className="relative z-10"><div className="text-center mb-10"><h2 className="text-4xl font-bold mb-4 text-black dark:text-white">{ctaData.headline}</h2><p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto">{ctaData.subheadline}</p></div><div className="flex flex-col sm:flex-row gap-4 justify-center"><Button size="lg" href="/contact">Discuss your fleet <ArrowRight className="w-4 h-4 ml-2" /></Button><Button variant="outline" size="lg" href="/work">View case studies</Button></div></Container></Section>
            </main>
            <Footer />
        </>
    );
}
