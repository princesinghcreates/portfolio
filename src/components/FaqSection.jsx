import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowUpRight } from 'lucide-react';
import { faqs } from '../data/siteData';

export default function FaqSection({ onOpenContact }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-24 md:py-32 border-t border-white/[0.08] relative bg-[#0a0a0c] select-none">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10">
        
        {/* Section Header Marker */}
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 mb-14 text-xs font-mono uppercase tracking-widest text-neutral-400">
          <div className="flex items-center gap-2">
            <span className="text-[#5c59e8] font-bold">07</span>
            <span className="text-white font-bold">//</span>
            <span className="text-neutral-300 font-semibold tracking-widest">FAQS &amp; CLARITY</span>
          </div>
          <div className="text-[#5c59e8] font-mono text-[11px] hidden sm:block">
            DIRECT COLLABORATION
          </div>
          <div className="text-neutral-400">
            COMMON INQUIRIES
          </div>
        </div>

        {/* Section Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-8">
            <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-[1.02] font-display">
              Frequently Asked<br />Questions.
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
              Clear answers regarding turnaround speed, editorial toolchain, file handoffs, and retainer partnerships.
            </p>
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="py-7 transition-colors">
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between text-left group gap-4 focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-bold text-xl md:text-2xl text-white group-hover:text-[#a4a2ff] transition-colors uppercase tracking-wide">
                    {faq.question}
                  </span>
                  <div className={`w-10 h-10 rounded-full border border-white/10 flex items-center justify-center shrink-0 transition-all ${
                    isOpen ? 'bg-[#5c59e8] text-white border-[#5c59e8]' : 'bg-[#18181f] text-neutral-400 group-hover:text-white group-hover:border-white/30'
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed pt-4 max-w-3xl">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Bottom Support Banner */}
        <div className="mt-16 p-8 rounded-3xl bg-[#141418] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-display font-bold text-xl text-white uppercase tracking-wide">
              Have an Unlisted Requirement or Urgent Rush Project?
            </h4>
            <p className="text-xs sm:text-sm text-neutral-400 font-light mt-1">
              I accommodate dedicated project sprints and retainers with same-week kickoff.
            </p>
          </div>
          <button
            onClick={onOpenContact}
            className="harron-btn-purple shrink-0"
          >
            <span>Ask Direct Question</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
