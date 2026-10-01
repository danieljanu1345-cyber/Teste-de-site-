import React, { useState } from 'react';
import { Camera, Sparkles, ZoomIn } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/menuData';

interface GalleryPageProps {
  onSelectImage: (item: any) => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ onSelectImage }) => {
  const [filter, setFilter] = useState<'all' | 'ambiente' | 'chapa' | 'acompanhamentos'>('all');

  const filteredItems = GALLERY_ITEMS.filter(
    (item) => filter === 'all' || item.category === filter
  );

  return (
    <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <span className="text-xs font-bold tracking-widest text-[#ffb784] uppercase block mb-1">
            Registro Fotográfico
          </span>
          <h1 className="font-syne text-3xl sm:text-5xl text-[#e2e2e5] font-extrabold tracking-tight">
            Galeria Fogo &amp; Brasa
          </h1>
          <p className="text-sm text-[#dec1af] mt-1 max-w-lg">
            Momentos capturados entre labaredas, fumaça nobre de macieira e a arte culinária dos nossos mestres.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-full bg-[#1a1c1e] border border-[#333537]">
          {[
            { id: 'all', label: 'Todos' },
            { id: 'ambiente', label: 'O Ambiente' },
            { id: 'chapa', label: 'Burgers na Chapa' },
            { id: 'acompanhamentos', label: 'Batatas & Shakes' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id as any)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                filter === cat.id
                  ? 'bg-[#f77f00] text-[#121416] font-bold shadow-sm'
                  : 'text-[#dec1af] hover:text-[#e2e2e5] hover:bg-[#282a2c]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => onSelectImage(item)}
            className={`group relative rounded-3xl overflow-hidden bg-[#1e2022] border border-[#333537] shadow-lg cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:border-[#f77f00]/50 ${
              item.wide ? 'lg:col-span-2 h-[420px]' : 'h-[400px]'
            }`}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e10]/95 via-[#0c0e10]/30 to-transparent p-6 flex flex-col justify-end">
              <span className="text-[11px] font-bold text-[#ffba27] uppercase tracking-wider mb-1">
                {item.subtitle}
              </span>
              <h3 className="font-syne text-xl font-bold text-[#e2e2e5] group-hover:text-[#ffb784] transition-colors">
                {item.title}
              </h3>
              <p className="text-xs text-[#dec1af] max-w-xl mt-1 line-clamp-2">
                {item.description}
              </p>
              <div className="mt-3 flex items-center gap-1.5 text-[#ffba27] text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-4 h-4" />
                <span>Ampliar Fotografia</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
