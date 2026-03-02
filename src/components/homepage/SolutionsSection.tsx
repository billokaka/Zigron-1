"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ArrowRight } from "lucide-react";

const solutions = [
    {
        id: 1,
        industry: "Energy / Solar",
        title: "Smart Energy & Solar",
        promise: "Optimize generation and performance with automated monitoring and intelligence.",
        chips: ["Performance optimization", "Anomaly detection", "O&M automation"],
        route: "/solutions/smart-energy-solar",
        colSpan: "lg:col-span-3", // 60% of 5-col grid
    },
    {
        id: 2,
        industry: "Manufacturing",
        title: "Predictive Maintenance",
        promise: "Predict failures earlier using telemetry, patterns, and reliability workflows.",
        chips: ["Downtime reduction", "Asset health scoring", "Work order automation"],
        route: "/solutions/predictive-maintenance",
        colSpan: "lg:col-span-2", // 40% of 5-col grid
    },
    {
        id: 3,
        industry: "Transportation",
        title: "Fleet & Logistics",
        promise: "Turn location + sensor data into live visibility and smarter operations.",
        chips: ["Real-time tracking", "Route & utilization insights", "Automated exceptions"],
        route: "/solutions/fleet-logistics",
        colSpan: "lg:col-span-2", // 33% of 6-col grid in next row? Let's use standard grid. 
        // Wait, the spec says "Row 1: 2 tiles (60/40), Row 2: 3 tiles (equal thirds)"
    },
    {
        id: 4,
        industry: "Smart Home",
        title: "Smart Home Automation",
        promise: "Reliable device performance with secure connectivity, automation, and testing at scale.",
        chips: ["Device reliability", "Secure integrations", "Automated QA & releases"],
        route: "/solutions/smart-home-automation",
        colSpan: "lg:col-span-2",
    },
    {
        id: 5,
        industry: "Healthcare",
        title: "Medical IoT Platform",
        promise: "Build compliant, secure data flows and intelligence for connected care systems.",
        chips: ["Secure data pipelines", "Monitoring & alerts", "Audit-ready operations"],
        route: "/solutions/medical-iot-platform",
        colSpan: "lg:col-span-2",
    },
];

export function SolutionsSection() {
    const containerRef = useRef<HTMLElement>(null);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true);

                    const ctx = gsap.context(() => {
                        gsap.fromTo(".sol-header",
                            { y: 32, opacity: 0 },
                            { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
                        );
                        gsap.fromTo(".sol-tile",
                            { y: 40, opacity: 0 },
                            { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power3.out", delay: 0.2 }
                        );
                    }, containerRef);

                    return () => ctx.revert();
                }
            },
            { threshold: 0.1 } // Trigger when 10% of section is visible
        );

        if (containerRef.current) observer.observe(containerRef.current);
        return () => observer.disconnect();
    }, [hasAnimated]);

    return (
        <section id="solutions" ref={containerRef} className="py-20 md:py-32 bg-white flex flex-col items-center">
            <div className="w-full max-w-[1320px] mx-auto px-6 md:px-12 lg:px-20">

                {/* Header */}
                <div className="sol-header opacity-0 flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="font-poppins font-bold text-[36px] md:text-[48px] leading-[1.2] text-zigron-black tracking-[-0.02em] mb-4">
                            Solutions that turn legacy data into operational advantage.
                        </h2>
                        <p className="font-poppins text-[18px] text-zigron-gray leading-[1.7]">
                            Pick an outcome. We connect to your systems and deliver AI + automation that works in the field.
                        </p>
                    </div>
                    <a href="/solutions" className="font-poppins font-semibold text-[15px] text-zigron-red hover:underline flex items-center group whitespace-nowrap mb-2">
                        View all solutions <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>

                {/* Tiles Grid */}
                <div className="sol-grid grid grid-cols-1 lg:grid-cols-6 gap-6">

                    {/* Tile 1: 60% */}
                    <div className="sol-tile opacity-0 lg:col-span-4 bg-white border border-[#CCCCCC] rounded-[16px] overflow-hidden group hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgba(192,39,45,0.12)] hover:border-zigron-red transition-all duration-250 flex flex-col">
                        <div className="h-[160px] bg-zigron-light relative overflow-hidden flex items-center justify-center">
                            <span className="absolute top-4 left-4 bg-white border border-zigron-red text-zigron-red font-mono text-[11px] font-medium uppercase px-2 py-0.5 rounded-[4px] z-10">
                                {solutions[0].industry}
                            </span>
                            <TileOneVisual />
                        </div>
                        <div className="p-7 flex flex-col flex-grow">
                            <h3 className="font-poppins font-bold text-[22px] text-zigron-black mb-2">{solutions[0].title}</h3>
                            <p className="font-poppins text-[15px] text-zigron-gray mb-6 flex-grow">{solutions[0].promise}</p>
                            <div className="flex flex-wrap gap-2 mb-6">
                                {solutions[0].chips.map((chip, i) => (
                                    <span key={i} className="bg-zigron-light border border-[#CCCCCC] font-poppins font-medium text-[12px] text-zigron-gray px-2.5 py-1 rounded-[4px]">
                                        {chip}
                                    </span>
                                ))}
                            </div>
                            <a href={solutions[0].route} className="font-poppins font-semibold text-[14px] text-zigron-red group-hover:underline flex items-center">
                                Explore solution <ArrowRight className="w-4 h-4 ml-1" />
                            </a>
                        </div>
                    </div>

                    {/* Tile 2: 40% */}
                    <div className="sol-tile opacity-0 lg:col-span-2 bg-white border border-[#CCCCCC] rounded-[16px] overflow-hidden group hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgba(192,39,45,0.12)] hover:border-zigron-red transition-all duration-250 flex flex-col">
                        <div className="h-[160px] bg-zigron-light relative overflow-hidden flex items-center justify-center">
                            <span className="absolute top-4 left-4 bg-white border border-zigron-red text-zigron-red font-mono text-[11px] font-medium uppercase px-2 py-0.5 rounded-[4px] z-10">
                                {solutions[1].industry}
                            </span>
                            <TileTwoVisual />
                        </div>
                        <div className="p-7 flex flex-col flex-grow">
                            <h3 className="font-poppins font-bold text-[22px] text-zigron-black mb-2">{solutions[1].title}</h3>
                            <p className="font-poppins text-[15px] text-zigron-gray mb-6 flex-grow">{solutions[1].promise}</p>
                            <div className="flex flex-wrap gap-2 mb-6">
                                {solutions[1].chips.map((chip, i) => (
                                    <span key={i} className="bg-zigron-light border border-[#CCCCCC] font-poppins font-medium text-[12px] text-zigron-gray px-2.5 py-1 rounded-[4px]">
                                        {chip}
                                    </span>
                                ))}
                            </div>
                            <a href={solutions[1].route} className="font-poppins font-semibold text-[14px] text-zigron-red group-hover:underline flex items-center">
                                Explore solution <ArrowRight className="w-4 h-4 ml-1" />
                            </a>
                        </div>
                    </div>

                    {/* Tile 3: 33% */}
                    <div className="sol-tile opacity-0 lg:col-span-2 bg-white border border-[#CCCCCC] rounded-[16px] overflow-hidden group hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgba(192,39,45,0.12)] hover:border-zigron-red transition-all duration-250 flex flex-col">
                        <div className="h-[160px] bg-zigron-light relative overflow-hidden flex items-center justify-center">
                            <span className="absolute top-4 left-4 bg-white border border-zigron-red text-zigron-red font-mono text-[11px] font-medium uppercase px-2 py-0.5 rounded-[4px] z-10">
                                {solutions[2].industry}
                            </span>
                            <TileThreeVisual />
                        </div>
                        <div className="p-7 flex flex-col flex-grow">
                            <h3 className="font-poppins font-bold text-[22px] text-zigron-black mb-2">{solutions[2].title}</h3>
                            <p className="font-poppins text-[15px] text-zigron-gray mb-6 flex-grow">{solutions[2].promise}</p>
                            <div className="flex flex-wrap gap-2 mb-6">
                                {solutions[2].chips.map((chip, i) => (
                                    <span key={i} className="bg-zigron-light border border-[#CCCCCC] font-poppins font-medium text-[12px] text-zigron-gray px-2.5 py-1 rounded-[4px]">
                                        {chip}
                                    </span>
                                ))}
                            </div>
                            <a href={solutions[2].route} className="font-poppins font-semibold text-[14px] text-zigron-red group-hover:underline flex items-center">
                                Explore solution <ArrowRight className="w-4 h-4 ml-1" />
                            </a>
                        </div>
                    </div>

                    {/* Tile 4: 33% */}
                    <div className="sol-tile opacity-0 lg:col-span-2 bg-white border border-[#CCCCCC] rounded-[16px] overflow-hidden group hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgba(192,39,45,0.12)] hover:border-zigron-red transition-all duration-250 flex flex-col">
                        <div className="h-[160px] bg-zigron-light relative overflow-hidden flex items-center justify-center">
                            <span className="absolute top-4 left-4 bg-white border border-zigron-red text-zigron-red font-mono text-[11px] font-medium uppercase px-2 py-0.5 rounded-[4px] z-10">
                                {solutions[3].industry}
                            </span>
                            <TileFourVisual />
                        </div>
                        <div className="p-7 flex flex-col flex-grow">
                            <h3 className="font-poppins font-bold text-[22px] text-zigron-black mb-2">{solutions[3].title}</h3>
                            <p className="font-poppins text-[15px] text-zigron-gray mb-6 flex-grow">{solutions[3].promise}</p>
                            <div className="flex flex-wrap gap-2 mb-6">
                                {solutions[3].chips.map((chip, i) => (
                                    <span key={i} className="bg-zigron-light border border-[#CCCCCC] font-poppins font-medium text-[12px] text-zigron-gray px-2.5 py-1 rounded-[4px]">
                                        {chip}
                                    </span>
                                ))}
                            </div>
                            <a href={solutions[3].route} className="font-poppins font-semibold text-[14px] text-zigron-red group-hover:underline flex items-center">
                                Explore solution <ArrowRight className="w-4 h-4 ml-1" />
                            </a>
                        </div>
                    </div>

                    {/* Tile 5: 33% */}
                    <div className="sol-tile opacity-0 lg:col-span-2 bg-white border border-[#CCCCCC] rounded-[16px] overflow-hidden group hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgba(192,39,45,0.12)] hover:border-zigron-red transition-all duration-250 flex flex-col">
                        <div className="h-[160px] bg-zigron-light relative overflow-hidden flex items-center justify-center">
                            <span className="absolute top-4 left-4 bg-white border border-zigron-red text-zigron-red font-mono text-[11px] font-medium uppercase px-2 py-0.5 rounded-[4px] z-10">
                                {solutions[4].industry}
                            </span>
                            <TileFiveVisual />
                        </div>
                        <div className="p-7 flex flex-col flex-grow">
                            <h3 className="font-poppins font-bold text-[22px] text-zigron-black mb-2">{solutions[4].title}</h3>
                            <p className="font-poppins text-[15px] text-zigron-gray mb-6 flex-grow">{solutions[4].promise}</p>
                            <div className="flex flex-wrap gap-2 mb-6">
                                {solutions[4].chips.map((chip, i) => (
                                    <span key={i} className="bg-zigron-light border border-[#CCCCCC] font-poppins font-medium text-[12px] text-zigron-gray px-2.5 py-1 rounded-[4px]">
                                        {chip}
                                    </span>
                                ))}
                            </div>
                            <a href={solutions[4].route} className="font-poppins font-semibold text-[14px] text-zigron-red group-hover:underline flex items-center">
                                Explore solution <ArrowRight className="w-4 h-4 ml-1" />
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

// Mini UI Visuals
function TileOneVisual() {
    return (
        <div className="relative w-full h-full">
            <svg className="absolute inset-0 w-full h-full opacity-50" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0,80 Q20,60 40,80 T80,50 T100,50" fill="none" stroke="#CCC" strokeWidth="2" vectorEffect="non-scaling-stroke" />
            </svg>
            {/* Animated chart line */}
            <svg className="absolute inset-0 w-full h-full group-hover:scale-105 transition-transform duration-300" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0,80 Q20,60 40,80 T80,50 T100,20 L100,100 L0,100 Z" fill="url(#grad1)" />
                <path d="M0,80 Q20,60 40,80 T80,50 T100,20" fill="none" stroke="#10B981" strokeWidth="3" vectorEffect="non-scaling-stroke" />
                <defs>
                    <linearGradient id="grad1" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#10B981" stopOpacity="0.2" />
                        <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
                    </linearGradient>
                </defs>
            </svg>
            {/* Alert Marker */}
            <div className="absolute top-[40%] left-[38%] bg-zigron-red text-white text-[9px] font-bold px-1.5 py-0.5 rounded flex items-center gap-1 shadow-sm opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" /> LOSS DETECTED
            </div>
        </div>
    );
}

function TileTwoVisual() {
    return (
        <div className="relative flex items-center justify-center w-full h-full overflow-hidden">
            <div className="relative group-hover:scale-110 transition-transform duration-500">
                <svg width="100" height="100" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#E5E7EB" strokeWidth="8" />
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#F59E0B" strokeWidth="8" strokeLinecap="round" strokeDasharray="251" strokeDashoffset="45" className="group-hover:stroke-[#10B981] transition-colors duration-500" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center font-poppins font-bold text-zigron-black text-[24px]">
                    <span className="group-hover:hidden">82</span>
                    <span className="hidden group-hover:block transition-all text-[#10B981]">97</span>
                </div>
            </div>
            <div className="absolute bottom-6 right-6 bg-[#10B981] text-white text-[9px] font-bold px-1.5 py-0.5 rounded shadow-sm opacity-100 lg:opacity-0 group-hover:-translate-y-2 group-hover:opacity-100 transition-all duration-300 delay-100">
                TICKET CREATED
            </div>
        </div>
    );
}

function TileThreeVisual() {
    return (
        <div className="relative w-full h-full">
            {/* Map Dots */}
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#9ca3af 2px, transparent 2px)', backgroundSize: '16px 16px' }} />
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M20,80 Q40,40 80,30" fill="none" stroke="#C0272D" strokeWidth="2" strokeDasharray="4 4" className="group-hover:animate-[dashFlow_1s_linear_infinite]" vectorEffect="non-scaling-stroke" />
                <circle cx="20" cy="80" r="4" fill="#1A1A1A" />
                <circle cx="50" cy="50" r="4" fill="#1A1A1A" className="group-hover:fill-zigron-red transition-colors" />
                <circle cx="80" cy="30" r="4" fill="#10B981" />
            </svg>
            <div className="absolute top-[40%] left-[55%] bg-zigron-red text-white text-[9px] font-bold px-1.5 py-0.5 rounded shadow-sm opacity-100 lg:opacity-0 group-hover:-translate-x-2 group-hover:opacity-100 transition-all duration-300">
                DELAY RISK
            </div>
        </div>
    );
}

function TileFourVisual() {
    return (
        <div className="relative w-full h-full flex flex-col items-center justify-center group-hover:scale-105 transition-transform duration-300">
            <div className="w-12 h-12 bg-white rounded-full shadow-sm border-[2px] border-[#CCC] flex items-center justify-center z-10 group-hover:border-[#10B981] transition-colors">
                <div className="w-4 h-4 bg-zigron-black rounded-full" />
            </div>
            {/* Connecting lines */}
            <div className="absolute inset-0 flex justify-center items-center z-0">
                <div className="w-[100px] h-[2px] bg-[#CCC] rotate-45 group-hover:bg-[#10B981] transition-colors" />
                <div className="w-[100px] h-[2px] bg-[#CCC] -rotate-45 group-hover:bg-[#10B981] transition-colors" />
            </div>
            <div className="absolute top-8 right-[20%] w-6 h-6 bg-white rounded-full border-[2px] border-[#CCC] group-hover:border-[#10B981] transition-colors" />
            <div className="absolute bottom-8 left-[20%] w-6 h-6 bg-white rounded-full border-[2px] border-[#CCC] group-hover:border-[#10B981] transition-colors" />
            <div className="absolute bottom-4 right-4 w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-[#10B981] w-[30%] lg:w-[30%] group-hover:w-[100%] transition-all duration-1000 ease-out" />
            </div>
            <span className="absolute bottom-[28px] right-4 text-[9px] font-mono font-bold text-[#10B981] opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity delay-300">RELEASED</span>
        </div>
    );
}

function TileFiveVisual() {
    return (
        <div className="relative w-full h-full p-6 flex flex-col justify-center gap-2">
            <div className="flex gap-2 items-center w-[80%] opacity-100 transition-opacity">
                <div className="w-6 h-6 rounded bg-zigron-black flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                </div>
                <div className="h-2 flex-grow bg-zigron-red rounded-full overflow-hidden relative">
                    <div className="absolute inset-0 bg-white/30 w-1/2 -skew-x-12 translate-x-[-100%] animate-[slideRight_1.5s_infinite]" />
                </div>
            </div>
            <div className="h-4 w-full bg-white rounded border border-gray-200 shadow-sm" />
            <div className="h-4 w-[70%] bg-white rounded border border-gray-200 shadow-sm" />
            <div className="absolute top-4 right-4 bg-zigron-red text-white text-[9px] font-bold px-1.5 py-0.5 rounded shadow-sm opacity-100 lg:opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                AUDIT LOG
            </div>
            <style>{`@keyframes slideRight { to { transform: translateX(250%); } }`}</style>
        </div>
    );
}
