import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SectionHeading } from "@/components/section-heading";
import { posts } from "@/content/posts";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((entry) => entry.slug === slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.excerpt
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = posts.find((entry) => entry.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="container-shell page-grid py-16 pb-24">
      <article className="glass-card rounded-[2rem] p-8 md:p-12">
        <SectionHeading
          as="h1"
          eyebrow={post.category}
          title={post.title}
          description={post.excerpt}
        />
        <div className="mt-10 grid gap-6">
          {post.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-2xl font-black tracking-tight">{section.heading}</h2>
              <p className="mt-4 prose-copy">{section.body}</p>
            </section>
          ))}
        </div>
      </article>
    </main>
  );
}
