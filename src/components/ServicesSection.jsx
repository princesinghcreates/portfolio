import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Film, Play, Palette, Box } from 'lucide-react';
import { services } from '../data/siteData';

const iconMap = {
  "01": Sparkles,
  "02": Film,
  "03": Play,
  "04": Palette,
  "05": Box
};

export default function ServicesSection({ onOpenContact }) {
  return (
    <section id="services" className="py-20 md:py-32 border-t border-white/[0.08] relative bg-[#050507] text-white">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10">
        
        {/* Section Header Marker */}
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 mb-16 text-xs font-mono uppercase tracking-widest text-neutral-400">
          <div className="flex items-center gap-2">
            <span className="text-white font-bold">04</span>
            <span className="text-blue-400 font-bold">//</span>
            <span className="text-neutral-300 font-semibold tracking-widest">CORE CAPABILITIES</span>
          </div>
          <div className="text-blue-400 font-mono text-[11px] hidden sm:block">
            HIGH-CONVERSION CREATIVE ENGINEERING
          </div>
          <div className="text-neutral-400">
            AGENCY GRADE PARTNERSHIP
          </div>
        </div>

        {/* Section Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-7">
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-[0.9] font-display">
              SELECT A<br />SERVICE.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
              Bespoke video editing, motion design, and brand architecture engineered to maximize audience retention, drive product sign-ups, and elevate your visual presence.
            </p>
          </div>
        </div>

        {/* Services List / Cards */}
        <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
          {services.map((service, idx) => {
            const Icon = iconMap[service.number] || Sparkles;
            return (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="group py-8 md:py-12 grid grid-cols-1 md:grid-cols-12 gap-6 items-center hover:bg-white/[0.02] px-4 -mx-4 rounded-2xl transition-all duration-300 cursor-pointer"
                onClick={() => onOpenContact && onOpenContact(service.title)}
              >
                {/* Number & Icon */}
                <div className="md:col-span-2 flex items-center gap-4">
                  <span className="font-mono text-sm text-neutral-400 group-hover:text-blue-400 transition-colors">
                    {service.number}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-neutral-300 group-hover:bg-blue-500/20 group-hover:border-blue-400/50 group-hover:text-blue-300 transition-all duration-300">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                {/* Title & Tagline */}
                <div className="md:col-span-4 space-y-1">
                  <h3 className="font-display font-bold text-2xl sm:text-3xl uppercase tracking-wide text-white group-hover:text-blue-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="font-mono text-xs text-neutral-400 uppercase tracking-wider">
                    {service.tagline}
                  </p>
                </div>

                {/* Description */}
                <div className="md:col-span-5">
                  <p className="text-sm text-neutral-400 font-light leading-relaxed group-hover:text-neutral-300 transition-colors">
                    {service.description}
                  </p>
                </div>

                {/* Arrow Action */}
                <div className="md:col-span-1 flex justify-end">
                  <div className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/10 group-hover:bg-white group-hover:text-black flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
