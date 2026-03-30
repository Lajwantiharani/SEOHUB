import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { Hero } from "@/components/hero";
import { ReviewsMarquee } from "@/components/reviews-marquee";
import { homepageHighlightStats } from "@/content/site";

const popularServices = [
  {
    title: "On-Page SEO Specialist",
    price: "$500",
    period: "/Placement",
    location: "5 Days",
    tags: ["SEO Audit", "Content Optimization", "ExpeMeta Tagsit", "Technical Fixes"]
  },
  {
    title: "Keyword Research Expert",
    price: "$400",
    period: "/Placement",
    location: "5 Days",
    tags: ["Keyword Analysis", "Competitor Research", "Search Intent", "Rank Tracking"]
  },
  {
    title: "Link Building Specialist",
    price: "$600",
    period: "/Placement",
    location: "5 Days",
    tags: ["Backlinks", "Guest Posting", "Outreach", "High DA Links"]
  },
  {
    title: "Technical SEO Expert",
    price: "$700",
    period: "/Placement",
    location: "5 Days",
    tags: ["Site Speed", "Crawl Fixes", "Indexing", "Schema Markup"]
  }
];

const seoBenefits = [
  {
    title: "SEO Growth",
    items: ["Improve search visibility", "Increase organic traffic"]
  },
  {
    title: "Smart Optimization",
    items: ["Targeted keyword strategy", "High-converting content"]
  }
];

const faqItems = [
  {
    question: "What SEO services do you offer?",
    answer:
      "We offer technical SEO audits, on-page optimization, keyword strategy, content planning, link-building support, and local SEO improvements tailored to your goals."
  },
  {
    question: "Do you guarantee first-page rankings on Google?",
    answer:
      "No ethical SEO agency can guarantee first-page rankings. We focus on sustainable best practices that improve visibility, traffic quality, and long-term growth."
  },
  {
    question: "Will SEO work for my business?",
    answer:
      "In most industries, yes. SEO works best when your offer has real search demand and your website can provide useful, trustworthy content for that audience."
  },
  {
    question: "How do you track and measure results?",
    answer:
      "We track keyword movement, organic traffic, conversions, and lead quality using tools like Google Search Console, GA4, and monthly performance reporting."
  }
];

const sideArticles = [
  {
    title: "Top SEO strategies to rank higher on Google",
    description:
      "Discover actionable techniques to improve your search rankings, from on-page SEO to link-building and performance optimization.",
    date: "Aug 17, 2024 • 5 min read",
    image: "/latest-article-top-v2.webp",
    alt: "Top SEO strategies to rank higher on Google",
    titleClassName: "text-[#000000]"
  },
  {
    title: "10 essential SEO tips for better rankings",
    description:
      "A quick guide covering the most important SEO practices to help your website gain visibility and attract more visitors.",
    date: "Sep 14, 2024 • 5 min read",
    image: "/latest-article-bottom-v2.webp",
    alt: "10 essential SEO tips for better rankings",
    titleClassName: "text-[#000000]"
  }
];

export default function HomePage() {
  return (
    <main className="pb-24">
      <Hero />

      <section className="flex justify-center px-4 py-10 md:py-12">
        <div className="w-full max-w-[1160px]">
          <div className="rounded-[2.2rem] bg-[#0d0c1a] px-[3px] py-[3px] shadow-[0_28px_60px_rgba(5,4,10,0.55)]">
            <div className="grid overflow-hidden rounded-[1.8rem] bg-[#0f0d23] lg:grid-cols-[320px_1fr]">
              <div className="rounded-[1.7rem] bg-[#ffb300] px-6 py-5 text-[#fffdf7] shadow-[0_18px_32px_rgba(255,176,0,0.2)] lg:ml-2 lg:pl-7 lg:pr-9 lg:py-4">
                <p className="text-5xl font-black tracking-[-0.06em]">{homepageHighlightStats.featured.value}</p>
                <h2 className="mt-2 text-[2rem] font-semibold tracking-[-0.05em]">{homepageHighlightStats.featured.title}</h2>
                <p className="mt-3 text-[14px] leading-7 text-[rgba(255,253,247,0.94)]">
                  {homepageHighlightStats.featured.description}
                </p>
              </div>
              <div className="grid w-full gap-0 px-6 py-7 text-white md:px-8 md:py-9 lg:grid-cols-3">
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

      <section className="bg-white px-4 py-12 md:py-16">
        <div className="mx-auto w-full max-w-[1260px] rounded-[1.7rem] px-4 py-8 md:px-8 md:py-10">
          <p className="mx-auto w-fit rounded-full border border-[#8f8a9d] px-8 py-2.5 text-[0.95rem] font-semibold uppercase tracking-[0.01em] text-[#201c2e]">
            TRUSTED PARTNERS
          </p>
          <h2 className="mt-8 text-center text-[clamp(1.85rem,3.4vw,3rem)] font-semibold tracking-[-0.03em] text-[#121216]">
            Empowering Businesses with Top Google Rankings
          </h2>

          <div className="mt-10 grid grid-cols-2 items-center gap-x-8 gap-y-7 text-[#9793a5] sm:grid-cols-3 lg:grid-cols-5">
            <p className="text-center text-[clamp(1.65rem,1.95vw,2.2rem)] font-black tracking-[-0.02em]">Logoipsum</p>
            <p className="text-center text-[clamp(1.65rem,1.95vw,2.2rem)] font-black tracking-[-0.02em]">logoipsum</p>
            <p className="text-center text-[clamp(1.65rem,1.95vw,2.2rem)] font-black tracking-[-0.02em]">LOGOIPSUM</p>
            <p className="text-center text-[clamp(1.65rem,1.95vw,2.2rem)] font-black tracking-[-0.02em]">logoipsum</p>
            <p className="col-span-2 text-center text-[clamp(1.65rem,1.95vw,2.2rem)] font-black tracking-[-0.02em] sm:col-span-1">logo ipsum</p>
          </div>
        </div>
      </section>

      <section className="bg-[#ffffff] px-4 py-12 md:py-16">
        <div className="mx-auto w-full max-w-[1220px]">
          <p className="mx-auto w-fit rounded-full border border-[#d9d0ef] px-5 py-1.5 text-[0.95rem] font-semibold leading-none text-[#000000]">
            Case Studies
          </p>
          <h2 className="mx-auto mt-5 max-w-[760px] text-center text-[clamp(2.4rem,4.8vw,4rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-[#000000]">
            Smooth process,
            <br />
            Outstanding SEO results.
          </h2>
          <p className="mx-auto mt-4 max-w-[620px] text-center text-[clamp(0.95rem,1.1vw,1.05rem)] font-medium text-[#8a859b]">
            Optimizing the seamless transition from keyword identification to page-one dominance
          </p>

          <div className="mt-10 grid gap-3 md:gap-4 lg:grid-cols-2">
            <article className="rounded-[1.5rem] border border-[#e7def6] bg-[linear-gradient(90deg,rgba(255,250,239,0.9)_0%,rgba(255,250,239,0.9)_48%,rgba(255,246,230,0.95)_48%,rgba(255,246,230,0.95)_52%,rgba(255,250,239,0.9)_52%,rgba(255,250,239,0.9)_100%)] p-6 md:p-7">
              <div className="relative w-full overflow-hidden rounded-[1rem] border border-[#ece5f7] bg-transparent p-4 shadow-[0_10px_24px_rgba(34,24,74,0.1)]">
                <Image
                  src="/case-seo-strategy-new.webp"
                  alt="SEO strategy dashboard"
                  width={1212}
                  height={848}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="h-full w-full rounded-[0.8rem] bg-transparent object-cover scale-[1.04]"
                />
              </div>
              <h3 className="mt-5 text-[clamp(2rem,2.7vw,2.9rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-[#000000]">
                SEO Strategy
              </h3>
              <p className="mt-3 max-w-[95%] text-[clamp(1rem,1.08vw,1.16rem)] font-medium leading-[1.7] text-[#756f89]">
                Boost your online presence with data-driven SEO strategies designed to increase rankings, traffic, and
                conversions.
              </p>
            </article>

            <article className="rounded-[1.5rem] border border-[#e7def6] bg-[linear-gradient(90deg,rgba(255,250,239,0.9)_0%,rgba(255,250,239,0.9)_48%,rgba(255,246,230,0.95)_48%,rgba(255,246,230,0.95)_52%,rgba(255,250,239,0.9)_52%,rgba(255,250,239,0.9)_100%)] p-6 md:p-7">
              <div className="relative w-full overflow-hidden rounded-[1rem] border border-[#ece5f7] bg-transparent p-4 shadow-[0_10px_24px_rgba(34,24,74,0.1)]">
                <Image
                  src="/case-keyword-research-new.webp"
                  alt="Keyword ranking dashboard"
                  width={1247}
                  height={835}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="h-full w-full rounded-[0.8rem] bg-transparent object-cover scale-[1.04]"
                />
              </div>
              <h3 className="mt-5 text-[clamp(2rem,2.7vw,2.9rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-[#000000]">
                Keyword Research
              </h3>
              <p className="mt-3 max-w-[95%] text-[clamp(1rem,1.08vw,1.16rem)] font-medium leading-[1.7] text-[#756f89]">
                We identify high-performing keywords to help your business rank higher on search engines and attract
                the right audience.
              </p>
            </article>
          </div>

          <article className="mt-3 grid rounded-[1.5rem] border border-[#e7def6] bg-[linear-gradient(90deg,rgba(255,250,239,0.9)_0%,rgba(255,250,239,0.9)_48%,rgba(255,246,230,0.95)_48%,rgba(255,246,230,0.95)_52%,rgba(255,250,239,0.9)_52%,rgba(255,250,239,0.9)_100%)] p-6 md:p-7 lg:grid-cols-[300px_1fr] lg:items-center lg:gap-8">
            <div>
              <h3 className="text-[clamp(2rem,3vw,3.1rem)] font-semibold leading-[1.14] tracking-[-0.03em] text-[#000000]">
                Complete SEO
                <br />
                Services
              </h3>
              <p className="mt-3 max-w-[250px] text-[clamp(0.98rem,1.02vw,1.08rem)] font-medium leading-[1.72] text-[#756f89]">
                From on-page optimization to technical SEO and link building, we provide complete solutions to grow your business online.
              </p>
              <button className="mt-5 inline-flex items-center justify-center rounded-full bg-[#ffb300] px-6 py-3 text-[14px] font-semibold text-[#000000] shadow-[0_10px_22px_rgba(255,179,0,0.25)] transition hover:bg-[#f6ab00]">
                Learn More
              </button>
            </div>

            <div className="relative mt-6 w-full overflow-hidden rounded-[1rem] border border-[#ece5f7] bg-transparent p-4 shadow-[0_10px_24px_rgba(34,24,74,0.1)] lg:mt-0">
              <Image
                src="/case-complete-seo-new.webp"
                alt="Complete SEO performance graph"
                width={1631}
                height={701}
                sizes="(max-width: 1024px) 100vw, 62vw"
                className="h-auto w-full rounded-[0.8rem] bg-transparent object-cover scale-[1.02]"
              />
            </div>
          </article>
        </div>
      </section>

      <section className="container-shell defer-section py-12 md:py-16">
        <div className="mx-auto max-w-[1120px]">
          <p className="mx-auto w-fit rounded-full border border-[rgba(68,56,128,0.18)] px-6 py-2 text-[clamp(0.85rem,1vw,1.05rem)] font-semibold uppercase tracking-[0.02em] text-[#000000]">
            TOP SERVICES
          </p>
          <h2 className="mt-6 text-center text-[clamp(2.3rem,5vw,4.05rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-[#000000]">
            Popular SEO Services We Offer
          </h2>
          <p className="mx-auto mt-6 max-w-[920px] text-center text-[clamp(1.05rem,1.4vw,1.65rem)] font-medium text-[#6f6a87]">
            Helping businesses grow with result-driven SEO solutions that boost rankings, traffic, and online
            visibility.
          </p>

          <div className="mt-10 grid gap-5 md:gap-6">
            {popularServices.map((service) => (
              <article
                key={service.title}
                className="grid gap-5 rounded-[1.6rem] border border-[rgba(95,78,164,0.24)] bg-transparent px-5 py-5 md:grid-cols-[1fr_auto] md:items-center md:gap-8 md:px-10 md:py-7"
              >
                <div>
                  <h3 className="text-[clamp(1.9rem,2.9vw,2.95rem)] font-semibold leading-[1.2] tracking-[-0.02em] text-[#000000]">
                    {service.title}
                  </h3>
                  <div className="mt-5 flex flex-wrap gap-3">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[rgba(95,78,164,0.24)] px-4 py-1.5 text-[clamp(0.95rem,1vw,1.3rem)] font-medium text-[#000000]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="text-left md:text-right">
                  <p className="text-[clamp(2rem,3vw,3.25rem)] font-semibold leading-[1] tracking-[-0.02em] text-[#000000]">
                    {service.price}
                    <span className="font-medium text-[#000000]">{service.period}</span>
                  </p>
                  <p className="mt-2 text-[clamp(1rem,1.2vw,1.45rem)] font-semibold text-[#000000]">
                    {service.location}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#ffb300] px-6 py-3 text-[14px] font-semibold text-[#000000] shadow-[0_10px_22px_rgba(255,179,0,0.25)] transition hover:bg-[#f6ab00]"
            >
              <span>View All Services</span>
              <span className="inline-flex items-center justify-center text-[#000000]" aria-hidden="true">
                &rarr;
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 md:py-16">
        <div className="mx-auto max-w-[1240px] rounded-[2rem] bg-white px-5 py-8 text-[#111111] shadow-[0_20px_50px_rgba(24,18,33,0.08)] sm:px-6 md:px-10 md:py-12 lg:px-16 lg:py-14">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#ffb300]/40 text-[#ffb300] shadow-[0_0_0_6px_rgba(255,179,0,0.07)]">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
                  <path d="m12 3 2.4 2.1 3.2-.3.9 3.1 2.9 1.5-1.2 3 1.2 3-2.9 1.5-.9 3.1-3.2-.3L12 21l-2.4-2.1-3.2.3-.9-3.1-2.9-1.5 1.2-3-1.2-3 2.9-1.5.9-3.1 3.2.3L12 3Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
                </svg>
              </div>

              <h2 className="mt-8 max-w-[560px] text-[clamp(2.2rem,4.2vw,4rem)] font-semibold leading-[1.06] tracking-[-0.04em] text-[#111111]">
                Increase Your Website
                <br />
                Traffic with Our SEO Experts
              </h2>
              <p className="mt-5 max-w-[540px] text-[clamp(0.98rem,1.06vw,1.08rem)] leading-7 text-[#6b6677]">
                In this free consultation, discover powerful SEO strategies to boost your rankings, drive organic traffic, and grow your business online.
              </p>

              <div className="mt-8 grid gap-6 sm:grid-cols-2 sm:gap-8">
                {seoBenefits.map((benefit) => (
                  <div key={benefit.title}>
                    <h3 className="text-[1.5rem] font-semibold text-[#111111]">{benefit.title}</h3>
                    <ul className="mt-4 space-y-3 text-[0.98rem] text-[#6b6677]">
                      {benefit.items.map((item) => (
                        <li key={item} className="flex items-center gap-3">
                          <svg viewBox="0 0 16 16" className="h-4 w-4 shrink-0 text-[#ffb300]" fill="none" aria-hidden="true">
                            <path d="M3.5 8.5 6.5 11.5 12.5 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[520px]">
              <div className="overflow-hidden rounded-[1.6rem] bg-[#f3f0ea] shadow-[0_18px_45px_rgba(0,0,0,0.2)]">
                <Image
                  src="/hero-replacement.webp"
                  alt="SEO client consultation"
                  width={900}
                  height={760}
                  sizes="(max-width: 1024px) 100vw, 520px"
                  className="h-[320px] w-full object-cover md:h-[390px]"
                  priority
                />
              </div>

              <div className="mt-4 w-full max-w-[360px] rounded-[1.35rem] bg-white p-4 text-[#1b1b1f] shadow-[0_18px_45px_rgba(0,0,0,0.22)] sm:p-5 lg:absolute lg:left-[-40px] lg:top-[42%] lg:mt-0 lg:w-[70%]">
                <p className="text-[1.45rem] font-semibold leading-none">SEO</p>
                <p className="text-[1.1rem] font-semibold leading-none">Performance</p>

                <div className="mt-5 space-y-4">
                  <div>
                    <div className="mb-1.5 flex items-center justify-between text-[0.72rem] font-semibold text-[#53515f]">
                      <span>Keyword Ranking Growth</span>
                      <span>6 months growth</span>
                    </div>
                    <div className="h-2.5 rounded-full bg-[#ece7da]">
                      <div className="h-full w-[78%] rounded-full bg-[#ffb300]"></div>
                    </div>
                    <div className="mt-1.5 flex items-center justify-between text-[0.7rem] font-semibold text-[#8a8694]">
                      <span>On track</span>
                      <span>78%</span>
                    </div>
                  </div>
                  <div>
                    <div className="mb-1.5 flex items-center justify-between text-[0.72rem] font-semibold text-[#53515f]">
                      <span>Keyword Ranking Growth</span>
                      <span>85% improvement</span>
                    </div>
                    <div className="h-2.5 rounded-full bg-[#ece7da]">
                      <div className="h-full w-[85%] rounded-full bg-[#ffb300]"></div>
                    </div>
                    <div className="mt-1.5 flex items-center justify-between text-[0.7rem] font-semibold text-[#8a8694]">
                      <span>On track</span>
                      <span>85%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="overflow-hidden rounded-[1.6rem] bg-[#f0ece6] shadow-[0_18px_45px_rgba(0,0,0,0.2)] lg:order-1">
              <Image
                src="/Image.webp"
                alt="SEO business consultation"
                width={1200}
                height={900}
                sizes="(max-width: 1024px) 100vw, 520px"
                className="h-[320px] w-full object-cover md:h-[390px]"
              />
            </div>

            <div className="lg:order-2 lg:pl-8">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#ffb300]/40 text-[#ffb300] shadow-[0_0_0_6px_rgba(255,179,0,0.07)]">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
                  <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8" />
                  <path d="M12 8v8M8 12h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </div>
              <h2 className="mt-7 max-w-[560px] text-[clamp(2.2rem,4.2vw,4rem)] font-semibold leading-[1.08] tracking-[-0.04em] text-[#111111]">
                Grow Your Business with
                <br />
                Top SEO Experts
              </h2>
              <p className="mt-5 max-w-[560px] text-[clamp(0.98rem,1.06vw,1.08rem)] leading-7 text-[#6b6677]">
                Partner with a results-driven SEO agency. Get access to proven strategies, expert insights, and data-backed growth plans.
              </p>
              <button className="mt-8 inline-flex items-center justify-center rounded-full bg-[#ffb300] px-7 py-3 text-[14px] font-semibold text-[#191720] shadow-[0_10px_24px_rgba(255,179,0,0.2)] transition hover:bg-[#f0ab00]">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      <ReviewsMarquee />

      <section className="bg-white px-4 py-16 md:py-20">
        <div className="mx-auto grid w-full max-w-[1240px] items-start gap-10 lg:grid-cols-[260px_minmax(0,1fr)] lg:items-center lg:gap-14">
          <h2 className="text-left text-[clamp(2.4rem,4.4vw,5.1rem)] font-medium leading-[1.02] tracking-[-0.03em] text-[#0b0b0d] lg:self-center">
            Frequently
            <br />
            asked
            <br />
            questions
          </h2>

          <div className="grid gap-4">
            <details className="group rounded-[20px] bg-[#efefed] px-6 py-6 md:px-7 md:py-6" open>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[clamp(1.4rem,1.5vw,2rem)] font-semibold leading-[1.25] text-[#151518] [&::-webkit-details-marker]:hidden">
                How long does it take to see SEO results?
                <svg
                  className="h-5 w-5 shrink-0 stroke-[2.2] text-[#1c1c20] transition-transform duration-200 group-open:rotate-180"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path d="m6 9 6 6 6-6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </summary>
              <p className="mt-4 max-w-[98%] text-[clamp(1.06rem,1.15vw,1.3rem)] font-normal leading-[1.6] text-[#2f3035]">
                SEO is a long-term strategy. Most clients start seeing noticeable improvements within 3-6 months,
                depending on competition, industry, and current website condition.
              </p>
            </details>

            {faqItems.map((item) => (
              <details key={item.question} className="group rounded-[20px] bg-[#efefed] px-6 py-5 md:px-7 md:py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[clamp(1.25rem,1.33vw,1.65rem)] font-semibold leading-[1.25] text-[#1b1b1d] [&::-webkit-details-marker]:hidden">
                  {item.question}
                  <svg
                    className="h-5 w-5 shrink-0 stroke-[2.2] text-[#1c1c20] transition-transform duration-200 group-open:rotate-180"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path d="m6 9 6 6 6-6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </summary>
                <p className="mt-4 max-w-[98%] text-[clamp(1.06rem,1.15vw,1.3rem)] font-normal leading-[1.6] text-[#2f3035]">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#ffffff] px-4 py-12 md:py-14">
        <div className="mx-auto w-full max-w-[1240px]">
          <p className="mx-auto w-fit rounded-full border border-[#d9d0ef] px-6 py-2 text-[0.88rem] font-semibold uppercase tracking-[0.02em] text-[#000000]">
            LATEST ARTICLES
          </p>
          <h2 className="mx-auto mt-5 max-w-[760px] text-center text-[clamp(2.3rem,4.2vw,4rem)] font-semibold leading-[1.12] tracking-[-0.03em] text-[#000000]">
            Get expert insights
            <br />
            &amp; SEO strategies from our blog
          </h2>
          <p className="mx-auto mt-4 max-w-[760px] text-center text-[clamp(0.98rem,1.05vw,1.1rem)] font-medium text-[#000000]">
            Actionable tips, trends, and guides to help you grow your traffic and rank higher on search engines
          </p>

          <div className="mt-10 grid gap-4 lg:grid-cols-[1.02fr_0.98fr]">
            <article className="overflow-hidden rounded-[1.55rem] border border-[#e1dcef] bg-white shadow-[0_4px_12px_rgba(44,31,116,0.05)]">
              <div className="w-full">
                <Image
                  src="/latest-article-main.webp"
                  alt="How to increase organic traffic in 2025"
                  width={518}
                  height={338}
                  sizes="(max-width: 1024px) 100vw, 590px"
                  className="h-[240px] w-full object-cover sm:h-[290px] lg:h-[338px]"
                />
              </div>
              <div className="p-4">
                <h3 className="text-[clamp(1.55rem,2vw,2.1rem)] font-semibold leading-[1.18] tracking-[-0.02em] text-[#000000]">
                  How to increase organic traffic in 2025
                </h3>
                <p className="mt-3 text-[clamp(0.92rem,0.95vw,1rem)] font-semibold text-[#000000]">Sep 24, 2024  •  5 min read</p>
              </div>
            </article>

            <div className="grid gap-4">
              {sideArticles.map((article) => (
                <article key={article.title} className="grid grid-cols-[116px_minmax(0,1fr)] items-center rounded-[1.45rem] border border-[#efe7f7] bg-white p-3 shadow-[0_4px_12px_rgba(44,31,116,0.05)] sm:grid-cols-[168px_minmax(0,1fr)] sm:gap-4 sm:p-4 md:p-[18px]">
                  <div className="relative h-[116px] w-[116px] overflow-hidden rounded-[0.95rem] sm:h-[156px] sm:w-[168px] sm:rounded-[1rem]">
                    <Image
                      src={article.image}
                      alt={article.alt}
                      width={380}
                      height={380}
                      sizes="(max-width: 1024px) 100vw, 28vw"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="min-w-0 pl-3 sm:mt-0 sm:max-w-[255px] sm:pl-0">
                    <h3 className={`text-[clamp(1.05rem,1.5vw,1.78rem)] font-semibold leading-[1.12] tracking-[-0.025em] ${article.titleClassName}`}>
                      {article.title}
                    </h3>
                    <p className="mt-2 text-[0.93rem] leading-[1.5] text-[#69657a] sm:mt-3 sm:text-[clamp(0.95rem,0.96vw,1rem)]">
                      {article.description}
                    </p>
                    <p className="mt-2 text-[0.9rem] font-semibold text-[#000000] sm:mt-3 sm:text-[0.98rem]">{article.date}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="defer-section">
        <CtaBand />
      </section>
    </main>
  );
}



























