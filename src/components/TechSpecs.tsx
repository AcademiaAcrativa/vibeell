import { Radio, Battery, Cpu, Check, ShieldCheck } from 'lucide-react';

export function TechSpecs() {
  const specs = [
    {
      category: 'Unidade Externa (Transmissor)',
      icon: <Radio className="w-5 h-5 text-[#0071e3]" />,
      items: [
        { label: 'Processador', val: 'ESP32 SuperMini (32-bit Dual Core 240MHz)' },
        { label: 'Protocolo de Envio', val: 'ESP-NOW P2P (Sem depender de roteador)' },
        { label: 'Acionador Mecânico', val: 'Push Button tátil selado com curso curto de 0.3mm' },
        { label: 'Circuito Auxiliar', val: 'Resistor Pull-down de precisão 10kΩ com debounce' },
        { label: 'Proteção Climática', val: 'Resistência a poeira e respingos (IP65)' },
        { label: 'Consumo em Repouso', val: '< 15 µA em modo Deep Sleep' }
      ]
    },
    {
      category: 'Unidade Portátil (Receptor Háptico)',
      icon: <Battery className="w-5 h-5 text-[#0071e3]" />,
      items: [
        { label: 'Microcontrolador', val: 'ESP32 SuperMini com antena cerâmica integrada' },
        { label: 'Atuador Háptico', val: 'Motor vibratório de alto torque (12.000 RPM)' },
        { label: 'Chaveamento de Potência', val: 'Transistor de chaveamento de carga rápida' },
        { label: 'Bateria', val: 'Li-Po 3.7V recarregável de alta densidade energética' },
        { label: 'Gerenciador de Carga', val: 'Módulo TP4056 com porta USB Tipo C e proteção 4.2V' },
        { label: 'Autonomia Típica', val: 'Até 7 dias de uso contínuo com 1 carga' }
      ]
    }
  ];

  return (
    <section id="specs" className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      
      {/* Apple Section Header */}
      <div className="mb-10 text-center sm:text-left">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#86868b]">
          Dados do Laboratório ETERJ
        </span>
        <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#1d1d1f] tracking-tight mt-1">
          Especificações Técnicas.
        </h2>
        <p className="text-base text-[#86868b] mt-2">
          Dimensionamento aprovado para apresentação e testes na FECIP 2026.
        </p>
      </div>

      {/* Two Apple Cards for Specifications */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {specs.map((sec, idx) => (
          <div key={idx} className="apple-card p-8 sm:p-10">
            <div className="flex items-center gap-3 pb-6 border-b border-black/[0.06]">
              <div className="p-2.5 rounded-xl bg-[#f5f5f7]">
                {sec.icon}
              </div>
              <h3 className="font-display font-bold text-xl text-[#1d1d1f]">
                {sec.category}
              </h3>
            </div>

            <div className="divide-y divide-black/[0.05] mt-4">
              {sec.items.map((item, i) => (
                <div key={i} className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-sm">
                  <span className="text-[#86868b] font-normal">{item.label}</span>
                  <span className="text-[#1d1d1f] font-mono text-xs sm:text-right font-medium">
                    {item.val}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Accessibility Seal Banner */}
      <div className="mt-6 p-6 rounded-[24px] bg-white border border-black/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-50 text-[#0071e3] flex items-center justify-center shrink-0">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <p className="font-bold text-sm text-[#1d1d1f]">
              Conformidade com Princípios do Desenho Universal
            </p>
            <p className="text-xs text-[#86868b]">
              Desenvolvido com foco total na autonomia e empoderamento de pessoas com deficiência auditiva.
            </p>
          </div>
        </div>
        <span className="px-3.5 py-1.5 rounded-full bg-[#f5f5f7] text-[#1d1d1f] text-xs font-semibold shrink-0">
          ETERJ • FECIP 2026
        </span>
      </div>

    </section>
  );
}
