import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { posts } from "@/content/posts";

export const metadata: Metadata = {
  title: "Blog",
  description: "SEO insights, strategy notes, and practical optimization guides from SEO Hub Ltd."
};

export default function BlogPage() {
  return (
    <main className="container-shell page-grid py-16 pb-24">
      <SectionHeading
        as="h1"
        eyebrow="Blog"
        title="Start publishing search-focused content from day one."
        description="These starter posts are stored in code so you can swap them for MDX or a CMS later without restructuring the app."
      />
      <div className="grid gap-6">
        {posts.map((post) => (
          <article key={post.slug} className="glass-card rounded-[2rem] p-8 md:grid md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--brand-dark)]">
                {post.category}
              </p>
              <h2 className="mt-4 text-3xl font-black tracking-tight">{post.title}</h2>
              <p className="mt-4 prose-copy">{post.excerpt}</p>
            </div>
            <Link
              href={`/blog/${post.slug}`}
              className="mt-6 inline-flex items-center justify-center rounded-full bg-[var(--foreground)] px-5 py-3 font-semibold text-white transition hover:bg-[var(--accent)]"
            >
              Read article
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
