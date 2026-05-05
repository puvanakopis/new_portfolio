import { ReactNode } from "react";
import Link from "next/link";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  className?: string;
  download?: boolean;
  target?: string;
  rel?: string;
}

export function Button({
  href,
  onClick,
  variant = "primary",
  size = "md",
  children,
  className = "",
  download,
  target,
  rel,
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 font-semibold rounded-full transition-all duration-200 cursor-pointer whitespace-nowrap";

  const sizes = {
    sm: "px-5 py-2 text-sm",
    md: "px-7 py-3 text-sm",
    lg: "px-9 py-4 text-base",
  };

  const variants = {
    primary:
      "bg-accent text-white hover:bg-accent-dark active:scale-95",
    outline:
      "border border-color text-primary bg-transparent hover:border-accent hover:text-accent active:scale-95",
    ghost: "text-muted-color hover:text-accent bg-transparent active:scale-95",
  };

  const combinedClass = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link
        href={href}
        className={combinedClass}
        download={download}
        target={target}
        rel={rel}
      >
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedClass}>
      {children}
    </button>
  );
}
