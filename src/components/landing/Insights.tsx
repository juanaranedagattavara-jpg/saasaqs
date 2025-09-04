'use client';

import { 
  FileText, 
  Download,
  ArrowRight,
  TrendingUp,
  Globe,
  BarChart3,
  Users,
  Clock
} from 'lucide-react';

export default function Insights() {
  const articles = [
    {
      title: "Tendencias de Exportación 2024: Oportunidades en Mercados Emergentes",
      excerpt: "Análisis profundo de los mercados con mayor potencial para exportadores chilenos este año.",
      category: "Tendencias",
      readTime: "8 min",
      date: "15 Ene 2024",
      icon: TrendingUp,
      color: "from-blue-500/20 to-cyan-500/20",
      iconColor: "text-blue-400"
    },
    {
      title: "Cómo la IA Está Revolucionando el Comercio Exterior",
      excerpt: "Descubre las tecnologías que están transformando la forma de hacer negocios internacionales.",
      category: "Tecnología",
      readTime: "12 min",
      date: "10 Ene 2024",
      icon: BarChart3,
      color: "from-purple-500/20 to-pink-500/20",
      iconColor: "text-purple-400"
    },
    {
      title: "Estrategias de Pricing para Mercados Internacionales",
      excerpt: "Guía completa para establecer precios competitivos en diferentes mercados globales.",
      category: "Estrategia",
      readTime: "15 min",
      date: "5 Ene 2024",
      icon: Globe,
      color: "from-green-500/20 to-emerald-500/20",
      iconColor: "text-green-400"
    },
    {
      title: "Casos de Éxito: Exportadores que Triplicaron sus Ventas",
      excerpt: "Historias reales de empresas que lograron crecimiento exponencial con datos inteligentes.",
      category: "Casos de Éxito",
      readTime: "10 min",
      date: "2 Ene 2024",
      icon: Users,
      color: "from-orange-500/20 to-yellow-500/20",
      iconColor: "text-orange-400"
    }
  ];

  const leadMagnet = {
    title: "Informe de Tendencias Gratuito",
    description: "Descarga nuestro análisis completo de tendencias de comercio exterior 2024",
    features: [
      "Análisis de 25+ mercados",
      "Predicciones para 12 meses",
      "Oportunidades por sector",
      "Estrategias de entrada"
    ],
    downloads: "2,500+",
    icon: FileText
  };

  const stats = [
    { icon: Users, value: "5,000+", label: "Lectores mensuales" },
    { icon: Globe, value: "25+", label: "Países de audiencia" },
    { icon: TrendingUp, value: "95%", label: "Satisfacción del contenido" },
    { icon: Clock, value: "2x", label: "Actualizaciones semanales" }
  ];

  return (
    <section id="insights" className="py-20 bg-card/20">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground leading-tight">
            Convierte incertidumbre en{' '}
            <span className="text-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              oportunidad
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed font-light max-w-2xl mx-auto">
            Nuestros insights te mantienen un paso adelante en el competitivo mundo del comercio exterior, 
            transformando información en ventaja estratégica.
          </p>
        </div>

        {/* Lead Magnet */}
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-12 md:p-16 mb-20 relative overflow-hidden border border-primary/10">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px] opacity-30" />
          
          <div className="relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-6 mb-8">
                  <div className="p-5 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl border border-primary/20">
                    <FileText size={40} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-foreground mb-2">
                      {leadMagnet.title}
                    </h3>
                    <div className="flex items-center gap-3 text-base text-muted-foreground">
                      <Download size={20} />
                      <span>{leadMagnet.downloads} descargas</span>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-8 text-xl font-light">
                  {leadMagnet.description}
                </p>

                <div className="space-y-4 mb-10">
                  {leadMagnet.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-3 h-3 bg-primary rounded-full" />
                      <span className="text-foreground text-lg">{feature}</span>
                    </div>
                  ))}
                </div>

                <a 
                  href="#demo" 
                  className="btn btn-primary px-8 py-4 text-lg font-semibold group hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/25"
                >
                  Descargar Gratis
                  <Download size={20} className="group-hover:translate-y-1 transition-transform duration-300" />
                </a>
              </div>

              {/* PDF Preview */}
              <div className="relative">
                <div className="bg-gradient-to-br from-card/50 to-card/30 rounded-3xl p-8 border border-border/30 shadow-2xl">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-4 h-4 bg-red-500 rounded-full" />
                    <div className="w-4 h-4 bg-yellow-500 rounded-full" />
                    <div className="w-4 h-4 bg-green-500 rounded-full" />
                  </div>
                  
                  <div className="space-y-6">
                    <div className="h-5 bg-muted/50 rounded animate-pulse" />
                    <div className="h-5 bg-muted/50 rounded w-3/4 animate-pulse" />
                    <div className="h-56 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center border border-primary/20">
                      <div className="text-center">
                        <FileText size={56} className="text-muted-foreground mx-auto mb-3" />
                        <div className="text-muted-foreground text-lg font-medium">
                          Informe de Tendencias 2024
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="h-16 bg-muted/30 rounded-xl" />
                      <div className="h-16 bg-muted/30 rounded-xl" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
          {articles.map((article, index) => {
            const Icon = article.icon;
            return (
              <div 
                key={index}
                className="card p-8 hover:scale-105 transition-all duration-500 group relative overflow-hidden border border-border/50 hover:border-primary/30"
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px] opacity-30" />
                
                <div className="relative z-10">
                  <div className="flex items-start gap-6 mb-6">
                    <div className={`p-4 bg-gradient-to-br ${article.color} rounded-2xl group-hover:scale-110 transition-transform duration-500 border border-primary/20`}>
                      <Icon size={24} className={article.iconColor} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                          {article.category}
                        </span>
                        <span className="text-sm text-muted-foreground">•</span>
                        <span className="text-sm text-muted-foreground">{article.readTime}</span>
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                        {article.title}
                      </h3>
                      <p className="text-muted-foreground text-base leading-relaxed mb-6 font-light">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">{article.date}</span>
                        <ArrowRight size={20} className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center group hover:scale-105 transition-all duration-300">
                <div className="inline-flex items-center justify-center p-5 bg-primary/10 rounded-3xl mb-6 group-hover:bg-primary/20 transition-colors duration-300 border border-primary/20">
                  <Icon size={28} className="text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-3">
                  {stat.value}
                </div>
                <div className="text-base text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a 
            href="#kpis" 
            className="btn btn-ghost px-10 py-5 text-xl font-semibold group hover:scale-105 transition-all duration-300 border-2"
          >
            Lee nuestros insights
            <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
}
