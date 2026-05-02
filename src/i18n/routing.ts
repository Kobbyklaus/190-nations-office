import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "fr", "es", "pt", "da", "hi", "ur"],
  defaultLocale: "en",
});

export type Locale = (typeof routing.locales)[number];

export const RTL_LOCALES: Locale[] = ["ur"];
