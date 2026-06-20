import { NextResponse } from "next/server";
import { client } from "@/sanity/client";

export const revalidate = 3600; // Кэшируем sitemap на 1 час

export async function GET() {
  const baseUrl = "https://traffic63.ru";
  const now = new Date().toISOString();

  // Статические страницы
  const staticUrls = [
    { path: "/", priority: "1.0", changefreq: "daily" },
    { path: "/services", priority: "0.8", changefreq: "weekly" },
    { path: "/contacts", priority: "0.8", changefreq: "weekly" },
    { path: "/blog", priority: "0.9", changefreq: "daily" },
    { path: "/privacy", priority: "0.3", changefreq: "monthly" },
    { path: "/terms", priority: "0.3", changefreq: "monthly" },
  ];

  // Динамически загружаем статьи блога из Sanity
  let blogUrls: Array<{ path: string; lastmod: string; priority: string; changefreq: string }> = [];
  try {
    const posts = await client.fetch(
      `*[_type == "post" && defined(slug.current)]{ "slug": slug.current, _updatedAt }`
    );
    blogUrls = posts.map((post: { slug: string; _updatedAt: string }) => ({
      path: `/blog/${post.slug}`,
      lastmod: post._updatedAt ? new Date(post._updatedAt).toISOString() : now,
      priority: "0.7",
      changefreq: "weekly",
    }));
  } catch (error) {
    console.error("Failed to fetch blog posts for sitemap:", error);
  }

  const allUrls = [
    ...staticUrls.map(u => ({ ...u, lastmod: now })),
    ...blogUrls
  ];

  const urlEntries = allUrls
    .map(({ path, lastmod, changefreq, priority }) => {
      const loc = `${baseUrl}${path.startsWith("/") ? "" : "/"}${path}`;
      return `
  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
    })
    .join("");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;

  return new NextResponse(sitemap, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
