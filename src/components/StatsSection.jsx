import React from 'react';
import { motion } from 'framer-motion';

export default function StatsSection() {
  const stats = [
    { value: '150+', label: 'Global Clients', detail: 'Across US, Europe, Asia & India' },
    { value: '8+', label: 'Years of Experience', detail: 'Agency & High-Growth Startups' },
    { value: '3.4x', label: 'Watch-Time Lift', detail: 'Retention-Driven Motion Editing' },
    { value: '94%', label: 'Client Retention', detail: 'Repeat Campaigns & Brand Retainers' }
  ];

  return (
    <section id="stats" className="py-20 md:py-28 border-t border-white/[0.08] relative bg-[#080808]">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10">
        
        {/* Section Header Marker */}
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 mb-16 text-xs font-mono uppercase tracking-widest text-neutral-400">
          <div className="flex items-center gap-2">
            <span className="text-white font-bold">05</span>
          </div>
          <div className="text-neutral-400 font-semibold tracking-widest">
            //STATS
          </div>
          <div>
            FUN FACTS
          </div>
        </div>

        {/* Section Heading */}
        <div className="mb-16">
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-none font-display">
            BIG OR SMALL?
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-neutral-900/40 border border-white/[0.08] hover:border-white/20 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <p className="font-display font-extrabold text-5xl sm:text-6xl text-white tracking-tight mb-4 group-hover:scale-105 transition-transform duration-300 origin-left">
                  {stat.value}
                </p>
                <h3 className="font-display font-bold text-lg text-white uppercase tracking-wider mb-2">
                  {stat.label}
                </h3>
                <p className="text-xs text-neutral-400 font-mono uppercase tracking-wider">
                  {stat.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
