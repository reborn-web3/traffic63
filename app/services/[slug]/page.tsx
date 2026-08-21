import { notFound } from "next/navigation";
import { servicesData } from "@/lib/servicesData";
import { ServiceClient } from "./ServiceClient";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return [
    { slug: "web-development" },
    { slug: "advertising" },
    { slug: "chatbots" },
    { slug: "smm" },
  ];
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = servicesData[slug];

  if (!data) {
    return {
      title: "Услуга не найдена — traffic63",
    };
  }

  return {
    title: data.title,
    description: data.description,
    keywords: data.keywords,
    openGraph: {
      title: data.og.title,
      description: data.og.description,
      images: [{ url: data.og.image }],
      url: data.og.url,
      type: "website",
      siteName: "traffic63",
    },
    alternates: {
      canonical: `/services/${slug}`,
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const data = servicesData[slug];

  if (!data) {
    notFound();
  }

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data.jsonLd) }}
      />
      <ServiceClient data={data} />
    </>
  );
}
