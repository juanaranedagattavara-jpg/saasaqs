'use client';

import { 
  Award, 
  Shield, 
  Users, 
  Globe, 
  CheckCircle, 
  Star,
  Building2,
  TrendingUp
} from 'lucide-react';

export default function Authority() {
  const credentials = [
    {
      icon: Award,
      title: "Certificaciones ISO",
      description: "Cumplimos con los más altos estándares de calidad y seguridad de datos."
    },
    {
      icon: Shield,
      title: "Seguridad Enterprise",
      description: "Infraestructura robusta con encriptación de extremo a extremo."
    },
    {
      icon: Users,
      title: "Equipo Experto",
      description: "15+ años de experiencia combinada en comercio exterior y tecnología."
    },
    {
      icon: Globe,
      title: "Cobertura Global",
      description: "Datos de 50+ países con actualizaciones en tiempo real."
    }
  ];

  const certifications = [
    "ISO 27001 - Seguridad de la Información",
    "ISO 9001 - Gestión de Calidad",
    "SOC 2 Type II - Controles de Seguridad",
    "GDPR Compliant - Protección de Datos"
  ];

  const team = [
    {
      name: "Dr. Roberto Silva",
      role: "CEO & Fundador",
      expertise: "15 años en comercio exterior",
      achievement: "Ex-Director Aduanas Chile"
    },
    {
      name: "Ing. Patricia López",
      role: "CTO",
      expertise: "12 años en big data",
      achievement: "Ex-Google, Microsoft"
    },
    {
      name: "Lic. Miguel Torres",
      role: "Director Comercial",
      expertise: "10 años en exportaciones",
      achievement: "Ex-ProChile, CORFO"
    }
  ];

  return (
    <section className="py-20 bg-card/50">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="h2 mb-6 text-slate-100">
            La confianza de{' '}
            <span className="text-accent">líderes reconocidos</span>
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            QSP SpA cuenta con el respaldo de instituciones, certificaciones 
            y un equipo de expertos reconocidos en la industria.
          </p>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {credentials.map((credential, index) => {
            const Icon = credential.icon;
            return (
              <div 
                key={index}
                className="card p-6 text-center hover:scale-105 transition-transform duration-300 group"
              >
                <div className="inline-flex items-center justify-center p-4 bg-cyan-500/10 rounded-2xl mb-4 group-hover:bg-cyan-500/20 transition-colors duration-300">
                  <Icon size={24} className="text-brand" />
                </div>
                <h3 className="text-lg font-semibold text-slate-100 mb-3">
                  {credential.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {credential.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Certifications */}
        <div className="bg-gradient-to-r from-brand/5 to-accent/5 rounded-2xl p-8 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-slate-100 mb-4">
              Certificaciones y Cumplimiento
            </h3>
            <p className="text-slate-400">
              Nuestro compromiso con la excelencia y la seguridad
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle size={20} className="text-brand flex-shrink-0" />
                <span className="text-slate-100 font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-slate-100 mb-4">
            Nuestro Equipo de Expertos
          </h3>
          <p className="text-slate-400">
            Líderes reconocidos en comercio exterior y tecnología
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <div key={index} className="card p-6 text-center hover:scale-105 transition-transform duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-brand to-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                <Building2 size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-semibold text-slate-100 mb-2">
                {member.name}
              </h4>
              <div className="text-brand font-medium mb-2">
                {member.role}
              </div>
              <div className="text-sm text-slate-400 mb-3">
                {member.expertise}
              </div>
              <div className="text-xs text-accent font-medium">
                {member.achievement}
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-6 bg-card px-8 py-4 rounded-2xl">
            <div className="flex items-center gap-2">
              <Star size={20} className="text-accent" />
              <span className="text-slate-100 font-semibold">4.9/5</span>
            </div>
            <div className="w-px h-6 bg-[#1b2736]" />
            <div className="flex items-center gap-2">
              <TrendingUp size={20} className="text-brand" />
              <span className="text-slate-100 font-semibold">150+ Clientes</span>
            </div>
            <div className="w-px h-6 bg-[#1b2736]" />
            <div className="flex items-center gap-2">
              <Award size={20} className="text-accent" />
              <span className="text-slate-100 font-semibold">5 Años</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
