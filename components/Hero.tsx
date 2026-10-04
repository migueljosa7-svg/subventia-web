"use client";
import { Calculator, MapPin, Briefcase } from "lucide-react";
import { UBICACIONES, type LocationKey, type SectorKey } from "@/data/subvenciones";
interface Props { sector: SectorKey | "todos"; setSector: (v: SectorKey | "todos") => void; ubicacion: LocationKey; setUbicacion: (v: LocationKey) => void; totalDinero: number; totalCount: number; onCalcular: () => void; }
export default function Hero({ sector, setSector, ubicacion, setUbicacion, totalDinero, totalCount, onCalcular }: Props) {
  return (
    <section className="relative overflow-hidden bg-[#0F172A] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 right-[-10%] h-[420px] w-[420px] rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="absolute bottom-[-140px] left-[-80px] h-[380px] w-[380px] rounded-full bg-sky-500/15 blur-3xl" />
      </div>
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 pb-14 pt-14 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:pt-20">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-slate-200">
            <span className="rounded-full bg-emerald-500 px-2 py-0.5 font-bold text-white">NUEVO</span>
            Sincronizado hoy con BDNS · +2.431 ayudas activas
          </div>
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-[56px]">
            Descubre las subvenciones que tu empresa está perdiendo <span className="text-emerald-400">HOY.</span>
          </h1>
          <p className="mt-4 max-w-xl text-slate-300">Rastreamos BDNS, BOE y 19 boletines cada hora. Te decimos <strong className="text-white">cuánto te corresponde</strong> y te preparamos el borrador en 48h.</p>
        </div>
        <div className="rounded-2xl bg-white p-5 text-slate-900 shadow-2xl sm:p-6">
          <div className="flex items-center justify-between">
            <h2 className="font-bold text-[#0F172A]">Calcula tu dinero disponible</h2>
            <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-bold text-emerald-700">GRATIS</span>
          </div>
          <label className="mt-4 block text-xs font-semibold uppercase text-slate-500">
            <span className="mb-1.5 flex items-center gap-1.5"><Briefcase className="h-3.5 w-3.5" /> Sector</span>
            <select value={sector} onChange={(e) => setSector(e.target.value as SectorKey | "todos")} className="h-12 w-full rounded-xl border border-slate-200 bg-[#F8FAFC] px-3 text-sm font-medium outline-none focus:border-emerald-500">
              <option value="todos">Todos los sectores</option>
              <option value="transporte">Transporte (Camiones / Flotas)</option>
              <option value="inmobiliaria">Inmobiliaria / Hipotecario</option>
              <option value="comercio">Comercio / Hostelería</option>
              <option value="otro">OTRO</option>
            </select>
          </label>
          <label className="mt-3 block text-xs font-semibold uppercase text-slate-500">
            <span className="mb-1.5 flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" /> Ubicación</span>
            <select value={ubicacion} onChange={(e) => setUbicacion(e.target.value as LocationKey)} className="h-12 w-full rounded-xl border border-slate-200 bg-[#F8FAFC] px-3 text-sm font-medium outline-none focus:border-emerald-500">
              {UBICACIONES.map((u) => (<option key={u.value} value={u.value}>{u.label}</option>))}
            </select>
          </label>
          <button onClick={onCalcular} className="mt-4 flex h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 font-bold text-white shadow-lg hover:bg-emerald-600">
            <Calculator className="h-5 w-5" /> Calcular Dinero Disponible
          </button>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="rounded-xl bg-[#0F172A] p-3 text-white">
              <p className="text-[11px] uppercase text-slate-400">Detectado</p>
              <p className="text-xl font-extrabold text-emerald-400">{totalDinero.toLocaleString("es-ES")} €</p>
            </div>
            <div className="rounded-xl bg-slate-100 p-3">
              <p className="text-[11px] uppercase text-slate-500">Compatibles</p>
              <p className="text-xl font-extrabold">{totalCount} activas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
