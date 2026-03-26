import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "About",
  description: "Learn how SEO Hub Ltd approaches technical SEO, content systems, and performance growth."
};

export default function AboutPage() {
  return (
    <main className="container-shell page-grid py-14 pb-24 md:py-16">
      <section className="rounded-[2rem] border border-[rgba(36,22,79,0.08)] bg-white p-8 shadow-[0_18px_42px_rgba(32,24,70,0.05)] md:p-12">
        <SectionHeading
          as="h1"
          eyebrow="About SEO Hub Ltd"
          title="We build SEO systems that support long-term traffic and lead growth."
          description="Our model combines technical clarity, sharp messaging, and a reporting cadence that keeps teams focused on what moves revenue."
        />
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            ["Strategy first", "We map SEO work to commercial goals before touching a single page."],
            ["Execution ready", "Recommendations are designed to be shipped by real marketing and dev teams."],
            ["Transparent reporting", "Each month shows what changed, what improved, and what comes next."]
          ].map(([title, copy]) => (
            <div key={title} className="rounded-[1.5rem] border border-[rgba(36,22,79,0.08)] bg-[#fff8ea] p-6">
              <h2 className="text-[1.35rem] font-semibold tracking-[-0.03em] text-[#24164f]">{title}</h2>
              <p className="mt-3 text-[0.98rem] leading-8 text-[#6a6485]">{copy}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
