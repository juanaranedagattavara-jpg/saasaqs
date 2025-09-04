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
    <section id="casos-exito" className="py-20 bg-card/20">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground leading-tight">
            Confianza en sectores donde la{' '}
            <span className="text-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              anticipación es vital
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed font-light max-w-2xl mx-auto">
            Sectores exportadores críticos confían en QSP para mantener su ventaja competitiva 
            y anticipar cambios de mercado antes que la competencia.
          </p>
        </div>

        {/* Sector Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-20">
          {sectors.map((sector, index) => {
            const Icon = sector.icon;
            return (
              <div 
                key={index}
                className="card p-10 hover:scale-105 transition-all duration-500 group relative overflow-hidden border border-border/50 hover:border-primary/30"
              >
                {/* Background Pattern */}
                <div className={`absolute inset-0 ${sector.bgPattern} opacity-50`} />
                
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-center gap-6 mb-8">
                    <div className={`p-5 bg-gradient-to-br ${sector.color} rounded-3xl group-hover:scale-110 transition-transform duration-500 border border-primary/20`}>
                      <Icon size={36} className={sector.iconColor} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        {sector.title}
                      </h3>
                      <div className="text-base text-muted-foreground font-medium">
                        Sector exportador
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-8 text-lg font-light">
                    {sector.description}
                  </p>

                  {/* Impact Metrics */}
                  <div className="space-y-6">
                    <div className="flex items-center justify-between p-6 bg-card/50 rounded-2xl border border-border/30">
                      <div>
                        <div className="text-3xl font-bold text-primary mb-1">
                          {sector.impact}
                        </div>
                        <div className="text-base text-muted-foreground font-medium">
                          {sector.impactLabel}
                        </div>
                      </div>
                      <TrendingUp size={28} className="text-primary" />
                    </div>

                    <div className="flex items-center justify-between p-6 bg-card/30 rounded-2xl border border-border/20">
                      <div>
                        <div className="text-2xl font-bold text-foreground mb-1">
                          {sector.metric}
                        </div>
                        <div className="text-base text-muted-foreground font-medium">
                          {sector.metricLabel}
                        </div>
                      </div>
                      <Globe size={24} className="text-muted-foreground" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-3xl p-12 md:p-16 mb-20 border border-primary/10">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Resultados que respaldan nuestra experiencia
            </h3>
            <p className="text-xl text-muted-foreground font-light">
              Más de una década transformando el comercio exterior
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center group hover:scale-105 transition-all duration-300">
                  <div className="inline-flex items-center justify-center p-5 bg-primary/10 rounded-3xl mb-6 group-hover:bg-primary/20 transition-colors duration-300 border border-primary/20">
                    <Icon size={28} className="text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-foreground mb-3">
                    {stat.value}
                  </div>
                  <div className="text-base text-muted-foreground font-medium">
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
            className="btn btn-primary px-10 py-5 text-xl font-semibold group hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/25"
          >
            Solicita un caso de tu sector
            <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
}
