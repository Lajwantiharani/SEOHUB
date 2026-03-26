import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore SEO Hub Ltd services including technical SEO, local SEO, on-page optimization, SEO content, and audits."
};

export default function ServicesPage() {
  return (
    <main className="container-shell page-grid py-14 pb-24 md:py-16">
      <section>
        <SectionHeading
          as="h1"
          eyebrow="Services"
          title="Specialized SEO services for brands that want more qualified organic growth."
          description="Every service can stand alone or plug into a broader growth retainer."
        />
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>
    </main>
  );
}
