"use client";

import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: { href: string; key: string }[];
}

export default function MobileMenu({ isOpen, onClose, links }: MobileMenuProps) {
  const t = useTranslations("nav");
  const pathname = usePathname();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-50 lg:hidden"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-72 bg-slate-900 z-50 lg:hidden border-l border-white/10"
          >
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <span className="text-lg font-semibold">Menu</span>
              <button
                onClick={onClose}
                className="p-2 text-gray-300 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-4 flex flex-col gap-1">
              {links.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.key}
                    href={link.href as "/"}
                    onClick={onClose}
                    className={`px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                      isActive
                        ? "text-amber-400 bg-white/10"
                        : "text-gray-300 hover:text-amber-400 hover:bg-white/5"
                    }`}
                  >
                    {t(link.key)}
                  </Link>
                );
              })}
              <Link
                href="/admin"
                onClick={onClose}
                className="mt-4 px-4 py-3 text-center rounded-lg bg-amber-500 text-slate-950 font-semibold hover:bg-amber-400 transition-colors"
              >
                {t("signIn")}
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
