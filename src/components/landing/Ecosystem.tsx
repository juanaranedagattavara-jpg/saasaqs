'use client';

import { 
  FileText, 
  TrendingUp, 
  PieChart, 
  Trophy,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Play
} from 'lucide-react';
import { useState } from 'react';

export default function Ecosystem() {
  const [currentApp, setCurrentApp] = useState(0);

  const applications = [
    {
      icon: FileText,
      title: "Resumen Ejecutivo",
      description: "Dashboards ejecutivos que condensan la información más crítica en una vista unificada.",
      features: ["KPIs en tiempo real", "Alertas automáticas", "Exportación PDF", "Compartir con stakeholders"],
      color: "from-blue-500/20 to-cyan-500/20",
      iconColor: "text-blue-400"
    },
    {
      icon: TrendingUp,
      title: "Análisis de Tendencias",
      description: "Identifica patrones de mercado y anticipa cambios con algoritmos de predicción avanzados.",
      features: ["Machine Learning", "Predicciones 7 días", "Análisis estacional", "Comparativas históricas"],
      color: "from-green-500/20 to-emerald-500/20",
      iconColor: "text-green-400"
    },
    {
      icon: PieChart,
      title: "Participación de Mercado",
      description: "Analiza tu posición competitiva y oportunidades de crecimiento en mercados específicos.",
      features: ["Market Share", "Análisis competitivo", "Oportunidades", "Benchmarking"],
      color: "from-purple-500/20 to-pink-500/20",
      iconColor: "text-purple-400"
    },
    {
      icon: Trophy,
      title: "Ranking de Empresas",
      description: "Compara tu rendimiento con la competencia y identifica áreas de mejora estratégica.",
      features: ["Rankings dinámicos", "Métricas comparativas", "Alertas de posición", "Análisis de gaps"],
      color: "from-orange-500/20 to-yellow-500/20",
      iconColor: "text-orange-400"
    }
  ];

  const nextApp = () => {
    setCurrentApp((prev) => (prev + 1) % applications.length);
  };

  const prevApp = () => {
    setCurrentApp((prev) => (prev - 1 + applications.length) % applications.length);
  };

  return (
    <section id="ecosistema" className="py-20">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground leading-tight">
            Un ecosistema de apps para cada{' '}
            <span className="text-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              desafío competitivo
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed font-light max-w-2xl mx-auto">
            Cada módulo está diseñado para resolver desafíos específicos de comercio exterior, 
            creando un ecosistema completo de inteligencia de mercado.
          </p>
        </div>

        {/* App Carousel */}
        <div className="relative max-w-7xl mx-auto">
          {/* Navigation */}
          <div className="flex justify-between items-center mb-12">
            <button
              onClick={prevApp}
              className="p-4 bg-card/50 hover:bg-card/70 rounded-full transition-all duration-300 border border-border/30 hover:border-primary/30 group"
            >
              <ChevronLeft size={28} className="text-muted-foreground group-hover:text-primary transition-colors duration-300" />
            </button>
            
            <div className="flex gap-3">
              {applications.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentApp(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === currentApp 
                      ? 'bg-primary scale-125 shadow-lg shadow-primary/25' 
                      : 'bg-muted hover:bg-muted-foreground/50'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextApp}
              className="p-4 bg-card/50 hover:bg-card/70 rounded-full transition-all duration-300 border border-border/30 hover:border-primary/30 group"
            >
              <ChevronRight size={28} className="text-muted-foreground group-hover:text-primary transition-colors duration-300" />
            </button>
          </div>

          {/* App Display */}
          <div className="card p-12 md:p-16 relative overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-500">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px] opacity-30" />
            
            <div className="relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* App Info */}
                <div>
                  <div className="flex items-center gap-6 mb-8">
                    <div className={`p-6 bg-gradient-to-br ${applications[currentApp].color} rounded-3xl border border-primary/20`}>
                      {(() => {
                        const Icon = applications[currentApp].icon;
                        return <Icon size={40} className={applications[currentApp].iconColor} />;
                      })()}
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-foreground mb-2">
                        {applications[currentApp].title}
                      </h3>
                      <div className="flex items-center gap-3 text-base text-muted-foreground">
                        <Play size={20} />
                        <span>Demo interactivo</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-10 text-xl font-light">
                    {applications[currentApp].description}
                  </p>

                  <div className="space-y-4 mb-10">
                    {applications[currentApp].features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-4">
                        <div className="w-3 h-3 bg-primary rounded-full" />
                        <span className="text-foreground text-lg">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <a 
                    href="#demo" 
                    className="btn btn-primary px-8 py-4 text-lg font-semibold group hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/25"
                  >
                    Ver Demo
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>

                {/* App Preview */}
                <div className="relative">
                  <div className="bg-gradient-to-br from-card/50 to-card/30 rounded-3xl p-8 border border-border/30 shadow-2xl">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-4 h-4 bg-red-500 rounded-full" />
                      <div className="w-4 h-4 bg-yellow-500 rounded-full" />
                      <div className="w-4 h-4 bg-green-500 rounded-full" />
                    </div>
                    
                    <div className="space-y-6">
                      <div className="h-5 bg-muted/50 rounded animate-pulse" />
                      <div className="h-5 bg-muted/50 rounded w-3/4 animate-pulse" />
                      <div className="h-40 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center border border-primary/20">
                        <div className="text-muted-foreground text-lg font-medium">
                          {applications[currentApp].title} Preview
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-6">
                        <div className="h-20 bg-muted/30 rounded-xl" />
                        <div className="h-20 bg-muted/30 rounded-xl" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <a 
            href="#casos-exito" 
            className="btn btn-ghost px-10 py-5 text-xl font-semibold group hover:scale-105 transition-all duration-300 border-2"
          >
            Conoce los módulos
            <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
}
