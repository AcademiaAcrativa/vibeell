import { useState } from 'react';
import { HARDWARE_COMPONENTS } from '../data/componentsData';
import { Cpu, Radio, Zap, BatteryCharging, ToggleRight, Disc, Activity, Waves, CheckCircle2, ChevronRight } from 'lucide-react';

export function HardwareExplorer() {
  const [selectedId, setSelectedId] = useState<string>(HARDWARE_COMPONENTS[0].id);

  const selectedComp = HARDWARE_COMPONENTS.find(c => c.id === selectedId) || HARDWARE_COMPONENTS[0];

  const getComponentIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu': return <Cpu className="w-5 h-5 text-[#0071e3]" />;
      case 'Radio': return <Radio className="w-5 h-5 text-[#0071e3]" />;
      case 'Zap': return <Zap className="w-5 h-5 text-[#0071e3]" />;
      case 'BatteryCharging': return <BatteryCharging className="w-5 h-5 text-[#0071e3]" />;
      case 'ToggleRight': return <ToggleRight className="w-5 h-5 text-[#0071e3]" />;
      case 'Disc': return <Disc className="w-5 h-5 text-[#0071e3]" />;
      case 'Activity': return <Activity className="w-5 h-5 text-[#0071e3]" />;
      case 'Waves': return <Waves className="w-5 h-5 text-[#0071e3]" />;
      default: return <Cpu className="w-5 h-5 text-[#0071e3]" />;
    }
  };

  return (
    <section id="hardware" className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      
      {/* Apple-style Section Header */}
      <div className="mb-10 text-center sm:text-left">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#86868b]">
          Arquitetura Eletrônica
        </span>
        <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#1d1d1f] tracking-tight mt-1">
          Engenharia por dentro.
        </h2>
        <p className="text-base sm:text-lg text-[#86868b] mt-2 max-w-2xl">
          Sete peças essenciais dimensionadas pelos estudantes da ETERJ para entregar máxima confiabilidade, miniaturização e resposta háptica imediata.
        </p>
      </div>

      {/* Main Apple Bento Card Container */}
      <div className="apple-card p-6 sm:p-10">
        
        {/* Component Selector Pills */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-4 mb-8 border-b border-black/[0.06]">
          {HARDWARE_COMPONENTS.map((comp) => {
            const isSelected = comp.id === selectedId;
            return (
              <button
                key={comp.id}
                onClick={() => setSelectedId(comp.id)}
                className={`px-4 py-2 rounded-full text-xs font-medium shrink-0 transition-all cursor-pointer flex items-center gap-2 ${
                  isSelected
                    ? 'bg-[#1d1d1f] text-white shadow-sm'
                    : 'bg-[#f5f5f7] text-[#1d1d1f] hover:bg-[#e5e5ea]'
                }`}
              >
                <span>{comp.name.split('(')[0].trim()}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  isSelected ? 'bg-white/20 text-white' : 'bg-black/5 text-[#86868b]'
                }`}>
                  {comp.unit}
                </span>
              </button>
            );
          })}
        </div>

        {/* Two-Column Hardware Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Component Visual Representation (Apple clean styling) */}
          <div className="lg:col-span-5 bg-[#f5f5f7] rounded-[24px] p-8 flex flex-col items-center justify-between text-center min-h-[340px] border border-black/[0.04]">
            <div className="w-full flex items-center justify-between text-xs text-[#86868b] font-mono">
              <span className="uppercase">Unidade: {selectedComp.unit}</span>
              <span>ETERJ 2026</span>
            </div>

            {/* Icon Graphic Stage */}
            <div className="my-6 relative">
              <div className="w-24 h-24 rounded-3xl bg-white shadow-[0_8px_24px_rgba(0,0,0,0.06)] border border-black/[0.04] flex items-center justify-center text-[#0071e3]">
                {getComponentIcon(selectedComp.icon)}
              </div>
            </div>

            <div>
              <h3 className="font-display font-bold text-xl text-[#1d1d1f]">
                {selectedComp.name}
              </h3>
              <p className="text-xs text-[#0071e3] font-medium mt-0.5">
                {selectedComp.role}
              </p>
            </div>
          </div>

          {/* Right: Technical Specs & Why Chosen (Apple editorial style) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            
            {/* Technical Specification Box */}
            <div className="p-4 rounded-2xl bg-[#f5f5f7] border border-black/[0.04]">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#86868b] block">
                Especificação Aferida
              </span>
              <p className="text-sm font-mono text-[#1d1d1f] font-semibold mt-1">
                {selectedComp.specs}
              </p>
            </div>

            {/* Description */}
            <div>
              <h4 className="text-sm font-semibold text-[#1d1d1f] mb-1">
                Função no Sistema Vibeel:
              </h4>
              <p className="text-sm text-[#515154] leading-relaxed">
                {selectedComp.description}
              </p>
            </div>

            {/* Why Chosen by ETERJ */}
            <div className="p-5 rounded-2xl bg-blue-50/60 border border-blue-100">
              <div className="flex items-center gap-2 text-[#0071e3] font-semibold text-xs mb-1">
                <CheckCircle2 className="w-4 h-4" />
                <span>Justificativa da Equipe ETERJ para a FECIP 2026:</span>
              </div>
              <p className="text-xs text-[#1d1d1f] leading-relaxed">
                {selectedComp.whyChosen}
              </p>
            </div>

            {/* Pinout & Electrical Connections */}
            <div>
              <span className="text-xs font-semibold text-[#86868b] uppercase tracking-wider block mb-2">
                Conexões & Pinos no Esquema Elétrico:
              </span>
              <div className="flex flex-wrap gap-2">
                {selectedComp.pinout.map((pin, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-lg bg-[#f5f5f7] border border-black/[0.04] text-xs font-mono text-[#1d1d1f]"
                  >
                    {pin}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
