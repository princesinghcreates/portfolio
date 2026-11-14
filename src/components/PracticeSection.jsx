import React from 'react';
import { motion } from 'framer-motion';
import { Film, Sparkles, Cpu, Layers, Box, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function PracticeSection({ onOpenContact }) {
  const practices = [
    {
      id: "01",
      title: "Video Editing & Documentary Storytelling",
      tag: "PRIMARY CRAFT // VIDEO DIRECTION",
      highlight: "PRIORITIZED SPECIALTY",
      description: "High-retention documentary editing, YouTube deep dives, and narrative commercial cuts. Crafting the emotional arc through micro-jump cuts, dynamic pacing, cinematic color grading, and comprehensive sound design & Foley mastering.",
      metrics: "3.4x Retention Lift",
      software: ["Premiere Pro", "DaVinci Resolve", "After Effects", "Audition"],
      icon: Film,
      featured: true
    },
    {
      id: "02",
      title: "Motion Graphics, UI & Text Animation",
      tag: "KINETIC COMPONENT & TYPOGRAPHY MOTION",
      description: "Fluid product launch explainers, kinetic typography, animated title sequences, interactive UI component motion, and kinetic SaaS onboarding visuals. Bringing static wireframes and designs to life with mathematically tuned easing curves.",
      metrics: "Fluid UI Motion",
      software: ["After Effects", "Illustrator", "Figma", "Custom Expressions"],
      icon: Sparkles
    },
    {
      id: "03",
      title: "Long & Short-Form Content Architecture",
      tag: "ALGORITHMIC RETENTION LOOPS",
      description: "Full-funnel video content strategy: high-authority 10–30 minute YouTube documentaries paired with 9:16 vertical short-form retention edits (Instagram Reels, TikTok, YouTube Shorts) structured with seamless first-to-last frame loops.",
      metrics: "96% Watch-Time Completion",
      software: ["Multi-Aspect Cutdowns", "Motion Rigs", "Dynamic Captions"],
      icon: Layers
    },
    {
      id: "04",
      title: "Brand Identity, Logo & Packaging Design",
      tag: "PHYSICAL & DIGITAL BRAND SYSTEMS",
      description: "End-to-end bespoke brand identities, distinctive logo marks, retail-ready luxury packaging dielines, structural 3D mockups, and high-impact editorial poster design for modern consumer brands and ambitious ventures.",
      metrics: "Comprehensive Systems",
      software: ["Illustrator", "Photoshop", "InDesign", "Physical Dielines"],
      icon: Box
    }
  ];

  return (
    <section id="practice" className="py-24 md:py-32 relative bg-[#0a0a0c] select-none border-t border-white/[0.08]">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10">
        
        {/* Section Header Marker */}
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 mb-14 text-xs font-mono uppercase tracking-widest text-neutral-400">
          <div className="flex items-center gap-2">
            <span className="text-[#5c59e8] font-bold">01</span>
            <span className="text-white font-bold">//</span>
            <span className="text-neutral-300 font-semibold tracking-widest">PRACTICE &amp; DISCIPLINES</span>
          </div>
          <div className="text-[#5c59e8] font-mono text-[11px] hidden sm:block">
            DIRECTING • EDITING • KINETIC MOTION
          </div>
          <div className="text-neutral-400">
            AGENCY &amp; STARTUP PARTNER
          </div>
        </div>

        {/* Section Title */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-8">
            <h2 className="text-4xl sm:text-6xl font-medium tracking-tight text-white leading-[1.02] font-display">
              Precision Craft &amp;<br />Creative Direction.
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
              Every project is treated with art-directed intentionality: narrative pacing, sound architecture, and kinetic motion built to perform.
            </p>
          </div>
        </div>

        {/* Practice Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Card 1: Featured Video Editing (Full Width 12 Cols or 7 Cols) */}
          <div className="lg:col-span-12 rounded-3xl p-8 sm:p-12 bg-[#121217] border border-[#5c59e8]/40 hover:border-[#5c59e8] transition-all duration-500 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-[450px] h-[300px] bg-gradient-to-bl from-[#5c59e8]/20 via-transparent to-transparent pointer-events-none" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-[#5c59e8]/20 border border-[#5c59e8]/40 text-[10px] font-mono uppercase tracking-widest text-[#a4a2ff]">
                    {practices[0].tag}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-mono font-bold uppercase tracking-wider">
                    {practices[0].highlight}
                  </span>
                  <span className="text-xs font-mono text-neutral-400">
                    {practices[0].metrics}
                  </span>
                </div>

                <h3 className="font-display font-medium text-3xl sm:text-4xl text-white tracking-tight group-hover:text-[#a4a2ff] transition-colors">
                  {practices[0].title}
                </h3>

                <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed max-w-2xl">
                  {practices[0].description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {practices[0].software.map((sw, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-xs font-mono text-neutral-300">
                      {sw}
                    </span>
                  ))}
                </div>
              </div>

              {/* Interactive Video Preview Snippet */}
              <div className="lg:col-span-5 aspect-[16/10] rounded-2xl overflow-hidden bg-black border border-white/10 shadow-2xl relative group/vid cursor-pointer">
                <video
                  src="/assets/portfolio/reels/reel-showcase-1.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover group-hover/vid:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-[10px] font-mono uppercase text-white">
                    Editorial Reel Preview
                  </span>
                  <span className="text-[11px] font-mono text-emerald-400 font-bold">
                    94% Retention Rate
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Cards 2-4 (3-Column Symmetrical Grid) */}
          {practices.slice(1).map((practice) => {
            const Icon = practice.icon;
            return (
              <motion.div
                key={practice.id}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="lg:col-span-4 harron-card p-8 sm:p-9 flex flex-col justify-between"
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono uppercase tracking-widest text-[#5c59e8] font-bold">
                      {practice.tag}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-neutral-300">
                      <Icon className="w-4 h-4 text-[#5c59e8]" />
                    </div>
                  </div>

                  <h4 className="font-display font-medium text-2xl sm:text-3xl text-white tracking-tight group-hover:text-[#a4a2ff] transition-colors">
                    {practice.title}
                  </h4>

                  <p className="text-sm text-neutral-400 font-light leading-relaxed">
                    {practice.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/[0.06] flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {practice.software.slice(0, 3).map((sw, i) => (
                      <span key={i} className="px-2.5 py-0.5 rounded-full bg-white/[0.04] text-[10px] font-mono text-neutral-400">
                        {sw}
                      </span>
                    ))}
                  </div>
                  <span className="text-xs font-mono text-emerald-400 font-semibold">
                    {practice.metrics}
                  </span>
                </div>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
