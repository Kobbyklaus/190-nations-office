export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  country: string;
}

export interface Book {
  title: string;
  description: string;
  image?: string;
  category: string;
}

export interface LibraryBook {
  title: string;
  description: string;
  image: string;
  category: string;
  slug: string;
}

export interface RegionalData {
  region: string;
  churches: number;
  countries: number;
}

export interface TimelineEntry {
  year: string;
  title: string;
  description: string;
}

export interface ConferenceEvent {
  country: string;
  date: string;
  image: string;
  status: "upcoming" | "past" | "ongoing";
  /** Optional HH:MM (24h). Defaults to "10:00" when missing. */
  time?: string;
  /** Optional IANA TZ name (e.g. "America/Argentina/Buenos_Aires") or UTC offset like "UTC-3". Defaults to UTC. */
  timezone?: string;
}

export interface ScheduleItem {
  time: string;
  activity: string;
  duration: string;
}

export interface TeachingTopic {
  title: string;
  icon: string;
}
