import Image from "next/image";
import Link from "next/link";
import { LIBRARY_BOOKS } from "@/lib/constants";
import LeadGate from "@/components/LeadGate";
import { Download, ArrowDownToLine, BookOpen, Search, Sparkles } from "lucide-react";

export const metadata = {
  title: "Library | 190 Nations Office",
  description:
    "Free downloadable books by Bishop Dag Heward-Mills. Over 100 ministry titles for pastors and church leaders, all free to download.",
};

export default function LibraryPage() {
  // Group books by category, preserving the order they were defined in
  const categories = Array.from(new Set(LIBRARY_BOOKS.map((b) => b.category)));
  const totalBooks = LIBRARY_BOOKS.length;

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-slate-950 to-slate-950" />
        <div className="absolute inset-0 [background-image:radial-gradient(circle_at_30%_20%,rgba(251,191,36,0.08),transparent_60%)]" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            Free to download
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-playfair)] text-white mb-6 leading-tight">
            The 190 Nations <span className="text-amber-400">Library</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8">
            Over <span className="text-amber-400 font-semibold">{totalBooks} ministry books</span> by Bishop Dag Heward-Mills — free for pastors,
            leaders, and believers worldwide.
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-xs sm:text-sm">
            <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300">
              📚 {totalBooks} titles
            </span>
            <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300">
              🌍 50+ languages
            </span>
            <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300">
              ✨ {categories.length} collections
            </span>
            <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300">
              💾 Free to download
            </span>
          </div>
        </div>
      </section>

      {/* Quick category jump-list */}
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

      {/* Library — books grouped by category */}
      <section id="library" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {categories.map((category) => {
            const items = LIBRARY_BOOKS.filter((b) => b.category === category);
            return (
              <div
                key={category}
                id={`cat-${category.replace(/[^a-z0-9]+/gi, "-").toLowerCase()}`}
                className="mb-16 scroll-mt-32"
              >
                <div className="flex items-baseline justify-between mb-6 pb-3 border-b border-white/10">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white font-[family-name:var(--font-playfair)]">
                    {category}
                  </h2>
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
                      <h3 className="text-white text-xs sm:text-sm font-medium leading-snug line-clamp-2 group-hover:text-amber-400 transition-colors">
                        {book.title}
                      </h3>
                    </a>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 bg-gradient-to-br from-amber-500/10 via-slate-900 to-slate-900 border-t border-amber-500/20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <BookOpen className="w-10 h-10 text-amber-400 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-white mb-3 font-[family-name:var(--font-playfair)]">
            Need help choosing?
          </h2>
          <p className="text-gray-300 mb-8">
            Get in touch with our team. We&rsquo;ll recommend titles based on where you are in your ministry journey.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 text-slate-950 font-semibold hover:bg-amber-400 transition-colors"
          >
            Contact us
          </Link>
        </div>
      </section>

      {/* Polite exit-intent / scroll-trigger lead capture */}
      <LeadGate
        title="Don't leave empty-handed"
        subtitle="Pick a free book to download from the library, or leave your details so we can stay in touch and send you new ministry resources."
        booksHref="#library"
      />
    </>
  );
}
