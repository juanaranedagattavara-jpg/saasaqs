'use client';

import { 
  TrendingUp, 
  MessageSquare, 
  Puzzle,
  ArrowRight,
  BarChart3,
  Eye,
  Layers
} from 'lucide-react';

export default function BenefitsDifferential() {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Anticipación de tendencias",
      description: "Identifica patrones de mercado antes que la competencia con algoritmos de machine learning avanzados.",
      visual: BarChart3,
      metric: "7 días",
      metricLabel: "de anticipación promedio"
    },
    {
      icon: MessageSquare,
      title: "Narrativas interactivas",
      description: "Convierte datos complejos en historias claras y accionables que tu equipo puede entender al instante.",
      visual: Eye,
      metric: "85%",
      metricLabel: "mejor comprensión"
    },
    {
      icon: Puzzle,
      title: "Ecosistema modular",
      description: "Integra solo las herramientas que necesitas. Escala según crezca tu operación de comercio exterior.",
      visual: Layers,
      metric: "12+",
      metricLabel: "módulos disponibles"
    }
  ];

  return (
    <section id="beneficios" className="py-20 bg-card/30">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="h2 mb-6 text-slate-100">
            De ruido estadístico a{' '}
            <span className="text-brand">comprensión inmediata</span>
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            Descubre por qué QSP es la solución que las empresas exportadoras más exitosas eligen.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            const Visual = benefit.visual;
            return (
              <div 
                key={index}
                className="card p-8 hover:scale-105 transition-all duration-300 group relative overflow-hidden"
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px] opacity-50" />
                
                <div className="relative z-10">
                  {/* Icon and Visual */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-4 bg-gradient-to-br from-brand/20 to-accent/20 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                      <Icon size={32} className="text-brand" />
                    </div>
                    <div className="p-3 bg-slate-800/50 rounded-xl">
                      <Visual size={24} className="text-slate-400" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-slate-100 mb-4">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-slate-400 leading-relaxed mb-6">
                    {benefit.description}
                  </p>

                  {/* Metric */}
                  <div className="border-t border-slate-700 pt-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-2xl font-bold text-brand">
                          {benefit.metric}
                        </div>
                        <div className="text-sm text-slate-400">
                          {benefit.metricLabel}
                        </div>
                      </div>
                      <div className="w-12 h-12 bg-gradient-to-br from-brand/10 to-accent/10 rounded-full flex items-center justify-center">
                        <div className="w-6 h-6 bg-gradient-to-br from-brand to-accent rounded-full animate-pulse" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <a 
            href="#ecosistema" 
            className="btn btn-primary px-8 py-4 text-lg group"
          >
            Explora cómo funciona
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
          </a>
        </div>
      </div>
    </section>
  );
}
