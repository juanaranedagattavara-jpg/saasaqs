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
    <section id="beneficios" className="py-20 bg-card/20">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground leading-tight">
            De ruido estadístico a{' '}
            <span className="text-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              comprensión inmediata
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed font-light max-w-2xl mx-auto">
            Descubre por qué QSP es la solución que las empresas exportadoras más exitosas eligen para transformar sus datos en ventaja competitiva.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            const Visual = benefit.visual;
            return (
              <div 
                key={index}
                className="card p-10 hover:scale-105 transition-all duration-500 group relative overflow-hidden border border-border/50 hover:border-primary/30"
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px] opacity-50" />
                
                <div className="relative z-10">
                  {/* Icon and Visual */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="p-5 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl group-hover:scale-110 transition-transform duration-500 border border-primary/20">
                      <Icon size={36} className="text-primary" />
                    </div>
                    <div className="p-4 bg-card/50 rounded-2xl border border-border/30">
                      <Visual size={28} className="text-muted-foreground" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-6 group-hover:text-primary transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
                    {benefit.description}
                  </p>

                  {/* Metric */}
                  <div className="border-t border-border pt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-3xl font-bold text-primary mb-1">
                          {benefit.metric}
                        </div>
                        <div className="text-base text-muted-foreground font-medium">
                          {benefit.metricLabel}
                        </div>
                      </div>
                      <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full flex items-center justify-center border border-primary/20">
                        <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full animate-pulse" />
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
            className="btn btn-primary px-10 py-5 text-xl font-semibold group hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/25"
          >
            Explora cómo funciona
            <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
}
