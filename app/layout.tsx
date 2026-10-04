import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SUBVENTIA | Motor Inteligente de Subvenciones y Ayudas en España",
  description:
    "Rastrea, comprueba la elegibilidad y genera borradores de solicitud para subvenciones del BOE, BOA y BDNS en transporte, comercio e inmobiliaria.",
  keywords: [
    "subvenciones",
    "ayudas públicas",
    "autónomos",
    "pymes",
    "Kit Digital",
    "MOVES Flotas",
    "Aragón",
    "Zaragoza",
    "BDNS",
  ],
  authors: [{ name: "SUBVENTIA Engine" }],
  openGraph: {
    title: "SUBVENTIA | Descubre las subvenciones que tu empresa está perdiendo",
    description:
      "Calcula en 1 minuto el importe en ayudas públicas disponibles para tu pyme o negocio.",
    url: "https://subventia-web.onrender.com",
    siteName: "SUBVENTIA",
    locale: "es_ES",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="min-h-screen bg-[#F8FAFC] text-[#0F172A] antialiased">
        {children}
      </body>
    </html>
  );
}
