'use client';

import { 
  Fish, 
  Wheat, 
  TreePine,
  TrendingUp,
  ArrowRight,
  Users,
  DollarSign,
  Globe
} from 'lucide-react';

export default function SuccessCases() {
  const sectors = [
    {
      icon: Fish,
      title: "Salmonicultura",
      description: "Optimización de exportaciones de salmón a mercados asiáticos y europeos.",
      impact: "+67%",
      impactLabel: "Aumento en exportaciones",
      metric: "15",
      metricLabel: "nuevos mercados identificados",
      color: "from-blue-500/20 to-cyan-500/20",
      iconColor: "text-blue-400",
      bgPattern: "bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.1),transparent_50%)]"
    },
    {
      icon: Wheat,
      title: "Agroindustria",
      description: "Análisis de tendencias de demanda y optimización de cadenas de suministro.",
      impact: "+42%",
      impactLabel: "Mejora en eficiencia",
      metric: "8",
      metricLabel: "países de destino nuevos",
      color: "from-green-500/20 to-emerald-500/20",
      iconColor: "text-green-400",
      bgPattern: "bg-[radial-gradient(circle_at_70%_20%,rgba(34,197,94,0.1),transparent_50%)]"
    },
    {
      icon: TreePine,
      title: "Forestal",
      description: "Gestión inteligente de inventarios y predicción de demanda de productos madereros.",
      impact: "+38%",
      impactLabel: "Reducción de costos",
      metric: "12",
      metricLabel: "meses de anticipación",
      color: "from-amber-500/20 to-orange-500/20",
      iconColor: "text-amber-400",
      bgPattern: "bg-[radial-gradient(circle_at_50%_80%,rgba(245,158,11,0.1),transparent_50%)]"
    }
  ];

  const stats = [
    { icon: Users, value: "150+", label: "Empresas transformadas" },
    { icon: Globe, value: "25+", label: "Países de exportación" },
    { icon: TrendingUp, value: "85%", label: "Mejora promedio en ROI" },
    { icon: DollarSign, value: "$2.3M", label: "Ahorro promedio anual" }
  ];

  return (
    <section id="casos-exito" className="py-20 bg-card/30">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="h2 mb-6 text-slate-100">
            Confianza en sectores donde la{' '}
            <span className="text-brand">anticipación es vital</span>
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            Sectores exportadores críticos confían en QSP para mantener su ventaja competitiva.
          </p>
        </div>

        {/* Sector Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {sectors.map((sector, index) => {
            const Icon = sector.icon;
            return (
              <div 
                key={index}
                className="card p-8 hover:scale-105 transition-all duration-300 group relative overflow-hidden"
              >
                {/* Background Pattern */}
                <div className={`absolute inset-0 ${sector.bgPattern} opacity-50`} />
                
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-4 bg-gradient-to-br ${sector.color} rounded-2xl group-hover:scale-110 transition-transform duration-300`}>
                      <Icon size={32} className={sector.iconColor} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-100">
                        {sector.title}
                      </h3>
                      <div className="text-sm text-slate-400">
                        Sector exportador
                      </div>
                    </div>
                  </div>

                  <p className="text-slate-400 leading-relaxed mb-6">
                    {sector.description}
                  </p>

                  {/* Impact Metrics */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-xl">
                      <div>
                        <div className="text-2xl font-bold text-brand">
                          {sector.impact}
                        </div>
                        <div className="text-sm text-slate-400">
                          {sector.impactLabel}
                        </div>
                      </div>
                      <TrendingUp size={24} className="text-brand" />
                    </div>

                    <div className="flex items-center justify-between p-4 bg-slate-800/30 rounded-xl">
                      <div>
                        <div className="text-lg font-semibold text-slate-100">
                          {sector.metric}
                        </div>
                        <div className="text-sm text-slate-400">
                          {sector.metricLabel}
                        </div>
                      </div>
                      <Globe size={20} className="text-slate-400" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-brand/5 to-accent/5 rounded-2xl p-8 md:p-12 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-slate-100 mb-4">
              Resultados que respaldan nuestra experiencia
            </h3>
            <p className="text-slate-400">
              Más de una década transformando el comercio exterior
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center p-4 bg-cyan-500/10 rounded-2xl mb-4 group-hover:bg-cyan-500/20 transition-colors duration-300">
                    <Icon size={24} className="text-brand" />
                  </div>
                  <div className="text-3xl font-bold text-slate-100 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-400">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a 
            href="#testimonios" 
            className="btn btn-primary px-8 py-4 text-lg group"
          >
            Solicita un caso de tu sector
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
          </a>
        </div>
      </div>
    </section>
  );
}
