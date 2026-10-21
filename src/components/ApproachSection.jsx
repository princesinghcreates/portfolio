import React from 'react';
import { motion } from 'framer-motion';

export default function ApproachSection() {
  const phases = [
    {
      num: '01',
      title: 'DISCOVER AND ANALYSIS',
      description: 'Align on goals, audience, and success metrics through a focused kickoff and brand audit to uncover opportunities and constraints.',
      images: [
        '/assets/cw-branded-merchandise-cohesive-display-contemporary-office-materials-supplies.jpg',
        '/assets/Stack of Branding Papers.png',
        '/assets/124669.jpg'
      ]
    },
    {
      num: '02',
      title: 'STRATEGY & EXECUTION',
      description: 'Define the creative roadmap, then design, animate, and edit with rigorous QA to deliver cohesive, on‑brand assets optimized for performance.',
      images: [
        '/assets/Creative Workspace Setup.png',
        '/assets/2151876110.jpg',
        '/assets/Retro TV Head Person.png'
      ]
    },
    {
      num: '03',
      title: 'ONGOING OPTIMIZATION',
      description: 'Measure outcomes, iterate on creative, and refine deliverables for sustained engagement and long‑term brand growth.',
      images: [
        '/assets/Urban Night Signboard.png',
        '/assets/SOLA Duo - Minimalist Geometric Bottles.png',
        '/assets/2408.jpg'
      ]
    }
  ];

  return (
    <section id="approach" className="py-20 md:py-28 border-t border-white/[0.08] relative bg-[#080808]">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10">
        
        {/* Section Header Marker */}
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 mb-16 text-xs font-mono uppercase tracking-widest text-neutral-400">
          <div className="flex items-center gap-2">
            <span className="text-white font-bold">03</span>
          </div>
          <div className="text-neutral-400 font-semibold tracking-widest">
            //APPROACH
          </div>
          <div>
            THREE PHASES
          </div>
        </div>

        {/* Large Centered Headline */}
        <div className="max-w-4xl mx-auto text-center space-y-4 mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-tight font-display"
          >
            I'M PRINCE SINGH BASED IN UDAIPUR, INDIA.
          </motion.h2>
          <p className="text-sm sm:text-base text-neutral-400 font-light max-w-2xl mx-auto leading-relaxed">
            An 8-year track record in design and video empowers me to ship clean, on-brief visuals that deliver measurable impact.
          </p>

          {/* Numbered Pill Indicators: 01, 02, 03 */}
          <div className="flex items-center justify-center gap-6 pt-4">
            {['01', '02', '03'].map((item) => (
              <span 
                key={item}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-xs font-mono text-neutral-400 hover:border-white hover:text-white transition-colors"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* 3 Columns Grid with 3 Dots & Mini Thumbs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {phases.map((phase, idx) => (
            <motion.div
              key={phase.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="p-8 rounded-3xl bg-neutral-900/40 border border-white/[0.08] hover:border-white/20 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* 3 Dots at top */}
                <div className="flex items-center justify-center gap-1.5 mb-6 text-neutral-500 group-hover:text-neutral-300 transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-current" />
                  <span className="w-1.5 h-1.5 rounded-full bg-current" />
                  <span className="w-1.5 h-1.5 rounded-full bg-current" />
                </div>

                {/* Miniature Thumbnails Row */}
                <div className="grid grid-cols-3 gap-2 mb-6">
                  {phase.images.map((img, i) => (
                    <div key={i} className="aspect-square rounded-xl overflow-hidden bg-neutral-950 border border-white/5">
                      <img 
                        src={img} 
                        alt="Phase preview" 
                        className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500" 
                        loading="lazy"
                        onError={(e) => { e.currentTarget.style.display = 'none'; }}
                      />
                    </div>
                  ))}
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-lg text-white mb-3 tracking-wide uppercase text-center">
                  {phase.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed text-center">
                  {phase.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
