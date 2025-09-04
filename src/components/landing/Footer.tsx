'use client';

import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Github,
  ArrowUp
} from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    producto: [
      { name: 'Dashboards', href: '/dashboard' },
      { name: 'Reportes', href: '/reportes' },
      { name: 'APIs', href: '/api' },
      { name: 'Integraciones', href: '/integrations' }
    ],
    empresa: [
      { name: 'Sobre Nosotros', href: '/about' },
      { name: 'Equipo', href: '/team' },
      { name: 'Carreras', href: '/careers' },
      { name: 'Prensa', href: '/press' }
    ],
    recursos: [
      { name: 'Documentación', href: '/docs' },
      { name: 'Blog', href: '/blog' },
      { name: 'Casos de Uso', href: '/cases' },
      { name: 'Soporte', href: '/support' }
    ],
    legal: [
      { name: 'Privacidad', href: '/privacy' },
      { name: 'Términos', href: '/terms' },
      { name: 'Cookies', href: '/cookies' },
      { name: 'Seguridad', href: '/security' }
    ]
  };

  return (
    <footer className="bg-card border-t border-[#1b2736]">
      <div className="container py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-xl bg-cyan-500 flex items-center justify-center">
                <span className="text-[#041014] font-bold text-sm">Q</span>
              </div>
              <strong className="text-slate-100 text-xl">QSP SpA</strong>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Transformamos datos de comercio exterior en inteligencia estratégica. 
              Dashboards claros, reportes automáticos y consultoría experta para 
              empresas exportadoras.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-slate-400">
                <Mail size={16} className="text-primary" />
                <a 
                  href="mailto:contacto@qsp-spa.com" 
                  className="hover:text-cyan-500 transition-colors duration-200"
                >
                  contacto@qsp-spa.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-400">
                <Phone size={16} className="text-primary" />
                <a 
                  href="tel:+56912345678" 
                  className="hover:text-cyan-500 transition-colors duration-200"
                >
                  +56 9 1234 5678
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-400">
                <MapPin size={16} className="text-primary" />
                <span>Santiago, Chile</span>
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-slate-100 font-semibold mb-4">Producto</h3>
            <ul className="space-y-3">
              {footerLinks.producto.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-sm text-slate-400 hover:text-cyan-500 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-slate-100 font-semibold mb-4">Empresa</h3>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-sm text-slate-400 hover:text-cyan-500 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-slate-100 font-semibold mb-4">Recursos</h3>
            <ul className="space-y-3">
              {footerLinks.recursos.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-sm text-slate-400 hover:text-cyan-500 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-[#1b2736] pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <div className="text-sm text-slate-400">
              © 2024 QSP SpA. Todos los derechos reservados.
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a 
                href="https://linkedin.com/company/qsp-spa" 
                className="p-2 text-slate-400 hover:text-cyan-500 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://twitter.com/qsp_spa" 
                className="p-2 text-slate-400 hover:text-cyan-500 transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="https://github.com/qsp-spa" 
                className="p-2 text-slate-400 hover:text-cyan-500 transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-6 text-sm">
              {footerLinks.legal.map((link, index) => (
                <a 
                  key={index}
                  href={link.href} 
                  className="text-slate-400 hover:text-cyan-500 transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-3 bg-cyan-500 text-black rounded-full shadow-lg hover:scale-110 transition-all duration-200 z-50"
        aria-label="Volver arriba"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
}
