interface Stat {
  value: string;
  label: string;
}

interface MinistryStatsBannerProps {
  stats: Stat[];
}

export default function MinistryStatsBanner({
  stats,
}: MinistryStatsBannerProps) {
  return (
    <section className="border-y border-white/10 bg-slate-950 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-10 gap-x-6">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gold font-[family-name:var(--font-playfair)] tracking-tight">
                {stat.value}
              </div>
              <div className="mt-2 text-[11px] sm:text-xs font-medium uppercase tracking-[0.18em] text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
