import Link from "next/link";
import { navigation, siteConfig } from "@/content/site";

export function Footer() {
  return (
    <footer className="container-shell py-10 md:py-14">
      <div className="rounded-[2rem] border border-[rgba(36,22,79,0.08)] bg-[linear-gradient(180deg,#fff8ea_0%,#ffffff_100%)] p-7 shadow-[0_22px_52px_rgba(32,24,70,0.06)] md:grid md:grid-cols-[1fr_auto] md:items-end md:gap-8 md:p-10">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#ffb300]">
            {siteConfig.name}
          </p>
          <p className="mt-4 max-w-2xl text-[clamp(1.6rem,3vw,2.4rem)] font-semibold leading-[1.08] tracking-[-0.04em] text-[#24164f]">
            A modern starter for an SEO services brand that wants fast performance and full control in code.
          </p>
        </div>
        <div className="mt-6 flex flex-wrap gap-3 md:mt-0 md:justify-end">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full border border-[rgba(36,22,79,0.10)] bg-white px-4 py-2.5 text-sm font-semibold text-[#4f4968] transition hover:bg-[#fff5d9] hover:text-[#24164f]"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
