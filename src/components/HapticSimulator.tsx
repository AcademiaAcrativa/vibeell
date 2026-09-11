import { useState } from 'react';
import { VIBRATION_PATTERNS } from '../data/componentsData';
import { Waves, UserCheck, ShieldAlert, PackageCheck, Moon, Clock, Cpu } from 'lucide-react';

export function HapticSimulator() {
  const [selectedId, setSelectedId] = useState<string>(VIBRATION_PATTERNS[0].id);

  const activePattern = VIBRATION_PATTERNS.find(p => p.id === selectedId) || VIBRATION_PATTERNS[0];

  const getIcon = (id: string) => {
    switch (id) {
      case 'visita-padrao': return <UserCheck className="w-5 h-5 text-[#0071e3]" />;
      case 'urgencia': return <ShieldAlert className="w-5 h-5 text-red-500" />;
      case 'entrega-rapida': return <PackageCheck className="w-5 h-5 text-emerald-600" />;
      case 'modo-noturno': return <Moon className="w-5 h-5 text-purple-600" />;
      default: return <Waves className="w-5 h-5 text-[#0071e3]" />;
    }
  };

  return (
    <section id="simulador" className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      
      {/* Apple-style Section Header */}
      <div className="mb-10 text-center sm:text-left">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#86868b]">
          Codificação Háptica ETERJ
        </span>
        <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#1d1d1f] tracking-tight mt-1">
          Padrões de vibração diferenciados.
        </h2>
        <p className="text-base sm:text-lg text-[#86868b] mt-2 max-w-2xl">
          Para que a pessoa surda não precise se deslocar até a porta sem necessidade, o microcontrolador ESP32 modula cadências de pulsos para cada situação.
        </p>
      </div>

      {/* Main Explanatory Card */}
      <div className="apple-card p-6 sm:p-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Pattern Descriptions List */}
          <div className="lg:col-span-7 space-y-3">
            {VIBRATION_PATTERNS.map((p) => {
              const isSelected = p.id === selectedId;
              return (
                <div
                  key={p.id}
                  onClick={() => setSelectedId(p.id)}
                  className={`p-4 sm:p-5 rounded-2xl border transition-all duration-200 cursor-pointer flex items-center justify-between gap-4 ${
                    isSelected
                      ? 'bg-[#f5f5f7] border-black/10 shadow-sm'
                      : 'bg-white border-black/[0.04] hover:bg-[#fbfbfd]'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-white shadow-sm border border-black/[0.04] mt-0.5">
                      {getIcon(p.id)}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-display font-bold text-base text-[#1d1d1f]">
                          {p.name}
                        </h4>
                        <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-black/5 text-[#86868b]">
                          {p.intensity}
                        </span>
                      </div>
                      <p className="text-xs text-[#86868b] mt-0.5">
                        {p.subtitle}
                      </p>
                      <p className="text-xs text-[#515154] mt-2 leading-relaxed">
                        {p.description}
                      </p>
                    </div>
                  </div>

                  <div className="shrink-0 text-right font-mono text-[11px] text-[#86868b] hidden sm:block">
                    {p.durationMs} ms
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Visual Cadence Graph & Specs */}
          <div className="lg:col-span-5 bg-[#f5f5f7] rounded-[24px] p-8 flex flex-col justify-between border border-black/[0.04] min-h-[380px]">
            
            <div>
              <div className="flex items-center justify-between text-xs text-[#86868b] font-mono mb-4">
                <span>CADÊNCIA TEMPORAL</span>
                <span>ESP-NOW PWM</span>
              </div>

              <h3 className="text-lg font-display font-bold text-[#1d1d1f]">
                {activePattern.name}
              </h3>
              <p className="text-xs text-[#86868b] mt-0.5">
                {activePattern.subtitle}
              </p>

              {/* Pulse Cadence Visualizer Diagram */}
              <div className="my-6 p-4 rounded-xl bg-white border border-black/[0.04]">
                <span className="text-[10px] font-mono text-[#86868b] uppercase tracking-wider block mb-3">
                  Representação de Pulsos no Motor (ms)
                </span>
                <div className="flex items-center gap-1.5 h-12">
                  {activePattern.pattern.map((pulse, idx) => {
                    const isVibration = idx % 2 === 0;
                    const flexWidth = Math.max(1, Math.round(pulse / 50));
                    return (
                      <div
                        key={idx}
                        style={{ flex: flexWidth }}
                        className={`h-full rounded-md flex flex-col items-center justify-center text-[9px] font-mono ${
                          isVibration
                            ? 'bg-[#0071e3] text-white font-semibold shadow-sm'
                            : 'bg-[#e5e5ea] text-[#86868b]'
                        }`}
                      >
                        <span>{pulse}ms</span>
                      </div>
                    );
                  })}
                </div>
                <div className="flex justify-between items-center text-[10px] font-mono text-[#86868b] mt-2">
                  <span>0 ms</span>
                  <span className="text-[#0071e3] font-semibold">Duração Total: {activePattern.durationMs} ms</span>
                </div>
              </div>
            </div>

            {/* Technical Parameters Info */}
            <div className="space-y-2 pt-4 border-t border-black/[0.06] text-xs">
              <div className="flex items-center justify-between py-1">
                <span className="text-[#86868b] flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5" /> Modulação PWM
                </span>
                <span className="font-mono text-[#1d1d1f] font-medium">{activePattern.frequencyLabel}</span>
              </div>
              <div className="flex items-center justify-between py-1">
                <span className="text-[#86868b] flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" /> Tempo de Resposta
                </span>
                <span className="font-mono text-emerald-600 font-medium">&lt; 12 ms (imediato)</span>
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
