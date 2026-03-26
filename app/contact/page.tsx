import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with SEO Hub Ltd to discuss technical SEO, on-page optimization, local SEO, and content strategy."
};

export default function ContactPage() {
  return (
    <main className="container-shell page-grid py-14 pb-24 md:py-16">
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <section className="rounded-[2rem] border border-[rgba(36,22,79,0.08)] bg-[linear-gradient(180deg,#fff6df_0%,#fffdfa_100%)] p-8 shadow-[0_18px_42px_rgba(32,24,70,0.05)] md:p-12">
          <SectionHeading
            as="h1"
            eyebrow="Contact"
            title="Tell us what you want to grow."
            description="Use this starter form for new enquiries. Later, we can connect it to email, HubSpot, or your CRM."
          />
          <div className="mt-8 grid gap-4">
            {[
              "Technical SEO audits",
              "On-page optimization",
              "Local SEO campaigns",
              "Content strategy and briefs",
              "Monthly SEO retainers"
            ].map((item) => (
              <div
                key={item}
                className="rounded-[1rem] border border-[rgba(36,22,79,0.08)] bg-white px-4 py-3 text-sm font-semibold text-[#5b5676] shadow-[0_8px_20px_rgba(32,24,70,0.04)]"
              >
                {item}
              </div>
            ))}
          </div>
        </section>
        <ContactForm />
      </div>
    </main>
  );
}
