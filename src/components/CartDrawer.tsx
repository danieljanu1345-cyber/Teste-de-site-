import React, { useState } from 'react';
import { X, Plus, Minus, Trash2, Tag, ShoppingBag, ArrowRight, CheckCircle2, MapPin, CreditCard, QrCode, Bike } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (cartId: string, delta: number) => void;
  onRemoveItem: (cartId: string) => void;
  onClearCart: () => void;
  onOrderSuccess: (orderId: string, orderDetails: any) => void;
  onNavigateMenu: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onOrderSuccess,
  onNavigateMenu,
}) => {
  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>('PRIMEIRACOMPRA10');
  const [deliveryType, setDeliveryType] = useState<'delivery' | 'retirada'>('delivery');
  const [checkoutStep, setCheckoutStep] = useState<'cart' | 'checkout'>('cart');

  // Customer & Delivery form
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerAddress, setCustomerAddress] = useState('Rua Oscar Freire, 1200 - Jardins');
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'cartao' | 'vr' | 'dinheiro'>('pix');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const rawSubtotal = items.reduce((sum, item) => sum + item.itemTotal * item.quantity, 0);
  const discountRate = appliedCoupon === 'PRIMEIRACOMPRA10' ? 0.1 : 0;
  const discountAmount = rawSubtotal * discountRate;
  const pixDiscount = paymentMethod === 'pix' && checkoutStep === 'checkout' ? (rawSubtotal - discountAmount) * 0.05 : 0;
  const deliveryFee = deliveryType === 'delivery' ? (rawSubtotal > 60 ? 0 : 8.90) : 0;
  const grandTotal = Math.max(0, rawSubtotal - discountAmount - pixDiscount + deliveryFee);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (couponCode.trim().toUpperCase() === 'PRIMEIRACOMPRA10') {
      setAppliedCoupon('PRIMEIRACOMPRA10');
      setCouponCode('');
    } else {
      alert('Cupom inválido. Tente usar: PRIMEIRACOMPRA10');
    }
  };

  const handleProceedToCheckout = () => {
    if (items.length === 0) return;
    setCheckoutStep('checkout');
  };

  const handleFinishOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !customerPhone) {
      alert('Por favor preencha seu nome e WhatsApp para contato do entregador.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      const generatedOrderId = `#FB-${Math.floor(1000 + Math.random() * 9000)}`;
      const orderSummary = {
        id: generatedOrderId,
        customerName,
        customerPhone,
        customerAddress: deliveryType === 'delivery' ? customerAddress : 'Retirada no Balcão (Rua das Brasas, 450)',
        deliveryType,
        paymentMethod,
        items,
        rawSubtotal,
        discountAmount: discountAmount + pixDiscount,
        deliveryFee,
        grandTotal,
        date: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
      };

      setIsSubmitting(false);
      onClearCart();
      setCheckoutStep('cart');
      onOrderSuccess(generatedOrderId, orderSummary);
      onClose();
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-[#0c0e10]/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#1a1c1e] w-full max-w-lg h-full flex flex-col justify-between border-l border-[#333537] shadow-[0_0_50px_rgba(0,0,0,0.9)] animate-in slide-in-from-right duration-300">
        
        {/* Drawer Header */}
        <div className="p-5 border-b border-[#333537] flex items-center justify-between bg-[#121416]/50">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-[#f77f00]/20 flex items-center justify-center text-[#ffb784]">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-syne text-lg font-bold text-[#e2e2e5]">
                {checkoutStep === 'cart' ? 'Minha Bandeja' : 'Finalizar Pedido'}
              </h2>
              <span className="text-xs text-[#a68c7b]">
                {items.length} {items.length === 1 ? 'item' : 'itens'} adicionados
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-[#282a2c] hover:bg-[#333537] flex items-center justify-center text-[#a68c7b] hover:text-[#e2e2e5] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-5 space-y-5">
          {items.length === 0 ? (
            <div className="py-16 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#282a2c] text-[#a68c7b] mx-auto flex items-center justify-center">
                <ShoppingBag className="w-8 h-8 opacity-40" />
              </div>
              <div className="space-y-1">
                <h3 className="font-syne text-lg font-bold text-[#e2e2e5]">Sua bandeja está vazia</h3>
                <p className="text-xs text-[#dec1af] max-w-xs mx-auto">
                  A brasa já está acesa! Adicione nossos hambúrgueres artesanais, batatas rústicas ou sobremesas.
                </p>
              </div>
              <button
                onClick={() => {
                  onClose();
                  onNavigateMenu();
                }}
                className="px-6 py-2.5 rounded-full bg-[#f77f00] text-[#121416] font-bold text-xs hover:bg-[#ffba27] transition-colors cursor-pointer"
              >
                Ver Cardápio Completo
              </button>
            </div>
          ) : checkoutStep === 'cart' ? (
            <>
              {/* Delivery / Retirada Toggle */}
              <div className="grid grid-cols-2 gap-2 p-1 bg-[#121416] rounded-2xl border border-[#333537]">
                <button
                  type="button"
                  onClick={() => setDeliveryType('delivery')}
                  className={`py-2 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                    deliveryType === 'delivery'
                      ? 'bg-[#f77f00] text-[#121416] shadow-sm'
                      : 'text-[#dec1af] hover:text-[#e2e2e5]'
                  }`}
                >
                  <Bike className="w-4 h-4" />
                  Delivery (35-45m)
                </button>
                <button
                  type="button"
                  onClick={() => setDeliveryType('retirada')}
                  className={`py-2 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                    deliveryType === 'retirada'
                      ? 'bg-[#f77f00] text-[#121416] shadow-sm'
                      : 'text-[#dec1af] hover:text-[#e2e2e5]'
                  }`}
                >
                  <MapPin className="w-4 h-4" />
                  Retirada no Balcão
                </button>
              </div>

              {/* Items List */}
              <div className="space-y-3">
                {items.map((item) => (
                  <div
                    key={item.cartId}
                    className="p-3.5 rounded-2xl bg-[#1e2022] border border-[#333537] flex gap-3.5 items-start justify-between"
                  >
                    <img
                      src={item.menuItem.image}
                      alt={item.menuItem.name}
                      className="w-16 h-16 rounded-xl object-cover shrink-0 border border-[#333537]"
                    />
                    <div className="flex-1 min-w-0 space-y-1">
                      <div className="flex items-start justify-between">
                        <h4 className="font-semibold text-sm text-[#e2e2e5] truncate">
                          {item.menuItem.name}
                        </h4>
                        <button
                          onClick={() => onRemoveItem(item.cartId)}
                          className="text-[#a68c7b] hover:text-[#ffb4ab] transition-colors ml-2 cursor-pointer"
                          title="Remover"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Doneness & Extras */}
                      <div className="text-[11px] text-[#dec1af] space-y-0.5">
                        {item.meatDoneness && (
                          <p>
                            Ponto:{' '}
                            <span className="text-[#ffba27] font-semibold">
                              {item.meatDoneness === 'mal'
                                ? 'Mal passado'
                                : item.meatDoneness === 'ponto'
                                ? 'Ao ponto'
                                : 'Bem passado'}
                            </span>
                          </p>
                        )}
                        {item.selectedExtras.length > 0 && (
                          <p className="text-[10px] text-[#a68c7b]">
                            + {item.selectedExtras.map((e) => e.name).join(', ')}
                          </p>
                        )}
                        {item.notes && (
                          <p className="text-[10px] italic text-[#a68c7b]">"{item.notes}"</p>
                        )}
                      </div>

                      {/* Price and Counter */}
                      <div className="pt-1 flex items-center justify-between">
                        <span className="font-syne text-sm font-bold text-[#ffb784]">
                          R$ {(item.itemTotal * item.quantity).toFixed(2).replace('.', ',')}
                        </span>
                        <div className="flex items-center gap-2 bg-[#282a2c] px-2 py-0.5 rounded-full border border-[#333537]">
                          <button
                            onClick={() => onUpdateQuantity(item.cartId, -1)}
                            className="text-[#dec1af] hover:text-[#e2e2e5] text-xs p-1 cursor-pointer"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-bold text-[#e2e2e5] w-4 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.cartId, 1)}
                            className="text-[#dec1af] hover:text-[#e2e2e5] text-xs p-1 cursor-pointer"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Coupon Box */}
              <div className="p-3.5 bg-[#121416] rounded-2xl border border-[#333537] space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#a68c7b] font-medium flex items-center gap-1.5">
                    <Tag className="w-3.5 h-3.5 text-[#ffba27]" />
                    Cupom Promocional
                  </span>
                  {appliedCoupon && (
                    <span className="text-[11px] text-[#ffba27] font-bold">10% OFF Ativo</span>
                  )}
                </div>

                {appliedCoupon ? (
                  <div className="flex items-center justify-between bg-[#1e2022] px-3 py-2 rounded-xl border border-[#ffba27]/30 text-xs">
                    <span className="font-mono font-bold text-[#ffba27]">{appliedCoupon}</span>
                    <button
                      onClick={() => setAppliedCoupon(null)}
                      className="text-[#a68c7b] hover:text-[#ffb4ab] text-[11px] cursor-pointer"
                    >
                      Remover
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleApplyCoupon} className="flex gap-2">
                    <input
                      type="text"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      placeholder="PRIMEIRACOMPRA10"
                      className="flex-1 bg-[#1e2022] border border-[#333537] px-3 py-1.5 rounded-xl text-xs text-[#e2e2e5] placeholder:text-[#a68c7b] focus:outline-none focus:border-[#f77f00]"
                    />
                    <button
                      type="submit"
                      className="px-4 py-1.5 bg-[#282a2c] hover:bg-[#f77f00] text-[#e2e2e5] hover:text-[#121416] font-bold text-xs rounded-xl transition-colors cursor-pointer"
                    >
                      Aplicar
                    </button>
                  </form>
                )}
              </div>
            </>
          ) : (
            /* Checkout Step */
            <form id="checkout-form" onSubmit={handleFinishOrder} className="space-y-4">
              <div className="space-y-1">
                <span className="text-[11px] text-[#ffb784] font-bold uppercase tracking-wider">
                  Passo 2 de 2 • Dados de Entrega
                </span>
                <h3 className="font-syne text-base font-bold text-[#e2e2e5]">Para quem enviamos?</h3>
              </div>

              <div className="space-y-3">
                <div>
                  <label className="text-xs text-[#dec1af] block mb-1">Seu Nome Completo *</label>
                  <input
                    type="text"
                    required
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="Ex: Carlos Eduardo Silveira"
                    className="w-full bg-[#121416] border border-[#333537] px-3.5 py-2.5 rounded-xl text-xs text-[#e2e2e5] focus:outline-none focus:border-[#f77f00]"
                  />
                </div>

                <div>
                  <label className="text-xs text-[#dec1af] block mb-1">WhatsApp para Notificação *</label>
                  <input
                    type="tel"
                    required
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    placeholder="(11) 98765-4321"
                    className="w-full bg-[#121416] border border-[#333537] px-3.5 py-2.5 rounded-xl text-xs text-[#e2e2e5] focus:outline-none focus:border-[#f77f00]"
                  />
                </div>

                {deliveryType === 'delivery' ? (
                  <div>
                    <label className="text-xs text-[#dec1af] block mb-1">Endereço de Entrega *</label>
                    <input
                      type="text"
                      required
                      value={customerAddress}
                      onChange={(e) => setCustomerAddress(e.target.value)}
                      placeholder="Rua, número, apto e bairro"
                      className="w-full bg-[#121416] border border-[#333537] px-3.5 py-2.5 rounded-xl text-xs text-[#e2e2e5] focus:outline-none focus:border-[#f77f00]"
                    />
                  </div>
                ) : (
                  <div className="p-3 bg-[#121416] rounded-xl border border-[#333537] text-xs text-[#dec1af]">
                    <p className="font-semibold text-[#ffba27]">Retirada no Balcão:</p>
                    <p>Rua das Brasas, 450 - Jardins, São Paulo</p>
                    <p className="text-[11px] text-[#a68c7b] mt-0.5">Tempo estimado: 15 a 20 minutos.</p>
                  </div>
                )}
              </div>

              {/* Payment Methods */}
              <div className="space-y-2 pt-2">
                <label className="text-xs font-semibold text-[#e2e2e5] block">Forma de Pagamento</label>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('pix')}
                    className={`p-3 rounded-xl border flex flex-col items-center justify-center text-center cursor-pointer transition-all ${
                      paymentMethod === 'pix'
                        ? 'bg-[#f77f00] text-[#121416] border-[#f77f00] font-bold shadow-md'
                        : 'bg-[#121416] border-[#333537] text-[#dec1af] hover:bg-[#282a2c]'
                    }`}
                  >
                    <QrCode className="w-4 h-4 mb-1" />
                    <span>PIX Instantâneo</span>
                    <span className="text-[10px] opacity-80">+ 5% OFF extra</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('cartao')}
                    className={`p-3 rounded-xl border flex flex-col items-center justify-center text-center cursor-pointer transition-all ${
                      paymentMethod === 'cartao'
                        ? 'bg-[#f77f00] text-[#121416] border-[#f77f00] font-bold shadow-md'
                        : 'bg-[#121416] border-[#333537] text-[#dec1af] hover:bg-[#282a2c]'
                    }`}
                  >
                    <CreditCard className="w-4 h-4 mb-1" />
                    <span>Cartão de Crédito</span>
                    <span className="text-[10px] opacity-80">Visa / Master / Elo</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('vr')}
                    className={`p-3 rounded-xl border flex flex-col items-center justify-center text-center cursor-pointer transition-all ${
                      paymentMethod === 'vr'
                        ? 'bg-[#f77f00] text-[#121416] border-[#f77f00] font-bold shadow-md'
                        : 'bg-[#121416] border-[#333537] text-[#dec1af] hover:bg-[#282a2c]'
                    }`}
                  >
                    <span>Vale Refeição</span>
                    <span className="text-[10px] opacity-80">Alelo, Sodexo, VR, Flash</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('dinheiro')}
                    className={`p-3 rounded-xl border flex flex-col items-center justify-center text-center cursor-pointer transition-all ${
                      paymentMethod === 'dinheiro'
                        ? 'bg-[#f77f00] text-[#121416] border-[#f77f00] font-bold shadow-md'
                        : 'bg-[#121416] border-[#333537] text-[#dec1af] hover:bg-[#282a2c]'
                    }`}
                  >
                    <span>Pagar na Entrega</span>
                    <span className="text-[10px] opacity-80">Maquininha ou Dinheiro</span>
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>

        {/* Footer Summary & Action */}
        {items.length > 0 && (
          <div className="p-5 border-t border-[#333537] bg-[#121416]/80 space-y-3">
            <div className="space-y-1.5 text-xs text-[#dec1af]">
              <div className="flex justify-between">
                <span>Subtotal dos itens</span>
                <span>R$ {rawSubtotal.toFixed(2).replace('.', ',')}</span>
              </div>
              {discountAmount > 0 && (
                <div className="flex justify-between text-[#ffba27]">
                  <span>Desconto (Cupom 10%)</span>
                  <span>- R$ {discountAmount.toFixed(2).replace('.', ',')}</span>
                </div>
              )}
              {pixDiscount > 0 && (
                <div className="flex justify-between text-[#ffba27]">
                  <span>Desconto PIX (5%)</span>
                  <span>- R$ {pixDiscount.toFixed(2).replace('.', ',')}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Taxa de Entrega</span>
                <span>
                  {deliveryFee === 0 ? (
                    <span className="text-[#ffba27] font-semibold">Grátis</span>
                  ) : (
                    `R$ ${deliveryFee.toFixed(2).replace('.', ',')}`
                  )}
                </span>
              </div>
              <div className="flex justify-between font-syne text-base font-bold text-[#e2e2e5] pt-2 border-t border-[#333537]/50">
                <span>Total a pagar</span>
                <span className="text-[#ffb784]">
                  R$ {grandTotal.toFixed(2).replace('.', ',')}
                </span>
              </div>
            </div>

            {checkoutStep === 'cart' ? (
              <button
                type="button"
                onClick={handleProceedToCheckout}
                className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#f77f00] to-[#ffba27] hover:brightness-110 text-[#121416] font-bold text-sm shadow-[0_8px_24px_rgba(247,127,0,0.4)] transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
              >
                <span>Avançar para Pagamento</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            ) : (
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setCheckoutStep('cart')}
                  className="px-4 py-3 rounded-full bg-[#282a2c] text-[#e2e2e5] text-xs font-semibold hover:bg-[#333537] cursor-pointer"
                >
                  Voltar
                </button>
                <button
                  type="submit"
                  form="checkout-form"
                  disabled={isSubmitting}
                  className="flex-1 py-3.5 rounded-full bg-gradient-to-r from-[#f77f00] to-[#ffba27] hover:brightness-110 text-[#121416] font-bold text-sm shadow-[0_8px_24px_rgba(247,127,0,0.4)] transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Enviando para a Grelha...</span>
                  ) : (
                    <>
                      <CheckCircle2 className="w-4 h-4 stroke-[2.5]" />
                      <span>Confirmar Pedido</span>
                    </>
                  )}
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
