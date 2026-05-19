"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Calendar, MapPin, Clock } from "lucide-react";
import { parseConferenceDateTime, formatConferenceLocal } from "@/lib/conference-date";

const DEFAULT_LABELS = {
  next: "Next conference",
  startsIn: "Starts in",
  days: "Days",
  hours: "Hours",
  minutes: "Minutes",
  seconds: "Seconds",
  liveNow: "Live now — join us!",
  noUpcoming: "No upcoming conferences scheduled.",
};

/**
 * Show a live countdown to the next upcoming conference.
 * When the current target passes, automatically advances to the next one.
 * Renders nothing if there are no upcoming conferences with parseable dates.
 */
export default function ConferenceCountdown({
  conferences,
  locale = "en-GB",
  labels: customLabels,
}) {
  const labels = { ...DEFAULT_LABELS, ...customLabels };
  const [now, setNow] = useState(() => Date.now());

  // Tick once a second
  useEffect(() => {
    const id = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(id);
  }, []);

  // Find the next upcoming conference whose datetime is still in the future.
  // Recompute each tick so when one passes, the next slides in automatically.
  const upcomingFuture = conferences
    .filter((c) => c.status === "upcoming")
    .map((c) => ({
      event: c,
      dt: parseConferenceDateTime(c.date, c.time, c.timezone),
    }))
    .filter((c) => c.dt !== null)
    .filter((c) => c.dt.getTime() + 1000 * 60 * 60 * 4 > now) // keep "live" for 4h after start
    .sort((a, b) => a.dt.getTime() - b.dt.getTime());

  if (upcomingFuture.length === 0) {
    return null;
  }

  const target = upcomingFuture[0];
  const diff = target.dt.getTime() - now;
  const live = diff <= 0;

  const days = Math.max(0, Math.floor(diff / 86_400_000));
  const hours = Math.max(0, Math.floor((diff % 86_400_000) / 3_600_000));
  const minutes = Math.max(0, Math.floor((diff % 3_600_000) / 60_000));
  const seconds = Math.max(0, Math.floor((diff % 60_000) / 1000));

  const formatted = formatConferenceLocal(
    target.event.date,
    target.event.time,
    target.event.timezone,
    locale,
  );

  return (
    <section className="relative bg-gradient-to-br from-amber-500/10 via-slate-900 to-slate-950 border-y border-amber-500/30 py-10 sm:py-14 overflow-hidden">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 20%, rgba(251,191,36,0.18), transparent 55%)",
        }}
        aria-hidden
      />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-6 mx-auto block w-fit">
          <Calendar className="w-3.5 h-3.5 inline" />
          <span className="ml-1.5">{labels.next}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 items-center">
          {/* Flyer */}
          <div className="relative aspect-square sm:aspect-[4/5] md:aspect-square w-full max-w-md mx-auto md:max-w-none rounded-2xl overflow-hidden ring-2 ring-amber-500/40 shadow-2xl shadow-amber-500/20">
            {target.event.image ? (
              <Image
                src={target.event.image}
                alt={`${target.event.country} conference flyer`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 90vw, 40vw"
                priority
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 via-amber-700/10 to-slate-900 flex items-center justify-center">
                <MapPin className="w-12 h-12 text-amber-400/70" />
              </div>
            )}
          </div>

          {/* Country + countdown */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 font-[family-name:var(--font-playfair)]">
              {target.event.country}
            </h2>

            <div className="flex items-center justify-center md:justify-start gap-4 text-gray-300 text-sm mb-7 flex-wrap">
              <span className="inline-flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-amber-400" />
                {formatted}
              </span>
            </div>

            {live ? (
              <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-red-500 to-amber-500 text-slate-950 font-bold text-xl">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white/70" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-white" />
                </span>
                {labels.liveNow}
              </div>
            ) : (
              <>
                <p className="text-xs uppercase tracking-wider text-amber-400/80 font-semibold mb-3">
                  {labels.startsIn}
                </p>
                <div className="grid grid-cols-4 gap-2 sm:gap-3">
                  <CountBox value={days} label={labels.days} />
                  <CountBox value={hours} label={labels.hours} />
                  <CountBox value={minutes} label={labels.minutes} />
                  <CountBox value={seconds} label={labels.seconds} />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function CountBox({ value, label }) {
  return (
    <div className="rounded-xl bg-slate-900/70 border border-amber-500/20 p-3 sm:p-4">
      <div className="text-3xl sm:text-5xl font-bold tabular-nums text-amber-400 leading-none">
        {value.toString().padStart(2, "0")}
      </div>
      <div className="mt-2 text-[10px] sm:text-xs uppercase tracking-wider text-gray-400">
        {label}
      </div>
    </div>
  );
}
