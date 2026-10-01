import React from 'react';
import { X, Sparkles } from 'lucide-react';

interface GalleryLightboxModalProps {
  image: {
    title: string;
    subtitle: string;
    description: string;
    image: string;
  } | null;
  isOpen: boolean;
  onClose: () => void;
}

export const GalleryLightboxModal: React.FC<GalleryLightboxModalProps> = ({
  image,
  isOpen,
  onClose,
}) => {
  if (!isOpen || !image) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0c0e10]/90 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#1a1c1e] max-w-4xl w-full rounded-3xl overflow-hidden border border-[#333537] shadow-[0_24px_50px_rgba(0,0,0,0.95)]">
        {/* Header */}
        <div className="p-4 border-b border-[#333537] flex items-center justify-between bg-[#121416]/70">
          <div>
            <span className="text-[11px] font-bold text-[#ffba27] uppercase tracking-wider">
              {image.subtitle}
            </span>
            <h3 className="font-syne text-lg font-bold text-[#e2e2e5]">{image.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-[#282a2c] hover:bg-[#333537] text-[#a68c7b] hover:text-[#e2e2e5] flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Big Image Viewport */}
        <div className="relative aspect-[16/10] sm:aspect-video w-full bg-[#0c0e10]">
          <img
            src={image.image}
            alt={image.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Caption */}
        <div className="p-5 bg-[#121416] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#dec1af]">
          <p className="max-w-xl">{image.description}</p>
          <div className="flex items-center gap-1.5 text-[#ffba27] shrink-0 font-semibold">
            <Sparkles className="w-4 h-4 text-[#f77f00]" />
            Fotografia Autêntica Fogo &amp; Brasa
          </div>
        </div>
      </div>
    </div>
  );
};
