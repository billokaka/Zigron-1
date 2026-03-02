"use client";

import { useState } from "react";
import {
    ChevronDown,
    ArrowRight,
    Cpu,
    Microchip,
    Wifi,
    Battery,
    Code,
    Server,
    Layers,
    Zap,
    Shield,
    Bluetooth,
    Settings,
    Activity,
    Thermometer,
    Radio,
    Box,
    Terminal,
    Database,
    Globe,
    Cloud,
    Lock,
    Users,
    Signal,
    Router,
    Satellite,
    type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui";
import type { FAQ } from "./data";

// ============================================================================
// ICON RESOLVER (Client Side - if needed)
// ============================================================================

export const iconMap: Record<string, LucideIcon> = {
    cpu: Cpu,
    microchip: Microchip,
    wifi: Wifi,
    battery: Battery,
    code: Code,
    server: Server,
    layers: Layers,
    zap: Zap,
    shield: Shield,
    bluetooth: Bluetooth,
    settings: Settings,
    activity: Activity,
    thermometer: Thermometer,
    radio: Radio,
    box: Box,
    terminal: Terminal,
    database: Database,
    globe: Globe,
    cloud: Cloud,
    lock: Lock,
    users: Users,
    signal: Signal,
    router: Router,
    satellite: Satellite,
};

export function getIcon(name: string): LucideIcon {
    return iconMap[name] || Wifi;
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
                        placeholder="Connected Logistics"
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
                        placeholder="john@logistics.com"
                    />
                </div>
                <div>
                    <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide mb-2">
                        Interest
                    </label>
                    <select
                        value={formData.projectType}
                        onChange={(e) =>
                            setFormData({ ...formData, projectType: e.target.value })
                        }
                        className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded p-3 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow text-black dark:text-white"
                    >
                        <option value="">Select interest</option>
                        <option value="cellular">Cellular (LTE-M/NB-IoT)</option>
                        <option value="lorawan">LoRaWAN/LPWAN</option>
                        <option value="mesh">Mesh/BLE/Thread</option>
                        <option value="satellite">Satellite</option>
                        <option value="general">General Connectivity</option>
                    </select>
                </div>
            </div>

            <div className="mb-8">
                <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide mb-2">
                    Connectivity Needs
                </label>
                <textarea
                    value={formData.message}
                    onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded p-3 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow text-black dark:text-white placeholder-gray-400"
                    placeholder="We need to connect 5,000 sensors in rural areas..."
                    rows={5}
                />
            </div>

            <Button type="submit" size="lg" className="w-full shadow-lg hover:shadow-xl">
                Get Connectivity Plan
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
