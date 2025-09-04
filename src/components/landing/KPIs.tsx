'use client';

import { 
  Calendar, 
  Wrench,
  Building2,
  TrendingUp,
  ArrowRight,
  Award,
  Users,
  Globe,
  BarChart3,
  Zap
} from 'lucide-react';

export default function KPIs() {
  const milestones = [
    {
      year: "2014",
      title: "Fundación de QSP",
      description: "Inicio de la revolución en inteligencia de comercio exterior",
      icon: Award,
      color: "from-blue-500/20 to-cyan-500/20",
      iconColor: "text-blue-400"
    },
    {
      year: "2016",
      title: "Primera Herramienta",
      description: "Lanzamiento de nuestro primer módulo de análisis de tendencias",
      icon: Wrench,
      color: "from-green-500/20 to-emerald-500/20",
      iconColor: "text-green-400"
    },
    {
      year: "2018",
      title: "Expansión Sectorial",
      description: "Cobertura completa en salmonicultura, agro y forestal",
      icon: Building2,
      color: "from-purple-500/20 to-pink-500/20",
      iconColor: "text-purple-400"
    },
    {
      year: "2020",
      title: "Plataforma Unificada",
      description: "Integración de todos los módulos en un ecosistema completo",
      icon: BarChart3,
      color: "from-orange-500/20 to-yellow-500/20",
      iconColor: "text-orange-400"
    },
    {
      year: "2022",
      title: "IA Avanzada",
      description: "Implementación de machine learning para predicciones precisas",
      icon: Zap,
      color: "from-red-500/20 to-rose-500/20",
      iconColor: "text-red-400"
    },
    {
      year: "2024",
      title: "Liderazgo Consolidado",
      description: "Más de 10 años, 50 herramientas diseñadas, 7 sectores cubiertos",
      icon: TrendingUp,
      color: "from-cyan-500/20 to-blue-500/20",
      iconColor: "text-cyan-400"
    }
  ];

  const keyNumbers = [
    {
      icon: Calendar,
      value: "10+",
      label: "Años de experiencia",
      description: "Liderando la transformación digital del comercio exterior"
    },
    {
      icon: Wrench,
      value: "50+",
      label: "Herramientas diseñadas",
      description: "Soluciones especializadas para cada desafío exportador"
    },
    {
      icon: Building2,
      value: "7",
      label: "Sectores cubiertos",
      description: "Desde salmonicultura hasta tecnología avanzada"
    },
    {
      icon: Users,
      value: "150+",
      label: "Empresas transformadas",
      description: "Clientes que confían en nuestra experiencia"
    },
    {
      icon: Globe,
      value: "25+",
      label: "Países de cobertura",
      description: "Análisis global con enfoque local"
    },
    {
      icon: TrendingUp,
      value: "95%",
      label: "Satisfacción del cliente",
      description: "Resultados que respaldan nuestra metodología"
    }
  ];

  return (
    <section id="kpis" className="py-20">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="h2 mb-6 text-slate-100">
            Más de 10 años, 50 herramientas diseñadas,{' '}
            <span className="text-brand">7 sectores cubiertos</span>
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            Nuestra trayectoria respalda cada promesa que hacemos a nuestros clientes.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-6xl mx-auto mb-16">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-brand via-accent to-brand opacity-30" />
          
          <div className="space-y-12">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className={`flex items-center ${isEven ? 'flex-row' : 'flex-row-reverse'}`}>
                  {/* Content */}
                  <div className={`w-1/2 ${isEven ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="card p-6 hover:scale-105 transition-all duration-300 group relative overflow-hidden">
                      {/* Background Pattern */}
                      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px] opacity-30" />
                      
                      <div className="relative z-10">
                        <div className="flex items-center gap-4 mb-4">
                          <div className={`p-3 bg-gradient-to-br ${milestone.color} rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                            <Icon size={24} className={milestone.iconColor} />
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-brand">
                              {milestone.year}
                            </div>
                            <h3 className="text-lg font-semibold text-slate-100">
                              {milestone.title}
                            </h3>
                          </div>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="relative z-10 w-8 h-8 bg-gradient-to-br from-brand to-accent rounded-full border-4 border-slate-900 flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full" />
                  </div>

                  {/* Empty space for alignment */}
                  <div className="w-1/2" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Key Numbers */}
        <div className="bg-gradient-to-r from-brand/5 to-accent/5 rounded-2xl p-8 md:p-12 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-slate-100 mb-4">
              Números que respaldan nuestra experiencia
            </h3>
            <p className="text-slate-400">
              Una década de innovación y resultados comprobados
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyNumbers.map((number, index) => {
              const Icon = number.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center p-4 bg-cyan-500/10 rounded-2xl mb-4 group-hover:bg-cyan-500/20 transition-colors duration-300">
                    <Icon size={24} className="text-brand" />
                  </div>
                  <div className="text-3xl font-bold text-slate-100 mb-2">
                    {number.value}
                  </div>
                  <div className="text-lg font-semibold text-brand mb-2">
                    {number.label}
                  </div>
                  <div className="text-sm text-slate-400 leading-relaxed">
                    {number.description}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a 
            href="#cta" 
            className="btn btn-primary px-8 py-4 text-lg group"
          >
            Explora nuestra trayectoria
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
          </a>
        </div>
      </div>
    </section>
  );
}
