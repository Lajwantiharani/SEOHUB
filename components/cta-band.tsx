import Link from "next/link";

export function CtaBand() {
  return (
    <section className="container-shell py-10 md:py-14">
      <div className="overflow-hidden rounded-[2rem] border border-[rgba(29,25,36,0.06)] bg-[#1d1924] px-8 py-10 text-white shadow-[0_28px_60px_rgba(24,18,33,0.16)] md:flex md:items-end md:justify-between md:px-10 md:py-12">
        <div className="max-w-2xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#ffb300]">
            Ready To Launch
          </p>
          <h2 className="mt-4 text-[clamp(2rem,4vw,3.2rem)] font-semibold leading-[1.02] tracking-[-0.05em] text-white">
            Your website foundation is ready for real service pages, case studies, and blog growth.
          </h2>
        </div>
        <Link
          href="/contact"
          className="mt-6 inline-flex items-center justify-center rounded-full bg-[#ffb300] px-6 py-3.5 text-[15px] font-semibold text-[#24164f] shadow-[0_12px_24px_rgba(255,179,0,0.22)] transition hover:bg-[#f3aa00] md:mt-0"
        >
          Start customizing
        </Link>
      </div>
    </section>
  );
}
