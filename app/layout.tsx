import type { Metadata } from "next";
import { Caveat, Nunito, Geist } from "next/font/google";
import { jsonLdOrganization } from "./seo/jsonld";
import "./globals.css";

const caveat = Caveat({
  subsets: ["latin", "cyrillic"],
  variable: "--font-handwritten",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin", "cyrillic"],
  variable: "--font-body",
  display: "swap",
});

const geist = Geist({
  subsets: ["latin", "cyrillic"],
  variable: "--font-heading",
  display: "swap",
});

/**
 * Default metadata used as a baseline for all routes.
 * Individual pages can override by exporting their own `generateMetadata`.
 */
const defaultMetadata: Metadata = {
  title: "traffic63 — Performance‑агентство",
  description:
    "traffic63 — performance‑агентство нового поколения. Контекстная реклама, таргет, SEO и аналитика с гарантией результата.",
  keywords:
    "performance агентство, contextual реклама, таргетированная реклама, SEO, аналитика, маркетинг",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ru"
      className={`${caveat.variable} ${nunito.variable} ${geist.variable}`}
    >
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
