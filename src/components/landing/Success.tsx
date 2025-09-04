'use client';

import { Quote, TrendingUp, Users, Globe, Award } from 'lucide-react';

export default function Success() {
  const testimonials = [
    {
      quote: "QSP transformó completamente nuestra operación de exportación. Ahora tomamos decisiones 3x más rápido y hemos aumentado nuestras ventas en un 45%.",
      author: "María González",
      role: "Directora de Comercio Exterior",
      company: "AgroExport Chile",
      metric: "+45%",
      metricLabel: "Aumento en ventas"
    },
    {
      quote: "La automatización de reportes nos ahorra 20 horas semanales. Nuestro equipo ahora se enfoca en estrategia, no en recopilar datos.",
      author: "Carlos Mendoza",
      role: "Gerente de Operaciones",
      company: "Minera del Norte",
      metric: "20h",
      metricLabel: "Ahorro semanal"
    },
    {
      quote: "Con QSP identificamos 3 nuevos mercados en 6 meses. La plataforma nos dio la visibilidad que necesitábamos para expandirnos.",
      author: "Ana Rodríguez",
      role: "CEO",
      company: "TechExport Solutions",
      metric: "3",
      metricLabel: "Nuevos mercados"
    }
  ];

  const stats = [
    { icon: Users, value: "150+", label: "Empresas confían en QSP" },
    { icon: Globe, value: "50+", label: "Países analizados" },
    { icon: TrendingUp, value: "95%", label: "Satisfacción del cliente" },
    { icon: Award, value: "5", label: "Años de experiencia" }
  ];

  return (
    <section id="exito" className="py-20">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="h2 mb-6 text-slate-100">
            Casos de éxito que{' '}
            <span className="text-primary">hablan por sí solos</span>
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            Empresas líderes ya están transformando su comercio exterior con QSP SpA. 
            Descubre sus resultados.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card p-8 hover:scale-105 transition-transform duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 p-2 bg-cyan-500/10 rounded-xl">
                  <Quote size={20} className="text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-slate-100 leading-relaxed mb-6 italic">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  
                  <div className="border-t border-[#1b2736] pt-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-slate-100">
                          {testimonial.author}
                        </div>
                        <div className="text-sm text-slate-400">
                          {testimonial.role}
                        </div>
                        <div className="text-sm text-primary font-medium">
                          {testimonial.company}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary">
                          {testimonial.metric}
                        </div>
                        <div className="text-xs text-slate-400">
                          {testimonial.metricLabel}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-slate-100 mb-4">
              Números que respaldan nuestro éxito
            </h3>
            <p className="text-slate-400">
              La confianza de nuestros clientes se refleja en estos resultados
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center p-4 bg-cyan-500/10 rounded-2xl mb-4">
                    <Icon size={24} className="text-primary" />
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
      </div>
    </section>
  );
}
