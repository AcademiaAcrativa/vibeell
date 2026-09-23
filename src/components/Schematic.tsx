import React, { useState } from 'react';
import {
  Maximize2,
  X,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Wrench
} from 'lucide-react';
import {
  CircuitDefs,
  RealisticEsp32C3,
  RealisticTp4056,
  RealisticPushButtonR13507,
  RealisticLipoBattery,
  RealisticTransistorTO92,
  RealisticVibrationMotor,
  RealisticResistor,
  RealSolderJoint
} from './RealisticCircuitComponents';

// ============================================================================
// VISTA 1: BANCADA TÉCNICA CAD / WOKWI (PRECISA, SÓBRIA E REALISTA)
// ============================================================================
function TechnicalCadWorkbenchView({
  isDark
}: {
  isDark: boolean;
}) {
  const bgColor = isDark ? '#111318' : '#f8fafc';
  const gridPattern = isDark ? 'url(#labGridMajor)' : 'url(#lightGridMajor)';
  const frameColor = isDark ? '#334155' : '#cbd5e1';
  const headerTextColor = isDark ? '#94a3b8' : '#64748b';

  return (
    <svg
      viewBox="0 0 1020 720"
      className="w-full h-full select-none block"
      style={{ background: bgColor }}
    >
      <CircuitDefs />

      {/* Grade Milimétrica de Laboratório */}
      <rect width="100%" height="100%" fill={bgColor} />
      <rect width="100%" height="100%" fill={gridPattern} />

      {/* Delimitação dos Módulos Funcionais */}
      {/* Bloco Receptor */}
      <rect x="25" y="25" width="580" height="670" rx="4" fill="none" stroke={frameColor} strokeWidth="1" strokeDasharray="4 3" />
      <text x="45" y="48" fill={headerTextColor} fontSize="11" fontFamily="monospace" fontWeight="bold" letterSpacing="0.8">
        MÓDULO RECEPTOR — PULSEIRA HÁPTICA (RX)
      </text>

      {/* Bloco Transmissor */}
      <rect x="635" y="25" width="360" height="670" rx="4" fill="none" stroke={frameColor} strokeWidth="1" strokeDasharray="4 3" />
      <text x="655" y="48" fill={headerTextColor} fontSize="11" fontFamily="monospace" fontWeight="bold" letterSpacing="0.8">
        MÓDULO TRANSMISSOR — CAMPAINHA (TX)
      </text>

      {/* Conexão Sem Fio ESP-NOW 2.4GHz */}
      <g transform="translate(560, 195)">
        <line x1="15" y1="0" x2="95" y2="0" stroke="#0284c7" strokeWidth="2" strokeDasharray="4 3" />
        <polygon points="95,-3 102,0 95,3" fill="#0284c7" />
        <polygon points="15,-3 8,0 15,3" fill="#0284c7" />
        <text x="55" y="-8" fill="#0284c7" fontSize="9.5" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
          ESP-NOW RF
        </text>
        <text x="55" y="16" fill={headerTextColor} fontSize="7.5" fontFamily="monospace" textAnchor="middle">
          Latência &lt; 10ms
        </text>
      </g>

      {/* =====================================================================
          FIAÇÃO REALISTA LIMPA (SEM FALSOS BRILHOS, COM CURVAS TÉCNICAS E SOLDAS)
          ===================================================================== */}
      <g>
        {/* 1. Fio Vermelho da Bateria Li-Po -> Pad B+ do TP4056 */}
        <path
          d="M 84 98 C 84 55, 230 45, 244 138"
          fill="none"
          stroke="#ef4444"
          strokeWidth="3.2"
          strokeLinecap="round"
        />

        {/* 2. Fio Preto da Bateria Li-Po -> Pad B- do TP4056 */}
        <path
          d="M 128 98 C 128 75, 222 75, 244 176"
          fill="none"
          stroke="#09090b"
          strokeWidth="3.2"
          strokeLinecap="round"
        />

        {/* 3. Saída OUT+ do TP4056 -> Linha de 5V do ESP32 e Alimentação do Motor */}
        <path
          d="M 244 100 C 265 100, 290 120, 290 280 L 290 367 L 330 367"
          fill="none"
          stroke="#ef4444"
          strokeWidth="3"
          strokeLinecap="round"
        />
        {/* Alimentação direta ao fio vermelho do motor */}
        <path
          d="M 244 100 C 200 100, 119 250, 119 414"
          fill="none"
          stroke="#ef4444"
          strokeWidth="2.8"
          strokeLinecap="round"
        />

        {/* 4. Saída OUT- (GND Geral) do TP4056 -> Pino G (GND) do ESP32 e Emissor do Transistor */}
        <path
          d="M 244 214 C 275 214, 305 240, 305 387 L 330 387"
          fill="none"
          stroke="#09090b"
          strokeWidth="3"
          strokeLinecap="round"
        />
        {/* Emissor (E) do Transistor ao GND Geral */}
        <path
          d="M 305 387 L 305 562 L 246 562 L 246 574"
          fill="none"
          stroke="#09090b"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* 5. Pino 8 (IO8) do ESP32 RX -> Resistor 1kΩ (R1) -> Base (B) do Transistor TO-92 */}
        {/* Sai exatamente do pino IO8 no lado direito do ESP32 (x=456, y=427) conforme a folha milimetrada */}
        <path
          d="M 456 427 C 490 427, 490 460, 370 460 L 270 460 L 270 472"
          fill="none"
          stroke="#0284c7"
          strokeWidth="2.8"
          strokeLinecap="round"
        />
        <path
          d="M 270 528 L 270 550 L 232 550 L 232 574"
          fill="none"
          stroke="#0284c7"
          strokeWidth="2.8"
          strokeLinecap="round"
        />

        {/* 6. Coletor (C) do Transistor -> Jumper Amarelo ligado direto ao fio preto do motor */}
        <path
          d="M 218 574 L 218 530 C 218 470, 81 470, 81 414"
          fill="none"
          stroke="#eab308"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* 7. Fios do Transmissor (TX): Push-Button ligado entre G (GND) e Pino 3 (IO3) */}
        {/* Fio Branco: Terminal A ao pino G (GND) do ESP32 TX (y=157) */}
        <path
          d="M 788 402 C 788 280, 700 240, 700 157 L 730 157"
          fill="none"
          stroke={isDark ? '#e2e8f0' : '#475569'}
          strokeWidth="3"
          strokeLinecap="round"
        />
        {/* Fio Laranja: Terminal B ao Pino 3 (IO3) do ESP32 TX (y=257) */}
        {/* Nota: Pino 3V3 (y=177) e IO0 (y=197) permanecem completamente livres */}
        <path
          d="M 822 402 C 822 340, 690 320, 690 257 L 730 257"
          fill="none"
          stroke="#ea580c"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </g>

      {/* Pontos de Solda em Estanho nas Junções Físicas Exatas */}
      <RealSolderJoint cx={244} cy={138} r={4} /> {/* TP4056 B+ */}
      <RealSolderJoint cx={244} cy={176} r={4} /> {/* TP4056 B- */}
      <RealSolderJoint cx={244} cy={100} r={4} /> {/* TP4056 OUT+ */}
      <RealSolderJoint cx={244} cy={214} r={4} /> {/* TP4056 OUT- */}
      <RealSolderJoint cx={330} cy={367} r={3.8} /> {/* ESP32 RX: 5V */}
      <RealSolderJoint cx={330} cy={387} r={3.8} /> {/* ESP32 RX: G (GND) */}
      <RealSolderJoint cx={456} cy={427} r={3.8} /> {/* ESP32 RX: Pino 8 (IO8) - Saída de Sinal */}
      <RealSolderJoint cx={218} cy={574} r={3.5} /> {/* Transistor C (Coletor) */}
      <RealSolderJoint cx={232} cy={574} r={3.5} /> {/* Transistor B (Base via R1) */}
      <RealSolderJoint cx={246} cy={574} r={3.5} /> {/* Transistor E (Emissor ao GND) */}
      <RealSolderJoint cx={788} cy={402} r={4} />   {/* Push-Boton Terminal A */}
      <RealSolderJoint cx={822} cy={402} r={4} />   {/* Push-Boton Terminal B */}
      <RealSolderJoint cx={730} cy={157} r={3.8} /> {/* ESP32 TX: Pino G (GND) */}
      <RealSolderJoint cx={730} cy={257} r={3.8} /> {/* ESP32 TX: Pino 3 (IO3) */}
      <RealSolderJoint cx={119} cy={414} r={3.2} /> {/* Conexão Fio Vermelho (+) do Motor */}
      <RealSolderJoint cx={81} cy={414} r={3.2} />  {/* Conexão Fio Preto (-) do Motor */}

      {/* Anotações Técnicas de Fiação no Layout */}
      <g fontSize="8" fontFamily="monospace" fontWeight="bold">
        <text x="135" y="70" fill="#ef4444">B+ (3.7V)</text>
        <text x="145" y="125" fill={headerTextColor}>B- (GND)</text>
        <text x="250" y="356" fill="#ef4444">5V / VCC</text>
        <text x="256" y="396" fill={headerTextColor}>G (GND)</text>
        <text x="466" y="420" fill="#0284c7">Sinal Motor (Pino 8)</text>
        <text x="80" y="380" fill="#ea580c">Fio Motor (-)</text>
        <text x="125" y="380" fill="#ef4444">Fio Motor (+)</text>
        <text x="130" y="490" fill="#ca8a04">Jumper Amarelo (Coletor)</text>
        <text x="830" y="340" fill="#ea580c">Pino 3 (Sinal)</text>
        <text x="735" y="325" fill={headerTextColor}>Pino G (GND)</text>
      </g>

      {/* =====================================================================
          COMPONENTES FÍSICOS (ESTILO WOKWI / CAD AUTÊNTICO)
          ===================================================================== */}
      
      {/* 1. Bateria Li-Po 3.7V com Fita Kapton */}
      <g>
        <RealisticLipoBattery x={50} y={80} highlight={false} />
      </g>

      {/* 2. Módulo TP4056 USB-C Azul */}
      <g>
        <RealisticTp4056 x={230} y={80} highlight={false} />
      </g>

      {/* 3. ESP32-C3 SuperMini RX */}
      <g>
        <RealisticEsp32C3
          x={330}
          y={340}
          label="ESP32-C3 RX"
          highlight={false}
          dark={isDark}
        />
      </g>

      {/* 4. Micro Motor Vibratório */}
      <g>
        <RealisticVibrationMotor
          x={65}
          y={410}
          highlight={false}
        />
      </g>

      {/* 6. Resistor 1kΩ */}
      <g>
        <RealisticResistor x={270} y={472} vertical={true} />
        <text x="290" y="502" fill="#ca8a04" fontSize="8" fontFamily="monospace" fontWeight="bold">
          1kΩ (R1)
        </text>
      </g>

      {/* 7. Transistor TO-92 NPN */}
      <g>
        <RealisticTransistorTO92
          x={210}
          y={574}
          highlight={false}
        />
      </g>

      {/* 8. ESP32-C3 SuperMini TX */}
      <g>
        <RealisticEsp32C3
          x={730}
          y={110}
          label="ESP32-C3 TX"
          isTransmitter={true}
          highlight={false}
          dark={isDark}
        />
      </g>

      {/* 9. Botão Push-Button R13-507 */}
      <g>
        <RealisticPushButtonR13507
          x={745}
          y={390}
          highlight={false}
        />
      </g>
    </svg>
  );
}

// ============================================================================
// VISTA 2: ESQUEMA TÉCNICO IDÊNTICO À FOLHA MILIMETRADA (100% CONFORME DESENHO)
// ============================================================================
function TechnicalSchematicSvg() {
  return (
    <svg viewBox="0 0 920 640" className="w-full h-full select-none block text-[#1e293b]" stroke="currentColor" fill="none">
      <defs>
        {/* Padrão de Grade Milimétrica 1mm (fino) */}
        <pattern id="graphMmFine" width="5" height="5" patternUnits="userSpaceOnUse">
          <path d="M 5 0 L 0 0 0 5" fill="none" stroke="#e8c8b0" strokeWidth="0.45" strokeOpacity="0.6" />
        </pattern>
        {/* Padrão de Grade Milimétrica 5mm (médio) */}
        <pattern id="graphMmMedium" width="25" height="25" patternUnits="userSpaceOnUse">
          <rect width="25" height="25" fill="url(#graphMmFine)" />
          <path d="M 25 0 L 0 0 0 25" fill="none" stroke="#d5a687" strokeWidth="0.8" strokeOpacity="0.75" />
        </pattern>
        {/* Padrão de Grade Milimétrica 10mm (principal) */}
        <pattern id="graphMmBig" width="50" height="50" patternUnits="userSpaceOnUse">
          <rect width="50" height="50" fill="url(#graphMmMedium)" />
          <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#bc8762" strokeWidth="1.2" strokeOpacity="0.9" />
        </pattern>
      </defs>

      {/* Fundo de Papel Milimetrado Real */}
      <rect width="100%" height="100%" fill="#fbf8f2" stroke="none" />
      <rect width="100%" height="100%" fill="url(#graphMmBig)" stroke="none" />

      {/* Marcações de Borda do Papel Milimetrado (Escala) */}
      <g stroke="#9a6e4d" strokeWidth="1" opacity="0.6" fontSize="9" fontFamily="monospace" fill="#875936">
        <line x1="15" y1="15" x2="905" y2="15" />
        <line x1="15" y1="625" x2="905" y2="625" />
        <line x1="15" y1="15" x2="15" y2="625" />
        <line x1="905" y1="15" x2="905" y2="625" />
        <text x="888" y="70" textAnchor="middle">150</text>
        <text x="888" y="200" textAnchor="middle">100</text>
        <text x="888" y="325" textAnchor="middle">50</text>
        <text x="888" y="475" textAnchor="middle">100</text>
        <text x="888" y="600" textAnchor="middle">150</text>
        <text x="210" y="620" textAnchor="middle">200</text>
        <text x="460" y="620" textAnchor="middle">150</text>
        <text x="610" y="620" textAnchor="middle">100</text>
        <text x="760" y="620" textAnchor="middle">50</text>
      </g>

      {/* LINHA DE DIVISÃO HORIZONTAL ENTRE AS DUAS ETAPAS (CAMPAINHA E PULSEIRA) */}
      <line x1="15" y1="285" x2="905" y2="285" stroke="#334155" strokeWidth="2.2" />

      <g stroke="#18181b" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fontFamily="'Courier New', Courier, monospace">
        
        {/* ===================================================================
            PARTE 1 (SUPERIOR): CAMPAINHA TRANSMISSORA
            =================================================================== */}
        
        {/* Título: Campainha Transmissora */}
        <text
          x="45"
          y="42"
          fontSize="17"
          fontWeight="bold"
          fill="#0f172a"
          stroke="none"
          fontStyle="italic"
        >
          Campainha Transmissora
        </text>

        {/* ESP32 C3 (Transmissor) */}
        <g transform="translate(80, 60)">
          {/* Caixa Externa do Módulo */}
          <rect x="0" y="0" width="115" height="185" fill="#fdfbf7" stroke="#18181b" strokeWidth="2" />

          {/* Barra de Pinos Esquerda (9 Pinos) */}
          {[18, 36, 54, 72, 90, 108, 126, 144, 162].map((py, idx) => (
            <circle key={idx} cx="12" cy={py} r="4.5" fill="#ffffff" stroke="#18181b" strokeWidth="1.6" />
          ))}

          {/* Chip Central ESP32 C3 */}
          <rect x="36" y="80" width="54" height="58" fill="#ffffff" stroke="#18181b" strokeWidth="1.8" />
          <text x="63" y="103" fontSize="12" fontWeight="bold" textAnchor="middle" stroke="none" fill="#0f172a">ESP32</text>
          <text x="63" y="125" fontSize="13" fontWeight="bold" textAnchor="middle" stroke="none" fill="#0f172a">C3</text>

          {/* Barra de Pinos Direita (com conectores) */}
          {[18, 36, 54, 72, 90, 108, 126, 144, 162].map((py, idx) => (
            <circle key={idx} cx="103" cy={py} r="4.5" fill="#ffffff" stroke="#18181b" strokeWidth="1.6" />
          ))}

          {/* Identificação dos Pinos G e 0 / 3 */}
          <text x="88" y="22" fontSize="12" fontWeight="bold" stroke="none" fill="#0f172a">G</text>
          <text x="88" y="76" fontSize="12" fontWeight="bold" stroke="none" fill="#0f172a">3</text>
        </g>

        {/* Fios Horizontais ligando ESP32 C3 ao Push-Boton */}
        {/* Fio 1: Pino G -> Terminal A */}
        <line x1="183" y1="78" x2="330" y2="78" stroke="#18181b" strokeWidth="2.4" />
        <line x1="330" y1="78" x2="350" y2="78" stroke="#18181b" strokeWidth="2.4" />

        {/* Fio 2: Pino 3 / Sinal -> Terminal B */}
        <line x1="183" y1="132" x2="330" y2="132" stroke="#18181b" strokeWidth="2.4" />
        <line x1="330" y1="132" x2="350" y2="132" stroke="#18181b" strokeWidth="2.4" />

        {/* PUSH-BOTON (Chave NA com Atuador) */}
        <g transform="translate(350, 60)">
          {/* Terminais A e B */}
          <text x="-16" y="23" fontSize="12" fontWeight="bold" stroke="none" fill="#0f172a">A</text>
          <text x="-16" y="77" fontSize="12" fontWeight="bold" stroke="none" fill="#0f172a">B</text>

          {/* Corpo do Botão */}
          <rect x="10" y="8" width="30" height="74" fill="#ffffff" stroke="#18181b" strokeWidth="2" />
          
          {/* Contatos Internos */}
          <line x1="0" y1="18" x2="10" y2="18" stroke="#18181b" strokeWidth="2.2" />
          <line x1="0" y1="72" x2="10" y2="72" stroke="#18181b" strokeWidth="2.2" />
          <circle cx="16" cy="24" r="2.5" fill="#18181b" />
          <circle cx="16" cy="66" r="2.5" fill="#18181b" />
          <line x1="22" y1="20" x2="22" y2="70" stroke="#18181b" strokeWidth="2" />

          {/* Êmbolo / Atuador Externo do Botão */}
          <rect x="40" y="24" width="16" height="42" fill="#ffffff" stroke="#18181b" strokeWidth="2" />

          {/* Rótulo PUSH-BOTON */}
          <text x="12" y="105" fontSize="15" fontWeight="bold" stroke="none" fill="#0f172a" letterSpacing="1">
            PUSH-BOTON
          </text>
        </g>


        {/* ===================================================================
            PARTE 2 (INFERIOR): PULSEIRA
            =================================================================== */}
        
        {/* Título: PULSEIRA */}
        <text
          x="20"
          y="615"
          fontSize="18"
          fontWeight="bold"
          fill="#0f172a"
          stroke="none"
          fontStyle="italic"
          letterSpacing="1"
        >
          PULSEIRA
        </text>

        {/* 1. BATERIA LI-PO 3,7V */}
        <g transform="translate(35, 345)">
          <rect x="0" y="0" width="85" height="115" fill="#fdfbf7" stroke="#18181b" strokeWidth="2.2" />
          <text x="42" y="38" fontSize="12" fontWeight="bold" textAnchor="middle" stroke="none" fill="#0f172a">BATERIA</text>
          <text x="42" y="58" fontSize="12" fontWeight="bold" textAnchor="middle" stroke="none" fill="#0f172a">LI-PO</text>
          <text x="42" y="78" fontSize="12" fontWeight="bold" textAnchor="middle" stroke="none" fill="#0f172a">3,7V</text>

          {/* Bornes B+ e B- */}
          <circle cx="20" cy="0" r="4" fill="#ffffff" stroke="#18181b" strokeWidth="2" />
          <circle cx="65" cy="0" r="4" fill="#ffffff" stroke="#18181b" strokeWidth="2" />
          <text x="12" y="-8" fontSize="12" fontWeight="bold" stroke="none" fill="#0f172a">B+</text>
          <text x="60" y="-8" fontSize="12" fontWeight="bold" stroke="none" fill="#0f172a">B-</text>
        </g>

        {/* 2. MODULO DE CARREGAMENTO TP4056 */}
        <g transform="translate(170, 345)">
          <rect x="0" y="0" width="95" height="115" fill="#fdfbf7" stroke="#18181b" strokeWidth="2.2" />
          <text x="47" y="60" fontSize="13" fontWeight="bold" textAnchor="middle" stroke="none" fill="#0f172a">TP4056</text>

          {/* Bornes de Entrada da Bateria no Topo (B- e B+) */}
          <circle cx="30" cy="0" r="4" fill="#ffffff" stroke="#18181b" strokeWidth="2" />
          <circle cx="70" cy="0" r="4" fill="#ffffff" stroke="#18181b" strokeWidth="2" />
          <text x="22" y="16" fontSize="11" fontWeight="bold" stroke="none" fill="#0f172a">B-</text>
          <text x="64" y="16" fontSize="11" fontWeight="bold" stroke="none" fill="#0f172a">B+</text>

          {/* Pads dos 4 cantos */}
          <circle cx="15" cy="18" r="3.5" fill="#ffffff" stroke="#18181b" strokeWidth="1.6" />
          <circle cx="80" cy="18" r="3.5" fill="#ffffff" stroke="#18181b" strokeWidth="1.6" />
          <circle cx="15" cy="98" r="3.5" fill="#ffffff" stroke="#18181b" strokeWidth="1.6" />
          <circle cx="80" cy="98" r="3.5" fill="#ffffff" stroke="#18181b" strokeWidth="1.6" />

          {/* Texto Abaixo do Módulo */}
          <text x="47" y="138" fontSize="12" fontWeight="bold" textAnchor="middle" stroke="none" fill="#0f172a">MODULO</text>
          <text x="47" y="156" fontSize="12" fontWeight="bold" textAnchor="middle" stroke="none" fill="#0f172a">DE</text>
          <text x="47" y="174" fontSize="12" fontWeight="bold" textAnchor="middle" stroke="none" fill="#0f172a">CARREGAMENTO</text>
        </g>

        {/* Fios interligando Bateria ao TP4056 */}
        {/* B+ da Bateria -> B+ do TP4056 */}
        <polyline
          points="55,345 55,315 240,315 240,345"
          fill="none"
          stroke="#18181b"
          strokeWidth="2.2"
        />
        {/* B- da Bateria -> B- do TP4056 */}
        <polyline
          points="100,345 100,328 200,328 200,345"
          fill="none"
          stroke="#18181b"
          strokeWidth="2.2"
        />

        {/* 3. ESP32 C3 (Receptor da Pulseira) */}
        <g transform="translate(385, 320)">
          {/* Caixa Externa */}
          <rect x="0" y="0" width="115" height="185" fill="#fdfbf7" stroke="#18181b" strokeWidth="2.2" />

          {/* Pinos do Lado Esquerdo com Bornes */}
          <circle cx="12" cy="18" r="4.5" fill="#ffffff" stroke="#18181b" strokeWidth="1.8" />
          <circle cx="12" cy="38" r="4.5" fill="#ffffff" stroke="#18181b" strokeWidth="1.8" />
          <circle cx="12" cy="58" r="4.5" fill="#ffffff" stroke="#18181b" strokeWidth="1.8" />
          <circle cx="12" cy="78" r="4.5" fill="#ffffff" stroke="#18181b" strokeWidth="1.8" />
          <circle cx="12" cy="98" r="4.5" fill="#ffffff" stroke="#18181b" strokeWidth="1.8" />
          <circle cx="12" cy="118" r="4.5" fill="#ffffff" stroke="#18181b" strokeWidth="1.8" />
          <circle cx="12" cy="138" r="4.5" fill="#ffffff" stroke="#18181b" strokeWidth="1.8" />
          <circle cx="12" cy="158" r="4.5" fill="#ffffff" stroke="#18181b" strokeWidth="1.8" />

          {/* Identificação dos Pinos Conforme a Imagem 2 (Folha Milimetrada) */}
          <text x="22" y="22" fontSize="12" fontWeight="bold" stroke="none" fill="#0f172a">5V</text>
          <text x="22" y="42" fontSize="12" fontWeight="bold" stroke="none" fill="#0f172a">G</text>
          <text x="22" y="62" fontSize="12" fontWeight="bold" stroke="none" fill="#0f172a">3</text>
          <text x="22" y="82" fontSize="11" fontWeight="bold" stroke="none" fill="#0f172a">ops</text>

          {/* Chip Central ESP32 C3 */}
          <rect x="36" y="85" width="54" height="58" fill="#ffffff" stroke="#18181b" strokeWidth="1.8" />
          <text x="63" y="112" fontSize="12" fontWeight="bold" textAnchor="middle" stroke="none" fill="#0f172a">ESP32</text>
          <text x="63" y="130" fontSize="13" fontWeight="bold" textAnchor="middle" stroke="none" fill="#0f172a">C3</text>

          {/* Pinos do Lado Direito */}
          {[18, 38, 58, 78, 98, 118, 138, 158].map((py, idx) => (
            <circle key={idx} cx="103" cy={py} r="4.5" fill="#ffffff" stroke="#18181b" strokeWidth="1.6" />
          ))}
        </g>

        {/* Fio de Alimentação Positiva (+): Do TP4056 até o pino 5V do ESP32 */}
        <polyline
          points="250,363 365,363 365,338 397,338"
          fill="none"
          stroke="#18181b"
          strokeWidth="2.2"
        />

        {/* Fio de Terra (GND): Do pino G do ESP32 conectando ao Pino SUPERIOR do Transistor (Conforme Imagem 2) */}
        <polyline
          points="397,358 355,358 355,540 495,540 495,430 531,430 531,445"
          fill="none"
          stroke="#18181b"
          strokeWidth="2.2"
        />

        {/* Fio de Sinal: Do pino ops do ESP32 até o Resistor R1 */}
        <polyline
          points="397,398 375,398 375,505 415,505"
          fill="none"
          stroke="#18181b"
          strokeWidth="2.2"
        />

        {/* Resistor R1 (Abaixo do ESP32 C3) */}
        <g transform="translate(415, 492)">
          <rect x="0" y="0" width="54" height="26" fill="#fdfbf7" stroke="#18181b" strokeWidth="2.2" />
          <text x="27" y="18" fontSize="13" fontWeight="bold" textAnchor="middle" stroke="none" fill="#0f172a">R1</text>
        </g>

        {/* Do Resistor R1 para a Base do Transistor */}
        <line x1="469" y1="505" x2="520" y2="505" stroke="#18181b" strokeWidth="2.2" />

        {/* 4. BLOCO TRANSISTOR (Posições Superior/Inferior 100% fiéis à Imagem 2) */}
        <g transform="translate(520, 420)">
          {/* Caixa / Símbolo do Transistor conforme o desenho */}
          <rect x="0" y="25" width="22" height="65" fill="#fdfbf7" stroke="#18181b" strokeWidth="2" />
          
          {/* Base (Entrada Central vinda de R1) */}
          <line x1="0" y1="85" x2="22" y2="85" stroke="#18181b" strokeWidth="2.2" />
          
          {/* Terminal Superior: Recebe a linha de GND vinda do topo */}
          <line x1="11" y1="10" x2="11" y2="25" stroke="#18181b" strokeWidth="2.2" />
          
          {/* Terminal Inferior: Sai do fundo do transistor e vai para o Borne Superior do Motor */}
          <polyline
            points="11,90 11,105 55,105 55,70 100,70"
            fill="none"
            stroke="#18181b"
            strokeWidth="2.2"
          />

          {/* Rótulo TRANSISTOR */}
          <text x="-5" y="8" fontSize="13" fontWeight="bold" stroke="none" fill="#0f172a">
            TRANSISTOR
          </text>
        </g>

        {/* 5. BLOCO MOTOR (Quadrado com Círculo Interno) */}
        <g transform="translate(620, 460)">
          {/* Caixa Quadrada Externa */}
          <rect x="0" y="0" width="65" height="65" fill="#fdfbf7" stroke="#18181b" strokeWidth="2.2" />
          
          {/* Círculo Central Interno */}
          <circle cx="32.5" cy="32.5" r="23" fill="#ffffff" stroke="#18181b" strokeWidth="2" />

          {/* Rótulo MOTOR */}
          <text x="32.5" y="85" fontSize="14" fontWeight="bold" textAnchor="middle" stroke="none" fill="#0f172a">
            MOTOR
          </text>

          {/* Terminais do Motor */}
          <circle cx="0" cy="30" r="3.5" fill="#ffffff" stroke="#18181b" strokeWidth="1.8" />
          <circle cx="0" cy="50" r="3.5" fill="#ffffff" stroke="#18181b" strokeWidth="1.8" />
        </g>

        {/* Fio de Alimentação Inferior: Saindo da linha de alimentação do TP4056 até o Terminal Inferior do Motor */}
        <polyline
          points="250,443 325,443 325,565 620,565 620,510"
          fill="none"
          stroke="#18181b"
          strokeWidth="2.2"
        />
      </g>
    </svg>
  );
}

// ============================================================================
// COMPONENTE PRINCIPAL: ESQUEMA ELÉTRICO
// ============================================================================
export function Schematic() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);

  return (
    <div className="w-full bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden mt-12 md:mt-24">
      {/* Barra de Título Técnica Padronizada */}
      <div className="bg-gray-50 border-b border-gray-200 px-4 sm:px-6 md:px-8 py-4 sm:py-5 flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-mono font-bold uppercase tracking-wider bg-slate-900 text-white">
              ETERJ FECIP 2026
            </span>
            <span className="text-xs text-gray-500 font-mono">Documentação Técnica</span>
          </div>
          <h3 className="font-bold text-[#09090b] flex items-center gap-2.5 sm:gap-3 text-base sm:text-lg mt-1 font-display">
            <Wrench className="w-5 h-5 text-[#0055ff] shrink-0" />
            Esquema Elétrico do Circuito
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 mt-0.5 font-medium">
            Diagrama esquemático oficial da Campainha Transmissora (TX) e da Pulseira Receptora (RX).
          </p>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
          {/* Botão de Tela Cheia */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white border border-gray-200 hover:border-blue-400 hover:text-[#0055ff] text-xs font-semibold text-gray-700 shadow-xs transition-all cursor-pointer"
            title="Expandir esquema em tela cheia"
          >
            <Maximize2 className="w-3.5 h-3.5 text-[#0055ff]" />
            <span>Tela cheia</span>
          </button>
        </div>
      </div>

      {/* Área Principal de Renderização: Somente o Esquema Elétrico */}
      <div className="relative w-full p-2 sm:p-4 md:p-6 flex items-center justify-center bg-gray-100">
        <div className="w-full max-w-[1020px] aspect-[880/620] relative rounded-xl overflow-hidden shadow-inner border border-gray-200 bg-white">
          <TechnicalSchematicSvg />
        </div>
      </div>

      {/* Modal em Tela Cheia com Controle de Zoom */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 md:p-6"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative w-full max-w-6xl bg-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-white/20 max-h-[96vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Cabeçalho do Modal */}
            <div className="flex items-center justify-between px-5 py-3.5 bg-gray-950 text-white border-b border-gray-800">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#0055ff]"></span>
                <span className="font-bold text-sm sm:text-base font-mono">
                  Esquema Elétrico — Visualização Ampliada
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setZoomLevel((z) => Math.max(0.7, z - 0.2))}
                  className="p-1.5 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-200 transition-colors cursor-pointer"
                  title="Diminuir Zoom"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setZoomLevel((z) => Math.min(2.5, z + 0.2))}
                  className="p-1.5 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-200 transition-colors cursor-pointer"
                  title="Aumentar Zoom"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setZoomLevel(1)}
                  className="p-1.5 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-200 transition-colors cursor-pointer"
                  title="Resetar Zoom"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-1.5 rounded-lg bg-gray-800 hover:bg-rose-600 text-gray-200 transition-colors cursor-pointer ml-2"
                  aria-label="Fechar"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Conteúdo com Zoom */}
            <div className="overflow-auto p-4 sm:p-8 flex items-center justify-center flex-1 bg-black/60">
              <div
                className="w-full min-w-[700px] max-w-[1200px] bg-white rounded-xl overflow-hidden shadow-2xl transition-transform duration-200 ease-out"
                style={{ transform: `scale(${zoomLevel})`, transformOrigin: 'center center' }}
              >
                <TechnicalSchematicSvg />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
