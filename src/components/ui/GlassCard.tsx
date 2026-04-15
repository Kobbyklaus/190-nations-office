import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function GlassCard({ children, className, hover = false }: GlassCardProps) {
  return (
    <div
      className={cn(
        "glass-card rounded-xl",
        hover && "glass-card-hover transition-all duration-300 cursor-pointer",
        className
      )}
    >
      {children}
    </div>
  );
}
