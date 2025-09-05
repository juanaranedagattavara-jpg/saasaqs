import { NextSeoProps } from 'next-seo';

// Configuración SEO base
export const defaultSEO: NextSeoProps = {
  title: 'QSP SpA - Inteligencia de Comercio Exterior',
  titleTemplate: '%s | QSP SpA',
  description: 'Transforma datos complejos de comercio exterior en inteligencia accionable. Dashboards, reportes automáticos y consultoría estratégica para exportadores.',
  canonical: 'https://qsp-spa.com',
  openGraph: {
    type: 'website',
    locale: 'es_CL',
    url: 'https://qsp-spa.com',
    siteName: 'QSP SpA',
    title: 'QSP SpA - Inteligencia de Comercio Exterior',
    description: 'Transforma datos complejos de comercio exterior en inteligencia accionable. Dashboards, reportes automáticos y consultoría estratégica para exportadores.',
    images: [
      {
        url: 'https://qsp-spa.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'QSP SpA - Inteligencia de Comercio Exterior',
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
    {
      name: 'robots',
      content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    },
    {
      name: 'googlebot',
      content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    },
  ],
};

// SEO específico por página
export const pageSEO = {
  home: {
    title: 'QSP SpA - Inteligencia de Comercio Exterior',
    description: 'Saltos cuánticos en inteligencia de mercado. Transforma datos complejos en sabiduría accionable que impulsa tu crecimiento exportador.',
    keywords: 'comercio exterior, exportaciones, inteligencia de mercado, dashboards, reportes automáticos, QSP SpA',
  },
  dashboard: {
    title: 'Dashboard - QSP SpA',
    description: 'Visualiza tus datos de comercio exterior en tiempo real. KPIs, tendencias y análisis estratégico para exportadores.',
    keywords: 'dashboard comercio exterior, KPIs exportaciones, análisis de datos, QSP SpA',
  },
  reportes: {
    title: 'Reportes - QSP SpA',
    description: 'Genera reportes personalizados de tus operaciones comerciales. Análisis detallado de exportaciones e importaciones.',
    keywords: 'reportes comercio exterior, análisis exportaciones, reportes personalizados, QSP SpA',
  },
  planes: {
    title: 'Planes y Precios - QSP SpA',
    description: 'Elige el plan que mejor se adapte a tu empresa. Soluciones de inteligencia de comercio exterior para todos los tamaños.',
    keywords: 'planes QSP SpA, precios comercio exterior, soluciones exportadores, QSP SpA',
  },
};

// JSON-LD dinámico
export const generateJSONLD = (page: keyof typeof pageSEO, _additionalData?: Record<string, unknown>) => {
  const baseData = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'QSP SpA',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    description: 'Inteligencia de Comercio Exterior para exportadores',
    url: 'https://qsp-spa.com',
    author: {
      '@type': 'Organization',
      name: 'QSP SpA',
      url: 'https://qsp-spa.com',
    },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'CLP',
      availability: 'https://schema.org/InStock',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '150',
    },
  };

  switch (page) {
    case 'home':
      return {
        ...baseData,
        '@type': 'WebSite',
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://qsp-spa.com/search?q={search_term_string}',
          'query-input': 'required name=search_term_string',
        },
      };
    
    case 'dashboard':
      return {
        ...baseData,
        '@type': 'WebApplication',
        name: 'QSP Dashboard',
        description: 'Dashboard de inteligencia de comercio exterior',
        featureList: [
          'Visualización de KPIs en tiempo real',
          'Análisis de tendencias de exportación',
          'Reportes automáticos',
          'Alertas personalizadas',
        ],
      };
    
    case 'reportes':
      return {
        ...baseData,
        '@type': 'WebApplication',
        name: 'QSP Reportes',
        description: 'Generador de reportes de comercio exterior',
        featureList: [
          'Reportes personalizados',
          'Exportación a múltiples formatos',
          'Programación automática',
          'Análisis comparativo',
        ],
      };
    
    case 'planes':
      return {
        ...baseData,
        '@type': 'Product',
        name: 'Planes QSP SpA',
        description: 'Planes de suscripción para inteligencia de comercio exterior',
        offers: [
          {
            '@type': 'Offer',
            name: 'Plan Básico',
            price: '50000',
            priceCurrency: 'CLP',
            priceSpecification: {
              '@type': 'PriceSpecification',
              price: '50000',
              priceCurrency: 'CLP',
              billingDuration: 'P1M',
            },
          },
          {
            '@type': 'Offer',
            name: 'Plan Pro',
            price: '150000',
            priceCurrency: 'CLP',
            priceSpecification: {
              '@type': 'PriceSpecification',
              price: '150000',
              priceCurrency: 'CLP',
              billingDuration: 'P1M',
            },
          },
        ],
      };
    
    default:
      return baseData;
  }
};

// Configuración de sitemap
export const sitemapConfig = {
  baseUrl: 'https://qsp-spa.com',
  pages: [
    {
      url: '/',
      lastmod: new Date().toISOString(),
      changefreq: 'daily',
      priority: 1.0,
    },
    {
      url: '/dashboard',
      lastmod: new Date().toISOString(),
      changefreq: 'daily',
      priority: 0.9,
    },
    {
      url: '/reportes',
      lastmod: new Date().toISOString(),
      changefreq: 'weekly',
      priority: 0.8,
    },
    {
      url: '/planes',
      lastmod: new Date().toISOString(),
      changefreq: 'monthly',
      priority: 0.7,
    },
  ],
};

// Configuración de robots.txt
export const robotsConfig = {
  userAgent: '*',
  allow: '/',
  disallow: ['/api/', '/_next/', '/admin/'],
  sitemap: 'https://qsp-spa.com/sitemap.xml',
};
