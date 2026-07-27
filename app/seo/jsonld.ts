export const jsonLdOrganization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://traffic63.ru/#organization",
  name: "traffic63",
  url: "https://traffic63.ru",
  logo: "https://traffic63.ru/favicon.svg",
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+7 (999) 123-45-67",
      contactType: "customer service",
      areaServed: "RU",
      availableLanguage: ["Russian", "English"],
    },
  ],
  sameAs: [
    "https://t.me/traffic63",
    "https://vk.com/traffic63",
    "https://wa.me/79991234567",
  ],
} as const;

export const jsonLdLocalBusiness = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://traffic63.ru/#localbusiness",
  name: "traffic63",
  image: "https://traffic63.ru/favicon.svg",
  url: "https://traffic63.ru",
  telephone: "+7 (999) 123-45-67",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "ул. Ново-Садовая, 106, офис 402",
    addressLocality: "Самара",
    addressRegion: "Самарская область",
    postalCode: "443068",
    addressCountry: "RU",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 53.21245,
    longitude: 50.14441,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    opens: "09:00",
    closes: "18:00",
  },
  sameAs: [
    "https://t.me/traffic63",
    "https://vk.com/traffic63",
    "https://wa.me/79991234567",
  ],
} as const;

export const jsonLdWebSite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://traffic63.ru/#website",
  name: "traffic63",
  url: "https://traffic63.ru",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://traffic63.ru/?s={search_term_string}",
    "query-input": "required name=search_term_string",
  },
} as const;

export function getBlogJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": "https://traffic63.ru/blog/#blog",
    name: "Блог traffic63 — Практический опыт и кейсы маркетинга",
    description: "Делимся практическим опытом, кейсами автоматизации и секретами performance-маркетинга.",
    url: "https://traffic63.ru/blog",
    publisher: {
      "@id": "https://traffic63.ru/#organization",
    },
  };
}

export function getArticleJsonLd(post: {
  title: string;
  excerpt?: string;
  date?: string;
  author?: string;
  imageUrl?: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${post.url}/#article`,
    headline: post.title,
    description: post.excerpt,
    image: post.imageUrl || "https://traffic63.ru/favicon.svg",
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: post.author || "traffic63 Team",
    },
    publisher: {
      "@id": "https://traffic63.ru/#organization",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": post.url,
    },
  };
}
