/* SLIDE LIST
   SETS: the coloured groups on the Slides page (one colour per topic).
   DECKS: one line per presentation. Put its slide images (01.webp, 02.webp ...) in a folder
   with the same name as "id", inside the "slides" folder.
   type "deck" = slideshow, "doc" = handout to scroll. */
const SETS = [
  { id: "opinions",  name: "Opinions",               color: "teal"  },
  { id: "company",   name: "Company & Small Talk",   color: "amber" },
  { id: "problems",  name: "Business Problems",      color: "rose"  },
  { id: "advice",    name: "Giving Advice",          color: "lilac" },
  { id: "calls",     name: "Conversations & Calls",  color: "sky"   },
];

const DECKS = [
  // Opinions
  { set: "opinions", id: "whats-your-taste",         title: "What's Your Taste?",    desc: "Likes, dislikes and asking for opinions",          icon: "👍", count: 15, type: "deck" },
  { set: "opinions", id: "present-vs-past-opinions", title: "Now or Before?",        desc: "Opinions in the present and the past",             icon: "⏰", count: 11, type: "deck" },
  { set: "opinions", id: "adjectives-how-was-it",    title: "How Was It?",           desc: "Adjectives for things and feelings",               icon: "🤩", count: 15, type: "deck" },
  { set: "opinions", id: "opinions-handout",         title: "Opinions Handout",      desc: "Summary and practice for this set",                icon: "📄", count: 1,  type: "doc"  },

  // Company & Small Talk
  { set: "company",  id: "small-talk-warm-up",       title: "Small Talk",            desc: "Before and after a business meeting",              icon: "💬", count: 8,  type: "deck" },
  { set: "company",  id: "company-background",       title: "Company Background",    desc: "Describe your company: years, numbers, trade words", icon: "🏢", count: 13, type: "deck" },
  { set: "company",  id: "company-profile",          title: "Company Profile",       desc: "Hoa Sen Home fact file and practice",              icon: "📄", count: 2,  type: "doc"  },

  // Business Problems
  { set: "problems", id: "problems-vocabulary",      title: "Problems Vocabulary",   desc: "Eight common problems at work",                    icon: "🧩", count: 6,  type: "deck" },
  { set: "problems", id: "problems-ideas-bank",      title: "Ideas Bank",            desc: "A problem at work? What can you do?",              icon: "💡", count: 14, type: "deck" },
  { set: "problems", id: "problems-group-work",      title: "Problems at Work",      desc: "Ask, suggest, accept and reject in groups",        icon: "👥", count: 18, type: "deck" },
  { set: "problems", id: "polite-suggestions",       title: "Strong or Soft?",       desc: "Polite suggestions for partners",                  icon: "🤝", count: 15, type: "deck" },
  { set: "problems", id: "phone-help-phrases",       title: "Help! I Don't Understand", desc: "Useful phrases for phone calls",              icon: "📞", count: 4,  type: "deck" },
  { set: "problems", id: "problem-solvers",          title: "Problem Solvers",       desc: "Team game: your problem, your team's best idea",   icon: "🏆", count: 5,  type: "deck" },

  // Giving Advice
  { set: "advice",   id: "strong-or-polite-advice",  title: "Strong or Polite?",     desc: "Advice for your boss, your team and your partners", icon: "🗨️", count: 18, type: "deck" },
  { set: "advice",   id: "advice-problem-cards",     title: "Advice Problem Cards",  desc: "12 problem cards and language strips to cut out",  icon: "🃏", count: 3,  type: "doc"  },
  { set: "advice",   id: "welcome-to-hcmc",          title: "Welcome to Ho Chi Minh City!", desc: "Mingle: give a visitor advice about the city", icon: "✈️", count: 15, type: "deck" },
  { set: "advice",   id: "visitor-advice-worksheet", title: "Visitor Worksheet",     desc: "Worksheet for Welcome to Ho Chi Minh City!",       icon: "📄", count: 2,  type: "doc"  },

  // Conversations & Calls
  { set: "calls",    id: "formal-informal-game",          title: "Formal or Informal?",     desc: "The conversation game: two rounds in teams",   icon: "🎩", count: 29, type: "deck" },
  { set: "calls",    id: "formal-informal-conversations", title: "Formal & Informal Phrases", desc: "Handout: start, continue and end a conversation", icon: "📄", count: 2,  type: "doc"  },
  { set: "calls",    id: "call-buttons-game",             title: "What Is It?",             desc: "Game: online call buttons and what to say",    icon: "🎙️", count: 16, type: "deck" },
  { set: "calls",    id: "online-calls",                  title: "Online Calls",            desc: "Start, manage and end an online call",         icon: "💻", count: 11, type: "deck" },
];
