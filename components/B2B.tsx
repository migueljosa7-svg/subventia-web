import { Check, X, Building, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";
const rows: { f: string; gratis: boolean | string; pro: boolean | string }[] = [
  { f: "Alertas BDNS en tiempo real", gratis: "3 alertas/mes", pro: "Ilimitadas + BOE y 19 Boletines" },
  { f: "Calculadora de elegibilidad", gratis: true, pro: true },
  { f: "Borradores y memorias 48h", gratis: false, pro: true },
  { f: "Gestión multi-cliente (cartera)", gratis: false, pro: true },
  { f: "Marca blanca para tu gestoría", gratis: false, pro: true },
  { f: "API + exportación Excel/CRM", gratis: false, pro: true },
  { f: "Soporte", gratis: "Email", pro: "Prioritario + teléfono" },
];
function Cell({ v }: { v: boolean | string }) {
  if (v === true) return <Check className="mx-auto h-5 w-5 text-emerald-500" />;
  if (v === false) return <X className="mx-auto h-5 w-5 text-slate-300" />;
  return <span className="text-[13px] font-medium">{v}</span>;
}
export default function B2B() {
  return (
    <section id="b2b" className="border-y border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <p className="text-center text-xs font-bold uppercase tracking-widest text-emerald-600">B2B · Gestorías e inversores</p>
        <h2 className="mx-auto mt-2 max-w-2xl text-center text-2xl font-extrabold sm:text-3xl">Convierte subvenciones en ingresos recurrentes para tu despacho</h2>
        <p className="mx-auto mt-2 max-w-xl text-center text-sm text-slate-500">Tus clientes no piden ayudas porque no las conocen. Tú las detectas, las presentas y cobras por éxito + suscripción.</p>
        <div className="mx-auto mt-8 grid max-w-4xl gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 p-6">
            <p className="inline-flex items-center gap-2 text-sm font-bold"><Building className="h-4 w-4" /> Plan Gratis</p>
            <p className="mt-2 text-3xl font-extrabold">0 €</p>
            <p className="text-[13px] text-slate-500">Para probar con 1-2 clientes.</p>
            <a href="#resultados" className="mt-4 block rounded-xl border border-slate-200 py-2.5 text-center text-sm font-bold hover:bg-slate-50">Empezar gratis</a>
          </div>
          <div className="relative rounded-2xl border-2 border-[#0F172A] bg-[#0F172A] p-6 text-white shadow-xl">
            <span className="absolute -top-3 left-6 rounded-full bg-emerald-500 px-3 py-1 text-[11px] font-bold">RECOMENDADO</span>
            <p className="inline-flex items-center gap-2 text-sm font-bold"><Rocket className="h-4 w-4 text-emerald-400" /> Plan Pro</p>
            <p className="mt-2 text-3xl font-extrabold">99 €<span className="text-base font-medium text-slate-300">/mes</span></p>
            <p className="text-[13px] text-slate-300">Clientes ilimitados · ROI desde el primer expediente.</p>
            <a href="#" className="mt-4 block rounded-xl bg-emerald-500 py-2.5 text-center text-sm font-bold text-white hover:bg-emerald-600">Activar Plan Pro</a>
          </div>
        </div>
        <div className="mx-auto mt-6 max-w-4xl overflow-hidden rounded-2xl border border-slate-200">
          <table className="w-full bg-white text-center text-sm">
            <thead><tr className="border-b border-slate-200 bg-slate-50 text-xs uppercase text-slate-500"><th className="p-3 text-left">Funcionalidad</th><th className="p-3">Gratis</th><th className={cn("p-3 bg-[#0F172A] text-white")}>Pro 99€</th></tr></thead>
            <tbody>{rows.map((r) => (<tr key={r.f} className="border-b border-slate-100 last:border-0"><td className="p-3 text-left font-medium">{r.f}</td><td className="p-3"><Cell v={r.gratis} /></td><td className="bg-emerald-50/40 p-3"><Cell v={r.pro} /></td></tr>))}</tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
