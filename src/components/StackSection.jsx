import React from 'react';
import { motion } from 'framer-motion';

export default function StackSection() {
  const stacks = [
    {
      title: 'Adobe Creative Cloud',
      category: 'DESIGN ECOSYSTEM',
      percentage: '95%',
      description: 'End‑to‑end creative suite driving brand identities, motion graphics, and social content with consistent, production‑ready outputs.\n\nExpertise across Photoshop, Illustrator, InDesign, After Effects, and Premiere Pro for fast, high‑quality delivery.\n\nWorkflow built on smart presets, versioning, and collaborative review for agency‑scale projects.'
    },
    {
      title: 'Sourcing toolkit',
      category: 'CREATIVE RESOURCES',
      percentage: '98%',
      description: 'Freepik for licensed vectors, mockups, and UI elements.\n\nEnvato Elements for music, SFX, motion templates, and premium assets.\n\nPinterest for mood boards, visual trends, and reference mapping.\n\nPerplexity for rapid research, briefs, and creative strategy validation.\n\nLummi.AI for AI‑assisted ideation, variations, and image enhancements.'
    },
    {
      title: 'Workstation',
      category: 'CUSTOM PC (STUDIO)',
      percentage: '100%',
      description: 'Production hardware:\nAMD Ryzen 9 5900X, MSI RTX 3060 12 GB OC, 64 GB RAM, 1 TB Samsung M.2 SSD, 2 TB HDD—built for complex comps, 4K timelines, and heavy batch renders.\n\nReliable, low‑latency previews and multi‑app sessions without bottlenecks.\n\nCalibrated pipeline for consistent color from edit to export.'
    }
  ];

  return (
    <section id="stack" className="py-20 md:py-28 border-t border-white/[0.08] relative bg-[#080808]">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10">
        
        {/* Section Header Marker */}
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 mb-16 text-xs font-mono uppercase tracking-widest text-neutral-400">
          <div className="flex items-center gap-2">
            <span className="text-white font-bold">08</span>
          </div>
          <div className="text-neutral-400 font-semibold tracking-widest">
            //STACK
          </div>
          <div>
            RESOURCES
          </div>
        </div>

        {/* Section Heading */}
        <div className="mb-16">
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-none font-display">
            STACK & TOOLS
          </h2>
        </div>

        {/* 3 Stack Cards (matching frame 017) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {stacks.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="p-8 rounded-3xl bg-neutral-900/40 border border-white/[0.08] hover:border-white/20 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header: Title and Percentage */}
                <div className="flex items-start justify-between border-b border-white/[0.08] pb-6 mb-6">
                  <div>
                    <h3 className="font-display font-bold text-xl text-white uppercase tracking-wider mb-1">
                      {item.title}
                    </h3>
                    <p className="font-mono text-xs uppercase tracking-widest text-neutral-400">
                      {item.category}
                    </p>
                  </div>
                  <div className="font-mono text-xl font-bold text-neutral-400 group-hover:text-white transition-colors">
                    {item.percentage}
                  </div>
                </div>

                {/* Description */}
                <div className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed whitespace-pre-line space-y-4">
                  {item.description}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
