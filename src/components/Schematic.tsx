import React, { useState } from 'react';
import { Maximize2, X } from 'lucide-react';

function SchematicSvg() {
  return (
    <svg viewBox="0 0 860 620" className="w-full h-full text-[#222222] select-none block" stroke="currentColor" fill="none">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@500;700&display=swap');
          .handwritten {
            font-family: 'Caveat', cursive, sans-serif;
            font-weight: 700;
          }
        `}
      </style>

      <defs>
        {/* Millimeter Graph Paper Pattern */}
        <pattern id="smallGrid" width="10" height="10" patternUnits="userSpaceOnUse">
          <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#eeb2a3" strokeWidth="0.5" opacity="0.6" />
        </pattern>
        <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
          <rect width="50" height="50" fill="url(#smallGrid)" />
          <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#e08e79" strokeWidth="1" opacity="0.7" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" stroke="none" />

      {/* Global SVG Styles for Schematic */}
      <g strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        
        {/* =========================================================================
            SECTION 1: PULSEIRA (LEFT)
            ========================================================================= */}
        <text x="25" y="320" className="handwritten" fontSize="30" stroke="none" fill="#000000" opacity="0.25" textAnchor="middle" transform="rotate(-90 25,320)" letterSpacing="4">PULSEIRA</text>

        {/* BATERIA LI-PO */}
        <rect x="70" y="30" width="80" height="70" fill="#ffffff" />
        <text x="110" y="50" className="handwritten" fontSize="15" stroke="none" fill="currentColor" textAnchor="middle">BATERIA</text>
        <text x="110" y="68" className="handwritten" fontSize="15" stroke="none" fill="currentColor" textAnchor="middle">LI-PO</text>
        <text x="110" y="86" className="handwritten" fontSize="15" stroke="none" fill="currentColor" textAnchor="middle">3,7V</text>
        
        <circle cx="150" cy="50" r="3" fill="currentColor" />
        <text x="135" y="55" className="handwritten" fontSize="13" stroke="none" fill="currentColor">B+</text>
        
        <circle cx="150" cy="80" r="3" fill="currentColor" />
        <text x="135" y="85" className="handwritten" fontSize="13" stroke="none" fill="currentColor">B-</text>

        {/* MÓDULO DE CARREGAMENTO TP4056 */}
        <rect x="60" y="125" width="110" height="75" fill="#ffffff" />
        <text x="85" y="148" className="handwritten" fontSize="12" stroke="none" fill="currentColor" textAnchor="middle">MÓDULO</text>
        <text x="85" y="165" className="handwritten" fontSize="12" stroke="none" fill="currentColor" textAnchor="middle">DE</text>
        <text x="105" y="190" className="handwritten" fontSize="11" stroke="none" fill="currentColor" textAnchor="middle">CARREGAMENTO</text>
        
        {/* TP4056 Inner Chip */}
        <rect x="120" y="135" width="40" height="50" fill="#ffffff" />
        <text x="140" y="160" className="handwritten" fontSize="13" stroke="none" fill="currentColor" textAnchor="middle" transform="rotate(90 140,160)">TP4056</text>
        
        <circle cx="160" cy="140" r="2.5" fill="currentColor" />
        <text x="168" y="144" className="handwritten" fontSize="11" stroke="none" fill="currentColor">O+</text>
        
        <circle cx="160" cy="152" r="2.5" fill="currentColor" />
        <text x="168" y="156" className="handwritten" fontSize="11" stroke="none" fill="currentColor">B+</text>
        
        <circle cx="160" cy="164" r="2.5" fill="currentColor" />
        <text x="168" y="168" className="handwritten" fontSize="11" stroke="none" fill="currentColor">B-</text>
        
        <circle cx="160" cy="176" r="2.5" fill="currentColor" />
        <text x="168" y="180" className="handwritten" fontSize="11" stroke="none" fill="currentColor">O-</text>

        {/* Wires Battery -> TP4056 */}
        <polyline points="150,50 210,50 210,152 160,152" />
        <polyline points="150,80 190,80 190,164 160,164" />

        {/* ESP32 C3 (Pulseira) - Exactly positioned with metallic chip and pin header */}
        <rect x="235" y="240" width="135" height="95" fill="#ffffff" />
        {/* Metallic center chip */}
        <rect x="255" y="258" width="45" height="45" fill="#f8fafc" strokeWidth="1.5" />
        {/* Text ESP32 C3 beside chip */}
        <text x="220" y="278" className="handwritten" fontSize="18" stroke="none" fill="currentColor" textAnchor="middle" transform="rotate(-90 220,278)">ESP32</text>
        <text x="220" y="302" className="handwritten" fontSize="16" stroke="none" fill="currentColor" textAnchor="middle" transform="rotate(-90 220,302)">C3</text>
        
        {/* Top / Right Pads */}
        <circle cx="320" cy="248" r="2" fill="none" strokeWidth="1" />
        <circle cx="335" cy="248" r="2" fill="none" strokeWidth="1" />
        <circle cx="350" cy="248" r="2" fill="none" strokeWidth="1" />
        
        {/* Bottom Pads */}
        <circle cx="260" cy="326" r="2" fill="none" strokeWidth="1" />
        <circle cx="275" cy="326" r="2" fill="none" strokeWidth="1" />
        <circle cx="290" cy="326" r="2" fill="none" strokeWidth="1" />
        <circle cx="305" cy="326" r="2" fill="none" strokeWidth="1" />
        <circle cx="320" cy="326" r="2" fill="none" strokeWidth="1" />
        <circle cx="335" cy="326" r="2" fill="none" strokeWidth="1" />
        <circle cx="350" cy="326" r="2" fill="none" strokeWidth="1" />

        {/* Right Connected Pins */}
        <circle cx="360" cy="254" r="3" fill="currentColor" />
        <text x="340" y="259" className="handwritten" fontSize="14" stroke="none" fill="currentColor">5V</text>
        
        <circle cx="360" cy="274" r="3" fill="currentColor" />
        <text x="345" y="279" className="handwritten" fontSize="14" stroke="none" fill="currentColor">G</text>
        
        <circle cx="360" cy="294" r="3" fill="currentColor" />
        <text x="345" y="299" className="handwritten" fontSize="14" stroke="none" fill="currentColor">3</text>
        
        <circle cx="360" cy="314" r="3" fill="currentColor" />
        <text x="340" y="319" className="handwritten" fontSize="14" stroke="none" fill="currentColor">P5</text>

        {/* RESISTOR R1 (Vertical, to the left of ESP32) */}
        <rect x="170" y="255" width="18" height="38" fill="#ffffff" />
        <text x="156" y="278" className="handwritten" fontSize="14" stroke="none" fill="currentColor" textAnchor="middle">R1</text>

        {/* DIODE D1 (Vertical, above Motor) */}
        <rect x="90" y="340" width="18" height="38" fill="#ffffff" />
        <text x="76" y="363" className="handwritten" fontSize="14" stroke="none" fill="currentColor" textAnchor="middle">D1</text>

        {/* MOTOR (Square with round internal disk) */}
        <rect x="75" y="445" width="60" height="60" fill="#ffffff" />
        <circle cx="105" cy="475" r="22" fill="#f8fafc" strokeWidth="1.5" />
        <text x="60" y="480" className="handwritten" fontSize="16" stroke="none" fill="currentColor" textAnchor="middle" transform="rotate(-90 60,480)">MOTOR</text>
        
        <circle cx="95" cy="445" r="2.5" fill="currentColor" />
        <circle cx="120" cy="445" r="2.5" fill="currentColor" />

        {/* TRANSISTOR (Vertical, positioned below ESP32) */}
        <rect x="215" y="345" width="40" height="110" fill="#ffffff" />
        <text x="238" y="405" className="handwritten" fontSize="16" stroke="none" fill="currentColor" textAnchor="middle" transform="rotate(-90 238,405)">TRANSISTOR</text>
        
        {/* Transistor connection terminals */}
        <circle cx="215" cy="365" r="3" fill="currentColor" /> {/* Base */}
        <circle cx="215" cy="420" r="3" fill="currentColor" /> {/* Collector */}
        <circle cx="235" cy="455" r="3" fill="currentColor" /> {/* Emitter */}

        {/* PULSEIRA WIRING - 100% FAITHFUL TO THE BENCH DRAWING */}
        
        {/* 5V to TP4056 O+ */}
        <polyline points="360,254 395,254 395,140 160,140" />

        {/* G to TP4056 O- and loop connector */}
        <polyline points="360,274 380,274 380,176 160,176" />
        
        {/* Pino 3 -> Loops over ESP32 -> D1 & Motor Top */}
        <polyline points="360,294 370,294 370,225 100,225 100,340" />
        <polyline points="100,378 100,430 95,430 95,445" />

        {/* Pino P5/Sinal -> Loops over ESP32 -> Resistor R1 -> Transistor Base */}
        <polyline points="360,314 365,314 365,235 179,235 179,255" />
        <polyline points="179,293 179,365 215,365" />

        {/* Transistor Collector -> Motor Bottom & D1 Bottom */}
        <polyline points="215,420 120,420 120,445" />
        <polyline points="120,420 108,420 108,378" />

        {/* Ground Loop from Transistor Emitter around perimeter back to G */}
        <polyline points="235,455 235,530 45,530 45,215 350,215 350,274 360,274" />


        {/* =========================================================================
            SECTION 2: CAMPAINHA TRANSMISSORA (RIGHT)
            ========================================================================= */}
        <text x="825" y="320" className="handwritten" fontSize="30" stroke="none" fill="#000000" opacity="0.25" textAnchor="middle" transform="rotate(-90 825,320)" letterSpacing="2">Campainha Transmissora</text>

        {/* ESP32 C3 (Transmissor) */}
        <rect x="580" y="100" width="85" height="150" fill="#ffffff" />
        <rect x="600" y="145" width="45" height="45" fill="#f8fafc" strokeWidth="1.5" />
        <text x="622" y="128" className="handwritten" fontSize="20" stroke="none" fill="currentColor" textAnchor="middle">ESP32 C3</text>
        
        {/* Left dummy pins */}
        <circle cx="580" cy="120" r="1.5" fill="currentColor" stroke="none" />
        <circle cx="580" cy="135" r="1.5" fill="currentColor" stroke="none" />
        <circle cx="580" cy="150" r="1.5" fill="currentColor" stroke="none" />
        <circle cx="580" cy="165" r="1.5" fill="currentColor" stroke="none" />
        <circle cx="580" cy="180" r="1.5" fill="currentColor" stroke="none" />
        <circle cx="580" cy="195" r="1.5" fill="currentColor" stroke="none" />
        <circle cx="580" cy="210" r="1.5" fill="currentColor" stroke="none" />
        <circle cx="580" cy="225" r="1.5" fill="currentColor" stroke="none" />
        
        {/* Right Pins */}
        <circle cx="665" cy="150" r="3" fill="currentColor" />
        <text x="650" y="155" className="handwritten" fontSize="14" stroke="none" fill="currentColor">5</text>
        
        <circle cx="665" cy="175" r="3" fill="currentColor" />
        <text x="650" y="180" className="handwritten" fontSize="14" stroke="none" fill="currentColor">G</text>
        
        <circle cx="665" cy="200" r="3" fill="currentColor" />
        <text x="650" y="205" className="handwritten" fontSize="14" stroke="none" fill="currentColor">3</text>

        {/* PUSH-BOTON */}
        <rect x="685" y="360" width="60" height="40" fill="#ffffff" />
        <rect x="695" y="400" width="40" height="12" fill="#ffffff" /> {/* Botão físico */}
        <text x="668" y="380" className="handwritten" fontSize="15" stroke="none" fill="currentColor" textAnchor="middle" transform="rotate(-90 668,380)">PUSH-BOTON</text>
        
        <circle cx="695" cy="360" r="3" fill="currentColor" />
        <text x="695" y="350" className="handwritten" fontSize="14" stroke="none" fill="currentColor" textAnchor="middle">A</text>
        
        <circle cx="735" cy="360" r="3" fill="currentColor" />
        <text x="735" y="350" className="handwritten" fontSize="14" stroke="none" fill="currentColor" textAnchor="middle">B</text>

        {/* CAMPAINHA WIRING */}
        <polyline points="665,200 695,200 695,360" />
        <polyline points="665,175 735,175 735,360" />

      </g>
    </svg>
  );
}

export function Schematic() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="w-full bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden mt-12 md:mt-24">
      <div className="bg-gray-50 border-b border-gray-200 px-4 sm:px-6 md:px-8 py-4 sm:py-5 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h3 className="font-bold text-[#09090b] flex items-center gap-2.5 sm:gap-3 text-base sm:text-lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#0055ff] shrink-0"><path d="m2 10 5-5 5 5"/><path d="M7 5v12a2 2 0 0 0 2 2h13"/></svg>
            Esquema Elétrico Autêntico
          </h3>
          <p className="text-xs sm:text-sm text-gray-500 mt-0.5 font-medium">Reprodução fiel do desenho de bancada original dos pesquisadores.</p>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-gray-200 hover:border-blue-400 hover:text-[#0055ff] text-xs font-semibold text-gray-700 shadow-xs transition-all cursor-pointer"
          title="Ver em tela cheia com zoom"
        >
          <Maximize2 className="w-3.5 h-3.5 text-[#0055ff]" />
          <span>Tela cheia</span>
        </button>
      </div>
      
      {/* Responsive Container: Fits 100% width on mobile without horizontal scrolling */}
      <div className="relative w-full bg-[#fdfaf9] p-2 sm:p-4 md:p-6 flex items-center justify-center">
        <div className="w-full max-w-[860px] aspect-[860/620] relative rounded-xl overflow-hidden shadow-inner border border-rose-100/60">
          <SchematicSvg />
        </div>
      </div>

      {/* Modal for full screen view / close inspection */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 md:p-6"
          onClick={() => setIsModalOpen(false)}
        >
          <div 
            className="relative w-full max-w-5xl bg-[#fdfaf9] rounded-2xl overflow-hidden shadow-2xl border border-white/20 max-h-[95vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-4 py-3 bg-gray-900 text-white border-b border-gray-800">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                <span className="font-semibold text-sm">Esquema Elétrico — Visualização Expandida</span>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1.5 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition-colors cursor-pointer"
                aria-label="Fechar"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            
            <div className="overflow-auto p-2 sm:p-6 flex items-center justify-center flex-1">
              <div className="w-full min-w-[700px] md:min-w-full aspect-[860/620]">
                <SchematicSvg />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
