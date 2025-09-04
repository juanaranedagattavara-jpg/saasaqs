'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { plansData, formatPrice, getPriceLabel, getDiscountPercentage } from '@/lib/pricing';

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);
  const [currency, setCurrency] = useState<'CLP_k' | 'UF'>('CLP_k');

  const billing = isYearly ? 'yearly' : 'monthly';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const getCardStyles = (color: string, isPremium: boolean) => {
    const baseStyles = "relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1";
    
    if (isPremium) {
      return `${baseStyles} border-2 border-green-500/20 bg-gradient-to-br from-green-50/5 to-green-100/5 shadow-green-500/10`;
    }
    
    switch (color) {
      case 'blue':
        return `${baseStyles} border-blue-500/20 bg-gradient-to-br from-blue-50/5 to-blue-100/5 shadow-blue-500/10`;
      case 'green':
        return `${baseStyles} border-green-500/20 bg-gradient-to-br from-green-50/5 to-green-100/5 shadow-green-500/10`;
      default:
        return `${baseStyles} border-gray-500/20 bg-gradient-to-br from-gray-50/5 to-gray-100/5 shadow-gray-500/10`;
    }
  };

  const getButtonStyles = (color: string, isPremium: boolean) => {
    if (isPremium) {
      return "bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-lg shadow-green-500/25";
    }
    
    switch (color) {
      case 'blue':
        return "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg shadow-blue-500/25";
      case 'green':
        return "bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-lg shadow-green-500/25";
      default:
        return "bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white shadow-lg shadow-gray-500/25";
    }
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
            Planes y Contenidos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Elige el nivel que necesitas. Todos los planes incluyen los análisis del nivel anterior.
          </p>
        </motion.div>

        {/* Toggles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
          role="group"
          aria-label="Opciones de facturación y moneda"
        >
          {/* Billing Toggle */}
          <div className="flex items-center gap-4">
            <span className={`text-sm font-medium transition-colors ${!isYearly ? 'text-foreground' : 'text-muted-foreground'}`}>
              Mensual
            </span>
            <Switch
              checked={isYearly}
              onCheckedChange={setIsYearly}
              aria-label="Cambiar entre facturación mensual y anual"
              className="data-[state=checked]:bg-primary"
            />
            <span className={`text-sm font-medium transition-colors ${isYearly ? 'text-foreground' : 'text-muted-foreground'}`}>
              Anual
            </span>
            {isYearly && (
              <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200">
                -{getDiscountPercentage(plansData[0].pricing.monthly.CLP_k, plansData[0].pricing.yearly.CLP_k)}% descuento
              </Badge>
            )}
          </div>

          {/* Currency Toggle */}
          <div className="flex items-center gap-4">
            <span className={`text-sm font-medium transition-colors ${currency === 'CLP_k' ? 'text-foreground' : 'text-muted-foreground'}`}>
              M$
            </span>
            <Switch
              checked={currency === 'UF'}
              onCheckedChange={(checked) => setCurrency(checked ? 'UF' : 'CLP_k')}
              aria-label="Cambiar entre moneda en miles de pesos chilenos y UF"
              className="data-[state=checked]:bg-primary"
            />
            <span className={`text-sm font-medium transition-colors ${currency === 'UF' ? 'text-foreground' : 'text-muted-foreground'}`}>
              UF
            </span>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {plansData.map((plan, index) => {
            const isPremium = plan.id === 'premium';
            const price = plan.pricing[billing][currency];
            const priceLabel = getPriceLabel(currency, billing);
            
            return (
              <motion.div
                key={plan.id}
                variants={cardVariants}
                className={`${isPremium ? 'lg:scale-105' : ''}`}
              >
                <Card className={getCardStyles(plan.color, isPremium)}>
                  {isPremium && (
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-green-600" />
                  )}
                  
                  <CardHeader className="text-center pb-6">
                    <div className="flex items-center justify-center mb-4">
                      {isPremium && (
                        <Badge className="bg-green-100 text-green-800 border-green-200 mb-2">
                          Más Popular
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-2xl font-bold text-foreground mb-2">
                      {plan.name}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground text-base">
                      {plan.description}
                    </CardDescription>
                    
                    <div className="mt-6">
                      <div className="flex items-baseline justify-center">
                        <span className="text-5xl font-bold text-foreground">
                          {formatPrice(price, currency, billing)}
                        </span>
                        <span className="text-sm text-muted-foreground ml-2">
                          /{priceLabel}
                        </span>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    {/* Includes Badge */}
                    {plan.includes && (
                      <div className="text-center">
                        <Badge variant="outline" className="bg-muted/50 text-muted-foreground border-muted-foreground/20">
                          {plan.includes}
                        </Badge>
                      </div>
                    )}

                    {/* Analyses List */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground text-sm uppercase tracking-wide">
                        Análisis Incluidos
                      </h4>
                      <ul className="space-y-2" role="list">
                        {plan.analyses.map((analysis, analysisIndex) => (
                          <li key={analysisIndex} className="flex items-start gap-3">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{analysis}</span>
                          </li>
                        ))}
                        {plan.additionalAnalyses?.map((analysis, analysisIndex) => (
                          <li key={`additional-${analysisIndex}`} className="flex items-start gap-3">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-foreground font-medium">{analysis}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA Button */}
                    <Button 
                      className={`w-full h-12 text-base font-semibold transition-all duration-300 hover:scale-105 ${getButtonStyles(plan.color, isPremium)}`}
                    >
                      Solicitar Demo
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 mb-8"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Confiado por empresas líderes
            </h3>
            <p className="text-muted-foreground">
              Más de 500+ empresas ya transforman sus datos con QSP
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Empresas activas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Satisfacción del cliente</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Soporte técnico</div>
            </div>
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground text-lg mb-4">
            ¿Necesitas un plan personalizado?
          </p>
          <Button variant="outline" size="lg" className="border-primary/20 hover:bg-primary/5">
            Contactar Ventas
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
