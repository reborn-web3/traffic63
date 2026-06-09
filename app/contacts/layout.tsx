import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Контакты | traffic63 — Performance-агентство нового поколения",
  description:
    "Свяжитесь с performance-агентством traffic63. Контакты, адрес офиса в Самаре, прямые ссылки на Telegram и WhatsApp, а также форма обратной связи для бесплатного аудита вашего проекта.",
  keywords:
    "traffic63 контакты, телефон traffic63, адрес traffic63, заказать интернет-маркетинг Самара, performance-агентство контакты",
};

export default function ContactsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
