"use client";

import { useTranslations } from "next-intl";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import { SOCIAL_LINKS } from "@/lib/constants";
import { Mail, Phone, MessageCircle, Clock, Video, Globe, Camera, Shield } from "lucide-react";

const socialIcons: Record<string, React.ElementType> = {
  Youtube: Video,
  Facebook: Globe,
  Instagram: Camera,
};

export default function ContactPage() {
  const t = useTranslations("contact");

  return (
    <>
      <section className="pt-28 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title={t("heroTitle")} subtitle={t("heroSubtitle")} />
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Form */}
            <div className="lg:col-span-3">
              <GlassCard className="p-6 sm:p-8">
                <h3 className="text-xl font-semibold text-white mb-6">
                  {t("formTitle")}
                </h3>
                <form className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm text-gray-400 mb-1.5">
                        {t("firstName")}
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500/50 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-1.5">
                        {t("lastName")}
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500/50 transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-1.5">
                      {t("email")}
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500/50 transition-colors"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm text-gray-400 mb-1.5">
                        {t("whatsapp")}
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500/50 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-1.5">
                        {t("church")}
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500/50 transition-colors"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm text-gray-400 mb-1.5">
                        {t("country")}
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500/50 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-1.5">
                        {t("interest")}
                      </label>
                      <select className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-amber-500/50 transition-colors">
                        <option value="" className="bg-slate-900">Select...</option>
                        <option value="conference" className="bg-slate-900">Weekly Conference</option>
                        <option value="books" className="bg-slate-900">Free Books</option>
                        <option value="partnership" className="bg-slate-900">Church Partnership</option>
                        <option value="host" className="bg-slate-900">Host a Conference</option>
                        <option value="bible-school" className="bg-slate-900">Bible School</option>
                        <option value="donation" className="bg-slate-900">Donation</option>
                        <option value="general" className="bg-slate-900">General Inquiry</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-1.5">
                      {t("message")}
                    </label>
                    <textarea
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500/50 transition-colors resize-none"
                    />
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed flex items-start gap-2">
                    <Shield className="w-3.5 h-3.5 text-gray-500 flex-shrink-0 mt-0.5" />
                    <span>
                      {t("privacyNotice")}{" "}
                      <a
                        href="mailto:allnations@dhmm190.com?subject=Privacy%20policy%20request"
                        className="text-amber-400 hover:text-amber-300 underline"
                      >
                        {t("privacyLink")}
                      </a>
                      .
                    </span>
                  </p>
                  <Button type="submit" size="lg" className="w-full">
                    {t("submit")}
                  </Button>
                  <p className="text-xs text-gray-500 text-center">
                    {t("responseTimeNote")}
                  </p>
                </form>
              </GlassCard>
            </div>

            {/* Info Panel */}
            <div className="lg:col-span-2 space-y-6">
              <GlassCard className="p-6">
                <h3 className="text-lg font-semibold text-white mb-5">
                  {t("infoTitle")}
                </h3>
                <div className="space-y-4">
                  <a
                    href="mailto:allnations@dhmm190.com"
                    className="flex items-center gap-3 text-gray-300 hover:text-amber-400 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-amber-400" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">{t("emailLabel")}</p>
                      <p className="text-sm">allnations@dhmm190.com</p>
                    </div>
                  </a>
                  <a
                    href="tel:+447347084619"
                    className="flex items-center gap-3 text-gray-300 hover:text-amber-400 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-amber-400" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">
                        {t("phoneLabel")} · {t("phoneNote")}
                      </p>
                      <p className="text-sm">+44 7347 084619</p>
                    </div>
                  </a>
                  <a
                    href="https://wa.me/447348152218"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-300 hover:text-amber-400 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-5 h-5 text-amber-400" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">
                        {t("whatsappLabel")} · {t("whatsappNote")}
                      </p>
                      <p className="text-sm">+44 7348 152218</p>
                    </div>
                  </a>
                  <div className="flex items-center gap-3 text-gray-300">
                    <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-amber-400" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">{t("conferenceLabel")}</p>
                      <p className="text-sm">{t("conferenceValue")}</p>
                    </div>
                  </div>
                </div>
              </GlassCard>

              <GlassCard className="p-6">
                <h3 className="text-lg font-semibold text-white mb-4">
                  {t("socialTitle")}
                </h3>
                <div className="flex gap-3">
                  {SOCIAL_LINKS.map((social) => {
                    const Icon = socialIcons[social.icon];
                    return (
                      <a
                        key={social.platform}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 hover:text-amber-400 hover:bg-white/10 transition-colors"
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    );
                  })}
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
