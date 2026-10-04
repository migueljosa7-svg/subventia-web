import { Landmark, ShieldCheck } from "lucide-react";
export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-4">
        <div>
          <p className="flex items-center gap-2 font-extrabold text-white"><span className="grid h-8 w-8 place-items-center rounded-lg bg-white/10"><Landmark className="h-4 w-4" /></span>SUBVENTIA</p>
          <p className="mt-3 text-[13px] leading-relaxed">Rastreo y matching de subvenciones públicas en España. Datos agregados de BDNS, BOE y boletines autonómicos.</p>
          <p className="mt-3 inline-flex items-center gap-1.5 text-xs text-emerald-300"><ShieldCheck className="h-4 w-4" /> España / BDNS API Live</p>
        </div>
        <div><p className="text-sm font-bold text-white">Sectores</p><ul className="mt-3 space-y-2 text-[13px]"><li>Transporte y flotas</li><li>Inmobiliaria / Hipotecario</li><li>Comercio / Hostelería</li><li>Autónomos y pymes</li></ul></div>
        <div><p className="text-sm font-bold text-white">Territorios</p><ul className="mt-3 space-y-2 text-[13px]"><li>Aragón / Zaragoza</li><li>Madrid</li><li>Cataluña</li><li>Toda España</li></ul></div>
        <div><p className="text-sm font-bold text-white">Legal</p><ul className="mt-3 space-y-2 text-[13px]"><li>Aviso legal</li><li>Privacidad</li><li>Cookies</li><li>contacto@subventia.es</li></ul></div>
      </div>
      <div className="border-t border-white/10"><p className="mx-auto max-w-7xl px-4 py-4 text-xs text-slate-400 sm:px-6">© 2026 SUBVENTIA · Proyecto demo con mock data. No constituye asesoramiento jurídico.</p></div>
    </footer>
  );
}
