import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Политика конфиденциальности | traffic63",
  description:
    "Политика в отношении обработки персональных данных клиентов и посетителей веб-сайта performance-агентства traffic63.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
