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
    <section id="cta" className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main CTA */}
          <div className="mb-20">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 text-foreground leading-tight">
              Da tu salto cuántico hacia la{' '}
              <span className="text-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                ventaja competitiva
              </span>
            </h2>
            <p className="text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              Únete a más de 150 empresas que ya están tomando decisiones 
              más inteligentes con QSP SpA.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <a 
                href="/dashboard" 
                className="btn btn-primary px-12 py-6 text-xl font-semibold group hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/25"
              >
                Agenda tu demo ahora
                <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a 
                href="mailto:demo@qsp-spa.com" 
                className="btn btn-ghost px-12 py-6 text-xl font-semibold hover:scale-105 transition-all duration-300 border-2"
              >
                Agendar Llamada
              </a>
            </div>
          </div>

          {/* Offers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
            {offers.map((offer, index) => {
              const Icon = offer.icon;
              return (
                <div 
                  key={index}
                  className="card p-8 text-center hover:scale-105 transition-all duration-500 border border-border/50 hover:border-primary/30"
                >
                  <div className="inline-flex items-center justify-center p-5 bg-primary/10 rounded-3xl mb-6 border border-primary/20">
                    <Icon size={28} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {offer.title}
                  </h3>
                  <p className="text-base text-muted-foreground font-light">
                    {offer.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Guarantees */}
          <div className="bg-card/50 rounded-3xl p-10 mb-16 border border-border/30">
            <h3 className="text-2xl font-bold text-foreground mb-8">
              Nuestras Garantías
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {guarantees.map((guarantee, index) => (
                <div key={index} className="flex items-center gap-4">
                  <CheckCircle size={24} className="text-primary flex-shrink-0" />
                  <span className="text-foreground text-lg font-medium">{guarantee}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Urgency */}
          <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-3xl p-10 border border-accent/20">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Clock size={28} className="text-accent" />
              <span className="text-2xl font-bold text-foreground">
                Oferta Limitada
              </span>
            </div>
            <p className="text-muted-foreground mb-8 text-lg font-light max-w-2xl mx-auto">
              Los primeros 10 clientes de este mes reciben configuración personalizada 
              y consultoría estratégica sin costo adicional.
            </p>
            <div className="flex items-center justify-center gap-3 text-primary font-bold text-xl">
              <Zap size={24} />
              <span>¡Solo quedan 3 cupos disponibles!</span>
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-6 text-lg">
              ¿Tienes preguntas? Contáctanos directamente
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-base">
              <a 
                href="mailto:contacto@qsp-spa.com" 
                className="text-primary hover:text-accent transition-colors duration-300 font-semibold"
              >
                contacto@qsp-spa.com
              </a>
              <span className="hidden sm:block text-muted-foreground">•</span>
              <a 
                href="tel:+56912345678" 
                className="text-primary hover:text-accent transition-colors duration-300 font-semibold"
              >
                +56 9 1234 5678
              </a>
              <span className="hidden sm:block text-muted-foreground">•</span>
              <span className="text-muted-foreground font-medium">
                Lun - Vie: 9:00 - 18:00
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
