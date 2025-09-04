'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header role="banner" className="py-4 sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-[#1b2736]">
      <div className="container flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 no-underline group">
          <div 
            className="inline-block w-8 h-8 rounded-xl bg-primary flex items-center justify-center group-hover:scale-105 transition-transform duration-200"
            aria-label="Logo QSP SpA"
          >
            <span className="text-primary-foreground font-bold text-sm">Q</span>
          </div>
          <strong className="text-foreground text-xl">QSP SpA</strong>
        </a>
        
        {/* Desktop Navigation */}
        <nav aria-label="principal" className="hidden md:flex gap-6 text-sm">
          <a href="#solucion" className="text-foreground hover:text-primary transition-colors duration-200">
            Solución
          </a>
          <a href="#beneficios" className="text-foreground hover:text-primary transition-colors duration-200">
            Beneficios
          </a>
          <a href="#exito" className="text-foreground hover:text-primary transition-colors duration-200">
            Casos
          </a>
          <a href="#cta" className="btn btn-primary">
            Demo Gratis
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground hover:text-primary transition-colors duration-200"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Abrir menú de navegación"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav 
          className="md:hidden absolute top-full left-0 right-0 bg-card border-b border-border shadow-lg"
          aria-label="navegación móvil"
        >
          <div className="container py-4 space-y-4">
            <a 
              href="#solucion" 
              className="block text-foreground hover:text-primary transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Solución
            </a>
            <a 
              href="#beneficios" 
              className="block text-foreground hover:text-primary transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Beneficios
            </a>
            <a 
              href="#exito" 
              className="block text-foreground hover:text-primary transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Casos
            </a>
            <a 
              href="#cta" 
              className="btn btn-primary w-full justify-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Demo Gratis
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
