import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Globe, BadgeCheck } from 'lucide-react';

export default function Hero({ onOpenContact }) {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      setTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-6 pb-20 md:pb-28 bg-[#080808] text-white overflow-hidden border-b border-white/[0.08]">
      
      {/* Top Header Bar */}
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 flex items-center justify-between py-6">
        {/* Left: Live Local Clock */}
        <div className="text-xs sm:text-sm font-mono tracking-wider text-neutral-300 flex items-center gap-1.5">
          <span className="text-neutral-500 font-semibold">LOCAL/</span>
          <span className="text-white font-medium">{time || '4:05:01 PM'}</span>
        </div>

        {/* Center: Four dots symbol '::' */}
        <div className="font-mono text-sm tracking-[0.3em] text-neutral-400 select-none">
          ::
        </div>

        {/* Right: Pill Button 'CONTACT NOW' */}
        <div>
          <button
            onClick={onOpenContact}
            className="px-6 py-2 rounded-full border border-white text-xs font-mono uppercase tracking-wider font-semibold text-white hover:bg-white hover:text-black transition-all duration-300 active:scale-95 cursor-pointer shadow-sm"
          >
            CONTACT NOW
          </button>
        </div>
      </div>

      {/* Main Hero Container with Vertical Column Lines */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 relative">
        
        {/* Giant PRINCE Title (Clean, no stationary dots) */}
        <div className="relative py-12 sm:py-16 md:py-20 text-center select-none overflow-hidden">
          
          {/* Subtle vertical guidelines */}
          <div className="absolute inset-0 grid grid-cols-3 pointer-events-none -z-10">
            <div className="border-r border-white/[0.05]" />
            <div className="border-r border-white/[0.05]" />
            <div />
          </div>

          {/* Giant Clash Display Wordmark */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-bold text-[18vw] sm:text-[19vw] lg:text-[20vw] leading-[0.8] tracking-[-0.04em] uppercase text-white"
          >
            PRINCE
          </motion.h1>
        </div>

        {/* 3 Column Metadata Row (matching screenshot icons & typography) */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-b border-white/[0.08] divide-y md:divide-y-0 md:divide-x divide-white/[0.08] py-8 sm:py-10">
          
          {/* Column 1: Location */}
          <div className="flex flex-col items-center justify-center text-center p-4 space-y-3">
            <div className="w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <MapPin className="w-4 h-4 stroke-[2.5]" />
            </div>
            <div className="font-display text-xs sm:text-sm uppercase tracking-wider text-neutral-200 leading-snug">
              <p className="font-bold">BASED IN UDAIPUR,</p>
              <p className="font-medium text-neutral-400">INDIA</p>
              <p className="text-[11px] font-mono text-neutral-400 font-normal tracking-tight normal-case mt-0.5">24.58584° N, 73.71346° E</p>
            </div>
          </div>

          {/* Column 2: Availability */}
          <div className="flex flex-col items-center justify-center text-center p-4 space-y-3">
            <div className="w-8 h-8 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-neutral-200">
              <Globe className="w-4 h-4 stroke-[2]" />
            </div>
            <div className="font-display text-xs sm:text-sm uppercase tracking-wider text-neutral-200 leading-snug">
              <p className="font-bold">AVAILABLE ALL AROUND</p>
              <p className="font-medium text-neutral-400">WORLDWIDE</p>
            </div>
          </div>

          {/* Column 3: Role / Verified (Interchanged: Video Editor + Graphic Designer) */}
          <div className="flex flex-col items-center justify-center text-center p-4 space-y-3">
            <div className="w-8 h-8 rounded-full bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
              <BadgeCheck className="w-4 h-4 stroke-[2.5]" />
            </div>
            <div className="font-display text-xs sm:text-sm uppercase tracking-wider text-neutral-200 leading-snug">
              <p className="font-bold">VIDEO EDITOR +</p>
              <p className="font-medium text-neutral-400">GRAPHIC DESIGNER</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
