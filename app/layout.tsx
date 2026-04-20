import type { Metadata } from "next";
import { Inter, Nunito, Caveat } from "next/font/google";
import "./globals.css";
import "../style.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-heading",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin", "cyrillic"],
  variable: "--font-body",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin", "cyrillic"],
  variable: "--font-handwritten",
  display: "swap",
});

export const metadata: Metadata = {
  title: "traffic63 — Performance-агентство",
  description:
    "traffic63 — performance-агентство нового поколения. Контекстная реклама, таргет, SEO и аналитика с гарантией результата.",
  keywords: [
    "performance агентство",
    "контекстная реклама",
    "таргетированная реклама",
    "SEO",
    "аналитика",
    "маркетинг",
  ],
  openGraph: {
    title: "traffic63 — Performance-агентство",
    description:
      "Превращаем рекламу в реальные продажи. Построение систем привлечения клиентов.",
    type: "website",
    locale: "ru_RU",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>📒</text></svg>",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body
        className={`${inter.variable} ${nunito.variable} ${caveat.variable} antialiased`}
      >
        {/* Notebook holes decoration */}
        <div
          className="fixed left-[30px] top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-[80px] z-0 pointer-events-none"
          aria-hidden="true"
        >
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-5 h-5 rounded-full border-2 border-line-blue bg-[#e8e0d0] opacity-40"
            />
          ))}
        </div>

        {children}
      </body>
    </html>
  );
}
