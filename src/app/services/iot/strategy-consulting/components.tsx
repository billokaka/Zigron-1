"use client";

import { useState } from "react";
import {
    ChevronDown,
    ArrowRight,
    Compass,
    Scale,
    ShieldCheck,
    BarChart3,
    Lightbulb,
    CheckCircle,
    AlertTriangle,
    Search,
    Layout,
    Rocket,
    Wrench,
    Cpu,
    Wifi,
    Cloud,
    Smartphone,
    FileText,
    Eye,
    Lock,
    Zap,
    Shield,
    Users,
    type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui";
import type { FAQ } from "./data";

// ============================================================================
// ICON RESOLVER (Client Side - if needed)
// ============================================================================

export const iconMap: Record<string, LucideIcon> = {
    compass: Compass,
    scale: Scale,
    shieldCheck: ShieldCheck,
    barChart: BarChart3,
    lightbulb: Lightbulb,
    checkCircle: CheckCircle,
    alertTriangle: AlertTriangle,
    search: Search,
    layout: Layout,
    rocket: Rocket,
    wrench: Wrench,
    cpu: Cpu,
    wifi: Wifi,
    cloud: Cloud,
    smartphone: Smartphone,
    fileText: FileText,
    eye: Eye,
    lock: Lock,
    zap: Zap,
    shield: Shield,
    users: Users,
};

export function getIcon(name: string): LucideIcon {
    return iconMap[name] || Compass;
}

// ============================================================================
// FAQ ACCORDION
// ============================================================================

interface FAQAccordionProps {
    faqs: FAQ[];
}

export function FAQAccordion({ faqs }: FAQAccordionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <div className="space-y-4">
            {faqs.map((faq, index) => (
                <div
                    key={index}
                    className={`bg-white dark:bg-surface-dark rounded-lg border transition-all duration-300 ${openIndex === index
                        ? "shadow-md border-primary/20"
                        : "border-gray-200 dark:border-gray-700 shadow-sm"
                        }`}
                >
                    <button
                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        className="flex justify-between items-center p-6 w-full text-left font-bold text-black dark:text-white select-none"
                    >
                        {faq.question}
                        <ChevronDown
                            className={`w-5 h-5 text-gray-400 transition-transform duration-300 flex-shrink-0 ml-4 ${openIndex === index ? "rotate-180" : ""
                                }`}
                        />
                    </button>
                    <div
                        className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-96" : "max-h-0"
                            }`}
                    >
                        <div className="px-6 pb-6 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                            {faq.answer}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

// ============================================================================
// CONTACT FORM
// ============================================================================

interface ContactFormProps {
    email: string;
}

export function ContactForm({ email }: ContactFormProps) {
    const [formData, setFormData] = useState({
        name: "",
        company: "",
        email: "",
        projectType: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-white dark:bg-surface-dark p-8 md:p-10 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                    <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide mb-2">
                        Your Name
                    </label>
                    <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded p-3 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow text-black dark:text-white placeholder-gray-400"
                        placeholder="John Doe"
                    />
                </div>
                <div>
                    <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide mb-2">
                        Company
                    </label>
                    <input
                        type="text"
                        value={formData.company}
                        onChange={(e) =>
                            setFormData({ ...formData, company: e.target.value })
                        }
                        className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded p-3 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow text-black dark:text-white placeholder-gray-400"
                        placeholder="High-Growth Startup"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                    <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide mb-2">
                        Work Email
                    </label>
                    <input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded p-3 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow text-black dark:text-white placeholder-gray-400"
                        placeholder="john@company.com"
                    />
                </div>
                <div>
                    <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide mb-2">
                        Engagement Type
                    </label>
                    <select
                        value={formData.projectType}
                        onChange={(e) =>
                            setFormData({ ...formData, projectType: e.target.value })
                        }
                        className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded p-3 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow text-black dark:text-white"
                    >
                        <option value="">Select scope</option>
                        <option value="feasibility">Feasibility Study</option>
                        <option value="audit">Architecture Audit</option>
                        <option value="roadmap">Roadmap Planning</option>
                        <option value="cost">Build vs Buy Analysis</option>
                    </select>
                </div>
            </div>

            <div className="mb-8">
                <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide mb-2">
                    Tell us about your challenge
                </label>
                <textarea
                    value={formData.message}
                    onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded p-3 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow text-black dark:text-white placeholder-gray-400"
                    placeholder="We are looking to scale our..."
                    rows={5}
                />
            </div>

            <Button type="submit" size="lg" className="w-full shadow-lg hover:shadow-xl">
                Request Estimate
                <ArrowRight className="w-4 h-4 ml-2" />
            </Button>

            <div className="text-center mt-6">
                <p className="text-xs text-gray-400">
                    Or email us at{" "}
                    <a
                        href={`mailto:${email}`}
                        className="text-primary hover:underline font-semibold"
                    >
                        {email}
                    </a>
                </p>
            </div>
        </form>
    );
}
