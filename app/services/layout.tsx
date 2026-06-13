import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Тарифы и Цены на Продвижение Сайтов | traffic63 Самара",
  description:
    "Стоимость услуг performance-маркетинга, настройки контекстной и таргетированной рекламы, SEO-оптимизации и создания автоворонок с AI-ботами в Самаре от агентства traffic63.",
  keywords:
    "тарифы маркетинг Самара, стоимость продвижения сайта, цены контекстная реклама Самара, заказать seo продвижение цены, стоимость создания сайта",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
