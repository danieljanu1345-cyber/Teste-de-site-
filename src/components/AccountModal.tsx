import React from 'react';
import { X, User, Flame, Award, Clock, ChevronRight } from 'lucide-react';

interface AccountModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateMenu: () => void;
}

export const AccountModal: React.FC<AccountModalProps> = ({ isOpen, onClose, onNavigateMenu }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0c0e10]/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#1a1c1e] max-w-md w-full rounded-3xl p-6 sm:p-7 border border-[#333537] shadow-[0_24px_50px_rgba(0,0,0,0.95)] space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#333537]">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-[#f77f00]/20 flex items-center justify-center text-[#f77f00] font-bold text-lg border border-[#f77f00]/40">
              <User className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-syne text-lg font-bold text-[#e2e2e5]">Membro Fogo &amp; Brasa</h3>
              <span className="text-xs text-[#ffba27] font-semibold flex items-center gap-1">
                <Flame className="w-3.5 h-3.5 fill-current" /> Nível Mestre Churrasqueiro
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-[#282a2c] hover:bg-[#333537] text-[#a68c7b] hover:text-[#e2e2e5] flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Loyalty Balance Card */}
        <div className="p-4 rounded-2xl bg-gradient-to-tr from-[#1e2022] to-[#282a2c] border border-[#ffba27]/30 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs text-[#a68c7b] uppercase font-bold tracking-wider">
              Pontos de Brasa Acumulados
            </span>
            <Award className="w-5 h-5 text-[#ffba27]" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="font-syne text-3xl font-bold text-[#ffb784]">480</span>
            <span className="text-xs text-[#dec1af]">pontos (Vale R$ 24,00 em burgers)</span>
          </div>
          <div className="w-full bg-[#121416] h-2 rounded-full overflow-hidden">
            <div className="bg-gradient-to-r from-[#f77f00] to-[#ffba27] h-full w-[75%] rounded-full" />
          </div>
          <p className="text-[11px] text-[#a68c7b]">Faltam 120 pontos para resgatar uma Batata Rústica Vulcano grátis.</p>
        </div>

        {/* Quick Menu Options */}
        <div className="space-y-2 text-xs">
          <button
            onClick={() => {
              onClose();
              onNavigateMenu();
            }}
            className="w-full p-3 rounded-xl bg-[#1e2022] hover:bg-[#282a2c] text-[#e2e2e5] flex items-center justify-between transition-colors cursor-pointer"
          >
            <div className="flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-[#ffb784]" />
              <span>Fazer Novo Pedido na Brasa</span>
            </div>
            <ChevronRight className="w-4 h-4 text-[#a68c7b]" />
          </button>

          <a
            href="https://wa.me/5511987654321?text=Ol%C3%A1!%20Gostaria%20de%20consultar%20meus%20pedidos%20anteriores."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full p-3 rounded-xl bg-[#1e2022] hover:bg-[#282a2c] text-[#e2e2e5] flex items-center justify-between transition-colors"
          >
            <div className="flex items-center gap-2.5">
              <Award className="w-4 h-4 text-[#ffba27]" />
              <span>Histórico de Pedidos no WhatsApp</span>
            </div>
            <ChevronRight className="w-4 h-4 text-[#a68c7b]" />
          </a>
        </div>

        {/* Footer */}
        <button
          onClick={onClose}
          className="w-full py-3 rounded-full bg-[#282a2c] hover:bg-[#333537] text-[#e2e2e5] text-xs font-bold transition-colors cursor-pointer"
        >
          Fechar
        </button>
      </div>
    </div>
  );
};
