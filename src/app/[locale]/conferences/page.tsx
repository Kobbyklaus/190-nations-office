import { getTranslations } from "next-intl/server";
import HeroSection from "@/components/sections/HeroSection";
import CTASection from "@/components/sections/CTASection";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import ConferenceCard from "@/components/ui/ConferenceCard";
import Button from "@/components/ui/Button";
import {
  CONFERENCE_SCHEDULE,
  TEACHING_TOPICS,
  CONFERENCE_LIVE_ENABLED,
} from "@/lib/constants";
import { getConferences } from "@/lib/conferences";
import {
  Clock,
  UserPlus,
  Radio,
  BookOpen,
  Church,
  Users,
  Heart,
  Globe,
  DollarSign,
  GraduationCap,
  Home,
  Music,
  ClipboardList,
  Map,
  Shield,
  ExternalLink,
} from "lucide-react";

const topicIcons: Record<string, React.ElementType> = {
  Church,
  Users,
  Heart,
  Globe,
  DollarSign,
  GraduationCap,
  Home,
  Music,
  BookOpen,
  ClipboardList,
  Map,
  Shield,
};

const CONFERENCE_ROOM_URL = "https://conference-stream.onrender.com";
const REGISTER_URL = "https://www.dhmm190.com/conference/";

export default async function ConferencesPage() {
  const t = await getTranslations("conferences");
  const conferences = await getConferences();

  const steps = [
    { icon: UserPlus, title: t("step1Title"), desc: t("step1Desc") },
    { icon: Radio, title: t("step2Title"), desc: t("step2Desc") },
    { icon: BookOpen, title: t("step3Title"), desc: t("step3Desc") },
  ];

  return (
    <>
      <HeroSection
        images={[
          "/images/bishop-dag-conference.jpg",
          "/images/conf-chile.jpeg",
          "/images/conf-dominican.jpeg",
          "/images/bishop-dag-crowd.jpg",
        ]}
        title={t("heroTitle")}
        subtitle={t("heroSubtitle")}
        primaryCta={{ label: t("register"), href: REGISTER_URL, external: true }}
        secondaryCta={
          CONFERENCE_LIVE_ENABLED
            ? { label: t("joinNow"), href: CONFERENCE_ROOM_URL, external: true }
            : undefined
        }
      />

      {/* Live Conference Links Banner */}
      <section className="bg-amber-500/10 border-y border-amber-500/20 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <p className="text-amber-400 font-semibold">
            📡 {t("liveEveryText") || "Join us every Saturday at 10:00 AM GMT"}
          </p>
          <div className="flex gap-3">
            {CONFERENCE_LIVE_ENABLED && (
              <a
                href={CONFERENCE_ROOM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 text-slate-950 font-semibold text-sm hover:bg-amber-400 transition-colors"
              >
                <Radio className="w-4 h-4" />
                {t("joinNow")}
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            <a
              href={REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 text-slate-950 font-semibold text-sm hover:bg-amber-400 transition-colors"
            >
              {t("register")}
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title={t("scheduleTitle")} />
          <div className="space-y-4">
            {CONFERENCE_SCHEDULE.map((item, i) => (
              <GlassCard key={i} className="p-5 flex items-center gap-4">
                <div className="flex-shrink-0">
                  <Clock className="w-5 h-5 text-amber-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-white font-semibold">
                      {item.activity}
                    </h3>
                    <span className="text-gray-400 text-sm">
                      {item.duration}
                    </span>
                  </div>
                  <p className="text-amber-400 text-sm">{item.time} GMT</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* How to Join */}
      <section className="py-24 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title={t("howToJoin")} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <GlassCard key={i} className="p-8 text-center relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-bold flex items-center justify-center text-sm">
                  {i + 1}
                </div>
                <div className="w-14 h-14 rounded-xl bg-amber-500/10 flex items-center justify-center mx-auto mb-4 mt-2">
                  <step.icon className="w-7 h-7 text-amber-400" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm">{step.desc}</p>
              </GlassCard>
            ))}
          </div>
          <div className="mt-10 text-center">
            <a
              href={REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-semibold text-base hover:from-amber-400 hover:to-amber-500 transition-all shadow-lg shadow-amber-500/20"
            >
              <UserPlus className="w-5 h-5" />
              {t("register")}
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Teaching Topics */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title={t("topicsTitle")}
            subtitle={t("topicsSubtitle")}
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {TEACHING_TOPICS.map((topic) => {
              const Icon = topicIcons[topic.icon] || BookOpen;
              return (
                <GlassCard key={topic.title} hover className="p-4 text-center">
                  <Icon className="w-6 h-6 text-amber-400 mx-auto mb-2" />
                  <p className="text-white text-sm font-medium">
                    {topic.title}
                  </p>
                </GlassCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Upcoming Conferences */}
      <section className="py-24 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title={t("upcomingTitle")}
            subtitle={t("upcomingSubtitle")}
          />
          {(() => {
            const upcoming = conferences.filter((e) => e.status === "upcoming");
            if (upcoming.length === 0) {
              return (
                <GlassCard className="p-8 max-w-2xl mx-auto text-center">
                  <p className="text-gray-300 mb-5">{t("noUpcoming")}</p>
                  <a
                    href={REGISTER_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 text-slate-950 font-semibold text-sm hover:bg-amber-400 transition-colors"
                  >
                    {t("hostConference")}
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </GlassCard>
              );
            }
            return (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {upcoming.map((event, i) => (
                  <ConferenceCard
                    key={i}
                    {...event}
                    statusLabel={t("upcoming")}
                  />
                ))}
              </div>
            );
          })()}
        </div>
      </section>

      {/* Past Conferences (collapsible archive) */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <details className="group">
            <summary className="cursor-pointer list-none">
              <div className="text-center">
                <h2 className="text-2xl sm:text-3xl font-bold font-[family-name:var(--font-playfair)] text-white mb-2">
                  {t("pastArchiveTitle")}
                </h2>
                <p className="text-gray-400 mb-2">{t("pastArchiveSubtitle")}</p>
                <span className="text-amber-400 text-sm font-medium group-open:hidden">
                  ▼ Show archive
                </span>
                <span className="text-amber-400 text-sm font-medium hidden group-open:inline">
                  ▲ Hide archive
                </span>
              </div>
            </summary>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
              {conferences.filter((e) => e.status === "past").map((event, i) => (
                <ConferenceCard
                  key={i}
                  {...event}
                  statusLabel={t("past")}
                />
              ))}
            </div>
          </details>
        </div>
      </section>

      <CTASection
        backgroundImage="/images/bishop-dag-crowd.jpg"
        title={t("ctaTitle")}
        subtitle={t("ctaSubtitle")}
        primaryCta={{ label: t("register"), href: REGISTER_URL, external: true }}
        secondaryCta={
          CONFERENCE_LIVE_ENABLED
            ? { label: t("joinNow"), href: CONFERENCE_ROOM_URL, external: true }
            : undefined
        }
      />
    </>
  );
}
