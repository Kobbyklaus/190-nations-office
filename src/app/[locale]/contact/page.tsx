"use client";

import { useTranslations } from "next-intl";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import ContactForm from "@/components/ui/ContactForm";
import { SOCIAL_LINKS } from "@/lib/constants";
import { Mail, Phone, MessageCircle, Clock, Video, Globe, Camera } from "lucide-react";

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
                <ContactForm />
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
