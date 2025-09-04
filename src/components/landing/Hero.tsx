'use client';

import { ArrowRight, BarChart3, TrendingUp, Globe } from 'lucide-react';

export default function Hero() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      
      <div className="container relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-8">
            <TrendingUp size={16} />
            Inteligencia de Comercio Exterior
          </div>

          {/* Main Headline */}
          <h1 className="h1 mb-6 text-foreground">
            Convierte datos aduaneros en{' '}
            <span className="text-primary">decisiones estratégicas</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            QSP transforma información compleja de comercio exterior en dashboards claros, 
            reportes automáticos y consultoría estratégica para exportadores.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a 
              href="#cta" 
              className="btn btn-primary px-8 py-4 text-lg group"
            >
              Ver Demo Gratis
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
            </a>
            <a 
              href="#solucion" 
              className="btn btn-ghost px-8 py-4 text-lg"
            >
              Conocer Solución
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                                 <div className="p-3 bg-primary/10 rounded-2xl">
                   <BarChart3 size={24} className="text-primary" />
                 </div>
               </div>
               <div className="text-3xl font-bold text-foreground mb-1">95%</div>
               <div className="text-sm text-muted-foreground">Precisión en Datos</div>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <div className="p-3 bg-yellow-500/10 rounded-2xl">
                  <TrendingUp size={24} className="text-yellow-500" />
                </div>
              </div>
                             <div className="text-3xl font-bold text-foreground mb-1">+40%</div>
               <div className="text-sm text-muted-foreground">Eficiencia Operativa</div>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <div className="p-3 bg-primary/10 rounded-2xl">
                  <Globe size={24} className="text-primary" />
                </div>
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">50+</div>
              <div className="text-sm text-muted-foreground">Países Analizados</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/5 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-yellow-500/5 rounded-full blur-xl animate-pulse delay-1000" />
    </section>
  );
}
