import React from 'react';

export const brandLogos = [
  { name: 'Likha', src: '/assets/logos/likha.png' },
  { name: 'Vastukey Ventures', src: '/assets/logos/vastukey.png' },
  { name: 'Kiwi Commerce', src: '/assets/logos/kiwi-commerce.png' },
  { name: 'JagStay Homestay', src: '/assets/logos/jagstay.png' },
  { name: 'Quantura', src: '/assets/logos/quantura.png' },
  { name: 'Brother Perfumery', src: '/assets/logos/brother-perfumery.png' },
  { name: 'Daminni', src: '/assets/logos/daminni.png' },
  { name: 'Geometric Mark', src: '/assets/logos/crest.png' }
];

export default function BrandTicker() {
  // Repeat logos across the marquee for infinite seamless loop
  const fullList = [...brandLogos, ...brandLogos, ...brandLogos];

  return (
    <div className="relative overflow-hidden py-10 select-none border-y border-white/[0.08]">
      {/* Edge gradient fade masks */}
      <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-36 bg-gradient-to-r from-[#080808] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-36 bg-gradient-to-l from-[#080808] to-transparent z-10 pointer-events-none" />

      {/* Infinite scrolling logo track without boxes */}
      <div className="flex w-max animate-marquee items-center hover:[animation-play-state:paused]">
        {fullList.map((logo, idx) => (
          <div
            key={idx}
            className="px-8 sm:px-14 flex items-center justify-center shrink-0 group cursor-pointer"
          >
            <img
              src={logo.src}
              alt={logo.name}
              className="h-10 sm:h-14 w-auto max-w-[180px] object-contain opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300 drop-shadow-sm"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                if (e.currentTarget.parentElement) {
                  e.currentTarget.parentElement.innerHTML = `<span class="font-display font-bold uppercase text-white tracking-wider text-xs">${logo.name}</span>`;
                }
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
