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
          <h2 className="h2 mb-6 text-slate-100">
            Un ecosistema de apps para cada{' '}
            <span className="text-brand">desafío competitivo</span>
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            Cada módulo está diseñado para resolver desafíos específicos de comercio exterior.
          </p>
        </div>

        {/* App Carousel */}
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation */}
          <div className="flex justify-between items-center mb-8">
            <button
              onClick={prevApp}
              className="p-3 bg-slate-800/50 hover:bg-slate-700/50 rounded-full transition-colors duration-200"
            >
              <ChevronLeft size={24} className="text-slate-400" />
            </button>
            
            <div className="flex gap-2">
              {applications.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentApp(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentApp 
                      ? 'bg-brand scale-125' 
                      : 'bg-slate-600 hover:bg-slate-500'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextApp}
              className="p-3 bg-slate-800/50 hover:bg-slate-700/50 rounded-full transition-colors duration-200"
            >
              <ChevronRight size={24} className="text-slate-400" />
            </button>
          </div>

          {/* App Display */}
          <div className="card p-8 md:p-12 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px] opacity-30" />
            
            <div className="relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* App Info */}
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-4 bg-gradient-to-br ${applications[currentApp].color} rounded-2xl`}>
                      {(() => {
                        const Icon = applications[currentApp].icon;
                        return <Icon size={32} className={applications[currentApp].iconColor} />;
                      })()}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-100">
                        {applications[currentApp].title}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-slate-400">
                        <Play size={16} />
                        <span>Demo interactivo</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-slate-400 leading-relaxed mb-8 text-lg">
                    {applications[currentApp].description}
                  </p>

                  <div className="space-y-3 mb-8">
                    {applications[currentApp].features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-brand rounded-full" />
                        <span className="text-slate-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <a 
                    href="#demo" 
                    className="btn btn-primary px-6 py-3 group"
                  >
                    Ver Demo
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
                  </a>
                </div>

                {/* App Preview */}
                <div className="relative">
                  <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-6 border border-slate-700/50">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-3 h-3 bg-red-500 rounded-full" />
                      <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                      <div className="w-3 h-3 bg-green-500 rounded-full" />
                    </div>
                    
                    <div className="space-y-4">
                      <div className="h-4 bg-slate-700/50 rounded animate-pulse" />
                      <div className="h-4 bg-slate-700/50 rounded w-3/4 animate-pulse" />
                      <div className="h-32 bg-gradient-to-br from-brand/10 to-accent/10 rounded-lg flex items-center justify-center">
                        <div className="text-slate-400 text-sm">
                          {applications[currentApp].title} Preview
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="h-16 bg-slate-700/30 rounded" />
                        <div className="h-16 bg-slate-700/30 rounded" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a 
            href="#casos-exito" 
            className="btn btn-ghost px-8 py-4 text-lg group"
          >
            Conoce los módulos
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
          </a>
        </div>
      </div>
    </section>
  );
}
