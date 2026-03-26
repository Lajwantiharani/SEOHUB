export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  updatedAt: string;
  sections: Array<{
    heading: string;
    body: string;
  }>;
};

export const posts: Post[] = [
  {
    slug: "how-to-prioritize-an-seo-audit",
    title: "How to Prioritize an SEO Audit Without Getting Lost in Noise",
    excerpt:
      "A practical way to turn hundreds of SEO audit findings into a roadmap your team can actually ship.",
    category: "SEO Process",
    updatedAt: "2026-03-24",
    sections: [
      {
        heading: "Start with business pages",
        body:
          "The most important SEO work usually lives on service, category, and revenue-driving URLs. Audit those first so your recommendations align with commercial impact."
      },
      {
        heading: "Separate blockers from improvements",
        body:
          "Not every issue deserves the same attention. Indexation errors and broken internal links often beat marginal metadata tweaks in priority."
      },
      {
        heading: "Translate findings into ownership",
        body:
          "Each recommendation should map to a person or team. That is how an audit becomes an execution plan instead of a forgotten PDF."
      }
    ]
  },
  {
    slug: "why-service-pages-matter-for-seo",
    title: "Why Service Pages Matter More Than Generic Agency Copy",
    excerpt:
      "Strong service pages help search engines understand relevance and help buyers understand exactly what you do.",
    category: "On-Page SEO",
    updatedAt: "2026-03-24",
    sections: [
      {
        heading: "Specificity improves rankings",
        body:
          "A dedicated technical SEO page or local SEO page usually sends a clearer signal than one broad services page trying to do everything."
      },
      {
        heading: "Specificity improves conversions",
        body:
          "Visitors convert more often when the page speaks directly to their need, challenges, and expected outcomes."
      },
      {
        heading: "Structure creates scale",
        body:
          "A repeatable page model for services, locations, and industries gives you room to expand without redesigning the whole site."
      }
    ]
  }
];
