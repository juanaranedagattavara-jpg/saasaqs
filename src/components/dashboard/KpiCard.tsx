'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';
import { KpiData } from '@/types';
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  Globe,
  LucideIcon
} from 'lucide-react';

interface KpiCardProps {
  data: KpiData;
  isLoading?: boolean;
}

const iconMap: Record<string, LucideIcon> = {
  TrendingUp,
  TrendingDown,
  DollarSign,
  Globe,
};

export default function KpiCard({ data, isLoading = false }: KpiCardProps) {
  const Icon = iconMap[data.icon] || TrendingUp;
  
  const getChangeIcon = () => {
    switch (data.changeType) {
      case 'increase':
        return <TrendingUp className="h-4 w-4" />;
      case 'decrease':
        return <TrendingDown className="h-4 w-4" />;
      default:
        return null;
    }
  };

  if (isLoading) {
    return (
      <Card className="relative overflow-hidden">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-4 rounded" />
        </CardHeader>
        <CardContent>
          <Skeleton className="h-8 w-20 mb-2" />
          <div className="flex items-center space-x-2">
            <Skeleton className="h-6 w-16 rounded-full" />
            <Skeleton className="h-4 w-12" />
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="relative overflow-hidden group">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-200">
          {data.title}
        </CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors duration-200" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-200">
          {data.value}
        </div>
        <div className="flex items-center space-x-2">
          <Badge 
            variant={data.changeType === 'increase' ? 'default' : 'secondary'}
            className={cn(
              "text-xs transition-all duration-200 group-hover:scale-105",
              data.changeType === 'increase' 
                ? "bg-green-500/10 text-green-400 border-green-500/20 group-hover:bg-green-500/20" 
                : data.changeType === 'decrease'
                ? "bg-red-500/10 text-red-400 border-red-500/20 group-hover:bg-red-500/20"
                : "bg-muted text-muted-foreground"
            )}
          >
            {getChangeIcon()}
            <span className="ml-1">
              {data.changeType === 'increase' ? '+' : ''}{data.change}%
            </span>
          </Badge>
          <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors duration-200">
            {data.period}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
