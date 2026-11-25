/* SLIDE LIST
   To add a presentation: put its slide images (01.webp, 02.webp ...) in a new folder
   inside "slides", then add one line below. type "deck" = slideshow, "doc" = handout/page to scroll. */
const DECKS = [
  { id: "whats-your-taste",         title: "What's Your Taste?",  desc: "Likes, dislikes and asking for opinions", icon: "👍", color: "teal",  count: 15, type: "deck" },
  { id: "present-vs-past-opinions", title: "Now or Before?",      desc: "Opinions in the present and the past",    icon: "⏰", color: "amber", count: 11, type: "deck" },
  { id: "adjectives-how-was-it",    title: "How Was It?",         desc: "Adjectives for things and feelings",      icon: "🤩", color: "rose",  count: 15, type: "deck" },
  { id: "opinions-handout",         title: "Opinions Handout",    desc: "Summary and practice for the three presentations above", icon: "📄", color: "sage",  count: 1,  type: "doc" },
  { id: "small-talk-warm-up",       title: "Small Talk",          desc: "Before and after a business meeting",     icon: "💬", color: "sky",   count: 8,  type: "deck" },
  { id: "company-background",       title: "Company Background",  desc: "Describe your company: years, numbers, trade words", icon: "🏢", color: "lilac", count: 13, type: "deck" },
  { id: "company-profile",          title: "Company Profile",     desc: "Handout: Hoa Sen Home fact file and practice", icon: "📄", color: "sage",  count: 2,  type: "doc" },
];
