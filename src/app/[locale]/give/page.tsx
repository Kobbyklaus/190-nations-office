import { useTranslations } from "next-intl";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { Gift, Heart, BookOpen, ExternalLink, CreditCard } from "lucide-react";
import Image from "next/image";

const STRIPE_URL = "https://buy.stripe.com/9AQ4jN72z3dcdNefZc";
const PAYPAL_URL = "https://www.paypal.com/donate/?hosted_button_id=ANJA968AS654E";
const PAGBANK_URL = "https://pag.ae/7ZXA8iT66";

export default function GivePage() {
  const t = useTranslations("give");

  const options = [
    {
      icon: Gift,
      title: t("oneTimeTitle"),
      desc: t("oneTimeDesc"),
      cta: t("giveNow"),
      href: STRIPE_URL,
      accent: "amber",
      method: "Stripe",
    },
    {
      icon: Heart,
      title: t("monthlyTitle"),
      desc: t("monthlyDesc"),
      cta: t("giveNow"),
      href: PAYPAL_URL,
      accent: "blue",
      method: "PayPal",
    },
    {
      icon: BookOpen,
      title: t("sponsorTitle"),
      desc: t("sponsorDesc"),
      cta: t("giveNow"),
      href: PAGBANK_URL,
      accent: "indigo",
      method: "PagBank",
    },
  ];

  const impactStats = [
    { value: 190, suffix: "+", label: "Nations" },
    { value: 8, suffix: "M+", label: "Books Distributed" },
    { value: 1600, suffix: "+", label: "Pastors Connected" },
  ];

  return (
    <>
      <section className="pt-28 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title={t("heroTitle")} subtitle={t("heroSubtitle")} gradient />
        </div>
      </section>

      {/* Giving Options */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {options.map((opt, i) => (
              <GlassCard key={i} hover className="p-8 text-center flex flex-col">
                <div className="w-16 h-16 rounded-2xl bg-amber-500/10 flex items-center justify-center mx-auto mb-5">
                  <opt.icon className="w-8 h-8 text-amber-400" />
                </div>
                <h3 className="text-white font-semibold text-xl mb-3">
                  {opt.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                  {opt.desc}
                </p>
                <a
                  href={opt.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-semibold text-sm hover:from-amber-400 hover:to-amber-500 transition-all shadow-lg shadow-amber-500/20"
                >
                  <CreditCard className="w-4 h-4" />
                  {opt.cta} via {opt.method}
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-12 bg-slate-900/50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-gray-400 text-sm mb-6 uppercase tracking-wider font-semibold">
            {t("securePayments") || "Secure payment methods"}
          </p>
          <div className="flex flex-wrap justify-center gap-4 items-center">
            <a
              href={STRIPE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl glass-card text-gray-300 hover:text-white hover:border-amber-500/30 transition-colors flex items-center gap-2 font-semibold"
            >
              <CreditCard className="w-4 h-4 text-indigo-400" />
              Stripe
            </a>
            <a
              href={PAYPAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl glass-card text-gray-300 hover:text-white hover:border-amber-500/30 transition-colors flex items-center gap-2 font-semibold"
            >
              <CreditCard className="w-4 h-4 text-blue-400" />
              PayPal
            </a>
            <a
              href={PAGBANK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl glass-card text-gray-300 hover:text-white hover:border-amber-500/30 transition-colors flex items-center gap-2 font-semibold"
            >
              <CreditCard className="w-4 h-4 text-green-400" />
              PagBank
            </a>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title={t("impactTitle")} />
          <div className="grid grid-cols-3 gap-6">
            {impactStats.map((stat) => (
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

      {/* Quote / CTA */}
      <section className="py-24 bg-slate-900/50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-2xl sm:text-3xl text-gray-300 italic font-[family-name:var(--font-playfair)] leading-relaxed mb-6">
            &ldquo;Give, and it will be given to you. A good measure, pressed down, shaken together and running over.&rdquo;
          </p>
          <p className="text-amber-400 font-semibold mb-10">&mdash; Luke 6:38</p>
          <a
            href={STRIPE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-semibold text-base hover:from-amber-400 hover:to-amber-500 transition-all shadow-lg shadow-amber-500/20"
          >
            {t("giveNow") || "Give Now"}
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </section>
    </>
  );
}
