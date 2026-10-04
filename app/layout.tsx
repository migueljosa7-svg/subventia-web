import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SUBVENTIA — Descubre las subvenciones que tu empresa está perdiendo HOY",
  description:
    "SaaS de rastreo y matching de subvenciones públicas en España para empresas y autónomos. Datos sincronizados con BDNS.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-[#F8FAFC] text-[#0F172A] antialiased">
        {children}
      </body>
    </html>
  );
}
