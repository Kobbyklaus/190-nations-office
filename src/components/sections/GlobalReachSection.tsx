"use client";

import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { REGIONS } from "@/lib/constants";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

interface GlobalReachSectionProps {
  title: string;
  subtitle: string;
  churchesLabel: string;
  countriesLabel: string;
}

export default function GlobalReachSection({
  title,
  subtitle,
  churchesLabel,
  countriesLabel,
}: GlobalReachSectionProps) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title={title} subtitle={subtitle} gradient />

        <div className="mb-12 flex justify-center">
          <Image
            src="/images/world-map.svg"
            alt="Global reach"
            width={800}
            height={400}
            className="opacity-40"
          />
        </div>

        <div
          ref={ref}
          className={cn(
            "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          {REGIONS.map((region) => (
            <GlassCard key={region.region} hover className="p-5 flex items-center justify-between">
              <div>
                <h3 className="text-white font-semibold">{region.region}</h3>
                <p className="text-gray-400 text-sm">
                  {region.countries} {countriesLabel}
                </p>
              </div>
              <div className="text-right">
                <span className="text-2xl font-bold text-amber-400">
                  {region.churches}
                </span>
                <p className="text-gray-400 text-xs">{churchesLabel}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
