'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { Skeleton } from '@/components/ui/skeleton';
import { TrendData } from '@/types';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

interface TrendChartProps {
  data: TrendData[];
  isLoading?: boolean;
}

export default function TrendChart({ data, isLoading = false }: TrendChartProps) {
  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Tendencia Comercial</CardTitle>
          <p className="text-sm text-muted-foreground">
            Evolución mensual de exportaciones, importaciones y saldo comercial
          </p>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] w-full space-y-4">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-4 w-40" />
            <div className="flex-1">
              <Skeleton className="h-full w-full rounded-lg" />
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="group">
      <CardHeader>
        <CardTitle className="group-hover:text-primary transition-colors duration-200">Tendencia Comercial</CardTitle>
        <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-200">
          Evolución mensual de exportaciones, importaciones y saldo comercial
        </p>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            exportaciones: {
              label: "Exportaciones",
              color: "hsl(var(--chart-1))",
            },
            importaciones: {
              label: "Importaciones", 
              color: "hsl(var(--chart-2))",
            },
            saldo: {
              label: "Saldo Comercial",
              color: "hsl(var(--chart-3))",
            },
          }}
          className="h-[300px] w-full"
        >
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis 
                dataKey="month" 
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
              />
              <YAxis 
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
                tickFormatter={(value) => `$${value}M`}
              />
              <ChartTooltip 
                content={<ChartTooltipContent />}
                formatter={(value, name) => [`$${value}M`, name]}
              />
              <Line 
                type="monotone" 
                dataKey="exportaciones" 
                stroke="hsl(var(--chart-1))"
                strokeWidth={2}
                dot={{ fill: "hsl(var(--chart-1))", strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, stroke: "hsl(var(--chart-1))", strokeWidth: 2 }}
              />
              <Line 
                type="monotone" 
                dataKey="importaciones" 
                stroke="hsl(var(--chart-2))"
                strokeWidth={2}
                dot={{ fill: "hsl(var(--chart-2))", strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, stroke: "hsl(var(--chart-2))", strokeWidth: 2 }}
              />
              <Line 
                type="monotone" 
                dataKey="saldo" 
                stroke="hsl(var(--chart-3))"
                strokeWidth={2}
                dot={{ fill: "hsl(var(--chart-3))", strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, stroke: "hsl(var(--chart-3))", strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
