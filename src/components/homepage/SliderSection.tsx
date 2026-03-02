"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const slides = [
    {
        id: 1,
        title: "Your data doesn't sit around.",
        support: "We turn dormant telemetry into signals, predictions, and automated actions.",
        bullets: [
            "Stream and unify data from legacy + modern sources",
            "Detect anomalies and patterns in real time",
            "Trigger workflows: alerts, tickets, control actions",
        ],
        kpis: ["Events processed", "Anomalies flagged", "Actions triggered"],
    },
    {
        id: 2,
        title: "You don't manually check systems.",
        support: "Monitoring becomes proactive—so teams focus on fixes, not hunting.",
        bullets: [
            "Automated health checks + smart alerting",
            "Reduce noise with priority-based notifications",
            "Get root-cause hints, not just alarms",
        ],
        kpis: ["Noise reduced", "MTTR improved", "High-priority alerts only"],
    },
    {
        id: 3,
        title: "Testing doesn't slow you down.",
        support: "Reliability improves because validation becomes repeatable and automated.",
        bullets: [
            "Automated QA for data pipelines and integrations",
            "Regression checks before releases and OTA updates",
            "Faster releases with fewer production surprises",
        ],
        kpis: ["Regression caught", "Release velocity", "Zero surprises"],
    },
];

export function SliderSection() {
    const containerRef = useRef<HTMLElement>(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const touchStartX = useRef(0);

    // GSAP Scroll Entrance
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".slider-header", {
                y: 40,
                opacity: 0,
                duration: 0.7,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                },
            });
            gsap.from(".slider-container", {
                y: 60,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out",
                delay: 0.2,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 75%",
                },
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    // Autoplay functionality
    useEffect(() => {
        if (isHovered) return;
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 7000);
        return () => clearInterval(interval);
    }, [isHovered]);

    const handleNext = () => setCurrentSlide((p) => (p + 1) % slides.length);
    const handlePrev = () => setCurrentSlide((p) => (p - 1 + slides.length) % slides.length);

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.changedTouches[0].clientX;
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        const touchEndX = e.changedTouches[0].clientX;
        if (touchStartX.current - touchEndX > 50) handleNext();
        if (touchStartX.current - touchEndX < -50) handlePrev();
    };

    return (
        <section
            id="when-you-work-with-us"
            ref={containerRef}
            className="py-16 md:py-24 bg-white overflow-hidden"
        >
            <div className="w-full max-w-[1320px] mx-auto px-6 md:px-12 lg:px-20">

                {/* Section Header */}
                <div className="slider-header mb-12 max-w-3xl">
                    <span className="inline-block font-mono text-[11px] uppercase text-zigron-red tracking-[0.12em] mb-4">
                        WHEN YOU WORK WITH US
                    </span>
                    <h2 className="font-poppins font-bold text-[32px] md:text-[48px] leading-[1.2] text-zigron-black tracking-[-0.02em] mb-4">
                        Operations get smarter—without adding complexity.
                    </h2>
                    <p className="font-poppins text-zigron-gray text-[18px] leading-[1.7]">
                        We make dormant data work, reduce manual monitoring, and automate
                        reliability and testing.
                    </p>
                </div>

                {/* Interactive Slider Container */}
                <div
                    className="slider-container relative rounded-[24px] overflow-hidden bg-zigron-light shadow-[0_2px_16px_rgba(0,0,0,0.08)] group"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                >
                    {/* Slides Track */}
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{
                            width: `${slides.length * 100}%`,
                            transform: `translateX(-${currentSlide * (100 / slides.length)}%)`
                        }}
                    >
                        {slides.map((slide, index) => (
                            <div
                                key={slide.id}
                                className="flex-shrink-0"
                                style={{ width: `${100 / slides.length}%` }}
                            >
                                <div className="flex flex-col lg:flex-row lg:min-h-[540px]">

                                    {/* Left Panel (Content) */}
                                    <div className="order-2 lg:order-1 w-full lg:w-[55%] p-8 pb-28 md:p-12 md:pb-28 lg:p-14 flex flex-col justify-center">
                                        <h3 className="font-poppins font-semibold text-[26px] md:text-[32px] text-zigron-black mb-4">
                                            {slide.title}
                                        </h3>
                                        <p className="font-poppins text-[16px] md:text-[18px] text-zigron-gray mb-8">
                                            {slide.support}
                                        </p>
                                        <ul className="space-y-4 mb-auto">
                                            {slide.bullets.map((bullet, i) => (
                                                <li key={i} className="flex items-start gap-3">
                                                    <CheckCircle className="w-5 h-5 text-zigron-red flex-shrink-0 mt-0.5" />
                                                    <span className="font-poppins text-zigron-black opacity-90 text-[15px]">{bullet}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Right Panel (Visual & KPIs) */}
                                    <div className="order-1 lg:order-2 w-full lg:w-[45%] bg-zigron-black p-8 md:p-12 flex flex-col justify-between relative overflow-hidden">
                                        {/* SVG Dot Pattern Background */}
                                        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at center, white 1.5px, transparent 1.5px)', backgroundSize: '16px 16px' }} />

                                        {/* Dynamic Graphic */}
                                        <div className="relative z-10 w-full flex-grow flex items-center justify-center min-h-[250px] mb-8">
                                            {index === 0 && <SlideOneGraphic />}
                                            {index === 1 && <SlideTwoGraphic />}
                                            {index === 2 && <SlideThreeGraphic />}
                                        </div>

                                        {/* KPI Footer Strip */}
                                        <div className="relative z-10 flex flex-wrap gap-3 pt-6 border-t border-white/10 mt-auto">
                                            {slide.kpis.map((kpi, i) => (
                                                <span key={i} className="bg-white/10 text-white font-mono text-[12px] px-3 py-1.5 rounded">
                                                    {kpi}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Slider Controls */}
                    <div className="absolute bottom-6 left-8 md:left-12 lg:left-14 flex items-center gap-6">
                        <div className="flex gap-2">
                            {slides.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    className={`w-2.5 h-2.5 rounded-full transition-colors ${currentSlide === index ? "bg-zigron-red" : "bg-zinc-300"
                                        }`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                        <div className="flex gap-3 ml-4">
                            <button
                                onClick={handlePrev}
                                className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-zigron-red hover:text-white hover:border-transparent transition-all shadow-sm"
                                aria-label="Previous slide"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <button
                                onClick={handleNext}
                                className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-zigron-red hover:text-white hover:border-transparent transition-all shadow-sm"
                                aria-label="Next slide"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

// --- Specific SVG Visuals for each Slide ---

function SlideOneGraphic() {
    return (
        <svg className="w-full max-w-[340px]" viewBox="0 0 340 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <style>{`.anim-dash { stroke-dasharray: 6 6; animation: dashFlow 2.5s linear infinite; } @keyframes dashFlow { from { stroke-dashoffset: 24; } to { stroke-dashoffset: 0; } }`}</style>
            </defs>
            {/* Input */}
            <rect x="0" y="60" width="80" height="80" rx="8" fill="#1A1A1A" stroke="#333" strokeWidth="1.5" />
            <text x="40" y="96" fill="#888" fontFamily="IBM Plex Mono" fontSize="10" textAnchor="middle">IDLE</text>
            <circle cx="40" cy="115" r="4" fill="#555" className="animate-pulse" />

            {/* Lines */}
            <path d="M 80 100 L 140 100" stroke="#C0272D" strokeWidth="2" className="anim-dash" />
            <path d="M 140 100 L 140 30 L 180 30" stroke="#C0272D" strokeWidth="2" className="anim-dash" />
            <path d="M 140 100 L 180 100" stroke="#C0272D" strokeWidth="2" className="anim-dash" />
            <path d="M 140 100 L 140 170 L 180 170" stroke="#C0272D" strokeWidth="2" className="anim-dash" />

            {/* Output Cards */}
            <rect x="180" y="10" width="160" height="40" rx="6" fill="#242424" stroke="#444" />
            <text x="260" y="34" fill="#10B981" fontFamily="IBM Plex Mono" fontSize="9" textAnchor="middle">Event Stream...</text>

            <rect x="180" y="80" width="160" height="40" rx="6" fill="#2A0A0A" stroke="#C0272D" />
            <text x="260" y="104" fill="#C0272D" fontFamily="Poppins" fontSize="10" fontWeight="bold" textAnchor="middle">ANOMALY DETECTED</text>

            <rect x="180" y="150" width="160" height="40" rx="6" fill="#242424" stroke="#444" />
            <text x="260" y="174" fill="#FFF" opacity="0.8" fontFamily="IBM Plex Mono" fontSize="9" textAnchor="middle">Create ticket &rarr; Notify</text>
        </svg>
    );
}

function SlideTwoGraphic() {
    return (
        <svg className="w-full max-w-[340px]" viewBox="0 0 340 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="#666" />
                </marker>
            </defs>

            {/* Before Panel */}
            <rect x="0" y="55" width="100" height="70" rx="6" fill="#1A1A1A" stroke="#C0272D" strokeWidth="1" strokeDasharray="4 2" />
            <text x="50" y="85" fill="#C0272D" fontFamily="Poppins" fontSize="12" fontWeight="600" textAnchor="middle">Noise: HIGH</text>
            <circle cx="35" cy="105" r="3" fill="#C0272D" />
            <circle cx="50" cy="105" r="3" fill="#C0272D" />
            <circle cx="65" cy="105" r="3" fill="#C0272D" />

            {/* Connecting line */}
            <path d="M 100 90 L 140 90" stroke="#666" strokeWidth="2" markerEnd="url(#arrow)" />

            {/* After Panel */}
            <rect x="150" y="15" width="190" height="150" rx="12" fill="#242424" stroke="#333" />

            {/* Gauge */}
            {/* Center is at 205, 80 */}
            <path d="M 170 80 A 35 35 0 0 1 240 80" fill="none" stroke="#333" strokeWidth="6" strokeLinecap="round" />
            <path d="M 170 80 A 35 35 0 0 1 240 80" fill="none" stroke="#10B981" strokeWidth="6" strokeLinecap="round" strokeDasharray="110" strokeDashoffset="20" className="animate-[pulse_3s_ease-in-out_infinite]" />
            <text x="205" y="72" fill="#FFF" fontFamily="Poppins" fontSize="28" fontWeight="bold" textAnchor="middle">94</text>
            <text x="205" y="95" fill="#888" fontFamily="IBM Plex Mono" fontSize="9" textAnchor="middle">HEALTH SCORE</text>

            {/* List */}
            <rect x="255" y="40" width="65" height="10" rx="4" fill="#333" />
            <rect x="255" y="60" width="45" height="10" rx="4" fill="#333" opacity="0.6" />
            <rect x="255" y="80" width="55" height="10" rx="4" fill="#333" opacity="0.4" />

            {/* Sub Panel */}
            <rect x="170" y="115" width="150" height="35" rx="6" fill="#1A1A1A" stroke="#C0272D" strokeOpacity="0.5" />
            <text x="245" y="136" fill="#FFF" fontFamily="IBM Plex Mono" fontSize="9" textAnchor="middle">Gateway timeout — Node 14B</text>
        </svg>
    );
}

function SlideThreeGraphic() {
    return (
        <svg className="w-full max-w-[340px]" viewBox="0 0 340 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <style>{`.node-pulse { animation: nPulse 2s infinite alternate; } @keyframes nPulse { to { filter: drop-shadow(0 0 8px #10B981); } }`}</style>
            </defs>

            {/* Horizontal Pipeline */}
            <path d="M 40 100 L 300 100" stroke="#333" strokeWidth="4" />
            <path d="M 40 100 L 220 100" stroke="#10B981" strokeWidth="4" />

            {/* Nodes */}
            <circle cx="40" cy="100" r="16" fill="#1A1A1A" stroke="#10B981" strokeWidth="2" />
            <text x="40" y="135" fill="#888" fontFamily="Poppins" fontSize="10" textAnchor="middle">Simulate</text>

            <circle cx="130" cy="100" r="16" fill="#1A1A1A" stroke="#10B981" strokeWidth="2" />
            <text x="130" y="135" fill="#888" fontFamily="Poppins" fontSize="10" textAnchor="middle">Validate</text>

            <circle cx="220" cy="100" r="20" fill="#10B981" className="node-pulse" />
            <text x="220" y="135" fill="#FFF" fontFamily="Poppins" fontSize="10" fontWeight="bold" textAnchor="middle">Report</text>

            <circle cx="310" cy="100" r="16" fill="#1A1A1A" stroke="#555" strokeWidth="2" />
            <text x="310" y="135" fill="#555" fontFamily="Poppins" fontSize="10" textAnchor="middle">Deploy</text>

            {/* Floating badges */}
            <rect x="180" y="30" width="100" height="24" rx="4" fill="#1A1A1A" stroke="#C0272D" />
            <text x="230" y="46" fill="#C0272D" fontFamily="IBM Plex Mono" fontSize="9" textAnchor="middle">ROLLBACK READY</text>

            <rect x="40" y="30" width="90" height="24" rx="4" fill="#1A1A1A" stroke="#10B981" />
            <text x="85" y="46" fill="#10B981" fontFamily="IBM Plex Mono" fontSize="9" textAnchor="middle">98% PASSING</text>
        </svg>
    );
}
