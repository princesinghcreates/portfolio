import React from 'react';
import { motion } from 'framer-motion';

export default function ContactSection({ onOpenContact }) {
  const scrollToTop = () => {
    if (typeof window !== 'undefined' && window.lenis) {
      window.lenis.scrollTo(0, { duration: 1.4 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const marqueeText = "BASED IN INDIA, I AM AN INNOVATIVE DESIGNER AND DIGITAL CREATOR. MY PASSION FOR MINIMALIST AESTHETICS, ELEGANT TYPOGRAPHY, AND INTUITIVE DESIGN IS EVIDENT IN MY WORK.";

  return (
    <section id="contact" className="pt-24 pb-12 border-t border-white/[0.08] relative bg-[#080808] overflow-hidden select-none">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10">
        
        {/* Massive Headline: LET'S WORK TOGETHER (matching frame 002) */}
        <div className="text-center mb-8">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[12vw] sm:text-[11vw] lg:text-[10vw] font-black uppercase tracking-tight text-white leading-[0.85] font-display"
          >
            LET'S WORK<br />TOGETHER
          </motion.h2>

          {/* CONTACT NOW Pill Button */}
          <div className="mt-8 flex justify-center">
            <button
              onClick={onOpenContact}
              className="px-8 py-3 rounded-full border border-white text-xs font-mono uppercase tracking-widest font-semibold text-white hover:bg-white hover:text-black transition-all duration-300 active:scale-95 cursor-pointer shadow-lg"
            >
              CONTACT NOW
            </button>
          </div>
        </div>

        {/* Central Portrait & Metadata Layout (matching frame 002) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center my-16">
          
          {/* Left Metadata */}
          <div className="md:col-span-3 text-center md:text-right font-display text-xs sm:text-sm uppercase tracking-wider text-neutral-400 space-y-1">
            <p className="text-neutral-300 font-bold">BASED IN UDAIPUR,</p>
            <p className="font-medium text-neutral-400">INDIA</p>
          </div>

          {/* Center Card with Red Background Portrait */}
          <div className="md:col-span-6 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="w-64 sm:w-80 aspect-[3/4] rounded-3xl overflow-hidden bg-[#c11c1c] border border-white/10 shadow-2xl relative"
            >
              <img
                src="/assets/Dynamic Phone Call Art.png"
                alt="Prince Singh"
                className="w-full h-full object-cover object-center filter contrast-110"
                loading="lazy"
              />
            </motion.div>
          </div>

          {/* Right Metadata */}
          <div className="md:col-span-3 text-center md:text-left font-display text-xs sm:text-sm uppercase tracking-wider text-neutral-400 space-y-1">
            <p className="text-neutral-300 font-bold">VIDEO EDITOR +</p>
            <p className="font-medium text-neutral-400">GRAPHIC DESIGNER</p>
          </div>

        </div>

        {/* Infinite Text Marquee (matching frame 001 bottom) */}
        <div className="py-8 border-y border-white/[0.08] overflow-hidden my-12">
          <div className="flex w-max animate-marquee space-x-12 select-none items-center">
            {[marqueeText, marqueeText, marqueeText].map((txt, i) => (
              <span key={i} className="font-display font-bold text-lg sm:text-2xl text-white uppercase tracking-wider shrink-0">
                {txt} <span className="text-neutral-500 mx-6">✦</span>
              </span>
            ))}
          </div>
        </div>

        {/* Social Links (matching frame 001 bottom) */}
        <div className="flex items-center justify-center gap-8 sm:gap-16 py-8 text-xs font-mono uppercase tracking-widest text-neutral-400">
          <a
            href="https://instagram.com/princesinghcreates"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors cursor-pointer"
          >
            INSTAGRAM ↗
          </a>
          <a
            href="https://pinterest.com/princesinghcreates"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors cursor-pointer"
          >
            PINTEREST ↗
          </a>
        </div>

        {/* Giant Bottom Wordmark: PRINCE (matching frame 001) */}
        <div className="py-12 select-none text-center overflow-hidden">
          <h1 className="font-display font-bold text-[20vw] leading-[0.75] tracking-[-0.04em] uppercase text-white">
            PRINCE
          </h1>
        </div>

        {/* Bottom Footer Row */}
        <div className="flex items-center justify-between border-t border-white/[0.08] pt-8 text-xs font-mono uppercase tracking-widest text-neutral-400">
          <div>
            ©2026 PRINCESINGH
          </div>
          <button
            onClick={scrollToTop}
            className="hover:text-white transition-colors cursor-pointer"
          >
            BACK TO TOP ↑
          </button>
        </div>

      </div>
    </section>
  );
}
