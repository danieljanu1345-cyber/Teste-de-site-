import React from 'react';
import { Flame, Clock, MapPin, Award, Instagram, MessageCircle, Video, Globe, Phone } from 'lucide-react';

interface FooterProps {
  onNavigate: (tab: string) => void;
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenPrivacy, onOpenTerms }) => {
  return (
    <footer className="w-full bg-[#0c0e10] border-t border-[#282a2c] pt-14 pb-8 shadow-[0_-8px_30px_rgba(0,0,0,0.5)]">
      <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Brand & Philosophy */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#f77f00] flex items-center justify-center text-[#121416]">
                <Flame className="w-5 h-5 stroke-[2.5]" />
              </div>
              <span className="font-syne text-lg font-bold text-[#ffb784] uppercase tracking-tight">
                Fogo &amp; Brasa
              </span>
            </div>
            <p className="text-sm text-[#dec1af] leading-relaxed">
              O teatro do fogo aberto, carne Angus nobre moída na hora e brioche tostado na manteiga de garrafa. Experiência sensorial única da brasa à sua mesa.
            </p>
            <div className="flex items-center gap-2.5 pt-1">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-[#282a2c] flex items-center justify-center text-[#e2e2e5] hover:text-[#ffba27] hover:bg-[#333537] transition-all"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/5511987654321"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-full bg-[#282a2c] flex items-center justify-center text-[#e2e2e5] hover:text-[#ffba27] hover:bg-[#333537] transition-all"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="w-9 h-9 rounded-full bg-[#282a2c] flex items-center justify-center text-[#e2e2e5] hover:text-[#ffba27] hover:bg-[#333537] transition-all"
              >
                <Video className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="Website"
                className="w-9 h-9 rounded-full bg-[#282a2c] flex items-center justify-center text-[#e2e2e5] hover:text-[#ffba27] hover:bg-[#333537] transition-all"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Horário */}
          <div className="flex flex-col gap-3">
            <h3 className="font-syne text-base font-bold text-[#e2e2e5] flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#ffb784]" />
              Horário
            </h3>
            <div className="bg-[#1a1c1e] p-4 rounded-2xl border border-[#333537] space-y-2">
              <p className="text-xs font-bold text-[#ffba27] uppercase tracking-wider">
                Terça a Domingo
              </p>
              <p className="text-sm font-semibold text-[#e2e2e5]">
                18h00 às 23h30
              </p>
              <span className="block text-xs text-[#a68c7b] pt-1">
                Segundas-feiras: Descanso dos mestres churrasqueiros
              </span>
            </div>
          </div>

          {/* Column 3: Onde Estamos */}
          <div className="flex flex-col gap-3">
            <h3 className="font-syne text-base font-bold text-[#e2e2e5] flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#ffb784]" />
              Onde Estamos
            </h3>
            <div className="space-y-1.5 text-sm text-[#dec1af]">
              <p className="font-semibold text-[#e2e2e5]">Rua das Brasas, 450</p>
              <p>Bairro Jardins • São Paulo - SP</p>
              <p className="text-[#a68c7b]">CEP: 01410-000</p>
              <div className="pt-2">
                <a
                  className="text-sm text-[#ffb784] hover:text-[#ffba27] flex items-center gap-1.5 font-semibold transition-colors"
                  href="tel:11987654321"
                >
                  <Phone className="w-4 h-4" />
                  (11) 98765-4321
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Qualidade Artesanal */}
          <div className="flex flex-col gap-3">
            <h3 className="font-syne text-base font-bold text-[#e2e2e5] flex items-center gap-2">
              <Award className="w-4 h-4 text-[#ffb784]" />
              Qualidade Artesanal
            </h3>
            <ul className="space-y-2 text-xs text-[#dec1af]">
              <li className="flex items-start gap-2">
                <span className="text-[#ffba27] font-bold">✓</span>
                <span>100% Angus Certificado sob brasa viva</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#ffba27] font-bold">✓</span>
                <span>Pão brioche de fermentação natural assado diariamente</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#ffba27] font-bold">✓</span>
                <span>Queijos curados e defumação em lenha de macieira</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-[#282a2c] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#a68c7b]">
          <p>© {new Date().getFullYear()} Fogo &amp; Brasa Burger Artesanal. Todos os direitos reservados.</p>
          <div className="flex items-center gap-6">
            <button
              onClick={() => onNavigate('inicio')}
              className="hover:text-[#ffb784] transition-colors cursor-pointer"
            >
              Início
            </button>
            <button
              onClick={() => onNavigate('cardapio')}
              className="hover:text-[#ffb784] transition-colors cursor-pointer"
            >
              Cardápio
            </button>
            <button
              onClick={onOpenPrivacy}
              className="hover:text-[#ffb784] transition-colors cursor-pointer"
            >
              Privacidade
            </button>
            <button
              onClick={onOpenTerms}
              className="hover:text-[#ffb784] transition-colors cursor-pointer"
            >
              Termos de Uso
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
