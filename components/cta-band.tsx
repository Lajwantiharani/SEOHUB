export function CtaBand() {
  return (
    <section className="container-shell py-12 md:py-16">
      <div className="relative overflow-hidden rounded-[2.25rem] bg-[#020202] px-5 py-12 text-white shadow-[0_28px_70px_rgba(8,8,12,0.18)] sm:px-8 md:px-12 md:py-16 lg:px-16 lg:py-[4.4rem]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_74%_86%,rgba(24,7,72,0.98),transparent_42%),radial-gradient(ellipse_at_64%_71%,rgba(148,48,214,0.42),transparent_19%),radial-gradient(ellipse_at_57%_75%,rgba(255,179,0,0.2),transparent_11%),radial-gradient(ellipse_at_76%_62%,rgba(255,255,255,0.11),transparent_16%),linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(15,4,44,0.4)_100%)]" />
        <div className="pointer-events-none absolute -left-5 bottom-[-18px] h-[108px] w-[108px] rounded-full border border-[rgba(93,32,160,0.62)] bg-[radial-gradient(circle_at_45%_45%,rgba(67,14,109,0.22),rgba(0,0,0,0.98))] sm:-left-8 sm:bottom-[-26px] sm:h-[132px] sm:w-[132px]" />
        <div className="pointer-events-none absolute left-[24%] top-[8.5%] h-[196px] w-[88%] rounded-full border-t border-[rgba(255,255,255,0.22)] opacity-90 blur-[0.4px] sm:h-[248px] sm:w-[84%] md:left-[26%] md:top-[7.5%] md:h-[320px] md:w-[76%]" />
        <div className="pointer-events-none absolute left-[24.6%] top-[9.1%] h-[196px] w-[88%] rounded-full border-t border-[rgba(108,34,193,0.72)] opacity-85 blur-[1.8px] sm:h-[248px] sm:w-[84%] md:left-[26.4%] md:top-[8.1%] md:h-[320px] md:w-[76%]" />

        <div className="relative mx-auto flex max-w-[960px] flex-col items-center text-center">
          <h2 className="max-w-[760px] text-[clamp(2.05rem,5vw,4.2rem)] font-semibold leading-[1.18] tracking-[-0.05em] text-white">
            Subscribe to our newsletter to
            <br />
            get SEO agency updates
          </h2>

          <form className="mt-10 flex w-full max-w-[660px] flex-col gap-3 sm:flex-row sm:items-center sm:justify-center" action="#">
            <label className="sr-only" htmlFor="newsletter-email">
              Enter your email
            </label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="Enter your email"
              className="h-[56px] w-full rounded-full border border-[rgba(255,255,255,0.58)] bg-[rgba(18,8,36,0.72)] px-8 text-[1.02rem] text-white outline-none placeholder:text-[rgba(224,216,240,0.72)] sm:max-w-[450px]"
            />
            <button
              type="submit"
              className="inline-flex h-[56px] w-full shrink-0 items-center justify-center gap-3 rounded-full bg-[#ffb300] px-6 text-[1.02rem] font-semibold text-[#1a1300] shadow-[0_14px_30px_rgba(255,179,0,0.22)] transition hover:bg-[#f0ab00] sm:w-auto"
            >
              <span>Subscribe</span>
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#ffb300]" aria-hidden="true">
                <svg viewBox="0 0 20 20" className="h-5 w-5" fill="none">
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
