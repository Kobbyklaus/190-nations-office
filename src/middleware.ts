import createMiddleware from "next-intl/middleware";
import { defineRouting } from "next-intl/routing";

const routing = defineRouting({
  locales: ["en", "fr", "es", "pt"],
  defaultLocale: "en",
});

export default createMiddleware(routing);

export const config = {
  matcher: ["/", "/(fr|es|pt|en)/:path*"],
};
