import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Play, Clock } from 'lucide-react';

export default function Hero({ onOpenContact }) {
  const [time, setTime] = useState('');
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  // Pure craft roles: no "Art Director" and no "60fps SaaS UI animation"
  const roles = [
    "Senior Video Editor",
    "Motion Designer",
    "Visual Storyteller",
    "Documentary Editor"
  ];

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

  useEffect(() => {
    const roleTimer = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(roleTimer);
  }, [roles.length]);

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

        {/* Harron-Style Clean 3-Line Headline with Inline Interactive Media Pills */}
        <div className="max-w-[1280px] mb-10">
          <h1 className="font-display text-[7.5vw] sm:text-[5.5vw] lg:text-[4.2vw] leading-[1.25] tracking-[-0.03em] text-white font-medium">
            
            {/* Line 1: Identity & Rotating Specialty */}
            <span className="block">
              <span>I'm Prince Singh </span>

              {/* Inline Media Pill 1: Reel Video Loop */}
              <span className="inline-flex align-middle mx-1.5 sm:mx-2.5 w-14 sm:w-20 md:w-24 h-8 sm:h-11 md:h-13 rounded-2xl md:rounded-3xl overflow-hidden border border-white/20 bg-neutral-900 shadow-xl relative -top-1 group cursor-pointer">
                <video
                  src="/assets/portfolio/reels/creative-studio-reel.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </span>

              <span> a </span>

              {/* Role Rotator (Clean Craft Roles) */}
              <span className="inline-block relative text-[#5c59e8] font-bold">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentRoleIndex}
                    initial={{ y: 20, opacity: 0, filter: 'blur(4px)' }}
                    animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                    exit={{ y: -20, opacity: 0, filter: 'blur(4px)' }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-block"
                  >
                    {roles[currentRoleIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </span>

            {/* Line 2: Craft Focus */}
            <span className="block mt-1 sm:mt-2">
              <span className="text-neutral-500 font-light">Crafting </span>

              {/* Inline Media Pill 2: Motion Showcase */}
              <span className="inline-flex align-middle mx-1.5 sm:mx-2.5 w-14 sm:w-20 md:w-24 h-8 sm:h-11 md:h-13 rounded-2xl md:rounded-3xl overflow-hidden border border-[#5c59e8]/40 bg-[#5c59e8]/10 shadow-xl relative -top-1 group cursor-pointer">
                <video
                  src="/assets/portfolio/motion/animentor-academy-saas.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </span>

              <span className="text-white font-bold">High-Retention Video &amp; Motion</span>
            </span>

            {/* Line 3: Location & Scope */}
            <span className="block mt-1 sm:mt-2">
              <span className="text-neutral-500 font-light">Based in </span>

              {/* Inline Media Pill 3: Visual Poster Asset */}
              <span className="inline-flex align-middle mx-1.5 sm:mx-2.5 w-10 sm:w-14 md:w-16 h-8 sm:h-11 md:h-13 rounded-2xl md:rounded-3xl overflow-hidden border border-white/20 bg-neutral-900 shadow-xl relative -top-1 group cursor-pointer">
                <img
                  src="/assets/projects/posters/poster-system-overthink.webp"
                  alt="Editorial Visual"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </span>

              <span>India, Operating Worldwide</span>
            </span>

          </h1>

          <p className="mt-8 text-base sm:text-xl text-neutral-400 font-light max-w-3xl leading-relaxed">
            Bridging narrative documentary pacing, kinetic typography, and post-production workflows for venture-backed founders and ambitious creators.
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
            <span className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
              150+
            </span>
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 mt-1">
              Global Projects Delivered
            </span>
          </div>

          {/* KPI 2: Watch-Time Lift */}
          <div className="flex flex-col items-center sm:items-start lg:items-center text-center sm:text-left lg:text-center px-4 sm:px-6 pt-4 sm:pt-0">
            <span className="font-display font-bold text-3xl sm:text-4xl text-[#5c59e8] tracking-tight">
              3.4x
            </span>
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 mt-1">
              Watch-Time Retention Lift
            </span>
          </div>

          {/* KPI 3: Experience */}
          <div className="flex flex-col items-center sm:items-start lg:items-center text-center sm:text-left lg:text-center px-4 sm:px-6 pt-4 sm:pt-0">
            <span className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
              8+ YRS
            </span>
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 mt-1">
              Post-Production Experience
            </span>
          </div>

          {/* KPI 4: Retention */}
          <div className="flex flex-col items-center sm:items-start lg:items-center text-center sm:text-left lg:text-center px-4 sm:px-6 pt-4 sm:pt-0">
            <span className="font-display font-bold text-3xl sm:text-4xl text-[#00F0FF] tracking-tight">
              96%
            </span>
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 mt-1">
              Average Video Retention
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
