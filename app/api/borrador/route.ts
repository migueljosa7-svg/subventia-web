import { NextResponse } from 'next/server';
import { SUBVENCIONES } from '@/data/subvenciones';
function isValidNif(v: string) { return /^[A-Z0-9][0-9]{7}[A-Z0-9]$/i.test(v.trim()); }
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { subvencionId, tituloSubvencion, nif, nombreEmpresa } = body || {};
    if (!subvencionId || !nif) return NextResponse.json({ success: false, error: 'Faltan subvencionId o NIF.' }, { status: 400 });
    if (!isValidNif(String(nif))) return NextResponse.json({ success: false, error: 'NIF/CIF no válido (9 caracteres).' }, { status: 400 });
    const s = SUBVENCIONES.find((x) => x.id === subvencionId);
    const empresa = (nombreEmpresa || 'EMPRESA SOLICITANTE').toString();
    const fecha = new Date().toLocaleDateString('es-ES', { day: '2-digit', month: 'long', year: 'numeric' });
    const content = `# MEMORIA TÉCNICA — BORRADOR DE SOLICITUD\n\n**Programa:** ${tituloSubvencion || s?.titulo || subvencionId}\n**Convocatoria:** ${s?.bdnsCode || 'BDNS'} · ${s?.organismo || ''}\n**Solicitante:** ${empresa} · NIF/CIF: ${String(nif).toUpperCase()}\n**Fecha de generación:** ${fecha}\n**Importe solicitado:** ${s?.importe || '—'} · Límite: ${s?.fechaLimite || '—'}\n\n---\n\n## 1. Objeto y encaje\nLa presente memoria justifica el encaje del solicitante en la convocatoria de referencia, con compatibilidad estimada del ${s?.compatibilidad || 85}% según motor SUBVENTIA.\n\n## 2. Requisitos verificados\n${(s?.requisitos || []).map((r, i) => `${i + 1}. ${r}`).join('\n')}\n\n## 3. Plan de actuación\n- Fase 1: recopilación documental (NIF, escrituras, AEAT/SS, certificados).\n- Fase 2: presupuesto y proveedor acreditado.\n- Fase 3: presentación telemática antes del cierre (quedan ${s?.diasRestantes ?? '—'} días).\n- Fase 4: justificación y cobro.\n\n## 4. Presupuesto estimado\n| Concepto | Importe |\n|---|---|\n| Inversión subvencionable | ${s?.importe || '—'} |\n\n## 5. Declaración responsable\nEl solicitante declara veracidad de los datos y compromiso de mantener requisitos durante el periodo exigible.\n\n---\n*Documento orientativo generado por SUBVENTIA IA. Revisar con gestoría antes de presentar.*\n`;
    return NextResponse.json({ success: true, content });
  } catch { return NextResponse.json({ success: false, error: 'Error interno.' }, { status: 500 }); }
}
