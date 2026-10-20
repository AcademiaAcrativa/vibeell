import { useEffect, useRef, useState } from 'react';
import { Play, X, Smartphone, Monitor } from 'lucide-react';

// Jogo VIBEELL: o arquivo fica em public/jogo/index.html e é aberto dentro de uma tela cheia
export function GameSection() {
  const [playing, setPlaying] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Se o usuário sair da tela cheia (Esc, gesto do celular), fecha o jogo
  useEffect(() => {
    const onChange = () => {
      if (!document.fullscreenElement && playing) setPlaying(false);
    };
    document.addEventListener('fullscreenchange', onChange);
    return () => document.removeEventListener('fullscreenchange', onChange);
  }, [playing]);

  // Trava o celular em paisagem quando possível (Android em tela cheia)
  const lockLandscape = () => {
    const orientation = (screen as any).orientation;
    if (orientation?.lock) orientation.lock('landscape').catch(() => {});
  };

  const startGame = () => {
    // pedido de tela cheia precisa vir direto do clique do usuário
    const req = document.documentElement.requestFullscreen;
    if (req) req.call(document.documentElement).then(lockLandscape).catch(() => {});
    setPlaying(true);
  };

  const stopGame = () => {
    if (document.fullscreenElement) document.exitFullscreen().catch(() => {});
    setPlaying(false);
  };

  return (
    <section id="jogo" className="bg-[#f4f7fb] text-[#09090b] py-16 md:py-32 px-5 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

        {/* Texto e botão */}
        <div>
          <div className="text-[#0055ff] font-bold text-sm md:text-base mb-4 tracking-widest uppercase">
            Jogo • FECIP 2026
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-black tracking-tight leading-[1.05] mb-6">
            Jogue VIBEELL
          </h2>
          <p className="text-gray-500 text-lg font-medium leading-relaxed mb-8 max-w-lg">
            Um jogo de plataforma inspirado nos clássicos. Sinta a pulseira vibrar, fuja dos bichinhos da casa
            e chegue até a porta. Tudo que o VIBEELL faz, em forma de brincadeira.
          </p>

          <button
            onClick={startGame}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#0055ff] text-white px-8 py-4 rounded-full font-bold text-base hover:opacity-90 transition-opacity shadow-lg shadow-blue-500/20"
          >
            <Play className="w-5 h-5 fill-current" />
            Jogar VIBEELL
          </button>

          {/* Como jogar em cada aparelho */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
            <div className="bg-white rounded-2xl p-5 border border-gray-100">
              <div className="flex items-center gap-2 font-bold text-sm mb-2">
                <Monitor className="w-4 h-4 text-[#0055ff]" /> No computador
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                Setas para andar, Z ou Espaço para pular e X para correr.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-5 border border-gray-100">
              <div className="flex items-center gap-2 font-bold text-sm mb-2">
                <Smartphone className="w-4 h-4 text-[#0055ff]" /> No celular
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                Use os botões na tela: andar, correr e pular. Gire para o modo paisagem.
              </p>
            </div>
          </div>
        </div>

        {/* Prévia do menu real do jogo (desfocada) com o botão de jogar por cima */}
        <div className="relative mx-auto w-full max-w-md aspect-[8/7] rounded-3xl overflow-hidden shadow-xl border border-white bg-black">
          {!playing && (
            <iframe
              src="/jogo/index.html?preview=1"
              title="Prévia do menu do jogo VIBEELL"
              tabIndex={-1}
              aria-hidden="true"
              className="absolute inset-0 w-full h-full border-0 pointer-events-none blur-[3px] scale-105"
            />
          )}
          <div className="absolute inset-0 bg-black/15" />
          <button
            onClick={startGame}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 inline-flex items-center gap-3 bg-[#0055ff] text-white px-7 py-4 rounded-full font-bold text-base shadow-xl hover:scale-105 transition-transform"
          >
            <Play className="w-5 h-5 fill-current" />
            JOGAR
          </button>
        </div>
      </div>

      {/* Tela cheia do jogo */}
      {playing && (
        <div className="fixed inset-0 z-[1000] bg-black">
          <iframe
            ref={iframeRef}
            src="/jogo/index.html"
            title="Jogo VIBEELL"
            allow="fullscreen; autoplay"
            onLoad={() => iframeRef.current?.focus()}
            className="w-full h-full border-0"
          />
          <button
            onClick={stopGame}
            aria-label="Sair do jogo"
            className="absolute top-3 right-3 bg-black/60 text-white rounded-full p-2 hover:bg-black/80"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      )}
    </section>
  );
}
