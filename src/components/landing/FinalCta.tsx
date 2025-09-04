'use client';

import { 
  ArrowRight, 
  CheckCircle, 
  Clock, 
  Users, 
  Zap,
  Calendar,
  Gift
} from 'lucide-react';

export default function FinalCta() {
  const offers = [
    {
      icon: Calendar,
      title: "Demo Personalizado",
      description: "30 minutos con nuestro equipo de expertos"
    },
    {
      icon: Gift,
      title: "Prueba Gratuita",
      description: "14 días sin compromiso ni tarjeta de crédito"
    },
    {
      icon: Users,
      title: "Consultoría Incluida",
      description: "Sesión de estrategia con analista senior"
    }
  ];

  const guarantees = [
    "Sin compromiso ni tarjeta de crédito",
    "Configuración personalizada incluida",
    "Soporte técnico 24/7",
    "Garantía de satisfacción 100%"
  ];

  return (
    <section id="cta" className="py-20 bg-gradient-to-br from-brand/10 via-bg to-accent/10">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main CTA */}
          <div className="mb-16">
            <h2 className="h1 mb-6 text-slate-100">
              ¿Listo para{' '}
              <span className="text-brand">transformar tu comercio exterior</span>?
            </h2>
            <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
              Únete a más de 150 empresas que ya están tomando decisiones 
              más inteligentes con QSP SpA.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <a 
                href="/dashboard" 
                className="btn btn-primary px-8 py-4 text-lg group"
              >
                Ver Demo en Vivo
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
              </a>
              <a 
                href="mailto:demo@qsp-spa.com" 
                className="btn btn-ghost px-8 py-4 text-lg"
              >
                Agendar Llamada
              </a>
            </div>
          </div>

          {/* Offers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {offers.map((offer, index) => {
              const Icon = offer.icon;
              return (
                <div 
                  key={index}
                  className="card p-6 text-center hover:scale-105 transition-transform duration-300"
                >
                  <div className="inline-flex items-center justify-center p-3 bg-cyan-500/10 rounded-2xl mb-4">
                    <Icon size={24} className="text-brand" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-100 mb-2">
                    {offer.title}
                  </h3>
                  <p className="text-sm text-slate-400">
                    {offer.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Guarantees */}
          <div className="bg-card/50 rounded-2xl p-8 mb-12">
            <h3 className="text-xl font-semibold text-slate-100 mb-6">
              Nuestras Garantías
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
              {guarantees.map((guarantee, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-brand flex-shrink-0" />
                  <span className="text-slate-100">{guarantee}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Urgency */}
          <div className="bg-gradient-to-r from-accent/10 to-brand/10 rounded-2xl p-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Clock size={24} className="text-accent" />
              <span className="text-lg font-semibold text-slate-100">
                Oferta Limitada
              </span>
            </div>
            <p className="text-slate-400 mb-6">
              Los primeros 10 clientes de este mes reciben configuración personalizada 
              y consultoría estratégica sin costo adicional.
            </p>
            <div className="flex items-center justify-center gap-2 text-brand font-semibold">
              <Zap size={20} />
              <span>¡Solo quedan 3 cupos disponibles!</span>
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-12 text-center">
            <p className="text-slate-400 mb-4">
              ¿Tienes preguntas? Contáctanos directamente
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm">
              <a 
                href="mailto:contacto@qsp-spa.com" 
                className="text-brand hover:text-accent transition-colors duration-200"
              >
                contacto@qsp-spa.com
              </a>
              <span className="hidden sm:block text-slate-400">•</span>
              <a 
                href="tel:+56912345678" 
                className="text-brand hover:text-accent transition-colors duration-200"
              >
                +56 9 1234 5678
              </a>
              <span className="hidden sm:block text-slate-400">•</span>
              <span className="text-slate-400">
                Lun - Vie: 9:00 - 18:00
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
