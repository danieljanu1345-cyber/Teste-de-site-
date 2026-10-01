import React, { useState } from 'react';
import { X, RotateCw, Eye, Sparkles } from 'lucide-react';

interface VirtualTourModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VirtualTourModal: React.FC<VirtualTourModalProps> = ({ isOpen, onClose }) => {
  const [activeSpot, setActiveSpot] = useState<'salao' | 'parrilla' | 'mezanino'>('salao');

  if (!isOpen) return null;

  const spots = {
    salao: {
      title: 'Salão Principal & Cabines de Carvalho',
      description: 'Lustres de filamento retrô, mesas amplas de madeira maciça de demolição e clima acolhedor para grupos e casais.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAvNHZluSw72Hkw-S5AybjOCx_gU3IODOG61ntCfoJVqYvJT7A46umvnde35R5v_Yn8Atoc2eNffMRb3jtaPNsY9TnmpDJxTlXp-GtuZ7etmwKOnvY5bCdOmMjB3_vLD6EnSiRj72aCfX2x0AWUfCFW_9aZv-ldIBvT-v9ApWKgwsKARbCPk-shyuliZ7NYNqMGd8AIu6k2rRUv7piAtZnDZCZW3mMaasqM03Fq29knA2Pg1nbWi1upbQ',
    },
    parrilla: {
      title: 'Parrilla Aberta & Teatro do Fogo',
      description: 'Grelhas de ferro fundido sob calor constante de lenha de macieira e carvão vegetal puro.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCasgVDByVRTrdJ7hBYU22VIdc0GFzRAl8pJ2pbNFpLfDsZ-1u_O1A-Rzvr0kPYiGKPdmsitrGf8XB81GVt8jAnlpmUtPpZ47f_YGofHdQveCF4aZMVuWm4Yc6LCJrPa8kphmM58y9RiX8WsMGk_DhTx-_CFti5BI6mZxnbY54L1jsk6t7ElHTfBmcnpnU3jOkVTvZw431bN73hU3C--kY5pAdLnWS1Oz4hyjFNuTz2afZ8VXfPSKQYgA',
    },
    mezanino: {
      title: 'Mezanino Privativo para Eventos',
      description: 'Espaço com capacidade para até 80 pessoas, 6 torneiras de chopp artesanal e serviço de garçom exclusivo.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBCS4-ncc8Iw0LqwO6J8SbjgmKNJxAJaYS4bcMnWtpuXPldGkgJ0T6I1X_g_AudhmMPUsTBNyQyhzvbEXc_gMbOyCiDO_SEhFsF5yoWSyMO7R3jLLdtv9DRASB6DfGq8zetqJE2P9qAti7hp9hCliTtcbcRkl2OwzzPl50nTTH2sSbTfFuq1OM4g901t7fPqg0WP7ujgAz9p6muosCtkBnnDM3ZAjBPj7FmUZDHa8DmBhPc5AFDO1ybrQ',
    },
  };

  const current = spots[activeSpot];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0c0e10]/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#1a1c1e] max-w-3xl w-full rounded-3xl overflow-hidden border border-[#333537] shadow-[0_24px_50px_rgba(0,0,0,0.95)]">
        {/* Header */}
        <div className="p-5 border-b border-[#333537] flex items-center justify-between bg-[#121416]/60">
          <div className="flex items-center gap-2">
            <RotateCw className="w-5 h-5 text-[#ffba27]" />
            <h3 className="font-syne text-lg font-bold text-[#e2e2e5]">Tour Virtual Interativo 360°</h3>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-[#282a2c] hover:bg-[#333537] text-[#a68c7b] hover:text-[#e2e2e5] flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Viewport */}
        <div className="relative aspect-video w-full bg-[#0c0e10] overflow-hidden group">
          <img
            src={current.image}
            alt={current.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e10] via-transparent to-transparent opacity-80" />

          {/* Floating Spot Selector */}
          <div className="absolute top-4 left-4 flex gap-2">
            <button
              onClick={() => setActiveSpot('salao')}
              className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeSpot === 'salao'
                  ? 'bg-[#f77f00] text-[#121416]'
                  : 'bg-[#121416]/80 text-[#e2e2e5] backdrop-blur-md hover:bg-[#282a2c]'
              }`}
            >
              Salão Principal
            </button>
            <button
              onClick={() => setActiveSpot('parrilla')}
              className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeSpot === 'parrilla'
                  ? 'bg-[#f77f00] text-[#121416]'
                  : 'bg-[#121416]/80 text-[#e2e2e5] backdrop-blur-md hover:bg-[#282a2c]'
              }`}
            >
              Parrilla &amp; Brasa
            </button>
            <button
              onClick={() => setActiveSpot('mezanino')}
              className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeSpot === 'mezanino'
                  ? 'bg-[#f77f00] text-[#121416]'
                  : 'bg-[#121416]/80 text-[#e2e2e5] backdrop-blur-md hover:bg-[#282a2c]'
              }`}
            >
              Mezanino Eventos
            </button>
          </div>

          {/* Bottom Card */}
          <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-[#121416]/90 backdrop-blur-md border border-[#333537] text-xs">
            <div className="flex items-center gap-2 text-[#ffba27] font-bold text-xs uppercase tracking-wider mb-1">
              <Eye className="w-3.5 h-3.5" />
              Vista Atual
            </div>
            <h4 className="font-syne text-base font-bold text-[#e2e2e5]">{current.title}</h4>
            <p className="text-[#dec1af] mt-1">{current.description}</p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#121416] flex items-center justify-between text-xs text-[#a68c7b]">
          <span className="flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-[#f77f00]" />
            Rua das Brasas, 450 • Bairro Jardins, São Paulo
          </span>
          <a
            href="https://wa.me/5511987654321?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20visita%20ao%20espa%C3%A7o%20Fogo%20%26%20Brasa."
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full bg-[#f77f00] hover:bg-[#ffba27] text-[#121416] font-bold transition-colors cursor-pointer"
          >
            Agendar Visita Presencial
          </a>
        </div>
      </div>
    </div>
  );
};
