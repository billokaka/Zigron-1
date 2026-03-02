interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: "default" | "surface" | "gradient" | "dark";
  padding?: "default" | "compact" | "hero";
  border?: "none" | "top" | "bottom" | "both";
  id?: string;
}

const backgroundStyles = {
  default: "bg-background-light dark:bg-background-dark",
  surface: "bg-surface-light dark:bg-surface-dark",
  gradient:
    "bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-background-dark dark:via-surface-dark dark:to-background-dark",
  dark: "bg-gray-900 dark:bg-black",
};

const paddingStyles = {
  default: "py-20 md:py-24",
  compact: "py-12 md:py-16",
  hero: "pt-16 pb-20 md:pt-20 md:pb-24",
};

const borderStyles = {
  none: "",
  top: "border-t border-gray-200 dark:border-gray-800",
  bottom: "border-b border-gray-200 dark:border-gray-800",
  both: "border-y border-gray-200 dark:border-gray-800",
};

export function Section({
  children,
  className = "",
  background = "default",
  padding = "default",
  border = "none",
  id,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`${backgroundStyles[background]} ${paddingStyles[padding]} ${borderStyles[border]} ${className}`}
    >
      {children}
    </section>
  );
}
