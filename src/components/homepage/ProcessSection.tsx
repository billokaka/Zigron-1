"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Search, PenTool, GitMerge, ShieldCheck, Rocket } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const steps = [
    {
        id: 1,
        title: "Discovery & Architecture",
        icon: Search,
        desc: "Define constraints, integrate with legacy systems, map data flows.",
    },
    {
        id: 2,
        title: "Hardware / Software Build",
        icon: PenTool,
        desc: "Parallel development of physical and digital layers.",
    },
    {
        id: 3,
        title: "Integration & Testing",
        icon: GitMerge,
        desc: "Connecting the seams. Validation against real-world scenarios.",
    },
    {
        id: 4,
        title: "Security & QA",
        icon: ShieldCheck,
        desc: "Vulnerability scanning, compliance checks, and performance tuning.",
    },
    {
        id: 5,
        title: "Deployment & Support",
        icon: Rocket,
        desc: "Field rollout, monitoring setup, and ongoing lifecycle management.",
    }
];

export function ProcessSection() {
    const containerRef = useRef<HTMLElement>(null);
    const [activeStep, setActiveStep] = useState<number | null>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".proc-header", {
                y: 32, opacity: 0, duration: 0.6, ease: "power3.out",
                scrollTrigger: { trigger: containerRef.current, start: "top 80%" }
            });

            // Node entrances
            gsap.from(".proc-node", {
                scale: 0.8, opacity: 0, duration: 0.5, stagger: 0.15, ease: "back.out(1.5)",
                scrollTrigger: { trigger: ".proc-track", start: "top 75%" }
            });

            const mm = gsap.matchMedia();

            mm.add("(min-width: 768px)", () => {
                // Line animation
                gsap.fromTo(".proc-line",
                    { scaleX: 0, transformOrigin: "left center" },
                    { scaleX: 1, duration: 1.2, ease: "power2.inOut", scrollTrigger: { trigger: ".proc-track", start: "top 75%" } }
                );
            });

            mm.add("(max-width: 767px)", () => {
                const trackElem = document.querySelector('.proc-vertical-track');
                const trackHeight = trackElem ? trackElem.clientHeight : 500;
                gsap.fromTo(".proc-line-mobile-fill",
                    { scaleY: 0, transformOrigin: "top center" },
                    { scaleY: 1, ease: "none", scrollTrigger: { trigger: ".proc-track", start: "top 60%", end: () => `+=${trackHeight}`, scrub: 0.5 } }
                );
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="process" ref={containerRef} className="py-20 md:py-32 bg-white overflow-hidden">
            <div className="w-full max-w-[1320px] mx-auto px-6 md:px-12 lg:px-20">

                {/* Header */}
                <div className="proc-header text-center max-w-3xl mx-auto mb-20 md:mb-32">
                    <span className="inline-block font-mono text-[11px] uppercase text-zigron-red tracking-[0.12em] mb-4">
                        DELIVERY PROCESS
                    </span>
                    <h2 className="font-poppins font-bold text-[36px] md:text-[48px] leading-[1.2] text-zigron-black tracking-[-0.02em] mb-6">
                        Built for production environments.
                    </h2>
                    <p className="font-poppins text-[18px] text-zigron-gray leading-[1.7]">
                        We design, build, and deploy with security and scale in mind from day one.
                    </p>
                </div>

                {/* Horizontal Timeline Track */}
                <div className="proc-track relative mb-12">

                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-[40px] left-[10%] right-[10%] h-[2px] bg-gray-200 z-0">
                        <div className="proc-line h-full bg-zigron-red w-full origin-left" />
                    </div>

                    {/* Connecting Line (Mobile) */}
                    <div className="proc-vertical-track md:hidden absolute top-[40px] bottom-[40px] left-1/2 -translate-x-1/2 w-[2px] bg-gray-200 z-0 overflow-hidden">
                        <div className="proc-line-mobile-fill h-full bg-zigron-red w-full origin-top" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 relative z-10">
                        {steps.map((step) => {
                            const Icon = step.icon;
                            const isActive = activeStep === step.id;

                            return (
                                <div
                                    key={step.id}
                                    className="proc-node flex flex-col items-center text-center group"
                                    onMouseEnter={() => setActiveStep(step.id)}
                                    onMouseLeave={() => setActiveStep(null)}
                                >
                                    {/* Node Circle */}
                                    <div className={`w-[80px] h-[80px] rounded-full border-[3px] flex flex-col justify-center items-center bg-white mb-6 transition-all duration-300 relative shadow-sm cursor-default ${isActive ? 'border-zigron-red scale-110 shadow-lg' : 'border-gray-200 group-hover:border-zigron-red/50'
                                        }`}>
                                        {/* Pulsing background ring when active */}
                                        {isActive && (
                                            <div className="absolute inset-0 rounded-full border-[2px] border-zigron-red animate-[ping_1.5s_cubic-bezier(0,0,0.2,1)_infinite]" />
                                        )}
                                        <span className={`font-mono text-[10px] font-bold mb-1 ${isActive ? 'text-zigron-red' : 'text-gray-400'}`}>0{step.id}</span>
                                        <Icon className={`w-5 h-5 ${isActive ? 'text-zigron-red' : 'text-gray-400'}`} strokeWidth={2} />
                                    </div>

                                    {/* Content below node */}
                                    <div className={`transition-all duration-300 ${isActive ? 'opacity-100 translate-y-0' : 'md:opacity-60 md:translate-y-2'}`}>
                                        <h3 className={`font-poppins font-bold text-[16px] mb-3 transition-colors ${isActive ? 'text-zigron-black' : 'text-gray-600'}`}>
                                            {step.title}
                                        </h3>
                                        <p className="font-poppins text-[14px] text-zigron-gray leading-[1.6]">
                                            {step.desc}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>

            </div>
        </section>
    );
}
