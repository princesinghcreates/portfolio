import React from 'react';
import { motion } from 'framer-motion';

export default function ExperienceSection() {
  const experiences = [
    {
      company: 'FREELANCE',
      role: 'GRAPHIC DESIGNER & VIDEO EDITOR',
      period: '2018 — PRESENT',
      description: 'Delivered comprehensive creative solutions across graphic design, video editing, and motion graphics for diverse client portfolios. Produced high-impact reels, branded content, and animated storytelling assets that drove measurable engagement growth and strengthened brand visibility. Consistently met client objectives through strategic creative execution and collaboration with industry-leading brands.'
    },
    {
      company: 'PHP POETS',
      role: 'SR. GRAPHIC DESIGNER & VIDEO EDITOR',
      period: '2024 — 2025',
      description: 'Spearheaded end-to-end creative development for multi-platform campaigns—owning concept, motion design, and video post-production—to deliver cohesive, on-brand content that boosted engagement rates and accelerated follower growth across priority channels.'
    },
    {
      company: 'ASPIRE TECHNO SOLUTIONS',
      role: 'SR. GRAPHIC DESIGNER & VIDEO EDITOR',
      period: '2021 — 2023',
      description: 'Led the end-to-end design and execution of visual content for diverse social media campaigns, driving higher audience engagement and contributing to measurable growth in the company\'s follower base.'
    },
    {
      company: 'BRANDSKEY CREATIVE STUDIO',
      role: 'GRAPHIC DESIGNER & VIDEO EDITOR',
      period: '2018 — 2021',
      description: 'Developed and executed brand identity systems in collaboration with cross-functional teams, ensuring consistency across all touchpoints. Designed impactful product packaging that improved shelf visibility and consumer appeal, while producing motion graphics and animated videos that strengthened brand storytelling and engagement.'
    }
  ];

  return (
    <section id="experience" className="py-20 md:py-28 border-t border-white/[0.08] relative bg-[#080808]">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10">
        
        {/* Section Header Marker */}
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 mb-16 text-xs font-mono uppercase tracking-widest text-neutral-400">
          <div className="flex items-center gap-2">
            <span className="text-white font-bold">06</span>
          </div>
          <div className="text-neutral-400 font-semibold tracking-widest">
            //EXPERIENCE
          </div>
          <div>
            2018 — PRESENT
          </div>
        </div>

        {/* Section Heading & Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-4">
            <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white leading-none font-display sticky top-28">
              EXPERIENCE
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-12">
            {experiences.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="border-b border-white/[0.08] pb-10 space-y-3"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-white uppercase tracking-tight">
                    {item.company}
                  </h3>
                  <span className="font-mono text-xs uppercase tracking-widest text-neutral-400">
                    {item.period}
                  </span>
                </div>

                <p className="font-mono text-xs uppercase tracking-wider text-neutral-300 font-medium">
                  {item.role}
                </p>

                <p className="text-sm text-neutral-400 font-light leading-relaxed pt-2">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
