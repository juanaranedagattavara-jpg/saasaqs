'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';
import { TopProduct, TopCountry } from '@/types';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface TopTableProps {
  title: string;
  data: TopProduct[] | TopCountry[];
  type: 'products' | 'countries';
  isLoading?: boolean;
}

export default function TopTable({ title, data, type, isLoading = false }: TopTableProps) {
  const getChangeIcon = (changeType: string) => {
    switch (changeType) {
      case 'increase':
        return <TrendingUp className="h-3 w-3 text-green-400" />;
      case 'decrease':
        return <TrendingDown className="h-3 w-3 text-red-400" />;
      default:
        return null;
    }
  };

  const getChangeColor = (changeType: string) => {
    switch (changeType) {
      case 'increase':
        return 'text-green-400';
      case 'decrease':
        return 'text-red-400';
      default:
        return 'text-muted-foreground';
    }
  };

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <p className="text-sm text-muted-foreground">
            {type === 'products' ? 'Principales productos exportados' : 'Principales destinos comerciales'}
          </p>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Skeleton className="h-8 w-8 rounded-full" />
                  <div className="space-y-1">
                    <Skeleton className="h-4 w-24" />
                    {type === 'products' && (
                      <Skeleton className="h-3 w-16" />
                    )}
                  </div>
                </div>
                <div className="text-right space-y-1">
                  <Skeleton className="h-4 w-12 ml-auto" />
                  <Skeleton className="h-3 w-8 ml-auto" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="group">
      <CardHeader>
        <CardTitle className="group-hover:text-primary transition-colors duration-200">{title}</CardTitle>
        <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-200">
          {type === 'products' ? 'Principales productos exportados' : 'Principales destinos comerciales'}
        </p>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {data.map((item, index) => (
            <div key={item.id} className="flex items-center justify-between group/item hover:bg-muted/30 rounded-lg p-2 -m-2 transition-all duration-200">
              <div className="flex items-center space-x-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-sm font-medium group-hover/item:bg-primary group-hover/item:text-primary-foreground transition-colors duration-200">
                  {index + 1}
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    {type === 'countries' && 'flag' in item && (
                      <span className="text-lg group-hover/item:scale-110 transition-transform duration-200">{item.flag}</span>
                    )}
                    <span className="font-medium text-foreground group-hover/item:text-primary transition-colors duration-200">
                      {item.name}
                    </span>
                  </div>
                  {type === 'products' && 'category' in item && (
                    <p className="text-sm text-muted-foreground group-hover/item:text-foreground transition-colors duration-200">
                      {item.category}
                    </p>
                  )}
                </div>
              </div>
              <div className="text-right">
                <div className="font-medium text-foreground group-hover/item:text-primary transition-colors duration-200">
                  ${item.value}M
                </div>
                <div className={cn(
                  "flex items-center justify-end space-x-1 text-xs transition-all duration-200 group-hover/item:scale-105",
                  getChangeColor(item.changeType)
                )}>
                  {getChangeIcon(item.changeType)}
                  <span>
                    {item.changeType === 'increase' ? '+' : ''}{item.change}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
