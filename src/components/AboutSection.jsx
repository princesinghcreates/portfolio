import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Award, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import { personalInfo } from '../data/siteData';

export default function AboutSection({ onOpenContact }) {
  const tools = [
    { name: "Adobe Premiere Pro", level: "Expert // Narrative & Pacing" },
    { name: "Adobe After Effects", level: "Master // SaaS UI & Motion Rigs" },
    { name: "DaVinci Resolve", level: "Advanced // Cinematic Grading" },
    { name: "Adobe Illustrator", level: "Proficient // Vector & Branding" },
    { name: "Adobe Audition", level: "Foley & Sound Design Mastering" },
    { name: "Sound Design & Pacing", level: "Dynamic Foley & Retention Architecture" }
  ];

  return (
    <section id="about" className="py-24 md:py-32 relative bg-[#0a0a0c] select-none border-t border-white/[0.08]">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10">
        
        {/* Section Header Marker */}
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 mb-14 text-xs font-mono uppercase tracking-widest text-neutral-400">
          <div className="flex items-center gap-2">
            <span className="text-[#5c59e8] font-bold">05</span>
            <span className="text-white font-bold">//</span>
            <span className="text-neutral-300 font-semibold tracking-widest">ABOUT PRINCE SINGH</span>
          </div>
          <div className="text-[#5c59e8] font-mono text-[11px] hidden sm:block">
            INDEPENDENT STUDIO
          </div>
          <div className="text-neutral-400">
            PRINCE SINGH
          </div>
        </div>

        {/* 2-Column Split: Portrait & Biography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Portrait Column (5 Cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md aspect-[3/4] rounded-3xl overflow-hidden bg-[#18181f] border border-white/10 shadow-2xl relative group">
              <img
                src="/assets/prince-singh-portrait.webp"
                alt="Prince Singh — Senior Video Editor & Motion Designer"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out filter contrast-[1.05]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div>
                  <h4 className="font-display font-bold text-xl text-white uppercase tracking-wide">
                    Prince Singh
                  </h4>
                  <p className="text-xs font-mono uppercase text-[#a4a2ff]">
                    Senior Video Editor &amp; Motion Designer
                  </p>
                </div>
                <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] font-mono uppercase text-white">
                  8+ YRS EXP
                </span>
              </div>
            </div>
          </div>

          {/* Bio & Core Philosophy (7 Cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="px-3.5 py-1.5 rounded-full bg-[#5c59e8]/15 border border-[#5c59e8]/30 text-xs font-mono uppercase tracking-widest text-[#a4a2ff]">
                // THE PHILOSOPHY
              </span>
              <h3 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight leading-[1.1]">
                Execution Over Perfection. Strategy Over Pixels.
              </h3>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-neutral-300 font-sans font-normal leading-relaxed">
              <p>
                I am a multidisciplinary Senior Video Editor and Motion Designer, operating as a solo creative partner for venture-backed SaaS startups and high-growth creators. Over the past 8 years, I’ve built a high-velocity production pipeline that bridges narrative storytelling, technical After Effects precision, and dark-neon aesthetics.
              </p>
              <p>
                I don't just push pixels or deliver raw files. I engineer high-retention visual systems—from kinetic SaaS UI explainers to modular brand identities—designed specifically to command attention, reduce churn, and drive measurable revenue. My approach is rooted in rapid execution, eliminating bottlenecks, and delivering elite, agency-level visual impact without the agency bloat.
              </p>
            </div>

            {/* Core Toolchain Stack */}
            <div className="pt-4 border-t border-white/[0.08] space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                MASTERED POST-PRODUCTION TOOLCHAIN:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {tools.map((t, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-[#141418] border border-white/[0.06] flex items-center justify-between">
                    <div>
                      <p className="font-display font-bold text-xs uppercase tracking-wide text-white">
                        {t.name}
                      </p>
                      <p className="text-[10px] font-mono text-neutral-400">
                        {t.level}
                      </p>
                    </div>
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#5c59e8] shrink-0" />
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenContact}
                className="harron-btn-purple"
              >
                <span>Initiate Direct Brief</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <a
                href="mailto:princesinghcreates@gmail.com"
                className="harron-btn-primary"
              >
                <span>princesinghcreates@gmail.com</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
