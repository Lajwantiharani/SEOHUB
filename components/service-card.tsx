import type { Service } from "@/content/services";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article
      id={service.slug}
      className="rounded-[2rem] border border-[rgba(36,22,79,0.08)] bg-white p-8 shadow-[0_18px_42px_rgba(32,24,70,0.05)] transition hover:-translate-y-1 hover:shadow-[0_24px_48px_rgba(32,24,70,0.08)]"
    >
      <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#ffb300]">
        {service.tag}
      </p>
      <h2 className="mt-4 text-[1.9rem] font-semibold tracking-[-0.04em] text-[#24164f]">
        {service.title}
      </h2>
      <p className="mt-4 text-[1rem] leading-8 text-[#6a6485]">{service.description}</p>
      <ul className="mt-6 grid gap-3 text-sm text-[#24164f]">
        {service.outcomes.map((outcome) => (
          <li
            key={outcome}
            className="rounded-[1.15rem] border border-[rgba(36,22,79,0.08)] bg-[#fff8ea] px-4 py-3 font-medium"
          >
            {outcome}
          </li>
        ))}
      </ul>
    </article>
  );
}
