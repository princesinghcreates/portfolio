import React from 'react';
import { motion } from 'framer-motion';
import { Film, Sparkles, Layers } from 'lucide-react';

export default function WhoAmISection() {
  return (
    <section id="about" className="py-20 md:py-28 border-t border-white/[0.08] relative bg-[#050507]">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10">
        
        {/* Section Header Marker */}
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 mb-16 text-xs font-mono uppercase tracking-widest text-neutral-400">
          <div className="flex items-center gap-2">
            <span className="text-[#3B82F6] font-bold">01</span>
          </div>
          <div className="text-neutral-400 font-semibold tracking-widest">
            //ABOUT ME
          </div>
          <div className="text-blue-400 font-mono text-[11px]">
            ARCHITECTING RETENTION &amp; PRODUCT MOTION
          </div>
        </div>

        {/* Big Centered Title */}
        <div className="text-center mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-tight font-display max-w-4xl mx-auto"
          >
            Architecting Retention &amp; Product Motion.
          </motion.h2>
        </div>

        {/* Focused Copy Paragraph */}
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <p className="text-base sm:text-xl text-neutral-300 font-light leading-relaxed font-sans">
            With over 8 years of multidisciplinary design and post-production experience, I engineer high-performing video content, kinetic SaaS UI animations, and narrative-driven edits that captivate audiences and drive conversions. Operating as a solo creative partner, I combine rigorous technical precision in After Effects and Premiere Pro with high-end aesthetic taste to help ambitious brands and startups scale through visual storytelling. No fluff, no generic templates—just high-end motion and editing built to perform.
          </p>

          {/* Core Competencies Badges */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0D0E14] border border-blue-500/25 text-xs font-mono text-blue-300">
              <Film className="w-3.5 h-3.5 text-blue-400" />
              <span>SaaS UI Component Motion</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0D0E14] border border-purple-500/25 text-xs font-mono text-purple-300">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              <span>Narrative Storytelling &amp; Retention Pacing</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0D0E14] border border-cyan-500/25 text-xs font-mono text-cyan-300">
              <Layers className="w-3.5 h-3.5 text-[#00F0FF]" />
              <span>After Effects &amp; Premiere Pro Rigging</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
