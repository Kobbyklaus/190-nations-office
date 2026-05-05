import { useTranslations } from "next-intl";
import Image from "next/image";
import HeroSection from "@/components/sections/HeroSection";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import Button from "@/components/ui/Button";
import { LIBRARY_BOOKS, BOOK_LANGUAGES } from "@/lib/constants";
import { ArrowDownToLine } from "lucide-react";

export default function BooksPage() {
  const t = useTranslations("books");

  const totalBooks = LIBRARY_BOOKS.length;
  const categories = Array.from(new Set(LIBRARY_BOOKS.map((b) => b.category)));

  const bookStats = [
    { value: totalBooks, suffix: "+", label: t("titles") },
    { value: 50, suffix: "+", label: t("languages") },
    { value: 8, suffix: "M+", label: t("copies") },
    { value: 190, suffix: "+", label: t("nations") },
  ];

  return (
    <>
      <HeroSection
        backgroundImage="/images/bishop-dag-quote.jpg"
        title={t("heroTitle")}
        subtitle={t("heroSubtitle")}
        primaryCta={{ label: t("requestBooks"), href: "/contact" }}
      />

      {/* Stats Bar */}
      <section className="py-16 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {bookStats.map((stat) => (
              <GlassCard key={stat.label} className="p-6">
                <AnimatedCounter
                  target={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                />
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Category jump-list */}
      <section className="sticky top-16 z-30 bg-slate-950/90 backdrop-blur-md border-y border-white/10 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-1 scrollbar-thin">
            <span className="text-xs uppercase tracking-wider text-gray-500 font-semibold flex-shrink-0">
              Jump to:
            </span>
            {categories.map((cat) => (
              <a
                key={cat}
                href={`#cat-${cat.replace(/[^a-z0-9]+/gi, "-").toLowerCase()}`}
                className="flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-medium bg-white/5 text-gray-300 hover:bg-amber-500/20 hover:text-amber-400 border border-white/10 hover:border-amber-500/40 transition-colors"
              >
                {cat}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Book Library */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title={t("libraryTitle")}
            subtitle={t("librarySubtitle")}
          />

          {categories.map((category) => {
            const items = LIBRARY_BOOKS.filter((b) => b.category === category);
            return (
              <div
                key={category}
                id={`cat-${category.replace(/[^a-z0-9]+/gi, "-").toLowerCase()}`}
                className="mb-16 scroll-mt-32"
              >
                <div className="flex items-baseline justify-between mb-6 pb-3 border-b border-white/10">
                  <h3 className="text-xl sm:text-2xl font-semibold text-amber-400">
                    {category}
                  </h3>
                  <span className="text-sm text-gray-500">
                    {items.length} {items.length === 1 ? "book" : "books"}
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-5">
                  {items.map((book) => (
                    <a
                      key={book.slug}
                      href={`https://dagbooks.org/book/${book.slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col"
                    >
                      <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-slate-800 mb-2 ring-1 ring-white/5 group-hover:ring-amber-500/40 transition-all">
                        <Image
                          src={book.image}
                          alt={book.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, (max-width: 1280px) 20vw, 16vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="absolute bottom-2 left-2 right-2 flex items-center gap-1.5 px-2 py-1 rounded-md bg-amber-500 text-slate-950 text-[10px] font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                          <ArrowDownToLine className="w-3 h-3" />
                          Download
                        </div>
                      </div>
                      <h4 className="text-white text-xs sm:text-sm font-medium leading-snug line-clamp-2 group-hover:text-amber-400 transition-colors">
                        {book.title}
                      </h4>
                    </a>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Languages */}
      <section className="py-24 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title={t("languagesTitle")}
            subtitle={t("languagesSubtitle")}
          />
          <div className="flex flex-wrap justify-center gap-3">
            {BOOK_LANGUAGES.map((lang) => (
              <span
                key={lang}
                className="px-4 py-2 rounded-full glass-card text-sm text-gray-300 hover:text-amber-400 hover:border-amber-500/30 transition-colors"
              >
                {lang}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-playfair)] text-white mb-4">
            {t("ctaTitle")}
          </h2>
          <p className="text-gray-400 text-lg mb-8">{t("ctaSubtitle")}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="https://dagbooks.org" external size="lg">
              {t("requestBooks")}
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
