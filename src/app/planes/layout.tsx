import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Planes y Precios - QSP SpA',
  description: 'Elige el plan que mejor se adapte a tu empresa. Soluciones de inteligencia de comercio exterior para todos los tamaños.',
  keywords: 'planes QSP SpA, precios comercio exterior, soluciones exportadores, QSP SpA',
  openGraph: {
    title: 'Planes y Precios - QSP SpA',
    description: 'Elige el plan que mejor se adapte a tu empresa. Soluciones de inteligencia de comercio exterior para todos los tamaños.',
    url: 'https://qsp-spa.com/planes',
  },
};

export default function PlanesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
