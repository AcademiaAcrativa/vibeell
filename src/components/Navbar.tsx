import { useState } from 'react';
import { Search, ShoppingBag, Bell, ChevronRight, Cpu, Waves, School, Sliders, CheckCircle2, Radio, BatteryCharging } from 'lucide-react';

interface NavbarProps {
  onSelectCategory: (id: string) => void;
  activeCategory: string;
}

export function Navbar({ onSelectCategory, activeCategory }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const categories = [
    { id: 'vibeel-duo', name: 'Vibeel Duo', badge: 'Novo', icon: 'dual' },
    { id: 'transmissor', name: 'Transmissor TX', badge: '', icon: 'tx' },
    { id: 'receptor', name: 'Receptor Háptico', badge: 'Novo', icon: 'rx' },
    { id: 'hardware', name: 'Peças & Circuito', badge: '', icon: 'chip' },
    { id: 'simulador', name: 'Padrões Hápticos', badge: '', icon: 'wave' },
    { id: 'eterj', name: 'ETERJ & FECIP', badge: '2026', icon: 'school' },
    { id: 'specs', name: 'Especificações', badge: '', icon: 'specs' },
  ];

  const renderNavIcon = (type: string) => {
    switch (type) {
      case 'dual':
        return (
          <div className="w-10 h-10 flex items-center justify-center gap-0.5">
            <div className="w-3.5 h-7 rounded-[4px] bg-[#1d1d1f] border border-[#d2d2d7] shadow-sm flex flex-col items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-400"></div>
            </div>
            <div className="w-6 h-6 rounded-full bg-[#e5e5ea] border border-[#d2d2d7] flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-[#1d1d1f]"></div>
            </div>
          </div>
        );
      case 'tx':
        return (
          <div className="w-10 h-10 flex items-center justify-center">
            <div className="w-5 h-8 rounded-[6px] bg-[#1d1d1f] border border-[#d2d2d7] flex flex-col items-center justify-between p-1 shadow-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
              <div className="w-3 h-3 rounded-full bg-[#3a3a3c] border border-amber-400/80"></div>
              <div className="w-2 h-0.5 bg-[#8e8e93] rounded-full"></div>
            </div>
          </div>
        );
      case 'rx':
        return (
          <div className="w-10 h-10 flex items-center justify-center">
            <div className="w-8 h-8 rounded-full bg-[#f2f2f7] border border-[#c6c6c8] flex flex-col items-center justify-center shadow-sm relative">
              <div className="w-4 h-4 rounded-full bg-[#1d1d1f] flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></div>
              </div>
            </div>
          </div>
        );
      case 'chip':
        return (
          <div className="w-10 h-10 flex items-center justify-center">
            <div className="w-7 h-7 rounded-[6px] bg-[#1d1d1f] flex items-center justify-center text-white shadow-sm border border-[#3a3a3c]">
              <Cpu className="w-4 h-4 text-[#0071e3]" />
            </div>
          </div>
        );
      case 'wave':
        return (
          <div className="w-10 h-10 flex items-center justify-center">
            <div className="w-7 h-7 rounded-full bg-[#e5f1fc] text-[#0071e3] flex items-center justify-center">
              <Waves className="w-4 h-4" />
            </div>
          </div>
        );
      case 'school':
        return (
          <div className="w-10 h-10 flex items-center justify-center">
            <div className="w-7 h-7 rounded-[6px] bg-[#1d1d1f] text-amber-400 flex items-center justify-center">
              <School className="w-4 h-4" />
            </div>
          </div>
        );
      case 'specs':
        return (
          <div className="w-10 h-10 flex items-center justify-center">
            <div className="w-7 h-7 rounded-[6px] bg-[#f2f2f7] border border-[#d2d2d7] text-[#1d1d1f] flex items-center justify-center">
              <Sliders className="w-4 h-4" />
            </div>
          </div>
        );
      default:
        return <Bell className="w-6 h-6 text-[#1d1d1f]" />;
    }
  };

  return (
    <div className="sticky top-0 z-50 bg-[#f5f5f7]">
      {/* 1. Global Apple-style Top Bar */}
      <nav className="bg-[rgba(245,245,247,0.85)] backdrop-blur-xl border-b border-black/[0.08] text-[#1d1d1f]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-11 flex items-center justify-between text-xs font-normal">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-1.5 text-[#1d1d1f] hover:opacity-70 transition-opacity">
            <Bell className="w-4 h-4 fill-current" />
            <span className="font-semibold tracking-tight text-sm">Vibeel</span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-7 text-[#1d1d1f]/80">
            <a href="#vibeel-duo" className="hover:text-[#1d1d1f] transition-colors">Visão Geral</a>
            <a href="#hardware" className="hover:text-[#1d1d1f] transition-colors">As 7 Peças</a>
            <a href="#simulador" className="hover:text-[#1d1d1f] transition-colors">Padrões Hápticos</a>
            <a href="#eterj" className="hover:text-[#1d1d1f] transition-colors">ETERJ & FECIP 2026</a>
            <a href="#sobre" className="hover:text-[#1d1d1f] transition-colors">O Problema</a>
            <a href="#specs" className="hover:text-[#1d1d1f] transition-colors">Especificações</a>
          </div>

          {/* Right info link */}
          <div className="flex items-center gap-4 text-[#1d1d1f]/80">
            <a
              href="#eterj"
              className="text-xs text-[#0066cc] hover:underline font-medium"
            >
              FECIP 2026
            </a>
          </div>
        </div>
      </nav>

      {/* 2. Announcement Ribbon */}
      <div className="bg-white border-b border-black/[0.06] text-center py-2.5 px-4 text-xs text-[#1d1d1f]">
        <span>
          Projeto de tecnologia assistiva desenvolvido por estudantes da <strong>ETERJ</strong> para a <strong>FECIP 2026</strong>.{' '}
        </span>
        <a href="#eterj" className="text-[#0066cc] hover:underline font-medium inline-flex items-center ml-1">
          Conheça a pesquisa <ChevronRight className="w-3 h-3 ml-0.5 inline" />
        </a>
      </div>

      {/* 3. Section Title + Apple Product Icon Carousel (from user screenshot) */}
      <div className="bg-white/80 backdrop-blur-md border-b border-black/[0.06] pt-8 pb-4">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          
          {/* Main Display Title like "iPhone" in the user's uploaded image */}
          <div className="mb-6">
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-[#1d1d1f] tracking-tight">
              Vibeel
            </h1>
            <p className="text-sm text-[#86868b] mt-1">
              A campainha vibratória de alta precisão para a comunidade surda.
            </p>
          </div>

          {/* Horizontal Icon Shelf (exact layout as Apple iPhone page) */}
          <div className="flex items-center justify-start sm:justify-center gap-6 sm:gap-10 overflow-x-auto no-scrollbar py-2">
            {categories.map((cat) => {
              const isSelected = activeCategory === cat.id;
              return (
                <a
                  key={cat.id}
                  href={`#${cat.id}`}
                  onClick={() => onSelectCategory(cat.id)}
                  className={`flex flex-col items-center min-w-[72px] group transition-all text-center ${
                    isSelected ? 'opacity-100 scale-105' : 'opacity-75 hover:opacity-100'
                  }`}
                >
                  <div className="mb-2 transition-transform group-hover:-translate-y-0.5">
                    {renderNavIcon(cat.icon)}
                  </div>
                  <span className="text-[11px] font-medium text-[#1d1d1f] leading-tight line-clamp-1">
                    {cat.name}
                  </span>
                  {cat.badge && (
                    <span className="text-[9px] text-[#b64400] font-semibold mt-0.5 tracking-tight">
                      {cat.badge}
                    </span>
                  )}
                </a>
              );
            })}
          </div>

        </div>
      </div>
    </div>
  );
}
