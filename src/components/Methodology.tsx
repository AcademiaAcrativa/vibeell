import { METHODOLOGY_STEPS } from '../data/projectData';

export function Methodology() {
  return (
    <section id="metodologia" className="py-20 md:py-32 bg-white text-[#09090b]">
      <div className="max-w-[1400px] mx-auto px-5 md:px-12 lg:px-20">
        
        <div className="mb-16 md:mb-24">
          <div className="text-[#0055ff] font-bold text-sm md:text-base mb-4 tracking-widest uppercase">
            Metodologia Científica
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[4rem] font-black tracking-tight leading-[1.05]">
            Da bancada à aplicação real.
          </h2>
        </div>

        {/* Clean Minimalist List */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-8">
          {METHODOLOGY_STEPS.map((step, idx) => (
            <div key={idx} className="relative flex flex-col pt-6 border-t-2 border-gray-100">
              <span className="text-[#0055ff] font-mono font-bold text-sm block mb-4">0{idx + 1}</span>
              <h3 className="text-xl font-bold text-[#09090b] mb-4">{step.title}</h3>
              <p className="text-gray-500 font-medium text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
