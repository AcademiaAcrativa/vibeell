import React from 'react';

// ============================================================================
// DEFINIÇÕES TÉCNICAS DE CAD / WOKWI (SEM EFEITOS ARTIFICIAIS DE IA)
// ============================================================================
export function CircuitDefs() {
  return (
    <defs>
      {/* Grade Milimétrica de Laboratório (Estilo CAD / KiCad) */}
      <pattern id="labGridSmall" width="10" height="10" patternUnits="userSpaceOnUse">
        <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#2a2e39" strokeWidth="0.5" opacity="0.35" />
      </pattern>
      <pattern id="labGridMajor" width="50" height="50" patternUnits="userSpaceOnUse">
        <rect width="50" height="50" fill="url(#labGridSmall)" />
        <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#3b4252" strokeWidth="1" opacity="0.5" />
      </pattern>

      {/* Grade Clara para Modo Papel Técnico */}
      <pattern id="lightGridSmall" width="10" height="10" patternUnits="userSpaceOnUse">
        <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#e2e8f0" strokeWidth="0.5" />
      </pattern>
      <pattern id="lightGridMajor" width="50" height="50" patternUnits="userSpaceOnUse">
        <rect width="50" height="50" fill="url(#lightGridSmall)" />
        <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#cbd5e1" strokeWidth="1" />
      </pattern>

      {/* Ponto de Ilha de Cobre Estanhado / Ouro ENIG */}
      <radialGradient id="enigPad" cx="40%" cy="40%" r="60%">
        <stop offset="0%" stopColor="#fef08a" />
        <stop offset="70%" stopColor="#eab308" />
        <stop offset="100%" stopColor="#a16207" />
      </radialGradient>

      {/* Ponto de Solda de Estanho Sóbrio */}
      <radialGradient id="tinSolder" cx="35%" cy="35%" r="65%">
        <stop offset="0%" stopColor="#f8fafc" />
        <stop offset="55%" stopColor="#cbd5e1" />
        <stop offset="90%" stopColor="#64748b" />
        <stop offset="100%" stopColor="#334155" />
      </radialGradient>

      {/* Latão Natural do Contrapeso */}
      <linearGradient id="solidBrass" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ca8a04" />
        <stop offset="50%" stopColor="#eab308" />
        <stop offset="100%" stopColor="#a16207" />
      </linearGradient>

      {/* Metal Escovado do Conector USB-C */}
      <linearGradient id="brushedSteel" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#cbd5e1" />
        <stop offset="50%" stopColor="#94a3b8" />
        <stop offset="100%" stopColor="#64748b" />
      </linearGradient>

      {/* Níquel / Aço Escovado para o Contrapeso Excêntrico Real do Motor */}
      <linearGradient id="brushedNickel" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f8fafc" />
        <stop offset="25%" stopColor="#e2e8f0" />
        <stop offset="50%" stopColor="#cbd5e1" />
        <stop offset="75%" stopColor="#94a3b8" />
        <stop offset="100%" stopColor="#64748b" />
      </linearGradient>

      {/* Sombra / Profundidade 3D da Lateral do Bloco Excêntrico */}
      <linearGradient id="nickel3DShade" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#64748b" />
        <stop offset="60%" stopColor="#475569" />
        <stop offset="100%" stopColor="#334155" />
      </linearGradient>

      {/* Mancal e Flange Frontal Torneada */}
      <linearGradient id="collarLathe" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#cbd5e1" />
        <stop offset="30%" stopColor="#f8fafc" />
        <stop offset="60%" stopColor="#cbd5e1" />
        <stop offset="100%" stopColor="#64748b" />
      </linearGradient>

      {/* Capa de Borracha Preta Retangular do Motor */}
      <linearGradient id="rubberBoot" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#27272a" />
        <stop offset="15%" stopColor="#18181b" />
        <stop offset="85%" stopColor="#18181b" />
        <stop offset="100%" stopColor="#09090b" />
      </linearGradient>
    </defs>
  );
}

// ============================================================================
// PONTO DE SOLDA REALISTA DE BANCADA (TERMINAL SOLDER BEAD)
// ============================================================================
export function RealSolderJoint({ cx, cy, r = 4 }: { cx: number; cy: number; r?: number }) {
  return (
    <g>
      <circle cx={cx} cy={cy} r={r} fill="url(#tinSolder)" stroke="#475569" strokeWidth="0.6" />
      <circle cx={cx - r * 0.25} cy={cy - r * 0.25} r={r * 0.25} fill="#ffffff" opacity="0.6" />
    </g>
  );
}

// ============================================================================
// 1. ESP32-C3 SUPERMINI (ESTILO CAD / WOKWI PRECISO - FOTO 6)
// ============================================================================
interface Esp32Props {
  x: number;
  y: number;
  label?: string;
  isTransmitter?: boolean;
  highlight?: boolean;
  dark?: boolean;
}

export function RealisticEsp32C3({ x, y, label, isTransmitter, highlight, dark = true }: Esp32Props) {
  const w = 126;
  const h = 186;

  // Nomes dos 8 pinos esquerdos e direitos conforme serigrafia oficial ESP32-C3 SuperMini
  const leftPins = ['5V', 'GND', '3V3', 'IO0', 'IO1', 'IO2', 'IO3', 'IO4'];
  const rightPins = ['IO5', 'IO6', 'IO7', 'IO8', 'IO9', 'IO10', 'IO20', 'IO21'];

  return (
    <g
      transform={`translate(${x}, ${y})`}
      className="cursor-pointer transition-transform duration-150 hover:scale-[1.01]"
    >
      {/* Realce ao Selecionar */}
      {highlight && (
        <rect
          x="-5"
          y="-8"
          width={w + 10}
          height={h + 16}
          rx="9"
          fill="none"
          stroke="#0055ff"
          strokeWidth="2.5"
          strokeDasharray="5 3"
        />
      )}

      {/* PCB Preto Fosco (Soldermask FR4 Preto Real) */}
      <rect x="0" y="0" width={w} height={h} rx="5" fill="#18181b" stroke="#3f3f46" strokeWidth="1" />

      {/* Conector USB-C Fêmea Central Superior */}
      <g transform={`translate(${w / 2 - 25}, -6)`}>
        <rect x="0" y="0" width="50" height="34" rx="4" fill="url(#brushedSteel)" stroke="#475569" strokeWidth="1" />
        <rect x="7" y="3" width="36" height="18" rx="3" fill="#09090b" stroke="#334155" strokeWidth="0.8" />
        <rect x="13" y="9" width="24" height="6" rx="1" fill="#1e293b" />
        <line x1="16" y1="12" x2="34" y2="12" stroke="#eab308" strokeWidth="1" strokeDasharray="1.5 1" />
        {/* Garras Mecânicas Laterais */}
        <rect x="-3" y="16" width="4" height="8" rx="1" fill="url(#tinSolder)" />
        <rect x="49" y="16" width="4" height="8" rx="1" fill="url(#tinSolder)" />
      </g>

      {/* 8 Pads Castellated Banhados a Ouro (Borda Esquerda) */}
      {leftPins.map((pName, i) => {
        const py = 22 + i * 20;
        return (
          <g key={`l-${i}`} transform={`translate(0, ${py})`}>
            {/* Ilha de Ouro com Chanfro Semi-circular */}
            <path d="M 0 0 C 4 0, 7 2, 7 5 C 7 8, 4 10, 0 10 Z" fill="url(#enigPad)" stroke="#854d0e" strokeWidth="0.5" />
            <circle cx="1.5" cy="5" r="2.2" fill="#09090b" />
            {/* Rótulo de Serigrafia em Branco Puro */}
            <text x="12" y="8" fill="#f8fafc" fontSize="7" fontFamily="monospace" fontWeight="bold">
              {pName}
            </text>
          </g>
        );
      })}

      {/* 8 Pads Castellated Banhados a Ouro (Borda Direita) */}
      {rightPins.map((pName, i) => {
        const py = 22 + i * 20;
        return (
          <g key={`r-${i}`} transform={`translate(${w}, ${py})`}>
            {/* Ilha de Ouro com Chanfro Semi-circular */}
            <path d="M 0 0 C -4 0, -7 2, -7 5 C -7 8, -4 10, 0 10 Z" fill="url(#enigPad)" stroke="#854d0e" strokeWidth="0.5" />
            <circle cx="-1.5" cy="5" r="2.2" fill="#09090b" />
            {/* Rótulo de Serigrafia em Branco Puro */}
            <text x="-12" y="8" fill="#f8fafc" fontSize="7" fontFamily="monospace" fontWeight="bold" textAnchor="end">
              {pName}
            </text>
          </g>
        );
      })}

      {/* Micro Botão Tátil SMD - BOOT */}
      <g transform="translate(18, 42)">
        <rect x="0" y="0" width="20" height="15" rx="2" fill="#d1d5db" stroke="#6b7280" strokeWidth="0.8" />
        <circle cx="10" cy="7.5" r="4" fill="#18181b" />
        <text x="10" y="24" fill="#a1a1aa" fontSize="6" fontFamily="monospace" textAnchor="middle" fontWeight="bold">BOOT</text>
      </g>

      {/* Micro Botão Tátil SMD - RST */}
      <g transform={`translate(${w - 38}, 42)`}>
        <rect x="0" y="0" width="20" height="15" rx="2" fill="#d1d5db" stroke="#6b7280" strokeWidth="0.8" />
        <circle cx="10" cy="7.5" r="4" fill="#18181b" />
        <text x="10" y="24" fill="#a1a1aa" fontSize="6" fontFamily="monospace" textAnchor="middle" fontWeight="bold">RST</text>
      </g>

      {/* Chip QFN ESP32-C3FH4 Central Rotacionado a 45° (Exatamente como na Foto 6) */}
      <g transform={`translate(${w / 2}, 102) rotate(45)`}>
        <rect x="-22" y="-22" width="44" height="44" rx="2" fill="#09090b" stroke="#44403c" strokeWidth="1" />
        {/* Ponto indicador do Pino 1 */}
        <circle cx="-16" cy="-16" r="1.5" fill="#a8a29e" />
        {/* Marcação Técnica Gravada */}
        <text x="0" y="3" fill="#e7e5e4" fontSize="6.5" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
          ESP32-C3
        </text>
        <text x="0" y="11" fill="#a8a29e" fontSize="5" fontFamily="monospace" textAnchor="middle">
          FH4
        </text>
      </g>

      {/* Cristal Oscilador Selado em Metal (40.000 MHz) */}
      <g transform="translate(18, 142)">
        <rect x="0" y="0" width="24" height="14" rx="1.5" fill="#cbd5e1" stroke="#64748b" strokeWidth="0.7" />
        <text x="12" y="9" fill="#1e293b" fontSize="5" fontFamily="monospace" textAnchor="middle" fontWeight="bold">40.000</text>
      </g>

      {/* Antena Cerâmica RF Vermelha na Borda Inferior (Foto 6) */}
      <g transform={`translate(${w / 2 - 19}, ${h - 18})`}>
        <rect x="0" y="0" width="38" height="14" rx="1" fill="#dc2626" stroke="#b91c1c" strokeWidth="0.8" />
        {/* Pistas cerâmicas prateadas */}
        <line x1="8" y1="2" x2="8" y2="12" stroke="#ffffff" strokeWidth="1" />
        <line x1="16" y1="2" x2="16" y2="12" stroke="#ffffff" strokeWidth="1" />
        <line x1="24" y1="2" x2="24" y2="12" stroke="#ffffff" strokeWidth="1" />
        <line x1="30" y1="2" x2="30" y2="12" stroke="#ffffff" strokeWidth="1" />
      </g>

      {/* Serigrafia Branca Oficial: "21" e "0" nos Cantos Inferiores (Foto 6) */}
      <text x="10" y={h - 6} fill="#ffffff" fontSize="9" fontFamily="monospace" fontWeight="bold">21</text>
      <text x={w - 16} y={h - 6} fill="#ffffff" fontSize="9" fontFamily="monospace" fontWeight="bold">0</text>

      {/* Etiqueta Técnica de Identificação */}
      <g transform={`translate(${w / 2}, ${h + 18})`}>
        <rect x="-56" y="-11" width="112" height="22" rx="3" fill="#09090b" stroke="#334155" strokeWidth="1" />
        <text x="0" y="4" fill="#ffffff" fontSize="9" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
          {label || (isTransmitter ? 'ESP32-C3 [TX]' : 'ESP32-C3 [RX]')}
        </text>
      </g>
    </g>
  );
}

// ============================================================================
// 2. MÓDULO TP4056 USB-C (AZUL INDUSTRIAL FR4 - FOTO 2)
// ============================================================================
interface Tp4056Props {
  x: number;
  y: number;
  highlight?: boolean;
}

export function RealisticTp4056({ x, y, highlight }: Tp4056Props) {
  const w = 110;
  const h = 176;

  return (
    <g
      transform={`translate(${x}, ${y})`}
      className="cursor-pointer transition-transform duration-150 hover:scale-[1.01]"
    >
      {highlight && (
        <rect
          x="-5"
          y="-8"
          width={w + 10}
          height={h + 16}
          rx="8"
          fill="none"
          stroke="#0055ff"
          strokeWidth="2.5"
          strokeDasharray="5 3"
        />
      )}

      {/* PCB Azul Clássico FR4 Dupla Face */}
      <rect x="0" y="0" width={w} height={h} rx="4" fill="#0c4a6e" stroke="#0284c7" strokeWidth="1" />

      {/* Furos de Montagem nos Cantos */}
      <circle cx="8" cy="8" r="3.5" fill="#09090b" stroke="#94a3b8" strokeWidth="1" />
      <circle cx={w - 8} cy="8" r="3.5" fill="#09090b" stroke="#94a3b8" strokeWidth="1" />
      <circle cx="8" cy={h - 8} r="3.5" fill="#09090b" stroke="#94a3b8" strokeWidth="1" />
      <circle cx={w - 8} cy={h - 8} r="3.5" fill="#09090b" stroke="#94a3b8" strokeWidth="1" />

      {/* Conector USB-C Fêmea Central Inferior */}
      <g transform={`translate(${w / 2 - 25}, ${h - 26})`}>
        <rect x="0" y="0" width="50" height="30" rx="3.5" fill="url(#brushedSteel)" stroke="#475569" strokeWidth="1" />
        <rect x="7" y="8" width="36" height="15" rx="3" fill="#09090b" />
        <rect x="13" y="13" width="24" height="5" rx="1" fill="#1e293b" />
      </g>

      {/* Ilhas de Solda Metálicas Douradas com Rótulos Brancos Nítidos */}
      {/* OUT+ */}
      <g transform="translate(14, 20)">
        <rect x="-8" y="-8" width="16" height="16" rx="2" fill="url(#enigPad)" stroke="#854d0e" strokeWidth="0.6" />
        <circle cx="0" cy="0" r="3.2" fill="#09090b" />
        <text x="14" y="4" fill="#ffffff" fontSize="9" fontFamily="monospace" fontWeight="bold">OUT+</text>
      </g>

      {/* B+ */}
      <g transform="translate(14, 58)">
        <rect x="-8" y="-8" width="16" height="16" rx="2" fill="url(#enigPad)" stroke="#854d0e" strokeWidth="0.6" />
        <circle cx="0" cy="0" r="3.2" fill="#09090b" />
        <text x="14" y="4" fill="#ffffff" fontSize="9" fontFamily="monospace" fontWeight="bold">B+</text>
      </g>

      {/* B- */}
      <g transform="translate(14, 96)">
        <rect x="-8" y="-8" width="16" height="16" rx="2" fill="url(#enigPad)" stroke="#854d0e" strokeWidth="0.6" />
        <circle cx="0" cy="0" r="3.2" fill="#09090b" />
        <text x="14" y="4" fill="#ffffff" fontSize="9" fontFamily="monospace" fontWeight="bold">B-</text>
      </g>

      {/* OUT- */}
      <g transform="translate(14, 134)">
        <rect x="-8" y="-8" width="16" height="16" rx="2" fill="url(#enigPad)" stroke="#854d0e" strokeWidth="0.6" />
        <circle cx="0" cy="0" r="3.2" fill="#09090b" />
        <text x="14" y="4" fill="#ffffff" fontSize="9" fontFamily="monospace" fontWeight="bold">OUT-</text>
      </g>

      {/* Chip CI TC4056A SOP-8 Central */}
      <g transform={`translate(${w - 42}, 50)`}>
        <rect x="-13" y="-20" width="26" height="40" rx="1" fill="#18181b" stroke="#3f3f46" strokeWidth="0.8" />
        {/* Pinos metálicos tipo Gull-Wing */}
        {[-15, -5, 5, 15].map((py, idx) => (
          <React.Fragment key={`tp-gull-${idx}`}>
            <rect x="-17" y={py} width="4" height="2.5" fill="#cbd5e1" />
            <rect x="13" y={py} width="4" height="2.5" fill="#cbd5e1" />
          </React.Fragment>
        ))}
        <text x="0" y="3" fill="#f8fafc" fontSize="6.5" fontFamily="monospace" textAnchor="middle" transform="rotate(90 0,3)" fontWeight="bold">
          TC4056A
        </text>
      </g>

      {/* CI de Proteção DW01A + MOSFET 8205A */}
      <g transform={`translate(${w - 38}, 108)`}>
        <rect x="-10" y="-10" width="20" height="20" rx="1" fill="#18181b" stroke="#3f3f46" strokeWidth="0.8" />
        <text x="0" y="3" fill="#cbd5e1" fontSize="5.5" fontFamily="monospace" textAnchor="middle" fontWeight="bold">8205A</text>
      </g>

      {/* LEDs Indicadores de Status: CHG (Vermelho) e STDBY (Azul) */}
      <g transform={`translate(${w - 16}, 26)`}>
        <rect x="-3" y="-3" width="6" height="6" rx="0.5" fill="#991b1b" stroke="#dc2626" strokeWidth="0.5" />
        <circle cx="0" cy="0" r="1.8" fill="#ef4444" />
      </g>
      <g transform={`translate(${w - 16}, 36)`}>
        <rect x="-3" y="-3" width="6" height="6" rx="0.5" fill="#1e3a8a" stroke="#2563eb" strokeWidth="0.5" />
        <circle cx="0" cy="0" r="1.8" fill="#3b82f6" />
      </g>

      {/* Etiqueta Técnica de Identificação */}
      <g transform={`translate(${w / 2}, ${h + 18})`}>
        <rect x="-54" y="-11" width="108" height="22" rx="3" fill="#09090b" stroke="#0284c7" strokeWidth="1" />
        <text x="0" y="4" fill="#38bdf8" fontSize="9" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
          Módulo TP4056
        </text>
      </g>
    </g>
  );
}

// ============================================================================
// 3. PUSH-BUTTON R13-507 (PORCA CROMADA SEXTAVADA E 2 TERMINAIS - FOTO 1)
// ============================================================================
interface PushButtonProps {
  x: number;
  y: number;
  highlight?: boolean;
}

export function RealisticPushButtonR13507({ x, y, highlight }: PushButtonProps) {
  const cx = 75;
  const cy = 75;

  return (
    <g
      transform={`translate(${x}, ${y})`}
      className="cursor-pointer transition-transform duration-150 hover:scale-[1.01]"
    >
      {highlight && (
        <circle
          cx={cx}
          cy={cy + 15}
          r="68"
          fill="none"
          stroke="#0055ff"
          strokeWidth="2.5"
          strokeDasharray="5 3"
        />
      )}

      {/* Dois Terminais Metálicos Traseiros de Solda (2-Terminais com Furo de Olhal) */}
      <g transform="translate(50, 4)">
        <rect x="0" y="0" width="10" height="22" rx="1.5" fill="url(#brushedSteel)" stroke="#475569" strokeWidth="0.8" />
        <ellipse cx="5" cy="8" rx="2.5" ry="3.5" fill="#09090b" />
      </g>

      <g transform="translate(90, 4)">
        <rect x="0" y="0" width="10" height="22" rx="1.5" fill="url(#brushedSteel)" stroke="#475569" strokeWidth="0.8" />
        <ellipse cx="5" cy="8" rx="2.5" ry="3.5" fill="#09090b" />
      </g>

      {/* Corpo Cilíndrico Preto com Rosca de Fixação */}
      <circle cx={cx} cy={cy + 12} r="50" fill="#18181b" stroke="#09090b" strokeWidth="1.5" />
      <ellipse cx={cx} cy={cy + 25} rx="46" ry="6" fill="none" stroke="#27272a" strokeWidth="1" />
      <ellipse cx={cx} cy={cy + 35} rx="46" ry="6" fill="none" stroke="#27272a" strokeWidth="1" />

      {/* Porca Sextavada Cromada Usinada (Foto 1) */}
      <polygon
        points={`
          ${cx + 50 * Math.cos(0)},${cy + 50 * Math.sin(0)}
          ${cx + 50 * Math.cos(Math.PI / 3)},${cy + 50 * Math.sin(Math.PI / 3)}
          ${cx + 50 * Math.cos((2 * Math.PI) / 3)},${cy + 50 * Math.sin((2 * Math.PI) / 3)}
          ${cx + 50 * Math.cos(Math.PI)},${cy + 50 * Math.sin(Math.PI)}
          ${cx + 50 * Math.cos((4 * Math.PI) / 3)},${cy + 50 * Math.sin((4 * Math.PI) / 3)}
          ${cx + 50 * Math.cos((5 * Math.PI) / 3)},${cy + 50 * Math.sin((5 * Math.PI) / 3)}
        `}
        fill="#e2e8f0"
        stroke="#475569"
        strokeWidth="1.5"
      />

      {/* Arruela Metálica Lisa */}
      <circle cx={cx} cy={cy} r="40" fill="#94a3b8" stroke="#64748b" strokeWidth="1.2" />
      <circle cx={cx} cy={cy} r="36" fill="#09090b" />

      {/* Cúpula do Botão Preto Plástico de Acionamento */}
      <circle cx={cx} cy={cy} r="30" fill="#18181b" stroke="#3f3f46" strokeWidth="1.2" />
      <circle cx={cx - 5} cy={cy - 6} r="10" fill="#27272a" opacity="0.6" />

      {/* Plaqueta Técnica de Identificação: R13-507 (Foto 1) */}
      <g transform={`translate(${cx - 48}, 144)`}>
        <rect x="0" y="0" width="96" height="22" rx="3" fill="#ffffff" stroke="#09090b" strokeWidth="1.2" />
        <text x="48" y="15" fill="#dc2626" fontSize="11" fontFamily="monospace" fontWeight="900" textAnchor="middle">
          R13-507
        </text>
      </g>
      <text x={cx} y={178} fill="#64748b" fontSize="8.5" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
        2-Terminais
      </text>
    </g>
  );
}

// ============================================================================
// 4. BATERIA LI-PO 3.7V POUCH COM FITA KAPTON (FOTO 7)
// ============================================================================
interface LipoBatteryProps {
  x: number;
  y: number;
  highlight?: boolean;
}

export function RealisticLipoBattery({ x, y, highlight }: LipoBatteryProps) {
  const w = 114;
  const h = 156;

  return (
    <g
      transform={`translate(${x}, ${y})`}
      className="cursor-pointer transition-transform duration-150 hover:scale-[1.01]"
    >
      {highlight && (
        <rect
          x="-5"
          y="12"
          width={w + 10}
          height={h - 6}
          rx="9"
          fill="none"
          stroke="#0055ff"
          strokeWidth="2.5"
          strokeDasharray="5 3"
        />
      )}

      {/* Invólucro de Alumínio Laminado (Célula Pouch Prateada) */}
      <rect x="0" y="18" width={w} height={h - 18} rx="6" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="1.2" />

      {/* Selagem Térmica Periférica com Nervuras */}
      <line x1="5" y1="22" x2="5" y2={h - 5} stroke="#94a3b8" strokeWidth="1" strokeDasharray="2 2" />
      <line x1={w - 5} y1="22" x2={w - 5} y2={h - 5} stroke="#94a3b8" strokeWidth="1" strokeDasharray="2 2" />
      <line x1="8" y1={h - 5} x2={w - 8} y2={h - 5} stroke="#94a3b8" strokeWidth="1" strokeDasharray="2 2" />

      {/* Fita Kapton de Poliimida Âmbar no Topo (Foto 7) */}
      <rect x="0" y="18" width={w} height="36" fill="#d97706" opacity="0.85" stroke="#b45309" strokeWidth="0.8" />

      {/* Terminais Internos de Níquel sob a Fita */}
      <rect x="26" y="24" width="16" height="16" rx="1.5" fill="#78350f" opacity="0.6" />
      <rect x={w - 42} y="24" width="16" height="16" rx="1.5" fill="#78350f" opacity="0.6" />

      {/* Tubetes Termorretráteis Pretos na Saída dos Cabos */}
      <rect x="30" y="10" width="8" height="12" rx="1" fill="#09090b" />
      <rect x={w - 38} y="10" width="8" height="12" rx="1" fill="#09090b" />

      {/* Fio Positivo Vermelho de Silicone */}
      <path d="M 34 10 L 34 -12" fill="none" stroke="#ef4444" strokeWidth="3.2" strokeLinecap="round" />
      {/* Fio Negativo Preto de Silicone */}
      <path d={`M ${w - 34} 10 L ${w - 34} -12`} fill="none" stroke="#09090b" strokeWidth="3.2" strokeLinecap="round" />

      {/* Rótulo Técnico Impresso no Alumínio */}
      <g transform={`translate(${w / 2}, 95)`}>
        <text x="0" y="-8" fill="#0f172a" fontSize="12" fontFamily="monospace" fontWeight="900" textAnchor="middle">
          LI-PO 3.7V
        </text>
        <text x="0" y="8" fill="#334155" fontSize="10" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
          650mAh • 2.4Wh
        </text>
        <text x="0" y="24" fill="#64748b" fontSize="7.5" fontFamily="monospace" textAnchor="middle">
          RECHARGEABLE CELL
        </text>
      </g>
    </g>
  );
}

// ============================================================================
// 5. DIODO 1N4007 (CORPO CILÍNDRICO PRETO COM FAIXA PRATEADA - FOTO 3)
// ============================================================================
interface DiodeProps {
  x: number;
  y: number;
  vertical?: boolean;
  highlight?: boolean;
}

export function RealisticDiode1N4007({ x, y, vertical, highlight }: DiodeProps) {
  return (
    <g
      transform={`translate(${x}, ${y}) ${vertical ? 'rotate(90)' : ''}`}
      className="cursor-pointer transition-transform duration-150 hover:scale-[1.01]"
    >
      {highlight && (
        <rect
          x="-35"
          y="-18"
          width="142"
          height="36"
          rx="5"
          fill="none"
          stroke="#0055ff"
          strokeWidth="2.5"
          strokeDasharray="5 3"
        />
      )}

      {/* Terminais Metálicos Axiais de Cobre Estanhado */}
      <line x1="-30" y1="0" x2="0" y2="0" stroke="#94a3b8" strokeWidth="2.2" strokeLinecap="round" />
      <line x1="72" y1="0" x2="102" y2="0" stroke="#94a3b8" strokeWidth="2.2" strokeLinecap="round" />

      {/* Corpo Epóxi Preto DO-41 */}
      <rect x="0" y="-12" width="72" height="24" rx="3" fill="#18181b" stroke="#3f3f46" strokeWidth="0.8" />

      {/* Faixa Prateada de Cátodo (Foto 3) */}
      <rect x="52" y="-12" width="14" height="24" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="0.5" />

      {/* Gravação Branca do Modelo: 1N4007 */}
      <text x="24" y="4" fill="#ffffff" fontSize="9" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
        1N4007
      </text>
    </g>
  );
}

// ============================================================================
// 6. TRANSISTOR TO-92 NPN (PERFIL D-SHAPE PRETO - FOTO 4)
// ============================================================================
interface TransistorProps {
  x: number;
  y: number;
  highlight?: boolean;
}

export function RealisticTransistorTO92({ x, y, highlight }: TransistorProps) {
  return (
    <g
      transform={`translate(${x}, ${y})`}
      className="cursor-pointer transition-transform duration-150 hover:scale-[1.01]"
    >
      {highlight && (
        <rect
          x="-5"
          y="-16"
          width="54"
          height="120"
          rx="6"
          fill="none"
          stroke="#0055ff"
          strokeWidth="2.5"
          strokeDasharray="5 3"
        />
      )}

      {/* 3 Terminais Metálicos Paralelos com Passo 1.27mm / 2.54mm */}
      <line x1="8" y1="46" x2="8" y2="92" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />
      <line x1="22" y1="46" x2="22" y2="92" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />
      <line x1="36" y1="46" x2="36" y2="92" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />

      {/* Corpo Epóxi Preto em Formato D-Profile */}
      <path
        d="M 4 8 C 4 -6, 40 -6, 40 8 L 42 46 L 2 46 Z"
        fill="#18181b"
        stroke="#3f3f46"
        strokeWidth="1"
      />
      {/* Face Plana Frontal do TO-92 */}
      <rect x="4" y="14" width="36" height="30" fill="#27272a" rx="1" />
      <text x="22" y="32" fill="#ffffff" fontSize="7" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
        2N2222
      </text>

      {/* Identificação dos Pinos na Parte Inferior */}
      <text x="8" y="104" fill="#94a3b8" fontSize="7.5" fontFamily="monospace" fontWeight="bold" textAnchor="middle">C</text>
      <text x="22" y="104" fill="#94a3b8" fontSize="7.5" fontFamily="monospace" fontWeight="bold" textAnchor="middle">B</text>
      <text x="36" y="104" fill="#94a3b8" fontSize="7.5" fontFamily="monospace" fontWeight="bold" textAnchor="middle">E</text>

      <text x="22" y="-10" fill="#64748b" fontSize="8" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
        TO-92
      </text>
    </g>
  );
}

// ============================================================================
// 7. MICRO MOTOR COM CAPA RETANGULAR E ROTOR EXCÊNTRICO NIQUELADO (FOTO REAL)
// ============================================================================
interface VibrationMotorProps {
  x: number;
  y: number;
  highlight?: boolean;
}

export function RealisticVibrationMotor({ x, y, highlight }: VibrationMotorProps) {
  const cx = 36;

  return (
    <g
      transform={`translate(${x}, ${y})`}
      className="cursor-pointer transition-transform duration-150 hover:scale-[1.01]"
    >
      {highlight && (
        <rect
          x="6"
          y="2"
          width="60"
          height="180"
          rx="6"
          fill="none"
          stroke="#0055ff"
          strokeWidth="2.5"
          strokeDasharray="5 3"
        />
      )}

      {/* =====================================================================
          1. FIOS TRASEIROS VERMELHO (+) E PRETO (-) COM PONTAS ESTANHADAS
          ===================================================================== */}
      {/* Fio Preto (-) saindo do topo da capa de borracha */}
      <path
        d="M 28 46 C 26 32, 22 22, 18 10"
        fill="none"
        stroke="#09090b"
        strokeWidth="2.8"
        strokeLinecap="round"
      />
      {/* Ponta desencapada estanhada do fio preto */}
      <line x1="18" y1="10" x2="16" y2="4" stroke="#e2e8f0" strokeWidth="2" strokeLinecap="round" />
      <circle cx="16" cy="4" r="1.5" fill="#f8fafc" stroke="#94a3b8" strokeWidth="0.5" />

      {/* Fio Vermelho (+) saindo do topo da capa de borracha */}
      <path
        d="M 44 46 C 46 32, 48 22, 52 10"
        fill="none"
        stroke="#ef4444"
        strokeWidth="2.8"
        strokeLinecap="round"
      />
      {/* Ponta desencapada estanhada do fio vermelho */}
      <line x1="52" y1="10" x2="54" y2="4" stroke="#e2e8f0" strokeWidth="2" strokeLinecap="round" />
      <circle cx="54" cy="4" r="1.5" fill="#f8fafc" stroke="#94a3b8" strokeWidth="0.5" />

      {/* Anel de saída / alívio de tensão dos fios no topo da borracha */}
      <ellipse cx="28" cy="46" rx="4" ry="2" fill="#27272a" />
      <ellipse cx="44" cy="46" rx="4" ry="2" fill="#27272a" />

      {/* =====================================================================
          2. CAPA EM BORRACHA PRETA RETANGULAR ANTIVIBRAÇÃO (PARALELEPÍPEDO)
          ===================================================================== */}
      {/* Corpo da capa retangular de silicone preto fosco */}
      <rect
        x="16"
        y="46"
        width="40"
        height="70"
        rx="4"
        fill="url(#rubberBoot)"
        stroke="#3f3f46"
        strokeWidth="1.2"
      />
      {/* Chanfro / vinco de luz lateral dando volume tridimensional */}
      <line x1="18" y1="49" x2="18" y2="113" stroke="#52525b" strokeWidth="1" opacity="0.6" strokeLinecap="round" />
      {/* Sombra de profundidade no bordo direito */}
      <line x1="54" y1="49" x2="54" y2="113" stroke="#09090b" strokeWidth="1.5" strokeLinecap="round" />

      {/* =====================================================================
          3. FLANGE / MANCAL FRONTAL METÁLICO CILÍNDRICO TORNEADO
          ===================================================================== */}
      {/* Colar metálico circular escalonado emergindo da borracha */}
      <ellipse cx={cx} cy="116" rx="14" ry="4" fill="url(#collarLathe)" stroke="#64748b" strokeWidth="0.8" />
      {/* Degrau torneado do mancal */}
      <rect x={cx - 9} y="116" width="18" height="6" fill="url(#collarLathe)" stroke="#64748b" strokeWidth="0.8" />
      <ellipse cx={cx} cy="122" rx="9" ry="3" fill="#cbd5e1" stroke="#475569" strokeWidth="0.8" />

      {/* Eixo de aço inoxidável polido (Ø 1.0mm) */}
      <rect x={cx - 1.5} y="122" width="3" height="12" fill="#e2e8f0" stroke="#475569" strokeWidth="0.6" />

      {/* =====================================================================
          4. ROTOR / CONTRAPESO EXCÊNTRICO MACIÇO EM AÇO NIQUELADO (FOTO REAL)
          ===================================================================== */}
      {/* Sombra / Espessura 3D do bloco metálico (lado e fundo) */}
      <path
        d={`
          M ${cx - 20} 142
          L ${cx - 20} 146
          A 22 20 0 0 0 ${cx + 20} 146
          L ${cx + 20} 137
          L ${cx + 22} 137
          L ${cx + 22} 148
          A 24 22 0 0 1 ${cx - 22} 148
          L ${cx - 22} 142
          Z
        `}
        fill="url(#nickel3DShade)"
      />

      {/* Face Frontal Usinada do Contrapeso com perfil alado e degraus característicos */}
      <path
        d={`
          M ${cx - 7} 131
          L ${cx - 7} 136
          L ${cx - 20} 136
          L ${cx - 20} 145
          A 22 19 0 0 0 ${cx + 20} 145
          L ${cx + 20} 136
          L ${cx + 7} 136
          L ${cx + 7} 131
          Z
        `}
        fill="url(#brushedNickel)"
        stroke="#475569"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />

      {/* Ranhura e cubo central usinado de fixação do eixo */}
      <rect
        x={cx - 4.5}
        y="132"
        width="9"
        height="18"
        rx="2"
        fill="none"
        stroke="#94a3b8"
        strokeWidth="0.8"
        opacity="0.7"
      />
      {/* Orifício central de prensagem por interferência do eixo */}
      <circle cx={cx} cy="140" r="2.4" fill="#334155" stroke="#cbd5e1" strokeWidth="0.8" />
      <circle cx={cx} cy="140" r="1.1" fill="#09090b" />

      {/* Facetas de reflexo metálico escovado nas abas laterais */}
      <line x1={cx - 18} y1="139" x2={cx - 9} y2="139" stroke="#ffffff" strokeWidth="1" opacity="0.8" strokeLinecap="round" />
      <line x1={cx + 9} y1="139" x2={cx + 18} y2="139" stroke="#ffffff" strokeWidth="1" opacity="0.8" strokeLinecap="round" />
      <path
        d={`M ${cx - 15} 149 A 17 15 0 0 0 ${cx + 15} 149`}
        fill="none"
        stroke="#ffffff"
        strokeWidth="0.8"
        opacity="0.6"
      />

      {/* Etiqueta Técnica de Identificação */}
      <g transform={`translate(${cx}, 176)`}>
        <rect x="-48" y="-10" width="96" height="20" rx="3" fill="#09090b" stroke="#64748b" strokeWidth="1" />
        <text x="0" y="3.5" fill="#f8fafc" fontSize="8" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
          Motor ERM Niquelado
        </text>
      </g>
    </g>
  );
}

// ============================================================================
// 8. RESISTOR DE BASE AXIAL (1kΩ: MARROM, PRETO, VERMELHO, OURO)
// ============================================================================
export function RealisticResistor({ x, y, vertical }: { x: number; y: number; vertical?: boolean }) {
  return (
    <g transform={`translate(${x}, ${y}) ${vertical ? 'rotate(90)' : ''}`}>
      <line x1="-24" y1="0" x2="0" y2="0" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />
      <line x1="56" y1="0" x2="80" y2="0" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />

      {/* Corpo Cerâmico Bege */}
      <rect x="0" y="-7" width="56" height="14" rx="4" fill="#fef3c7" stroke="#d97706" strokeWidth="0.8" />

      {/* 4 Anéis de Código de Cores Oficial EIA (1kΩ 5%) */}
      <rect x="10" y="-7" width="4.5" height="14" fill="#78350f" />
      <rect x="20" y="-7" width="4.5" height="14" fill="#09090b" />
      <rect x="30" y="-7" width="4.5" height="14" fill="#dc2626" />
      <rect x="44" y="-7" width="4" height="14" fill="url(#solidBrass)" />
    </g>
  );
}
