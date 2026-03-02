"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ArrowRight, CheckCircle, ChevronRight } from "lucide-react";

export function ModernizeSection() {
    const containerRef = useRef<HTMLElement>(null);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true);

                    const ctx = gsap.context(() => {
                        gsap.fromTo(".mod-header",
                            { y: 32, opacity: 0 },
                            { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" }
                        );

                        gsap.fromTo(".mod-col",
                            { y: 40, opacity: 0 },
                            { y: 0, opacity: 1, duration: 0.6, stagger: 0.15, ease: "power3.out", delay: 0.2 }
                        );

                        gsap.fromTo(".mod-connector",
                            { scale: 0.8, opacity: 0 },
                            { scale: 1, opacity: 1, duration: 0.4, stagger: 0.2, ease: "back.out(1.7)", delay: 0.6 }
                        );

                        gsap.fromTo(".mod-chip",
                            { y: 20, opacity: 0 },
                            { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power3.out", delay: 0.4 }
                        );

                        gsap.fromTo(".mod-proof",
                            { y: 24, opacity: 0 },
                            { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power3.out", delay: 0.6 }
                        );
                    }, containerRef);
                    return () => ctx.revert();
                }
            },
            { threshold: 0.1 }
        );

        if (containerRef.current) observer.observe(containerRef.current);
        return () => observer.disconnect();
    }, [hasAnimated]);

    return (
        <section id="modernize-without-replacing" ref={containerRef} className="py-20 md:py-32 bg-zigron-light">
            <div className="w-full max-w-[1320px] mx-auto px-6 md:px-12 lg:px-20">

                {/* Header */}
                <div className="mod-header opacity-0 text-center max-w-3xl mx-auto mb-16">
                    <h2 className="font-poppins font-bold text-[36px] md:text-[48px] leading-[1.2] text-zigron-black tracking-[-0.02em] mb-6">
                        Modernize without ripping and replacing.
                    </h2>
                    <p className="font-poppins text-[18px] text-zigron-gray leading-[1.7]">
                        We connect to what you already run, layer in AI + automation, and improve reliability, efficiency, and testing.
                    </p>
                </div>

                {/* 3-Column Transformation Graphic */}
                <div className="relative">

                    <div className="mod-grid grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-16 items-stretch">

                        {/* Column 1: Current Environment */}
                        <div className="mod-col relative opacity-0 flex flex-col p-6 border border-[#E5E5E5] rounded-[24px] bg-[#FDFDFD] shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
                            {/* Chevron connecting Col 1 to Col 2 */}
                            <div className="mod-connector opacity-0 hidden lg:flex absolute top-1/2 left-full w-8 justify-center -translate-y-1/2 z-20 pointer-events-none">
                                <div className="bg-white rounded-full p-1.5 border border-[#E5E5E5] shadow-sm text-[#A0A0A0]">
                                    <ChevronRight className="w-5 h-5" />
                                </div>
                            </div>
                            <h3 className="font-poppins font-semibold text-[20px] text-zigron-black mb-1">Your current environment</h3>
                            <p className="font-poppins text-[14px] text-zigron-gray mb-5">Keep what works. Connect the rest.</p>
                            <div className="space-y-2.5 mb-5 flex-grow">
                                {[
                                    "SCADA / PLCs / RTUs",
                                    "Existing IoT devices & gateways",
                                    "ERP / CMMS / CRM systems",
                                    "Data silos (databases, spreadsheets)",
                                    "On-prem + cloud mixed infrastructure"
                                ].map((item, i) => (
                                    <div key={i} className="bg-white text-zigron-black text-[14px] font-poppins px-4 py-3 rounded-[8px] border border-[#E5E5E5] shadow-[0_2px_8px_rgba(0,0,0,0.02)] font-medium">
                                        {item}
                                    </div>
                                ))}
                            </div>
                            <p className="font-poppins italic text-[13px] text-zigron-gray font-medium">&quot;No forced rip-and-replace.&quot;</p>
                        </div>

                        {/* Column 2: Zigron AI Layer (Center Prominent) */}
                        <div className="mod-col relative opacity-0 flex flex-col p-6 bg-[#1A1A1A] border-t-[3px] border-t-zigron-red rounded-[24px] shadow-[0_20px_40px_rgba(0,0,0,0.05)] overflow-hidden">
                            {/* Chevron connecting Col 2 to Col 3 */}
                            <div className="mod-connector opacity-0 hidden lg:flex absolute top-1/2 left-full w-8 justify-center -translate-y-1/2 z-20 pointer-events-none">
                                <div className="bg-white rounded-full p-2 border border-[#E5E5E5] shadow-sm text-[#A0A0A0]">
                                    <ChevronRight className="w-5 h-5" />
                                </div>
                            </div>

                            <div className="relative z-20 flex flex-col h-full text-center">
                                <h3 className="font-poppins font-bold text-[24px] text-white mb-1">Zigron AI + Automation Layer</h3>
                                <p className="font-poppins text-[14px] text-[#A0A0A0] mb-5 leading-[1.5]">Make data usable. Make systems smarter.</p>

                                <div className="space-y-3 my-auto flex-grow flex flex-col justify-center">
                                    {[
                                        { title: "Connectors & Ingestion", desc: "Unify data streams, normalize formats" },
                                        { title: "Intelligence (AI Models)", desc: "Detect anomalies, predict failures, optimize" },
                                        { title: "Automation & Workflows", desc: "Alerts, tickets, actions, reporting" },
                                        { title: "Quality & Observability", desc: "Testing pipelines, monitoring, audit trails" },
                                    ].map((card, i) => (
                                        <div key={i} className="bg-white/5 border border-white/10 rounded-[12px] p-4 text-left transition-colors">
                                            <h4 className="font-poppins font-semibold text-[16px] text-white mb-1">{card.title}</h4>
                                            <p className="font-poppins text-[13px] text-[#A0A0A0] leading-[1.5]">{card.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Column 3: Outcomes */}
                        <div className="mod-col opacity-0 flex flex-col p-6 border border-[#E5E5E5] rounded-[24px] bg-[#FDFDFD] shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
                            <h3 className="font-poppins font-semibold text-[20px] text-zigron-black mb-1">What improves fast</h3>
                            <p className="font-poppins text-[14px] text-zigron-gray mb-5">Reliability, efficiency, and scale.</p>
                            <div className="space-y-3 mb-6 flex-grow">
                                {[
                                    "Higher reliability — fewer surprises",
                                    "Less manual monitoring — signal > noise",
                                    "Faster testing & QA — repeatable validation",
                                    "Better decision-making — insights",
                                    "Smoother deployments — runbooks"
                                ].map((item, i) => (
                                    <div key={i} className="bg-white px-4 py-3 rounded-[8px] border border-[#E5E5E5] shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex items-start gap-3">
                                        <CheckCircle className="w-4 h-4 text-[#10B981] flex-shrink-0 mt-0.5" />
                                        <span className="font-poppins text-[13px] text-zigron-black font-medium leading-[1.5]">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <a href="/solutions" className="font-poppins font-semibold text-[14px] text-zigron-red hover:underline flex items-center group mt-auto w-fit">
                                Explore outcomes <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>

                    </div>
                </div>

                {/* Capability Chips */}
                <div className="mod-chips-container flex flex-wrap justify-center gap-4 mb-16">
                    {[
                        { label: "Activate dormant data", href: "#solutions" },
                        { label: "Automate reliability workflows", href: "/services" },
                        { label: "Make testing repeatable", href: "/services" },
                    ].map((chip, i) => (
                        <a
                            key={i}
                            href={chip.href}
                            className="mod-chip opacity-0 px-6 py-2.5 rounded-full bg-white border-[1.5px] border-zigron-red text-zigron-red font-poppins font-semibold text-[14px] hover:bg-zigron-red hover:text-white transition-colors duration-200 shadow-sm"
                        >
                            {chip.label}
                        </a>
                    ))}
                </div>

                {/* Mini-Proof Strip */}
                <div className="mod-proof-container grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { text: "From legacy telemetry \u2192 automated alerts", link: "/work/terrasmart-solar" },
                        { text: "From noisy alarms \u2192 health scoring", link: "/work/abode-smart-home" },
                        { text: "From manual QA \u2192 automated validation", link: "/work/terratrak-ai" },
                    ].map((proof, i) => (
                        <a
                            key={i}
                            href={proof.link}
                            className="mod-proof opacity-0 flex items-center justify-between bg-white border border-[#E5E5E5] rounded-[16px] p-5 group hover:border-zigron-red hover:-translate-y-[2px] transition-all duration-200 shadow-sm"
                        >
                            <span className="font-poppins text-[14px] text-zigron-black font-medium pr-4">{proof.text}</span>
                            <ArrowRight className="w-5 h-5 text-zigron-red transform group-hover:translateX(4px)" strokeWidth={2.5} />
                        </a>
                    ))}
                </div>

            </div>
        </section>
    );
}
