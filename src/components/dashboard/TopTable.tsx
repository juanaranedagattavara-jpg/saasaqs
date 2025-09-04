'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { cn } from '@/lib/utils';
import { TopProduct, TopCountry } from '@/types';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface TopTableProps {
  title: string;
  data: TopProduct[] | TopCountry[];
  type: 'products' | 'countries';
}

export default function TopTable({ title, data, type }: TopTableProps) {
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
          {data.map((item, index) => (
            <div key={item.id} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-sm font-medium">
                  {index + 1}
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    {type === 'countries' && 'flag' in item && (
                      <span className="text-lg">{item.flag}</span>
                    )}
                    <span className="font-medium text-foreground">
                      {item.name}
                    </span>
                  </div>
                  {type === 'products' && 'category' in item && (
                    <p className="text-sm text-muted-foreground">
                      {item.category}
                    </p>
                  )}
                </div>
              </div>
              <div className="text-right">
                <div className="font-medium text-foreground">
                  ${item.value}M
                </div>
                <div className={cn(
                  "flex items-center justify-end space-x-1 text-xs",
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
