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
    <section id="kpis" className="py-24">
      <div className="container">
        <div className="max-w-6xl mx-auto text-center mb-24">
          {/* Main Stats Display */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center group">
              <div className="text-6xl md:text-7xl font-extrabold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                10+
              </div>
              <div className="text-xl text-muted-foreground font-medium">Años de experiencia</div>
            </div>
            <div className="text-center group">
              <div className="text-6xl md:text-7xl font-extrabold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                50+
              </div>
              <div className="text-xl text-muted-foreground font-medium">Herramientas diseñadas</div>
            </div>
            <div className="text-center group">
              <div className="text-6xl md:text-7xl font-extrabold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                7
              </div>
              <div className="text-xl text-muted-foreground font-medium">Sectores cubiertos</div>
            </div>
          </div>

          {/* Main Headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-foreground leading-tight">
            Una trayectoria que{' '}
            <span className="text-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              respalda cada promesa
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground leading-relaxed font-light max-w-4xl mx-auto">
            Más de una década transformando el comercio exterior con herramientas especializadas 
            y experiencia comprobada en múltiples sectores industriales.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-7xl mx-auto mb-24">
          {/* Timeline Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-accent/10 text-accent px-6 py-3 rounded-full text-sm font-semibold mb-8 border border-accent/20">
              <Calendar size={20} />
              Nuestra Evolución
            </div>
            <h3 className="text-4xl font-bold text-foreground mb-6">
              Una década de innovación continua
            </h3>
            <p className="text-xl text-muted-foreground font-light max-w-3xl mx-auto">
              Cada año marcado por avances significativos en tecnología y experiencia
            </p>
          </div>

          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-accent to-primary opacity-40" />
          
          <div className="space-y-20">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className={`flex items-center ${isEven ? 'flex-row' : 'flex-row-reverse'}`}>
                  {/* Content */}
                  <div className={`w-1/2 ${isEven ? 'pr-16 text-right' : 'pl-16 text-left'}`}>
                    <div className="card p-10 hover:scale-105 transition-all duration-500 group relative overflow-hidden border border-border/50 hover:border-primary/30 bg-gradient-to-br from-card/50 to-card/30">
                      {/* Background Pattern */}
                      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px] opacity-30" />
                      
                      <div className="relative z-10">
                        <div className={`flex items-center gap-8 mb-8 ${isEven ? 'flex-row-reverse' : 'flex-row'}`}>
                          <div className={`p-6 bg-gradient-to-br ${milestone.color} rounded-3xl group-hover:scale-110 transition-transform duration-500 border border-primary/20 group-hover:border-primary/40`}>
                            <Icon size={32} className={milestone.iconColor} />
                          </div>
                          <div className={isEven ? 'text-right' : 'text-left'}>
                            <div className="text-4xl font-extrabold text-primary mb-3">
                              {milestone.year}
                            </div>
                            <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                              {milestone.title}
                            </h3>
                          </div>
                        </div>
                        <p className="text-muted-foreground text-lg leading-relaxed font-light">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full border-4 border-background flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                    <div className="w-6 h-6 bg-white rounded-full" />
                  </div>

                  {/* Empty space for alignment */}
                  <div className="w-1/2" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Key Numbers */}
        <div className="bg-gradient-to-br from-card/50 to-card/30 rounded-3xl p-16 md:p-20 mb-24 border border-border/30 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px] opacity-30" />
          
          <div className="relative z-10">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-3 bg-primary/10 text-primary px-6 py-3 rounded-full text-sm font-semibold mb-8 border border-primary/20">
                <Award size={20} />
                Métricas de Confianza
              </div>
              <h3 className="text-4xl font-bold text-foreground mb-6">
                Números que respaldan nuestra experiencia
              </h3>
              <p className="text-xl text-muted-foreground font-light max-w-3xl mx-auto">
                Una década de innovación y resultados comprobados que hablan por sí solos
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {keyNumbers.map((number, index) => {
                const Icon = number.icon;
                return (
                  <div key={index} className="text-center group hover:scale-105 transition-all duration-500 p-8 rounded-2xl hover:bg-card/30 border border-transparent hover:border-primary/20">
                    <div className="inline-flex items-center justify-center p-6 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl mb-8 group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-500 border border-primary/20 group-hover:border-primary/40">
                      <Icon size={32} className="text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="text-5xl font-extrabold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                      {number.value}
                    </div>
                    <div className="text-2xl font-bold text-primary mb-4">
                      {number.label}
                    </div>
                    <div className="text-lg text-muted-foreground leading-relaxed font-light">
                      {number.description}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a 
            href="#cta" 
            className="btn btn-primary px-10 py-5 text-xl font-semibold group hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/25"
          >
            Explora nuestra trayectoria
            <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
}
