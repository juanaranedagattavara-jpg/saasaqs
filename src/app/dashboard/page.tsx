'use client';

import { useEffect, useState } from 'react';
import ShellLayout from '@/components/layout/ShellLayout';
import KpiCard from '@/components/dashboard/KpiCard';
import TrendChartDynamic from '@/components/dashboard/TrendChartDynamic';
import TopTable from '@/components/dashboard/TopTable';
import { DashboardData } from '@/types';
import { mockDashboardData } from '@/lib/data';
// SEO se maneja en el layout principal

export default function DashboardPage() {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);

// SEO configurado en el layout principal

  useEffect(() => {
    // Simular carga de datos
    const fetchData = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 2000));
        setData(mockDashboardData);
      } catch (error) {
        console.error('Error loading dashboard data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <ShellLayout>
          <div className="space-y-6">
            {/* Header Skeleton */}
            <div>
              <div className="h-8 w-48 bg-muted/50 rounded animate-pulse mb-2"></div>
              <div className="h-4 w-64 bg-muted/50 rounded animate-pulse"></div>
            </div>

            {/* KPIs Skeleton */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {Array.from({ length: 4 }).map((_, index) => (
                <KpiCard
                  key={index}
                  data={{
                    id: `skeleton-${index}`,
                    title: 'Cargando...',
                    value: '--',
                    change: 0,
                    changeType: 'neutral',
                    period: '--',
                    icon: 'trending-up'
                  }}
                  isLoading={true}
                />
              ))}
            </div>

            {/* Charts and Tables Skeleton */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <div className="lg:col-span-2">
                <TrendChartDynamic data={[]} isLoading={true} />
              </div>
              <TopTable title="Top Productos Exportados" data={[]} type="products" isLoading={true} />
              <TopTable title="Top Países Destino" data={[]} type="countries" isLoading={true} />
            </div>
        </div>
      </ShellLayout>
    );
  }

  if (!data) {
    return (
      <ShellLayout>
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold text-foreground mb-2">Error al cargar datos</h2>
          <p className="text-muted-foreground">No se pudieron cargar los datos del dashboard.</p>
        </div>
      </ShellLayout>
    );
  }

  return (
    <ShellLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground">
              Visualiza tus datos de comercio exterior en tiempo real
          </p>
        </div>

          {/* KPIs */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {data.kpis.map((kpi) => (
            <KpiCard key={kpi.id} data={kpi} />
          ))}
        </div>

        {/* Charts and Tables */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Trend Chart */}
          <div className="lg:col-span-2">
              <TrendChartDynamic data={data.trendData} />
          </div>

          {/* Top Products */}
          <TopTable
            title="Top Productos Exportados"
            data={data.topProducts}
            type="products"
          />

          {/* Top Countries */}
          <TopTable
            title="Top Países Destino"
            data={data.topCountries}
            type="countries"
          />
        </div>
              </div>
      </ShellLayout>
  );
}