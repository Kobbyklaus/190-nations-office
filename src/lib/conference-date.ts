import type { ConferenceEvent } from "@/types";

/**
 * Parse a conference date string into a UTC Date object.
 *
 * Accepts:
 *   date format: DD/MM/YYYY (e.g. "23/05/2026") — the format the sheet uses
 *                YYYY-MM-DD also works
 *                Free-text like "September 20, 2026" also handled by Date.parse
 *   time format: HH:MM 24-hour (e.g. "20:00") — defaults to "10:00"
 *   timezone:    "UTC", "UTC+3", "UTC-3", or omitted (defaults to UTC).
 *                Full IANA names not yet supported (would need Intl APIs).
 *
 * Returns null if the date can't be parsed at all.
 */
export function parseConferenceDateTime(
  date: string,
  time?: string,
  timezone?: string,
): Date | null {
  if (!date) return null;

  // Normalize time
  const tMatch = time?.match(/^(\d{1,2}):(\d{2})$/);
  const hh = tMatch ? tMatch[1].padStart(2, "0") : "10";
  const mm = tMatch ? tMatch[2] : "00";

  // Try DD/MM/YYYY first (the sheet's format)
  const ddmm = date.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
  let isoDate: string | null = null;
  if (ddmm) {
    const [, d, m, y] = ddmm;
    isoDate = `${y}-${m.padStart(2, "0")}-${d.padStart(2, "0")}`;
  } else {
    // Try YYYY-MM-DD
    const ymd = date.match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/);
    if (ymd) {
      const [, y, m, d] = ymd;
      isoDate = `${y}-${m.padStart(2, "0")}-${d.padStart(2, "0")}`;
    } else {
      // Last resort: rely on Date.parse for free-text like "September 20, 2026"
      const fallback = new Date(date);
      if (!isNaN(fallback.getTime())) return fallback;
      return null;
    }
  }

  // Compute UTC offset
  let offsetMinutes = 0;
  if (timezone) {
    const off = timezone.match(/^UTC([+-])(\d{1,2})(?::?(\d{2}))?$/i);
    if (off) {
      const sign = off[1] === "+" ? 1 : -1;
      const h = parseInt(off[2], 10) || 0;
      const m = parseInt(off[3] || "0", 10);
      offsetMinutes = sign * (h * 60 + m);
    }
  }

  // Build a UTC Date by treating local-time fields as UTC, then subtracting offset
  const baseUtcMs = Date.parse(`${isoDate}T${hh}:${mm}:00Z`);
  if (isNaN(baseUtcMs)) return null;
  // If timezone is UTC+3, the local time HH:MM corresponds to UTC time HH:MM - 3 hours.
  return new Date(baseUtcMs - offsetMinutes * 60 * 1000);
}

/**
 * Sort conferences by their start datetime ascending.
 * Conferences without a parseable date go to the end.
 */
export function sortByDate(conferences: ConferenceEvent[]): ConferenceEvent[] {
  return [...conferences].sort((a, b) => {
    const da = parseConferenceDateTime(a.date, a.time, a.timezone);
    const db = parseConferenceDateTime(b.date, b.time, b.timezone);
    if (!da && !db) return 0;
    if (!da) return 1;
    if (!db) return -1;
    return da.getTime() - db.getTime();
  });
}

/**
 * Format a Date as a human-friendly localized string (e.g. "23 May 2026, 10:00 UTC").
 * Uses Intl.DateTimeFormat in the given locale; defaults to en-GB style.
 */
export function formatConferenceDateTime(d: Date, locale = "en-GB"): string {
  try {
    return new Intl.DateTimeFormat(locale, {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "UTC",
      timeZoneName: "short",
    }).format(d);
  } catch {
    return d.toUTCString();
  }
}
