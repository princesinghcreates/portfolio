import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Play, Clock } from 'lucide-react';

export default function Hero({ onOpenContact }) {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true
        })
      );
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToWorks = () => {
    const el = document.querySelector('#works');
    if (el) {
      if (window.lenis) {
        window.lenis.scrollTo('#works', { offset: -70, duration: 1.3 });
      } else {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="hero" className="relative pt-12 pb-20 md:pb-28 overflow-hidden select-none">
      
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-b from-[#5c59e8]/15 via-[#8B5CF6]/5 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-[1280px] mx-auto px-6 sm:px-10">
        
        {/* Live Local Clock & Operating Zone */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/[0.08] text-xs font-mono uppercase tracking-widest text-neutral-400">
          <div className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-[#5c59e8]" />
            <span className="text-white font-medium">{time || '7:55:00 PM'}</span>
            <span className="text-neutral-500">// UDAIPUR, IN (UTC+5:30)</span>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-neutral-400">
            <span className="w-1.5 h-1.5 rounded-full bg-[#61c554] animate-pulse" />
            <span>AVAILABLE FOR SELECTED CLIENT PROJECTS</span>
          </div>
        </div>

        {/* Aggressively Confident Static Headline with Single Focal Showreel Pill */}
        <div className="max-w-[1280px] mb-10">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-xs font-mono text-[#a4a2ff] uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#61c554] animate-pulse" />
            <span>PRINCE SINGH // SENIOR VIDEO EDITOR &amp; MOTION DESIGNER</span>
          </div>

          <h1 className="font-display text-[7vw] sm:text-[5.2vw] lg:text-[4.2vw] leading-[1.08] tracking-[-0.025em] text-white font-medium">
            <span className="block">
              Architecting High-Retention
            </span>

            <span className="block mt-1 sm:mt-2">
              <span>Stories &amp; Kinetic Motion</span>
              <span 
                onClick={scrollToWorks}
                className="inline-flex align-middle mx-2 sm:mx-3.5 w-16 sm:w-24 md:w-28 h-8 sm:h-12 md:h-14 rounded-2xl md:rounded-3xl overflow-hidden border border-[#5c59e8]/50 bg-neutral-900 shadow-xl relative -top-1 group cursor-pointer"
                title="Watch Showreel Preview"
              >
                <video
                  src="/assets/portfolio/reels/creative-studio-reel.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </span>
            </span>

            <span className="block mt-1 sm:mt-2 text-neutral-400">
              for venture-backed founders.
            </span>
          </h1>

          <p className="mt-8 text-base sm:text-xl text-neutral-300 font-sans font-normal max-w-2xl leading-relaxed">
            Operating as a solo post-production partner for ambitious brands: narrative documentary pacing, kinetic UI motion, and precision sound design engineered to command attention.
          </p>
        </div>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center gap-4 mb-16">
          <button
            onClick={scrollToWorks}
            className="harron-btn-purple"
          >
            <span>Explore Selected Works</span>
            <Play className="w-3.5 h-3.5 fill-current" />
          </button>
          
          <button
            onClick={onOpenContact}
            className="harron-btn-primary"
          >
            <span>Book 15-Min Discovery Call</span>
            <div className="w-7 h-7 rounded-full bg-white text-black flex items-center justify-center">
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </div>
          </button>
        </div>

        {/* 4-Column Harron KPI Row with Vertical Dividers */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 border-y border-white/[0.08] py-8 sm:py-10 divide-y sm:divide-y-0 lg:divide-x divide-white/[0.08]">
          
          {/* KPI 1: Delivered Projects */}
          <div className="flex flex-col items-center sm:items-start lg:items-center text-center sm:text-left lg:text-center px-4 sm:px-6">
            <span className="font-display font-medium text-3xl sm:text-4xl text-[#5c59e8] tracking-tight">
              150+
            </span>
            <span className="text-xs font-mono uppercase tracking-wider text-white mt-1">
              Global Projects Delivered
            </span>
          </div>

          {/* KPI 2: Watch-Time Lift */}
          <div className="flex flex-col items-center sm:items-start lg:items-center text-center sm:text-left lg:text-center px-4 sm:px-6 pt-4 sm:pt-0">
            <span className="font-display font-medium text-3xl sm:text-4xl text-[#5c59e8] tracking-tight">
              3.4x
            </span>
            <span className="text-xs font-mono uppercase tracking-wider text-white mt-1">
              Watch-Time Retention Lift
            </span>
          </div>

          {/* KPI 3: Experience */}
          <div className="flex flex-col items-center sm:items-start lg:items-center text-center sm:text-left lg:text-center px-4 sm:px-6 pt-4 sm:pt-0">
            <span className="font-display font-medium text-3xl sm:text-4xl text-[#5c59e8] tracking-tight">
              8+ YRS
            </span>
            <span className="text-xs font-mono uppercase tracking-wider text-white mt-1">
              Post-Production Experience
            </span>
          </div>

          {/* KPI 4: Retention */}
          <div className="flex flex-col items-center sm:items-start lg:items-center text-center sm:text-left lg:text-center px-4 sm:px-6 pt-4 sm:pt-0">
            <span className="font-display font-medium text-3xl sm:text-4xl text-[#5c59e8] tracking-tight">
              94%
            </span>
            <span className="text-xs font-mono uppercase tracking-wider text-white mt-1">
              Client Retention Rate
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
