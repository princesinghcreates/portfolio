import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Globe, Film, ArrowUpRight, Play } from 'lucide-react';

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

  const scrollToPortfolio = () => {
    if (window.lenis) {
      window.lenis.scrollTo('#portfolio', { duration: 1.4, offset: -70 });
    } else {
      document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-6 pb-20 md:pb-28 bg-[#050507] text-white overflow-hidden border-b border-white/[0.08]">
      {/* Subtle radial neon background aura */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-blue-600/10 via-purple-600/5 to-transparent blur-3xl pointer-events-none -z-10" />

      {/* Top Header Bar */}
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 flex items-center justify-between py-6">
        {/* Left: Live Local Clock */}
        <div className="text-xs sm:text-sm font-mono tracking-wider text-neutral-300 flex items-center gap-1.5">
          <span className="text-neutral-500 font-semibold">LOCAL/</span>
          <span className="text-white font-medium">{time || '4:05:01 PM'}</span>
        </div>

        {/* Center: Remote Partner Availability */}
        <div className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 text-[11px] font-mono tracking-wider text-blue-300">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] animate-pulse" />
          <span>AVAILABLE WORLDWIDE // REMOTE PARTNER</span>
        </div>

        {/* Right: Pill Button 'BOOK DISCOVERY CALL' */}
        <div>
          <button
            onClick={onOpenContact}
            className="group px-6 py-2 rounded-full border border-blue-500/40 bg-blue-500/10 text-xs font-mono uppercase tracking-wider font-semibold text-white hover:bg-white hover:text-black hover:border-white transition-all duration-300 active:scale-95 cursor-pointer shadow-lg shadow-blue-500/10 flex items-center gap-1.5"
          >
            <span>BOOK DISCOVERY CALL</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-blue-400 group-hover:text-black transition-colors" />
          </button>
        </div>
      </div>

      {/* Main Hero Container with Vertical Column Lines */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 relative">
        
        {/* Giant PRINCE Title & Positioning Lockup */}
        <div className="relative pt-10 pb-8 text-center select-none overflow-hidden">
          
          {/* Subtle vertical guidelines */}
          <div className="absolute inset-0 grid grid-cols-3 pointer-events-none -z-10">
            <div className="border-r border-white/[0.04]" />
            <div className="border-r border-white/[0.04]" />
            <div />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono uppercase tracking-[0.2em] text-neutral-300 mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
            <span>Senior Video Editor &amp; Motion Designer</span>
          </motion.div>

          {/* Giant Clash Display Wordmark */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-bold text-[18vw] sm:text-[19vw] lg:text-[20vw] leading-[0.8] tracking-[-0.04em] uppercase text-white"
          >
            PRINCE
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-base sm:text-xl md:text-2xl font-light text-neutral-300 max-w-3xl mx-auto tracking-normal leading-relaxed"
          >
            High-Impact Narrative Storytelling &amp; SaaS UI Motion.
          </motion.p>

          {/* Quick CTA Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <button
              onClick={scrollToPortfolio}
              className="px-8 py-3.5 rounded-full bg-white text-black font-mono text-xs uppercase tracking-wider font-bold hover:bg-neutral-200 transition-all active:scale-95 cursor-pointer shadow-xl shadow-white/10"
            >
              EXPLORE SELECTED WORK
            </button>
            <button
              onClick={onOpenContact}
              className="px-8 py-3.5 rounded-full bg-white/[0.05] border border-white/20 hover:border-blue-400/60 hover:bg-blue-500/10 text-white font-mono text-xs uppercase tracking-wider font-semibold transition-all active:scale-95 cursor-pointer flex items-center gap-2"
            >
              <span>BOOK DISCOVERY CALL</span>
              <ArrowUpRight className="w-4 h-4 text-blue-400" />
            </button>
          </motion.div>
        </div>

        {/* 2026 Motion & SaaS UI Showreel Preview Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 mb-12 rounded-2xl md:rounded-3xl overflow-hidden bg-[#0A0B10] border border-white/10 hover:border-blue-500/40 transition-all duration-500 shadow-2xl relative group"
        >
          <div className="aspect-[16/9] md:aspect-[21/9] w-full relative overflow-hidden bg-black">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              poster="/assets/portfolio/thumbnails/thumb-animentor-academy-saas.jpg"
              className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
              src="/assets/portfolio/motion/animentor-academy-saas.mp4"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
            
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between pointer-events-none">
              <div className="space-y-1">
                <span className="px-2.5 py-1 rounded-full bg-blue-500/30 backdrop-blur-md border border-blue-400/40 text-[10px] font-mono uppercase tracking-widest text-blue-300">
                  FEATURED MOTION SHOWREEL
                </span>
                <p className="font-display font-bold text-lg sm:text-xl text-white uppercase tracking-wide">
                  SaaS UI Component Motion &amp; Launch Explainers
                </p>
              </div>
              <button
                onClick={scrollToPortfolio}
                className="pointer-events-auto px-4 py-2 rounded-full bg-white/10 hover:bg-white text-white hover:text-black backdrop-blur-md border border-white/20 transition-all text-xs font-mono uppercase tracking-wider flex items-center gap-1.5 cursor-pointer"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Watch Reel Suite</span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* 3 Column Metadata Row (Refined without redundant wording) */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-b border-white/[0.08] divide-y md:divide-y-0 md:divide-x divide-white/[0.08] py-8 sm:py-10">
          
          {/* Column 1: Location */}
          <div className="flex flex-col items-center justify-center text-center p-4 space-y-3">
            <div className="w-8 h-8 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
              <MapPin className="w-4 h-4 stroke-[2.5]" />
            </div>
            <div className="font-display text-xs sm:text-sm uppercase tracking-wider text-neutral-200 leading-snug">
              <p className="font-bold">BASED IN UDAIPUR,</p>
              <p className="font-medium text-neutral-400">INDIA</p>
            </div>
          </div>

          {/* Column 2: Availability */}
          <div className="flex flex-col items-center justify-center text-center p-4 space-y-3">
            <div className="w-8 h-8 rounded-full bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
              <Globe className="w-4 h-4 stroke-[2]" />
            </div>
            <div className="font-display text-xs sm:text-sm uppercase tracking-wider text-neutral-200 leading-snug">
              <p className="font-bold">AVAILABLE WORLDWIDE</p>
              <p className="font-medium text-neutral-400">REMOTE PARTNER</p>
            </div>
          </div>

          {/* Column 3: Role */}
          <div className="flex flex-col items-center justify-center text-center p-4 space-y-3">
            <div className="w-8 h-8 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-[#00F0FF]">
              <Film className="w-4 h-4 stroke-[2.5]" />
            </div>
            <div className="font-display text-xs sm:text-sm uppercase tracking-wider text-neutral-200 leading-snug">
              <p className="font-bold">SENIOR VIDEO EDITOR +</p>
              <p className="font-medium text-neutral-400">MOTION DESIGNER</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
