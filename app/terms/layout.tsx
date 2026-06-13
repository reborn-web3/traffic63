import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Публичная оферта | traffic63",
  description:
    "Публичное предложение (оферта) о заключении договора об оказании услуг интернет-маркетинга, рекламы и создания сайтов с агентством traffic63.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
