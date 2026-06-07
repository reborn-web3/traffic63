import type { Metadata } from "next";
import { jsonLdOrganization } from "./seo/jsonld";
import "./globals.css";

/**
 * Default metadata used as a baseline for all routes.
 * Individual pages can override by exporting their own `generateMetadata`.
 */
const defaultMetadata: Metadata = {
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
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
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
      <body suppressHydrationWarning>
        <main>{children}</main>
      </body>
    </html>
  );
}

/**
 * Generates metadata for every route. The `defaultMetadata` object provides
 * baseline values; routes may override by exporting their own `generateMetadata`.
 */
export async function generateMetadata(): Promise<Metadata> {
  return {
    ...defaultMetadata,
    openGraph: {
      title: defaultMetadata.title as string,
      description: defaultMetadata.description as string,
      url: "https://traffic63.ru",
      siteName: "traffic63",
      images: [
        {
          url: "/favicon.svg",
          width: 240,
          height: 240,
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
