import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard - QSP SpA',
  description: 'Visualiza tus datos de comercio exterior en tiempo real. KPIs, tendencias y análisis estratégico para exportadores.',
  keywords: 'dashboard comercio exterior, KPIs exportaciones, análisis de datos, QSP SpA',
  openGraph: {
    title: 'Dashboard - QSP SpA',
    description: 'Visualiza tus datos de comercio exterior en tiempo real. KPIs, tendencias y análisis estratégico para exportadores.',
    url: 'https://qsp-spa.com/dashboard',
  },
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
