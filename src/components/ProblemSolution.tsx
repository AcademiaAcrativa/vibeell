import { AlertTriangle, Check, EyeOff, Moon, Home, Sparkles, ChevronRight, Waves } from 'lucide-react';

export function ProblemSolution() {
  return (
    <section id="sobre" className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      
      {/* Section Headline (Apple style) */}
      <div className="mb-10 text-center sm:text-left">
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#1d1d1f] tracking-tight">
          Por que o tato supera a visão.
        </h2>
        <p className="text-base text-[#86868b] mt-2 max-w-2xl">
          Soluções tradicionais dependem de luzes estroboscópicas. O Vibeel substitui o aviso visual por impulsos táteis diretos.
        </p>
      </div>

      {/* Two Apple Bento-Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Card 1: Traditional Light Bells */}
        <div className="apple-card p-8 sm:p-10 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#86868b]">
                Sistemas Convencionais
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-[#f2f2f7] text-[#86868b] text-[11px] font-medium">
                Luzes Piscantes
              </span>
            </div>

            <h3 className="text-2xl font-display font-bold text-[#1d1d1f] leading-snug">
              Luzes exigem que você esteja olhando na direção certa.
            </h3>

            <div className="mt-6 space-y-4 text-sm text-[#515154]">
              <div className="flex items-start gap-3">
                <div className="p-1 rounded-full bg-red-50 text-red-600 mt-0.5 shrink-0">
                  <EyeOff className="w-4 h-4" />
                </div>
                <p>
                  <strong className="text-[#1d1d1f]">Ponto cego constante:</strong> Se a pessoa estiver de costas, na cozinha, lavando louça ou no banho, a luz pisca sem ser notada.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-1 rounded-full bg-red-50 text-red-600 mt-0.5 shrink-0">
                  <Moon className="w-4 h-4" />
                </div>
                <p>
                  <strong className="text-[#1d1d1f]">Inútil durante o sono:</strong> Luzes piscantes não acordam com segurança pessoas em sono profundo e perturbam familiares ouvintes.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-1 rounded-full bg-red-50 text-red-600 mt-0.5 shrink-0">
                  <Home className="w-4 h-4" />
                </div>
                <p>
                  <strong className="text-[#1d1d1f]">Instalação invasiva:</strong> Demanda passar fiação por todas as paredes ou comprar lâmpadas especiais para cada cômodo.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-black/[0.05] text-xs text-[#86868b]">
            Resultado: Encomendas e visitas perdidas todos os dias.
          </div>
        </div>

        {/* Card 2: Vibeel Innovation (Dark or Crisp White Card with Blue Highlights) */}
        <div className="apple-card-dark p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden">
          <div>
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#2997ff]">
                A Inovação Vibeel
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-white text-[11px] font-medium">
                Vibração Háptica
              </span>
            </div>

            <h3 className="text-2xl font-display font-bold text-white leading-snug">
              A vibração vai até você. Onde quer que esteja.
            </h3>

            <div className="mt-6 space-y-4 text-sm text-[#a1a1a6]">
              <div className="flex items-start gap-3">
                <div className="p-1 rounded-full bg-[#0071e3]/20 text-[#2997ff] mt-0.5 shrink-0">
                  <Check className="w-4 h-4" />
                </div>
                <p>
                  <strong className="text-white">Alerta físico imediato:</strong> O motor háptico vibra diretamente no bolso, no clipe de roupa ou sobre a mesa de cabeceira.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-1 rounded-full bg-[#0071e3]/20 text-[#2997ff] mt-0.5 shrink-0">
                  <Check className="w-4 h-4" />
                </div>
                <p>
                  <strong className="text-white">Alcance de até 150 metros:</strong> O protocolo ESP-NOW do ESP32 atravessa paredes sem depender de Wi-Fi ou sinal de internet.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-1 rounded-full bg-[#0071e3]/20 text-[#2997ff] mt-0.5 shrink-0">
                  <Check className="w-4 h-4" />
                </div>
                <p>
                  <strong className="text-white">Discreto e elegante:</strong> Sem barulho que incomode vizinhos e sem luzes invasivas piscando nas paredes.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-[#a1a1a6]">
            <span>Desenvolvido na ETERJ</span>
            <a href="#simulador" className="text-[#2997ff] hover:underline inline-flex items-center gap-1 font-medium">
              Ver padrões hápticos <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
