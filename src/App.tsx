import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Introduction } from './components/Introduction';
import { GameSection } from './components/GameSection';
import { Methodology } from './components/Methodology';
import { HardwareSpecs } from './components/HardwareSpecs';
import { DevelopmentResults } from './components/DevelopmentResults';
import { TeamSection } from './components/TeamSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('inicio');
  const [isProtectedLocked, setIsProtectedLocked] = useState<boolean>(false);

  const handleNavigate = (id: string) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Bloqueio de inspeção de código e ferramentas de desenvolvedor no navegador
  useEffect(() => {
    const triggerProtection = (e?: Event) => {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }
      setIsProtectedLocked(true);
    };

    // 1. Bloqueia atalhos de teclado (F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U, etc.)
    const handleKeyDown = (e: KeyboardEvent) => {
      // Tecla F12
      if (e.key === 'F12' || e.keyCode === 123) {
        triggerProtection(e);
        return;
      }

      // Ctrl+Shift+I / J / C (DevTools Windows/Linux)
      if (e.ctrlKey && e.shiftKey && ['I', 'i', 'J', 'j', 'C', 'c'].includes(e.key)) {
        triggerProtection(e);
        return;
      }

      // Cmd+Option+I / J / C (DevTools macOS)
      if (e.metaKey && e.altKey && ['I', 'i', 'J', 'j', 'C', 'c'].includes(e.key)) {
        triggerProtection(e);
        return;
      }

      // Ctrl+U ou Cmd+U (Ver código-fonte)
      if ((e.ctrlKey || e.metaKey) && (e.key === 'u' || e.key === 'U')) {
        triggerProtection(e);
        return;
      }

      // Ctrl+S ou Cmd+S (Salvar arquivos do site)
      if ((e.ctrlKey || e.metaKey) && (e.key === 's' || e.key === 'S')) {
        triggerProtection(e);
        return;
      }
    };

    // 2. Bloqueia botão direito (Inspecionar elemento)
    const handleContextMenu = (e: MouseEvent) => {
      triggerProtection(e);
    };

    window.addEventListener('keydown', handleKeyDown, { capture: true });
    window.addEventListener('contextmenu', handleContextMenu, { capture: true });

    return () => {
      window.removeEventListener('keydown', handleKeyDown, { capture: true });
      window.removeEventListener('contextmenu', handleContextMenu, { capture: true });
    };
  }, []);

  useEffect(() => {
    if (isProtectedLocked) return;

    const handleScroll = () => {
      const sections = ['inicio', 'introducao', 'jogo', 'metodologia', 'pecas', 'desenvolvimento', 'equipe', 'faq'];
      const scrollPos = window.scrollY + 200;

      for (const sec of sections) {
        const el = document.getElementById(sec);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sec);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isProtectedLocked]);

  // Se o usuário tentar inspecionar ou acessar arquivos, desmonta o site e exibe a tela preta de proteção
  if (isProtectedLocked) {
    return (
      <div className="fixed inset-0 z-[999999] bg-black text-white flex flex-col items-center justify-center p-6 text-center select-none font-mono">
        <div className="max-w-2xl px-6 py-12 border border-neutral-800 bg-neutral-950 rounded-2xl shadow-2xl">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full border border-red-500/40 bg-red-950/30 flex items-center justify-center text-red-500">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-red-500 tracking-wider mb-4 uppercase">
            ESTRUTURA DO SITE PROTEGIDA BY LUKA
          </h1>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-8">
            Tentativa de inspeção ou acesso à estrutura de arquivos detectada. O conteúdo desta sessão foi removido da tela.
          </p>
          <div className="text-xs text-gray-500 border-t border-neutral-800 pt-4">
            Recarregue a página (F5) para restaurar a visualização padrão.
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-[#09090b] font-sans">
      <Header activeSection={activeSection} onNavigate={handleNavigate} />
      <main>
        <Hero onExplore={() => handleNavigate('introducao')} onViewHardware={() => handleNavigate('pecas')} />
        <Introduction />
        <GameSection />
        <Methodology />
        <HardwareSpecs />
        <DevelopmentResults />
        <TeamSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
