import React from 'react';

export default function TopHeaderTab({ onOpenContact }) {
  return (
    <div className="w-full flex justify-center sticky top-0 z-50 pointer-events-none select-none">
      <div className="flex items-center pointer-events-auto">
        {/* Left Wing Curve (SVG seamless negative corner) */}
        <svg
          className="tab-wing tab-wing-left -mr-[1px] text-[#222228] h-[34px] w-[30px]"
          viewBox="0 0 30 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M30 0H0C18 0 30 14 30 34V0Z"
            fill="currentColor"
          />
        </svg>

        {/* Central Dark Tab */}
        <button
          onClick={onOpenContact}
          className="h-[34px] bg-[#222228] hover:bg-[#2b2b32] text-neutral-300 hover:text-white transition-colors px-4 sm:px-6 flex items-center gap-2.5 text-[11px] font-mono uppercase tracking-wider cursor-pointer shadow-lg border-b border-white/[0.08]"
          title="Click to initiate project discussion"
        >
          <span className="w-2 h-2 rounded-full bg-[#61c554] live-blink-pulse" />
          <span className="font-semibold text-white">AVAILABLE FOR PROJECTS</span>
          <span className="hidden md:inline text-neutral-400">// OPERATING WORLDWIDE (UTC+5:30)</span>
        </button>

        {/* Right Wing Curve (SVG seamless negative corner) */}
        <svg
          className="tab-wing tab-wing-right -ml-[1px] text-[#222228] h-[34px] w-[30px]"
          viewBox="0 0 30 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0H30C12 0 0 14 0 34V0Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </div>
  );
}
