export interface PricingModel {
  monthly: {
    CLP_k: number;
    UF: number;
  };
  yearly: {
    CLP_k: number;
    UF: number;
  };
}

export interface Plan {
  id: string;
  name: string;
  description: string;
  color: string;
  analyses: string[];
  additionalAnalyses?: string[];
  includes?: string;
  pricing: PricingModel;
}

export const pricingData: Record<string, PricingModel> = {
  basico: {
    monthly: { CLP_k: 68, UF: 1.7 },
    yearly: { CLP_k: 795.6, UF: 20.4 }
  },
  pro: {
    monthly: { CLP_k: 156, UF: 3.9 },
    yearly: { CLP_k: 1825.2, UF: 46.8 }
  },
  premium: {
    monthly: { CLP_k: 276, UF: 6.9 },
    yearly: { CLP_k: 3229.2, UF: 82.8 }
  }
};

export const plansData: Plan[] = [
  {
    id: 'basico',
    name: 'Básico',
    description: 'Perfecto para comenzar con el análisis de comercio exterior',
    color: 'gray',
    analyses: [
      'Base de Datos Compilada',
      'Resumen Ejecutivo',
      'Análisis de Tendencias',
      'Ranking de Empresas',
      'Ranking de Mercados'
    ],
    pricing: pricingData.basico
  },
  {
    id: 'pro',
    name: 'Pro',
    description: 'Ideal para empresas en crecimiento',
    color: 'blue',
    includes: 'Incluye todo el plan Básico',
    additionalAnalyses: [
      'Market Share Empresas',
      'Market Share Destinos / Origen',
      'Mix de Productos'
    ],
    analyses: [
      'Base de Datos Compilada',
      'Resumen Ejecutivo',
      'Análisis de Tendencias',
      'Ranking de Empresas',
      'Ranking de Mercados'
    ],
    pricing: pricingData.pro
  },
  {
    id: 'premium',
    name: 'Premium',
    description: 'Solución completa para empresas líderes',
    color: 'green',
    includes: 'Incluye Básico + Pro',
    additionalAnalyses: [
      'Comparación de Calibres',
      'Participación de Calibres por Empresa',
      'Participación de Calibres por Mercado',
      'Análisis de Rango de Precios',
      'Análisis de Distribución de Precios',
      'Análisis de Composición de Precios',
      'Desempeño Comparado',
      'Informe de Clientes Extranjeros'
    ],
    analyses: [
      'Base de Datos Compilada',
      'Resumen Ejecutivo',
      'Análisis de Tendencias',
      'Ranking de Empresas',
      'Ranking de Mercados'
    ],
    pricing: pricingData.premium
  }
];

export function formatPrice(price: number, currency: 'CLP_k' | 'UF', billing: 'monthly' | 'yearly'): string {
  if (currency === 'CLP_k') {
    return `M$${price.toLocaleString('es-CL')}`;
  } else {
    return `${price} UF`;
  }
}

export function getPriceLabel(currency: 'CLP_k' | 'UF', billing: 'monthly' | 'yearly'): string {
  if (currency === 'CLP_k') {
    return billing === 'monthly' ? 'M$/mes' : 'M$/año';
  } else {
    return billing === 'monthly' ? 'UF/mes' : 'UF/año';
  }
}

export function getDiscountPercentage(monthlyPrice: number, yearlyPrice: number): number {
  const monthlyYearly = monthlyPrice * 12;
  const discount = ((monthlyYearly - yearlyPrice) / monthlyYearly) * 100;
  return Math.round(discount);
}
