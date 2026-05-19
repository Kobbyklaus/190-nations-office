"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { Church, BookOpen, Globe, Handshake } from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap = {
  weeklyConf: Church,
  freeBooks: BookOpen,
  globalNetwork: Globe,
  partnerships: Handshake,
};

export default function OfferingsSection({ title, subtitle, offerings }) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title={title} subtitle={subtitle} />

        <div
          ref={ref}
          className={cn(
            "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          {offerings.map((offering, i) => {
            const Icon = iconMap[offering.icon] || Globe;
            return (
              <GlassCard key={i} hover className="p-6">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-amber-400" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">
                  {offering.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {offering.description}
                </p>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
