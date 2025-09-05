'use client';

import ShellLayout from '@/components/layout/ShellLayout';
import PricingSection from '@/components/landing/PricingSection';

export default function PlanesPage() {
  return (
    <ShellLayout>
        <div className="min-h-screen bg-background">
          <PricingSection />
        </div>
      </ShellLayout>
  );
}