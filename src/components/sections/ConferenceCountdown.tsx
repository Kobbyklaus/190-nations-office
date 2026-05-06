"use client";

import { useEffect, useState } from "react";
import { Calendar, MapPin, Clock } from "lucide-react";
import type { ConferenceEvent } from "@/types";
import { parseConferenceDateTime, formatConferenceDateTime } from "@/lib/conference-date";

interface ConferenceCountdownProps {
  conferences: ConferenceEvent[];
  /** Locale for date formatting (e.g. "es", "fr"). Falls back to "en-GB". */
  locale?: string;
  labels?: Partial<typeof DEFAULT_LABELS>;
}

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
}: ConferenceCountdownProps) {
  const labels = { ...DEFAULT_LABELS, ...customLabels };
  const [now, setNow] = useState<number>(() => Date.now());

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
    .filter((c): c is { event: ConferenceEvent; dt: Date } => c.dt !== null)
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

  const formatted = formatConferenceDateTime(target.dt, locale);

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
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
          <Calendar className="w-3.5 h-3.5" />
          {labels.next}
        </div>

        <h2 className="text-2xl sm:text-4xl font-bold text-white mb-2 font-[family-name:var(--font-playfair)]">
          {target.event.country}
        </h2>

        <div className="flex items-center justify-center gap-4 text-gray-300 text-sm mb-7 flex-wrap">
          <span className="inline-flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-amber-400" />
            {formatted}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-amber-400" />
            {target.event.country}
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
            <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-xl mx-auto">
              <CountBox value={days} label={labels.days} />
              <CountBox value={hours} label={labels.hours} />
              <CountBox value={minutes} label={labels.minutes} />
              <CountBox value={seconds} label={labels.seconds} />
            </div>
          </>
        )}
      </div>
    </section>
  );
}

function CountBox({ value, label }: { value: number; label: string }) {
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
