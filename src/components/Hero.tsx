export function Hero({ onExplore, onViewHardware }: { onExplore: () => void; onViewHardware: () => void }) {
  return (
    <section id="inicio" className="w-full relative">
      {/* Crisp White/Blue Hero Container */}
      <div className="w-full bg-white pt-32 md:pt-40 pb-12 md:pb-24 px-5 md:px-16 lg:px-24 flex flex-col justify-between min-h-[75vh] md:min-h-[85vh] relative overflow-hidden">
        
        <div className="relative z-10 h-full flex flex-col justify-between flex-1 max-w-[1400px] mx-auto w-full">
          
          {/* Main Title Area */}
          <div className="mt-12 md:mt-24 max-w-4xl text-center md:text-left mx-auto md:mx-0">
            {/* Top small text */}
            <h2 className="text-[#0055ff] text-sm md:text-base font-bold tracking-widest mb-4 uppercase">
              Turma 1121 • ETERJ apresenta
            </h2>

            {/* Massive Typography */}
            <h1 className="text-[3.5rem] sm:text-[5rem] md:text-[6.5rem] lg:text-[8rem] font-black leading-[0.95] md:leading-[0.9] tracking-[-0.04em] md:tracking-[-0.05em] text-[#09090b] mb-8 md:mb-12">
              Campainha<br />Vibratória.
            </h1>
            
            <p className="text-gray-500 text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto md:mx-0 mb-10">
              Transformamos o alerta sonoro em vibrações táteis. Um sistema composto por uma campainha e uma pulseira conectadas à internet da sua casa, devolvendo a autonomia para pessoas com deficiência auditiva.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button onClick={onExplore} className="bg-[#0055ff] text-white px-8 py-4 rounded-full font-bold text-sm hover:opacity-90 transition-opacity">
                  Descobrir o projeto
                </button>
                <button onClick={onViewHardware} className="bg-gray-50 text-[#09090b] px-8 py-4 rounded-full font-bold text-sm hover:bg-gray-100 transition-colors">
                  Ficha Técnica
                </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
