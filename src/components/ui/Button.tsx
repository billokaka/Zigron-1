import Link from "next/link";
import { forwardRef } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline" | "outline-light";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  children: React.ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-primary hover:bg-primary-dark text-white shadow hover:shadow-lg transform hover:-translate-y-0.5",
  secondary:
    "bg-surface-light dark:bg-surface-dark text-text-main-light dark:text-text-main-dark border border-gray-300 dark:border-gray-600 hover:border-primary hover:text-primary dark:hover:border-primary dark:hover:text-primary",
  ghost:
    "text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800",
  outline:
    "border-2 border-primary text-primary hover:bg-primary hover:text-white",
  "outline-light":
    "border-2 border-white/80 text-white hover:bg-white hover:text-black",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "text-sm py-2 px-4",
  md: "text-sm py-2.5 px-6",
  lg: "text-base py-3.5 px-8",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant = "primary", size = "md", href, className = "", children, ...props },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-semibold rounded transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

    const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

    if (href) {
      return (
        <Link href={href} className={combinedStyles}>
          {children}
        </Link>
      );
    }

    return (
      <button ref={ref} className={combinedStyles} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
