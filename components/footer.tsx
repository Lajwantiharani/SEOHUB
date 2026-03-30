import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-10 pt-24 md:pt-28" style={{ backgroundColor: "#ffffff" }}>
      <div className="container-shell md:px-6 lg:px-10">
        <div className="grid gap-10 text-[#3a3470] md:grid-cols-[1.18fr_0.92fr_0.92fr_0.72fr] md:gap-8">
          <p className="max-w-[21.5rem] text-[clamp(1.4rem,2vw,2.1rem)] font-medium leading-[1.6] tracking-[-0.01em]">
            We are a results-driven SEO agency helping businesses grow their online visibility, increase organic
            traffic, and drive measurable results through data-backed strategies.
          </p>

          <div className="space-y-2 text-[clamp(1.3rem,1.55vw,1.85rem)] font-normal leading-[1.6] md:justify-self-end">
            <p className="mb-2 font-medium">Company</p>
            <Link href="/" className="block">Home</Link>
            <Link href="/about" className="block">About us</Link>
            <Link href="/contact" className="block">Contact us</Link>
            <Link href="/contact" className="block">Get a Quote</Link>
          </div>

          <div className="space-y-2 text-[clamp(1.3rem,1.55vw,1.85rem)] font-normal leading-[1.6] md:justify-self-end">
            <p className="mb-2 font-medium">Internal Links</p>
            <Link href="/blog" className="block">Blog</Link>
            <Link href="/case-studies" className="block">Case-Study</Link>
            <Link href="/contact" className="block">SEO Audit</Link>
            <Link href="/services" className="block">Keyword Research</Link>
          </div>

          <div className="space-y-2 text-[clamp(1.3rem,1.55vw,1.85rem)] font-normal leading-[1.6] md:justify-self-end">
            <p className="mb-2 font-medium">Social</p>
            <a href="#" className="block">Facebook</a>
            <a href="#" className="block">Instagram</a>
            <a href="#" className="block">LinkedIn</a>
            <a href="#" className="block">Twitter</a>
          </div>
        </div>

        <div className="mt-14 grid gap-5 text-[clamp(1.2rem,1.3vw,1.55rem)] font-medium leading-[1.45] text-[#3a3470] md:grid-cols-[1.18fr_0.92fr_1.64fr] md:items-center md:gap-8">
          <p>Office 433 85 Dunstall Hill, Wolverhampton</p>
          <a href="mailto:info@seohubltd.com" className="md:justify-self-end">info@seohubltd.com</a>
          <p className="md:justify-self-end">Copyright (c) 2026 SeoHub Ltd - All Rights Reserved.</p>
        </div>
      </div>

      <div className="px-3 pb-14 pt-20">
        <p className="mx-auto w-full text-center text-[clamp(3rem,14vw,14rem)] font-black leading-[0.92] tracking-[-0.015em]">
          <span className="text-[#ffb300]">SEO</span>
          <span className="text-black">HUBLTD</span>
        </p>
      </div>
    </footer>
  );
}
