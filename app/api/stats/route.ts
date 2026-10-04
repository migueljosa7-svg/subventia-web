import { NextResponse } from 'next/server';
import { SUBVENCIONES } from '@/data/subvenciones';
export async function GET() {
  const totalCount = SUBVENCIONES.length;
  const totalEuros = SUBVENCIONES.reduce((a, c) => a + c.importeNum, 0);
  const bySector: Record<string, number> = {};
  SUBVENCIONES.forEach((s) => s.sector.forEach((k) => { bySector[k] = (bySector[k] || 0) + 1; }));
  return NextResponse.json({ success: true, totalCount, totalEuros, formattedEuros: `${(totalEuros / 1000).toFixed(1)}k €`, bySector, lastUpdate: new Date().toISOString() });
}
