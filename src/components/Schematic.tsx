import React from 'react';

export function Schematic() {
  return (
    <div className="w-full bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden mt-12">
      <div className="bg-gray-50 border-b border-gray-200 px-6 py-4">
        <h3 className="font-bold text-[#09090b] flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#0055ff]"><path d="m2 10 5-5 5 5"/><path d="M7 5v12a2 2 0 0 0 2 2h13"/></svg>
          Esquema Elétrico Original
        </h3>
        <p className="text-sm text-gray-500">Reprodução fiel do desenho de bancada</p>
      </div>
      
      {/* Container with Graph Paper Background */}
      <div className="relative w-full overflow-x-auto min-h-[500px]" style={{
        backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)',
        backgroundSize: '20px 20px',
        backgroundColor: '#f9fafb'
      }}>
        <div className="min-w-[800px] h-[550px] relative">
          <svg viewBox="0 0 800 550" className="absolute inset-0 w-full h-full text-gray-700 font-mono" stroke="currentColor" fill="none" strokeWidth="1.5">
            
            {/* =========================================================================
                PART 1: CAMPAINHA TRANSMISSORA
                ========================================================================= */}
            <text x="30" y="40" stroke="none" fill="currentColor" className="text-xl font-bold italic" style={{fontFamily: 'Caveat, cursive', opacity: 0.6}}>Campainha Transmissora</text>
            
            {/* ESP32 */}
            <rect x="50" y="60" width="80" height="140" fill="white" />
            <text x="65" y="130" stroke="none" fill="currentColor" className="text-sm" style={{fontFamily: 'Caveat, cursive'}}>ESP32</text>
            <circle cx="130" cy="80" r="3" fill="currentColor" /> <text x="110" y="84" stroke="none" fill="currentColor" className="text-[10px]">G</text>
            <circle cx="130" cy="100" r="3" fill="currentColor" /> <text x="110" y="104" stroke="none" fill="currentColor" className="text-[10px]">3</text>
            <circle cx="130" cy="120" r="3" fill="currentColor" /> <text x="110" y="124" stroke="none" fill="currentColor" className="text-[10px]">4</text>
            <circle cx="130" cy="140" r="3" fill="currentColor" /> <text x="110" y="144" stroke="none" fill="currentColor" className="text-[10px]">A</text>
            <circle cx="130" cy="160" r="3" fill="currentColor" /> <text x="110" y="164" stroke="none" fill="currentColor" className="text-[10px]">B</text>

            {/* PUSH-BUTTON */}
            <rect x="300" y="80" width="60" height="50" fill="white" />
            <text x="305" y="110" stroke="none" fill="currentColor" className="text-[10px]" style={{fontFamily: 'Caveat, cursive'}}>PUSH-BOTON</text>
            <circle cx="300" cy="95" r="3" fill="currentColor" /> <text x="305" y="99" stroke="none" fill="currentColor" className="text-[10px]">A</text>
            <circle cx="300" cy="115" r="3" fill="currentColor" /> <text x="305" y="119" stroke="none" fill="currentColor" className="text-[10px]">B</text>
            {/* Push Button external knob */}
            <rect x="360" y="95" width="10" height="20" fill="white" />

            {/* WIRES TX */}
            <polyline points="130,80 250,80 250,95 300,95" />
            <polyline points="130,160 270,160 270,115 300,115" />

            {/* Divider */}
            <line x1="0" y1="240" x2="800" y2="240" stroke="currentColor" className="opacity-20" />

            {/* =========================================================================
                PART 2: PULSEIRA
                ========================================================================= */}
            <text x="30" y="270" stroke="none" fill="currentColor" className="text-xl font-bold italic" style={{fontFamily: 'Caveat, cursive', opacity: 0.6}}>Pulseira</text>
            
            {/* BATERIA */}
            <rect x="50" y="300" width="80" height="100" fill="white" />
            <text x="60" y="340" stroke="none" fill="currentColor" className="text-xs" style={{fontFamily: 'Caveat, cursive'}}>BATERIA</text>
            <text x="65" y="355" stroke="none" fill="currentColor" className="text-xs" style={{fontFamily: 'Caveat, cursive'}}>LI-PO</text>
            <text x="70" y="370" stroke="none" fill="currentColor" className="text-xs" style={{fontFamily: 'Caveat, cursive'}}>3,7V</text>
            <circle cx="65" cy="300" r="3" fill="currentColor" /> <text x="55" y="290" stroke="none" fill="currentColor" className="text-[10px]">B+</text>
            <circle cx="115" cy="300" r="3" fill="currentColor" /> <text x="105" y="290" stroke="none" fill="currentColor" className="text-[10px]">B-</text>

            {/* TP4056 */}
            <rect x="220" y="320" width="90" height="70" fill="white" />
            <text x="235" y="345" stroke="none" fill="currentColor" className="text-[10px]" style={{fontFamily: 'Caveat, cursive'}}>MÓDULO</text>
            <text x="250" y="360" stroke="none" fill="currentColor" className="text-[10px]" style={{fontFamily: 'Caveat, cursive'}}>DE</text>
            <text x="225" y="375" stroke="none" fill="currentColor" className="text-[9px]" style={{fontFamily: 'Caveat, cursive'}}>CARREGAMENTO</text>
            <circle cx="220" cy="335" r="3" fill="currentColor" /> <text x="225" y="339" stroke="none" fill="currentColor" className="text-[9px]">B-</text>
            <circle cx="220" cy="375" r="3" fill="currentColor" /> <text x="225" y="379" stroke="none" fill="currentColor" className="text-[9px]">B+</text>
            <circle cx="310" cy="335" r="3" fill="currentColor" /> <text x="290" y="339" stroke="none" fill="currentColor" className="text-[9px]">O-</text>
            <circle cx="310" cy="375" r="3" fill="currentColor" /> <text x="290" y="379" stroke="none" fill="currentColor" className="text-[9px]">O+</text>

            {/* WIRES Bateria -> TP4056 */}
            {/* B- to B- */}
            <polyline points="115,300 115,290 190,290 190,335 220,335" />
            {/* B+ to B+ */}
            <polyline points="65,300 65,280 180,280 180,375 220,375" />

            {/* ESP32 C3 */}
            <rect x="400" y="290" width="80" height="150" fill="white" />
            <text x="415" y="360" stroke="none" fill="currentColor" className="text-sm" style={{fontFamily: 'Caveat, cursive'}}>ESP32</text>
            <text x="425" y="375" stroke="none" fill="currentColor" className="text-sm" style={{fontFamily: 'Caveat, cursive'}}>C3</text>
            <circle cx="400" cy="305" r="3" fill="currentColor" /> <text x="405" y="309" stroke="none" fill="currentColor" className="text-[10px]">5V</text>
            <circle cx="400" cy="325" r="3" fill="currentColor" /> <text x="405" y="329" stroke="none" fill="currentColor" className="text-[10px]">G</text>
            <circle cx="400" cy="345" r="3" fill="currentColor" /> <text x="405" y="349" stroke="none" fill="currentColor" className="text-[10px]">3</text>
            <circle cx="400" cy="365" r="3" fill="currentColor" /> <text x="405" y="369" stroke="none" fill="currentColor" className="text-[10px]">R1</text>
            
            <circle cx="400" cy="415" r="3" fill="currentColor" /> <text x="405" y="419" stroke="none" fill="currentColor" className="text-[10px]">10</text>
            <circle cx="480" cy="375" r="3" fill="currentColor" /> <text x="465" y="379" stroke="none" fill="currentColor" className="text-[10px]">TX</text>

            {/* WIRES TP4056 -> ESP32 */}
            {/* O- to G */}
            <polyline points="310,335 340,335 340,325 400,325" />
            {/* O+ to 5V */}
            <polyline points="310,375 350,375 350,305 400,305" />

            {/* TRANSISTOR */}
            <rect x="530" y="400" width="70" height="45" fill="white" />
            <text x="535" y="425" stroke="none" fill="currentColor" className="text-[10px]" style={{fontFamily: 'Caveat, cursive'}}>TRANSISTOR</text>
            <circle cx="530" cy="410" r="3" fill="currentColor" /> <text x="535" y="414" stroke="none" fill="currentColor" className="text-[8px]">E</text>
            <circle cx="530" cy="430" r="3" fill="currentColor" /> <text x="535" y="434" stroke="none" fill="currentColor" className="text-[8px]">B</text>
            <circle cx="600" cy="410" r="3" fill="currentColor" /> <text x="590" y="414" stroke="none" fill="currentColor" className="text-[8px]">C</text>

            {/* WIRES ESP32 -> TRANSISTOR */}
            {/* TX or 10 to Transistor B */}
            <polyline points="400,415 500,415 500,430 530,430" />
            {/* G to Transistor E */}
            <polyline points="400,325 380,325 380,480 515,480 515,410 530,410" />

            {/* MOTOR */}
            <rect x="650" y="400" width="60" height="50" fill="white" />
            <text x="660" y="430" stroke="none" fill="currentColor" className="text-[10px]" style={{fontFamily: 'Caveat, cursive'}}>MOTOR</text>
            <circle cx="650" cy="410" r="3" fill="currentColor" />
            <circle cx="650" cy="430" r="3" fill="currentColor" />

            {/* WIRES Transistor -> Motor */}
            <polyline points="600,410 650,410" />
            {/* Motor to 3V on ESP32 */}
            <polyline points="650,430 630,430 630,460 490,460 490,345 400,345" />

          </svg>
        </div>
      </div>
    </div>
  );
}
