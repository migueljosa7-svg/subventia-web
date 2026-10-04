"use client";
import { Filter, SearchX, ArrowUpDown } from "lucide-react";
import { SECTORES, type SectorKey } from "@/data/subvenciones";
import { SubvencionCard } from "./SubvencionCard";
import type { Subvencion } from "@/data/subvenciones";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function Results({ items, sector, setSector, quickSearch }: { items: Subvencion[]; sector: SectorKey | "todos"; setSector: (v: SectorKey | "todos") => void; quickSearch: string; }) {
  const [orden, setOrden] = useState<"match" | "importe" | "dias">("match");
  const sorted = [...items].sort((a, b) => orden === "importe" ? b.importeNum - a.importeNum : orden === "dias" ? a.diasRestantes - b.diasRestantes : b.compatibilidad - a.compatibilidad);
  return (
    <section id="resultados" className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-emerald-600">Dashboard de resultados · Mock BDNS</p>
          <h2 className="mt-1 text-2xl font-extrabold sm:text-3xl">Ayudas compatibles contigo</h2>
          <p className="mt-1 text-sm text-slate-500">{items.length} ayudas · filtro dinámico por sector, ubicación y buscador.</p>
        </div>
        <button onClick={() => setOrden(orden === "match" ? "importe" : orden === "importe" ? "dias" : "match")} className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold hover:border-emerald-300">
          <ArrowUpDown className="h-4 w-4" /> Orden: {orden === "match" ? "Match" : orden === "importe" ? "Importe" : "Caducidad"}
        </button>
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        {SECTORES.map((s) => (
          <button key={s.value} onClick={() => setSector(s.value)} className={cn("inline-flex items-center gap-1.5 rounded-full border px-3.5 py-2 text-[13px] font-semibold transition", sector === s.value ? "border-[#0F172A] bg-[#0F172A] text-white" : "border-slate-200 bg-white text-slate-600 hover:border-slate-300")}>
            <Filter className="h-3.5 w-3.5" />{s.label}
          </button>
        ))}
      </div>
      {quickSearch && (<p className="mt-3 text-[13px] text-slate-500">Buscando: <strong className="text-slate-800">“{quickSearch}”</strong> · {items.length} resultados</p>)}
      {sorted.length === 0 ? (
        <div className="mt-6 grid place-items-center rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center">
          <SearchX className="h-10 w-10 text-slate-300" />
          <p className="mt-3 font-bold">Sin resultados para este filtro</p>
          <p className="text-sm text-slate-500">Prueba con “Toda España” o cambia de sector.</p>
        </div>
      ) : (
        <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {sorted.map((s) => (<SubvencionCard key={s.id} s={s} />))}
        </div>
      )}
    </section>
  );
}
