import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export default function PricingSection({ onOpenContact }) {
  const plans = [
    {
      title: 'Brand Identity',
      price: '$499',
      features: [
        'Brand strategy kickoff (positioning, audience, tone, values)',
        'Logo suite (primary, secondary, mark) + clearspace and misuse rules.',
        'Brand guidelines and company profile PDF (10–20 pages)',
        'Social/brand assets: business cards, letterhead, email signature, presentation cover.',
        '3–4 revisions',
        'Social starter pack: profile/cover, 3–5 launch posts, 3 story templates.',
        'Deliverables: AI/PSD/SVG/PNG/JPG + mockups.'
      ]
    },
    {
      title: 'Reels and Content Strategy',
      price: '$599',
      features: [
        'Concept development for viral-ready reels and short videos',
        '8–12 reels (advanced editing with transitions, VFX, and SFX)',
        'Scriptwriting and storyboarding for video content.',
        'Cross-platform strategy for Instagram, YouTube Shorts, and more.',
        'Content pillars and calendar design based on brand goals.',
        'Analytics-driven insights and performance optimization.',
        'Audience growth tactics through strategic campaign launches.'
      ]
    },
    {
      title: 'Social Media',
      price: '$699',
      features: [
        'Content plan + monthly calendar (hooks, CTAs, themes)',
        '12–16 posts/month mix: carousels, static, reels/shorts edits.',
        'Profile optimization: bio update to latest trend/algorithm guidance + cross‑platform linking (IG, LinkedIn, YouTube, website)',
        'Captions drafting + hashtag set + alt text for every post.',
        '2–3 platform formats (pick from IG, Facebook, LinkedIn, YouTube Shorts)',
        'Project management + monthly performance review call.',
        'Source files.'
      ]
    }
  ];

  return (
    <section id="pricing" className="py-20 md:py-28 border-t border-white/[0.08] relative bg-[#080808]">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10">
        
        {/* Section Header Marker */}
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 mb-16 text-xs font-mono uppercase tracking-widest text-neutral-400">
          <div className="flex items-center gap-2">
            <span className="text-white font-bold">08</span>
          </div>
          <div className="text-neutral-400 font-semibold tracking-widest">
            //PRICING
          </div>
          <div>
            BEST PLANS
          </div>
        </div>

        {/* Section Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-7">
            <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white leading-none font-display">
              SELECT A SERVICE.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
              From brand strategy to final delivery — a cohesive system designed to launch your brand flawlessly across every print and digital touchpoint.
            </p>
          </div>
        </div>

        {/* 3 Pricing Cards (matching frame 016) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="rounded-3xl p-8 bg-neutral-900/40 border border-white/[0.08] hover:border-white/20 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header: Title & Price */}
                <div className="border-b border-white/[0.08] pb-6 mb-6">
                  <h3 className="font-display font-bold text-xl text-white uppercase tracking-wider mb-2">
                    {plan.title}
                  </h3>
                  <div className="font-display font-extrabold text-4xl sm:text-5xl text-white">
                    {plan.price}
                  </div>
                </div>

                {/* Features Checklist */}
                <div className="space-y-4">
                  <p className="text-xs font-mono uppercase tracking-widest text-neutral-400 font-bold mb-4">
                    What's included
                  </p>
                  {plan.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5 group-hover:text-white transition-colors" />
                      <span className="text-xs text-neutral-300 font-light leading-relaxed">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-8 mt-8 border-t border-white/[0.06]">
                <button
                  onClick={() => onOpenContact && onOpenContact(plan.title)}
                  className="w-full py-3.5 rounded-full border border-white/20 hover:border-white hover:bg-white hover:text-black text-xs font-mono uppercase tracking-wider text-white font-semibold transition-all duration-300"
                >
                  SELECT PLAN
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Premiere Pro Timeline Banner (matching frame 016 bottom) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 bg-neutral-900 shadow-2xl aspect-[21/9] w-full"
        >
          <img
            src="/assets/5298440_Photo_Editor_Working_3840x2160.gif"
            alt="Video Editing & Color Grading Timeline"
            className="w-full h-full object-cover filter contrast-110"
            loading="lazy"
            onError={(e) => {
              // Fallback to graphic representation if gif is missing
              e.currentTarget.style.display = 'none';
            }}
          />
        </motion.div>

      </div>
    </section>
  );
}
