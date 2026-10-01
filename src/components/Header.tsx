import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { VibeellLogo } from './VibeellLogo';

interface HeaderProps {
  activeSection: string;
  onNavigate: (id: string) => void;
}

export function Header({ activeSection, onNavigate }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'inicio', label: 'Home' },
    { id: 'introducao', label: 'Sobre' },
    { id: 'pecas', label: 'Projetos' }, // Changed to "Projetos" to match reference vibe
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'py-3.5 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-xs' : 'py-5 md:py-7 bg-white/50 backdrop-blur-xs'
    }`}>
      <div className="max-w-[1400px] mx-auto px-5 md:px-12">
        <div className="flex items-center justify-between">
          
          {/* Logo Oficial VIBEELL com o Símbolo da Campainha e a Pulseira no 'b' */}
          <a
            href="#inicio"
            className="flex items-center cursor-pointer transition-opacity hover:opacity-90"
            onClick={(e) => { e.preventDefault(); onNavigate('inicio'); }}
            title="Vibeell - Página Inicial"
          >
            <VibeellLogo size="md" />
          </a>

          {/* Desktop Nav (Center) */}
          <nav className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`text-sm font-semibold transition-colors ${
                    isActive ? 'text-[#0055ff]' : 'text-gray-500 hover:text-[#09090b]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* CTA Button (Like "Get in touch") */}
          <button 
            onClick={() => onNavigate('introducao')}
            className="hidden md:flex items-center gap-3 bg-[#09090b] text-white pl-5 pr-1.5 py-1.5 rounded-full font-bold text-sm hover:scale-105 transition-transform"
          >
            <span>Ver projeto</span>
            <div className="bg-[#0055ff] text-white rounded-full p-2">
              <ArrowRight className="w-4 h-4" />
            </div>
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#09090b]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 px-6 py-4 space-y-4 shadow-2xl">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onNavigate(item.id);
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left py-2 text-lg font-bold text-[#09090b] hover:text-[#0055ff]"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
