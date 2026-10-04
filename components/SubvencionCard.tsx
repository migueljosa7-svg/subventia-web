"use client";
import { useState } from "react";
import { Clock3, CheckCircle2, FileDown, Building2, MapPin, BadgeCheck, Sparkles, ArrowRight } from "lucide-react";
import type { Subvencion } from "@/data/subvenciones";
import BorradorModal from "./BorradorModal";
import { cn } from "@/lib/utils";

function diasColor(d: number) {
  if (d <= 8) return "bg-red-50 text-red-700 border-red-200";
  if (d <= 15) return "bg-amber-50 text-amber-800 border-amber-200";
  return "bg-emerald-50 text-emerald-700 border-emerald-200";
}

export function SubvencionCard({ s }: { s: Subvencion }) {
  const [done, setDone] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_8px_30px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:shadow-xl">
      {s.destacada && (
        <div className="flex items-center gap-1.5 bg-[#0F172A] px-4 py-2 text-[11px] font-bold uppercase tracking-wider text-emerald-300">
          <Sparkles className="h-3.5 w-3.5" /> Alta compatibilidad · {s.compatibilidad}% match
        </div>
      )}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap items-center gap-2 text-[11px] font-semibold">
          <span className={cn("inline-flex items-center gap-1 rounded-full border px-2.5 py-1", diasColor(s.diasRestantes))}>
            <Clock3 className="h-3.5 w-3.5" />
            {s.diasRestantes <= 0 ? "Cierra hoy" : `Quedan ${s.diasRestantes} días`}
          </span>
          <span className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-slate-600">
            <BadgeCheck className="h-3.5 w-3.5 text-emerald-600" /> {s.bdnsCode}
          </span>
        </div>

        <h3 className="mt-3 text-[17px] font-bold leading-snug text-[#0F172A]">{s.titulo}</h3>
        <p className="mt-1.5 flex items-center gap-1.5 text-xs text-slate-500">
          <Building2 className="h-3.5 w-3.5" /> {s.organismo}
          <span className="mx-1">·</span>
          <MapPin className="h-3.5 w-3.5" /> {s.ubicacionLabel}
        </p>

        <p className="mt-3 text-[13px] font-medium uppercase tracking-wide text-slate-400">Importe máximo</p>
        <p className="text-[32px] font-extrabold leading-none tracking-tight text-[#10B981]">{s.importe}</p>
        <p className="mt-1 text-xs text-slate-500">Fecha límite: <strong className="text-slate-700">{s.fechaLimite}</strong> · {s.sectorLabel}</p>

        {/* Compatibilidad bar */}
        <div className="mt-3">
          <div className="flex justify-between text-[11px] font-semibold text-slate-500">
            <span>Compatibilidad con tu perfil</span><span className="text-[#0F172A]">{s.compatibilidad}%</span>
          </div>
          <div className="mt-1 h-2 overflow-hidden rounded-full bg-slate-100">
            <div className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-emerald-600 transition-all" style={{ width: `${s.compatibilidad}%` }} />
          </div>
        </div>

        <ul className="mt-4 space-y-2 border-t border-dashed border-slate-200 pt-4 text-[13px] leading-snug text-slate-600">
          {s.requisitos.map((r) => (
            <li key={r} className="flex gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
              <span>{r}</span>
            </li>
          ))}
        </ul>

        <div className="mt-5 grid gap-2">
          <button
            onClick={() => setDone(true)}
            className={cn(
              "flex h-11 items-center justify-center gap-2 rounded-xl text-sm font-bold transition",
              done ? "bg-[#0F172A] text-emerald-300" : "bg-[#0F172A] text-white hover:bg-slate-800"
            )}
          >
            {done ? (<><BadgeCheck className="h-4 w-4" /> Borrador solicitado · Te avisamos</>) : (<>Solicitar Asistencia <ArrowRight className="h-4 w-4" /></>)}
          </button>
          <button className="flex h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white text-sm font-semibold text-slate-700 transition hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-800" onClick={() => setModalOpen(true)}>
            <FileDown className="h-4 w-4" /> Descargar Borrador
          </button>
        </div>
      </div>
      <BorradorModal subvencionId={s.id} tituloSubvencion={s.titulo} isOpen={modalOpen} onClose={() => { setModalOpen(false); setDone(true); }} />
    </article>
  );
}
