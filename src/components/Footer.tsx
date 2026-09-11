export function Footer() {
  return (
    <footer className="bg-white text-[#09090b] pt-16 md:pt-20 pb-8 md:pb-10 border-t border-gray-100">
      <div className="max-w-[1400px] mx-auto px-5 md:px-12 lg:px-20">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 mb-12 md:mb-16 text-center md:text-left">
          <div>
            <span className="font-display font-bold text-3xl tracking-tight text-[#09090b] block mb-2">
              VIBEELL
            </span>
            <span className="text-sm text-gray-500">
              Projeto acadêmico ETERJ • XL FECIP 2026
            </span>
          </div>
          
          <div className="text-3xl md:text-6xl font-bold tracking-tighter text-gray-100">
            TURMA 1121
          </div>
        </div>

        <div className="pt-6 md:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-gray-400 border-t border-gray-100">
          <p className="text-center sm:text-left">
            © 2026 VIBEELL. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            <span className="hover:text-[#0055ff] transition-colors cursor-pointer">Acessibilidade</span>
            <span className="hover:text-[#0055ff] transition-colors cursor-pointer">Engenharia</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
