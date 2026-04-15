"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface HeroSectionProps {
  backgroundImage?: string;
  images?: string[];
  title: string;
  subtitle: string;
  primaryCta?: { label: string; href: string; external?: boolean };
  secondaryCta?: { label: string; href: string; external?: boolean };
  showLogo?: boolean;
  className?: string;
}

export default function HeroSection({
  backgroundImage,
  images,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  showLogo = false,
  className,
}: HeroSectionProps) {
  const slides = images && images.length > 0 ? images : backgroundImage ? [backgroundImage] : [];
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    if (slides.length <= 1) return;
    const interval = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
        setFading(false);
      }, 600);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className={cn("relative min-h-[90vh] flex items-center overflow-hidden", className)}>
      {/* Slideshow Images */}
      {slides.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt=""
          fill
          className={cn(
            "object-cover transition-opacity duration-700",
            i === current ? (fading ? "opacity-0" : "opacity-100") : "opacity-0"
          )}
          priority={i === 0}
          sizes="100vw"
        />
      ))}

      {/* Slide indicators */}
      {slides.length > 1 && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => { setFading(true); setTimeout(() => { setCurrent(i); setFading(false); }, 300); }}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                i === current ? "w-8 bg-amber-400" : "w-2 bg-white/40 hover:bg-white/70"
              )}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      )}

      <div className="hero-overlay absolute inset-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          {showLogo && (
            <div className="mb-6 animate-fade-in">
              <Image
                src="/images/logo-white.gif"
                alt="190 Nations Office"
                width={80}
                height={80}
                className="rounded-full ring-2 ring-amber-500/30"
              />
            </div>
          )}

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold font-[family-name:var(--font-playfair)] text-white mb-6 animate-fade-in">
            {title}
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl animate-fade-in-delay">
            {subtitle}
          </p>

          {(primaryCta || secondaryCta) && (
            <div className="flex flex-wrap gap-4 animate-fade-in-delay-2">
              {primaryCta && (
                <Button
                  href={primaryCta.href}
                  size="lg"
                  external={primaryCta.external}
                >
                  {primaryCta.label}
                </Button>
              )}
              {secondaryCta && (
                <Button
                  href={secondaryCta.href}
                  variant="outline"
                  size="lg"
                  external={secondaryCta.external}
                >
                  {secondaryCta.label}
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
