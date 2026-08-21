import type { Metadata, Viewport } from "next";
import { Nunito_Sans, Caveat, Geist } from "next/font/google";
import "./globals.css";
import { CookieBanner } from "@/components/CookieBanner";
import { jsonLdOrganization, jsonLdLocalBusiness, jsonLdWebSite } from "@/app/seo/jsonld";

const caveat = Caveat({
  subsets: ["latin", "cyrillic"],
  weight: ["700"],
  variable: "--font-handwritten",
  display: "swap",
});

const nunito = Nunito_Sans({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-nunito",
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafaf8" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0f17" },
  ],
};

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
        {/* Favicon links for all devices & browsers */}
        <link rel="canonical" href="https://traffic63.ru" />
        <link rel="icon" href="/favicon.ico?v=2" sizes="any" />
        <link rel="icon" href="/favicon.svg?v=2" type="image/svg+xml" />
        <link rel="icon" href="/favicon-32x32.png?v=2" type="image/png" sizes="32x32" />
        <link rel="icon" href="/favicon-16x16.png?v=2" type="image/png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png?v=2" />

        {/* Theme initialization script */}
        <script
          id="theme-switcher"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme')||(window.matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light');document.documentElement.setAttribute('data-theme',t);if(t==='dark'){document.documentElement.classList.add('dark');}else{document.documentElement.classList.remove('dark');}}catch(e){}})();`,
          }}
        />

        {/* JSON‑LD Schemas for rich search results */}
        <script
          id="jsonld-org"
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdOrganization),
          }}
        />
        <script
          id="jsonld-local"
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdLocalBusiness),
          }}
        />
        <script
          id="jsonld-website"
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdWebSite),
          }}
        />
      </head>
      <body suppressHydrationWarning>
        {children}
        <div className="bottom-blur-overlay" aria-hidden="true" />
        <CookieBanner />
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
    twitter: {
      card: "summary_large_image",
      title: defaultMetadata.title as string,
      description: defaultMetadata.description as string,
      images: ["/favicon.svg"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      yandex: "b130e46b9a895cce",
    },
  };
}
