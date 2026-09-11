import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Introduction } from './components/Introduction';
import { Methodology } from './components/Methodology';
import { HardwareSpecs } from './components/HardwareSpecs';
import { DevelopmentResults } from './components/DevelopmentResults';
import { TeamSection } from './components/TeamSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('inicio');

  const handleNavigate = (id: string) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'introducao', 'metodologia', 'pecas', 'desenvolvimento', 'equipe', 'faq'];
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
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#09090b] font-sans">
      <Header activeSection={activeSection} onNavigate={handleNavigate} />
      <main>
        <Hero onExplore={() => handleNavigate('introducao')} onViewHardware={() => handleNavigate('pecas')} />
        <Introduction />
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
