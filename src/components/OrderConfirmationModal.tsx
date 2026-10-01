import React from 'react';
import { X, CheckCircle, Flame, Clock, MapPin, Bike, MessageCircle } from 'lucide-react';

interface OrderConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  orderDetails: any;
}

export const OrderConfirmationModal: React.FC<OrderConfirmationModalProps> = ({
  isOpen,
  onClose,
  orderDetails,
}) => {
  if (!isOpen || !orderDetails) return null;

  const whatsappMessage = encodeURIComponent(
    `Olá Fogo & Brasa! Acompanhando meu pedido ${orderDetails.id} em nome de ${orderDetails.customerName}. Como está a brasa?`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0c0e10]/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#1a1c1e] max-w-lg w-full rounded-3xl p-6 sm:p-8 border border-[#333537] shadow-[0_24px_50px_rgba(0,0,0,0.95)] max-h-[90vh] overflow-y-auto space-y-6">
        
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-[#f77f00]/20 flex items-center justify-center text-[#f77f00] shrink-0">
              <CheckCircle className="w-7 h-7 stroke-[2.5]" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-[#ffba27] uppercase tracking-wider">
                Pedido Confirmado com Sucesso
              </span>
              <h2 className="font-syne text-2xl font-bold text-[#e2e2e5]">
                {orderDetails.id}
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-[#282a2c] hover:bg-[#333537] text-[#a68c7b] hover:text-[#e2e2e5] flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Live Status Tracker */}
        <div className="p-4 bg-[#121416] rounded-2xl border border-[#333537] space-y-3">
          <div className="flex items-center justify-between text-xs">
            <span className="text-[#a68c7b] flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#ffba27]" />
              Previsão de Entrega:
            </span>
            <span className="font-bold text-[#ffba27]">35 - 45 minutos</span>
          </div>

          {/* Progress Steps */}
          <div className="grid grid-cols-4 gap-2 pt-2">
            <div className="flex flex-col items-center text-center">
              <div className="w-7 h-7 rounded-full bg-[#f77f00] text-[#121416] flex items-center justify-center text-xs font-bold shadow-md">
                ✓
              </div>
              <span className="text-[10px] text-[#e2e2e5] font-semibold mt-1">Recebido</span>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-7 h-7 rounded-full bg-[#ffba27] text-[#121416] flex items-center justify-center text-xs font-bold animate-pulse shadow-md">
                <Flame className="w-4 h-4 fill-current" />
              </div>
              <span className="text-[10px] text-[#ffba27] font-bold mt-1">Na Brasa</span>
            </div>

            <div className="flex flex-col items-center text-center opacity-40">
              <div className="w-7 h-7 rounded-full bg-[#282a2c] text-[#e2e2e5] flex items-center justify-center text-xs">
                3
              </div>
              <span className="text-[10px] text-[#a68c7b] mt-1">Embalagem</span>
            </div>

            <div className="flex flex-col items-center text-center opacity-40">
              <div className="w-7 h-7 rounded-full bg-[#282a2c] text-[#e2e2e5] flex items-center justify-center text-xs">
                <Bike className="w-3.5 h-3.5" />
              </div>
              <span className="text-[10px] text-[#a68c7b] mt-1">Em Rota</span>
            </div>
          </div>
        </div>

        {/* Order Details */}
        <div className="space-y-3 text-xs text-[#dec1af]">
          <div className="flex items-start gap-2">
            <MapPin className="w-4 h-4 text-[#ffb784] shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-[#e2e2e5]">Destino de Entrega:</p>
              <p>{orderDetails.customerAddress}</p>
              <p className="text-[11px] text-[#a68c7b]">Cliente: {orderDetails.customerName} • {orderDetails.customerPhone}</p>
            </div>
          </div>

          <div className="border-t border-[#333537] pt-3">
            <p className="font-semibold text-[#e2e2e5] mb-1.5">Resumo dos Itens:</p>
            <ul className="space-y-1.5">
              {orderDetails.items.map((item: any) => (
                <li key={item.cartId} className="flex justify-between">
                  <span>
                    {item.quantity}x {item.menuItem.name}
                    {item.meatDoneness ? ` (${item.meatDoneness})` : ''}
                  </span>
                  <span className="text-[#ffb784]">
                    R$ {(item.itemTotal * item.quantity).toFixed(2).replace('.', ',')}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-[#333537] pt-2 flex justify-between font-syne text-sm font-bold text-[#e2e2e5]">
            <span>Total Pago ({orderDetails.paymentMethod.toUpperCase()})</span>
            <span className="text-[#ffba27]">R$ {orderDetails.grandTotal.toFixed(2).replace('.', ',')}</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <a
            href={`https://wa.me/5511987654321?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-3 px-4 rounded-full bg-[#282a2c] hover:bg-[#333537] text-[#ffba27] text-xs font-bold flex items-center justify-center gap-2 border border-[#ffba27]/30 transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            Acompanhar no WhatsApp
          </a>

          <button
            onClick={onClose}
            className="py-3 px-6 rounded-full bg-[#f77f00] hover:bg-[#ffba27] text-[#121416] text-xs font-bold transition-colors cursor-pointer"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
