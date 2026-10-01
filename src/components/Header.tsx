import React, { useState } from 'react';
import { Flame, Phone, ShoppingBag, User, Menu as MenuIcon, X, Clock } from 'lucide-react';

interface HeaderProps {
  currentTab: string;
  onNavigate: (tab: string) => void;
  cartCount: number;
  onOpenCart: () => void;
  onOpenAccount: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onNavigate,
  cartCount,
  onOpenCart,
  onOpenAccount,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'inicio', label: 'Início' },
    { id: 'cardapio', label: 'Cardápio' },
    { id: 'sobre-nos', label: 'Sobre Nós' },
    { id: 'galeria', label: 'Galeria' },
    { id: 'contato-e-localizacao', label: 'Contato & Localização' },
  ];

  const handleNavClick = (tabId: string) => {
    onNavigate(tabId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 w-full z-40 bg-[#121416]/90 backdrop-blur-xl border-b border-[#333537]/50 shadow-[0_12px_32px_-4px_rgba(0,0,0,0.7)]">
      <div className="h-20 w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Brand / Logo */}
        <button
          onClick={() => handleNavClick('inicio')}
          className="flex items-center gap-2.5 shrink-0 group text-left focus:outline-none"
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#f77f00] to-[#ffba27] flex items-center justify-center text-[#121416] shadow-[0_0_16px_rgba(247,127,0,0.4)] group-hover:scale-105 transition-transform">
            <Flame className="w-6 h-6 stroke-[2.5]" />
          </div>
          <div className="flex flex-col">
            <span className="font-syne text-xl font-bold tracking-tight text-[#ffb784] uppercase group-hover:text-[#ffba27] transition-colors leading-none">
              Fogo &amp; Brasa
            </span>
            <span className="text-[10px] uppercase tracking-widest text-[#a68c7b] font-medium mt-0.5">
              Burger Artesanal
            </span>
          </div>
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden xl:flex items-center gap-2">
          {navLinks.map((link) => {
            const isActive = currentTab === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-sm font-semibold transition-all px-4 py-2 rounded-full cursor-pointer ${
                  isActive
                    ? 'bg-[#282a2c] text-[#ffb784] shadow-[0_0_12px_rgba(247,127,0,0.2)]'
                    : 'text-[#dec1af] hover:text-[#ffb784] hover:bg-[#1a1c1e]'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Actions & Status */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Schedule status pill */}
          <div className="hidden md:flex items-center gap-2 bg-[#1a1c1e] border border-[#333537] px-3.5 py-1.5 rounded-full shadow-inner">
            <span className="w-2 h-2 rounded-full bg-[#ffba27] animate-pulse"></span>
            <span className="text-[11px] font-bold text-[#e2e2e5] tracking-wider uppercase flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#ffba27]" />
              Aberto até 23h30
            </span>
          </div>

          {/* Quick Phone */}
          <a
            href="tel:11987654321"
            className="hidden lg:flex items-center gap-1.5 text-[#dec1af] hover:text-[#ffb784] transition-colors px-2 py-1.5 text-xs font-semibold"
          >
            <Phone className="w-4 h-4 text-[#ffba27]" />
            <span>(11) 98765-4321</span>
          </a>

          {/* Pedir Online / Cart Button */}
          <button
            onClick={onOpenCart}
            className="relative flex items-center gap-2 bg-gradient-to-r from-[#f77f00] to-[#ffba27] hover:brightness-110 text-[#121416] font-bold text-sm px-4 sm:px-5 py-2 rounded-full shadow-[0_4px_20px_-2px_rgba(247,127,0,0.5)] transition-all transform active:scale-95 cursor-pointer"
          >
            <ShoppingBag className="w-4 h-4 stroke-[2.5]" />
            <span className="hidden sm:inline">Pedir Online</span>
            {cartCount > 0 && (
              <span className="flex items-center justify-center min-w-[20px] h-5 px-1 bg-[#121416] text-[#ffba27] text-xs font-bold rounded-full shadow-inner">
                {cartCount}
              </span>
            )}
          </button>

          {/* User Profile */}
          <button
            onClick={onOpenAccount}
            title="Minha Conta"
            className="w-9 h-9 rounded-full bg-[#282a2c] hover:bg-[#333537] text-[#ffb784] flex items-center justify-center shrink-0 border border-[#a68c7b]/30 shadow-md transition-colors cursor-pointer"
          >
            <User className="w-4 h-4" />
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden w-9 h-9 rounded-full bg-[#1a1c1e] text-[#e2e2e5] hover:text-[#ffb784] flex items-center justify-center border border-[#333537] cursor-pointer"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#121416]/98 border-b border-[#333537] px-6 py-5 flex flex-col gap-3 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-[#333537]/50 text-xs">
            <span className="text-[#a68c7b] uppercase font-bold tracking-wider">Navegação</span>
            <span className="text-[#ffba27] flex items-center gap-1 font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#ffba27] animate-pulse"></span>
              Aberto até 23h30
            </span>
          </div>
          {navLinks.map((link) => {
            const isActive = currentTab === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-left text-base font-semibold py-2.5 px-4 rounded-xl transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#f77f00] text-[#121416] font-bold'
                    : 'text-[#dec1af] hover:text-[#ffb784] hover:bg-[#1a1c1e]'
                }`}
              >
                {link.label}
              </button>
            );
          })}
          <div className="pt-2 border-t border-[#333537]/50 flex items-center justify-between">
            <a
              href="tel:11987654321"
              className="text-xs text-[#ffb784] flex items-center gap-1.5 font-bold"
            >
              <Phone className="w-3.5 h-3.5" /> (11) 98765-4321
            </a>
            <span className="text-[11px] text-[#a68c7b]">Jardins • São Paulo</span>
          </div>
        </div>
      )}
    </header>
  );
};
