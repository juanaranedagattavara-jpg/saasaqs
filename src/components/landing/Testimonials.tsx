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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground leading-tight">
            Más que proveedores, somos{' '}
            <span className="text-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              aliados estratégicos
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed font-light max-w-2xl mx-auto">
            La confianza de nuestros clientes se construye día a día con resultados tangibles 
            y relaciones duraderas que trascienden la tecnología.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-6xl mx-auto mb-20">
          {/* Navigation */}
          <div className="flex justify-between items-center mb-12">
            <button
              onClick={prevTestimonial}
              className="p-4 bg-card/50 hover:bg-card/70 rounded-full transition-all duration-300 border border-border/30 hover:border-primary/30 group"
            >
              <ChevronLeft size={28} className="text-muted-foreground group-hover:text-primary transition-colors duration-300" />
            </button>
            
            <div className="flex gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === currentTestimonial 
                      ? 'bg-primary scale-125 shadow-lg shadow-primary/25' 
                      : 'bg-muted hover:bg-muted-foreground/50'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-4 bg-card/50 hover:bg-card/70 rounded-full transition-all duration-300 border border-border/30 hover:border-primary/30 group"
            >
              <ChevronRight size={28} className="text-muted-foreground group-hover:text-primary transition-colors duration-300" />
            </button>
          </div>

          {/* Testimonial Display */}
          <div className="card p-12 md:p-16 relative overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-500">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px] opacity-30" />
            
            <div className="relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
                {/* Quote */}
                <div className="lg:col-span-2">
                  <div className="flex items-start gap-6 mb-8">
                    <div className="p-4 bg-primary/10 rounded-3xl border border-primary/20">
                      <Quote size={28} className="text-primary" />
                    </div>
                    <div className="flex gap-1">
                      {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                        <Star key={i} size={24} className="text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>

                  <blockquote className="text-2xl text-foreground leading-relaxed mb-10 italic font-light">
                    &ldquo;{testimonials[currentTestimonial].quote}&rdquo;
                  </blockquote>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-bold text-foreground text-xl mb-1">
                        {testimonials[currentTestimonial].author}
                      </div>
                      <div className="text-muted-foreground text-lg mb-1">
                        {testimonials[currentTestimonial].role}
                      </div>
                      <div className="text-primary font-semibold text-lg">
                        {testimonials[currentTestimonial].company}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-primary mb-1">
                        {testimonials[currentTestimonial].impact}
                      </div>
                      <div className="text-base text-muted-foreground font-medium">
                        {testimonials[currentTestimonial].impactLabel}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Avatar and Impact */}
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-6 flex items-center justify-center text-white text-3xl font-bold border-4 border-primary/20">
                    {testimonials[currentTestimonial].avatar}
                  </div>
                  <div className="p-6 bg-card/50 rounded-2xl border border-border/30">
                    <div className="text-4xl font-bold text-primary mb-2">
                      {testimonials[currentTestimonial].impact}
                    </div>
                    <div className="text-base text-muted-foreground font-medium">
                      {testimonials[currentTestimonial].impactLabel}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div 
                key={index}
                className="card p-8 text-center hover:scale-105 transition-all duration-500 group border border-border/50 hover:border-primary/30"
              >
                <div className="inline-flex items-center justify-center p-5 bg-primary/10 rounded-3xl mb-6 group-hover:bg-primary/20 transition-colors duration-300 border border-primary/20">
                  <Icon size={28} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-base leading-relaxed font-light">
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
            className="btn btn-primary px-10 py-5 text-xl font-semibold group hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/25"
          >
            Hablemos de tu desafío
            <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
}
