"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import Image from "next/image";
import { ArrowLeft, Lock } from "lucide-react";

export default function AdminPage() {
  const t = useTranslations("signIn");

  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Image
            src="/images/logo-white.gif"
            alt="190 Nations Office"
            width={64}
            height={64}
            className="rounded-full mx-auto mb-4 ring-2 ring-amber-500/30"
          />
          <h1 className="text-2xl font-bold font-[family-name:var(--font-playfair)] text-white">
            {t("title")}
          </h1>
          <p className="text-gray-400 text-sm mt-2">{t("subtitle")}</p>
        </div>

        <GlassCard className="p-6 sm:p-8">
          <form className="space-y-5">
            <div>
              <label className="block text-sm text-gray-400 mb-1.5">
                {t("password")}
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="password"
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500/50 transition-colors"
                />
              </div>
            </div>
            <Button type="submit" size="lg" className="w-full">
              {t("submit")}
            </Button>
          </form>
        </GlassCard>

        <div className="text-center mt-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-amber-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {t("backHome")}
          </Link>
        </div>
      </div>
    </div>
  );
}
