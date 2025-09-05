import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { softwareApplicationJSONLD } from "../../next-seo.config";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "QSP SpA – Inteligencia de Comercio Exterior",
    template: "%s | QSP SpA",
  },
  description: "Transforma datos complejos de comercio exterior en inteligencia accionable. Dashboards, reportes automáticos y consultoría estratégica para exportadores.",
  keywords: "comercio exterior, exportaciones, importaciones, dashboard, análisis, reportes, QSP SpA, inteligencia comercial, datos aduaneros",
  authors: [{ name: "QSP SpA" }],
  creator: "QSP SpA",
  publisher: "QSP SpA",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://qsp-spa.com"),
  openGraph: {
    title: "QSP SpA – Inteligencia de Comercio Exterior",
    description: "Transforma datos aduaneros en decisiones estratégicas. Dashboards premium y reportes automáticos.",
    url: "https://qsp-spa.com",
    siteName: "QSP SpA",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "QSP SpA – Inteligencia de Comercio Exterior",
    description: "Transforma datos aduaneros en decisiones estratégicas. Dashboards premium y reportes automáticos.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <head>
        <meta name="theme-color" content="#0b0f14" />
        <meta name="msapplication-TileColor" content="#0b0f14" />
        <link rel="prefetch" href="/dashboard" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(softwareApplicationJSONLD),
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-background text-foreground min-h-screen`}>
        <main id="content" role="main" className="relative">
          {children}
        </main>
      </body>
    </html>
  );
}
