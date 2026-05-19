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
  Smartphone,
  Shield,
  ArrowRight,
  X,
  Copy,
  Check,
} from "lucide-react";

const STRIPE_URL = "https://buy.stripe.com/9AQ4jN72z3dcdNefZc";
const PAYPAL_URL = "https://www.paypal.com/donate/?hosted_button_id=ANJA968AS654E";

// UK bank account shown in the Pay-by-Bank-app modal.
// Source: dhmm190.com offering page.
const UK_BANK = {
  accountName: "E-Conference DHMM",
  accountNumber: "0307 4930",
  sortCode: "04-00-03",
};

export default function GivePage() {
  const t = useTranslations("give");
  const [frequency, setFrequency] = useState("oneTime");
  const [bankAppOpen, setBankAppOpen] = useState(false);

  const frequencies = [
    {
      key: "oneTime",
      icon: Gift,
      title: t("oneTimeTitle"),
      desc: t("oneTimeDesc"),
    },
    {
      key: "monthly",
      icon: Heart,
      title: t("monthlyTitle"),
      desc: t("monthlyDesc"),
    },
    {
      key: "sponsor",
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
      icon: CreditCard,
    },
    {
      key: "paypal",
      label: t("methodPayPal"),
      desc: t("methodPayPalDesc"),
      url: PAYPAL_URL,
      icon: CreditCard,
    },
    {
      key: "bank-app",
      label: t("methodBankApp"),
      desc: t("methodBankAppDesc"),
      cta: t("methodBankAppCta"),
      icon: Smartphone,
      onClick: () => setBankAppOpen(true),
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
            {methods.map((m) => {
              const Icon = m.icon;
              return (
                <GlassCard key={m.key} hover className="p-6 flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <Icon className="w-5 h-5 text-amber-400" />
                    <h3 className="text-white font-semibold text-lg">{m.label}</h3>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                    {m.desc}
                  </p>
                  {"url" in m ? (
                    <a
                      href={m.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-semibold text-sm hover:from-amber-400 hover:to-amber-500 transition-all shadow-lg shadow-amber-500/20"
                    >
                      {t("giveNow")}
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <button
                      type="button"
                      onClick={m.onClick}
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-semibold text-sm hover:from-amber-400 hover:to-amber-500 transition-all shadow-lg shadow-amber-500/20"
                    >
                      {m.cta}
                      <Smartphone className="w-3.5 h-3.5" />
                    </button>
                  )}
                </GlassCard>
              );
            })}
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

      {bankAppOpen && (
        <BankAppModal
          onClose={() => setBankAppOpen(false)}
          modalTitle={t("bankAppModalTitle")}
          heading={t("bankAppHeading")}
          accountNameLabel={t("bankAppAccountName")}
          accountNumberLabel={t("bankAppAccountNumber")}
          sortCodeLabel={t("bankAppSortCode")}
          copyLabel={t("bankAppCopy")}
          copiedLabel={t("bankAppCopyDone")}
          note={t("bankAppNote")}
        />
      )}
    </>
  );
}

function BankAppModal({
  onClose,
  modalTitle,
  heading,
  accountNameLabel,
  accountNumberLabel,
  sortCodeLabel,
  copyLabel,
  copiedLabel,
  note,
}) {
  const [copied, setCopied] = useState(null);

  const copy = (label, value) => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(value).then(() => {
        setCopied(label);
        window.setTimeout(() => setCopied(null), 1500);
      });
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md rounded-2xl bg-white text-slate-900 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-5 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <span className="text-sm font-bold uppercase tracking-wider">{modalTitle}</span>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-md hover:bg-white/20 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="p-7 sm:p-8">
          <h2 className="text-center text-2xl font-bold mb-6 font-[family-name:var(--font-playfair)]">
            {heading}
          </h2>
          <BankRow
            label={accountNameLabel}
            value={UK_BANK.accountName}
            copied={copied === accountNameLabel}
            copyLabel={copyLabel}
            copiedLabel={copiedLabel}
            onCopy={() => copy(accountNameLabel, UK_BANK.accountName)}
          />
          <BankRow
            label={accountNumberLabel}
            value={UK_BANK.accountNumber}
            mono
            copied={copied === accountNumberLabel}
            copyLabel={copyLabel}
            copiedLabel={copiedLabel}
            onCopy={() => copy(accountNumberLabel, UK_BANK.accountNumber.replace(/\s/g, ""))}
          />
          <BankRow
            label={sortCodeLabel}
            value={UK_BANK.sortCode}
            mono
            copied={copied === sortCodeLabel}
            copyLabel={copyLabel}
            copiedLabel={copiedLabel}
            onCopy={() => copy(sortCodeLabel, UK_BANK.sortCode)}
          />
          <p className="mt-6 text-xs text-slate-500 text-center leading-relaxed">{note}</p>
        </div>
      </div>
    </div>
  );
}

function BankRow({
  label,
  value,
  mono,
  copied,
  copyLabel,
  copiedLabel,
  onCopy,
}) {
  return (
    <div className="mb-5 text-center">
      <p className="text-red-700 font-bold text-base mb-1">{label}</p>
      <div className="flex items-center justify-center gap-2">
        <p className={`text-slate-900 ${mono ? "font-mono tracking-wider" : ""}`}>{value}</p>
        <button
          type="button"
          onClick={onCopy}
          className="ml-1 inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
          aria-label={copied ? copiedLabel : copyLabel}
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-green-600" />
              <span>{copiedLabel}</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>{copyLabel}</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
