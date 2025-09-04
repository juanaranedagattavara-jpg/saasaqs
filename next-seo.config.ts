import { DefaultSeoProps } from 'next-seo';

export const defaultSEO: DefaultSeoProps = {
  title: 'QSP SpA – Inteligencia de Comercio Exterior',
  titleTemplate: '%s | QSP SpA',
  description: 'QSP convierte datos aduaneros en dashboards claros y reportes estratégicos. Dashboards premium, reportes automáticos y consultoría para exportadores.',
  canonical: 'https://qsp-spa.com',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://qsp-spa.com',
    siteName: 'QSP SpA',
    title: 'QSP SpA – Inteligencia de Comercio Exterior',
    description: 'Transforma datos aduaneros en decisiones estratégicas. Dashboards premium y reportes automáticos.',
    images: [
      {
        url: 'https://qsp-spa.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'QSP SpA - Dashboard de Comercio Exterior',
      },
    ],
  },
  twitter: {
    handle: '@qsp_spa',
    site: '@qsp_spa',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'keywords',
      content: 'comercio exterior, exportaciones, importaciones, dashboard, análisis, reportes, QSP SpA, inteligencia comercial, datos aduaneros',
    },
    {
      name: 'author',
      content: 'QSP SpA',
    },
    {
      name: 'robots',
      content: 'index, follow',
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    {
      name: 'theme-color',
      content: '#0b0f14',
    },
    {
      name: 'msapplication-TileColor',
      content: '#0b0f14',
    },
  ],
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/apple-touch-icon.png',
    },
    {
      rel: 'manifest',
      href: '/site.webmanifest',
    },
  ],
};

// JSON-LD para SoftwareApplication
export const softwareApplicationJSONLD = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'QSP SpA',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  description: 'Plataforma de inteligencia de comercio exterior que convierte datos aduaneros en dashboards claros y reportes estratégicos.',
  url: 'https://qsp-spa.com',
  offers: {
    '@type': 'Offer',
    price: '199',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
  },
  provider: {
    '@type': 'Organization',
    name: 'QSP SpA',
    url: 'https://qsp-spa.com',
    logo: 'https://qsp-spa.com/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+56-9-1234-5678',
      contactType: 'customer service',
      email: 'contacto@qsp-spa.com',
    },
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    ratingCount: '150',
  },
  featureList: [
    'Dashboards Inteligentes',
    'Reportes Automáticos',
    'Consultoría Estratégica',
    'Integración API',
  ],
};
