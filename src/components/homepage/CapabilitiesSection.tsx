"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Cpu, BrainCircuit, Building2, CheckCircle2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const capabilities = [
    {
        id: 1,
        title: "IoT & Embedded",
        icon: Cpu,
        items: [
            "OEM device & firmware development",
            "Edge computing & gateways",
            "Sensor integration & telemetry",
            "Protocol translation (MQTT, Modbus, OPC-UA)",
            "Secure over-the-air (OTA) updates"
        ]
    },
    {
        id: 2,
        title: "AI & Data Systems",
        icon: BrainCircuit,
        items: [
            "Real-time streaming pipelines",
            "Predictive modeling & anomaly detection",
            "Computer vision for QA & safety",
            "MLOps & edge deployment",
            "Custom analytics dashboards"
        ]
    },
    {
        id: 3,
        title: "Infrastructure Engineering",
        icon: Building2,
        items: [
            "CAD design & prototyping",
            "Structural & civil analysis",
            "HVAC & MEP engineering",
            "Geotechnical evaluations",
            "Compliance & safety documentation"
        ]
    }
];

export function CapabilitiesSection() {
    const containerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".cap-header", {
                y: 32, opacity: 0, duration: 0.6, ease: "power3.out",
                scrollTrigger: { trigger: containerRef.current, start: "top 80%" }
            });
            gsap.from(".cap-col", {
                y: 40, opacity: 0, duration: 0.6, stagger: 0.15, ease: "power3.out",
                scrollTrigger: { trigger: ".cap-grid", start: "top 75%" }
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="capabilities" ref={containerRef} className="py-20 md:py-32 bg-zigron-black text-white relative overflow-hidden">
            {/* Subtle Background Pattern */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle at center, white 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

            <div className="relative z-10 w-full max-w-[1320px] mx-auto px-6 md:px-12 lg:px-20">

                {/* Header */}
                <div className="cap-header text-center max-w-3xl mx-auto mb-16 md:mb-24">
                    <span className="inline-block font-mono text-[11px] uppercase text-zigron-red tracking-[0.12em] mb-4">
                        WHAT WE DO
                    </span>
                    <h2 className="font-poppins font-bold text-[36px] md:text-[48px] leading-[1.2] tracking-[-0.02em] mb-6">
                        Core Engineering Capabilities
                    </h2>
                    <p className="font-poppins text-[18px] text-white/70 leading-[1.7]">
                        We combine IoT hardware, AI software, and civil/structural engineering under one roof. No stitching together vendors.
                    </p>
                </div>

                {/* 3-Column Grid */}
                <div className="cap-grid grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">

                    {/* Vertical Dividers (Desktop) */}
                    <div className="hidden md:block absolute top-[10%] bottom-[10%] left-1/3 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent" />
                    <div className="hidden md:block absolute top-[10%] bottom-[10%] left-2/3 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent" />

                    {capabilities.map((col) => {
                        const Icon = col.icon;
                        return (
                            <div key={col.id} className="cap-col bg-white/5 md:bg-transparent rounded-[16px] p-8 md:p-0 border border-white/10 md:border-none flex flex-col group hover:-translate-y-2 md:hover:translate-y-0 transition-transform duration-300">
                                <div className="w-14 h-14 bg-zigron-red/10 rounded-[12px] flex items-center justify-center mb-8 border border-zigron-red/20 group-hover:bg-zigron-red group-hover:border-zigron-red transition-colors duration-300">
                                    <Icon className="w-7 h-7 text-zigron-red group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                                </div>

                                <h3 className="font-poppins font-bold text-[24px] mb-8 text-white group-hover:text-zigron-red transition-colors duration-300">
                                    {col.title}
                                </h3>

                                <ul className="space-y-4 flex-grow">
                                    {col.items.map((item, i) => (
                                        <li key={i} className="flex items-start gap-4">
                                            <CheckCircle2 className="w-5 h-5 text-white/30 flex-shrink-0 mt-0.5 group-hover:text-[#10B981] transition-colors duration-300 delay-[50ms]" strokeWidth={2} />
                                            <span className="font-poppins text-[15px] text-white/80 leading-[1.5] group-hover:text-white transition-colors duration-300">
                                                {item}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
