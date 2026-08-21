import type { Metadata } from "next";
import { Caveat, Nunito, Geist } from "next/font/google";
import { jsonLdOrganization, jsonLdLocalBusiness, jsonLdWebSite } from "./seo/jsonld";
import { CookieBanner } from "@/components/CookieBanner";
import Script from "next/script";
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
  title: "traffic63 — Performance-агентство в Самаре | Интернет-маркетинг, SEO и Реклама",
  description:
    "Агентство интернет-маркетинга traffic63 в Самаре. Разработка сайтов, контекстная реклама, SEO-продвижение, таргетированная реклама и внедрение AI-ботов с гарантией результата. 🚀 Бесплатный аудит!",
  keywords:
    "performance-агентство Самара, интернет-маркетинг Самара, продвижение сайтов Самара, seo оптимизация Самара, контекстная реклама Самара, таргетированная реклама Самара, внедрение ai-ботов, веб-студия Самара, разработка сайтов Самара, traffic63",
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
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var theme = localStorage.getItem('theme');
                if (!theme) {
                  theme = (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light';
                }
                document.documentElement.setAttribute('data-theme', theme);
                if (theme === 'dark') {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              })()
            `
          }}
        />
        {/* JSON‑LD Schemas for rich search results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdOrganization),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdLocalBusiness),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdWebSite),
          }}
        />
        {/* Favicon links for all devices & browsers */}
        <link rel="canonical" href="https://traffic63.ru" />
        <link rel="icon" href="/favicon.ico?v=2" sizes="any" />
        <link rel="icon" href="/favicon.svg?v=2" type="image/svg+xml" />
        <link rel="icon" href="/favicon-32x32.png?v=2" type="image/png" sizes="32x32" />
        <link rel="icon" href="/favicon-16x16.png?v=2" type="image/png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png?v=2" />
      </head>
      <body suppressHydrationWarning>
        {children}
        <div className="bottom-blur-overlay" aria-hidden="true" />
        <CookieBanner />
        {/* Traffic63 Chatbot Embed (Active when NEXT_PUBLIC_CHATBOT_URL is configured) */}
        {process.env.NEXT_PUBLIC_CHATBOT_URL && (
          <Script
            src={process.env.NEXT_PUBLIC_CHATBOT_URL}
            data-bot-id="e8c0b20c-d986-4f4e-8a52-7cd2b0e4347c"
            strategy="lazyOnload"
          />
        )}
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
    metadataBase: new URL("https://traffic63.ru"),
    alternates: {
      canonical: "/",
    },
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
          alt: "traffic63 – performance-агентство в Самаре",
        },
      ],
      locale: "ru_RU",
      type: "website",
    },
    robots: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
      },
    },
    twitter: {
      card: "summary_large_image",
      title: defaultMetadata.title as string,
      description: defaultMetadata.description as string,
      images: ["/favicon.svg"],
    },
    verification: {
      google: "google-site-verification-placeholder",
      yandex: "yandex-verification-placeholder",
    },
    other: {
      "geo.region": "RU-SAM",
      "geo.placename": "Самара",
      "geo.position": "53.21245;50.14441",
      "ICBM": "53.21245, 50.14441",
    },
  };
}
