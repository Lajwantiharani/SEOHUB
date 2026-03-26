type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  as?: "h1" | "h2";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  as = "h2"
}: SectionHeadingProps) {
  const HeadingTag = as;

  return (
    <div className="max-w-3xl">
      <span className="eyebrow">{eyebrow}</span>
      <HeadingTag className="section-title mt-5 font-semibold text-[var(--foreground)]">
        {title}
      </HeadingTag>
      <p className="mt-5 max-w-[42rem] text-[1rem] leading-8 text-[var(--muted)] md:text-[1.04rem]">
        {description}
      </p>
    </div>
  );
}
