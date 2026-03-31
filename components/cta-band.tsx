export function CtaBand() {
  return (
    <section className="py-12 md:py-16">
      <div className="relative mx-auto w-full max-w-[980px] overflow-hidden rounded-[2.1rem] bg-[#040404] px-5 py-12 text-white shadow-[0_24px_60px_rgba(8,8,12,0.14)] sm:px-8 md:px-12 md:py-14 lg:px-16 lg:py-[4rem]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_72%_84%,rgba(126,84,0,0.62),transparent_34%),radial-gradient(ellipse_at_78%_74%,rgba(255,196,0,0.22),transparent_14%),radial-gradient(ellipse_at_70%_70%,rgba(184,117,0,0.18),transparent_22%),linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.14)_100%)]" />
        <div className="pointer-events-none absolute -left-3 bottom-[-18px] h-[92px] w-[92px] rounded-full border border-[rgba(196,188,47,0.26)] opacity-35 sm:h-[108px] sm:w-[108px]" />
        <div className="pointer-events-none absolute left-[31%] top-[8%] h-[180px] w-[82%] rounded-full border-t border-[rgba(255,214,111,0.22)] opacity-85 blur-[0.2px] md:h-[235px]" />
        <div className="pointer-events-none absolute left-[31.8%] top-[9.1%] h-[182px] w-[82%] rounded-full border-t border-[rgba(255,184,28,0.30)] opacity-75 blur-[1px] md:h-[238px]" />
        <div className="pointer-events-none absolute left-[32.4%] top-[10.2%] h-[184px] w-[82%] rounded-full border-t border-[rgba(255,236,167,0.18)] opacity-70 blur-[2px] md:h-[242px]" />
        <div className="pointer-events-none absolute left-[53%] top-[54%] h-[210px] w-[52%] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(154,98,0,0.34),rgba(154,98,0,0)_66%)] blur-[28px]" />

        <div className="relative mx-auto flex max-w-[860px] flex-col items-center text-center">
          <h2 className="max-w-[760px] text-[clamp(2rem,4vw,3.35rem)] font-semibold leading-[1.14] tracking-[-0.05em] text-white">
            Subscribe to our newsletter &
            <br />
            get SEO tips
          </h2>

          <form className="mt-8 flex w-full max-w-[620px] flex-col items-center gap-4 sm:max-w-[620px] sm:flex-row sm:justify-center" action="#">
            <label className="sr-only" htmlFor="newsletter-email">
              Enter your email
            </label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="Enter your email"
              className="h-[54px] w-full rounded-full border border-[rgba(255,255,255,0.48)] bg-[rgba(255,255,255,0.02)] px-5 text-[0.95rem] text-white outline-none placeholder:text-[rgba(225,221,232,0.62)] sm:flex-1"
            />
            <button
              type="submit"
              className="inline-flex h-[54px] shrink-0 items-center justify-center gap-2 rounded-full bg-[#ffb300] px-4 text-[0.92rem] font-semibold text-[#1a1300] shadow-[0_12px_28px_rgba(255,179,0,0.22)] transition hover:bg-[#f0ab00]"
            >
              <span>Subscribe</span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#ffb300]" aria-hidden="true">
                <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none">
                  <path d="M4 10h12M10 4l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
