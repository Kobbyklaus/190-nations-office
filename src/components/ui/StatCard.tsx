"use client";

import GlassCard from "./GlassCard";
import AnimatedCounter from "./AnimatedCounter";

interface StatCardProps {
  value: number;
  suffix: string;
  label: string;
}

export default function StatCard({ value, suffix, label }: StatCardProps) {
  return (
    <GlassCard className="p-6 sm:p-8">
      <AnimatedCounter target={value} suffix={suffix} label={label} />
    </GlassCard>
  );
}
