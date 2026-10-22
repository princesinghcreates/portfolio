import React from 'react';
import { motion } from 'framer-motion';

export default function VoiceOfPrinceSection() {
  return (
    <section id="voice" className="py-24 md:py-36 border-t border-white/[0.08] relative bg-[#080808] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 relative">
        
        {/* Section Header Marker */}
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 mb-20 text-xs font-mono uppercase tracking-widest text-neutral-400">
          <div className="flex items-center gap-2">
            <span className="text-white font-bold">04</span>
          </div>
          <div className="text-neutral-400 font-semibold tracking-widest">
            //VOICE OF PRINCE
          </div>
          <div>
            INDEPENDENT STUDIO
          </div>
        </div>

        {/* Big Central Statement with Floating Cards */}
        <div className="relative max-w-5xl mx-auto text-center py-12 md:py-20">
          
          {/* Main Statement Text */}
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-tight font-display relative z-10"
          >
            INDEPENDENT CREATIVE PARTNER DELIVERING STRATEGY-LED DESIGN AND VIDEO SOLUTIONS THAT TURN IDEAS INTO MEASURABLE BRAND IMPACT.
          </motion.h2>

          {/* Centered Handwritten Signature */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center items-center mt-10 relative z-10"
          >
            <img
              src="/assets/my-sign.png"
              alt="Prince Singh Signature"
              className="h-16 md:h-20 object-contain filter invert opacity-90"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </motion.div>

          {/* 3 Visual Showcase Cards (as seen in the recording frames 013 & 014) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 relative z-10 items-center">
            
            {/* Left Card: Branding Stationary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-2xl md:rounded-3xl overflow-hidden bg-neutral-900 border border-white/[0.08] shadow-2xl aspect-[4/3] group"
            >
              <img
                src="/assets/Stack of Branding Papers.png"
                alt="Brand Identity Collateral"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </motion.div>

            {/* Center Floating Card: Sneaker on Design Books */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-2xl md:rounded-3xl overflow-hidden bg-neutral-900 border border-white/[0.08] shadow-2xl aspect-[4/3] group md:-translate-y-6"
            >
              <img
                src="/assets/Stylish Beige Sneaker.png"
                alt="Design Objects & Lifestyle"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </motion.div>

            {/* Right Card: Custom Mechanical Keyboard */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="rounded-2xl md:rounded-3xl overflow-hidden bg-neutral-900 border border-white/[0.08] shadow-2xl aspect-[4/3] group"
            >
              <img
                src="/assets/Custom Mechanical Keyboard.png"
                alt="Craft & Hardware Setup"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
