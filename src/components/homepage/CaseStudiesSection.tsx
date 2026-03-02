"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const caseStudies = [
    {
        id: 1,
        client: "abode Smart Home",
        title: "OEM IoT Security & Scale",
        image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&q=80",
        chips: ["Device firmwares", "Cloud Platform", "iOS/Android"],
        link: "/work/abode-smart-home"
    },
    {
        id: 2,
        client: "TerraSmart",
        title: "Automated Solar Tracking",
        image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&q=80",
        chips: ["Hardware integration", "Dashboards", "Control API"],
        link: "/work/terrasmart-solar"
    },
    {
        id: 3,
        client: "TerraTrak",
        title: "AI-Assisted Efficiency",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
        chips: ["Computer Vision", "MLOps", "Edge inference"],
        link: "/work/terratrak-ai"
    }
];

export function CaseStudiesSection() {
    const containerRef = useRef<HTMLElement>(null);
    const [hasAnimated, setHasAnimated] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % caseStudies.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true);

                    const ctx = gsap.context(() => {
                        // Header entrance
                        gsap.fromTo(".cs-header",
                            { y: 32, opacity: 0 },
                            { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
                        );

                        // Slider entrance
                        gsap.fromTo(".cs-slider",
                            { y: 60, opacity: 0 },
                            { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.2 }
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

    // Handle touch swipe
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);

    const minSwipeDistance = 50;

    const onTouchStart = (e: React.TouchEvent) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe) {
            nextSlide();
        } else if (isRightSwipe) {
            prevSlide();
        }
    };

    return (
        <section id="work" ref={containerRef} className="py-20 md:py-32 bg-zigron-light overflow-hidden">
            <div className="w-full max-w-[1320px] mx-auto px-6 md:px-12 lg:px-20">

                {/* Section Header */}
                <div className="cs-header opacity-0 flex flex-col md:flex-row justify-between items-end mb-12 lg:mb-16 gap-6">
                    <div className="max-w-2xl">
                        <span className="inline-block font-mono text-[11px] uppercase text-zigron-red tracking-[0.12em] mb-4">
                            PROOF OF CONCEPT
                        </span>
                        <h2 className="font-poppins font-bold text-[36px] md:text-[48px] leading-[1.2] text-zigron-black tracking-[-0.02em] mb-4">
                            How it looks in the wild.
                        </h2>
                        <p className="font-poppins text-[16px] md:text-[18px] text-zigron-gray leading-[1.7] max-w-md hidden md:block">
                            We build systems that survive field conditions, scale across deployments, and pass rigorous audits.
                        </p>
                    </div>
                    <a href="/work" className="font-poppins font-semibold text-[15px] text-zigron-red hover:underline flex items-center group w-fit mb-2 md:mb-6">
                        Browse all work <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>

                {/* Slider Container */}
                <div
                    className="cs-slider opacity-0 relative w-full h-[500px] md:h-[600px] lg:h-[700px] rounded-[24px] overflow-hidden group shadow-[0_20px_60px_rgba(0,0,0,0.1)]"
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                >
                    {/* Background Images & Gradients */}
                    {caseStudies.map((study, index) => (
                        <div
                            key={`bg-${study.id}`}
                            className={`absolute inset-0 transition-all duration-700 ease-in-out ${index === currentIndex ? 'opacity-100 z-10 scale-100' : 'opacity-0 z-0 scale-105 pointer-events-none'}`}
                        >
                            <Image
                                src={study.image}
                                alt={study.title}
                                fill
                                priority={index === 0}
                                unoptimized
                                className="object-cover"
                            />
                            {/* Dark gradient overlay for text readability */}
                            <div className="absolute inset-0 bg-gradient-to-t from-zigron-black/90 via-zigron-black/40 to-transparent" />
                            <div className="absolute inset-0 bg-zigron-black/20" /> {/* Slight overall darkening */}
                        </div>
                    ))}

                    {/* Content Overlay */}
                    <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 md:p-12 lg:p-16 pointer-events-none">
                        <div className="w-full max-w-4xl flex items-end justify-between pointer-events-auto">
                            {/* Left Side: Case Study Details */}
                            <div className="flex flex-col flex-grow relative h-full">
                                {caseStudies.map((study, index) => (
                                    <div
                                        key={`content-${study.id}`}
                                        className={`absolute bottom-0 left-0 right-0 md:right-32 transition-all duration-500 transform ${index === currentIndex ? 'opacity-100 translate-y-0 z-10 pointer-events-auto delay-200' : 'opacity-0 translate-y-8 z-0 pointer-events-none'}`}
                                    >
                                        <div className="flex flex-col items-start gap-4">
                                            <span className="bg-zigron-red/90 backdrop-blur-sm text-white font-mono text-[11px] md:text-[13px] font-bold tracking-wider uppercase px-3 py-1 rounded-[4px] shadow-sm">
                                                {study.client}
                                            </span>

                                            <h3 className="font-poppins font-bold text-[32px] md:text-[44px] lg:text-[56px] text-white leading-[1.1] mb-2 max-w-3xl drop-shadow-md">
                                                {study.title}
                                            </h3>

                                            <div className="flex flex-wrap gap-2 mb-8 hidden md:flex">
                                                {study.chips.map((chip, i) => (
                                                    <span key={i} className="bg-white/10 backdrop-blur-md text-white font-poppins font-medium text-[13px] px-3.5 py-1.5 rounded-[6px] border border-white/20">
                                                        {chip}
                                                    </span>
                                                ))}
                                            </div>

                                            <a href={study.link} className="inline-flex items-center justify-center font-poppins font-bold text-[15px] md:text-[16px] text-zigron-black bg-white hover:bg-zigron-red hover:text-white px-8 py-4 rounded-[8px] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(192,39,45,0.4)] group/btn">
                                                Read Case Study <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2 transform group-hover/btn:translate-x-1 transition-transform" />
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Navigation Contols */}
                    <div className="absolute bottom-6 md:bottom-12 lg:bottom-16 right-6 md:right-12 lg:right-16 z-30 flex items-center gap-3">
                        <button
                            onClick={prevSlide}
                            className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-zigron-black transition-all duration-300"
                            aria-label="Previous case study"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-zigron-black transition-all duration-300"
                            aria-label="Next case study"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Pagination Indicators (Optional, but good for UX) */}
                    <div className="absolute top-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
                        {caseStudies.map((_, index) => (
                            <button
                                key={`dot-${index}`}
                                onClick={() => setCurrentIndex(index)}
                                className={`h-1.5 rounded-full transition-all duration-300 ${index === currentIndex ? 'w-8 bg-zigron-red' : 'w-2 bg-white/50 hover:bg-white/80'}`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
}
