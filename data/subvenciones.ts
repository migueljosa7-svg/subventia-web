export type SectorKey = "transporte" | "inmobiliaria" | "comercio" | "otro";
export type LocationKey = "aragon" | "madrid" | "cataluna" | "toda";

export interface Subvencion {
  id: string;
  titulo: string;
  organismo: string;
  importe: string;
  importeNum: number;
  diasRestantes: number;
  sector: SectorKey[];
  ubicacion: LocationKey[];
  ubicacionLabel: string;
  sectorLabel: string;
  requisitos: string[];
  compatibilidad: number; // 0-100
  destacada?: boolean;
  fechaLimite: string;
  bdnsCode: string;
}

export const SECTORES: { value: SectorKey | "todos"; label: string }[] = [
  { value: "todos", label: "Todos los sectores" },
  { value: "transporte", label: "Transporte (Camiones / Flotas)" },
  { value: "inmobiliaria", label: "Inmobiliaria / Hipotecario" },
  { value: "comercio", label: "Comercio / Hostelería" },
  { value: "otro", label: "OTRO" },
];

export const UBICACIONES: { value: LocationKey; label: string }[] = [
  { value: "toda", label: "Toda España" },
  { value: "aragon", label: "Aragón / Zaragoza" },
  { value: "madrid", label: "Madrid" },
  { value: "cataluna", label: "Cataluña" },
];

export const SUBVENCIONES: Subvencion[] = [
  {
    id: "movel-flotas-2026",
    titulo: "Programa MOVES Flotas: Ayuda a Flotas de Transporte Cero Emisiones",
    organismo: "IDAE · Ministerio para la Transición Ecológica",
    importe: "Hasta 15.000 €",
    importeNum: 15000,
    diasRestantes: 8,
    sector: ["transporte"],
    ubicacion: ["toda", "aragon", "madrid", "cataluna"],
    ubicacionLabel: "Toda España",
    sectorLabel: "Transporte",
    requisitos: [
      "Pyme o autónomo con flota de +3 camiones/furgonetas",
      "Achatarramiento de vehículo diésel Euro V o inferior",
      "Domicilio fiscal en España y alta mínima 2 años",
    ],
    compatibilidad: 94,
    destacada: true,
    fechaLimite: "12 Oct 2026",
    bdnsCode: "BDNS 742901",
  },
  {
    id: "kit-digital-comercio",
    titulo: "Kit Digital Comercio 2026: Digitalización para Comercio y Hostelería",
    organismo: "Red.es · Fondos NextGenerationEU",
    importe: "Hasta 12.000 €",
    importeNum: 12000,
    diasRestantes: 23,
    sector: ["comercio", "otro"],
    ubicacion: ["toda", "madrid", "cataluna", "aragon"],
    ubicacionLabel: "Toda España",
    sectorLabel: "Comercio / Hostelería",
    requisitos: [
      "Menos de 50 empleados y facturación < 10M €",
      "No tener consideración de empresa en crisis",
      "Estar al corriente con AEAT y Seguridad Social",
    ],
    compatibilidad: 89,
    fechaLimite: "27 Oct 2026",
    bdnsCode: "BDNS 739112",
  },
  {
    id: "rehabilitacion-energetica-aragon",
    titulo: "Rehabilitación Energética de Edificios e Hipotecas Verdes en Aragón",
    organismo: "Gobierno de Aragón · DGA Vivienda",
    importe: "Hasta 26.750 €",
    importeNum: 26750,
    diasRestantes: 15,
    sector: ["inmobiliaria", "otro"],
    ubicacion: ["aragon"],
    ubicacionLabel: "Aragón / Zaragoza",
    sectorLabel: "Inmobiliaria / Hipotecario",
    requisitos: [
      "Vivienda o edificio anterior a 2007 en Zaragoza/Aragón",
      "Mejora mínima del 30% en eficiencia energética",
      "Propietario, comunidad o pyme inmobiliaria",
    ],
    compatibilidad: 91,
    fechaLimite: "19 Oct 2026",
    bdnsCode: "BDNS 741208",
  },
  {
    id: "madrid-autonomos-2026",
    titulo: "Ayuda a Autónomos Madrid: Bono de Consolidación y Relevo",
    organismo: "Comunidad de Madrid · Consejería de Economía",
    importe: "Hasta 7.500 €",
    importeNum: 7500,
    diasRestantes: 31,
    sector: ["comercio", "transporte", "otro"],
    ubicacion: ["madrid"],
    ubicacionLabel: "Madrid",
    sectorLabel: "Autónomos",
    requisitos: [
      "Alta RETA ininterrumpida 12 meses en Madrid",
      "Renta neta < 35.000 € en último ejercicio",
      "Plan de negocio / memoria de inversión",
    ],
    compatibilidad: 82,
    fechaLimite: "04 Nov 2026",
    bdnsCode: "BDNS 738455",
  },
  {
    id: "catalunya-industria-40",
    titulo: "Cupons Indústria 4.0 Catalunya: Subvención a Pymes Industriales",
    organismo: "ACCIÓ · Generalitat de Catalunya",
    importe: "Hasta 20.000 €",
    importeNum: 20000,
    diasRestantes: 12,
    sector: ["otro", "transporte"],
    ubicacion: ["cataluna"],
    ubicacionLabel: "Cataluña",
    sectorLabel: "Industria / OTRO",
    requisitos: [
      "Pyme con centro operativo en Cataluña",
      "Proyecto de automatización o sensorización",
      "Proveedor acreditado TECNIO / EDIH",
    ],
    compatibilidad: 86,
    fechaLimite: "16 Oct 2026",
    bdnsCode: "BDNS 740877",
  },
  {
    id: "moves-camiones-aragon",
    titulo: "MOVES Proyectos Singulares Camiones Zaragoza: Infraestructura de Recarga",
    organismo: "DGA Energía + IDAE",
    importe: "Hasta 45.000 €",
    importeNum: 45000,
    diasRestantes: 5,
    sector: ["transporte"],
    ubicacion: ["aragon"],
    ubicacionLabel: "Aragón / Zaragoza",
    sectorLabel: "Transporte",
    requisitos: [
      "Base logística en PLAZA / Centrovía Zaragoza",
      "Instalación de punto de recarga > 100 kW",
      "Compromiso de mantenimiento 5 años",
    ],
    compatibilidad: 97,
    destacada: true,
    fechaLimite: "09 Oct 2026",
    bdnsCode: "BDNS 743310",
  },
];
