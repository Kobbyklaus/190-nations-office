import type {
  Testimonial,
  Book,
  RegionalData,
  TimelineEntry,
  ConferenceEvent,
  ScheduleItem,
  TeachingTopic,
} from "@/types";

export const STATS = [
  { value: 190, suffix: "+", label: "Nations Reached" },
  { value: 1600, suffix: "+", label: "Pastors Connected" },
  { value: 8, suffix: "M+", label: "Books Distributed" },
  { value: 52, suffix: "/yr", label: "Weekly Conferences" },
];

export const REGIONS: RegionalData[] = [
  { region: "South America", churches: 515, countries: 12 },
  { region: "North America", churches: 294, countries: 3 },
  { region: "Asia", churches: 233, countries: 25 },
  { region: "Europe", churches: 198, countries: 30 },
  { region: "Africa", churches: 145, countries: 20 },
  { region: "Oceania", churches: 92, countries: 5 },
  { region: "Caribbean", churches: 68, countries: 15 },
  { region: "Middle East", churches: 41, countries: 8 },
  { region: "Central America", churches: 41, countries: 7 },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "The weekly conferences have transformed how I lead my congregation. The teachings on church growth and leadership have been invaluable.",
    name: "Pastor James Okoye",
    role: "Senior Pastor",
    country: "Nigeria",
  },
  {
    quote:
      "Joining the 190 Nations network connected me with pastors across Latin America. We share resources and support each other every week.",
    name: "Pastor Carlos Mendoza",
    role: "Church Planter",
    country: "Chile",
  },
  {
    quote:
      "The free books have equipped our entire leadership team. Bishop Dag's teachings on loyalty and ministry have strengthened our church.",
    name: "Pastor Grace Njeri",
    role: "Lead Pastor",
    country: "Kenya",
  },
  {
    quote:
      "Bishop Dag Heward-Mills' books have changed my life and ministry. The practical teachings helped me grow from 30 to over 200 members.",
    name: "Pastor Ibrahim Moussa",
    role: "Senior Pastor",
    country: "Chad",
  },
  {
    quote:
      "Through the conferences, I learned principles of church planting that I never found anywhere else. My ministry has expanded to 3 new cities.",
    name: "Pastor Aleksandar Petrov",
    role: "Church Planter",
    country: "North Macedonia",
  },
  {
    quote:
      "The resources provided by 190 Nations Office have helped me train 50 new leaders in my region. The impact is immeasurable.",
    name: "Pastor Bilal Ahmed",
    role: "Regional Leader",
    country: "Pakistan",
  },
  {
    quote:
      "Every Saturday conference is a lifeline for pastors like me who serve in difficult regions. The encouragement keeps us going.",
    name: "Pastor Elias Khoury",
    role: "Pastor",
    country: "Lebanon",
  },
  {
    quote:
      "The Art of Leadership book series revolutionized my approach to ministry. I now lead with greater confidence and purpose.",
    name: "Pastor Wei Lin",
    role: "Senior Pastor",
    country: "Malaysia",
  },
  {
    quote:
      "Being connected to a global network of pastors has been the greatest blessing. We learn from each other and grow together.",
    name: "Pastor Ana Rodriguez",
    role: "Associate Pastor",
    country: "Dominican Republic",
  },
];

export const BOOKS: Book[] = [
  {
    title: "Loyalty & Disloyalty",
    description:
      "A foundational book on the critical role of loyalty in ministry and leadership.",
    image: "/images/book1.jpg",
    category: "Loyalty & Character",
  },
  {
    title: "Church Growth",
    description:
      "Practical strategies and biblical principles for growing a thriving church.",
    image: "/images/book2.jpg",
    category: "Church Growth",
  },
  {
    title: "The Art of Leadership",
    description:
      "Comprehensive guide to effective leadership in ministry and beyond.",
    image: "/images/book3.jpg",
    category: "Leadership & Ministry",
  },
  {
    title: "The Art of Shepherding",
    description:
      "Learn the heart and practices of effective pastoral care and shepherding.",
    image: "/images/book4.jpg",
    category: "Leadership & Ministry",
  },
  {
    title: "Church Planting",
    description:
      "Step-by-step guide to starting and establishing new churches worldwide.",
    image: "/images/book5.jpg",
    category: "Church Growth",
  },
  {
    title: "The Mega Church",
    description:
      "Insights into building and sustaining large, impactful congregations.",
    image: "/images/book6.jpg",
    category: "Church Growth",
  },
  {
    title: "Catch the Anointing",
    description:
      "Understanding and receiving the power of the Holy Spirit in ministry.",
    image: "/images/book7.jpg",
    category: "Spiritual Growth",
  },
  {
    title: "The Art of Hearing",
    description:
      "Developing sensitivity to God's voice for personal and ministry direction.",
    image: "/images/book8.jpg",
    category: "Spiritual Growth",
  },
  {
    title: "Those Who Leave You",
    description:
      "Handling pastoral challenges of members and leaders who depart.",
    image: "/images/book9.jpg",
    category: "Loyalty & Character",
  },
  {
    title: "Name It, Claim It, Take It",
    description:
      "Principles of faith and declaration for personal and ministry breakthroughs.",
    image: "/images/book10.jpg",
    category: "Spiritual Growth",
  },
  {
    title: "Tell Them",
    description:
      "The call to evangelism and sharing the gospel with boldness and compassion.",
    image: "/images/book11.jpg",
    category: "Spiritual Growth",
  },
  {
    title: "Transform Your Pastoral Ministry",
    description:
      "Practical steps to elevate every aspect of pastoral leadership.",
    image: "/images/book12.jpg",
    category: "Leadership & Ministry",
  },
  {
    title: "Many Are Called",
    description:
      "Understanding God's calling and the responsibility that comes with it.",
    image: "/images/book13.jpg",
    category: "Leadership & Ministry",
  },
  {
    title: "Backsliding",
    description:
      "Addressing the dangers of spiritual decline and how to prevent it.",
    image: "/images/book14.jpg",
    category: "Loyalty & Character",
  },
  {
    title: "What It Means to Be As Wise As a Serpent",
    description:
      "Biblical wisdom for navigating complex ministry situations.",
    image: "/images/book15.jpg",
    category: "Loyalty & Character",
  },
  {
    title: "Bearing Precious Seed",
    description:
      "The importance of sowing and investing in the Kingdom of God.",
    image: "/images/book16.jpg",
    category: "Spiritual Growth",
  },
];

export const TIMELINE: TimelineEntry[] = [
  {
    year: "1988",
    title: "Ministry Founded",
    description:
      "Dag Heward-Mills begins his ministry, establishing the foundation for global outreach.",
  },
  {
    year: "1998",
    title: "First Books Published",
    description:
      "Initial publications begin reaching pastors and leaders across Africa and beyond.",
  },
  {
    year: "2005",
    title: "Global Expansion",
    description:
      "Ministry expands to multiple continents, establishing partnerships in Asia and Europe.",
  },
  {
    year: "2010",
    title: "100 Nations Reached",
    description:
      "The ministry crosses the milestone of impacting pastors in over 100 nations.",
  },
  {
    year: "2015",
    title: "Digital Transformation",
    description:
      "Launch of online conferences and digital book distribution, reaching remote areas.",
  },
  {
    year: "2020",
    title: "Weekly Global Conferences",
    description:
      "Saturday pastoral conferences go fully online, connecting 1,000+ pastors weekly.",
  },
  {
    year: "2024",
    title: "190 Nations Office Established",
    description:
      "Formal establishment of the 190 Nations Office to coordinate global pastoral equipping.",
  },
  {
    year: "2026",
    title: "Continuing the Mission",
    description:
      "Expanding to new regions with conferences in the Caribbean and Central America.",
  },
];

export const CONFERENCE_EVENTS: ConferenceEvent[] = [
  {
    country: "Dominican Republic",
    date: "September 20, 2026",
    image: "/images/conf-dominican.jpeg",
    status: "upcoming",
  },
  {
    country: "Chile",
    date: "2025",
    image: "/images/conf-chile.jpeg",
    status: "past",
  },
  {
    country: "Honduras",
    date: "2025",
    image: "/images/conf-honduras.jpeg",
    status: "past",
  },
  {
    country: "Uruguay",
    date: "2025",
    image: "/images/conf-uruguay.jpeg",
    status: "past",
  },
  {
    country: "Dominican Republic",
    date: "2025",
    image: "/images/conf8.jpg",
    status: "past",
  },
  {
    country: "Latin America",
    date: "2025",
    image: "/images/conf3.jpg",
    status: "past",
  },
  {
    country: "Global Conference",
    date: "2025",
    image: "/images/conf4.jpg",
    status: "past",
  },
];

export const CONFERENCE_SCHEDULE: ScheduleItem[] = [
  { time: "10:00 AM", activity: "Welcome & Opening", duration: "10 min" },
  { time: "10:10 AM", activity: "Worship Session", duration: "15 min" },
  { time: "10:25 AM", activity: "Teaching Session", duration: "45 min" },
  { time: "11:10 AM", activity: "Q&A Discussion", duration: "15 min" },
  { time: "11:25 AM", activity: "Prayer & Impartation", duration: "15 min" },
  { time: "11:40 AM", activity: "Announcements & Close", duration: "10 min" },
];

export const TEACHING_TOPICS: TeachingTopic[] = [
  { title: "Church Planting", icon: "Church" },
  { title: "Leadership Development", icon: "Users" },
  { title: "Pastoral Care", icon: "Heart" },
  { title: "Evangelism", icon: "Globe" },
  { title: "Financial Management", icon: "DollarSign" },
  { title: "Youth Ministry", icon: "GraduationCap" },
  { title: "Marriage & Family", icon: "Home" },
  { title: "Worship & Prayer", icon: "Music" },
  { title: "Biblical Studies", icon: "BookOpen" },
  { title: "Church Administration", icon: "ClipboardList" },
  { title: "Missions & Outreach", icon: "Map" },
  { title: "Spiritual Warfare", icon: "Shield" },
];

export const NAV_LINKS = [
  { href: "/", label: "Home", key: "home" },
  { href: "/about", label: "About", key: "about" },
  { href: "/conferences", label: "Conferences", key: "conferences" },
  { href: "/books", label: "Books", key: "books" },
  { href: "/bible-school", label: "Bible School", key: "bibleSchool" },
  { href: "/contact", label: "Contact", key: "contact" },
  { href: "/give", label: "Give", key: "give" },
];

export const SOCIAL_LINKS = [
  { platform: "YouTube", url: "https://youtube.com/@daghewardmills", icon: "Youtube" },
  { platform: "Facebook", url: "https://facebook.com/daghewardmills", icon: "Facebook" },
  { platform: "Instagram", url: "https://instagram.com/daghewardmills", icon: "Instagram" },
];

export const LANGUAGES = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "fr", label: "Fran\u00e7ais", flag: "🇫🇷" },
  { code: "es", label: "Espa\u00f1ol", flag: "🇪🇸" },
  { code: "pt", label: "Portugu\u00eas", flag: "🇧🇷" },
];

export const BOOK_LANGUAGES = [
  "English", "French", "Spanish", "Portuguese", "Swahili", "Arabic",
  "Chinese", "Hindi", "Russian", "German", "Italian", "Korean",
  "Japanese", "Turkish", "Thai", "Vietnamese", "Indonesian", "Malay",
  "Tagalog", "Hausa", "Yoruba", "Igbo", "Amharic", "Twi",
  "Ewe", "Ga", "Lingala", "Shona", "Zulu", "Afrikaans",
  "Dutch", "Polish", "Romanian", "Hungarian", "Czech", "Serbian",
  "Croatian", "Bulgarian", "Greek", "Hebrew", "Persian", "Urdu",
  "Bengali", "Tamil", "Telugu", "Malayalam", "Kannada", "Nepali",
  "Burmese", "Khmer",
];
