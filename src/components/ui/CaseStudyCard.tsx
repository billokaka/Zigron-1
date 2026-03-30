import Image from "next/image";
import { ArrowRight } from "lucide-react";

export interface CaseStudyCardProps {
  title: string;
  category: string;
  image: string;
  href: string;
  /** Label like "Services:", "Focus:", "Problem:" */
  metaLabel?: string;
  metaValue?: string;
  /** Label like "Result:", "Outcome:" */
  resultLabel?: string;
  resultValue?: string;
  ctaText?: string;
}

export function CaseStudyCard({
  title,
  category,
  image,
  href,
  metaLabel = "Services:",
  metaValue,
  resultLabel = "Result:",
  resultValue,
  ctaText = "Read case study",
}: CaseStudyCardProps) {
  return (
    <a
      href={href}
      className="bg-white dark:bg-surface-dark rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-gray-100 dark:border-gray-800 flex flex-col group"
    >
      <div className="h-52 relative overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <div className="absolute top-4 left-4 bg-white/95 dark:bg-black/80 px-3 py-1 text-xs font-bold rounded uppercase tracking-wider text-black dark:text-white">
          {category}
        </div>
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="font-bold text-lg mb-3 text-black dark:text-white leading-tight">
          {title}
        </h3>
        {(metaValue || resultValue) && (
          <div className="text-xs text-gray-500 space-y-2 mb-6 flex-1 border-t border-gray-100 dark:border-gray-700 pt-3">
            {metaValue && (
              <p>
                <strong className="text-gray-800 dark:text-gray-300">
                  {metaLabel}
                </strong>{" "}
                {metaValue}
              </p>
            )}
            {resultValue && (
              <p className="text-green-600 dark:text-green-400 font-semibold">
                <strong className="text-gray-800 dark:text-gray-300">
                  {resultLabel}
                </strong>{" "}
                {resultValue}
              </p>
            )}
          </div>
        )}
        <span className="text-primary font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all mt-auto">
          {ctaText}
          <ArrowRight className="w-3.5 h-3.5" />
        </span>
      </div>
    </a>
  );
}
