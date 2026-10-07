import { company, services, areas, siteUrl } from './company';

export function localBusinessSchema(extra: Record<string, unknown> = {}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${siteUrl}/#business`,
    name: company.name,
    description: company.description,
    url: siteUrl,
    email: company.email,
    telephone: company.phones.map((p) => p.tel),
    image: `${siteUrl}/images/og-image.jpg`,
    priceRange: company.priceRange,
    areaServed: areas.map((area) => ({
      '@type': 'City',
      name: area.name,
    })),
    address: {
      '@type': 'PostalAddress',
      addressLocality: company.address.addressLocality,
      addressRegion: company.address.addressRegion,
      addressCountry: company.address.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: company.geo.latitude,
      longitude: company.geo.longitude,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ],
        opens: '08:00',
        closes: '18:00',
      },
    ],
    knowsAbout: services.map((s) => s.title),
    makesOffer: services.map((s) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: s.title,
        description: s.short,
        url: `${siteUrl}/services/${s.slug}`,
        areaServed: company.areaServedLabel,
        provider: { '@id': `${siteUrl}/#business` },
      },
    })),
    ...extra,
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteUrl}/#website`,
    url: siteUrl,
    name: company.name,
    description: company.shortDescription,
    publisher: { '@id': `${siteUrl}/#business` },
    inLanguage: 'en-GB',
  };
}

export function breadcrumbSchema(
  items: { name: string; path: string }[],
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.path}`,
    })),
  };
}

export function faqSchema(
  faqs: { question: string; answer: string }[],
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
