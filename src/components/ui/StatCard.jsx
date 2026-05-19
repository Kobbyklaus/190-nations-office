"use client";

import GlassCard from "./GlassCard";
import AnimatedCounter from "./AnimatedCounter";

export default function StatCard({ value, suffix, label }) {
  return (
    <GlassCard className="p-6 sm:p-8">
      <AnimatedCounter target={value} suffix={suffix} label={label} />
    </GlassCard>
  );
}
