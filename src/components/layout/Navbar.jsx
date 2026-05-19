"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";
import MobileMenu from "./MobileMenu";

const navLinks = [
  { href: "/", key: "home" },
  { href: "/about", key: "about" },
  { href: "/conferences", key: "conferences" },
  { href: "/books", key: "books" },
  { href: "/bible-school", key: "bibleSchool" },
  { href: "/contact", key: "contact" },
  { href: "/give", key: "give" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const t = useTranslations("nav");
  const pathname = usePathname();

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/logo-white.gif"
                alt="190 Nations Office"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="text-lg font-semibold hidden sm:block">
                190 Nations
              </span>
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.key}
                    href={link.href}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? "text-amber-400 bg-white/10"
                        : "text-gray-300 hover:text-amber-400 hover:bg-white/5"
                    }`}
                  >
                    {t(link.key)}
                  </Link>
                );
              })}
            </div>

            <div className="flex items-center gap-3">
              <LanguageSwitcher />
              <a
                href="https://www.dhmm190.com/accounts/login/"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex px-4 py-2 text-sm font-medium rounded-lg bg-amber-500 text-slate-950 hover:bg-amber-400 transition-colors"
              >
                {t("signIn")}
              </a>
              <button
                onClick={() => setMobileOpen(true)}
                className="lg:hidden p-2 text-gray-300 hover:text-white"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <MobileMenu
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        links={navLinks}
      />
    </>
  );
}
