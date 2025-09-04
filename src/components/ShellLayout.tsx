'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Home, BarChart3, FileText, Mail, Phone } from 'lucide-react';
import { cn, a11y, layout } from '@/lib/utils';

interface ShellLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export default function ShellLayout({ children, className }: ShellLayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Inicio', href: '/', icon: Home },
    { name: 'Dashboard', href: '/dashboard', icon: BarChart3 },
    { name: 'Reportes', href: '/reportes', icon: FileText },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Skip Link for Accessibility */}
      <a href="#main-content" className={a11y.skipLink}>
        Saltar al contenido principal
      </a>

      {/* Header */}
      <header 
        role="banner" 
        className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-[#1b2736]"
      >
        <div className={layout.container}>
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link 
              href="/" 
              className="flex items-center gap-3 group"
              aria-label="QSP SpA - Ir al inicio"
            >
              <div className="w-8 h-8 rounded-xl bg-primary flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                <span className="text-primary-foreground font-bold text-sm">Q</span>
              </div>
              <span className="text-xl font-bold text-foreground">QSP SpA</span>
            </Link>

            {/* Desktop Navigation */}
            <nav aria-label="Navegación principal" className="hidden md:flex items-center gap-6">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-md px-2 py-1"
                  >
                    <Icon size={16} />
                    {item.name}
                  </Link>
                );
              })}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-foreground hover:text-primary transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-md"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Abrir menú de navegación"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav 
              id="mobile-menu"
              className="md:hidden border-t border-[#1b2736] py-4"
              aria-label="Navegación móvil"
            >
              <div className="space-y-2">
                {navigation.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="flex items-center gap-3 text-foreground hover:text-primary hover:bg-card/50 transition-colors duration-200 rounded-md px-3 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Icon size={18} />
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main 
        id="main-content" 
        role="main" 
        className={cn("", className)}
      >
        {children}
      </main>

      {/* Footer */}
      <footer 
        role="contentinfo" 
        className="bg-card border-t border-[#1b2736] mt-auto"
      >
        <div className={layout.container}>
          <div className="py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Company Info */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-primary flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-sm">Q</span>
                  </div>
                  <span className="text-xl font-bold text-foreground">QSP SpA</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Transformamos datos de comercio exterior en inteligencia estratégica. 
                  Dashboards claros, reportes automáticos y consultoría experta.
                </p>
              </div>

              {/* Quick Links */}
              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-foreground">Enlaces Rápidos</h3>
                <nav aria-label="Enlaces del pie de página">
                  <ul className="space-y-2">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <Link 
                          href={item.href}
                          className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>

              {/* Contact */}
              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-foreground">Contacto</h3>
                <div className="space-y-2">
                  <a 
                    href="mailto:contacto@qsp-spa.com"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
                  >
                    <Mail size={14} />
                    contacto@qsp-spa.com
                  </a>
                  <a 
                    href="tel:+56912345678"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
                  >
                    <Phone size={14} />
                    +56 9 1234 5678
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-[#1b2736] mt-8 pt-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-sm text-muted-foreground">
                  © 2024 QSP SpA. Todos los derechos reservados.
                </p>
                <div className="flex items-center gap-6 text-sm">
                  <a 
                    href="/privacy"
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
                  >
                    Privacidad
                  </a>
                  <a 
                    href="/terms"
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
                  >
                    Términos
                  </a>
                  <a 
                    href="/security"
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
                  >
                    Seguridad
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
