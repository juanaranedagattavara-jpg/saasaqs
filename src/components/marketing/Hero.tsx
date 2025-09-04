'use client';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, BarChart3, Shield, Zap } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm">
            <Zap className="mr-2 h-4 w-4" />
            Plataforma Premium de Comercio Exterior
          </Badge>

          {/* Headline */}
          <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Dashboard de{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Comercio Exterior
            </span>{' '}
            para Empresas
          </h1>

          {/* Subheadline */}
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
            Analiza exportaciones, importaciones y tendencias comerciales con dashboards profesionales. 
            Toma decisiones informadas con datos en tiempo real.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="px-8 py-3 text-lg">
              <Link href="/dashboard">
                Ver Dashboard Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="px-8 py-3 text-lg">
              <Link href="#features">
                Conocer Características
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="text-center">
              <div className="flex items-center justify-center">
                <BarChart3 className="h-8 w-8 text-primary" />
              </div>
              <div className="mt-2 text-3xl font-bold text-foreground">95%</div>
              <div className="text-sm text-muted-foreground">Precisión en Datos</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <div className="mt-2 text-3xl font-bold text-foreground">100%</div>
              <div className="text-sm text-muted-foreground">Datos Seguros</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <div className="mt-2 text-3xl font-bold text-foreground">24/7</div>
              <div className="text-sm text-muted-foreground">Disponibilidad</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
