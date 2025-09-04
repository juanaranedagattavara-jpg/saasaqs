'use client';

import { memo } from 'react';
import Link from 'next/link';
import { ArrowRight, BarChart3, TrendingUp, Globe } from 'lucide-react';

const Hero = memo(function Hero() {
  return (
    <section className="hero-section py-20 lg:py-32 relative overflow-hidden" role="banner" aria-labelledby="hero-heading">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" aria-hidden="true" />
      
      <div className="container relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 bg-primary/10 text-primary px-6 py-3 rounded-full text-sm font-semibold mb-12 border border-primary/20" role="img" aria-label="Badge de categoría">
            <TrendingUp size={18} aria-hidden="true" />
            <span>Inteligencia de Comercio Exterior</span>
          </div>

          {/* Main Headline */}
          <h1 id="hero-heading" className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-foreground leading-tight">
            Saltos Cuánticos en{' '}
            <span className="text-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              inteligencia de mercado
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed font-light">
            Transforma datos complejos en sabiduría accionable que impulsa tu crecimiento exportador
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12" role="group" aria-label="Acciones principales">
            <Link 
              href="#demo" 
              className="btn btn-primary px-8 py-4 text-lg font-semibold group hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg shadow-primary/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              aria-label="Solicitar demostración del producto"
            >
              <span>Solicita tu demo</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
            </Link>
            <Link 
              href="#beneficios" 
              className="btn btn-ghost px-8 py-4 text-lg font-semibold hover:scale-105 active:scale-95 transition-all duration-300 border-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              aria-label="Explorar cómo funciona el producto"
            >
              Explora cómo funciona
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto" role="region" aria-label="Estadísticas del producto">
            <div className="text-center group/stat hover:scale-105 transition-all duration-300 p-6 rounded-2xl hover:bg-card/30" role="img" aria-label="95% de precisión en datos">
              <div className="flex items-center justify-center mb-6">
                <div className="p-4 bg-primary/10 rounded-3xl group-hover/stat:bg-primary/20 group-hover/stat:scale-110 transition-all duration-300 border border-primary/20">
                  <BarChart3 size={28} className="text-primary group-hover/stat:text-primary/80" aria-hidden="true" />
                </div>
              </div>
              <div className="text-4xl font-bold text-foreground mb-2 group-hover/stat:text-primary transition-colors duration-300" aria-label="95 por ciento">95%</div>
              <div className="text-base font-medium text-muted-foreground group-hover/stat:text-foreground transition-colors duration-300">Precisión en Datos</div>
            </div>
            
            <div className="text-center group/stat hover:scale-105 transition-all duration-300 p-6 rounded-2xl hover:bg-card/30" role="img" aria-label="40% de mejora en eficiencia operativa">
              <div className="flex items-center justify-center mb-6">
                <div className="p-4 bg-yellow-500/10 rounded-3xl group-hover/stat:bg-yellow-500/20 group-hover/stat:scale-110 transition-all duration-300 border border-yellow-500/20">
                  <TrendingUp size={28} className="text-yellow-500 group-hover/stat:text-yellow-400" aria-hidden="true" />
                </div>
              </div>
              <div className="text-4xl font-bold text-foreground mb-2 group-hover/stat:text-yellow-500 transition-colors duration-300" aria-label="40 por ciento de mejora">+40%</div>
              <div className="text-base font-medium text-muted-foreground group-hover/stat:text-foreground transition-colors duration-300">Eficiencia Operativa</div>
            </div>
            
            <div className="text-center group/stat hover:scale-105 transition-all duration-300 p-6 rounded-2xl hover:bg-card/30" role="img" aria-label="Más de 50 países analizados">
              <div className="flex items-center justify-center mb-6">
                <div className="p-4 bg-primary/10 rounded-3xl group-hover/stat:bg-primary/20 group-hover/stat:scale-110 transition-all duration-300 border border-primary/20">
                  <Globe size={28} className="text-primary group-hover/stat:text-primary/80" aria-hidden="true" />
                </div>
              </div>
              <div className="text-4xl font-bold text-foreground mb-2 group-hover/stat:text-primary transition-colors duration-300" aria-label="Más de 50">50+</div>
              <div className="text-base font-medium text-muted-foreground group-hover/stat:text-foreground transition-colors duration-300">Países Analizados</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/5 rounded-full blur-xl animate-pulse" aria-hidden="true" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-yellow-500/5 rounded-full blur-xl animate-pulse delay-1000" aria-hidden="true" />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-accent/5 rounded-full blur-lg animate-pulse delay-500" aria-hidden="true" />
      <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-primary/3 rounded-full blur-2xl animate-pulse delay-700" aria-hidden="true" />
    </section>
  );
});

export default Hero;
