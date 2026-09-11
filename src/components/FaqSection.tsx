import { useState } from 'react';
import { FAQ_ITEMS } from '../data/projectData';
import { ChevronDown } from 'lucide-react';

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-white text-[#09090b]">
      <div className="max-w-[800px] mx-auto px-5 md:px-12">
        
        <div className="text-center mb-12 md:mb-16">
          <div className="text-[#0055ff] font-semibold text-lg md:text-xl mb-4 tracking-tight">
            FAQ
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tighter leading-[1.05]">
            Perguntas Frequentes
          </h2>
        </div>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-[20px] border border-gray-200 overflow-hidden transition-all shadow-sm hover:shadow-md"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 md:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="font-bold text-base md:text-lg text-[#09090b] leading-snug">
                    {item.q}
                  </span>
                  <div className={`p-2 rounded-full bg-gray-50 text-[#0055ff] transition-transform duration-300 shrink-0 ${
                    isOpen ? 'rotate-180 bg-[#0055ff] text-white' : ''
                  }`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 md:px-6 pb-5 md:pb-6 pt-1 text-gray-600 leading-relaxed bg-white text-sm md:text-base">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
