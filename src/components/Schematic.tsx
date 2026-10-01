import { useState } from 'react';

const DIAGRAM_IMAGE_URL = 'https://res.cloudinary.com/ogrsouif/image/upload/v1790871640/imagem_2026-10-01_132038110.png';
const DIAGRAM_FALLBACK_URL = '/esquema-circuito.png';

export function Schematic() {
  const [imgSrc, setImgSrc] = useState(DIAGRAM_IMAGE_URL);
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <div className="w-full bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden mt-12 md:mt-20">
      {/* Cabeçalho */}
      <div className="bg-gray-50 border-b border-gray-200 px-5 sm:px-8 py-5 flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded text-[11px] font-mono font-bold uppercase tracking-wider bg-slate-900 text-white">
              ETERJ FECIP 2026
            </span>
            <span className="text-xs text-blue-600 font-mono font-bold">Esquema Oficial</span>
          </div>
          <h3 className="font-bold text-[#09090b] text-xl mt-1 font-display tracking-tight">
            Esquema Elétrico do Circuito
          </h3>
        </div>
      </div>

      {/* Exibição direta da Foto do Diagrama */}
      <div className="w-full p-4 sm:p-6 md:p-8 bg-slate-950 flex flex-col items-center justify-center">
        <div className="w-full max-w-[1200px] overflow-hidden rounded-xl border border-slate-800 bg-[#0d1117] shadow-xl">
          <img
            src={imgSrc}
            alt="Esquema Elétrico Oficial do Circuito"
            className="w-full h-auto block select-none mx-auto cursor-pointer"
            onClick={() => setIsZoomed(true)}
            title="Clique para ver em tela cheia"
            onError={() => {
              if (imgSrc !== DIAGRAM_FALLBACK_URL) {
                setImgSrc(DIAGRAM_FALLBACK_URL);
              }
            }}
          />
        </div>
      </div>

      {/* Modal em Tela Cheia ao clicar */}
      {isZoomed && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center p-4 sm:p-8 cursor-zoom-out"
          onClick={() => setIsZoomed(false)}
        >
          <div className="w-full max-w-6xl flex justify-end mb-3">
            <button
              onClick={() => setIsZoomed(false)}
              className="px-4 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg text-sm font-semibold transition-colors cursor-pointer"
            >
              ✕ Fechar
            </button>
          </div>
          <div className="max-w-6xl max-h-[85vh] overflow-auto flex items-center justify-center">
            <img
              src={imgSrc}
              alt="Esquema Elétrico Oficial"
              className="max-w-full max-h-[82vh] object-contain rounded"
            />
          </div>
        </div>
      )}
    </div>
  );
}
