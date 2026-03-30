import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { siteConfig } from "@/content/site";

const benefits = [
  "White label Freelancing Services with Superfast Turnarounds",
  "High-Quality Solutions for Both Small and Big Businesses",
  "Optimized ROI and Profit Margins Tailored for Business"
];

export function Hero() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    areaServed: "Worldwide",
    serviceType: [
      "Technical SEO",
      "On-page SEO",
      "Local SEO",
      "Web development",
      "Graphics services"
    ]
  };

  return (
    <section className="w-full bg-[#feebc1] px-0 py-2 md:py-3 lg:py-4">
      <JsonLd data={schema} />

      <div className="mx-auto w-full max-w-[1320px] px-4 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
        <div className="grid w-full items-center gap-8 lg:grid-cols-[1fr_1fr] lg:gap-10">
          <div className="min-w-0 pl-1 md:pl-2 lg:pl-4">
            <h1 className="mt-2 max-w-[16ch] text-[clamp(3.15rem,6vw,5.4rem)] font-semibold leading-[0.98] tracking-[-0.06em] text-[#000000]">
              Scale your SEO.
              <span className="mt-6 block text-[clamp(2.2rem,4vw,3.15rem)] tracking-normal text-[#000000]">Not your headcount.</span>
            </h1>

            <p className="mt-6 max-w-[33rem] text-[1rem] font-medium leading-7 text-[#595572] md:text-[1.02rem]">
              243,713 orders delivered since 2012.
            </p>

            <div className="mt-6 grid max-w-[39rem] gap-3.5 text-[0.97rem] leading-7 text-[#4f4968] md:text-[1rem]">
              {benefits.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#ffbf1b] text-sm font-bold text-[#24164f] shadow-[0_8px_18px_rgba(255,187,0,0.26)]">
                    +
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full bg-[#ffb300] px-7 py-3.5 text-[15px] font-semibold text-[#24164f] shadow-[0_14px_28px_rgba(255,179,0,0.25)] transition hover:bg-[#f5ac00]"
              >
                View Our Services
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-[rgba(36,22,79,0.10)] bg-white px-7 py-3.5 text-[15px] font-semibold text-[#24164f] transition hover:bg-[#fff8e4]"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[620px] lg:max-w-[700px]">
            <div className="absolute inset-x-[8%] top-[14%] bottom-[12%] rounded-[2rem] border border-[rgba(94,76,165,0.18)]" />
            <div className="absolute inset-x-[8%] top-[30%] h-px bg-[rgba(94,76,165,0.18)]" />
            <div className="absolute inset-x-[8%] top-[52%] h-px bg-[rgba(94,76,165,0.18)]" />
            <div className="absolute inset-x-[8%] top-[74%] h-px bg-[rgba(94,76,165,0.18)]" />

            <div className="relative z-10 flex items-end justify-center">
              <Image
                src="/hero-replacement.png"
                alt="SEO specialist visual"
                width={1200}
                height={1351}
                priority
                fetchPriority="high"
                sizes="(max-width: 768px) 92vw, (max-width: 1280px) 48vw, 700px"
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}




