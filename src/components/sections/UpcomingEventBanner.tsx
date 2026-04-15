"use client";

import { Link } from "@/i18n/navigation";
import { Calendar, MapPin, ArrowRight } from "lucide-react";

interface UpcomingEventBannerProps {
  title: string;
  location: string;
  date: string;
}

export default function UpcomingEventBanner({
  title,
  location,
  date,
}: UpcomingEventBannerProps) {
  return (
    <div className="bg-gradient-to-r from-amber-600 to-amber-500 text-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/conferences"
          className="flex flex-col sm:flex-row items-center justify-between gap-2 py-3 text-sm font-medium"
        >
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <span className="font-semibold">{title}</span>
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              {location}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {date}
            </span>
          </div>
          <span className="flex items-center gap-1 font-semibold">
            Learn more <ArrowRight className="w-4 h-4" />
          </span>
        </Link>
      </div>
    </div>
  );
}
