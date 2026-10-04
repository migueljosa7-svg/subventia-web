"use client";
import { useMemo, useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Results from "@/components/Results";
import B2B from "@/components/B2B";
import Footer from "@/components/Footer";
import { SUBVENCIONES, type LocationKey, type SectorKey } from "@/data/subvenciones";
import { Radar, FileCheck2, BellRing } from "lucide-react";

export default function Page() {
  const [sector, setSector] = useState<SectorKey | "todos">("todos");
  const [ubicacion, setUbicacion] = useState<LocationKey>("toda");
  const [quickSearch, setQuickSearch] = useState("");

  const filtradas = useMemo(() => {
    const q = quickSearch.trim().toLowerCase();
    return SUBVENCIONES.filter((s) => {
      const okSector = sector === "todos" || s.sector.includes(sector as SectorKey);
      const okUbi = ubicacion === "toda" || s.ubicacion.includes(ubicacion) || s.ubicacion.includes("toda");
      const okQ = !q || (s.titulo + " " + s.organismo + " " + s.bdnsCode).toLowerCase().includes(q);
      return okSector && okUbi && okQ;
    });
  }, [sector, ubicacion, quickSearch]);

  const totalDinero = filtradas.reduce((a, s) => a + s.importeNum, 0);

  const scrollToResults = () => {
    document.getElementById("resultados")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Header quickSearch={quickSearch} setQuickSearch={setQuickSearch} />
      <Hero sector={sector} setSector={setSector} ubicacion={ubicacion} setUbicacion={setUbicacion} totalDinero={totalDinero} totalCount={filtradas.length} onCalcular={scrollToResults} />
      <Results items={filtradas} sector={sector} setSector={setSector} quickSearch={quickSearch} />
      <section id="como-funciona" className="mx-auto max-w-7xl px-4 pb-14 sm:px-6">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { icon: Radar, t: "1. Rastreamos", d: "Cada hora leemos BDNS, BOE y 19 boletines autonómicos con IA." },
            { icon: FileCheck2, t: "2. Matcheamos", d: "Cruzamos tu sector y ubicación con requisitos reales de elegibilidad." },
            { icon: BellRing, t: "3. Te avisamos", d: "Alerta de días restantes + borrador descargable en 48h." },
          ].map((c) => (
            <div key={c.t} className="rounded-2xl border border-slate-200 bg-white p-5">
              <c.icon className="h-6 w-6 text-emerald-600" />
              <p className="mt-2 font-bold">{c.t}</p>
              <p className="mt-1 text-sm text-slate-500">{c.d}</p>
            </div>
          ))}
        </div>
      </section>
      <B2B />
      <Footer />
    </div>
  );
}
