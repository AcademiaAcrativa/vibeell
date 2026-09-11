import { ArrowRight } from 'lucide-react';
import { BANNER_TEXTS } from '../data/projectData';

export function Introduction() {
  return (
    <section id="introducao" className="bg-white pt-16 md:pt-32 pb-16 md:pb-24 px-5 md:px-12 lg:px-24 text-[#09090b]">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Top Header matching "Behind the Designs" section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-end">
          <div>
            <div className="text-[#0055ff] font-bold text-sm md:text-base mb-4 tracking-tight uppercase">
              O Problema e a Solução
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[4rem] font-black tracking-tight leading-[1.05]">
              Moldando experiências<br />que trazem autonomia.
            </h2>
          </div>
          
          <div className="flex flex-col lg:items-end justify-end pb-2">
            <p className="text-gray-500 text-lg md:text-xl font-medium max-w-md lg:text-left mb-8 leading-relaxed">
              Mais de 10 milhões de brasileiros convivem com deficiência auditiva. Criamos uma interface limpa e tátil para resolver barreiras reais dentro de casa.
            </p>
          </div>
        </div>

        {/* Abstract/Sleek Image Grid without cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          
          <div className="relative overflow-hidden aspect-[4/5]">
            <img 
              src="https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&q=80" 
              alt="Hardware Button"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          <div className="relative overflow-hidden aspect-[4/5] sm:mt-12 md:mt-16">
            <img 
              src="https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&q=80" 
              alt="User Lifestyle"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          <div className="relative overflow-hidden aspect-[4/5]">
            <img 
              src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&q=80" 
              alt="Minimalist Design"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

        </div>

        {/* Clean Editorial Quote Block */}
        <div className="mt-20 md:mt-40 max-w-4xl mx-auto text-center">
          <div className="text-[#0055ff] font-bold tracking-widest text-xs mb-8 uppercase">
            Argumento Oficial — XL FECIP 2026
          </div>
          <p className="text-2xl sm:text-3xl md:text-4xl font-medium leading-[1.4] text-[#09090b] text-balance">
            "{BANNER_TEXTS.introducao}"
          </p>
        </div>

      </div>
    </section>
  );
}
