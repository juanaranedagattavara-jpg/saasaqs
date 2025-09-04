'use client';

import { AlertTriangle, Clock, FileX, Users } from 'lucide-react';

export default function Problem() {
  const problems = [
    {
      icon: FileX,
      title: "Datos dispersos y complejos",
      description: "Información aduanera en múltiples fuentes, formatos inconsistentes y difícil de interpretar."
    },
    {
      icon: Clock,
      title: "Reportes manuales y lentos",
      description: "Procesos manuales que consumen horas de trabajo y generan retrasos en la toma de decisiones."
    },
    {
      icon: AlertTriangle,
      title: "Falta de visibilidad estratégica",
      description: "Sin dashboards claros que permitan identificar oportunidades y tendencias del mercado."
    },
    {
      icon: Users,
      title: "Equipos sobrecargados",
      description: "Personal dedicando tiempo valioso a tareas repetitivas en lugar de análisis estratégico."
    }
  ];

  return (
    <section className="py-20 bg-card/50">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="h2 mb-6 text-slate-100">
            ¿Tu empresa pierde oportunidades por{' '}
            <span className="text-accent">datos desorganizados</span>?
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            Los exportadores enfrentan desafíos críticos que impactan su competitividad 
            y crecimiento en mercados internacionales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div 
                key={index}
                className="card p-8 hover:scale-105 transition-transform duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 bg-red-500/10 rounded-2xl group-hover:bg-red-500/20 transition-colors duration-300">
                    <Icon size={24} className="text-red-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-100 mb-3">
                      {problem.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed">
                      {problem.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Impact Statement */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-red-500/10 text-red-400 px-6 py-3 rounded-full text-sm font-medium">
            <AlertTriangle size={16} />
            Resultado: Decisiones tardías y pérdida de competitividad
          </div>
        </div>
      </div>
    </section>
  );
}
