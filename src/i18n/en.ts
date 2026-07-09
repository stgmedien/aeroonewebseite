/**
 * English dictionary — mirrors de.ts exactly in shape.
 * Audience: international jury members, investors and press (Gen-E, Riga).
 * Structural values (hrefs, ids, prices, icon keys, initials, emails) are
 * unchanged; only human-readable text is translated.
 */

import type { Dict } from "./types";
import { pressReleasesEn } from "@/data/pressReleases.en";

export const en: Dict = {
  meta: {
    title: "Aero One – Professional Aerial Photography | Germany's Best Student Company 2026",
    description:
      "Drone videos delivered in under 48 hours – named Germany's Best Student Company 2026 (IW JUNIOR). Professional aerial photography for real estate, events and projects.",
    ogTitle: "Aero One – Germany's Best Student Company 2026",
    ogDescription:
      "Drone videos in under 48 hours for real estate, events and projects. National champions of the 2026 IW JUNIOR competition – representing Germany at the Gen-E finals in Riga.",
    kontakt: {
      title: "Contact",
      description: "Send us your inquiry – professional aerial photography is just one click away.",
    },
    presse: {
      title: "Press",
      description:
        "Aero One in the press — media coverage and official press releases from the multi-award-winning JUNIOR student company from Gütersloh (IW JUNIOR NRW State Champion & National Champion 2026).",
      ogTitle: "Aero One in the Press — Germany's Best Student Company 2026",
      ogDescription:
        "National champions of the 2026 IW JUNIOR competition, representing Germany at the Gen-E European finals in Riga: the full media coverage and all official press releases.",
    },
    about: {
      title: "About us",
      description:
        "Aero One — from a school elective to Germany's Best Student Company 2026. Our story, our mission and our values.",
    },
    faq: {
      title: "FAQ",
      description:
        "Answers about Aero One: turnaround, pricing, legal compliance, regions and the Europe-wide pilot network.",
    },
  },

  announcement: {
    text: "Germany's Best Student Company 2026 · Representing Germany at the Gen-E finals in Riga (July 7–10)",
    short: "Germany's Best Student Company 2026",
    href: "/en/presse",
    switchLabel: "DE",
    switchHref: "/",
  },

  nav: {
    links: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/#leistungen" },
      { label: "About", href: "/ueber-uns" },
      { label: "Pricing", href: "/#preise" },
      { label: "Press", href: "/presse" },
      { label: "Contact", href: "/kontakt" },
    ],
    booking: "Book now!",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    logoAria: "Aero One — Home",
  },

  hero: {
    badge: "IW JUNIOR National Champion 2026 · Germany's Best Student Company",
    titleLine1: "Drone videos",
    titleLine2Pre: "in under",
    titleHighlight: "48h",
    subtitle: "Fully edited, high-quality, professional aerial footage for",
    tags: ["Real estate", "Events", "Projects"],
    primaryCta: { label: "Send an inquiry", href: "/kontakt" },
    secondaryCta: { label: "Learn more", href: "/#leistungen" },
    playAria: "Play the promo film with sound",
    playCta: "Watch the promo film with sound",
    scroll: "Scroll",
  },

  logoStrip: {
    trust: "Trusted by businesses across the region",
    eyebrow: "Fast and Simple",
    titlePre: "Footage for real estate & projects of",
    titleHighlight: "the highest quality",
  },

  problem: {
    eyebrow: "The problem",
    titlePre: "Properties are sold online — yet the photos are often",
    titleHighlight: "a disaster.",
    text: "Anyone marketing a property today faces three hurdles — and loses reach, time and trust along the way.",
    pains: [
      {
        icon: "hourglass",
        title: "Up to 3 weeks of waiting",
        text: "Established providers are booked out. Waiting for professional footage costs valuable marketing time.",
      },
      {
        icon: "smartphone",
        title: "Phone snapshots, not quality",
        text: "Crooked angles, poor light, no editing — even the best property loses its impact this way.",
      },
      {
        icon: "scale",
        title: "Data protection & drone law",
        text: "Drone flights are strictly regulated. Without registration, insurance and GDPR awareness, you risk fines.",
      },
    ],
  },

  stat: {
    eyebrow: "The solution",
    title: "Legally compliant property footage",
    titleHighlight: "in under 48 hours",
    text: "For estate agents, construction firms and architecture practices: professional aerial photos and videos — shot by certified pilots, legally compliant and fully edited in under 48 hours.",
    kicker: "Ready for take-off?",
    ctaLabel: "Book now!",
    badges: [
      { icon: "shield", label: "Legally compliant" },
      { icon: "camera", label: "Footage" },
      { icon: "flex", label: "Flexibility" },
      { icon: "clock", label: "Delivered in 48h" },
    ],
  },

  project: {
    eyebrow: "Right for every project",
    titlePre: "Professional footage for",
    titleHighlight: "your project",
    text: "Professional footage draws attention and presents your project to full effect. With a clear visual language and high-quality execution, we create content that wins people over.",
    kicker: "See for yourself",
    ctaLabel: "Book now!",
    badges: [
      { icon: "clock", label: "48h delivery" },
      { icon: "tag", label: "Custom pricing" },
      { icon: "eye", label: "More visibility" },
      { icon: "layers", label: "All In One" },
    ],
    beforeLabel: "Ground level",
    afterLabel: "From the air",
    sliderHint: "Drag the slider – from a standard photo to an aerial shot.",
  },

  immoHero: {
    title: "Selling privately?",
    text: "Private customers book professional footage directly on immohero.org.",
    ctaLabel: "Go to immohero.org",
    note: "Packages from €79",
  },

  showcase: {
    eyebrow: "Showcase",
    title: "A bird's-eye view",
    text: "Every project deserves a stage. A selection of footage produced for real estate, events and businesses.",
  },

  panorama: {
    eyebrow: "360° tour",
    titlePre: "Explore properties from",
    titleHighlight: "every angle",
    text: "Interactive 360° aerial panoramas, right in your browser — drag to look around, scroll to zoom.",
    note: "Sample project · Kaup Immobilien",
    loading: "Loading panorama …",
    hint: "Drag to look around · Scroll to zoom",
    sceneLabels: ["Viewpoint 1", "Viewpoint 2"],
    sceneAria: "Switch to {label}",
  },

  network: {
    eyebrow: "Vision",
    titlePre: "Our dream: a network across",
    titleHighlight: "all of Europe",
    text: "We are building a Europe-wide network of drone pilots, videographers and photographers — so professional property footage becomes available anywhere in under 48 hours. Fly, film or shoot? Join us.",
    roles: [
      { icon: "drone", label: "Drone pilots" },
      { icon: "video", label: "Videographers" },
      { icon: "camera", label: "Photographers" },
    ],
    ctaLabel: "Join the network",
    ctaNote: "Onboarding via our partner ImmoHero",
  },

  team: {
    eyebrow: "Team",
    titlePre: "The minds behind",
    titleHighlight: "Aero One",
    text: "Five students at ESG Gütersloh – named Germany's Best Student Company 2026. From the first idea to the finished film.",
    roles: {
      "Jonathan Kreutzheide": "Co-Founder & Managing Director",
      "Freya Knight": "Head of Sales",
      "Amy Thomalla": "Marketing Manager",
      "Linus Held": "Co-Founder & Drone Pilot",
      "Friedrich Grüninger": "Drone Pilot in Training",
    },
  },

  impact: {
    eyebrow: "Impact",
    titlePre: "We market real estate —",
    titleHighlight: "with tomorrow in mind.",
    text: "Aero One is more than a business model. We create opportunities for young people — here in our region and wherever our network grows.",
    items: [
      {
        icon: "heartHandshake",
        title: "Fair work for young people",
        text: "Real responsibility, real projects, real appreciation — from day one.",
      },
      {
        icon: "graduation",
        title: "Apprenticeships & entry-level roles",
        text: "Training positions and first jobs that open doors for young talent in the region.",
      },
      {
        icon: "handCoins",
        title: "Fair pay & long-term prospects",
        text: "Fair compensation and lasting career paths instead of endless internships.",
      },
      {
        icon: "sprout",
        title: "Future-ready skills",
        text: "Hands-on learning: drone technology, media production, entrepreneurship.",
      },
      {
        icon: "mapPin",
        title: "Regional value creation",
        text: "Work, knowledge and value stay in the region.",
      },
    ],
  },

  testimonials: {
    eyebrow: "Testimonials",
    items: [
      {
        quote: "Professional execution with an impressive result.",
        name: "Martin Fugmann",
        role: "Principal of Evangelisch Stiftisches Gymnasium Gütersloh",
        initials: "MF",
        featured: true,
      },
      {
        quote:
          "From the first idea to the final delivery, everything was convincing. Creative, well thought out and executed in outstanding quality.",
        name: "Thomas Rimpel",
        role: "Deputy Principal of ESG",
        initials: "TR",
      },
      {
        quote:
          "Fast communication, flexible execution and finished in under 48 hours. That's what I call turbo speed!",
        name: "Dr. med. Judith Kreutzheide",
        role: "Specialist in plastic and aesthetic surgery",
        initials: "JK",
      },
      {
        quote:
          "Fast, reliable and professional, as always. The collaboration was straightforward and the result won us over across the board.",
        name: "Dr. Horst Borcherding",
        role: "Head of dentistry at Mohnspark",
        initials: "HB",
      },
    ],
  },

  pricing: {
    eyebrow: "Pricing",
    titlePre: "Simple and straightforward –",
    titleHighlight: "our pricing",
    text: "Transparent packages with no fine print. Choose what fits your project.",
    toggle: { once: "One-time", monthly: "Monthly" },
    plans: [
      {
        id: "basic",
        name: "Aero One Basic",
        price: "€449",
        period: "one-time",
        type: "once",
        tagline: "The perfect entry point for professional listing photos.",
        features: [
          "10 HDR aerial photos / 1 video",
          "Professional editing",
          "Usage rights included",
          "48h delivery",
          "24/7 customer service",
        ],
        cta: "Book now!",
      },
      {
        id: "retainer",
        name: "Aero One Retainer",
        price: "€339",
        period: "per month",
        type: "monthly",
        tagline: "The full Basic package at a great price.",
        badge: "Bestseller",
        highlighted: true,
        features: [
          "Everything in Basic",
          "Cancel anytime",
          "Editing & post-production",
          "48h delivery",
          "Priority customer service",
        ],
        cta: "Book now!",
      },
      {
        id: "premium",
        name: "Aero One Premium",
        price: "€559",
        period: "one-time",
        type: "once",
        tagline: "Maximum reach with video & photo – no ongoing commitment.",
        features: [
          "Everything in Basic",
          "1 drone video in 4K",
          "Music license included",
          "48h delivery",
          "24/7 customer service",
        ],
        cta: "Book now!",
      },
    ],
    footnote:
      "All packages include professional editing & delivery within 48 hours. Custom requests welcome at any time.",
    immoHeroNote: {
      pre: "Private customer? Packages from €79 are available directly on ",
      linkLabel: "immohero.org",
      post: ".",
    },
  },

  freyaCta: {
    titlePre: "Talk to Freya and take your project",
    titleHighlight: "to the skies.",
    text: "Professional aerial photography is just one click away.",
    ctaLabel: "Book now!",
    person: {
      name: "Freya Knight",
      role: "Head of Sales",
      email: "aeroonemail@gmail.com",
    },
  },

  contact: {
    eyebrow: "Get in touch",
    title: "Ready?",
    text: "Professional aerial photography is just one click away.",
    fields: {
      name: { label: "Name", placeholder: "Jane Doe" },
      email: { label: "Email", placeholder: "jane.doe@mail.com" },
      message: { label: "Message", placeholder: "Tell us about your project …" },
      customer: {
        label: "Are you an existing customer?",
        placeholder: "Select …",
        options: ["No", "Yes"],
      },
    },
    submit: "Send",
    success: "Thank you! Your inquiry has been received – we'll get back to you within 24 hours.",
    successMore: "Send another inquiry",
    error: "Something went wrong. Please try again or email us directly.",
    dsgvoPre: "By submitting, you consent to the processing of your details for the purpose of handling your inquiry. Learn more in our ",
    dsgvoLinkLabel: "privacy policy",
    dsgvoPost: ".",
  },

  footer: {
    tagline: "Professional drone videos for events · real estate · projects.",
    award: "Germany's Best Student Company 2026 (IW JUNIOR)",
    colPages: "Pages",
    colInfo: "Information",
    pages: [
      { label: "Home", href: "/" },
      { label: "About", href: "/ueber-uns" },
      { label: "Services", href: "/#leistungen" },
      { label: "Pricing", href: "/#preise" },
      { label: "Press", href: "/presse" },
      { label: "Contact", href: "/kontakt" },
    ],
    legal: [
      { label: "FAQ", href: "/faq" },
      { label: "Legal Notice", href: "/impressum" },
      { label: "Privacy Policy", href: "/datenschutz" },
    ],
    copyright: "Aero One · Gütersloh",
    vision: "Built with ▲ vision.",
  },

  notFound: {
    headline: "This page has taken off.",
    text: "The page you're looking for couldn't be found. Maybe a view from above will help – back to the home page.",
    cta: "Back to home",
  },

  presse: {
    intro: {
      eyebrow: "Press",
      title: "Aero One",
      highlight: "in the press",
      text: "As a JUNIOR student company at Evangelisch Stiftisches Gymnasium Gütersloh, we won the 2026 IW JUNIOR state competition in North Rhine-Westphalia and the national final in Cologne – making us Germany's best student company. From July 7 to 10, we will represent Germany at the Gen-E European finals in Riga. A selection of the coverage:",
    },
    highlights: [
      { label: "NRW State Champion 2026", sub: "IW JUNIOR state competition" },
      { label: "National Champion 2026", sub: "Germany's Best Student Company" },
      { label: "Gen-E European Finals", sub: "Riga · July 7–10, 2026" },
      { label: "13 media features", sub: "Print · Online · Radio · Social" },
    ],
    kindLabels: {
      print: "Daily newspaper",
      online: "Online",
      radio: "Local radio",
      social: "Social media",
      release: "Press release",
    },
    mediaTitlePre: "In the",
    mediaTitleHighlight: "media",
    mediaSub: "A selection of the coverage of Aero One in print, online, radio and social media.",
    releasesTitlePre: "Official",
    releasesTitleHighlight: "press releases",
    releasesSub: "Statements issued directly by Aero One – free for editorial use.",
    releaseCardKind: "Press release",
    toArticle: "Read the article",
    readRelease: "Read the press release",
    back: "Back to press",
    pmEyebrow: "Press release",
    materialNote: "Photos, video footage and interview soundbites are available on request.",
    contact: {
      title: "Press contact",
      text: "We are happy to arrange interviews, soundbites, photos and video material.",
      name: "Jonathan Kreutzheide",
      role: "Managing Director, Aero One",
      email: "aeroonemail@gmail.com",
    },
    releases: pressReleasesEn,
    translatedNote: "Translated from the German original.",
  },

  legal: {
    germanBindingNote: "This page is available in German only — the German version is legally binding.",
  },

  about: {
    eyebrow: "About us",
    titlePre: "From the classroom to",
    titleHighlight: "Germany's best student company.",
    lead: "Aero One is a JUNIOR student company at Evangelisch Stiftisches Gymnasium in Gütersloh, Germany. Five students, one idea, a professional standard — and within a single year the title “Germany's Best Student Company 2026”. Here's who we are, what we believe in and where we're headed.",
    stats: [
      { value: "< 48 h", label: "turnaround" },
      { value: "5", label: "projects delivered" },
      { value: "13", label: "media features" },
      { value: "2026", label: "IW JUNIOR national champions" },
    ],
    missionEyebrow: "Mission",
    missionTitle: "Professional property footage — fast, legally compliant and accessible to everyone.",
    missionText: "Great photos sell properties. Yet many are held back by waiting times, poor quality and drone regulation. We deliver professional aerial photos and videos in under 48 hours — legally handled and fully bookable online. Our goal: a Europe-wide network that makes this quality available anywhere and opens real opportunities for young people.",
    storyEyebrow: "Our journey",
    storyTitle: "How a classroom idea became a national champion",
    milestones: [
      {
        date: "Autumn 2025",
        title: "The idea",
        text: "In the elective “Economics, Media and Culture” (WMK), Linus approaches Jonathan with an idea: “something with drones”. An industry average response time of three weeks becomes the brand promise of 48-hour delivery.",
      },
      {
        date: "December 2025",
        title: "“Dragons' Den”",
        text: "The team pitches its idea to external entrepreneurs and advisors — the school's own format modelled on the TV show “Dragons' Den”. The concept turns into a real business.",
      },
      {
        date: "Spring 2026",
        title: "First clients",
        text: "Five projects are delivered — including work for the Gütersloh estate agency Kaup and the economic development agency Concept GT. After the very first outreach, Freya returns with two clients.",
      },
      {
        date: "21 May 2026",
        title: "NRW state champions",
        text: "Aero One wins the IW JUNIOR state competition for North Rhine-Westphalia in Cologne — securing its ticket to the national final.",
      },
      {
        date: "16 June 2026",
        title: "Germany's best student company",
        text: "At the national final in Cologne the team beats 13 other state champions to become National Champions 2026. Managing Director Jonathan Kreutzheide also receives the Leadership Award.",
      },
      {
        date: "7–10 July 2026",
        title: "European finals in Riga",
        text: "After a coaching session at Bloomberg in Frankfurt, Aero One represents Germany at Gen-E, Europe's largest entrepreneurship festival, in Riga.",
      },
    ],
    valuesEyebrow: "Our values",
    valuesTitle: "What we believe in",
    valuesText: "These principles shape every shot, every offer and every collaboration.",
    values: [
      { icon: "shield", title: "Legal compliance", text: "Permits, insurance and GDPR are part of the deal — not an add-on, but our standard." },
      { icon: "clock", title: "Reliable speed", text: "Fully edited in under 48 hours. A promise we keep, project after project." },
      { icon: "camera", title: "Uncompromising quality", text: "Professional gear, clean edits, high-end post-production — every property at its best." },
      { icon: "heartHandshake", title: "Fair opportunities", text: "Real responsibility, fair pay and prospects for young people — from day one." },
      { icon: "mapPin", title: "Regional roots", text: "From Gütersloh to the world: work, knowledge and value stay in the region." },
      { icon: "sprout", title: "Entrepreneurial spirit", text: "Going our own way instead of ticking boxes. Courage, curiosity and the drive to do it better." },
    ],
    ctaTitle: "Meet the team",
    ctaText: "Five minds, one goal. Talk to us about your project — or become part of our network.",
    ctaPrimary: { label: "Get in touch", href: "/kontakt" },
    ctaSecondary: { label: "Read the FAQ", href: "/faq" },
  },

  faq: {
    eyebrow: "FAQ",
    title: "Frequently asked questions",
    text: "Everything you need to know about Aero One — from turnaround to the pilot network.",
    items: [
      {
        q: "How quickly will I receive my footage?",
        a: "Usually within 48 hours of the flight — fully edited and available centrally via a digital platform.",
      },
      {
        q: "What does it cost?",
        a: "For businesses we offer fixed packages: Basic (€449), Retainer (€339/month) and Premium (€559). Private customers book professional footage directly on immohero.org, where packages start from €79. Custom requests are always welcome.",
      },
      {
        q: "Is everything legally covered?",
        a: "Yes. We handle flight permits, drone insurance and any required consent forms (e.g. with the German Federal Aviation Office) and work in line with GDPR. You don't have to worry about a thing.",
      },
      {
        q: "Who is your footage for?",
        a: "For estate agents, construction firms and architecture practices — and, via immohero.org, for private sellers who want to present their property at its best.",
      },
      {
        q: "Which regions do you cover?",
        a: "Our roots are in East Westphalia-Lippe and NRW. Through our growing network of pilots and creatives, we aim to make professional footage available across Europe.",
      },
      {
        q: "Do I get the usage rights to the footage?",
        a: "Yes, the usage rights for the agreed purpose are included in our packages.",
      },
      {
        q: "How do I join your pilot network?",
        a: "You fly, film or shoot? Apply via our partner ImmoHero — onboarding runs directly through the platform.",
      },
      {
        q: "Are you really a student company?",
        a: "Yes. Aero One is a JUNIOR student company at Evangelisch Stiftisches Gymnasium in Gütersloh — and was named Germany's best student company in 2026.",
      },
    ],
    ctaText: "Still have questions?",
    ctaLabel: "Write to us",
    ctaHref: "/kontakt",
  },

  expose: {
    eyebrow: "The difference",
    titlePre: "The same listing –",
    titleHighlight: "two different worlds.",
    text: "Flip the switch and see what professional aerial footage does to a listing.",
    toggleOff: "Without Aero One",
    toggleOn: "With Aero One",
    listingTitle: "Charming country house with large grounds",
    listingLocation: "33330 Gütersloh · 6 rooms · 220 m²",
    listingPrice: "€649,000",
    statViews: "Listing views",
    statInquiries: "Inquiries",
    badgePhotos: "10 HDR aerial photos",
    badgeVideo: "4K video",
    badge360: "360° tour",
    note: "Illustrative example",
    ctaLabel: "Book now!",
  },

  packageFinder: {
    eyebrow: "Package finder",
    title: "Find your package in 30 seconds",
    text: "Three questions – one recommendation.",
    q1: {
      question: "What would you like to showcase?",
      options: [
        { label: "Residential property", value: "wohnen" },
        { label: "Commercial & construction", value: "gewerbe" },
        { label: "Event & project", value: "projekt" },
      ],
    },
    q2: {
      question: "Which media do you need?",
      options: [
        { label: "Aerial photos", value: "foto" },
        { label: "Aerial photos + 4K video", value: "video" },
      ],
    },
    q3: {
      question: "One-time or recurring?",
      options: [
        { label: "One-time", value: "einmalig" },
        { label: "Recurring", value: "regelmaessig" },
      ],
    },
    resultTitle: "Our recommendation for you",
    resultText: "Based on your answers, this package fits best:",
    recommendedBadge: "Recommended",
    restart: "Start over",
  },

  roi: {
    eyebrow: "It pays off",
    title: "What does a poor listing cost you?",
    text: "Two sliders – one clear answer.",
    valueLabel: "Property value",
    salesLabel: "Sales per year",
    resultPre: "Aero One Basic costs just",
    resultPost: "of a single broker commission.",
    note: "Example calculation: typical buyer's commission of 3.57% incl. VAT.",
    ctaLabel: "Book now!",
  },

  statsBand: {
    items: [
      { value: 2, suffix: "", label: "competition wins in 2026" },
      { value: 13, suffix: "", label: "media features" },
      { value: 48, suffix: "h", label: "turnaround" },
      { value: 5, suffix: "", label: "team members" },
    ],
  },

  pressMarquee: {
    label: "The press on Aero One",
  },

  map: {
    hq: "Gütersloh · Home base",
    live: "Riga · Gen-E finals",
    vision: "Vision: Europe-wide network",
  },
};
