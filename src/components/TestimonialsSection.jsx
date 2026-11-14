import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { testimonials } from '../data/siteData';

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 md:py-32 relative bg-[#0e0e12] select-none border-t border-white/[0.08]">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10">
        
        {/* Section Header Marker */}
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 mb-14 text-xs font-mono uppercase tracking-widest text-neutral-400">
          <div className="flex items-center gap-2">
            <span className="text-[#5c59e8] font-bold">06</span>
            <span className="text-white font-bold">//</span>
            <span className="text-neutral-300 font-semibold tracking-widest">CLIENT VERIFICATION</span>
          </div>
          <div className="text-[#5c59e8] font-mono text-[11px] hidden sm:block">
            DIRECT FOUNDER FEEDBACK
          </div>
          <div className="text-neutral-400">
            PROVEN RETENTION
          </div>
        </div>

        {/* Section Title */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-8">
            <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white leading-[0.95] font-display">
              TRUSTED BY LEADERS<br />&amp; TECH FOUNDERS.
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
              Real results delivered for venture-backed AI platforms, digital creators, and high-growth brands.
            </p>
          </div>
        </div>

        {/* 3-Column Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test) => (
            <motion.div
              key={test.id}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="harron-card p-8 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex gap-1 text-[#ff5500]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-[10px] font-mono uppercase text-emerald-400 font-bold">
                    {test.metric}
                  </span>
                </div>

                <p className="text-sm text-neutral-300 font-light leading-relaxed pt-2">
                  "{test.quote}"
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/[0.08] flex items-center justify-between">
                <div>
                  <h4 className="font-display font-bold text-base text-white uppercase tracking-wide">
                    {test.name}
                  </h4>
                  <p className="text-xs font-mono text-neutral-400">
                    {test.role} • {test.company}
                  </p>
                </div>
                <Quote className="w-6 h-6 text-[#5c59e8]/40" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
