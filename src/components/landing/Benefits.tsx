'use client';

import { 
  TrendingUp, 
  Clock, 
  Shield, 
  Target, 
  Users, 
  Globe,
  DollarSign
} from 'lucide-react';

export default function Benefits() {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Crecimiento Acelerado",
      description: "Identifica oportunidades de mercado y optimiza tu estrategia de exportación con datos precisos.",
      metric: "+40%",
      metricLabel: "Crecimiento en ventas"
    },
    {
      icon: Clock,
      title: "Eficiencia Operativa",
      description: "Automatiza procesos manuales y reduce el tiempo de análisis de semanas a horas.",
      metric: "-70%",
      metricLabel: "Tiempo de análisis"
    },
    {
      icon: Shield,
      title: "Decisiones Informadas",
      description: "Reduce riesgos y toma decisiones estratégicas basadas en datos confiables y actualizados.",
      metric: "95%",
      metricLabel: "Precisión en datos"
    },
    {
      icon: Target,
      title: "Competitividad",
      description: "Mantente por delante de la competencia con insights de mercado en tiempo real.",
      metric: "+60%",
      metricLabel: "Ventaja competitiva"
    },
    {
      icon: Users,
      title: "Equipos Productivos",
      description: "Libera a tu equipo de tareas repetitivas para enfocarse en estrategia y crecimiento.",
      metric: "+50%",
      metricLabel: "Productividad del equipo"
    },
    {
      icon: Globe,
      title: "Expansión Global",
      description: "Accede a datos de 50+ países para identificar nuevos mercados y oportunidades.",
      metric: "50+",
      metricLabel: "Países analizados"
    }
  ];

  return (
    <section id="beneficios" className="py-20 bg-card/30">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="h2 mb-6 text-slate-100">
            Beneficios que{' '}
            <span className="text-accent">transforman tu negocio</span>
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            Descubre cómo QSP SpA puede revolucionar tu operación de comercio exterior 
            y llevarte al siguiente nivel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index}
                className="card p-8 hover:scale-105 transition-all duration-300 group"
              >
                <div className="text-center">
                  <div className="inline-flex items-center justify-center p-4 bg-cyan-500/10 rounded-2xl mb-6 group-hover:bg-cyan-500/20 transition-colors duration-300">
                    <Icon size={32} className="text-brand" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-slate-100 mb-4">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-slate-400 leading-relaxed mb-6">
                    {benefit.description}
                  </p>

                  <div className="border-t border-[#1b2736] pt-6">
                    <div className="text-3xl font-bold text-brand mb-1">
                      {benefit.metric}
                    </div>
                    <div className="text-sm text-slate-400">
                      {benefit.metricLabel}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ROI Section */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-brand/10 to-accent/10 px-8 py-6 rounded-2xl">
            <DollarSign size={32} className="text-brand" />
            <div className="text-left">
              <div className="text-2xl font-bold text-slate-100">ROI Promedio</div>
              <div className="text-3xl font-extrabold text-brand">300%</div>
              <div className="text-sm text-slate-400">en los primeros 12 meses</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
