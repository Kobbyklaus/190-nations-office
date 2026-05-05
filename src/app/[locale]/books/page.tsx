import { useTranslations } from "next-intl";
import HeroSection from "@/components/sections/HeroSection";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import BookCard from "@/components/ui/BookCard";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import Button from "@/components/ui/Button";
import { BOOKS, BOOK_LANGUAGES } from "@/lib/constants";
import { dagbookUrl } from "@/lib/utils";

export default function BooksPage() {
  const t = useTranslations("books");

  const bookStats = [
    { value: 100, suffix: "+", label: t("titles") },
    { value: 50, suffix: "+", label: t("languages") },
    { value: 8, suffix: "M+", label: t("copies") },
    { value: 190, suffix: "+", label: t("nations") },
  ];

  const categories = [...new Set(BOOKS.map((b) => b.category))];

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

      {/* Book Library */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title={t("libraryTitle")}
            subtitle={t("librarySubtitle")}
          />

          {categories.map((category) => (
            <div key={category} className="mb-12">
              <h3 className="text-xl font-semibold text-amber-400 mb-6">
                {category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                {BOOKS.filter((b) => b.category === category).map((book) => (
                  <BookCard
                    key={book.title}
                    title={book.title}
                    description={book.description}
                    image={book.image}
                    href={dagbookUrl(book.title)}
                  />
                ))}
              </div>
            </div>
          ))}
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
