'use client';

import { useEffect, useState } from 'react';
import ShellLayout from '@/components/layout/ShellLayout';
import KpiCard from '@/components/dashboard/KpiCard';
import TrendChart from '@/components/dashboard/TrendChart';
import TopTable from '@/components/dashboard/TopTable';
import { DashboardData } from '@/types';
import { mockDashboardData } from '@/lib/data';

export default function DashboardPage() {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simular carga de datos
    const fetchData = async () => {
      try {
        // En producción, esto sería una llamada a la API
        await new Promise(resolve => setTimeout(resolve, 1000));
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
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
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
            Análisis completo de comercio exterior - Diciembre 2024
          </p>
        </div>

        {/* KPIs Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {data.kpis.map((kpi) => (
            <KpiCard key={kpi.id} data={kpi} />
          ))}
        </div>

        {/* Charts and Tables */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Trend Chart */}
          <div className="lg:col-span-2">
            <TrendChart data={data.trendData} />
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
