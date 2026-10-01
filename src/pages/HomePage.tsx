import React, { useState } from 'react';
import { Flame, Clock, Star, Award, Utensils, Sparkles, ArrowRight, MessageCircle, Check, Copy, Beer, Trees, CheckCircle2 } from 'lucide-react';
import { MenuItem } from '../types';

interface HomePageProps {
  onNavigate: (tab: string) => void;
  onOpenCustomizer: (item: MenuItem) => void;
  onAddToCartDirect: (item: MenuItem) => void;
  featuredItems: MenuItem[];
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenCustomizer,
  onAddToCartDirect,
  featuredItems,
}) => {
  const [copiedCoupon, setCopiedCoupon] = useState(false);
  const [activeCategoryFilter, setActiveCategoryFilter] = useState('all');

  const handleCopyCoupon = () => {
    navigator.clipboard.writeText('PRIMEIRACOMPRA10');
    setCopiedCoupon(true);
    setTimeout(() => setCopiedCoupon(false), 2500);
  };

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative w-full pt-12 pb-16 lg:pb-24 bg-[#0c0e10]">
        {/* Atmospheric Ambient Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[450px] bg-[#f77f00]/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute -top-12 -right-24 w-[380px] h-[380px] bg-[#ffba27]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-[300px] h-[300px] bg-[#ad0224]/15 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col gap-5 z-10">
              {/* Tagline Pill */}
              <div className="inline-flex items-center gap-2 self-start px-4 py-1.5 rounded-full bg-[#282a2c]/80 border border-[#f77f00]/30 backdrop-blur-md shadow-md">
                <span className="w-2 h-2 rounded-full bg-[#f77f00] animate-ping" />
                <span className="text-[11px] font-bold text-[#ffb784] uppercase tracking-widest flex items-center gap-1.5">
                  <Flame className="w-3.5 h-3.5 text-[#f77f00]" />
                  O Verdadeiro Burger Defumado na Brasa
                </span>
              </div>

              {/* Headline */}
              <h1 className="font-syne text-4xl sm:text-5xl lg:text-6xl text-[#e2e2e5] font-extrabold tracking-tight leading-[1.08] text-balance">
                Sabor Explosivo,{' '}
                <span className="bg-gradient-to-r from-[#ffb784] via-[#ffba27] to-[#f77f00] bg-clip-text text-transparent">
                  Fogo Vivo
                </span>{' '}
                e Ingredientes Nobres.
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-[#dec1af] max-w-xl leading-relaxed">
                Blend artesanal 100% Angus moído diariamente, queijo derretido no maçarico e brioche artesanal tostado na manteiga de garrafa. Uma experiência defumada sem igual.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onNavigate('cardapio')}
                  className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-[#f77f00] to-[#ffba27] hover:brightness-110 text-[#121416] font-bold text-base shadow-[0_8px_30px_-4px_rgba(247,127,0,0.6)] transition-all duration-300 transform active:scale-95 cursor-pointer"
                >
                  <Utensils className="w-5 h-5 stroke-[2.5]" />
                  <span>Ver Cardápio Completo</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>

                <a
                  href="https://wa.me/5511987654321?text=Ol%C3%A1!%20Gostaria%20de%20fazer%20um%20pedido%20no%20Fogo%20%26%20Brasa."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-[#282a2c] hover:bg-[#333537] border border-[#a68c7b]/30 text-[#ffb784] font-semibold text-base shadow-md transition-all active:scale-95"
                >
                  <MessageCircle className="w-5 h-5 text-[#ffba27]" />
                  <span>Fazer Pedido / WhatsApp</span>
                </a>
              </div>

              {/* Micro Highlights Trust Badges */}
              <div className="grid grid-cols-3 gap-3 pt-4 max-w-lg">
                <div className="flex items-center gap-2.5 bg-[#1a1c1e]/80 border border-[#333537] backdrop-blur-sm p-3 rounded-2xl shadow-sm">
                  <Clock className="w-5 h-5 text-[#ffb784] shrink-0" />
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-[#e2e2e5] leading-tight">35 min</span>
                    <span className="text-[11px] text-[#a68c7b] leading-tight">Entrega Rápida</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 bg-[#1a1c1e]/80 border border-[#333537] backdrop-blur-sm p-3 rounded-2xl shadow-sm">
                  <Star className="w-5 h-5 text-[#ffba27] fill-[#ffba27] shrink-0" />
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-[#e2e2e5] leading-tight">4.9 iFood</span>
                    <span className="text-[11px] text-[#a68c7b] leading-tight">2.4k avaliações</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 bg-[#1a1c1e]/80 border border-[#333537] backdrop-blur-sm p-3 rounded-2xl shadow-sm">
                  <Award className="w-5 h-5 text-[#ffb3b1] shrink-0" />
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-[#e2e2e5] leading-tight">100% Angus</span>
                    <span className="text-[11px] text-[#a68c7b] leading-tight">Carnes Nobres</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Hero Image Display */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div className="relative w-full max-w-[500px] aspect-square rounded-3xl overflow-hidden shadow-[0_24px_60px_-12px_rgba(0,0,0,0.95)] border border-[#333537] group bg-[#1a1c1e]">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnKEEEDc0q2ZqXL_5vZn4XzxJOqly0drX99CTCznGBgneHUrZO3vogVVdGdXVzT13exeJowtoIBulr-lYYLfij0p7uqBrrgfHF-q_34BSRwRVOnMb7yzadqcg4Y1dExLqo44z8O9HW32is6g4_EgszXrImd0r-b7r3jcrzr5giryyqNF5XqDTdh4JWmUNQIN2Gi9KuX-moniJAjrOSEDeb3fFulKRW8itnmWjxTJTcxQ1vuuTduHcCHg"
                  alt="Hambúrguer artesanal Angus tostado no fogo com queijo derretido da Fogo & Brasa"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e10] via-transparent to-transparent opacity-85" />
                
                {/* Floating Artisan Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-3 bg-[#1e2022]/90 backdrop-blur-md rounded-2xl border border-[#333537] shadow-xl flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#f77f00]/20 flex items-center justify-center text-[#f77f00]">
                      <Flame className="w-5 h-5 fill-current" />
                    </div>
                    <div>
                      <h4 className="font-syne text-xs font-bold text-[#e2e2e5]">Carvão &amp; Lenha Nobre</h4>
                      <p className="text-[11px] text-[#dec1af]">Sabor rústico defumado autêntico</p>
                    </div>
                  </div>
                  <span className="text-[11px] px-2.5 py-1 rounded-full bg-[#ffba27]/20 border border-[#ffba27]/40 text-[#ffba27] font-bold">
                    180g Puro Blend
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK CATEGORIES NAVIGATION */}
      <section className="w-full py-6 bg-[#1a1c1e] border-y border-[#282a2c]">
        <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-start lg:justify-center gap-3 overflow-x-auto pb-1 scrollbar-none">
            {[
              { id: 'all', label: 'Todos os Pratos', tabId: 'cardapio' },
              { id: 'burgers', label: 'Hambúrgueres Artesanais', tabId: 'cardapio' },
              { id: 'sides', label: 'Acompanhamentos Rústicos', tabId: 'cardapio' },
              { id: 'desserts', label: 'Sobremesas de Fogo', tabId: 'cardapio' },
              { id: 'drinks', label: 'Chopps & Bebidas', tabId: 'cardapio' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategoryFilter(cat.id);
                  onNavigate(cat.tabId);
                }}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  activeCategoryFilter === cat.id
                    ? 'bg-[#f77f00] text-[#121416] shadow-[0_4px_16px_rgba(247,127,0,0.3)]'
                    : 'bg-[#282a2c] hover:bg-[#333537] text-[#dec1af] hover:text-[#e2e2e5]'
                }`}
              >
                <span>{cat.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* BESTSELLERS (DESTAQUES DO CHEF) */}
      <section className="w-full py-16 lg:py-24 bg-[#121416]" id="destaques">
        <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div className="space-y-1">
              <span className="text-xs text-[#ffba27] uppercase tracking-widest font-bold flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" /> Os Campeões da Grelha
              </span>
              <h2 className="font-syne text-3xl sm:text-4xl text-[#e2e2e5] font-bold tracking-tight">
                Destaques do Chef
              </h2>
            </div>
            <p className="text-sm text-[#dec1af] max-w-md">
              Receitas consagradas criadas com cortes selecionados, defumação sob medida e combinações de textura impecáveis.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredItems.slice(0, 3).map((item) => (
              <article
                key={item.id}
                className="group flex flex-col bg-[#1a1c1e] rounded-3xl overflow-hidden border border-[#333537] shadow-[0_8px_24px_rgba(0,0,0,0.5)] hover:shadow-[0_16px_36px_-6px_rgba(247,127,0,0.25)] transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative w-full aspect-[4/3] bg-[#282a2c] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.altText}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 flex gap-2">
                    {item.badge && (
                      <span className="px-3 py-1 rounded-full bg-[#f77f00] text-[#121416] text-[11px] font-bold shadow-md">
                        {item.badge}
                      </span>
                    )}
                    <span className="px-2.5 py-1 rounded-full bg-[#0c0e10]/80 backdrop-blur-md text-[#ffba27] text-[11px] font-semibold flex items-center gap-1">
                      <Flame className="w-3 h-3 text-[#f77f00]" /> Defumado
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1 justify-between gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-syne text-lg font-bold text-[#e2e2e5] group-hover:text-[#ffb784] transition-colors">
                        {item.name}
                      </h3>
                      {item.weightOrSize && (
                        <span className="text-[11px] text-[#ffba27] bg-[#ffba27]/10 px-2 py-0.5 rounded-full font-semibold">
                          {item.weightOrSize}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-[#dec1af] line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-2 flex items-center justify-between border-t border-[#333537]/50">
                    <div>
                      <span className="text-[10px] text-[#a68c7b] uppercase block">Valor</span>
                      <span className="font-syne text-xl text-[#ffb784] font-bold">
                        R$ {item.price.toFixed(2).replace('.', ',')}
                      </span>
                    </div>

                    <div className="flex gap-2">
                      <button
                        onClick={() => onOpenCustomizer(item)}
                        className="px-3 py-2 bg-[#282a2c] hover:bg-[#333537] text-[#dec1af] hover:text-[#e2e2e5] rounded-full text-xs font-semibold transition-colors cursor-pointer"
                      >
                        Personalizar
                      </button>
                      <button
                        onClick={() => onAddToCartDirect(item)}
                        className="flex items-center gap-1.5 px-4 py-2 bg-[#f77f00] hover:bg-[#ffba27] text-[#121416] rounded-full transition-colors text-xs font-bold active:scale-95 shadow-sm cursor-pointer"
                      >
                        <span>Adicionar</span>
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS DA CASA (PILLARS) */}
      <section className="w-full py-16 lg:py-24 bg-[#0c0e10]">
        <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs text-[#ffb784] uppercase tracking-widest font-bold">
              Nossa Filosofia
            </span>
            <h2 className="font-syne text-3xl sm:text-4xl text-[#e2e2e5] font-bold">
              Por que a Brasa faz toda a diferença?
            </h2>
            <p className="text-sm text-[#dec1af]">
              Não usamos chapas elétricas comuns. Cada hambúrguer carrega a assinatura inconfundível do calor real e ingredientes frescos.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#1a1c1e] p-6 rounded-3xl border border-[#333537] flex flex-col gap-3 hover:bg-[#282a2c] transition-colors shadow-sm">
              <div className="w-12 h-12 rounded-full bg-[#f77f00]/20 text-[#f77f00] flex items-center justify-center">
                <Flame className="w-6 h-6 stroke-[2.5]" />
              </div>
              <h3 className="font-syne text-base font-bold text-[#e2e2e5] pt-1">Fogo de Verdade</h3>
              <p className="text-xs text-[#dec1af] leading-relaxed">
                Grelhados sob carvão vegetal e lenha frutífera, selando os sucos naturais da carne com crosta caramelizada perfeita.
              </p>
            </div>

            <div className="bg-[#1a1c1e] p-6 rounded-3xl border border-[#333537] flex flex-col gap-3 hover:bg-[#282a2c] transition-colors shadow-sm">
              <div className="w-12 h-12 rounded-full bg-[#ffba27]/20 text-[#ffba27] flex items-center justify-center">
                <Award className="w-6 h-6 stroke-[2.5]" />
              </div>
              <h3 className="font-syne text-base font-bold text-[#e2e2e5] pt-1">Blend Exclusivo Angus</h3>
              <p className="text-xs text-[#dec1af] leading-relaxed">
                Combinação precisa de peito e acém de gado Black Angus certificado, moído todos os dias sem conservantes artificiais.
              </p>
            </div>

            <div className="bg-[#1a1c1e] p-6 rounded-3xl border border-[#333537] flex flex-col gap-3 hover:bg-[#282a2c] transition-colors shadow-sm">
              <div className="w-12 h-12 rounded-full bg-[#ffb3b1]/20 text-[#ffb3b1] flex items-center justify-center">
                <Utensils className="w-6 h-6 stroke-[2.5]" />
              </div>
              <h3 className="font-syne text-base font-bold text-[#e2e2e5] pt-1">Brioche Fermentado</h3>
              <p className="text-xs text-[#dec1af] leading-relaxed">
                Pão de levain artesanal com 36h de fermentação lenta, maciez surreal e finalização tostada na manteiga pura de garrafa.
              </p>
            </div>

            <div className="bg-[#1a1c1e] p-6 rounded-3xl border border-[#333537] flex flex-col gap-3 hover:bg-[#282a2c] transition-colors shadow-sm">
              <div className="w-12 h-12 rounded-full bg-[#ffb784]/20 text-[#ffb784] flex items-center justify-center">
                <Sparkles className="w-6 h-6 stroke-[2.5]" />
              </div>
              <h3 className="font-syne text-base font-bold text-[#e2e2e5] pt-1">Molhos Secretos</h3>
              <p className="text-xs text-[#dec1af] leading-relaxed">
                Barbecue de rapadura com whisky defumado, maionese verde de ervas frescas e aioli de alho assado preparados artesanalmente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIÊNCIA VISUAL / THEATER SECTION */}
      <section className="w-full py-16 bg-[#121416]">
        <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden bg-[#1a1c1e] border border-[#333537] p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="space-y-4 max-w-xl z-10">
              <span className="text-xs text-[#ffba27] uppercase tracking-widest font-bold">
                Produção Ao Vivo
              </span>
              <h2 className="font-syne text-3xl sm:text-4xl text-[#e2e2e5] font-bold leading-tight">
                Assista à magia do maçarico e brasa em nosso salão
              </h2>
              <p className="text-sm text-[#dec1af] leading-relaxed">
                Venha sentir o cheiro inebriante da lenha estalando e saboreie o melhor burger de São Paulo direto da grelha para a sua mesa de madeira rústica.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2">
                  <Beer className="w-5 h-5 text-[#ffb784]" />
                  <span className="text-xs font-semibold text-[#e2e2e5]">Chopp Artesanal</span>
                </div>
                <div className="flex items-center gap-2">
                  <Trees className="w-5 h-5 text-[#ffb784]" />
                  <span className="text-xs font-semibold text-[#e2e2e5]">Área Externa Acolhedora</span>
                </div>
              </div>
              <div className="pt-2">
                <button
                  onClick={() => onNavigate('sobre-nos')}
                  className="px-6 py-3 rounded-full bg-[#282a2c] hover:bg-[#333537] text-[#ffba27] text-xs font-bold transition-colors cursor-pointer"
                >
                  Conhecer Nossa História &amp; Espaço
                </button>
              </div>
            </div>

            <div className="w-full lg:w-96 aspect-square rounded-2xl overflow-hidden bg-[#282a2c] shadow-2xl relative border border-[#333537]">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCasgVDByVRTrdJ7hBYU22VIdc0GFzRAl8pJ2pbNFpLfDsZ-1u_O1A-Rzvr0kPYiGKPdmsitrGf8XB81GVt8jAnlpmUtPpZ47f_YGofHdQveCF4aZMVuWm4Yc6LCJrPa8kphmM58y9RiX8WsMGk_DhTx-_CFti5BI6mZxnbY54L1jsk6t7ElHTfBmcnpnU3jOkVTvZw431bN73hU3C--kY5pAdLnWS1Oz4hyjFNuTz2afZ8VXfPSKQYgA"
                alt="Churrasqueiro grelhando hambúrguer na brasa aberta"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#f77f00]/10 mix-blend-overlay" />
            </div>
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS (TESTIMONIALS) */}
      <section className="w-full py-16 lg:py-24 bg-[#0c0e10]">
        <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-10 gap-3">
            <div>
              <span className="text-xs text-[#ffb784] uppercase tracking-widest font-bold">
                Vozes da Comunidade
              </span>
              <h2 className="font-syne text-3xl sm:text-4xl text-[#e2e2e5] font-bold">
                Quem experimenta, vicia
              </h2>
            </div>
            <div className="flex items-center gap-1 text-[#ffba27]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
              <span className="text-sm text-[#e2e2e5] ml-2 font-bold">4.9 de 5 estrelas</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#1a1c1e] p-6 rounded-3xl border border-[#333537] flex flex-col justify-between shadow-md">
              <div className="space-y-3">
                <div className="flex text-[#ffba27] gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-[#dec1af] italic leading-relaxed">
                  "O Brasa Prime Bacon é um escândalo. A crocância do bacon junto com o defumado da brasa é simplesmente imbatível na região. Chegou fumegando em 30 min!"
                </p>
              </div>
              <div className="pt-4 flex items-center gap-3 border-t border-[#333537]/50 mt-4">
                <div className="w-10 h-10 rounded-full bg-[#f77f00]/20 flex items-center justify-center font-bold text-[#ffb784]">
                  RC
                </div>
                <div>
                  <p className="text-xs font-bold text-[#e2e2e5]">Rodrigo Camargo</p>
                  <span className="text-[11px] text-[#a68c7b]">Crítico Gastronômico &amp; Foodie</span>
                </div>
              </div>
            </div>

            <div className="bg-[#1a1c1e] p-6 rounded-3xl border border-[#333537] flex flex-col justify-between shadow-md">
              <div className="space-y-3">
                <div className="flex text-[#ffba27] gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-[#dec1af] italic leading-relaxed">
                  "Pão brioche fofíssimo que não desmancha até a última mordida. A maionese verde e o toque trufado do smash são de chorar de tão bons. Virei cliente fiel."
                </p>
              </div>
              <div className="pt-4 flex items-center gap-3 border-t border-[#333537]/50 mt-4">
                <div className="w-10 h-10 rounded-full bg-[#ffb3b1]/20 flex items-center justify-center font-bold text-[#ffb3b1]">
                  MS
                </div>
                <div>
                  <p className="text-xs font-bold text-[#e2e2e5]">Mariana Silveira</p>
                  <span className="text-[11px] text-[#a68c7b]">Cliente frequente Jardins</span>
                </div>
              </div>
            </div>

            <div className="bg-[#1a1c1e] p-6 rounded-3xl border border-[#333537] flex flex-col justify-between shadow-md">
              <div className="space-y-3">
                <div className="flex text-[#ffba27] gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-[#dec1af] italic leading-relaxed">
                  "Queijo de verdade maçaricado na hora e o ponto da carne veio impecável, rosadinho por dentro e super suculento. Melhor hambúrguer que pedi no ano."
                </p>
              </div>
              <div className="pt-4 flex items-center gap-3 border-t border-[#333537]/50 mt-4">
                <div className="w-10 h-10 rounded-full bg-[#ffba27]/20 flex items-center justify-center font-bold text-[#ffba27]">
                  GF
                </div>
                <div>
                  <p className="text-xs font-bold text-[#e2e2e5]">Gabriel Fontes</p>
                  <span className="text-[11px] text-[#a68c7b]">Pedido via Delivery</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER WITH PROMO CODE */}
      <section className="w-full py-16 lg:py-24 bg-[#121416]">
        <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#282a2c] via-[#1e2022] to-[#1a1c1e] p-8 sm:p-12 lg:p-16 border border-[#333537] shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[#f77f00]/20 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <div className="space-y-3 max-w-2xl">
                <span className="inline-block px-3 py-1 rounded-full bg-[#f77f00]/20 text-[#ffb784] text-xs font-bold uppercase tracking-wider">
                  Oferta Especial de Boas-Vindas
                </span>
                <h2 className="font-syne text-3xl sm:text-4xl lg:text-5xl font-bold text-[#e2e2e5] leading-tight">
                  Bateu aquela fome? Peça agora e receba quentinho.
                </h2>
                <p className="text-sm sm:text-base text-[#dec1af]">
                  Utilize o cupom exclusivo para sua primeira experiência e ganhe 10% OFF em todo o cardápio.
                </p>
              </div>

              {/* Promo Voucher Box & Button */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto">
                <div className="bg-[#0c0e10] border border-[#333537] px-5 py-3.5 rounded-full flex items-center justify-between sm:justify-start gap-4 shadow-inner">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-[#a68c7b] uppercase font-bold">Cupom de Desconto</span>
                    <span className="font-syne text-base text-[#ffba27] tracking-wider font-mono font-bold">
                      PRIMEIRACOMPRA10
                    </span>
                  </div>
                  <button
                    onClick={handleCopyCoupon}
                    className="p-2 rounded-full hover:bg-[#282a2c] text-[#dec1af] hover:text-[#ffb784] transition-colors cursor-pointer"
                    title="Copiar Cupom"
                  >
                    {copiedCoupon ? (
                      <Check className="w-5 h-5 text-[#ffba27]" />
                    ) : (
                      <Copy className="w-5 h-5" />
                    )}
                  </button>
                </div>

                <button
                  onClick={() => onNavigate('cardapio')}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#f77f00] to-[#ffba27] hover:brightness-110 text-[#121416] font-bold text-sm shadow-[0_8px_30px_rgba(247,127,0,0.5)] transition-all transform active:scale-95 text-center cursor-pointer"
                >
                  <span>Garantir Meu Burger</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
