import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { caseStudies } from "@/content/site";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "See example SEO Hub Ltd case studies and how results can be presented on the website."
};

export default function CaseStudiesPage() {
  return (
    <main className="container-shell page-grid py-16 pb-24">
      <SectionHeading
        as="h1"
        eyebrow="Case Studies"
        title="Use proof, not promises, to sell your SEO process."
        description="These starter entries are placeholders you can replace with real clients, metrics, and timelines."
      />
      <div className="grid gap-6 lg:grid-cols-3">
        {caseStudies.map((study) => (
          <article key={study.title} className="glass-card rounded-[2rem] p-8">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--brand-dark)]">
              {study.industry}
            </p>
            <h2 className="mt-4 text-2xl font-black tracking-tight">{study.title}</h2>
            <p className="mt-4 prose-copy">{study.summary}</p>
            <div className="mt-6 grid gap-3">
              {study.metrics.map((metric) => (
                <div key={metric.label} className="rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)] p-4">
                  <p className="text-2xl font-black text-[var(--accent)]">{metric.value}</p>
                  <p className="mt-1 text-sm uppercase tracking-[0.18em] text-[var(--muted)]">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
