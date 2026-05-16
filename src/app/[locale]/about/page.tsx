import { useTranslations } from "next-intl";
import Image from "next/image";
import HeroSection from "@/components/sections/HeroSection";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import TimelineItem from "@/components/ui/TimelineItem";
import { TIMELINE } from "@/lib/constants";
import { Heart, Gift, Globe, Wrench } from "lucide-react";

export default function AboutPage() {
  const t = useTranslations("about");

  const values = [
    { icon: Heart, title: t("loyaltyTitle"), desc: t("loyaltyDesc") },
    { icon: Gift, title: t("resourcesTitle"), desc: t("resourcesDesc") },
    { icon: Globe, title: t("unityTitle"), desc: t("unityDesc") },
    { icon: Wrench, title: t("equippingTitle"), desc: t("equippingDesc") },
  ];

  return (
    <>
      <HeroSection
        video="/videos/hero-about.mp4"
        fallbackImage="/images/bishop-dag-preaching.jpg"
        title={t("heroTitle")}
        subtitle={t("heroSubtitle")}
      />

      {/* Mission */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading title={t("missionTitle")} center={false} />
              <p className="text-gray-300 leading-relaxed text-lg">
                {t("missionText")}
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/bishop-dag-stage.jpg"
                alt="Bishop Dag Heward-Mills"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Bishop */}
      <section className="py-24 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden order-2 lg:order-1">
              <Image
                src="/images/bishop-dag-quote.jpg"
                alt="Bishop Dag Heward-Mills"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="order-1 lg:order-2">
              <SectionHeading title={t("aboutBishop")} center={false} />
              <p className="text-gray-300 leading-relaxed">
                {t("bishopBio")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title={t("valuesTitle")} gradient />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <GlassCard key={i} hover className="p-6 text-center">
                <div className="w-14 h-14 rounded-xl bg-amber-500/10 flex items-center justify-center mx-auto mb-4">
                  <v.icon className="w-7 h-7 text-amber-400" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">
                  {v.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {v.desc}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-slate-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title={t("timelineTitle")}
            subtitle={t("timelineSubtitle")}
          />
          <div className="relative">
            <div className="absolute left-2 md:left-1/2 top-0 bottom-0 w-0.5 bg-white/10 -translate-x-1/2" />
            <div className="space-y-8">
              {TIMELINE.map((entry, i) => (
                <TimelineItem key={entry.year} index={i} {...entry} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
