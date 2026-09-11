import { Schematic } from './Schematic';

const SIMPLE_TX_PIECES = [
  { name: 'ESP32 SuperMini', desc: 'Microcontrolador que processa o clique e envia o sinal de alerta através da internet.' },
  { name: 'Push Button', desc: 'O botão externo que o visitante aperta para tocar a campainha.' }
];

const SIMPLE_RX_PIECES = [
  { name: 'ESP32 SuperMini', desc: 'Conectado ao Wi-Fi, recebe o sinal da campainha e aciona o motor.' },
  { name: 'Bateria Li-Po 3.7V', desc: 'Garante que a pulseira seja portátil, durando dias sem recarga.' },
  { name: 'Módulo TP4056', desc: 'Gerencia o carregamento seguro da bateria através de um cabo USB-C comum.' },
  { name: 'Transistor e Resistores', desc: 'Atuam como chaves eletrônicas e filtros, garantindo que o motor receba a energia correta e evitando disparos falsos.' },
  { name: 'Motor Vibratório', desc: 'A peça principal de resposta tátil. Vibra intensamente na pulseira para avisar o usuário.' }
];

export function HardwareSpecs() {
  return (
    <section id="pecas" className="py-20 md:py-32 bg-white text-[#09090b] border-t border-gray-100">
      <div className="max-w-[1400px] mx-auto px-5 md:px-12 lg:px-20">
        
        <div className="mb-16 md:mb-24">
          <div className="text-[#0055ff] font-bold text-sm md:text-base mb-4 tracking-widest uppercase">
            Arquitetura de Hardware
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[4rem] font-black tracking-tight leading-[1.05] mb-6">
            As peças que compõem o sistema.
          </h2>
          <p className="text-gray-500 text-lg md:text-xl max-w-2xl font-medium">
            Solução de baixo custo e alta eficiência, dividida entre o módulo transmissor de portão (TX) e o receptor móvel háptico (RX).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 mb-24">
          
          {/* TX Module List */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-4 border-b-2 border-gray-100 pb-4">
              <span className="text-[#0055ff] font-mono text-sm tracking-widest uppercase">TX</span>
              Campainha Transmissora
            </h3>
            <ul className="space-y-6">
              {SIMPLE_TX_PIECES.map((piece, idx) => (
                <li key={idx} className="flex gap-4 items-start">
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-[#0055ff] shrink-0"></div>
                  <div>
                    <span className="font-bold text-[#09090b] block mb-1">{piece.name}</span>
                    <span className="text-gray-500 text-sm font-medium leading-relaxed">{piece.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* RX Module List */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-4 border-b-2 border-gray-100 pb-4">
              <span className="text-gray-400 font-mono text-sm tracking-widest uppercase">RX</span>
              Pulseira Receptora
            </h3>
            <ul className="space-y-6">
              {SIMPLE_RX_PIECES.map((piece, idx) => (
                <li key={idx} className="flex gap-4 items-start">
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-[#09090b] shrink-0"></div>
                  <div>
                    <span className="font-bold text-[#09090b] block mb-1">{piece.name}</span>
                    <span className="text-gray-500 text-sm font-medium leading-relaxed">{piece.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* The Exact Visual Schematic Replica */}
        <Schematic />
        
      </div>
    </section>
  );
}
