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
// ICON RESOLVER (Client Side)
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
    return iconMap[name] || Cloud;
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
