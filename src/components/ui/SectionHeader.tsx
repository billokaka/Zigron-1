interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({
  label,
  title,
  description,
  centered = false,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`mb-14 ${centered ? "text-center" : ""} ${className}`}>
      {label && (
        <span className="text-primary font-bold uppercase tracking-widest text-sm">
          {label}
        </span>
      )}
      <h2
        className={`text-3xl font-bold ${label ? "mt-2" : ""} text-black dark:text-white`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-text-muted-light dark:text-text-muted-dark text-lg ${centered ? "max-w-2xl mx-auto" : "max-w-2xl"}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
