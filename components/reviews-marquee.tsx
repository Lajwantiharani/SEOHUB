import { clientReviews } from "@/content/site";

function ReviewCard({
  name,
  initials,
  reviewCount,
  timeAgo,
  quote
}: {
  name: string;
  initials: string;
  reviewCount: string;
  timeAgo: string;
  quote: string;
}) {
  return (
    <article className="flex h-full w-[280px] min-w-[280px] shrink-0 flex-col rounded-[1.7rem] border border-[#f2e8db] bg-white/90 p-5 whitespace-normal shadow-[0_10px_30px_rgba(20,14,8,0.05)] backdrop-blur">
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f8e5d6] text-[0.8rem] font-bold text-[#b26f3f]">
          {initials}
        </div>
        <div>
          <p className="text-[1.02rem] font-semibold leading-tight text-[#1b1b1b]">{name}</p>
          <p className="mt-0.5 text-[0.84rem] font-medium text-[#6f6a62]">{reviewCount}</p>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-2">
        <span className="text-[1rem] tracking-[0.1em] text-[#ffb300]" aria-label="5 star review">
          {"\u2605".repeat(5)}
        </span>
        <span className="text-[0.85rem] font-medium text-[#9d978e]">{timeAgo}</span>
      </div>

      <p className="mt-4 min-h-[8.25rem] text-[0.98rem] leading-7 text-[#3f3a35]">{quote}</p>
    </article>
  );
}

function ReviewTrack({
  reviews,
  reverse = false
}: {
  reviews: typeof clientReviews;
  reverse?: boolean;
}) {
  const loopedReviews = [...reviews, ...reviews];

  return (
    <div className="review-fade relative overflow-hidden py-2">
      <div className={`review-track ${reverse ? "review-track-reverse" : ""}`} aria-hidden="true">
        {loopedReviews.map((review, index) => (
          <ReviewCard
            key={`${review.name}-${index}`}
            name={review.name}
            initials={review.initials}
            reviewCount={review.reviewCount}
            timeAgo={review.timeAgo}
            quote={review.quote}
          />
        ))}
      </div>
    </div>
  );
}

export function ReviewsMarquee() {
  const firstRow = clientReviews.slice(0, 4);
  const secondRow = clientReviews.slice(4);

  return (
    <section className="bg-white px-4 py-14 md:py-18">
      <div className="mx-auto w-full max-w-[1280px]">
        <h2 className="text-center text-[clamp(2.2rem,4.8vw,4.15rem)] font-semibold tracking-[-0.04em] text-[#070707]">
          What Our Clients Say
        </h2>

        <div className="mx-auto mt-7 flex max-w-[980px] flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-[clamp(1.2rem,1.6vw,1.7rem)] font-semibold text-[#111111]">Our latest reviews on Google</p>
            <div className="mt-2 flex flex-wrap items-center gap-3">
              <span className="text-[1.3rem] tracking-[0.18em] text-[#ffb300]" aria-hidden="true">
                {"\u2605".repeat(5)}
              </span>
              <p className="text-[1.05rem] text-[#4d4a45]">
                <span className="font-semibold text-[#111111]">5.0</span> rating of 39 reviews
              </p>
            </div>
          </div>

          <button
            type="button"
            className="inline-flex w-full items-center justify-center rounded-full bg-[#050505] px-7 py-3 text-[0.95rem] font-semibold text-white transition hover:bg-[#161616] sm:w-fit"
          >
            Read All Reviews
          </button>
        </div>

        <div className="mt-12 space-y-6 overflow-hidden">
          <ReviewTrack reviews={firstRow} />
          <ReviewTrack reviews={secondRow} reverse />
        </div>

        <div className="mx-auto mt-10 flex max-w-[980px] flex-col gap-4 rounded-[1.7rem] bg-[#070707] px-5 py-5 text-white shadow-[0_24px_45px_rgba(0,0,0,0.14)] sm:px-6 md:flex-row md:items-center md:justify-between md:rounded-full md:px-10">
          <p className="text-[clamp(1.35rem,2.2vw,2.3rem)] font-medium tracking-[-0.03em]">
            <span className="text-[#ffb300]">Don&apos;t forget</span> check our Trustpilot page
          </p>
          <div className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-4 py-2 text-[0.92rem] font-semibold text-[#111111] sm:w-fit">
            <span className="text-[#00b67a]">{"\u2605"}</span>
            <span>Review us on Trustpilot</span>
          </div>
        </div>
      </div>
    </section>
  );
}
