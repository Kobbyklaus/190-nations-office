"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export default function HeroSection({
  backgroundImage,
  images,
  video,
  fallbackImage,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  showLogo = false,
  className,
}) {
  const slides = images && images.length > 0 ? images : backgroundImage ? [backgroundImage] : [];
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);
  const hasVideo = !!video;

  useEffect(() => {
    if (hasVideo || slides.length <= 1) return;
    const interval = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
        setFading(false);
      }, 600);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length, hasVideo]);

  return (
    <section className={cn("relative min-h-[90vh] flex items-center overflow-hidden", className)}>
      {/* Video Background */}
      {hasVideo && (
        <>
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={video} type="video/mp4" />
          </video>
          {/* Fallback image for mobile / slow connections */}
          {fallbackImage && (
            <Image
              src={fallbackImage}
              alt=""
              fill
              className="object-cover md:hidden"
              priority
              sizes="100vw"
            />
          )}
        </>
      )}

      {/* Image Slideshow (only when no video) */}
      {!hasVideo && slides.map((src, i) => (
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

      {/* Slide indicators (only for image slideshows) */}
      {!hasVideo && slides.length > 1 && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => { setFading(true); setTimeout(() => { setCurrent(i); setFading(false); }, 300); }}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                i === current ? "w-8 bg-gold" : "w-2 bg-white/40 hover:bg-white/70"
              )}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      )}

      {/* Dark overlay for text readability */}
      <div className={cn(
        "absolute inset-0",
        hasVideo
          ? "bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-slate-950/50"
          : "hero-overlay"
      )} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          {showLogo && (
            <div className="mb-6 animate-fade-in">
              <Image
                src="/images/logo-white.gif"
                alt="190 Nations Office"
                width={80}
                height={80}
                className="rounded-full ring-2 ring-gold/30"
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
