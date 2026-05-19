import Image from "next/image";
import Button from "@/components/ui/Button";
import { Phone } from "lucide-react";

export default function BibleSchoolFeature({
  label,
  title,
  titleAccent,
  description,
  programs,
  applyLabel,
  applyHref,
  callLabel,
  callHref,
  backgroundImage,
}) {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background image */}
      <Image
        src={backgroundImage}
        alt="Anagkazo Bible & Ministry Training Center"
        fill
        className="object-cover"
        sizes="100vw"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/85 to-slate-950/70" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          {/* Label */}
          <span className="inline-block text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            {label}
          </span>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-playfair)] text-white mb-2 leading-tight">
            {title}
          </h2>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-playfair)] text-gradient-warm mb-6 leading-tight">
            {titleAccent}
          </h2>

          {/* Description */}
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-10 max-w-xl">
            {description}
          </p>

          {/* Program cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {programs.map((prog) => (
              <div
                key={prog.name}
                className="glass-card rounded-xl px-5 py-4 hover:bg-white/10 transition-colors duration-300"
              >
                <h3 className="text-white font-semibold text-sm sm:text-base">
                  {prog.name}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm mt-1">
                  {prog.duration}
                  {prog.note && (
                    <span className="text-gold ml-1.5">
                      &middot; {prog.note}
                    </span>
                  )}
                </p>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <Button href={applyHref} size="lg">
              {applyLabel}
            </Button>
            <a
              href={callHref}
              className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-sm"
            >
              <Phone className="w-4 h-4" />
              {callLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
