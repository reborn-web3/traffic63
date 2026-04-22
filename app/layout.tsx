import type { Metadata } from "next";
import { jsonLdOrganization } from "./seo/jsonld";
import "./globals.css";

/**
 * Base metadata used as defaults. Individual pages can override via
 * `export const generateMetadata` in their component.
 */
export const metadata: Metadata = {
  title: "traffic63 — Performance‑агентство",
  description:
    "traffic63 — performance‑агентство нового поколения. Контекстная реклама, таргет, SEO и аналитика с гарантией результата.",
  keywords:
    "performance агентство, контекстная реклама, таргетированная реклама, SEO, аналитика, маркетинг",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <head>
        {/* JSON‑LD Organization schema for rich snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdOrganization),
          }}
        />
        {/* Emoji favicon */}
        {/* Canonical URL for SEO */}
        <link rel="canonical" href="https://traffic63.ru" />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>📒</text></svg>"
        />
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&family=Nunito:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <main>{children}</main>
    </html>
  );
}

/**
 * Generates metadata for every route. The base `metadata` object provides
 * defaults; routes may override by exporting their own `generateMetadata`.
 */
export async function generateMetadata(): Promise<Metadata> {
  return {
    ...metadata,
    openGraph: {
      title: metadata.title as string,
      description: metadata.description as string,
      url: "https://traffic63.ru",
      siteName: "traffic63",
      images: [
        {
          url: "/opengraph-image.png",
          width: 1200,
          height: 630,
          alt: "traffic63 – performance‑агентство",
        },
      ],
      locale: "ru_RU",
      type: "website",
    },
    robots: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  };
}
