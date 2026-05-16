import { cn } from "@/lib/utils";
import { Link } from "@/i18n/navigation";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "warm" | "blue" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
}

const variants = {
  warm: "bg-gradient-to-r from-royal to-royal-dark text-white hover:from-royal-dark hover:to-royal-deep shadow-lg shadow-royal/20",
  blue: "bg-gradient-to-r from-royal to-royal-dark text-white hover:from-royal-dark hover:to-royal-deep shadow-lg shadow-royal/20",
  outline: "border border-gold/50 text-gold hover:bg-gold/10",
  ghost: "text-gray-300 hover:text-white hover:bg-white/5",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export default function Button({
  children,
  variant = "warm",
  size = "md",
  href,
  external = false,
  onClick,
  className,
  type = "button",
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300",
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href as "/"} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
