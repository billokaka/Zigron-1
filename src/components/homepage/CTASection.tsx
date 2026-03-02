"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Mail } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function CTASection() {
    const containerRef = useRef<HTMLElement>(null);
    const leftColRef = useRef<HTMLDivElement>(null);
    const rightColRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(leftColRef.current, {
                x: -40, opacity: 0, duration: 0.8, ease: "power3.out",
                scrollTrigger: { trigger: containerRef.current, start: "top 75%" }
            });
            gsap.from(rightColRef.current, {
                y: 40, opacity: 0, duration: 0.8, ease: "power3.out", delay: 0.2,
                scrollTrigger: { trigger: containerRef.current, start: "top 75%" }
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="contact" ref={containerRef} className="py-20 md:py-32 bg-zigron-light relative overflow-hidden">

            {/* Decorative Blur blob behind form */}
            <div className="absolute top-1/2 -right-40 -translate-y-1/2 w-[600px] h-[600px] bg-zigron-red/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="relative z-10 w-full max-w-[1320px] mx-auto px-6 md:px-12 lg:px-20">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-12 items-center lg:items-start">

                    {/* Left Column: Headers and Value Prop */}
                    <div ref={leftColRef} className="w-full lg:w-5/12 flex flex-col pt-8 lg:pt-16">
                        <span className="inline-block font-mono text-[11px] uppercase text-zigron-red tracking-[0.12em] mb-4">
                            NEXT STEPS
                        </span>
                        <h2 className="font-poppins font-bold text-[40px] md:text-[56px] leading-[1.1] text-zigron-black tracking-[-0.02em] mb-6">
                            Let&apos;s scope your project.
                        </h2>
                        <p className="font-poppins text-[18px] md:text-[20px] text-zigron-gray leading-[1.6] mb-10 max-w-md">
                            Talk to an engineer, not a sales rep. We&apos;ll review your requirements and tell you honestly if we&apos;re the right fit.
                        </p>

                        {/* Trust Indicators */}
                        <div className="flex flex-col gap-5 pt-8 border-t border-gray-200 mt-auto">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-gray-200">
                                    <Mail className="w-4 h-4 text-zigron-gray" />
                                </div>
                                <div>
                                    <p className="font-poppins font-semibold text-[14px] text-zigron-black">Direct Access</p>
                                    <a href="mailto:contact@zigron.com" className="font-poppins text-[14px] text-zigron-red hover:underline">contact@zigron.com</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: CTA Visual */}
                    <div ref={rightColRef} className="w-full lg:w-7/12">
                        <div className="bg-white rounded-[24px] p-8 md:p-12 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-[#E5E5E5] relative text-center flex flex-col items-center gap-8">

                            <div className="w-20 h-20 rounded-full bg-zigron-red/10 flex items-center justify-center">
                                <ArrowRight className="w-8 h-8 text-zigron-red" />
                            </div>

                            <div>
                                <h3 className="font-poppins font-bold text-[24px] md:text-[28px] text-zigron-black mb-3">
                                    Start a conversation
                                </h3>
                                <p className="font-poppins text-[15px] text-zigron-gray leading-[1.6] max-w-md mx-auto">
                                    Fill out a quick form and one of our engineers will reach out within 24 hours to discuss your project.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
                                <a
                                    href="/contact"
                                    className="flex-1 bg-zigron-red hover:bg-[#A82227] text-white font-poppins font-semibold text-[16px] py-4 px-6 rounded-[8px] transition-colors duration-300 flex items-center justify-center group"
                                >
                                    Go to Contact
                                    <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                                </a>
                                <a
                                    href="/work"
                                    className="flex-1 bg-white hover:bg-gray-50 text-zigron-black font-poppins font-semibold text-[16px] py-4 px-6 rounded-[8px] transition-colors duration-300 flex items-center justify-center border border-gray-200"
                                >
                                    View our work
                                </a>
                            </div>

                            <p className="font-poppins text-[12px] text-gray-400 text-center max-w-sm">
                                By reaching out, you agree to our <a href="/privacy-policy" className="underline hover:text-zigron-gray">Privacy Policy</a>. We never sell or share your data.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
