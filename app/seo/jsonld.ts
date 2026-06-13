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
