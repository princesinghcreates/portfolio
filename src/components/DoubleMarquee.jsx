import React from 'react';

export default function DoubleMarquee() {
  const strip1Text = "ART DIRECTION ✦ VIDEO EDITING ✦ 60FPS MOTION GRAPHICS ✦ NARRATIVE STORYTELLING ✦ SAAS UI ANIMATION ✦ AI-AUTOMATED EDITING WORKFLOWS ✦ RETENTION ARCHITECTURE ✦ ";
  const strip2Text = "DOCUMENTARY CUTS ✦ KINETIC TYPOGRAPHY ✦ YOUTUBE RETENTION PACING ✦ LUXURY PACKAGING ✦ EDITORIAL POSTERS ✦ SOUND DESIGN MASTERING ✦ ";

  return (
    <div className="relative w-full h-[210px] my-10 overflow-hidden flex items-center justify-center pointer-events-none select-none">
      
      {/* Strip 1: Dark Slate Ribbon Angled -2.5° (Scrolling Left) */}
      <div className="absolute w-[125vw] -rotate-2 bg-[#16161b] border-y border-white/10 py-3.5 shadow-2xl flex items-center">
        <div className="flex w-max animate-marquee whitespace-nowrap text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-neutral-300 font-bold">
          <span>{strip1Text}{strip1Text}</span>
          <span>{strip1Text}{strip1Text}</span>
        </div>
      </div>

      {/* Strip 2: Vibrant Electric Purple Ribbon Angled +2.5° (Scrolling Right) */}
      <div className="absolute w-[125vw] rotate-2 bg-[#5c59e8] py-3.5 shadow-[0_15px_35px_rgba(92,89,232,0.4)] flex items-center">
        <div className="flex w-max animate-marquee-reverse whitespace-nowrap text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-white font-bold">
          <span>{strip2Text}{strip2Text}</span>
          <span>{strip2Text}{strip2Text}</span>
        </div>
      </div>

    </div>
  );
}
