import type { Metadata } from "next";
import PricingSection from "@/components/landing/PricingSection";
import ShellLayout from "@/components/ShellLayout";

export const metadata: Metadata = {
  title: "Planes y Precios - QSP SpA",
  description: "Elige el plan perfecto para tu empresa. Desde análisis básicos hasta inteligencia completa de comercio exterior.",
  keywords: "planes, precios, comercio exterior, análisis, QSP SpA, suscripción",
  openGraph: {
    title: "Planes y Precios - QSP SpA",
    description: "Elige el plan perfecto para tu empresa. Desde análisis básicos hasta inteligencia completa de comercio exterior.",
    url: "https://qsp-spa.com/planes",
  },
};

export default function PlanesPage() {
  return (
    <div className="min-h-screen bg-background">
      <ShellLayout>
        <PricingSection />
      </ShellLayout>
    </div>
  );
}
