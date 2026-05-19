import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "fr", "es", "pt", "da", "hi", "ur"],
  defaultLocale: "en",
});

export const RTL_LOCALES = ["ur"];
