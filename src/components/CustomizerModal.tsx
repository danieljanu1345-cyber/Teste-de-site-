import React, { useState, useEffect } from 'react';
import { X, Flame, Check, Plus } from 'lucide-react';
import { MenuItem } from '../types';

interface CustomizerModalProps {
  item: MenuItem | null;
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (
    item: MenuItem,
    doneness: 'mal' | 'ponto' | 'bem' | undefined,
    extras: { name: string; price: number }[],
    notes: string,
    total: number
  ) => void;
}

const AVAILABLE_EXTRAS = [
  { id: 'bacon', name: 'Bacon artesanal crocante', price: 6.0 },
  { id: 'cheddar', name: 'Porção extra de Cheddar Inglês', price: 5.0 },
  { id: 'patty', name: 'Blend Angus adicional 100g', price: 10.0 },
  { id: 'sauce', name: 'Potinho extra de maionese trufada', price: 4.5 },
];

export const CustomizerModal: React.FC<CustomizerModalProps> = ({
  item,
  isOpen,
  onClose,
  onConfirm,
}) => {
  const [doneness, setDoneness] = useState<'mal' | 'ponto' | 'bem'>('ponto');
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);
  const [notes, setNotes] = useState('');

  useEffect(() => {
    if (isOpen) {
      setDoneness('ponto');
      setSelectedExtras([]);
      setNotes('');
    }
  }, [isOpen, item]);

  if (!isOpen || !item) return null;

  const handleExtraToggle = (id: string) => {
    setSelectedExtras((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const extrasCost = selectedExtras.reduce((sum, id) => {
    const extra = AVAILABLE_EXTRAS.find((e) => e.id === id);
    return sum + (extra ? extra.price : 0);
  }, 0);

  const finalTotal = item.price + extrasCost;

  const handleConfirm = () => {
    const extrasList = selectedExtras.map((id) => {
      const extra = AVAILABLE_EXTRAS.find((e) => e.id === id)!;
      return { name: extra.name, price: extra.price };
    });
    onConfirm(
      item,
      item.category === 'burgers' ? doneness : undefined,
      extrasList,
      notes.trim(),
      finalTotal
    );
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0c0e10]/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#1a1c1e] max-w-lg w-full rounded-3xl p-6 sm:p-8 border border-[#333537] shadow-[0_24px_50px_rgba(0,0,0,0.9)] max-h-[90vh] overflow-y-auto space-y-6">
        {/* Modal Header */}
        <div className="flex items-start justify-between pb-4 border-b border-[#333537]">
          <div>
            <span className="text-[11px] font-bold text-[#ffb784] uppercase tracking-widest flex items-center gap-1">
              <Flame className="w-3.5 h-3.5 text-[#f77f00]" />
              Montagem Sob Medida
            </span>
            <h2 className="font-syne text-2xl font-bold text-[#e2e2e5] mt-1">{item.name}</h2>
            <p className="text-xs text-[#dec1af] mt-1 leading-relaxed">{item.description}</p>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-[#282a2c] flex items-center justify-center text-[#a68c7b] hover:text-[#e2e2e5] hover:bg-[#333537] transition-colors cursor-pointer shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Meat Doneness (if burger) */}
        {item.category === 'burgers' && (
          <div className="space-y-3">
            <label className="text-sm font-semibold text-[#e2e2e5] flex items-center gap-2">
              <Flame className="w-4 h-4 text-[#f77f00]" />
              Ponto da Carne
            </label>
            <div className="grid grid-cols-3 gap-2.5">
              <button
                type="button"
                onClick={() => setDoneness('mal')}
                className={`flex flex-col items-center justify-center p-3 rounded-2xl border text-center transition-all cursor-pointer ${
                  doneness === 'mal'
                    ? 'bg-[#f77f00] text-[#121416] border-[#f77f00] font-bold shadow-md'
                    : 'bg-[#1e2022] text-[#dec1af] border-[#333537] hover:bg-[#282a2c]'
                }`}
              >
                <span className="text-xs font-bold">Mal Passado</span>
                <span className="text-[10px] opacity-80">Vermelho • Suculento</span>
              </button>

              <button
                type="button"
                onClick={() => setDoneness('ponto')}
                className={`flex flex-col items-center justify-center p-3 rounded-2xl border text-center transition-all cursor-pointer ${
                  doneness === 'ponto'
                    ? 'bg-[#f77f00] text-[#121416] border-[#f77f00] font-bold shadow-md'
                    : 'bg-[#1e2022] text-[#dec1af] border-[#333537] hover:bg-[#282a2c]'
                }`}
              >
                <span className="text-xs font-bold">Ao Ponto</span>
                <span className="text-[10px] opacity-80">Rosado no centro</span>
              </button>

              <button
                type="button"
                onClick={() => setDoneness('bem')}
                className={`flex flex-col items-center justify-center p-3 rounded-2xl border text-center transition-all cursor-pointer ${
                  doneness === 'bem'
                    ? 'bg-[#f77f00] text-[#121416] border-[#f77f00] font-bold shadow-md'
                    : 'bg-[#1e2022] text-[#dec1af] border-[#333537] hover:bg-[#282a2c]'
                }`}
              >
                <span className="text-xs font-bold">Bem Passado</span>
                <span className="text-[10px] opacity-80">Cozido por inteiro</span>
              </button>
            </div>
          </div>
        )}

        {/* Add-ons / Toppings */}
        <div className="space-y-3">
          <label className="text-sm font-semibold text-[#e2e2e5] flex items-center gap-2">
            <Plus className="w-4 h-4 text-[#ffba27]" />
            Adicionais &amp; Toppings Extras
          </label>
          <div className="space-y-2">
            {AVAILABLE_EXTRAS.map((extra) => {
              const isChecked = selectedExtras.includes(extra.id);
              return (
                <label
                  key={extra.id}
                  className={`flex items-center justify-between p-3.5 rounded-2xl border cursor-pointer transition-colors ${
                    isChecked
                      ? 'bg-[#282a2c] border-[#f77f00]/50 text-[#e2e2e5]'
                      : 'bg-[#1e2022] border-[#333537] hover:bg-[#282a2c] text-[#dec1af]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => handleExtraToggle(extra.id)}
                      className="w-4 h-4 rounded accent-[#f77f00] cursor-pointer"
                    />
                    <span className="text-sm">{extra.name}</span>
                  </div>
                  <span className="text-xs font-bold text-[#ffba27]">
                    + R$ {extra.price.toFixed(2).replace('.', ',')}
                  </span>
                </label>
              );
            })}
          </div>
        </div>

        {/* Notes */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-[#e2e2e5]">
            Observações para a cozinha
          </label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows={2}
            placeholder="Ex: Tirar picles, bacon bem estaladiço, molho à parte..."
            className="w-full bg-[#1e2022] border border-[#333537] rounded-2xl p-3.5 text-xs text-[#e2e2e5] placeholder:text-[#a68c7b] focus:outline-none focus:border-[#f77f00] transition-colors resize-none shadow-inner"
          />
        </div>

        {/* Modal Bottom Bar */}
        <div className="pt-4 border-t border-[#333537] flex items-center justify-between gap-4">
          <div className="flex flex-col">
            <span className="text-[11px] text-[#a68c7b] uppercase font-bold tracking-wider">
              Total do Item
            </span>
            <span className="font-syne text-2xl font-bold text-[#ffb784]">
              R$ {finalTotal.toFixed(2).replace('.', ',')}
            </span>
          </div>
          <button
            onClick={handleConfirm}
            className="px-6 py-3.5 rounded-full bg-gradient-to-r from-[#f77f00] to-[#ffba27] hover:brightness-110 text-[#121416] font-bold text-sm shadow-[0_8px_24px_rgba(247,127,0,0.4)] transition-transform active:scale-95 flex items-center gap-2 cursor-pointer"
          >
            <Check className="w-4 h-4 stroke-[3]" />
            Adicionar à Bandeja
          </button>
        </div>
      </div>
    </div>
  );
};
