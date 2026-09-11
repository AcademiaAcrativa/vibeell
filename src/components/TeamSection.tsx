import { TEAM_MEMBERS } from '../data/projectData';
import { ArrowRight } from 'lucide-react';

export function TeamSection() {
  return (
    <section id="equipe" className="py-20 md:py-32 bg-white text-[#09090b]">
      <div className="max-w-[1400px] mx-auto px-5 md:px-12 lg:px-20">
        
        <div className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
          <div>
            <div className="text-[#0055ff] font-bold text-sm md:text-base mb-4 tracking-widest uppercase">
              Os pesquisadores
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[4rem] font-black tracking-tight leading-[1.05]">
              Turma 1121.
            </h2>
          </div>
          <div className="md:text-right">
            <p className="text-gray-500 text-lg md:text-xl max-w-md ml-auto">
              Estudantes do ensino técnico dedicados ao desenvolvimento de soluções inclusivas para a XL FECIP.
            </p>
          </div>
        </div>

        {/* Advisor */}
        <div className="mb-16 border-b-2 border-gray-100 pb-12 flex flex-col md:flex-row items-start justify-between gap-6 md:gap-8">
          <div>
            <div className="text-gray-400 text-xs font-mono font-bold tracking-widest uppercase mb-4">Orientação Docente</div>
            <h3 className="text-3xl font-bold text-[#09090b] mb-2">Profª Tacila Vanessa</h3>
            <p className="text-gray-500 font-medium">Coordenação pedagógica e supervisão técnica da Turma 1121.</p>
          </div>
        </div>

        {/* Students Directory - Clean Text Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
          {TEAM_MEMBERS.map((student, idx) => (
            <div key={idx} className="flex flex-col">
              <h4 className="font-bold text-xl text-[#09090b] mb-2">
                {student.name}
              </h4>
              <p className="text-sm font-bold text-[#0055ff] mb-4">
                {student.role}
              </p>
              <p className="text-sm text-gray-500 leading-relaxed font-medium">
                {student.contribution}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
