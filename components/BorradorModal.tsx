'use client';
import { useState } from 'react';
import { FileText, Download, Copy, Check, X, Loader2 } from 'lucide-react';
interface BorradorModalProps { subvencionId: string; tituloSubvencion: string; isOpen: boolean; onClose: () => void; }
export default function BorradorModal({ subvencionId, tituloSubvencion, isOpen, onClose }: BorradorModalProps) {
  const [nif, setNif] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [loading, setLoading] = useState(false);
  const [borrador, setBorrador] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  if (!isOpen) return null;
  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault(); setLoading(true);
    try {
      const res = await fetch('/api/borrador', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ subvencionId, tituloSubvencion, nif, nombreEmpresa: empresa }) });
      const data = await res.json();
      if (data.success) setBorrador(data.content);
    } catch (err) { console.error(err); }
    finally { setLoading(false); }
  };
  const handleDownload = () => {
    if (!borrador) return;
    const element = document.createElement('a');
    const file = new Blob([borrador], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `Borrador_${subvencionId}.md`;
    document.body.appendChild(element); element.click(); document.body.removeChild(element);
  };
  const handleCopy = () => {
    if (!borrador) return;
    navigator.clipboard.writeText(borrador);
    setCopied(true); setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full p-6 shadow-2xl relative border border-slate-100">
        <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition"><X className="w-5 h-5" /></button>
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-emerald-100 text-emerald-600 rounded-xl"><FileText className="w-6 h-6" /></div>
          <div><h3 className="text-xl font-bold text-slate-900">Generar Memoria Técnica (IA)</h3><p className="text-sm text-slate-500 truncate max-w-md">{tituloSubvencion}</p></div>
        </div>
        {!borrador ? (
          <form onSubmit={handleGenerate} className="space-y-4">
            <div><label className="block text-sm font-medium text-slate-700 mb-1">NIF / CIF del Solicitante *</label><input type="text" required placeholder="B12345678 o 12345678Z" value={nif} onChange={(e) => setNif(e.target.value)} className="w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-none" /></div>
            <div><label className="block text-sm font-medium text-slate-700 mb-1">Nombre de la Empresa (Opcional)</label><input type="text" placeholder="Transportes Zaragoza S.L." value={empresa} onChange={(e) => setEmpresa(e.target.value)} className="w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-none" /></div>
            <button type="submit" disabled={loading} className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl flex items-center justify-center gap-2 transition disabled:opacity-50">{loading ? (<><Loader2 className="w-5 h-5 animate-spin" />Procesando pliegos y requisitos...</>) : ('Generar Borrador de Solicitud')}</button>
          </form>
        ) : (
          <div className="space-y-4">
            <div className="bg-slate-900 text-slate-100 p-4 rounded-xl text-xs font-mono max-h-60 overflow-y-auto whitespace-pre-wrap border border-slate-800">{borrador}</div>
            <div className="flex gap-3">
              <button onClick={handleCopy} className="flex-1 py-2.5 border border-slate-200 hover:bg-slate-50 text-slate-700 font-medium rounded-xl flex items-center justify-center gap-2 transition">{copied ? (<><Check className="w-4 h-4 text-emerald-600" /> Copiado</>) : (<><Copy className="w-4 h-4" /> Copiar Texto</>)}</button>
              <button onClick={handleDownload} className="flex-1 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-xl flex items-center justify-center gap-2 transition"><Download className="w-4 h-4" /> Descargar (.md)</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
