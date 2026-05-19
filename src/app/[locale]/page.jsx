import { getTranslations } from "next-intl/server";
import Image from "next/image";
import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import OfferingsSection from "@/components/sections/OfferingsSection";
import GlobalReachSection from "@/components/sections/GlobalReachSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTASection from "@/components/sections/CTASection";
import UpcomingEventBanner from "@/components/sections/UpcomingEventBanner";
import BibleSchoolFeature from "@/components/sections/BibleSchoolFeature";
import ConferenceGrid from "@/components/sections/ConferenceGrid";
import SectionHeading from "@/components/ui/SectionHeading";
import { STATS, TESTIMONIALS, CONFERENCE_LIVE_ENABLED } from "@/lib/constants";
import { getConferences } from "@/lib/conferences";

export default async function HomePage() {
  const t = await getTranslations("home");
  const conferences = await getConferences();

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
        video="/videos/hero-home.mp4"
        fallbackImage="/images/bishop-dag-conference.jpg"
        title={t("heroTitle")}
        subtitle={t("heroSubtitle")}
        showLogo
        primaryCta={
          CONFERENCE_LIVE_ENABLED
            ? { label: t("joinConference"), href: "https://conference-stream.onrender.com", external: true }
            : { label: t("getBooks"), href: "/books" }
        }
        secondaryCta={
          CONFERENCE_LIVE_ENABLED ? { label: t("getBooks"), href: "/books" } : undefined
        }
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
          <ConferenceGrid
            conferences={conferences}
            upcomingLabel={t("upcomingLabel")}
            pastLabel={t("pastLabel")}
            seeMoreLabel={t("seeMore")}
            seeLessLabel={t("seeLess")}
          />
        </div>
      </section>

      {/* Bible School Feature */}
      <BibleSchoolFeature
        label={t("bsLabel")}
        title={t("bsTitle")}
        titleAccent={t("bsTitleAccent")}
        description={t("bsDescription")}
        programs={[
          { name: t("bsMakarios"), duration: t("bsMakariosDur"), note: t("bsMakariosNote") },
          { name: t("bsMachaneh"), duration: t("bsMachanehDur") },
          { name: t("bsManthano"), duration: t("bsManhanoDur") },
          { name: t("bsAnagkazo"), duration: t("bsAnagkazoDur") },
        ]}
        applyLabel={t("bsApply")}
        applyHref="/bible-school"
        callLabel={t("bsCall")}
        callHref="tel:+233557467460"
        backgroundImage="/images/anagkazo/campus-sunset.jpg"
      />

      <TestimonialsSection
        title={t("testimonialsTitle")}
        subtitle={t("testimonialsSubtitle")}
        testimonials={TESTIMONIALS}
      />

      <CTASection
        backgroundImage="/images/bishop-dag-crowd.jpg"
        title={t("ctaTitle")}
        subtitle={t("ctaSubtitle")}
        primaryCta={{ label: t("getBooks"), href: "/books" }}
        secondaryCta={{ label: t("upcomingEvent"), href: "/conferences" }}
      />

      {/* Scripture */}
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-gray-300 text-xl sm:text-2xl italic font-[family-name:var(--font-playfair)] leading-relaxed">
            &ldquo;{t("scripture")}&rdquo;
          </p>
          <p className="text-gold font-semibold mt-4">
            &mdash; {t("scriptureRef")}
          </p>
        </div>
      </section>
    </>
  );
}
