import React from 'react';
import { ZoomIn } from 'lucide-react';

export const brandLogos = [
  { 
    id: '01', 
    name: 'Likha', 
    category: 'Ethical Apparel & Fashion', 
    src: '/assets/logos/likha.png', 
    year: '2024' 
  },
  { 
    id: '02', 
    name: 'Vastukey', 
    category: 'Real Estate & PropTech', 
    src: '/assets/logos/vastukey.png', 
    year: '2024' 
  },
  { 
    id: '03', 
    name: 'Kiwi Commerce', 
    category: 'Global E-Commerce Platforms', 
    src: '/assets/logos/kiwi-commerce.png', 
    year: '2025' 
  },
  { 
    id: '04', 
    name: 'JagStay', 
    category: 'Heritage Hospitality & Stays', 
    src: '/assets/logos/jagstay.png', 
    year: '2023' 
  },
  { 
    id: '05', 
    name: 'Quantura', 
    category: 'Quantitative Finance & AI', 
    src: '/assets/logos/quantura.png', 
    year: '2025' 
  },
  { 
    id: '06', 
    name: 'Brother Perfumery', 
    category: 'Bespoke Luxury Fragrance', 
    src: '/assets/logos/brother-perfumery.png', 
    year: '2024' 
  },
  { 
    id: '07', 
    name: 'Daminni', 
    category: 'Fine Couture & Traditional Wear', 
    src: '/assets/logos/daminni.png', 
    year: '2024' 
  },
  { 
    id: '08', 
    name: 'Geometric Crest', 
    category: 'Autonomous Systems & Robotics', 
    src: '/assets/logos/crest.png', 
    year: '2025' 
  }
];

export default function BrandTicker({ onSelectLogo }) {
  return (
    <div className="w-full">
      {/* Responsive Box Grid: 4 columns on desktop, 2 columns on mobile */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {brandLogos.map((logo) => (
          <div
            key={logo.id}
            onClick={() => onSelectLogo && onSelectLogo(logo)}
            className="group relative rounded-2xl md:rounded-3xl bg-neutral-950/80 border border-white/[0.08] hover:border-white/30 p-6 sm:p-8 flex flex-col justify-between items-center transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-white/[0.03] cursor-pointer min-h-[220px] sm:min-h-[250px] overflow-hidden"
          >
            {/* Ambient hover glow inside box */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {/* Top Meta info */}
            <div className="w-full flex items-center justify-between text-neutral-400 group-hover:text-neutral-300 transition-colors z-10">
              <span className="font-mono text-[10px] tracking-widest text-neutral-400 group-hover:text-white transition-colors">
                #{logo.id}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-400 group-hover:text-emerald-400 transition-colors">
                {logo.year}
              </span>
            </div>

            {/* Center Logo Showcase */}
            <div className="my-auto py-5 flex items-center justify-center w-full z-10">
              <img
                src={logo.src}
                alt={logo.name}
                className="h-12 sm:h-16 w-auto max-w-[160px] object-contain opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 drop-shadow-md"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  if (e.currentTarget.parentElement) {
                    e.currentTarget.parentElement.innerHTML = `<span class="font-display font-bold uppercase text-white tracking-wider text-sm">${logo.name}</span>`;
                  }
                }}
              />
            </div>

            {/* Bottom Labeling */}
            <div className="w-full text-center z-10 pt-3 border-t border-white/[0.04] group-hover:border-white/10 transition-colors">
              <div className="font-display font-bold uppercase tracking-wider text-xs sm:text-sm text-white group-hover:text-white transition-colors truncate">
                {logo.name}
              </div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 group-hover:text-neutral-300 transition-colors mt-0.5 truncate">
                {logo.category}
              </div>
            </div>

            {/* Subtle zoom indicator on hover */}
            <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white/40">
              <ZoomIn className="w-3.5 h-3.5" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
