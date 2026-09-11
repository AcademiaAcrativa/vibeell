import { BANNER_TEXTS } from '../data/projectData';

export function DevelopmentResults() {
  return (
    <section id="desenvolvimento" className="py-20 md:py-32 bg-[#f4f7fb] text-[#09090b]">
      <div className="max-w-[1400px] mx-auto px-5 md:px-12 lg:px-20">
        
        <div className="mb-16 md:mb-24">
          <div className="text-[#0055ff] font-bold text-sm md:text-base mb-4 tracking-widest uppercase">
            Validação Experimental
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[4rem] font-black tracking-tight leading-[1.05]">
            Resultados da bancada.
          </h2>
        </div>

        {/* Clean Editorial Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 mb-12">
          
          <div>
            <h3 className="font-bold text-xl md:text-2xl text-[#09090b] mb-6">Desenvolvimento</h3>
            <p className="text-gray-600 font-medium leading-relaxed">
              {BANNER_TEXTS.desenvolvimento}
            </p>
          </div>

          <div>
            <h3 className="font-bold text-xl md:text-2xl text-[#0055ff] mb-6">Resultados e Conclusões</h3>
            <p className="text-gray-800 font-semibold leading-relaxed">
              {BANNER_TEXTS.resultados}
            </p>
          </div>

          <div>
            <h3 className="font-bold text-xl md:text-2xl text-[#09090b] mb-6">Referências</h3>
            <p className="text-gray-600 font-medium leading-relaxed">
              {BANNER_TEXTS.referencias}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
