import Link from "next/link";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  hoverEffect?: boolean;
}

export function Card({
  children,
  className = "",
  href,
  hoverEffect = true,
}: CardProps) {
  const baseStyles = `bg-white dark:bg-surface-dark rounded-lg border border-gray-200 dark:border-gray-700 ${
    hoverEffect
      ? "hover:border-primary/30 dark:hover:border-primary/30 hover:shadow-xl transition-all duration-300"
      : ""
  }`;

  if (href) {
    return (
      <Link href={href} className={`block ${baseStyles} ${className}`}>
        {children}
      </Link>
    );
  }

  return <div className={`${baseStyles} ${className}`}>{children}</div>;
}

interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export function CardHeader({ children, className = "" }: CardHeaderProps) {
  return <div className={`p-6 pb-0 ${className}`}>{children}</div>;
}

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

export function CardContent({ children, className = "" }: CardContentProps) {
  return <div className={`p-6 ${className}`}>{children}</div>;
}

interface CardFooterProps {
  children: React.ReactNode;
  className?: string;
}

export function CardFooter({ children, className = "" }: CardFooterProps) {
  return (
    <div
      className={`p-6 pt-0 border-t border-gray-100 dark:border-gray-800 ${className}`}
    >
      {children}
    </div>
  );
}
