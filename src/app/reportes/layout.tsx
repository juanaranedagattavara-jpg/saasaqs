import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reportes - QSP SpA',
  description: 'Genera reportes personalizados de tus operaciones comerciales. Análisis detallado de exportaciones e importaciones.',
  keywords: 'reportes comercio exterior, análisis exportaciones, reportes personalizados, QSP SpA',
  openGraph: {
    title: 'Reportes - QSP SpA',
    description: 'Genera reportes personalizados de tus operaciones comerciales. Análisis detallado de exportaciones e importaciones.',
    url: 'https://qsp-spa.com/reportes',
  },
};

export default function ReportesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
