import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "190 Nations Office",
    template: "%s | 190 Nations Office",
  },
  description:
    "A global ministry dedicated to equipping pastors and church leaders with the resources they need to fulfil their calling.",
  manifest: "/manifest.json",
};

export const viewport = {
  themeColor: "#0f172a",
};

export default function RootLayout({
  children,
}) {
  return children;
}
