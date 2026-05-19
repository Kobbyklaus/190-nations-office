// Toggle the live conference room links on/off across the site.
// Set to true once the conference-stream service is back online.
export const CONFERENCE_LIVE_ENABLED = false;

// Per-locale book download domain. The "books" word is translated:
//   - English: dagbooks
//   - Spanish: daglibros (libros)
//   - French: daglivres (livres)
//   - Portuguese: daglivros (livros)
// Danish, Hindi, and Urdu localized subdomains aren't live yet —
// they fall back to dagbooks.org so links work today. Update each
// value below as the localized subdomain comes online.
export const BOOK_DOMAIN_BY_LOCALE = {
  en: "190.dagbooks.org",
  es: "190.daglibros.org",
  fr: "190.daglivres.org",
  pt: "190.daglivros.org",
  da: "190.dagbooks.org", // TODO: switch to localized when subdomain is live
  hi: "190.dagbooks.org", // TODO: switch to localized when subdomain is live
  ur: "190.dagbooks.org", // TODO: switch to localized when subdomain is live
};

export function bookUrlFor(locale, slug) {
  const domain = BOOK_DOMAIN_BY_LOCALE[locale] ?? BOOK_DOMAIN_BY_LOCALE.en;
  return `https://${domain}/book/${slug}`;
}

export const STATS = [
  { value: 190, suffix: "+", label: "Nations Reached" },
  { value: 1600, suffix: "+", label: "Pastors Connected" },
  { value: 8, suffix: "M+", label: "Books Distributed" },
  { value: 52, suffix: "/yr", label: "Weekly Conferences" },
];

export const REGIONS = [
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

export const TESTIMONIALS = [
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

export const BOOKS = [
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

export const TIMELINE = [
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

export const CONFERENCE_EVENTS = [
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

export const CONFERENCE_SCHEDULE = [
  { time: "10:00 AM", activity: "Welcome & Opening", duration: "10 min" },
  { time: "10:10 AM", activity: "Worship Session", duration: "15 min" },
  { time: "10:25 AM", activity: "Teaching Session", duration: "45 min" },
  { time: "11:10 AM", activity: "Q&A Discussion", duration: "15 min" },
  { time: "11:25 AM", activity: "Prayer & Impartation", duration: "15 min" },
  { time: "11:40 AM", activity: "Announcements & Close", duration: "10 min" },
];

export const TEACHING_TOPICS = [
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
  { code: "da", label: "Dansk", flag: "🇩🇰" },
  { code: "hi", label: "हिन्दी", flag: "🇮🇳" },
  { code: "ur", label: "اردو", flag: "🇵🇰" },
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
// 104 books generated

export const LIBRARY_BOOKS = [
  {
    title: "100 Percent Answered Prayer",
    description: "100 Percent Answered Prayer — a teaching by Bishop Dag Heward-Mills on prayer & devotion.",
    image: "/images/books/100_percent_answered_prayer.jpg",
    category: "Prayer & Devotion",
    slug: "100-percent-answered-prayer",
  },
  {
    title: "A Good General",
    description: "A Good General — a teaching by Bishop Dag Heward-Mills on servant ministry.",
    image: "/images/books/a_good_general.jpg",
    category: "Servant Ministry",
    slug: "a-good-general",
  },
  {
    title: "Am I Good for Nothing",
    description: "Am I Good for Nothing — a teaching by Bishop Dag Heward-Mills on christian living.",
    image: "/images/books/am_i_good_for_nothing.jpg",
    category: "Christian Living",
    slug: "am-i-good-for-nothing",
  },
  {
    title: "Amplify Your Ministry",
    description: "Amplify Your Ministry — a teaching by Bishop Dag Heward-Mills on church growth.",
    image: "/images/books/amplify_your_ministry.jpg",
    category: "Church Growth",
    slug: "amplify-your-ministry",
  },
  {
    title: "Anagkazo",
    description: "Anagkazo — a teaching by Bishop Dag Heward-Mills on christian living.",
    image: "/images/books/anagkazo.jpg",
    category: "Christian Living",
    slug: "anagkazo",
  },
  {
    title: "Attempt Great Things for God",
    description: "Attempt Great Things for God — a teaching by Bishop Dag Heward-Mills on servant ministry.",
    image: "/images/books/attempt_great_things_for_god.jpg",
    category: "Servant Ministry",
    slug: "attempt-great-things-for-god",
  },
  {
    title: "Backsliding",
    description: "Backsliding — a teaching by Bishop Dag Heward-Mills on spiritual warfare.",
    image: "/images/books/backsliding.jpg",
    category: "Spiritual Warfare",
    slug: "backsliding",
  },
  {
    title: "Be Thou Faithful unto Death",
    description: "Be Thou Faithful unto Death — a teaching by Bishop Dag Heward-Mills on faith & victory.",
    image: "/images/books/be_thou_faithful_unto_death.jpg",
    category: "Faith & Victory",
    slug: "be-thou-faithful-unto-death",
  },
  {
    title: "Bema",
    description: "Bema — a teaching by Bishop Dag Heward-Mills on christian living.",
    image: "/images/books/bema.jpeg",
    category: "Christian Living",
    slug: "bema",
  },
  {
    title: "Bible Memorization Handbook",
    description: "Bible Memorization Handbook — a teaching by Bishop Dag Heward-Mills on prayer & devotion.",
    image: "/images/books/bible_memorization_handbook.jpg",
    category: "Prayer & Devotion",
    slug: "bible-memorization-handbook",
  },
  {
    title: "Blood Power",
    description: "Blood Power — a teaching by Bishop Dag Heward-Mills on spiritual warfare.",
    image: "/images/books/blood_power.jpg",
    category: "Spiritual Warfare",
    slug: "blood-power",
  },
  {
    title: "Can't You Do Just a Little Bit More",
    description: "Can't You Do Just a Little Bit More — a teaching by Bishop Dag Heward-Mills on christian living.",
    image: "/images/books/cant_you_do_just_a_little_bit_more.jpg",
    category: "Christian Living",
    slug: "cant-you-do-just-a-little-bit-more",
  },
  {
    title: "Catch the Anointing",
    description: "Catch the Anointing — a teaching by Bishop Dag Heward-Mills on anointing & spirit.",
    image: "/images/books/catch_the_anointing.jpg",
    category: "Anointing & Spirit",
    slug: "catch-the-anointing",
  },
  {
    title: "Church Administration",
    description: "Church Administration — a teaching by Bishop Dag Heward-Mills on church growth.",
    image: "/images/books/church_administration.jpg",
    category: "Church Growth",
    slug: "church-administration",
  },
  {
    title: "Church Growth",
    description: "Church Growth — a teaching by Bishop Dag Heward-Mills on church growth.",
    image: "/images/books/church_growth.jpg",
    category: "Church Growth",
    slug: "church-growth",
  },
  {
    title: "Church Planting",
    description: "Church Planting — a teaching by Bishop Dag Heward-Mills on church growth.",
    image: "/images/books/church_planting.jpg",
    category: "Church Growth",
    slug: "church-planting",
  },
  {
    title: "Daughter, You Can Make It",
    description: "Daughter, You Can Make It — a teaching by Bishop Dag Heward-Mills on marriage & family.",
    image: "/images/books/daughter_you_can_make_it.jpg",
    category: "Marriage & Family",
    slug: "daughter-you-can-make-it",
  },
  {
    title: "Demons and How to Deal with Them",
    description: "Demons and How to Deal with Them — a teaching by Bishop Dag Heward-Mills on spiritual warfare.",
    image: "/images/books/demons_and_how_to_deal_with_them.jpg",
    category: "Spiritual Warfare",
    slug: "demons-and-how-to-deal-with-them",
  },
  {
    title: "Enlargement Secrets",
    description: "Enlargement Secrets — a teaching by Bishop Dag Heward-Mills on church growth.",
    image: "/images/books/enlargement_secrets.jpg",
    category: "Church Growth",
    slug: "enlargement-secrets",
  },
  {
    title: "Everything by Prayer, Nothing without Prayer",
    description: "Everything by Prayer, Nothing without Prayer — a teaching by Bishop Dag Heward-Mills on prayer & devotion.",
    image: "/images/books/everything_by_prayer_nothing_without_prayer.jpg",
    category: "Prayer & Devotion",
    slug: "everything-by-prayer-nothing-without-prayer",
  },
  {
    title: "Faith Secrets",
    description: "Faith Secrets — a teaching by Bishop Dag Heward-Mills on faith & victory.",
    image: "/images/books/faith_secrets.jpg",
    category: "Faith & Victory",
    slug: "faith-secrets",
  },
  {
    title: "Flow in the Anointing",
    description: "Flow in the Anointing — a teaching by Bishop Dag Heward-Mills on anointing & spirit.",
    image: "/images/books/flow_in_the_anointing.jpg",
    category: "Anointing & Spirit",
    slug: "flow-in-the-anointing",
  },
  {
    title: "Forgiveness Made Easy",
    description: "Forgiveness Made Easy — a teaching by Bishop Dag Heward-Mills on stewardship & honour.",
    image: "/images/books/forgiveness_made_easy.jpg",
    category: "Stewardship & Honour",
    slug: "forgiveness-made-easy",
  },
  {
    title: "Fruitfulness",
    description: "Fruitfulness — a teaching by Bishop Dag Heward-Mills on faith & victory.",
    image: "/images/books/fruitfulness.jpg",
    category: "Faith & Victory",
    slug: "fruitfulness",
  },
  {
    title: "Going Deeper and Doing More",
    description: "Going Deeper and Doing More — a teaching by Bishop Dag Heward-Mills on christian living.",
    image: "/images/books/going_deeper_and_doing_more.jpg",
    category: "Christian Living",
    slug: "going-deeper-and-doing-more",
  },
  {
    title: "Handbook of Ceremonies",
    description: "Handbook of Ceremonies — a teaching by Bishop Dag Heward-Mills on church growth.",
    image: "/images/books/handbook_of_ceremonies.jpg",
    category: "Church Growth",
    slug: "handbook-of-ceremonies",
  },
  {
    title: "He That Hath, to Him Shall Be Given; and He That Hath Not, from Him Shall Be Taken Even That Which He Hath",
    description: "He That Hath, to Him Shall Be Given; and He That Hath Not, from Him Shall Be Taken Even That Which He Hath — a teaching by Bishop Dag Heward-Mills on stewardship & honour.",
    image: "/images/books/he_that_hath_to_him_shall_be_given_and_he_that_hath_not_from_him_shall_be_taken_even_that_which_he_hath.jpg",
    category: "Stewardship & Honour",
    slug: "he-that-hath-to-him-shall-be-given-and-he-that-hath-not-from-him-shall-be-taken-even-that-which-he-hath",
  },
  {
    title: "How Can I Say Thanks",
    description: "How Can I Say Thanks — a teaching by Bishop Dag Heward-Mills on christian living.",
    image: "/images/books/how_can_i_say_thanks.jpeg",
    category: "Christian Living",
    slug: "how-can-i-say-thanks",
  },
  {
    title: "How to Be Born Again and Avoid Hell",
    description: "How to Be Born Again and Avoid Hell — a teaching by Bishop Dag Heward-Mills on salvation & evangelism.",
    image: "/images/books/how_to_be_born_again_and_avoid_hell.jpg",
    category: "Salvation & Evangelism",
    slug: "how-to-be-born-again-and-avoid-hell",
  },
  {
    title: "How to Neutralize Curses",
    description: "How to Neutralize Curses — a teaching by Bishop Dag Heward-Mills on spiritual warfare.",
    image: "/images/books/how_to_neutralize_curses.jpg",
    category: "Spiritual Warfare",
    slug: "how-to-neutralize-curses",
  },
  {
    title: "How to Pray",
    description: "How to Pray — a teaching by Bishop Dag Heward-Mills on prayer & devotion.",
    image: "/images/books/how_to_pray.jpg",
    category: "Prayer & Devotion",
    slug: "how-to-pray",
  },
  {
    title: "How You Can Become a Strong Christian",
    description: "How You Can Become a Strong Christian — a teaching by Bishop Dag Heward-Mills on christian living.",
    image: "/images/books/how_you_can_become_a_strong_christian.jpg",
    category: "Christian Living",
    slug: "how-you-can-become-a-strong-christian",
  },
  {
    title: "How You Can Have an Effective Quiet Time Every Day",
    description: "How You Can Have an Effective Quiet Time Every Day — a teaching by Bishop Dag Heward-Mills on prayer & devotion.",
    image: "/images/books/how_you_can_have_an_effective_quiet_time_every_day.jpg",
    category: "Prayer & Devotion",
    slug: "how-you-can-have-an-effective-quiet-time-every-day",
  },
  {
    title: "How You Can Make Full Proof of Your Ministry",
    description: "How You Can Make Full Proof of Your Ministry — a teaching by Bishop Dag Heward-Mills on leadership & ministry.",
    image: "/images/books/how_you_can_make_full_proof_of_your_ministry.jpg",
    category: "Leadership & Ministry",
    slug: "how-you-can-make-full-proof-of-your-ministry",
  },
  {
    title: "How you Can Preach Salvation",
    description: "How you Can Preach Salvation — a teaching by Bishop Dag Heward-Mills on salvation & evangelism.",
    image: "/images/books/how_you_can_preach_salvation.jpg",
    category: "Salvation & Evangelism",
    slug: "how-you-can-preach-salvation",
  },
  {
    title: "If You Love the Lord",
    description: "If You Love the Lord — a teaching by Bishop Dag Heward-Mills on christian living.",
    image: "/images/books/if_you_love_the_lord.jpg",
    category: "Christian Living",
    slug: "if-you-love-the-lord",
  },
  {
    title: "It Is a Great Thing to Serve the Lord",
    description: "It Is a Great Thing to Serve the Lord — a teaching by Bishop Dag Heward-Mills on servant ministry.",
    image: "/images/books/it_is_a_great_thing_to_serve_the_lord.jpg",
    category: "Servant Ministry",
    slug: "it-is-a-great-thing-to-serve-the-lord",
  },
  {
    title: "Key Facts for New Believers",
    description: "Key Facts for New Believers — a teaching by Bishop Dag Heward-Mills on salvation & evangelism.",
    image: "/images/books/key_facts_for_new_believers.jpg",
    category: "Salvation & Evangelism",
    slug: "key-facts-for-new-believers",
  },
  {
    title: "Know Your Invisible Enemies",
    description: "Know Your Invisible Enemies — a teaching by Bishop Dag Heward-Mills on spiritual warfare.",
    image: "/images/books/know_your_invisible_enemies.jpg",
    category: "Spiritual Warfare",
    slug: "know-your-invisible-enemies",
  },
  {
    title: "Labour to Be Blessed",
    description: "Labour to Be Blessed — a teaching by Bishop Dag Heward-Mills on faith & victory.",
    image: "/images/books/labour_to_be_blessed.jpg",
    category: "Faith & Victory",
    slug: "labour-to-be-blessed",
  },
  {
    title: "Laikos",
    description: "Laikos — a teaching by Bishop Dag Heward-Mills on church growth.",
    image: "/images/books/laikos.jpg",
    category: "Church Growth",
    slug: "laikos",
  },
  {
    title: "Lord, I Know You Need Somebody",
    description: "Lord, I Know You Need Somebody — a teaching by Bishop Dag Heward-Mills on christian living.",
    image: "/images/books/lord_i_know_you_need_somebody.jpg",
    category: "Christian Living",
    slug: "lord-i-know-you-need-somebody",
  },
  {
    title: "Losing, Suffering, Sacrificing, and Dying",
    description: "Losing, Suffering, Sacrificing, and Dying — a teaching by Bishop Dag Heward-Mills on stewardship & honour.",
    image: "/images/books/losing_suffering_sacrificing_and_dying.jpg",
    category: "Stewardship & Honour",
    slug: "losing-suffering-sacrificing-and-dying",
  },
  {
    title: "Loyalty and Disloyalty",
    description: "Loyalty and Disloyalty — a teaching by Bishop Dag Heward-Mills on loyalty & character.",
    image: "/images/books/loyalty_and_disloyalty.jpg",
    category: "Loyalty & Character",
    slug: "loyalty-and-disloyalty",
  },
  {
    title: "Make Yourselves Saviours of Men",
    description: "Make Yourselves Saviours of Men — a teaching by Bishop Dag Heward-Mills on servant ministry.",
    image: "/images/books/make_yourselves_saviours_of_men.jpg",
    category: "Servant Ministry",
    slug: "make-yourselves-saviours-of-men",
  },
  {
    title: "Many Are Called",
    description: "Many Are Called — a teaching by Bishop Dag Heward-Mills on christian living.",
    image: "/images/books/many_are_called.jpg",
    category: "Christian Living",
    slug: "many-are-called",
  },
  {
    title: "The Mega Church",
    description: "The Mega Church — a teaching by Bishop Dag Heward-Mills on church growth.",
    image: "/images/books/mega_church.jpg",
    category: "Church Growth",
    slug: "the-mega-church",
  },
  {
    title: "Ministerial Barrenness",
    description: "Ministerial Barrenness — a teaching by Bishop Dag Heward-Mills on leadership & ministry.",
    image: "/images/books/ministerial_barrenness.jpg",
    category: "Leadership & Ministry",
    slug: "ministerial-barrenness",
  },
  {
    title: "Ministerial Ethics",
    description: "Ministerial Ethics — a teaching by Bishop Dag Heward-Mills on leadership & ministry.",
    image: "/images/books/ministerial_ethics.jpg",
    category: "Leadership & Ministry",
    slug: "ministerial-ethics",
  },
  {
    title: "Model Marriage",
    description: "Model Marriage — a teaching by Bishop Dag Heward-Mills on marriage & family.",
    image: "/images/books/model_marriage.jpg",
    category: "Marriage & Family",
    slug: "model-marriage",
  },
  {
    title: "Name It, Claim It, Take It",
    description: "Name It, Claim It, Take It — a teaching by Bishop Dag Heward-Mills on christian living.",
    image: "/images/books/name_it_claim_it_take_it.jpg",
    category: "Christian Living",
    slug: "name-it-claim-it-take-it",
  },
  {
    title: "Not a Novice",
    description: "Not a Novice — a teaching by Bishop Dag Heward-Mills on christian living.",
    image: "/images/books/not_a_novice.jpg",
    category: "Christian Living",
    slug: "not-a-novice",
  },
  {
    title: "One of You Is a Devil",
    description: "One of You Is a Devil — a teaching by Bishop Dag Heward-Mills on spiritual warfare.",
    image: "/images/books/one_of_you_is_a_devil.jpg",
    category: "Spiritual Warfare",
    slug: "one-of-you-is-a-devil",
  },
  {
    title: "One Thousand Micro-Churches",
    description: "One Thousand Micro-Churches — a teaching by Bishop Dag Heward-Mills on church growth.",
    image: "/images/books/one_thousand_micro_churches.jpg",
    category: "Church Growth",
    slug: "one-thousand-micro-churches",
  },
  {
    title: "Others",
    description: "Others — a teaching by Bishop Dag Heward-Mills on christian living.",
    image: "/images/books/others.jpg",
    category: "Christian Living",
    slug: "others",
  },
  {
    title: "Predestination",
    description: "Predestination — a teaching by Bishop Dag Heward-Mills on christian living.",
    image: "/images/books/predestination.jpg",
    category: "Christian Living",
    slug: "predestination",
  },
  {
    title: "Preparation of the Gospel",
    description: "Preparation of the Gospel — a teaching by Bishop Dag Heward-Mills on salvation & evangelism.",
    image: "/images/books/preparation_of_the_gospel.jpeg",
    category: "Salvation & Evangelism",
    slug: "preparation-of-the-gospel",
  },
  {
    title: "Read Your Bible, Pray Every Day",
    description: "Read Your Bible, Pray Every Day — a teaching by Bishop Dag Heward-Mills on prayer & devotion.",
    image: "/images/books/read_your_bible_pray_everyday.jpg",
    category: "Prayer & Devotion",
    slug: "read-your-bible-pray-every-day",
  },
  {
    title: "Ready at 20",
    description: "Ready at 20 — a teaching by Bishop Dag Heward-Mills on christian living.",
    image: "/images/books/ready_at_20.jpg",
    category: "Christian Living",
    slug: "ready-at-20",
  },
  {
    title: "Rules of Church Work",
    description: "Rules of Church Work — a teaching by Bishop Dag Heward-Mills on church growth.",
    image: "/images/books/rules_of_church_work.jpg",
    category: "Church Growth",
    slug: "rules-of-church-work",
  },
  {
    title: "Rules of Full-Time",
    description: "Rules of Full-Time — a teaching by Bishop Dag Heward-Mills on church growth.",
    image: "/images/books/rules_of_full_time.jpg",
    category: "Church Growth",
    slug: "rules-of-full-time",
  },
  {
    title: "Seeing and Hearing",
    description: "Seeing and Hearing — a teaching by Bishop Dag Heward-Mills on christian living.",
    image: "/images/books/seeing_and_hearing.jpg",
    category: "Christian Living",
    slug: "seeing-and-hearing",
  },
  {
    title: "Seven Great Principles",
    description: "Seven Great Principles — a teaching by Bishop Dag Heward-Mills on servant ministry.",
    image: "/images/books/seven_great_principles.jpg",
    category: "Servant Ministry",
    slug: "seven-great-principles",
  },
  {
    title: "Spiritual Dangers",
    description: "Spiritual Dangers — a teaching by Bishop Dag Heward-Mills on anointing & spirit.",
    image: "/images/books/spiritual_dangers.jpg",
    category: "Anointing & Spirit",
    slug: "spiritual-dangers",
  },
  {
    title: "Steps to God's Presence",
    description: "Steps to God's Presence — a teaching by Bishop Dag Heward-Mills on anointing & spirit.",
    image: "/images/books/steps_to_gods_presence.jpg",
    category: "Anointing & Spirit",
    slug: "steps-to-gods-presence",
  },
  {
    title: "Steps to the Anointing",
    description: "Steps to the Anointing — a teaching by Bishop Dag Heward-Mills on anointing & spirit.",
    image: "/images/books/steps_to_the_anointing.jpg",
    category: "Anointing & Spirit",
    slug: "steps-to-the-anointing",
  },
  {
    title: "Stir It Up",
    description: "Stir It Up — a teaching by Bishop Dag Heward-Mills on servant ministry.",
    image: "/images/books/stir_it_up.jpg",
    category: "Servant Ministry",
    slug: "stir-it-up",
  },
  {
    title: "Sweet Influences of the Anointing",
    description: "Sweet Influences of the Anointing — a teaching by Bishop Dag Heward-Mills on anointing & spirit.",
    image: "/images/books/sweet_influences_of_the_anointing.jpg",
    category: "Anointing & Spirit",
    slug: "sweet-influences-of-the-anointing",
  },
  {
    title: "Tasters and Partakers",
    description: "Tasters and Partakers — a teaching by Bishop Dag Heward-Mills on christian living.",
    image: "/images/books/tasters_and_partakers.jpg",
    category: "Christian Living",
    slug: "tasters-and-partakers",
  },
  {
    title: "Tell Them",
    description: "Tell Them — a teaching by Bishop Dag Heward-Mills on salvation & evangelism.",
    image: "/images/books/tell_them.jpg",
    category: "Salvation & Evangelism",
    slug: "tell-them",
  },
  {
    title: "The Anointed and His Anointing",
    description: "The Anointed and His Anointing — a teaching by Bishop Dag Heward-Mills on anointing & spirit.",
    image: "/images/books/the_anointed_and_his_anointing.jpg",
    category: "Anointing & Spirit",
    slug: "the-anointed-and-his-anointing",
  },
  {
    title: "The Anointing and the Presence",
    description: "The Anointing and the Presence — a teaching by Bishop Dag Heward-Mills on anointing & spirit.",
    image: "/images/books/the_anointing_and_the_presence.jpg",
    category: "Anointing & Spirit",
    slug: "the-anointing-and-the-presence",
  },
  {
    title: "The Art of Following",
    description: "The Art of Following — a teaching by Bishop Dag Heward-Mills on leadership & ministry.",
    image: "/images/books/the_art_of_following.jpg",
    category: "Leadership & Ministry",
    slug: "the-art-of-following",
  },
  {
    title: "The Art of Hearing",
    description: "The Art of Hearing — a teaching by Bishop Dag Heward-Mills on leadership & ministry.",
    image: "/images/books/the_art_of_hearing.jpg",
    category: "Leadership & Ministry",
    slug: "the-art-of-hearing",
  },
  {
    title: "The Art of Leadership",
    description: "The Art of Leadership — a teaching by Bishop Dag Heward-Mills on leadership & ministry.",
    image: "/images/books/the_art_of_leadership.jpg",
    category: "Leadership & Ministry",
    slug: "the-art-of-leadership",
  },
  {
    title: "The Art of Ministry",
    description: "The Art of Ministry — a teaching by Bishop Dag Heward-Mills on leadership & ministry.",
    image: "/images/books/the_art_of_ministry.jpg",
    category: "Leadership & Ministry",
    slug: "the-art-of-ministry",
  },
  {
    title: "The Art of Shepherding",
    description: "The Art of Shepherding — a teaching by Bishop Dag Heward-Mills on leadership & ministry.",
    image: "/images/books/the_art_of_shepherding.jpg",
    category: "Leadership & Ministry",
    slug: "the-art-of-shepherding",
  },
  {
    title: "The Beauty, the Beast, and the Pastor",
    description: "The Beauty, the Beast, and the Pastor — a teaching by Bishop Dag Heward-Mills on leadership & ministry.",
    image: "/images/books/the_beauty_the_beast_and_the_pastor.jpg",
    category: "Leadership & Ministry",
    slug: "the-beauty-the-beast-and-the-pastor",
  },
  {
    title: "The Church Must Send or It Will End",
    description: "The Church Must Send or It Will End — a teaching by Bishop Dag Heward-Mills on christian living.",
    image: "/images/books/the_church_must_send_or_it_will_end.jpeg",
    category: "Christian Living",
    slug: "the-church-must-send-or-it-will-end",
  },
  {
    title: "The Determinants",
    description: "The Determinants — a teaching by Bishop Dag Heward-Mills on leadership & ministry.",
    image: "/images/books/the_determinants.jpg",
    category: "Leadership & Ministry",
    slug: "the-determinants",
  },
  {
    title: "The Double, Mega, Missionary Church",
    description: "The Double, Mega, Missionary Church — a teaching by Bishop Dag Heward-Mills on church growth.",
    image: "/images/books/the_double_mega_missionary_church.jpg",
    category: "Church Growth",
    slug: "the-double-mega-missionary-church",
  },
  {
    title: "The Gift of Governments",
    description: "The Gift of Governments — a teaching by Bishop Dag Heward-Mills on christian living.",
    image: "/images/books/the_gift_of_governments.png",
    category: "Christian Living",
    slug: "the-gift-of-governments",
  },
  {
    title: "The Preparation of the Gospel",
    description: "The Preparation of the Gospel — a teaching by Bishop Dag Heward-Mills on salvation & evangelism.",
    image: "/images/books/the_preparation_of_the_gospel.jpg",
    category: "Salvation & Evangelism",
    slug: "the-preparation-of-the-gospel",
  },
  {
    title: "The Privilege",
    description: "The Privilege — a teaching by Bishop Dag Heward-Mills on christian living.",
    image: "/images/books/the_privilege.jpg",
    category: "Christian Living",
    slug: "the-privilege",
  },
  {
    title: "The Tree and Your Ministry",
    description: "The Tree and Your Ministry — a teaching by Bishop Dag Heward-Mills on leadership & ministry.",
    image: "/images/books/the_tree_and_your_ministry.jpg",
    category: "Leadership & Ministry",
    slug: "the-tree-and-your-ministry",
  },
  {
    title: "The Word of My Patience",
    description: "The Word of My Patience — a teaching by Bishop Dag Heward-Mills on christian living.",
    image: "/images/books/the_word_of_my_patience.jpg",
    category: "Christian Living",
    slug: "the-word-of-my-patience",
  },
  {
    title: "Those Who Accuse You",
    description: "Those Who Accuse You — a teaching by Bishop Dag Heward-Mills on loyalty & character.",
    image: "/images/books/those_who_accuse_you.jpg",
    category: "Loyalty & Character",
    slug: "those-who-accuse-you",
  },
  {
    title: "Those Who Are Dangerous Sons",
    description: "Those Who Are Dangerous Sons — a teaching by Bishop Dag Heward-Mills on loyalty & character.",
    image: "/images/books/those_who_are_dangerous_sons.jpg",
    category: "Loyalty & Character",
    slug: "those-who-are-dangerous-sons",
  },
  {
    title: "Those Who Are Ignorant",
    description: "Those Who Are Ignorant — a teaching by Bishop Dag Heward-Mills on loyalty & character.",
    image: "/images/books/those_who_are_ignorant.jpg",
    category: "Loyalty & Character",
    slug: "those-who-are-ignorant",
  },
  {
    title: "Those Who Are Offended",
    description: "Those Who Are Offended — a teaching by Bishop Dag Heward-Mills on loyalty & character.",
    image: "/images/books/those_who_are_offended.jpg",
    category: "Loyalty & Character",
    slug: "those-who-are-offended",
  },
  {
    title: "Those Who Are Proud",
    description: "Those Who Are Proud — a teaching by Bishop Dag Heward-Mills on loyalty & character.",
    image: "/images/books/those_who_are_proud.jpg",
    category: "Loyalty & Character",
    slug: "those-who-are-proud",
  },
  {
    title: "Those Who Forget",
    description: "Those Who Forget — a teaching by Bishop Dag Heward-Mills on loyalty & character.",
    image: "/images/books/those_who_forget.jpg",
    category: "Loyalty & Character",
    slug: "those-who-forget",
  },
  {
    title: "Those Who Honour You",
    description: "Those Who Honour You — a teaching by Bishop Dag Heward-Mills on loyalty & character.",
    image: "/images/books/those_who_honour_you.jpg",
    category: "Loyalty & Character",
    slug: "those-who-honour-you",
  },
  {
    title: "Those Who Leave You",
    description: "Those Who Leave You — a teaching by Bishop Dag Heward-Mills on loyalty & character.",
    image: "/images/books/those_who_leave_you.jpg",
    category: "Loyalty & Character",
    slug: "those-who-leave-you",
  },
  {
    title: "Those Who Pretend",
    description: "Those Who Pretend — a teaching by Bishop Dag Heward-Mills on loyalty & character.",
    image: "/images/books/those_who_pretend.jpg",
    category: "Loyalty & Character",
    slug: "those-who-pretend",
  },
  {
    title: "Top 10 Mistakes Pastors Make",
    description: "Top 10 Mistakes Pastors Make — a teaching by Bishop Dag Heward-Mills on leadership & ministry.",
    image: "/images/books/top_10_mistakes_pastors_make.jpg",
    category: "Leadership & Ministry",
    slug: "top-10-mistakes-pastors-make",
  },
  {
    title: "Transform Your Pastoral Ministry",
    description: "Transform Your Pastoral Ministry — a teaching by Bishop Dag Heward-Mills on leadership & ministry.",
    image: "/images/books/transform_your_pastoral_ministry.jpg",
    category: "Leadership & Ministry",
    slug: "transform-your-pastoral-ministry",
  },
  {
    title: "Victory Secrets",
    description: "Victory Secrets — a teaching by Bishop Dag Heward-Mills on faith & victory.",
    image: "/images/books/victory_secrets.jpg",
    category: "Faith & Victory",
    slug: "victory-secrets",
  },
  {
    title: "Weeping and Gnashing",
    description: "Weeping and Gnashing — a teaching by Bishop Dag Heward-Mills on christian living.",
    image: "/images/books/weeping_and_gnashing.jpg",
    category: "Christian Living",
    slug: "weeping-and-gnashing",
  },
  {
    title: "What It Means to Be Wise as a Serpent",
    description: "What It Means to Be Wise as a Serpent — a teaching by Bishop Dag Heward-Mills on christian living.",
    image: "/images/books/what_it_means_to_be_wise_as_a_serpent.jpg",
    category: "Christian Living",
    slug: "what-it-means-to-be-wise-as-a-serpent",
  },
  {
    title: "What It Means to Become a Shepherd",
    description: "What It Means to Become a Shepherd — a teaching by Bishop Dag Heward-Mills on leadership & ministry.",
    image: "/images/books/what_it_means_to_become_a_shepherd.jpg",
    category: "Leadership & Ministry",
    slug: "what-it-means-to-become-a-shepherd",
  },
  {
    title: "Why Few Are Chosen",
    description: "Why Few Are Chosen — a teaching by Bishop Dag Heward-Mills on christian living.",
    image: "/images/books/why_few_are_chosen.jpg",
    category: "Christian Living",
    slug: "why-few-are-chosen",
  },
  {
    title: "Why Non-Tithing Christians Become Poor and How Tithing Christians Can Become Rich",
    description: "Why Non-Tithing Christians Become Poor and How Tithing Christians Can Become Rich — a teaching by Bishop Dag Heward-Mills on stewardship & honour.",
    image: "/images/books/why_non_tithing_christians_become_poor_and_how_tithing_christians_can_become_rich.jpg",
    category: "Stewardship & Honour",
    slug: "why-non-tithing-christians-become-poor-and-how-tithing-christians-can-become-rich",
  },
  {
    title: "Wisdom Is the Principal Thing for Your Ministry",
    description: "Wisdom Is the Principal Thing for Your Ministry — a teaching by Bishop Dag Heward-Mills on leadership & ministry.",
    image: "/images/books/wisdom_is_the_principal_thing_for_your_ministry.jpg",
    category: "Leadership & Ministry",
    slug: "wisdom-is-the-principal-thing-for-your-ministry",
  },
];

