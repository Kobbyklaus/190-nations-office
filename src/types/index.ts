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
