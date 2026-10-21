import React from 'react';
import { motion } from 'framer-motion';

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "I was impressed by His designer's ability to grasp my vision and bring it to digital life. The site they delivered optimized user experience and functionality beyond expectations.",
      role: "Visual Designer, Bose",
      author: "Ellie Sattler"
    },
    {
      quote: "Grey expert developer took my Photoshop files and turned them into pixel-perfect, responsive websites. The clean execution made my designs really shine.",
      role: "Gameplay Programmer, Microsoft",
      author: "Rick O'connell"
    },
    {
      quote: "I was amazed by how intuitive and user-friendly everything felt. It's clear their designers obsess over every pixel, every transition, to create experiences that delight.",
      role: "Home Advisor, Apple Inc.",
      author: "Kate Mccallister"
    },
    {
      quote: "We've seen an immediate increase in site traffic, lead generation, and social conversion. He truly transformed our brand presence and visual storytelling!",
      role: "Cloud Sales Executive, AMD",
      author: "Anne Weying"
    },
    {
      quote: "The process was seamless from initial discovery to delivery. They listened carefully to all our creative guidelines and delivered assets that exceeded our highest standards.",
      role: "Design Manager, HBO",
      author: "Eddie Brock"
    },
    {
      quote: "Delivered on-brief, production-ready motion graphics under tight deadlines. A true partner for ambitious digital execution.",
      role: "Division Manager, Airbus",
      author: "John Fitzgerald"
    }
  ];

  return (
    <section id="testimonials" className="py-20 md:py-28 border-t border-white/[0.08] relative bg-[#080808]">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10">
        
        {/* Section Header Marker */}
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 mb-16 text-xs font-mono uppercase tracking-widest text-neutral-400">
          <div className="flex items-center gap-2">
            <span className="text-white font-bold">09</span>
          </div>
          <div className="text-neutral-400 font-semibold tracking-widest">
            //TESTIMONIAL
          </div>
          <div>
            VOICES
          </div>
        </div>

        {/* Section Heading */}
        <div className="mb-16">
          <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white leading-none font-display">
            TRUSTED BY<br />INTERNATIONAL BRANDS
          </h2>
        </div>

        {/* Testimonials Grid (matching frame 018) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-neutral-900/40 border border-white/[0.08] hover:border-white/20 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-6">
                <p className="font-display font-medium text-base sm:text-lg text-neutral-200 uppercase tracking-wide leading-relaxed">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/[0.06]">
                <p className="font-mono text-xs uppercase tracking-wider text-white font-semibold">
                  {t.author}
                </p>
                <p className="font-mono text-[11px] uppercase tracking-widest text-neutral-400 mt-1">
                  {t.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
