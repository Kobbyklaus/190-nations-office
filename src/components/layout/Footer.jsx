"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { NAV_LINKS, SOCIAL_LINKS } from "@/lib/constants";
import { Video, Globe, Camera, Mail, Phone } from "lucide-react";
import Image from "next/image";

const iconMap = {
  Youtube: Video,
  Facebook: Globe,
  Instagram: Camera,
};

export default function Footer() {
  const t = useTranslations("footer");
  const navT = useTranslations("nav");

  return (
    <footer className="bg-slate-900 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/logo-white.gif"
                alt="190 Nations Office"
                width={36}
                height={36}
                className="rounded-full"
              />
              <span className="text-lg font-semibold">190 Nations</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t("about")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">
              {t("quickLinks")}
            </h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-amber-400 transition-colors"
                  >
                    {navT(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">
              {t("connect")}
            </h3>
            <div className="space-y-3">
              <a
                href="mailto:allnations@dhmm190.com"
                className="flex items-center gap-2 text-gray-400 text-sm hover:text-amber-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
                allnations@dhmm190.com
              </a>
              <a
                href="tel:+447347084619"
                className="flex items-center gap-2 text-gray-400 text-sm hover:text-amber-400 transition-colors"
              >
                <Phone className="w-4 h-4" />
                +44 7347 084619
              </a>
              <div className="flex gap-3 mt-4">
                {SOCIAL_LINKS.map((social) => {
                  const Icon = iconMap[social.icon];
                  return (
                    <a
                      key={social.platform}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-white/5 text-gray-400 hover:text-amber-400 hover:bg-white/10 transition-colors"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Scripture */}
          <div>
            <div className="glass-card rounded-xl p-5">
              <p className="text-gray-300 text-sm italic leading-relaxed">
                &ldquo;{t("scripture")}&rdquo;
              </p>
              <p className="text-amber-400 text-sm font-medium mt-2">
                &mdash; {t("scriptureRef")}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} {t("copyright")}. {t("rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
