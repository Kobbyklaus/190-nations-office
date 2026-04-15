import { useTranslations } from "next-intl";
import Image from "next/image";
import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import OfferingsSection from "@/components/sections/OfferingsSection";
import GlobalReachSection from "@/components/sections/GlobalReachSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTASection from "@/components/sections/CTASection";
import UpcomingEventBanner from "@/components/sections/UpcomingEventBanner";
import ConferenceCard from "@/components/ui/ConferenceCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { STATS, TESTIMONIALS, CONFERENCE_EVENTS } from "@/lib/constants";

export default function HomePage() {
  const t = useTranslations("home");

  const offerings = [
    { title: t("weeklyConf"), description: t("weeklyConfDesc"), icon: "weeklyConf" },
    { title: t("freeBooks"), description: t("freeBooksDesc"), icon: "freeBooks" },
    { title: t("globalNetwork"), description: t("globalNetworkDesc"), icon: "globalNetwork" },
    { title: t("partnerships"), description: t("partnershipsDesc"), icon: "partnerships" },
  ];

  const stats = [
    { value: STATS[0].value, suffix: STATS[0].suffix, label: t("nationsReached") },
    { value: STATS[1].value, suffix: STATS[1].suffix, label: t("pastorsConnected") },
    { value: STATS[2].value, suffix: STATS[2].suffix, label: t("booksDistributed") },
    { value: STATS[3].value, suffix: STATS[3].suffix, label: t("weeklyConferences") },
  ];

  return (
    <>
      <UpcomingEventBanner
        title={t("upcomingEvent")}
        location={t("eventLocation")}
        date={t("eventDate")}
      />

      <HeroSection
        images={[
          "/images/bishop-dag-conference.jpg",
          "/images/bishop-dag-preaching.jpg",
          "/images/bishop-dag-stage.jpg",
          "/images/bishop-dag-crowd.jpg",
          "/images/mission.jpg",
        ]}
        title={t("heroTitle")}
        subtitle={t("heroSubtitle")}
        showLogo
        primaryCta={{ label: t("joinConference"), href: "https://conference-stream.onrender.com", external: true }}
        secondaryCta={{ label: t("getBooks"), href: "/books" }}
      />

      <StatsSection stats={stats} />

      <OfferingsSection
        title={t("offerTitle")}
        subtitle={t("offerSubtitle")}
        offerings={offerings}
      />

      <GlobalReachSection
        title={t("globalReach")}
        subtitle={t("globalReachSubtitle")}
        churchesLabel={t("churches")}
        countriesLabel={t("countries")}
      />

      {/* Country Conferences */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title={t("conferences")}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CONFERENCE_EVENTS.map((event, i) => (
              <ConferenceCard
                key={i}
                {...event}
                statusLabel={event.status === "upcoming" ? "Upcoming" : "Past"}
              />
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection
        title={t("testimonialsTitle")}
        subtitle={t("testimonialsSubtitle")}
        testimonials={TESTIMONIALS}
      />

      <CTASection
        backgroundImage="/images/bishop-dag-crowd.jpg"
        title={t("ctaTitle")}
        subtitle={t("ctaSubtitle")}
        primaryCta={{ label: t("joinConference"), href: "/conferences" }}
        secondaryCta={{ label: t("getBooks"), href: "/books" }}
      />

      {/* Scripture */}
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-gray-300 text-xl sm:text-2xl italic font-[family-name:var(--font-playfair)] leading-relaxed">
            &ldquo;{t("scripture")}&rdquo;
          </p>
          <p className="text-amber-400 font-semibold mt-4">
            &mdash; {t("scriptureRef")}
          </p>
        </div>
      </section>
    </>
  );
}
