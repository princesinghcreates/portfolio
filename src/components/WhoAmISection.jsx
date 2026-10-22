import React from 'react';
import { motion } from 'framer-motion';

export default function WhoAmISection() {
  return (
    <section id="about" className="py-20 md:py-28 border-t border-white/[0.08] relative bg-[#080808]">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10">
        
        {/* Section Header Marker */}
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 mb-16 text-xs font-mono uppercase tracking-widest text-neutral-400">
          <div className="flex items-center gap-2">
            <span className="text-white font-bold">01</span>
          </div>
          <div className="text-neutral-400 font-semibold tracking-widest">
            //ABOUT ME
          </div>
          <div>
            CREATIVE ARCHITECT
          </div>
        </div>

        {/* Big Centered Title */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-none font-display"
          >
            ABOUT ME
          </motion.h2>
        </div>

        {/* Long Bio Paragraph */}
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-base sm:text-xl lg:text-2xl text-neutral-300 font-normal leading-relaxed font-sans">
            Great visual communication requires both tactical precision and rapid execution. Over the past eight years, I have helped brands stand out through distinct visual identities, impactful packaging design, and high-performing video content. Backed by agency leadership roles and a portfolio of 80+ clients across diverse verticals, I pair deep fundamentals in typography, color theory, and video editing with modern AI-accelerated workflows to produce standout creative that scales.
          </p>
        </div>

      </div>
    </section>
  );
}
