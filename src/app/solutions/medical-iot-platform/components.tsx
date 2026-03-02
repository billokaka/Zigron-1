"use client";
import { useState } from "react";
import { ChevronDown, Heart, Shield, CheckCircle, Zap, Search, Database, Workflow, Target, Layers, Cpu, Cloud, Lock, AlertTriangle, Activity, Eye, FileText, type LucideIcon } from "lucide-react";
import type { FAQ, IconName } from "./data";

const iconMap: Record<IconName, LucideIcon> = { heart: Heart, shield: Shield, checkCircle: CheckCircle, zap: Zap, search: Search, database: Database, workflow: Workflow, target: Target, layers: Layers, cpu: Cpu, cloud: Cloud, lock: Lock, alertTriangle: AlertTriangle, activity: Activity, eye: Eye, fileText: FileText };
export function getIcon(iconName: IconName): LucideIcon { return iconMap[iconName] || Heart; }

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
