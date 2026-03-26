// Type for one service card item.
export type Service = {
  slug: string;
  title: string;
  tag: string;
  description: string;
  outcomes: string[];
};

// Shared service content used on the homepage and services page.
export const services: Service[] = [
  {
    slug: "starter-boost",
    title: "Starter Boost",
    tag: "Quick Start",
    description:
      "A starter SEO package for businesses that need a clean beginning with on-page fixes, priority keywords, and a focused growth direction.",
    outcomes: ["Keyword setup", "On-page fixes", "Launch roadmap"]
  },
  {
    slug: "rank-on-first-page",
    title: "Rank On First Page",
    tag: "Ranking Push",
    description:
      "A stronger SEO package designed to improve rankings on important terms through content refinement, internal linking, and technical improvements.",
    outcomes: ["Content updates", "Internal links", "Ranking strategy"]
  },
  {
    slug: "local-citation-building",
    title: "Local Citation Building",
    tag: "Local SEO",
    description:
      "A local visibility service focused on business listings, local trust signals, and citation consistency to improve map and local search presence.",
    outcomes: ["Citation cleanup", "Local listings", "Trust signals"]
  },
  {
    slug: "seo-content-strategy",
    title: "SEO Content Strategy",
    tag: "Content Engine",
    description:
      "Plan topic clusters, content calendars, and briefs that match search intent and business value.",
    outcomes: ["Topic mapping", "Keyword clusters", "Writer-ready briefs"]
  },
  {
    slug: "seo-audits",
    title: "SEO Audits",
    tag: "Diagnostics",
    description:
      "Deliver a structured breakdown of technical, content, UX, and SERP opportunity gaps with clear action priorities.",
    outcomes: ["Priority matrix", "Opportunity analysis", "Stakeholder-ready reporting"]
  },
  {
    slug: "monthly-retainers",
    title: "Monthly SEO Retainers",
    tag: "Ongoing Growth",
    description:
      "Run continuous SEO improvement with planning, execution support, performance reviews, and strategic iteration.",
    outcomes: ["Monthly roadmap", "Execution support", "Performance reporting"]
  }
];
