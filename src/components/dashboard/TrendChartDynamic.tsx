'use client';

import dynamic from 'next/dynamic';
import { TrendData } from '@/types';

// Importación dinámica del TrendChart con SSR deshabilitado
const TrendChart = dynamic(() => import('./TrendChart'), {
  ssr: false,
  loading: () => (
    <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm">
      <div className="px-6">
        <div className="h-6 w-48 bg-muted/50 rounded animate-pulse mb-2"></div>
        <div className="h-4 w-64 bg-muted/50 rounded animate-pulse"></div>
      </div>
      <div className="px-6">
        <div className="h-[300px] w-full bg-muted/50 rounded-lg animate-pulse"></div>
      </div>
    </div>
  )
});

interface TrendChartDynamicProps {
  data: TrendData[];
  isLoading?: boolean;
}

export default function TrendChartDynamic({ data, isLoading = false }: TrendChartDynamicProps) {
  return <TrendChart data={data} isLoading={isLoading} />;
}
