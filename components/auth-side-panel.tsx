import Image from "next/image";

type AuthSidePanelProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function AuthSidePanel({ eyebrow, title, description }: AuthSidePanelProps) {
  return (
    <div className="relative hidden h-full overflow-hidden bg-[linear-gradient(180deg,#2B1D08_0%,#533200_100%)] lg:flex">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,183,3,0.35),transparent_42%),radial-gradient(circle_at_bottom_right,rgba(255,224,138,0.25),transparent_34%)]" />
      <div className="absolute left-6 top-6 rounded-full border border-[rgba(255,255,255,0.22)] bg-[rgba(255,255,255,0.08)] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.28em] text-[#FFF2C4]">
        {eyebrow}
      </div>

      <div className="relative z-10 flex w-full flex-col justify-between p-7 xl:p-8">
        <div className="mx-auto mt-6 w-full max-w-[340px] xl:mt-8 xl:max-w-[380px]">
          <div className="rounded-[1.75rem] border border-[rgba(255,255,255,0.14)] bg-[rgba(255,255,255,0.08)] p-3 shadow-[0_24px_60px_rgba(0,0,0,0.18)] backdrop-blur-sm xl:p-4">
            <Image
              src="/auth-seo-dummy.svg"
              alt="SEO themed illustration with analytics dashboard, search ranking, and growth chart"
              width={860}
              height={860}
              loading="lazy"
              decoding="async"
              sizes="(max-width: 1024px) 100vw, 380px"
              className="h-auto w-full rounded-[1.25rem]"
            />
          </div>
        </div>

        <div className="max-w-[24rem] text-white">
          <h2 className="text-[clamp(1.8rem,2.6vw,2.75rem)] font-semibold leading-[0.95] tracking-[-0.05em]">
            {title}
          </h2>
          <p className="mt-3 text-[14px] leading-6 text-[rgba(255,248,222,0.88)] xl:text-[15px] xl:leading-7">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
