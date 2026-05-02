import { useTranslations } from "next-intl";
import Image from "next/image";
import HeroSection from "@/components/sections/HeroSection";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import { TEACHING_TOPICS } from "@/lib/constants";
import { BookOpen, Users, Flame, GraduationCap, Globe, Heart, UserCheck, Calendar, DollarSign, Award, CalendarClock } from "lucide-react";

const GALLERY_IMAGES = [
  { src: "/images/anagkazo/campus-sunset.jpg", alt: "Anagkazo campus at sunset" },
  { src: "/images/anagkazo/bishop-teaching.jpg", alt: "Bishop Dag Heward-Mills teaching Anagkazo students" },
  { src: "/images/anagkazo/graduation-ceremony.jpg", alt: "Anagkazo graduation ceremony" },
  { src: "/images/anagkazo/classroom-tutor.jpg", alt: "Classroom session with a tutor at Anagkazo" },
  { src: "/images/anagkazo/students-scripture.jpg", alt: "Anagkazo students studying scripture together" },
  { src: "/images/anagkazo/graduation-procession.jpg", alt: "Graduates in procession at Anagkazo" },
  { src: "/images/anagkazo/campus-life.jpg", alt: "Students reading on the Anagkazo campus" },
  { src: "/images/anagkazo/classroom-session.jpg", alt: "Anagkazo classroom in session" },
  { src: "/images/anagkazo/students-fellowship.jpg", alt: "Students in fellowship on the Anagkazo grounds" },
  { src: "/images/anagkazo/receiving-diploma.jpg", alt: "An Anagkazo graduate receiving their diploma" },
];

export default function BibleSchoolPage() {
  const t = useTranslations("bibleSchool");

  const programs = [
    {
      icon: BookOpen,
      image: "/images/anagkazo/classroom-session.jpg",
      title: t("classroomTitle"),
      desc: t("classroomDesc"),
    },
    {
      icon: Users,
      image: "/images/anagkazo/classroom-tutor.jpg",
      title: t("leadershipTitle"),
      desc: t("leadershipDesc"),
    },
    {
      icon: Flame,
      image: "/images/anagkazo/students-scripture.jpg",
      title: t("prayerTitle"),
      desc: t("prayerDesc"),
    },
  ];

  const features = [
    { icon: GraduationCap, title: "100+ Video Lessons", desc: "Structured teachings covering every aspect of ministry from founding Bishop Dag Heward-Mills." },
    { icon: Globe, title: "190 Nations Community", desc: "Connect and learn alongside pastors from every corner of the globe." },
    { icon: Heart, title: "Mentorship & Support", desc: "Personal guidance from experienced ministers who understand your context." },
    { icon: BookOpen, title: "Free Resource Library", desc: "Full access to 100+ books by Bishop Dag Heward-Mills at no cost." },
  ];

  return (
    <>
      <HeroSection
        images={[
          "/images/anagkazo/campus-sunset.jpg",
          "/images/anagkazo/bishop-teaching.jpg",
          "/images/anagkazo/graduation-ceremony.jpg",
          "/images/anagkazo/students-scripture.jpg",
        ]}
        title={t("heroTitle")}
        subtitle={t("heroSubtitle")}
        primaryCta={{ label: t("applyTitle"), href: "/contact" }}
      />

      {/* Programs */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title={t("programsTitle")} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((prog, i) => (
              <GlassCard key={i} hover className="overflow-hidden">
                <div className="aspect-video relative">
                  <Image
                    src={prog.image}
                    alt={prog.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center mb-4">
                    <prog.icon className="w-6 h-6 text-amber-400" />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">
                    {prog.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {prog.desc}
                  </p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Why Choose Our Bible School"
            subtitle="Training thousands of pastors and leaders across 190 nations"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <GlassCard key={i} hover className="p-6 text-center">
                <div className="w-14 h-14 rounded-2xl bg-amber-500/10 flex items-center justify-center mx-auto mb-4">
                  <f.icon className="w-7 h-7 text-amber-400" />
                </div>
                <h3 className="text-white font-semibold mb-2">{f.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Inside Anagkazo"
            subtitle="Scenes from the Anagkazo Bible & Ministry Training Centre and our global pastoral conferences"
          />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {GALLERY_IMAGES.map((img, i) => (
              <div
                key={i}
                className="relative overflow-hidden rounded-xl bg-slate-800 aspect-[4/3]"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                  <span className="text-white text-xs font-medium leading-snug">{img.alt}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-24 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title={t("curriculumTitle")}
            subtitle={t("curriculumSubtitle")}
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {TEACHING_TOPICS.map((topic) => (
              <GlassCard key={topic.title} hover className="p-5 text-center">
                <p className="text-white text-sm font-medium">{topic.title}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Enrolment Details */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title={t("enrolDetailsTitle")} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: UserCheck, title: t("whoCanApply"), desc: t("whoCanApplyDesc") },
              { icon: Calendar, title: t("duration"), desc: t("durationDesc") },
              { icon: DollarSign, title: t("cost"), desc: t("costDesc") },
              { icon: Award, title: t("whatYouGet"), desc: t("whatYouGetDesc") },
              { icon: CalendarClock, title: t("nextCohort"), desc: t("nextCohortDesc") },
            ].map((item, i) => (
              <GlassCard key={i} className="p-6">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-amber-400" />
                </div>
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Apply CTA */}
      <section className="py-24 bg-slate-900/50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-playfair)] text-white mb-4">
            {t("applyTitle")}
          </h2>
          <p className="text-gray-400 text-lg mb-8">{t("applySubtitle")}</p>
          <Button href="/contact" size="lg">
            {t("applyTitle")}
          </Button>
        </div>
      </section>
    </>
  );
}
