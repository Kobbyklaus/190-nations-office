"use client";

import { useState, useRef, useEffect } from "react";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { LANGUAGES } from "@/lib/constants";
import type { Locale } from "@/i18n/routing";
import { Globe } from "lucide-react";

export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const currentLang = LANGUAGES.find((l) => l.code === locale);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-2 py-1.5 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
      >
        <Globe className="w-4 h-4" />
        <span className="hidden sm:inline">{currentLang?.flag}</span>
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 w-40 bg-slate-800 border border-white/10 rounded-xl shadow-xl overflow-hidden">
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                router.replace(pathname, { locale: lang.code as Locale });
                setOpen(false);
              }}
              className={`w-full flex items-center gap-2 px-4 py-2.5 text-sm transition-colors ${
                locale === lang.code
                  ? "bg-amber-500/10 text-amber-400"
                  : "text-gray-300 hover:bg-white/5 hover:text-white"
              }`}
            >
              <span>{lang.flag}</span>
              <span>{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
