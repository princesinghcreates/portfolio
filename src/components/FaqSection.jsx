import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { faqs } from '../data/siteData';

export default function FaqSection({ onOpenContact }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 border-t border-white/[0.08] relative bg-[#080808]">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10">
        
        {/* Section Header Marker */}
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 mb-16 text-xs font-mono uppercase tracking-widest text-neutral-400">
          <div className="flex items-center gap-2">
            <span className="text-white font-bold">07</span>
          </div>
          <div className="text-neutral-400 font-semibold tracking-widest">
            //FAQ
          </div>
          <div>
            CONCERNS
          </div>
        </div>

        {/* Section Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-7">
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-none font-display">
              FREQUENTLY ASKED QUESTIONS
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
              Everything you need to know about starting a project, deliverables, timelines, and collaboration workflow.
            </p>
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="py-6 transition-colors">
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between text-left group gap-4 focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-bold text-lg md:text-xl text-white group-hover:text-neutral-200 transition-colors uppercase tracking-wide">
                    {faq.question}
                  </span>
                  <div className={`w-9 h-9 rounded-full border border-white/10 flex items-center justify-center shrink-0 transition-all ${
                    isOpen ? 'bg-white text-black' : 'bg-neutral-900 text-white group-hover:border-white/30'
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="pt-4 pb-2 text-sm md:text-base text-neutral-400 font-light leading-relaxed max-w-3xl">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Bottom prompt */}
        <div className="mt-12 text-center">
          <p className="text-sm text-neutral-400">
            Have a question not listed here?{' '}
            <button
              onClick={onOpenContact}
              className="text-white font-mono uppercase tracking-wider underline underline-offset-4 hover:text-neutral-300 transition-colors cursor-pointer"
            >
              Reach out directly
            </button>
          </p>
        </div>

      </div>
    </section>
  );
}
