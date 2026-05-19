import { cn } from "@/lib/utils";

export default function SectionHeading({
  title,
  subtitle,
  gradient = false,
  className,
  center = true,
}) {
  return (
    <div className={cn(center && "text-center", "mb-12", className)}>
      <h2
        className={cn(
          "text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-playfair)] mb-4",
          gradient ? "text-gradient-warm" : "text-white"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
}
