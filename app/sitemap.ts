import type { MetadataRoute } from "next";
import { posts } from "@/content/posts";
import { services } from "@/content/services";
import { siteConfig } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "/about", "/services", "/case-studies", "/blog", "/contact"];

  const staticEntries = staticPages.map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8
  }));

  const postEntries = posts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7
  }));

  const serviceEntries = services.map((service) => ({
    url: `${siteConfig.url}/services#${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7
  }));

  return [...staticEntries, ...postEntries, ...serviceEntries];
}
