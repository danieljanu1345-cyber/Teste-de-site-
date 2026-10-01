/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { MenuPage } from './pages/MenuPage';
import { AboutPage } from './pages/AboutPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';
import { CustomizerModal } from './components/CustomizerModal';
import { CartDrawer } from './components/CartDrawer';
import { OrderConfirmationModal } from './components/OrderConfirmationModal';
import { VirtualTourModal } from './components/VirtualTourModal';
import { GalleryLightboxModal } from './components/GalleryLightboxModal';
import { AccountModal } from './components/AccountModal';
import { LegalModal } from './components/LegalModals';
import { MENU_ITEMS } from './data/menuData';
import { CartItem, MenuItem } from './types';
import { ShoppingBag, ArrowRight, Check } from 'lucide-react';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('inicio');

  // Initial cart with 2 items matching the screenshot
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      cartId: 'init-1',
      menuItem: MENU_ITEMS[0], // Brasa Prime Bacon
      quantity: 1,
      meatDoneness: 'ponto',
      selectedExtras: [{ name: 'Bacon artesanal crocante', price: 6.0 }],
      itemTotal: 44.90,
    },
    {
      cartId: 'init-2',
      menuItem: MENU_ITEMS[7], // Cebola Crispy Rings
      quantity: 1,
      selectedExtras: [],
      itemTotal: 22.00,
    },
  ]);

  // Modals state
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [customizingItem, setCustomizingItem] = useState<MenuItem | null>(null);
  const [confirmedOrder, setConfirmedOrder] = useState<any | null>(null);
  const [isVirtualTourOpen, setIsVirtualTourOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<any | null>(null);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);

  // Toast feedback state
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  const handleAddToCartDirect = (item: MenuItem) => {
    const newItem: CartItem = {
      cartId: `${item.id}-${Date.now()}`,
      menuItem: item,
      quantity: 1,
      meatDoneness: item.category === 'burgers' ? 'ponto' : undefined,
      selectedExtras: [],
      itemTotal: item.price,
    };

    setCartItems((prev) => [...prev, newItem]);
    showToast(`${item.name} adicionado à sua bandeja!`);
  };

  const handleCustomizerConfirm = (
    item: MenuItem,
    doneness: 'mal' | 'ponto' | 'bem' | undefined,
    extras: { name: string; price: number }[],
    notes: string,
    total: number
  ) => {
    const newItem: CartItem = {
      cartId: `${item.id}-${Date.now()}`,
      menuItem: item,
      quantity: 1,
      meatDoneness: doneness,
      selectedExtras: extras,
      notes: notes || undefined,
      itemTotal: total,
    };

    setCartItems((prev) => [...prev, newItem]);
    showToast(`${item.name} personalizado com sucesso!`);
  };

  const handleUpdateQuantity = (cartId: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.cartId === cartId) {
            const nextQty = item.quantity + delta;
            return nextQty > 0 ? { ...item, quantity: nextQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (cartId: string) => {
    setCartItems((prev) => prev.filter((item) => item.cartId !== cartId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleOrderSuccess = (orderId: string, orderDetails: any) => {
    setConfirmedOrder(orderDetails);
  };

  const cartCount = cartItems.reduce((acc, curr) => acc + curr.quantity, 0);
  const cartSubtotal = cartItems.reduce(
    (sum, item) => sum + item.itemTotal * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-[#121416] text-[#e2e2e5] flex flex-col font-sans selection:bg-[#f77f00] selection:text-[#121416]">
      {/* Top Header */}
      <Header
        currentTab={currentTab}
        onNavigate={(tab) => {
          setCurrentTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        cartCount={cartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenAccount={() => setIsAccountOpen(true)}
      />

      {/* Main View Router */}
      <main className="flex-1 pt-20">
        {currentTab === 'inicio' && (
          <HomePage
            onNavigate={(tab) => {
              setCurrentTab(tab);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenCustomizer={(item) => setCustomizingItem(item)}
            onAddToCartDirect={handleAddToCartDirect}
            featuredItems={MENU_ITEMS}
          />
        )}

        {currentTab === 'cardapio' && (
          <MenuPage
            items={MENU_ITEMS}
            onOpenCustomizer={(item) => setCustomizingItem(item)}
            onAddToCartDirect={handleAddToCartDirect}
          />
        )}

        {currentTab === 'sobre-nos' && (
          <AboutPage
            onNavigate={(tab) => {
              setCurrentTab(tab);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenVirtualTour={() => setIsVirtualTourOpen(true)}
          />
        )}

        {currentTab === 'galeria' && (
          <GalleryPage
            onSelectImage={(item) => setLightboxImage(item)}
          />
        )}

        {currentTab === 'contato-e-localizacao' && (
          <ContactPage
            onNavigate={(tab) => {
              setCurrentTab(tab);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenCart={() => setIsCartOpen(true)}
          />
        )}
      </main>

      {/* Floating Mini-Cart Drawer Trigger (shows when cart has items) */}
      {cartItems.length > 0 && !isCartOpen && (
        <div className="fixed bottom-6 inset-x-4 max-w-[800px] mx-auto z-30 bg-[#282a2c]/95 backdrop-blur-xl border border-[#333537] rounded-full p-2 pl-6 pr-3 shadow-[0_16px_40px_rgba(0,0,0,0.85)] flex items-center justify-between transition-all duration-300 animate-in slide-in-from-bottom-6">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#f77f00] text-[#121416] font-bold text-xs shadow-md">
              <span>{cartCount}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] text-[#a68c7b] uppercase font-bold tracking-wider">
                Bandeja de Pedidos
              </span>
              <span className="font-syne text-sm sm:text-base font-bold text-[#e2e2e5]">
                R$ {cartSubtotal.toFixed(2).replace('.', ',')}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsCartOpen(true)}
              className="px-4 py-2 rounded-full bg-[#1e2022] hover:bg-[#333537] text-[#e2e2e5] text-xs font-semibold transition-colors cursor-pointer"
            >
              Ver Itens
            </button>
            <button
              onClick={() => setIsCartOpen(true)}
              className="px-5 py-2 rounded-full bg-gradient-to-r from-[#f77f00] to-[#ffba27] hover:brightness-110 text-[#121416] text-xs font-bold flex items-center gap-1.5 shadow-lg active:scale-95 transition-all cursor-pointer"
            >
              <span>Concluir Pedido</span>
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </button>
          </div>
        </div>
      )}

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-24 right-4 z-50 bg-[#1a1c1e] text-[#e2e2e5] border border-[#f77f00]/40 px-5 py-3 rounded-full shadow-2xl flex items-center gap-2.5 animate-in slide-in-from-top-4 duration-200">
          <span className="w-6 h-6 rounded-full bg-[#f77f00] text-[#121416] flex items-center justify-center shrink-0">
            <Check className="w-4 h-4 stroke-[3]" />
          </span>
          <span className="text-xs font-semibold">{toastMessage}</span>
        </div>
      )}

      {/* Modals */}
      <CustomizerModal
        item={customizingItem}
        isOpen={Boolean(customizingItem)}
        onClose={() => setCustomizingItem(null)}
        onConfirm={handleCustomizerConfirm}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        onOrderSuccess={handleOrderSuccess}
        onNavigateMenu={() => {
          setCurrentTab('cardapio');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      <OrderConfirmationModal
        isOpen={Boolean(confirmedOrder)}
        onClose={() => setConfirmedOrder(null)}
        orderDetails={confirmedOrder}
      />

      <VirtualTourModal
        isOpen={isVirtualTourOpen}
        onClose={() => setIsVirtualTourOpen(false)}
      />

      <GalleryLightboxModal
        image={lightboxImage}
        isOpen={Boolean(lightboxImage)}
        onClose={() => setLightboxImage(null)}
      />

      <AccountModal
        isOpen={isAccountOpen}
        onClose={() => setIsAccountOpen(false)}
        onNavigateMenu={() => {
          setCurrentTab('cardapio');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />

      {/* Global Footer */}
      <Footer
        onNavigate={(tab) => {
          setCurrentTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenPrivacy={() => setLegalModalType('privacy')}
        onOpenTerms={() => setLegalModalType('terms')}
      />
    </div>
  );
}
