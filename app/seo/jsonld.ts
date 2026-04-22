export const jsonLdOrganization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "traffic63",
  url: "https://traffic63.ru",
  logo: "https://traffic63.ru/logo.png",
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+7-999-123-45-67",
      contactType: "customer service",
      areaServed: "RU",
      availableLanguage: ["Russian", "English"],
    },
  ],
  sameAs: [
    "https://www.facebook.com/traffic63",
    "https://www.instagram.com/traffic63",
    "https://twitter.com/traffic63",
  ],
} as const;
