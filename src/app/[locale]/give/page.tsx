"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import {
  Gift,
  Heart,
  BookOpen,
  ExternalLink,
  CreditCard,
  Banknote,
  Shield,
  ArrowRight,
} from "lucide-react";

const STRIPE_URL = "https://buy.stripe.com/9AQ4jN72z3dcdNefZc";
const PAYPAL_URL = "https://www.paypal.com/donate/?hosted_button_id=ANJA968AS654E";
const PAGBANK_URL = "https://pag.ae/7ZXA8iT66";

type Frequency = "oneTime" | "monthly" | "sponsor";

export default function GivePage() {
  const t = useTranslations("give");
  const [frequency, setFrequency] = useState<Frequency>("oneTime");

  const frequencies = [
    {
      key: "oneTime" as Frequency,
      icon: Gift,
      title: t("oneTimeTitle"),
      desc: t("oneTimeDesc"),
    },
    {
      key: "monthly" as Frequency,
      icon: Heart,
      title: t("monthlyTitle"),
      desc: t("monthlyDesc"),
    },
    {
      key: "sponsor" as Frequency,
      icon: BookOpen,
      title: t("sponsorTitle"),
      desc: t("sponsorDesc"),
    },
  ];

  const methods = [
    {
      key: "stripe",
      label: t("methodStripe"),
      desc: t("methodStripeDesc"),
      url: STRIPE_URL,
    },
    {
      key: "paypal",
      label: t("methodPayPal"),
      desc: t("methodPayPalDesc"),
      url: PAYPAL_URL,
    },
    {
      key: "pagbank",
      label: t("methodPagBank"),
      desc: t("methodPagBankDesc"),
      url: PAGBANK_URL,
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

      {/* Step 1: Choose frequency */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title={t("frequencyTitle")}
            subtitle={t("frequencySubtitle")}
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {frequencies.map((opt) => {
              const isActive = frequency === opt.key;
              return (
                <button
                  key={opt.key}
                  onClick={() => setFrequency(opt.key)}
                  className={`text-left rounded-2xl p-6 sm:p-8 border-2 transition-all ${
                    isActive
                      ? "border-amber-500 bg-amber-500/10"
                      : "border-white/10 bg-white/5 hover:border-amber-500/40 hover:bg-white/10"
                  }`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-amber-500/10 flex items-center justify-center">
                      <opt.icon className="w-7 h-7 text-amber-400" />
                    </div>
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        isActive ? "border-amber-400 bg-amber-400" : "border-white/30"
                      }`}
                    >
                      {isActive && <div className="w-2 h-2 rounded-full bg-slate-950" />}
                    </div>
                  </div>
                  <h3 className="text-white font-semibold text-xl mb-2">{opt.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{opt.desc}</p>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Step 2: Choose payment method */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title={t("methodTitle")} subtitle={t("methodSubtitle")} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {methods.map((m) => (
              <GlassCard key={m.key} hover className="p-6 flex flex-col">
                <div className="flex items-center gap-3 mb-3">
                  <CreditCard className="w-5 h-5 text-amber-400" />
                  <h3 className="text-white font-semibold text-lg">{m.label}</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                  {m.desc}
                </p>
                <a
                  href={m.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-semibold text-sm hover:from-amber-400 hover:to-amber-500 transition-all shadow-lg shadow-amber-500/20"
                >
                  {t("giveNow")}
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </GlassCard>
            ))}
          </div>

          <p className="text-center text-gray-500 text-xs mt-6 flex items-center justify-center gap-2">
            <Shield className="w-3.5 h-3.5" />
            {t("securePayments")}
          </p>
        </div>
      </section>

      {/* Bank transfer + tax info */}
      <section className="pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <GlassCard className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <Banknote className="w-5 h-5 text-amber-400" />
              <h3 className="text-white font-semibold text-lg">{t("bankTransferTitle")}</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              {t("bankTransferDesc")}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 text-sm font-semibold"
            >
              {t("contactForBank")}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </GlassCard>

          <GlassCard className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <Shield className="w-5 h-5 text-amber-400" />
              <h3 className="text-white font-semibold text-lg">{t("taxNoticeTitle")}</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t("taxNoticeDesc")}
            </p>
          </GlassCard>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-24 bg-slate-900/50">
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
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-2xl sm:text-3xl text-gray-300 italic font-[family-name:var(--font-playfair)] leading-relaxed mb-6">
            &ldquo;Give, and it will be given to you. A good measure, pressed down, shaken together and running over.&rdquo;
          </p>
          <p className="text-amber-400 font-semibold">&mdash; Luke 6:38</p>
        </div>
      </section>
    </>
  );
}
