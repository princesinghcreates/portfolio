import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Film, Sliders, CheckCircle2 } from 'lucide-react';

export default function ProcessSection() {
  const steps = [
    {
      num: "01",
      title: "Narrative Hook & Creative Direction",
      tagline: "ARCHITECTING THE CURIOSITY GAP",
      description: "We deconstruct the product or story thesis, map the viewer drop-off zones, and write an audio-first pacing structure engineered to lock in immediate attention within the first 3 seconds.",
      deliverables: ["Pacing Architecture", "Curiosity Hook Script", "Audio Blueprint"]
    },
    {
      num: "02",
      title: "Kinetic Storyboard & Style Frames",
      tagline: "KINETIC MOTION PREVIEWS",
      description: "Before diving into timeline assembly, we produce key styleframes and kinetic motion tests. Complex UI interactions, typography systems, and camera moves are locked down for client alignment.",
      deliverables: ["Interactive Styleframes", "UI Asset Breakdown", "Easing Curve Proofs"]
    },
    {
      num: "03",
      title: "Timeline Assembly & Sound Design Mastering",
      tagline: "WHERE RETENTION HAPPENS",
      description: "Full post-production in Premiere Pro and After Effects: micro-jump cuts, kinetic typography tracking, precise dialogue cleanup, and multi-layered Foley soundscapes that trigger organic watch-time loops.",
      deliverables: ["Frame-Accurate Cut", "Custom Sound Design", "Kinetic Typography"]
    },
    {
      num: "04",
      title: "Mastering & Multi-Platform Packaging",
      tagline: "DISTRIBUTION-READY FINISH",
      description: "Final broadcast-grade color grading and 4K ProRes mastering. We deliver full horizontal showcases plus native 9:16 vertical cuts for Reels, TikTok, and YouTube Shorts with custom high-CTR cover art.",
      deliverables: ["4K Landscape Master", "9:16 Vertical Cutdowns", "High-CTR Cover System"]
    }
  ];

  return (
    <section id="process" className="py-24 md:py-32 relative bg-[#0a0a0c] select-none border-t border-white/[0.08]">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10">
        
        {/* Section Header Marker */}
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 mb-14 text-xs font-mono uppercase tracking-widest text-neutral-400">
          <div className="flex items-center gap-2">
            <span className="text-[#5c59e8] font-bold">04</span>
            <span className="text-white font-bold">//</span>
            <span className="text-neutral-300 font-semibold tracking-widest">HOW WE WORK</span>
          </div>
          <div className="text-[#5c59e8] font-mono text-[11px] hidden sm:block">
            4-STEP EDITORIAL WORKFLOW
          </div>
          <div className="text-neutral-400">
            RAPID TURNAROUND
          </div>
        </div>

        {/* Section Title */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-8">
            <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-[1.02] font-display">
              Streamlined<br />Creative Pipeline.
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
              Transparent, rapid, and detail-oriented. Zero creative guesswork—just structured milestones and high-tempo execution.
            </p>
          </div>
        </div>

        {/* 4 Process Cards with Expanded Negative Space */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {steps.map((step) => (
            <div
              key={step.num}
              className="harron-card p-8 sm:p-10 lg:p-9 xl:p-10 flex flex-col justify-between group transition-all duration-500 hover:border-[#5c59e8]/50 min-h-[460px]"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-2 border-b border-white/[0.06]">
                  <span className="font-display font-black text-3xl sm:text-4xl text-[#5c59e8]">
                    {step.num}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">
                    PHASE {step.num}
                  </span>
                </div>

                <div className="space-y-2">
                  <h4 className="font-display font-bold text-xl sm:text-2xl text-white tracking-tight group-hover:text-[#a4a2ff] transition-colors leading-snug">
                    {step.title}
                  </h4>
                  <p className="text-[10px] font-mono uppercase tracking-wider text-[#5c59e8] font-semibold">
                    {step.tagline}
                  </p>
                </div>

                <p className="text-sm text-neutral-300 font-sans font-normal leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="pt-6 mt-8 border-t border-white/[0.08] space-y-3">
                <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 block">
                  KEY DELIVERABLES //
                </span>
                <div className="space-y-2">
                  {step.deliverables.map((del, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs text-neutral-200 font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5c59e8] shrink-0" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
