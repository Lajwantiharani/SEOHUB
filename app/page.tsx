import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { Hero } from "@/components/hero";
import { SectionHeading } from "@/components/section-heading";
import { homepageHighlightStats, testimonials } from "@/content/site";
import { services } from "@/content/services";

export default function HomePage() {
  const homepageServices = services.slice(0, 3);

  return (
    <main className="pb-24">
      <Hero />

      <section className="flex justify-center px-4 py-10 md:py-12">
        <div className="w-full max-w-[1160px]">
          <div className="rounded-[2.2rem] bg-[#0d0c1a] px-[3px] py-[3px] shadow-[0_28px_60px_rgba(5,4,10,0.55)]">
            <div className="grid overflow-hidden rounded-[1.8rem] bg-[#0f0d23] lg:grid-cols-[320px_1fr]">
              <div className="rounded-[1.7rem] bg-[#ffb300] pl-7 pr-9 py-4 text-[#fffdf7] shadow-[0_18px_32px_rgba(255,176,0,0.2)] lg:ml-2">
                <p className="text-5xl font-black tracking-[-0.06em]">{homepageHighlightStats.featured.value}</p>
                <h2 className="mt-2 text-[2rem] font-semibold tracking-[-0.05em]">{homepageHighlightStats.featured.title}</h2>
                <p className="mt-3 text-[14px] leading-7 text-[rgba(255,253,247,0.94)]">
                  {homepageHighlightStats.featured.description}
                </p>
              </div>
              <div className="grid w-full gap-0 px-8 py-9 text-white lg:grid-cols-3">
                {homepageHighlightStats.items.map((item) => (
                  <div key={item.value} className="flex flex-col gap-3 border-b border-[rgba(255,255,255,0.08)] pb-6 last:border-b-0 lg:border-b-0 lg:border-l lg:border-[rgba(255,255,255,0.08)] lg:pb-0 lg:pl-6 lg:pt-0">
                    <p className="text-[2.6rem] font-black tracking-[-0.04em] md:text-[3rem]">
                      {item.value}
                    </p>
                    <p className="text-[15px] font-medium leading-7 text-[rgba(255,255,255,0.78)]">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-shell defer-section py-10">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Core Services"
            title="Flexible SEO support built for fast wins and steady growth."
            description="A cleaner service list on the homepage so visitors can scan offers quickly and jump to the full services page when needed."
          />
          <Link
            href="/services"
            className="inline-flex items-center justify-center self-start rounded-full border border-[rgba(36,22,79,0.12)] bg-white px-6 py-3 text-sm font-semibold text-[#24164f] transition hover:bg-[#fff8e4] sm:self-auto"
          >
            View All Services
          </Link>
        </div>

        <div className="grid gap-5">
          {homepageServices.map((service, index) => (
            <article
              key={service.slug}
              className="grid gap-5 rounded-[2rem] border border-[rgba(36,22,79,0.10)] bg-white px-6 py-6 shadow-[0_14px_28px_rgba(32,24,70,0.05)] transition hover:border-[rgba(36,22,79,0.18)] md:px-8 md:py-7 lg:grid-cols-[1.55fr_0.45fr] lg:items-center"
            >
              <div>
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[rgba(255,176,0,0.14)] text-base font-black text-[#c98500]">
                    {`0${index + 1}`}
                  </span>
                  <p className="text-base font-semibold text-[#6b6786]">
                    SEO Hub Ltd
                  </p>
                </div>

                <h2 className="mt-4 text-[clamp(1.8rem,3.2vw,2.45rem)] font-semibold tracking-[-0.05em] text-[#24164f]">
                  {service.title}
                </h2>

                <div className="mt-6 flex flex-wrap gap-3">
                  {service.outcomes.map((outcome) => (
                    <span
                      key={outcome}
                      className="rounded-full border border-[rgba(36,22,79,0.14)] px-4 py-2 text-sm font-medium text-[#6b6786]"
                    >
                      {outcome}
                    </span>
                  ))}
                </div>
              </div>

              <div className="text-left lg:text-right">
                <p className="text-[clamp(2.1rem,4vw,3.1rem)] font-semibold tracking-[-0.05em] text-[#24164f]">
                  {index === 0 ? "$499" : index === 1 ? "$899" : "$299"}
                </p>
                <p className="mt-2 text-lg font-medium text-[#6c6283]">
                  {index === 0 ? "Starter Package" : index === 1 ? "Ranking Package" : "Local Package"}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container-shell defer-section py-10">
        <SectionHeading
          eyebrow="Proof"
          title="A process built for measurable SEO growth."
          description="We align audits, on-page execution, content systems, and reporting into one operating rhythm."
        />
        <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="glass-card rounded-[2rem] p-8">
            <ol className="grid gap-6">
              {[
                "Audit the site, keyword landscape, and conversion funnel.",
                "Prioritize pages and opportunities with the strongest ROI signal.",
                "Implement technical fixes, content briefs, and internal linking.",
                "Review rankings, traffic, leads, and next experiments every month."
              ].map((item, index) => (
                <li
                  key={item}
                  className="grid gap-2 border-b border-[var(--border)] pb-6 last:border-b-0 last:pb-0 md:grid-cols-[4rem_1fr]"
                >
                  <span className="text-3xl font-black text-[var(--brand-dark)]">
                    {`0${index + 1}`}
                  </span>
                  <p className="text-lg leading-8 text-[#1a1a1a]">{item}</p>
                </li>
              ))}
            </ol>
          </div>
          <div className="grid gap-6">
            {testimonials.map((testimonial) => (
              <blockquote key={testimonial.name} className="glass-card rounded-[2rem] p-8">
                <p className="text-lg leading-8 text-[#1a1a1a]">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <footer className="mt-6">
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm uppercase tracking-[0.18em] text-[var(--muted)]">
                    {testimonial.role}
                  </p>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="defer-section">
        <CtaBand />
      </section>
    </main>
  );
}










