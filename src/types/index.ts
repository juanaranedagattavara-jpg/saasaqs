// Tipos TypeScript para QSP SaaS

export interface KpiData {
  id: string;
  title: string;
  value: string;
  change: number;
  changeType: 'increase' | 'decrease' | 'neutral';
  period: string;
  icon: string;
}

export interface ChartData {
  name: string;
  value: number;
  color?: string;
}

export interface TrendData {
  month: string;
  exportaciones: number;
  importaciones: number;
  saldo: number;
}

export interface TopProduct {
  id: string;
  name: string;
  category: string;
  value: number;
  change: number;
  changeType: 'increase' | 'decrease' | 'neutral';
}

export interface TopCountry {
  id: string;
  name: string;
  flag: string;
  value: number;
  change: number;
  changeType: 'increase' | 'decrease' | 'neutral';
}

export interface Report {
  id: string;
  title: string;
  type: 'exportaciones' | 'importaciones' | 'saldo' | 'productos' | 'paises';
  period: string;
  createdAt: string;
  status: 'completed' | 'processing' | 'failed';
  downloadUrl?: string;
}

export interface DashboardData {
  kpis: KpiData[];
  trendData: TrendData[];
  topProducts: TopProduct[];
  topCountries: TopCountry[];
  recentReports: Report[];
}

export interface ReportFormData {
  title: string;
  type: 'exportaciones' | 'importaciones' | 'saldo' | 'productos' | 'paises';
  period: string;
  filters: {
    country?: string;
    product?: string;
    dateFrom?: string;
    dateTo?: string;
  };
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  error?: string;
}
