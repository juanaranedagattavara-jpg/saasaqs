import { DashboardData, Report, TrendData, KpiData, TopProduct, TopCountry } from '@/types';

// Datos mock para el dashboard
export const mockKpis: KpiData[] = [
  {
    id: '1',
    title: 'Exportaciones Totales',
    value: '$2.847M',
    change: 12.5,
    changeType: 'increase',
    period: 'vs mes anterior',
    icon: 'TrendingUp'
  },
  {
    id: '2',
    title: 'Importaciones Totales',
    value: '$1.923M',
    change: -3.2,
    changeType: 'decrease',
    period: 'vs mes anterior',
    icon: 'TrendingDown'
  },
  {
    id: '3',
    title: 'Saldo Comercial',
    value: '$924M',
    change: 28.7,
    changeType: 'increase',
    period: 'vs mes anterior',
    icon: 'DollarSign'
  },
  {
    id: '4',
    title: 'Países Activos',
    value: '47',
    change: 2,
    changeType: 'increase',
    period: 'nuevos este mes',
    icon: 'Globe'
  }
];

export const mockTrendData: TrendData[] = [
  { month: 'Ene', exportaciones: 2100, importaciones: 1800, saldo: 300 },
  { month: 'Feb', exportaciones: 2200, importaciones: 1750, saldo: 450 },
  { month: 'Mar', exportaciones: 2400, importaciones: 1900, saldo: 500 },
  { month: 'Abr', exportaciones: 2300, importaciones: 1850, saldo: 450 },
  { month: 'May', exportaciones: 2500, importaciones: 1950, saldo: 550 },
  { month: 'Jun', exportaciones: 2600, importaciones: 2000, saldo: 600 },
  { month: 'Jul', exportaciones: 2700, importaciones: 2100, saldo: 600 },
  { month: 'Ago', exportaciones: 2800, importaciones: 2050, saldo: 750 },
  { month: 'Sep', exportaciones: 2900, importaciones: 2150, saldo: 750 },
  { month: 'Oct', exportaciones: 3000, importaciones: 2200, saldo: 800 },
  { month: 'Nov', exportaciones: 3100, importaciones: 2250, saldo: 850 },
  { month: 'Dic', exportaciones: 2847, importaciones: 1923, saldo: 924 }
];

export const mockTopProducts: TopProduct[] = [
  {
    id: '1',
    name: 'Salmón Atlántico',
    category: 'Acuicultura',
    value: 1250,
    change: 15.2,
    changeType: 'increase'
  },
  {
    id: '2',
    name: 'Cobre Refinado',
    category: 'Minería',
    value: 980,
    change: -2.1,
    changeType: 'decrease'
  },
  {
    id: '3',
    name: 'Celulosa',
    category: 'Forestal',
    value: 750,
    change: 8.7,
    changeType: 'increase'
  },
  {
    id: '4',
    name: 'Uvas de Mesa',
    category: 'Agrícola',
    value: 420,
    change: 22.3,
    changeType: 'increase'
  },
  {
    id: '5',
    name: 'Litio',
    category: 'Minería',
    value: 380,
    change: 45.6,
    changeType: 'increase'
  }
];

export const mockTopCountries: TopCountry[] = [
  {
    id: '1',
    name: 'China',
    flag: '🇨🇳',
    value: 850,
    change: 12.5,
    changeType: 'increase'
  },
  {
    id: '2',
    name: 'Estados Unidos',
    flag: '🇺🇸',
    value: 720,
    change: -3.2,
    changeType: 'decrease'
  },
  {
    id: '3',
    name: 'Japón',
    flag: '🇯🇵',
    value: 580,
    change: 8.7,
    changeType: 'increase'
  },
  {
    id: '4',
    name: 'Corea del Sur',
    flag: '🇰🇷',
    value: 420,
    change: 15.3,
    changeType: 'increase'
  },
  {
    id: '5',
    name: 'Brasil',
    flag: '🇧🇷',
    value: 380,
    change: -1.8,
    changeType: 'decrease'
  }
];

export const mockReports: Report[] = [
  {
    id: '1',
    title: 'Reporte Mensual Exportaciones',
    type: 'exportaciones',
    period: 'Noviembre 2024',
    createdAt: '2024-12-01T10:30:00Z',
    status: 'completed',
    downloadUrl: '/reports/exportaciones-nov-2024.pdf'
  },
  {
    id: '2',
    title: 'Análisis Saldo Comercial Q3',
    type: 'saldo',
    period: 'Q3 2024',
    createdAt: '2024-11-28T14:15:00Z',
    status: 'completed',
    downloadUrl: '/reports/saldo-q3-2024.pdf'
  },
  {
    id: '3',
    title: 'Top 10 Productos Exportados',
    type: 'productos',
    period: 'Octubre 2024',
    createdAt: '2024-11-25T09:45:00Z',
    status: 'processing'
  },
  {
    id: '4',
    title: 'Importaciones por País',
    type: 'importaciones',
    period: 'Septiembre 2024',
    createdAt: '2024-11-20T16:20:00Z',
    status: 'failed'
  }
];

export const mockDashboardData: DashboardData = {
  kpis: mockKpis,
  trendData: mockTrendData,
  topProducts: mockTopProducts,
  topCountries: mockTopCountries,
  recentReports: mockReports
};

// Utilidades para formatear datos
export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};

export const formatNumber = (value: number): string => {
  return new Intl.NumberFormat('es-CL').format(value);
};

export const formatPercentage = (value: number): string => {
  return `${value > 0 ? '+' : ''}${value.toFixed(1)}%`;
};

export const formatDate = (date: string): string => {
  return new Intl.DateTimeFormat('es-CL', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(date));
};
