"use client";

import { useCountUp } from "@/hooks/useCountUp";

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  label: string;
}

export default function AnimatedCounter({ target, suffix = "", label }: AnimatedCounterProps) {
  const { count, ref } = useCountUp(target, 2000);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl sm:text-5xl font-bold text-gradient-warm mb-2">
        {count.toLocaleString()}
        {suffix}
      </div>
      <div className="text-gray-400 text-sm font-medium uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
}
