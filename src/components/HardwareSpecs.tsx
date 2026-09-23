import { Schematic } from './Schematic';

const SIMPLE_TX_PIECES = [
  { name: 'ESP32-C3 SuperMini', desc: 'Placa processadora que lê o acionamento entre os pinos G (GND) e 3 (IO3) com pull-up interno e emite o sinal de rádio instantâneo.' },
  { name: 'Push-Boton (Terminais A e B)', desc: 'Botão pulsador momentâneo com contatos A e B ligado entre o GND e o pino 3 do ESP32 para disparo imediato.' }
];

const SIMPLE_RX_PIECES = [
  { name: 'ESP32-C3 SuperMini', desc: 'Placa receptora da pulseira que recebe o pacote e aciona o Pino 8 (GPIO 8) conectado ao resistor R1.' },
  { name: 'Bateria Li-Po 3.7V', desc: 'Célula de alimentação recarregável (B+ e B-) conectada aos bornes superiores do módulo de carregamento da pulseira.' },
  { name: 'Módulo de Carregamento TP4056', desc: 'Placa de carga USB-C responsável por gerenciar a bateria e fornecer a linha de alimentação de 5V ao ESP32 e ao motor.' },
  { name: 'Transistor TO-92 NPN + Resistor R1', desc: 'Chaveamento de potência acionado pela base através do resistor R1 (1kΩ) conectado ao Pino 8 do ESP32.' },
  { name: 'Micro Motor Vibratório', desc: 'Atuador com contrapeso excêntrico acionado pelo coletor do transistor, vibrando vigorosamente no pulso ao soar o alarme.' }
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
