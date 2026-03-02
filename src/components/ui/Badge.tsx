type BadgeVariant = "primary" | "secondary" | "success" | "muted";

interface BadgeProps {
  variant?: BadgeVariant;
  children: React.ReactNode;
  className?: string;
  dot?: boolean;
}

const variantStyles: Record<BadgeVariant, string> = {
  primary:
    "text-primary bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-900/30",
  secondary:
    "text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700",
  success:
    "text-green-700 dark:text-green-400 bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-900/30",
  muted:
    "text-gray-500 bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800",
};

export function Badge({
  variant = "primary",
  children,
  className = "",
  dot = false,
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 px-3 py-1 text-xs font-bold tracking-wider uppercase rounded-full ${variantStyles[variant]} ${className}`}
    >
      {dot && (
        <span className="w-2 h-2 rounded-full bg-current animate-pulse" />
      )}
      {children}
    </span>
  );
}
