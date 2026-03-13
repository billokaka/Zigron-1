"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export function HeroSection() {
    const containerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".hero-eyebrow", { y: 24, opacity: 0, duration: 0.6, ease: "power3.out" });
            gsap.from(".hero-h1 > span", { y: 40, opacity: 0, duration: 0.8, stagger: 0.1, ease: "power3.out", delay: 0.2 });
            gsap.from(".hero-subhead", { y: 32, opacity: 0, duration: 0.7, ease: "power3.out", delay: 0.5 });
            gsap.from(".hero-ctas", { y: 24, opacity: 0, duration: 0.6, ease: "power3.out", delay: 0.7 });
            gsap.from(".hero-trust", { y: 16, opacity: 0, duration: 0.5, ease: "power3.out", delay: 0.9 });
            gsap.from(".hero-diagram", { x: 40, opacity: 0, duration: 1.0, ease: "power3.out", delay: 0.4 });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section
            id="hero"
            ref={containerRef}
            className="relative w-full h-[100dvh] flex flex-col justify-center pt-20 bg-zigron-black overflow-hidden"
        >
            {/* Background Image & Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1800&auto=format&fit=crop&q=80"
                    alt="Zigron Server Architecture"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover opacity-60"
                />
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            "linear-gradient(to top, #1A1A1A 0%, rgba(26,26,26,0.85) 50%, rgba(26,26,26,0.4) 100%)",
                    }}
                />
            </div>

            {/* Main Content Container */}
            <div className="relative z-10 w-full max-w-[1320px] mx-auto px-6 md:px-12 lg:px-20 flex flex-col lg:flex-row lg:items-center gap-12">
                {/* Left Panel - Copy (55%) */}
                <div className="w-full lg:w-[55%] flex flex-col">
                    <p className="hero-eyebrow font-mono text-[11px] uppercase text-zigron-red tracking-[0.12em] mb-4">
                        OEM IoT · AI & Automation · Engineering Services
                    </p>

                    <h1 className="hero-h1 font-poppins font-extrabold text-[40px] md:text-[60px] lg:text-[72px] leading-[1.1] text-white tracking-[-0.03em] mb-6">
                        <span className="block">OEM IoT, AI &</span>
                        <span className="block">Engineering.</span>
                    </h1>

                    <p className="hero-subhead font-poppins font-normal text-[16px] md:text-[18px] text-white/80 leading-[1.7] max-w-[520px] mb-8">
                        Enhanced with automation — not rip-and-replace. Connect to legacy
                        and modern systems, activate the data that&apos;s already there, and
                        make operations more reliable, efficient, and testable.
                    </p>

                    <div className="hero-ctas flex flex-wrap gap-4 mb-8">
                        <Button
                            href="/contact"
                            className="bg-zigron-red text-white font-poppins font-semibold text-[15px] md:text-[16px] px-8 py-3.5 rounded-full hover:scale-105 hover:shadow-[0_4px_16px_rgba(192,39,45,0.4)] transition-all duration-200"
                        >
                            Talk to an engineer
                        </Button>
                        <Button
                            href="/solutions"
                            variant="secondary"
                            className="bg-transparent border-[1.5px] border-white text-white font-poppins font-semibold text-[15px] md:text-[16px] px-8 py-3.5 rounded-full hover:bg-white hover:text-zigron-black hover:scale-105 transition-all duration-200"
                        >
                            Explore solutions →
                        </Button>
                    </div>

                    <p className="hero-trust font-mono text-[12px] text-white/55 flex flex-wrap gap-x-3 gap-y-2">
                        <span>Legacy-friendly integration</span>
                        <span className="hidden sm:inline">·</span>
                        <span>Secure-by-design delivery</span>
                        <span className="hidden sm:inline">·</span>
                        <span>Field-ready deployment & support</span>
                    </p>
                </div>

                {/* Right Panel - Architecture Diagram (45%) */}
                <div className="hero-diagram hidden lg:block w-[45%] h-full relative">
                    <div className="relative w-full aspect-[4/3] flex items-center justify-center translate-y-[-20px]">
                        {/* SVG Diagram Container */}
                        <svg
                            className="w-full h-full max-w-[500px]"
                            viewBox="0 0 500 400"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <defs>
                                <style>
                                    {`
                    @keyframes particles {
                      0% { stroke-dashoffset: 100; }
                      100% { stroke-dashoffset: 0; }
                    }
                    @keyframes pulseGlow {
                      0% { filter: drop-shadow(0 0 0 rgba(192,39,45,0)); }
                      50% { filter: drop-shadow(0 0 20px rgba(192,39,45,0.5)); }
                      100% { filter: drop-shadow(0 0 0 rgba(192,39,45,0)); }
                    }
                    @keyframes greenPulse {
                      0%, 100% { opacity: 1; transform: scale(1); }
                      50% { opacity: 0.4; transform: scale(1.5); }
                    }
                    .anim-line {
                      stroke-dasharray: 6 6;
                      animation: particles 2.5s linear infinite;
                    }
                    .anim-pulse {
                      animation: pulseGlow 3s ease-in-out infinite;
                    }
                    .status-dot {
                      transform-origin: center;
                      animation: greenPulse 2s ease-in-out infinite;
                    }
                  `}
                                </style>
                            </defs>

                            {/* Connector Lines (Layer 2) */}
                            <path
                                d="M 120 150 L 220 200"
                                stroke="#C0272D"
                                strokeWidth="2"
                                className="anim-line"
                                opacity="0.6"
                            />
                            <path
                                d="M 120 250 L 220 200"
                                stroke="#C0272D"
                                strokeWidth="2"
                                className="anim-line"
                                opacity="0.6"
                            />
                            <path
                                d="M 360 200 L 400 150"
                                stroke="#C0272D"
                                strokeWidth="2"
                                className="anim-line"
                                opacity="0.6"
                            />
                            <path
                                d="M 360 200 L 400 250"
                                stroke="#C0272D"
                                strokeWidth="2"
                                className="anim-line"
                                opacity="0.6"
                            />

                            {/* Layer 1 - Input */}
                            <g transform="translate(0, 110)">
                                <rect width="120" height="60" rx="6" fill="#1A1A1A" stroke="#333" />
                                <rect width="3" height="60" rx="1.5" fill="#C0272D" />
                                <text x="15" y="32" fill="#CCC" fontFamily="IBM Plex Mono" fontSize="10">SCADA / PLCs</text>
                            </g>
                            <g transform="translate(0, 220)">
                                <rect width="120" height="60" rx="6" fill="#1A1A1A" stroke="#333" />
                                <rect width="3" height="60" rx="1.5" fill="#C0272D" />
                                <text x="15" y="32" fill="#CCC" fontFamily="IBM Plex Mono" fontSize="10">IoT Devices</text>
                            </g>

                            {/* Layer 3 - Core (Zigron AI) */}
                            <g transform="translate(200, 140)" className="anim-pulse">
                                <rect width="160" height="120" rx="12" fill="#1A1A1A" stroke="#C0272D" strokeWidth="2" />
                                <text x="20" y="55" fill="#FFF" fontFamily="Poppins" fontWeight="bold" fontSize="14">Zigron AI +</text>
                                <text x="20" y="75" fill="#FFF" fontFamily="Poppins" fontWeight="bold" fontSize="14">Automation Layer</text>
                                <circle cx="140" cy="20" r="4" fill="#C0272D" />
                            </g>

                            {/* Layer 4 - Output */}
                            <g transform="translate(380, 110)">
                                <rect width="120" height="50" rx="6" fill="#1A1A1A" stroke="#333" />
                                <circle cx="15" cy="25" r="4" fill="#10B981" className="status-dot" style={{ transformBox: 'fill-box' }} />
                                <text x="30" y="28" fill="#CCC" fontFamily="IBM Plex Mono" fontSize="10">Dashboards</text>
                            </g>
                            <g transform="translate(380, 230)">
                                <rect width="120" height="50" rx="6" fill="#1A1A1A" stroke="#333" />
                                <circle cx="15" cy="25" r="4" fill="#10B981" className="status-dot" style={{ transformBox: 'fill-box', animationDelay: '0.5s' }} />
                                <text x="30" y="28" fill="#CCC" fontFamily="IBM Plex Mono" fontSize="10">Automations</text>
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
}
