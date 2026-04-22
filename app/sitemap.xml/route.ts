import { NextResponse } from "next/server";

/**
 * Генерирует XML‑sitemap для основных публичных страниц сайта.
 * По умолчанию включаем статические роуты, которые уже существуют в проекте.
 * При добавлении новых страниц достаточно добавить их в массив `urls`.
 */
export async function GET() {
  const baseUrl = "https://traffic63.ru";

  // Список публичных страниц сайта.
  // При необходимости расширяйте массив, указывая относительный путь.
  const urls = [
    "/",               // главная
    "/#services",      // якорь‑страница услуг (будет интерпретирован как отдельный URL)
    "/#about",
    "/#process",
    "/#cases",
    "/#contact",
  ];

  const now = new Date().toISOString();

  const urlEntries = urls
    .map((path) => {
      // Убираем возможный ведущий слеш, чтобы правильно склеить URL.
      const loc = `${baseUrl}${path.startsWith("/") ? "" : "/"}${path}`;
      return `
  <url>
    <loc>${loc}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
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
