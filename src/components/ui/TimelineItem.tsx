"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  index: number;
}

export default function TimelineItem({ year, title, description, index }: TimelineItemProps) {
  const { ref, isVisible } = useScrollAnimation(0.3);
  const isLeft = index % 2 === 0;

  const card = (
    <div className="glass-card rounded-xl p-5">
      <span className="text-amber-400 font-bold text-lg">{year}</span>
      <h3 className="text-white font-semibold mt-1">{title}</h3>
      <p className="text-gray-400 text-sm mt-1">{description}</p>
    </div>
  );

  return (
    <div
      ref={ref}
      className={cn(
        "flex items-start gap-4 md:gap-8 transition-all duration-700",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      )}
    >
      {/* Desktop: card on the chosen side */}
      <div className={cn("flex-1 hidden md:block", isLeft ? "text-right" : "text-left")}>
        {card}
      </div>

      {/* Timeline dot */}
      <div className="relative flex-shrink-0 mt-2">
        <div className="w-4 h-4 rounded-full bg-amber-500 ring-4 ring-amber-500/20" />
      </div>

      {/* Mobile: single card stacked next to the dot. Desktop: empty spacer. */}
      <div className="flex-1 md:hidden">{card}</div>
      <div className="flex-1 hidden md:block" aria-hidden />
    </div>
  );
}
