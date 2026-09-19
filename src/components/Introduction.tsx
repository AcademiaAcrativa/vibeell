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

        {/* Media Grid: Video + Doorbell Photo */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          
          {/* 1: Vídeo do VIBEELL em funcionamento */}
          <div className="relative overflow-hidden aspect-[4/5] rounded-2xl bg-black border border-gray-100 shadow-sm group">
            <video 
              src="https://res.cloudinary.com/ogrsouif/video/upload/v1789828869/WhatsApp_Video_2026-09-19_at_11.40.55.mp4"
              autoPlay
              loop
              muted
              playsInline
              controls
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full text-white text-[11px] font-semibold flex items-center gap-1.5 pointer-events-none">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Vídeo Demonstração
            </div>
          </div>

          {/* 2: Foto de alguém tocando a campainha */}
          <div className="relative overflow-hidden aspect-[4/5] rounded-2xl bg-gray-100 border border-gray-100 shadow-sm group">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/0/04/Doorbell_being_pushed_by_thumb.jpg" 
              alt="Pessoa acionando a campainha"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-semibold tracking-wide">
              Acionamento Residencial
            </div>
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
