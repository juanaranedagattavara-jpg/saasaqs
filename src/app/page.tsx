import ShellLayout from '@/components/ShellLayout';
import Hero from '@/components/landing/Hero';

export default function Home() {
  return (
    <ShellLayout>
      <Hero />
      
      {/* Sección Problem */}
      <section className="py-20 bg-card/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
              ¿Tu empresa pierde oportunidades por{' '}
              <span className="text-yellow-500">datos desorganizados</span>?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Los exportadores enfrentan desafíos críticos que impactan su competitividad 
              y crecimiento en mercados internacionales.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="card p-8 hover:scale-105 transition-transform duration-300">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 bg-red-500/10 rounded-2xl">
                  <div className="w-6 h-6 bg-red-400 rounded"></div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    Datos dispersos y complejos
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Información aduanera en múltiples fuentes, formatos inconsistentes y difícil de interpretar.
                  </p>
                </div>
              </div>
            </div>

            <div className="card p-8 hover:scale-105 transition-transform duration-300">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 bg-red-500/10 rounded-2xl">
                  <div className="w-6 h-6 bg-red-400 rounded"></div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    Reportes manuales y lentos
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Procesos manuales que consumen horas de trabajo y generan retrasos en la toma de decisiones.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Solution */}
      <section id="solucion" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
              La solución que{' '}
              <span className="text-primary">transforma tu comercio exterior</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              QSP SpA convierte datos complejos en inteligencia accionable, 
              permitiendo decisiones estratégicas basadas en evidencia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="card p-8 hover:scale-105 transition-transform duration-300">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 bg-primary/10 rounded-2xl">
                  <div className="w-6 h-6 bg-primary rounded"></div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    Dashboards Inteligentes
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Visualizaciones claras y actualizadas en tiempo real de tus operaciones comerciales.
                  </p>
                </div>
              </div>
            </div>

            <div className="card p-8 hover:scale-105 transition-transform duration-300">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 bg-primary/10 rounded-2xl">
                  <div className="w-6 h-6 bg-primary rounded"></div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    Reportes Automáticos
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Generación automática de reportes personalizados para diferentes stakeholders.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary/5 to-yellow-500/5 rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Resultados comprobados
            </h3>
            <p className="text-muted-foreground mb-8">
              Nuestros clientes experimentan mejoras significativas desde el primer mes
            </p>
            <a 
              href="/dashboard" 
              className="btn btn-primary px-8 py-4 text-lg"
            >
              Ver Demo en Vivo
              <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Sección CTA Final */}
      <section id="cta" className="py-20 bg-gradient-to-br from-primary/10 via-background to-yellow-500/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-foreground">
              ¿Listo para{' '}
              <span className="text-primary">transformar tu comercio exterior</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Únete a más de 150 empresas que ya están tomando decisiones 
              más inteligentes con QSP SpA.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <a 
                href="/dashboard" 
                className="btn btn-primary px-8 py-4 text-lg"
              >
                Ver Demo en Vivo
                <span>→</span>
        </a>
        <a
                href="mailto:demo@qsp-spa.com" 
                className="btn btn-ghost px-8 py-4 text-lg"
              >
                Agendar Llamada
              </a>
            </div>

            <div className="panel p-8">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Nuestras Garantías
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground text-xs">✓</span>
                  </div>
                  <span className="text-foreground">Sin compromiso ni tarjeta de crédito</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground text-xs">✓</span>
                  </div>
                  <span className="text-foreground">Configuración personalizada incluida</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground text-xs">✓</span>
                  </div>
                  <span className="text-foreground">Soporte técnico 24/7</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground text-xs">✓</span>
                  </div>
                  <span className="text-foreground">Garantía de satisfacción 100%</span>
                </div>
              </div>
            </div>
          </div>
    </div>
      </section>
    </ShellLayout>
  );
}