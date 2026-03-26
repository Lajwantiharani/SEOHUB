import Link from "next/link";

export default function NotFound() {
  return (
    <main className="container-shell py-16 pb-24">
      <section className="glass-card rounded-[2rem] p-8 md:p-12">
        <p className="eyebrow">404</p>
        <h1
          className="section-title mt-5 font-black text-[var(--foreground)]"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          The page you requested could not be found.
        </h1>
        <p className="mt-5 prose-copy">
          Head back to the homepage or continue exploring the core service pages.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/"
            className="rounded-full bg-[var(--foreground)] px-6 py-3 font-semibold text-white transition hover:bg-[var(--accent)]"
          >
            Go home
          </Link>
          <Link
            href="/services"
            className="rounded-full border border-[var(--border)] bg-white/70 px-6 py-3 font-semibold transition hover:bg-white"
          >
            View services
          </Link>
        </div>
      </section>
    </main>
  );
}
