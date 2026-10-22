import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Palette, Film, Share2, Sparkles, Video, Box } from 'lucide-react';

export default function ServicesSection({ onOpenContact }) {
  const services = [
    {
      num: '01',
      title: 'Brand Identity',
      tagline: 'Elevate your visual DNA.',
      description: 'End-to-end brand guidelines, logo suites, color strategy, typography systems, and print/digital assets designed to stand out in crowded markets.',
      icon: Palette
    },
    {
      num: '02',
      title: 'Reels & Video Editing',
      tagline: 'Viral-ready motion.',
      description: 'High-retention reel edits, kinetic motion graphics, sound design, hook optimization, and creative pacing built to maximize watch-time and audience conversion.',
      icon: Film
    },
    {
      num: '03',
      title: 'Social Media',
      tagline: 'Designs that drive growth.',
      description: 'Cohesive carousel designs, campaign launches, banner design, multi-platform assets, and custom templates tailored for Instagram, LinkedIn, and YouTube.',
      icon: Share2
    },
    {
      num: '04',
      title: 'Motion Graphics',
      tagline: 'Dynamic visual impact.',
      description: 'Bespoke 2D/3D kinetic typography, logo stingers, title animations, 3D product motion, and broadcast-grade visual effects that breathe life into static brands.',
      icon: Sparkles
    },
    {
      num: '05',
      title: 'Explainer Animation Videos',
      tagline: 'Complex ideas made simple & viral.',
      description: 'Compelling 2D/3D explainer stories, SaaS platform product walkthroughs, infographic animations, and high-converting visual narratives tailored for web and campaigns.',
      icon: Video
    },
    {
      num: '06',
      title: 'Packaging Design',
      tagline: 'Shelf-commanding physical touchpoints.',
      description: 'Structural and graphic packaging strategies, custom dielines, luxury finish specifications, and retail-ready label systems engineered to dominate crowded shelves.',
      icon: Box
    }
  ];

  return (
    <section id="services" className="py-20 md:py-28 border-t border-white/[0.08] relative bg-[#080808]">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10">
        
        {/* Section Header Marker */}
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 mb-16 text-xs font-mono uppercase tracking-widest text-neutral-400">
          <div className="flex items-center gap-2">
            <span className="text-white font-bold">03</span>
          </div>
          <div className="text-neutral-400 font-semibold tracking-widest">
            //SERVICES
          </div>
          <div>
            FAST DELIVERY
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
              Discover our range of services designed to elevate your brand to the next level.
            </p>
          </div>
        </div>

        {/* Services List / Cards */}
        <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.num}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="group py-8 md:py-12 grid grid-cols-1 md:grid-cols-12 gap-6 items-center hover:bg-white/[0.02] px-4 -mx-4 rounded-2xl transition-all duration-300 cursor-pointer"
                onClick={() => onOpenContact && onOpenContact(service.title)}
              >
                {/* Number & Icon */}
                <div className="md:col-span-2 flex items-center gap-4">
                  <span className="font-mono text-sm text-neutral-400 group-hover:text-white transition-colors">
                    {service.num}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-neutral-300 group-hover:text-white group-hover:scale-105 transition-all">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Title & Tagline */}
                <div className="md:col-span-4">
                  <h3 className="font-display font-bold text-xl md:text-2xl uppercase tracking-tight text-white group-hover:text-neutral-200 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs font-mono text-neutral-400 mt-1 uppercase tracking-wider">
                    {service.tagline}
                  </p>
                </div>

                {/* Description */}
                <div className="md:col-span-5">
                  <p className="text-sm text-neutral-400 font-light leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Action arrow */}
                <div className="md:col-span-1 flex justify-end">
                  <div className="w-10 h-10 rounded-full bg-white/[0.04] group-hover:bg-white group-hover:text-black border border-white/10 flex items-center justify-center text-neutral-300 transition-all duration-300">
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
