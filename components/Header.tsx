"use client";
import { useState } from "react";
import { Search, Menu, X, Landmark, Zap } from "lucide-react";

export default function Header({ quickSearch, setQuickSearch }: { quickSearch: string; setQuickSearch: (v: string) => void }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-3 px-4 sm:px-6">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#0F172A] text-white shadow">
            <Landmark className="h-5 w-5" />
          </span>
          <span className="leading-none">
            <span className="block text-[17px] font-extrabold tracking-tight text-[#0F172A]">SUBVENTIA</span>
            <span className="mt-1 inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-[11px] font-semibold text-emerald-700">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              España / BDNS API Live
            </span>
          </span>
        </a>

        {/* Nav desktop */}
        <nav className="ml-6 hidden items-center gap-6 text-sm font-medium text-slate-600 lg:flex">
          <a href="#resultados" className="hover:text-[#0F172A]">Ayudas</a>
          <a href="#como-funciona" className="hover:text-[#0F172A]">Cómo funciona</a>
          <a href="#b2b" className="hover:text-[#0F172A]">Gestorías</a>
          <a href="#faq" className="hover:text-[#0F172A]">FAQ</a>
        </nav>

        {/* Buscador rápido */}
        <div className="ml-auto hidden min-w-0 flex-1 max-w-sm items-center md:flex">
          <div className="relative w-full">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              value={quickSearch}
              onChange={(e) => setQuickSearch(e.target.value)}
              placeholder="Busca: MOVES, Kit Digital, rehabilitación…"
              className="h-10 w-full rounded-xl border border-slate-200 bg-[#F8FAFC] pl-9 pr-3 text-sm outline-none transition focus:border-emerald-400 focus:bg-white focus:ring-4 focus:ring-emerald-100"
            />
          </div>
        </div>

        <a
          href="#b2b"
          className="ml-2 hidden items-center gap-2 rounded-xl bg-[#0F172A] px-4 py-2.5 text-sm font-semibold text-white shadow hover:bg-slate-800 sm:inline-flex"
        >
          <Zap className="h-4 w-4 text-emerald-400" />
          Acceso Gestorías / B2B
        </a>

        <button onClick={() => setOpen(!open)} className="ml-auto rounded-lg p-2 hover:bg-slate-100 md:hidden" aria-label="Menú">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-100 bg-white px-4 py-4 md:hidden">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              value={quickSearch}
              onChange={(e) => setQuickSearch(e.target.value)}
              placeholder="Busca ayudas…"
              className="h-11 w-full rounded-xl border border-slate-200 bg-[#F8FAFC] pl-9 pr-3 text-sm outline-none focus:border-emerald-400"
            />
          </div>
          <a href="#b2b" className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-[#0F172A] px-4 py-3 text-sm font-semibold text-white">
            <Zap className="h-4 w-4 text-emerald-400" /> Acceso Gestorías / B2B
          </a>
          <nav className="mt-3 grid gap-2 text-sm font-medium text-slate-700">
            <a href="#resultados" onClick={() => setOpen(false)} className="rounded-lg px-2 py-2 hover:bg-slate-50">Ayudas</a>
            <a href="#como-funciona" onClick={() => setOpen(false)} className="rounded-lg px-2 py-2 hover:bg-slate-50">Cómo funciona</a>
            <a href="#b2b" onClick={() => setOpen(false)} className="rounded-lg px-2 py-2 hover:bg-slate-50">Gestorías</a>
          </nav>
        </div>
      )}
    </header>
  );
}
