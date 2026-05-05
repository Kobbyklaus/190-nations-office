import { CONFERENCE_EVENTS } from "./constants";
import type { ConferenceEvent } from "@/types";

/**
 * Fetches conferences from a Google Sheet published as CSV.
 *
 * To use:
 *   1. Create a Google Sheet with columns: country, date, image, status
 *      - status must be "upcoming" or "past"
 *      - image is a public URL (or relative path under /images/)
 *      - date is a free-text string (e.g. "September 20, 2026")
 *   2. File → Share → Publish to web → CSV → publish, copy the URL
 *   3. Add the URL to .env.local as GOOGLE_SHEET_CONFERENCES_URL
 *   4. Redeploy
 *
 * If the env var is unset OR the fetch fails, this returns the hardcoded
 * CONFERENCE_EVENTS so the page never breaks.
 */
export async function getConferences(): Promise<ConferenceEvent[]> {
  const url = process.env.GOOGLE_SHEET_CONFERENCES_URL;
  if (!url) return CONFERENCE_EVENTS;

  try {
    const res = await fetch(url, {
      next: { revalidate: 300 }, // cache for 5 minutes
    });
    if (!res.ok) {
      console.warn(`[conferences] Sheet fetch failed: ${res.status}`);
      return CONFERENCE_EVENTS;
    }
    const csv = await res.text();
    const parsed = parseCsv(csv);
    if (parsed.length === 0) return CONFERENCE_EVENTS;
    return parsed;
  } catch (err) {
    console.warn("[conferences] Sheet fetch error, using fallback:", err);
    return CONFERENCE_EVENTS;
  }
}

function parseCsv(csv: string): ConferenceEvent[] {
  const lines = csv.trim().split(/\r?\n/);
  if (lines.length < 2) return [];

  const headers = splitCsvLine(lines[0]).map((h) => h.toLowerCase().trim());
  const idx = {
    country: headers.indexOf("country"),
    date: headers.indexOf("date"),
    image: headers.indexOf("image"),
    status: headers.indexOf("status"),
  };

  if (idx.country === -1 || idx.date === -1 || idx.status === -1) return [];

  const events: ConferenceEvent[] = [];
  for (let i = 1; i < lines.length; i++) {
    const cells = splitCsvLine(lines[i]);
    if (cells.length === 0 || !cells[idx.country]) continue;

    const status = cells[idx.status]?.toLowerCase().trim();
    if (status !== "upcoming" && status !== "past") continue;

    events.push({
      country: cells[idx.country].trim(),
      date: cells[idx.date]?.trim() || "",
      image: cells[idx.image]?.trim() || "/images/conf-dominican.jpeg",
      status,
    });
  }
  return events;
}

// Minimal CSV line splitter that handles double-quoted fields with commas inside.
function splitCsvLine(line: string): string[] {
  const cells: string[] = [];
  let current = "";
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (ch === '"') {
      if (inQuotes && line[i + 1] === '"') {
        current += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (ch === "," && !inQuotes) {
      cells.push(current);
      current = "";
    } else {
      current += ch;
    }
  }
  cells.push(current);
  return cells;
}
