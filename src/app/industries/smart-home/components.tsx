"use client";
import { useState } from "react";
import { ChevronDown, Home, Shield, Cpu, BarChart, Lock, Clock, Clipboard, AlertTriangle, Wifi, Cloud, Users, Target, Zap, Smartphone, Settings, Eye, type LucideIcon } from "lucide-react";
import type { FAQ, IconName } from "./data";

const iconMap: Record<IconName, LucideIcon> = { home: Home, shield: Shield, cpu: Cpu, barChart: BarChart, lock: Lock, clock: Clock, clipboard: Clipboard, alertTriangle: AlertTriangle, wifi: Wifi, cloud: Cloud, users: Users, target: Target, zap: Zap, smartphone: Smartphone, settings: Settings, eye: Eye };
export function getIcon(iconName: IconName): LucideIcon { return iconMap[iconName] || Home; }

interface FAQAccordionProps { faqs: FAQ[]; }
export function FAQAccordion({ faqs }: FAQAccordionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    return (
        <div className="space-y-4">
            {faqs.map((faq, index) => (
                <div key={index} className={`bg-white dark:bg-surface-dark rounded-lg border transition-all duration-300 ${openIndex === index ? "shadow-md border-primary/20" : "border-gray-200 dark:border-gray-700 shadow-sm"}`}>
                    <button onClick={() => setOpenIndex(openIndex === index ? null : index)} className="flex justify-between items-center p-6 w-full text-left font-bold text-black dark:text-white select-none">
                        {faq.question}
                        <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 flex-shrink-0 ml-4 ${openIndex === index ? "rotate-180" : ""}`} />
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-96" : "max-h-0"}`}>
                        <div className="px-6 pb-6 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{faq.answer}</div>
                    </div>
                </div>
            ))}
        </div>
    );
}
