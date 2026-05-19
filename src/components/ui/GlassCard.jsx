import { cn } from "@/lib/utils";

export default function GlassCard({ children, className, hover = false }) {
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
