'use client';

import { 
  FileText, 
  Download,
  ArrowRight,
  Calendar,
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
    <section id="insights" className="py-20 bg-card/30">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="h2 mb-6 text-slate-100">
            Convierte incertidumbre en{' '}
            <span className="text-brand">oportunidad</span>
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            Nuestros insights te mantienen un paso adelante en el competitivo mundo del comercio exterior.
          </p>
        </div>

        {/* Lead Magnet */}
        <div className="bg-gradient-to-r from-brand/10 to-accent/10 rounded-2xl p-8 md:p-12 mb-16 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px] opacity-30" />
          
          <div className="relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-gradient-to-br from-brand/20 to-accent/20 rounded-2xl">
                    <FileText size={32} className="text-brand" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-100">
                      {leadMagnet.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-slate-400">
                      <Download size={16} />
                      <span>{leadMagnet.downloads} descargas</span>
                    </div>
                  </div>
                </div>

                <p className="text-slate-400 leading-relaxed mb-6 text-lg">
                  {leadMagnet.description}
                </p>

                <div className="space-y-3 mb-8">
                  {leadMagnet.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-brand rounded-full" />
                      <span className="text-slate-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <a 
                  href="#demo" 
                  className="btn btn-primary px-6 py-3 group"
                >
                  Descargar Gratis
                  <Download size={18} className="group-hover:translate-y-1 transition-transform duration-200" />
                </a>
              </div>

              {/* PDF Preview */}
              <div className="relative">
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-6 border border-slate-700/50">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full" />
                    <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                  </div>
                  
                  <div className="space-y-4">
                    <div className="h-4 bg-slate-700/50 rounded animate-pulse" />
                    <div className="h-4 bg-slate-700/50 rounded w-3/4 animate-pulse" />
                    <div className="h-48 bg-gradient-to-br from-brand/10 to-accent/10 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <FileText size={48} className="text-slate-400 mx-auto mb-2" />
                        <div className="text-slate-400 text-sm">
                          Informe de Tendencias 2024
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="h-12 bg-slate-700/30 rounded" />
                      <div className="h-12 bg-slate-700/30 rounded" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {articles.map((article, index) => {
            const Icon = article.icon;
            return (
              <div 
                key={index}
                className="card p-6 hover:scale-105 transition-all duration-300 group relative overflow-hidden"
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px] opacity-30" />
                
                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`p-3 bg-gradient-to-br ${article.color} rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                      <Icon size={20} className={article.iconColor} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-medium text-brand bg-brand/10 px-2 py-1 rounded-full">
                          {article.category}
                        </span>
                        <span className="text-xs text-slate-400">•</span>
                        <span className="text-xs text-slate-400">{article.readTime}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-slate-100 mb-3 group-hover:text-brand transition-colors duration-200">
                        {article.title}
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed mb-4">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-slate-500">{article.date}</span>
                        <ArrowRight size={16} className="text-slate-400 group-hover:text-brand group-hover:translate-x-1 transition-all duration-200" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center p-4 bg-cyan-500/10 rounded-2xl mb-4 group-hover:bg-cyan-500/20 transition-colors duration-300">
                  <Icon size={24} className="text-brand" />
                </div>
                <div className="text-2xl font-bold text-slate-100 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-400">
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
            className="btn btn-ghost px-8 py-4 text-lg group"
          >
            Lee nuestros insights
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
          </a>
        </div>
      </div>
    </section>
  );
}
