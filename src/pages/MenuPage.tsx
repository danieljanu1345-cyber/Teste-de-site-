import React, { useState } from 'react';
import { Search, Flame, Sparkles, X, Plus, SlidersHorizontal, UtensilsCrossed } from 'lucide-react';
import { MenuItem } from '../types';

interface MenuPageProps {
  items: MenuItem[];
  onOpenCustomizer: (item: MenuItem) => void;
  onAddToCartDirect: (item: MenuItem) => void;
}

export const MenuPage: React.FC<MenuPageProps> = ({
  items,
  onOpenCustomizer,
  onAddToCartDirect,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'Todos os Itens' },
    { id: 'burgers', label: 'Hambúrgueres Artesanais' },
    { id: 'sides', label: 'Acompanhamentos Crocantes' },
    { id: 'desserts', label: 'Sobremesas & Shakes' },
    { id: 'drinks', label: 'Bebidas Artesanais' },
  ];

  const availableTags = [
    { label: 'Bacon Lover', icon: '🥓' },
    { label: 'Picante', icon: '🌶️' },
    { label: 'Vegetariano', icon: '🌱' },
    { label: 'Mais Pedido', icon: '⭐' },
  ];

  const filteredItems = items.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesTag = !selectedTag || item.tags.includes(selectedTag);
    const matchesSearch =
      !searchQuery.trim() ||
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesTag && matchesSearch;
  });

  const handleTagClick = (tagLabel: string) => {
    setSelectedTag((prev) => (prev === tagLabel ? null : tagLabel));
  };

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedTag(null);
  };

  return (
    <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Header / Editorial Lead */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f77f00]/15 border border-[#f77f00]/30 text-[#ffb784] text-xs font-bold tracking-widest uppercase">
            <Flame className="w-4 h-4 text-[#ffba27]" />
            Cardápio Oficial • Brasa &amp; Carvão
          </div>
          <h1 className="font-syne text-3xl sm:text-5xl text-[#e2e2e5] font-extrabold tracking-tight">
            Sabor Moldado pelo{' '}
            <span className="bg-gradient-to-r from-[#ffb784] to-[#ffba27] bg-clip-text text-transparent">
              Fogo Vivo
            </span>
          </h1>
          <p className="text-sm sm:text-base text-[#dec1af] max-w-xl leading-relaxed">
            Carnes nobres com certificação Angus, pão brioche dourado na chapa e fusões defumadas preparadas sob o calor de lenhas nobres.
          </p>
        </div>

        {/* Quick Stats / Culinary Highlights */}
        <div className="flex items-center gap-6 bg-[#1a1c1e] border border-[#333537] p-5 rounded-3xl shadow-xl">
          <div className="flex flex-col border-r border-[#333537] pr-6">
            <span className="font-syne text-2xl font-bold text-[#ffba27]">100%</span>
            <span className="text-[10px] text-[#a68c7b] uppercase font-bold tracking-wider">
              Black Angus
            </span>
          </div>
          <div className="flex flex-col border-r border-[#333537] pr-6">
            <span className="font-syne text-2xl font-bold text-[#ffb784]">48h</span>
            <span className="text-[10px] text-[#a68c7b] uppercase font-bold tracking-wider">
              Fermentação Brioche
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-syne text-2xl font-bold text-[#ffb3b1]">Defumação</span>
            <span className="text-[10px] text-[#a68c7b] uppercase font-bold tracking-wider">
              Lenha de Macieira
            </span>
          </div>
        </div>
      </div>

      {/* Navigation & Filtering Strip */}
      <div className="bg-[#1a1c1e] rounded-3xl border border-[#333537] p-5 mb-10 shadow-lg space-y-4">
        {/* Search & Dietary Bar */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Search Input */}
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-[#a68c7b]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar por corte, cheddar, smash ou acompanhamento..."
              className="w-full bg-[#121416] border border-[#333537] text-[#e2e2e5] placeholder:text-[#a68c7b] text-xs pl-11 pr-10 py-3 rounded-full focus:outline-none focus:border-[#f77f00] shadow-inner"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#a68c7b] hover:text-[#e2e2e5]"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Dietary Preference Pills */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            <span className="text-xs text-[#a68c7b] uppercase font-bold tracking-wider mr-1 hidden lg:inline-block">
              Destaques:
            </span>
            {availableTags.map((tag) => {
              const isSelected = selectedTag === tag.label;
              return (
                <button
                  key={tag.label}
                  onClick={() => handleTagClick(tag.label)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                    isSelected
                      ? 'bg-[#f77f00] text-[#121416] font-bold shadow-sm'
                      : 'bg-[#121416] text-[#dec1af] border border-[#333537] hover:border-[#f77f00]/40 hover:text-[#e2e2e5]'
                  }`}
                >
                  <span>{tag.icon}</span>
                  <span>{tag.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Categories Scroll Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 border-t border-[#333537]/50 pt-4 scrollbar-none">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`shrink-0 px-5 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#f77f00] text-[#121416] shadow-md'
                    : 'bg-[#121416] text-[#dec1af] border border-[#333537] hover:bg-[#282a2c] hover:text-[#e2e2e5]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Grid of Items */}
      {filteredItems.length === 0 ? (
        <div className="text-center py-16 bg-[#1a1c1e] rounded-3xl border border-[#333537] my-8 space-y-3">
          <Search className="w-12 h-12 text-[#a68c7b] mx-auto opacity-50" />
          <h3 className="font-syne text-xl font-bold text-[#e2e2e5]">Nenhum prato encontrado</h3>
          <p className="text-xs text-[#dec1af] max-w-sm mx-auto">
            Não encontramos itens correspondentes à sua busca. Tente buscar por outros termos ou limpar os filtros.
          </p>
          <button
            onClick={resetFilters}
            className="px-6 py-2.5 rounded-full bg-[#f77f00] text-[#121416] font-bold text-xs hover:bg-[#ffba27] transition-colors cursor-pointer mt-2"
          >
            Limpar Filtros de Busca
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <article
              key={item.id}
              className="group bg-[#1a1c1e] rounded-3xl overflow-hidden border border-[#333537] flex flex-col justify-between shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_-6px_rgba(247,127,0,0.25)] hover:border-[#f77f00]/30"
            >
              <div className="relative overflow-hidden aspect-[16/10] bg-[#282a2c]">
                <img
                  src={item.image}
                  alt={item.altText}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1c1e] via-transparent to-transparent opacity-80" />

                <div className="absolute top-3 left-3 flex gap-1.5 flex-wrap">
                  {item.badge && (
                    <span className="px-2.5 py-1 rounded-full bg-[#f77f00] text-[#121416] text-[11px] font-bold shadow-md">
                      {item.badge}
                    </span>
                  )}
                  {item.weightOrSize && (
                    <span className="px-2.5 py-1 rounded-full bg-[#0c0e10]/85 backdrop-blur-md text-[#ffba27] text-[11px] font-semibold flex items-center gap-1 border border-[#333537]">
                      {item.weightOrSize}
                    </span>
                  )}
                </div>

                <div className="absolute bottom-3 right-3 bg-[#0c0e10]/90 backdrop-blur-md px-3.5 py-1 rounded-full border border-[#333537] text-[#ffb784] font-syne text-lg font-bold shadow-md">
                  R$ {item.price.toFixed(2).replace('.', ',')}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow justify-between gap-4">
                <div className="space-y-2">
                  <h3 className="font-syne text-lg font-bold text-[#e2e2e5] group-hover:text-[#ffb784] transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs text-[#dec1af] leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 flex items-center justify-between border-t border-[#333537]/50">
                  {/* Heat level indicator */}
                  {item.heatLevel !== undefined && item.heatLevel > 0 ? (
                    <div className="flex items-center gap-1 text-[#ffb3b1]" title={`Nível de pimenta: ${item.heatLevel}/3`}>
                      {[...Array(3)].map((_, i) => (
                        <Flame
                          key={i}
                          className={`w-4 h-4 ${
                            i < (item.heatLevel || 0)
                              ? 'text-[#f77f00] fill-current'
                              : 'text-[#333537]'
                          }`}
                        />
                      ))}
                      <span className="text-[10px] text-[#a68c7b] ml-1 font-semibold">
                        {item.heatLevel === 1 ? 'Suave' : item.heatLevel === 2 ? 'Médio' : 'Picante'}
                      </span>
                    </div>
                  ) : (
                    <span className="text-[11px] text-[#a68c7b] font-medium">
                      {item.category === 'burgers' ? 'Defumado na Lenha' : 'Artesanal'}
                    </span>
                  )}

                  <div className="flex items-center gap-2">
                    {item.customizable ? (
                      <button
                        onClick={() => onOpenCustomizer(item)}
                        className="px-3.5 py-2 rounded-full bg-[#282a2c] hover:bg-[#333537] border border-[#a68c7b]/30 text-[#e2e2e5] text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                      >
                        <SlidersHorizontal className="w-3.5 h-3.5 text-[#ffba27]" />
                        <span>Personalizar</span>
                      </button>
                    ) : null}

                    <button
                      onClick={() => onAddToCartDirect(item)}
                      className="px-4 py-2 rounded-full bg-[#f77f00] hover:bg-[#ffba27] text-[#121416] text-xs font-bold flex items-center gap-1.5 shadow-md active:scale-95 transition-all cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5 stroke-[3]" />
                      <span>Adicionar</span>
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}

      {/* Artisan Experience Banner */}
      <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-[#1a1c1e] via-[#282a2c] to-[#1a1c1e] border border-[#333537] shadow-xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#f77f00]/20 border border-[#f77f00]/40 flex items-center justify-center shrink-0 text-[#f77f00]">
              <Flame className="w-7 h-7 stroke-[2.5]" />
            </div>
            <div>
              <h4 className="font-syne text-base font-bold text-[#e2e2e5]">Prensado na Hora</h4>
              <p className="text-xs text-[#dec1af] mt-0.5">
                Crosta Maillard caramelizada e suculência máxima preservada no corte nobre.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#ffba27]/20 border border-[#ffba27]/40 flex items-center justify-center shrink-0 text-[#ffba27]">
              <UtensilsCrossed className="w-7 h-7 stroke-[2.5]" />
            </div>
            <div>
              <h4 className="font-syne text-base font-bold text-[#e2e2e5]">Brioche de Manteiga</h4>
              <p className="text-xs text-[#dec1af] mt-0.5">
                Macio, aerado e tostado com manteiga clarificada de garrafa antes da montagem.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#ffb3b1]/20 border border-[#ffb3b1]/40 flex items-center justify-center shrink-0 text-[#ffb3b1]">
              <Sparkles className="w-7 h-7 stroke-[2.5]" />
            </div>
            <div>
              <h4 className="font-syne text-base font-bold text-[#e2e2e5]">Fogo de Verdade</h4>
              <p className="text-xs text-[#dec1af] mt-0.5">
                Carvão de eucalipto reflorestado e nós selecionados de lenha de macieira defumada.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
