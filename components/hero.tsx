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
    <section
      className="hero-wash w-full overflow-hidden pb-8 pt-4 md:pb-12 md:pt-6 lg:pb-14 lg:pt-6"
      style={{ minHeight: "calc(100vh - 100px)" }}
    >
      <JsonLd data={schema} />

      <div className="container-shell grid items-center gap-10 px-4 md:px-6 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-8 lg:px-8 xl:gap-10">
        <div className="min-w-0 max-w-[35rem] pt-4 md:pt-8 lg:pt-10">
          

          <h1 className="mt-6 max-w-[16ch] text-[clamp(3.15rem,6vw,5.4rem)] font-semibold leading-[0.98] tracking-[-0.06em] text-[#000000]">
            Scale your SEO.
            <span className="mt-6 block text-[clamp(2.2rem,4vw,3.15rem)] text-[#000000]">Not your headcount.</span>
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

        <div className="relative mx-auto min-w-0 w-full max-w-[650px] lg:max-w-[720px] xl:max-w-[760px]">
          <div className="absolute inset-x-[11%] top-10 bottom-8 rounded-[2.4rem] border border-[rgba(36,22,79,0.08)] bg-[linear-gradient(180deg,rgba(255,247,224,0.94),rgba(255,255,255,0.80))] shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]" />

          <div className="relative z-10 h-[380px] sm:h-[450px] md:h-[520px] lg:h-[580px]">
            <div className="absolute left-[4%] top-10 z-20 max-w-[220px] rounded-[1.1rem] border border-[rgba(36,22,79,0.08)] bg-white px-4 py-3 shadow-[0_18px_35px_rgba(32,24,84,0.10)] md:left-[7%] lg:top-16">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-[0.95rem] bg-[#ff8c57] text-lg font-black text-[#24164f]">
                  W
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-[#24164f] md:text-[15px]">Motion Designer</p>
                  <p className="mt-1 truncate text-xs text-[#7a7394] md:text-[13px]">AirMotion . Remote</p>
                </div>
              </div>
            </div>

            <div className="absolute right-[2%] top-32 z-20 max-w-[200px] rounded-[1.1rem] border border-[rgba(36,22,79,0.08)] bg-white px-4 py-3 shadow-[0_18px_35px_rgba(32,24,84,0.10)] md:right-[6%] lg:top-44">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-[0.95rem] bg-[#f0cdb0] text-sm font-bold text-[#24164f]">
                  M
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-[#24164f] md:text-[15px]">Mark Wood</p>
                  <p className="mt-1 truncate text-xs text-[#7a7394] md:text-[13px]">Recruiter</p>
                </div>
              </div>
            </div>

            <div className="absolute inset-0 z-10 flex items-end justify-center overflow-hidden">
              <Image
                src="/hero-right.avif"
                alt="Professional standing with tablet"
                width={620}
                height={820}
                priority
                fetchPriority="high"
                sizes="(max-width: 768px) 80vw, 42vw"
                className="max-h-[85%] w-auto object-contain md:max-h-[89%] lg:max-h-[92%]"
              />
            </div>

            <div className="absolute bottom-3 left-1/2 z-20 flex w-[72%] max-w-[420px] -translate-x-1/2 items-center gap-3 rounded-full border border-[rgba(36,22,79,0.06)] bg-white px-5 py-3 text-sm text-[#8c87a5] shadow-[0_18px_35px_rgba(32,24,84,0.10)]">
              <span className="text-base text-[#bab3cc]">Q</span>
              <span className="truncate">Find your dream job by Recruit</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
