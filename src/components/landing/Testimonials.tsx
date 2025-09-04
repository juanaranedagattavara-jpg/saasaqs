'use client';

import { 
  Quote, 
  Star,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Users,
  Heart,
  Handshake
} from 'lucide-react';
import { useState } from 'react';

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "QSP no es solo un proveedor, es nuestro aliado estratégico. Su equipo nos ha acompañado en cada decisión importante, transformando completamente nuestra operación de exportación.",
      author: "María González",
      role: "Directora de Comercio Exterior",
      company: "AgroExport Chile",
      avatar: "MG",
      rating: 5,
      impact: "+45%",
      impactLabel: "Crecimiento en exportaciones"
    },
    {
      quote: "La relación con QSP va más allá de la tecnología. Su consultoría estratégica nos ha ayudado a identificar oportunidades que nunca habríamos visto solos.",
      author: "Carlos Mendoza",
      role: "CEO",
      company: "Minera del Norte",
      avatar: "CM",
      rating: 5,
      impact: "3",
      impactLabel: "Nuevos mercados abiertos"
    },
    {
      quote: "El soporte continuo y la personalización de sus herramientas han sido clave para nuestro éxito. QSP entiende las necesidades específicas de nuestro sector.",
      author: "Ana Rodríguez",
      role: "Gerente de Operaciones",
      company: "TechExport Solutions",
      avatar: "AR",
      rating: 5,
      impact: "20h",
      impactLabel: "Ahorro semanal"
    },
    {
      quote: "La confianza y transparencia de QSP nos ha permitido tomar decisiones más audaces. Su plataforma es solo el inicio de una relación de largo plazo.",
      author: "Roberto Silva",
      role: "Director Comercial",
      company: "Forestal del Sur",
      avatar: "RS",
      rating: 5,
      impact: "+60%",
      impactLabel: "Eficiencia operativa"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const values = [
    {
      icon: Heart,
      title: "Compromiso genuino",
      description: "Nos preocupamos por el éxito de tu negocio como si fuera el nuestro."
    },
    {
      icon: Handshake,
      title: "Acompañamiento continuo",
      description: "Estamos contigo en cada paso de tu crecimiento exportador."
    },
    {
      icon: Users,
      title: "Equipo dedicado",
      description: "Asignamos especialistas que conocen tu industria y desafíos."
    }
  ];

  return (
    <section id="testimonios" className="py-20">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="h2 mb-6 text-slate-100">
            Más que proveedores, somos{' '}
            <span className="text-brand">aliados estratégicos</span>
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            La confianza de nuestros clientes se construye día a día con resultados tangibles y relaciones duraderas.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-5xl mx-auto mb-16">
          {/* Navigation */}
          <div className="flex justify-between items-center mb-8">
            <button
              onClick={prevTestimonial}
              className="p-3 bg-slate-800/50 hover:bg-slate-700/50 rounded-full transition-colors duration-200"
            >
              <ChevronLeft size={24} className="text-slate-400" />
            </button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentTestimonial 
                      ? 'bg-brand scale-125' 
                      : 'bg-slate-600 hover:bg-slate-500'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-3 bg-slate-800/50 hover:bg-slate-700/50 rounded-full transition-colors duration-200"
            >
              <ChevronRight size={24} className="text-slate-400" />
            </button>
          </div>

          {/* Testimonial Display */}
          <div className="card p-8 md:p-12 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px] opacity-30" />
            
            <div className="relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                {/* Quote */}
                <div className="lg:col-span-2">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-brand/10 rounded-2xl">
                      <Quote size={24} className="text-brand" />
                    </div>
                    <div className="flex gap-1">
                      {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                        <Star key={i} size={20} className="text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>

                  <blockquote className="text-xl text-slate-100 leading-relaxed mb-8 italic">
                    "{testimonials[currentTestimonial].quote}"
                  </blockquote>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-slate-100 text-lg">
                        {testimonials[currentTestimonial].author}
                      </div>
                      <div className="text-slate-400">
                        {testimonials[currentTestimonial].role}
                      </div>
                      <div className="text-brand font-medium">
                        {testimonials[currentTestimonial].company}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-brand">
                        {testimonials[currentTestimonial].impact}
                      </div>
                      <div className="text-sm text-slate-400">
                        {testimonials[currentTestimonial].impactLabel}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Avatar and Impact */}
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-brand to-accent rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                    {testimonials[currentTestimonial].avatar}
                  </div>
                  <div className="p-4 bg-slate-800/50 rounded-xl">
                    <div className="text-3xl font-bold text-brand mb-1">
                      {testimonials[currentTestimonial].impact}
                    </div>
                    <div className="text-sm text-slate-400">
                      {testimonials[currentTestimonial].impactLabel}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div 
                key={index}
                className="card p-6 text-center hover:scale-105 transition-all duration-300 group"
              >
                <div className="inline-flex items-center justify-center p-4 bg-cyan-500/10 rounded-2xl mb-4 group-hover:bg-cyan-500/20 transition-colors duration-300">
                  <Icon size={24} className="text-brand" />
                </div>
                <h3 className="text-lg font-semibold text-slate-100 mb-3">
                  {value.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a 
            href="#insights" 
            className="btn btn-primary px-8 py-4 text-lg group"
          >
            Hablemos de tu desafío
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
          </a>
        </div>
      </div>
    </section>
  );
}
