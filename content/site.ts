// Main site settings used for SEO metadata and shared text.
export const siteConfig = {
  name: "SEO Hub Ltd",
  url: "https://seohubltd.com",
  description:
    "SEO Hub Ltd helps businesses grow through technical SEO, on-page optimization, local SEO, and content strategy.",
  keywords: [
    "SEO services",
    "technical SEO",
    "local SEO",
    "SEO agency",
    "SEO consultant",
    "on-page SEO",
    "SEO content strategy"
  ]
};

// Top navbar links.
export const navigation = [
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "Case Studies", href: "/case-studies" }
];

// General site stats that can be reused in different sections.
export const stats = [
  {
    value: "+162%",
    label: "Organic Lead Growth",
    description: "Use this area to show a representative client improvement over a campaign cycle."
  },
  {
    value: "90 Days",
    label: "Initial Roadmap",
    description: "Communicate that the engagement starts with clear priorities, not vague SEO retainers."
  },
  {
    value: "4 Pillars",
    label: "Execution Model",
    description: "Technical SEO, content, authority, and reporting move together in one operating plan."
  }
];

// Homepage highlight section content.
export const homepageHighlightStats = {
  featured: {
    value: "#1",
    title: "SEO Partner",
    description: "We help agencies and businesses scale delivery with fast, dependable white label SEO support."
  },
  items: [
    {
      value: "6.5M+",
      label: "Keywords tracked, optimized, and improved across active SEO campaigns"
    },
    {
      value: "150k+",
      label: "Pages refined through on-page SEO, content updates, and technical fixes"
    },
    {
      value: "50k+",
      label: "Businesses, agencies, and teams supported through growth-focused SEO execution"
    }
  ]
};

// Client feedback used on the homepage proof section.
export const testimonials = [
  {
    name: "Amina Tariq",
    role: "Growth Lead, B2B SaaS Brand",
    quote:
      "The team translated a messy SEO backlog into a clean system our content and engineering teams could actually execute."
  },
  {
    name: "Daniel Foster",
    role: "Founder, Local Services Company",
    quote:
      "Reporting stopped feeling abstract. We could finally see how rankings, pages, and leads were connected."
  }
];

// Homepage review carousel content.
export const clientReviews = [
  {
    name: "Karl Finnbogason",
    initials: "KF",
    reviewCount: "6 reviews",
    timeAgo: "5 hours ago",
    quote:
      "I just started working with SEOHubLtd and have been impressed by their strategic approach. The initial audit was detailed and actionable."
  },
  {
    name: "Kamal Barman",
    initials: "KB",
    reviewCount: "7 reviews",
    timeAgo: "4 months ago",
    quote:
      "I've been using SEOHubLtd for a few months. Their link-building strategy is top-tier and has already helped us move several high-value keywords."
  },
  {
    name: "Angelica Flores",
    initials: "AF",
    reviewCount: "1 review",
    timeAgo: "5 months ago",
    quote:
      "Working with this agency for three years has transformed our online presence. They consistently deliver results on time and provide highly valuable insights."
  },
  {
    name: "Mr S",
    initials: "MS",
    reviewCount: "36 reviews",
    timeAgo: "3 weeks ago",
    quote:
      "Dependable experts that help hugely with our organic growth. Communication has been smooth and the quality of work has stayed consistent."
  },
  {
    name: "Hristo Naloski",
    initials: "HN",
    reviewCount: "1 review",
    timeAgo: "3 weeks ago",
    quote:
      "Their technical SEO fixes were a game-changer for our site speed and indexing. They offer a great variety of solutions and clear support."
  },
  {
    name: "Mark Horton",
    initials: "MH",
    reviewCount: "8 reviews",
    timeAgo: "4 weeks ago",
    quote:
      "I have been a client for years. I appreciate the high-quality content they produce and how rare it is to find an agency that writes so well."
  },
  {
    name: "Doru Hanganu",
    initials: "DH",
    reviewCount: "16 reviews",
    timeAgo: "1 month ago",
    quote:
      "I've worked with this SEO group for about five years. I'm impressed by their transparent reporting and how they stay ahead of every update."
  },
  {
    name: "Daniel de Jongh",
    initials: "DJ",
    reviewCount: "1 review",
    timeAgo: "1 week ago",
    quote:
      "Really excellent service. Powerful, data-driven strategies that actually get results. Done exactly what they promised and then some."
  }
];

// Example case studies shown across the site.
export const caseStudies = [
  {
    title: "National service brand recovery after a technical SEO rebuild",
    industry: "Home Services",
    summary:
      "A full crawl cleanup, internal linking refresh, and template optimization helped recover traffic and strengthen lead volume.",
    metrics: [
      { label: "Organic traffic", value: "+118%" },
      { label: "Qualified leads", value: "+73%" }
    ]
  },
  {
    title: "Local SEO expansion across high-intent city pages",
    industry: "Healthcare",
    summary:
      "A location-page framework and Google Business Profile workflow improved map visibility and non-branded discovery.",
    metrics: [
      { label: "Local pack visibility", value: "+64%" },
      { label: "Calls from search", value: "+41%" }
    ]
  },
  {
    title: "Content system for a B2B company entering new categories",
    industry: "SaaS",
    summary:
      "Search intent mapping and product-led content briefs created a scalable publishing engine for bottom-funnel topics.",
    metrics: [
      { label: "Top 10 keywords", value: "+212%" },
      { label: "Demo requests", value: "+38%" }
    ]
  }
];
