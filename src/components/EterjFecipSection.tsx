import { FECIP_MILESTONES } from '../data/componentsData';
import { School, Award, Lightbulb, GraduationCap, ChevronRight, CheckCircle2 } from 'lucide-react';

export function EterjFecipSection() {
  return (
    <section id="eterj" className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      
      {/* Apple-style Section Header */}
      <div className="mb-10 text-center sm:text-left">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#86868b]">
          Iniciativa Científica & Educação Técnica
        </span>
        <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#1d1d1f] tracking-tight mt-1">
          Nascido na ETERJ. Rumo à FECIP 2026.
        </h2>
        <p className="text-base sm:text-lg text-[#86868b] mt-2 max-w-2xl">
          Como estudantes da Escola Técnica do Rio de Janeiro uniram eletrônica aplicada e empatia social para criar um produto de alto valor inclusivo.
        </p>
      </div>

      {/* 3 Apple Bento Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Card 1: ETERJ */}
        <div className="apple-card p-8 flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-2xl bg-[#f5f5f7] flex items-center justify-center text-[#1d1d1f] mb-6">
              <GraduationCap className="w-5 h-5 text-[#0071e3]" />
            </div>
            <span className="text-xs uppercase tracking-wider font-semibold text-[#86868b]">
              Origem Acadêmica
            </span>
            <h3 className="text-xl font-display font-bold text-[#1d1d1f] mt-1">
              Escola Técnica do Rio de Janeiro
            </h3>
            <p className="text-sm text-[#515154] mt-3 leading-relaxed">
              Fundada sobre a tradição de formar técnicos de excelência em eletrônica, telecomunicações e mecatrônica. O Vibeel é fruto direto das aulas práticas de laboratório e dimensionamento de circuitos.
            </p>
          </div>
          <div className="mt-6 pt-6 border-t border-black/[0.05] text-xs text-[#86868b] font-medium">
            Laboratórios de Eletrônica Digital ETERJ
          </div>
        </div>

        {/* Card 2: FECIP 2026 */}
        <div className="apple-card p-8 flex flex-col justify-between border-2 border-[#0071e3]/30">
          <div>
            <div className="w-10 h-10 rounded-2xl bg-blue-50 flex items-center justify-center text-[#0071e3] mb-6">
              <Award className="w-5 h-5" />
            </div>
            <span className="text-xs uppercase tracking-wider font-semibold text-[#0071e3]">
              O Palco de Inovação
            </span>
            <h3 className="text-xl font-display font-bold text-[#1d1d1f] mt-1">
              FECIP 2026
            </h3>
            <p className="text-sm text-[#515154] mt-3 leading-relaxed">
              A Feira de Ciência e Inovação da ETERJ é a vitrine oficial onde o protótipo será avaliado por bancas de engenheiros e professores, concorrendo na categoria de Tecnologia Assistiva e Cidadania.
            </p>
          </div>
          <div className="mt-6 pt-6 border-t border-black/[0.05] text-xs text-[#0071e3] font-semibold flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4" />
            <span>Fase de bancada e aferição de dados</span>
          </div>
        </div>

        {/* Card 3: Design Moderno e Inclusivo */}
        <div className="apple-card p-8 flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-2xl bg-[#f5f5f7] flex items-center justify-center text-[#1d1d1f] mb-6">
              <Lightbulb className="w-5 h-5 text-amber-500" />
            </div>
            <span className="text-xs uppercase tracking-wider font-semibold text-[#86868b]">
              Conceito de Design
            </span>
            <h3 className="text-xl font-display font-bold text-[#1d1d1f] mt-1">
              "Produto de Luxo", não hospitalar
            </h3>
            <p className="text-sm text-[#515154] mt-3 leading-relaxed">
              A premissa dos estudantes foi romper com o estigma médico. Pessoas com deficiência auditiva merecem produtos belos, modernos e sofisticados que qualquer um tenha orgulho de possuir e usar.
            </p>
          </div>
          <div className="mt-6 pt-6 border-t border-black/[0.05] text-xs text-[#86868b] font-medium">
            Inclusão através da beleza funcional
          </div>
        </div>

      </div>

      {/* Methodology & Roadmap Accordion / Cards */}
      <div className="apple-card p-8 sm:p-10 mt-6">
        <h3 className="font-display font-bold text-xl text-[#1d1d1f] mb-6">
          Etapas do Projeto Científico ETERJ
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {FECIP_MILESTONES.map((step, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-[#f5f5f7] border border-black/[0.03] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-[11px] mb-2 font-mono">
                  <span className="text-[#86868b] uppercase">{step.date}</span>
                  <span className={`font-semibold ${
                    step.status === 'Concluído' ? 'text-emerald-600' : 'text-[#0071e3]'
                  }`}>
                    {step.status}
                  </span>
                </div>
                <h4 className="font-bold text-sm text-[#1d1d1f]">
                  {step.title}
                </h4>
                <p className="text-xs text-[#515154] mt-2 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
