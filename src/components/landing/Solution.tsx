'use client';

import { BarChart3, FileText, Users, Zap, CheckCircle, ArrowRight } from 'lucide-react';

export default function Solution() {
  const features = [
    {
      icon: BarChart3,
      title: "Dashboards Inteligentes",
      description: "Visualizaciones claras y actualizadas en tiempo real de tus operaciones comerciales."
    },
    {
      icon: FileText,
      title: "Reportes Automáticos",
      description: "Generación automática de reportes personalizados para diferentes stakeholders."
    },
    {
      icon: Users,
      title: "Consultoría Estratégica",
      description: "Análisis experto y recomendaciones para optimizar tu estrategia de exportación."
    },
    {
      icon: Zap,
      title: "Integración API",
      description: "Conecta con tus sistemas existentes para un flujo de datos sin interrupciones."
    }
  ];

  const benefits = [
    "Reducción del 70% en tiempo de análisis",
    "Aumento del 40% en eficiencia operativa", 
    "Mejora del 60% en precisión de reportes",
    "ROI positivo en los primeros 3 meses"
  ];

  return (
    <section id="solucion" className="py-20">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="h2 mb-6 text-slate-100">
            La solución que{' '}
            <span className="text-primary">transforma tu comercio exterior</span>
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            QSP SpA convierte datos complejos en inteligencia accionable, 
            permitiendo decisiones estratégicas basadas en evidencia.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="card p-8 hover:scale-105 transition-transform duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 bg-cyan-500/10 rounded-2xl group-hover:bg-cyan-500/20 transition-colors duration-300">
                    <Icon size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-100 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-slate-100 mb-4">
                Resultados comprobados
              </h3>
              <p className="text-slate-400">
                Nuestros clientes experimentan mejoras significativas desde el primer mes
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-primary flex-shrink-0" />
                  <span className="text-slate-100 font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="text-center">
              <a 
                href="#cta" 
                className="btn btn-primary px-8 py-4 text-lg group"
              >
                Ver Demo en Vivo
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
