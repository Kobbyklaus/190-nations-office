"use client";

import { useRef } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import TestimonialCard from "@/components/ui/TestimonialCard";

export default function TestimonialsSection({
  title,
  subtitle,
  testimonials,
}) {
  const trackRef = useRef(null);
  // Duplicate the list three times for a seamless infinite loop
  const repeated = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title={title} subtitle={subtitle} />
      </div>

      {/* Outer mask — fade edges */}
      <div
        className="relative"
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div
          ref={trackRef}
          className="flex gap-6 w-max"
          style={{
            animation: "marquee 60s linear infinite",
          }}
        >
          {repeated.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(calc(-100% / 3)); }
        }
        @media (prefers-reduced-motion: reduce) {
          div[style*="animation"] { animation: none !important; }
        }
      `}</style>
    </section>
  );
}
