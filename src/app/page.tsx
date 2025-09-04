import ShellLayout from '@/components/ShellLayout';
import Hero from '@/components/landing/Hero';
import BenefitsDifferential from '@/components/landing/BenefitsDifferential';
import Ecosystem from '@/components/landing/Ecosystem';
import SuccessCases from '@/components/landing/SuccessCases';
import Testimonials from '@/components/landing/Testimonials';
import Insights from '@/components/landing/Insights';
import KPIs from '@/components/landing/KPIs';
import FinalCta from '@/components/landing/FinalCta';
import KpiCard from '@/components/dashboard/KpiCard';
import TrendChart from '@/components/dashboard/TrendChart';
import { mockDashboardData } from '@/lib/data';

export default function Home() {
  return (
    <ShellLayout>
      {/* 1. Hero */}
      <Hero />
      
      {/* 2. Beneficios diferenciales */}
      <BenefitsDifferential />
      
      {/* 3. Ecosistema de aplicaciones */}
      <Ecosystem />
      
      {/* 4. Casos de éxito sectoriales */}
      <SuccessCases />
      
      {/* 5. Testimonios / Cultura Relacional */}
      <Testimonials />
      
      {/* 6. Insights / Blog */}
      <Insights />
      
      {/* 7. Sección de KPIs / Señales */}
      <KPIs />
      
      {/* 8. CTA Final */}
      <FinalCta />
    </ShellLayout>
  );
}