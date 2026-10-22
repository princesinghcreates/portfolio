import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

function AnimatedCounter({ target, suffix = '', decimals = 0 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  useEffect(() => {
    if (!inView) return;

    let startTime = null;
    const duration = 1800; // ms

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // easeOutExpo
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(ease * target);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    const rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {decimals > 0 ? count.toFixed(decimals) : Math.round(count)}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  const stats = [
    { target: 150, suffix: '+', decimals: 0, label: 'Global Clients', detail: 'Across US, Europe, Asia & India' },
    { target: 8, suffix: '+', decimals: 0, label: 'Years of Experience', detail: 'Agency & High-Growth Startups' },
    { target: 3.4, suffix: 'x', decimals: 1, label: 'Watch-Time Lift', detail: 'Retention-Driven Motion Editing' },
    { target: 94, suffix: '%', decimals: 0, label: 'Client Retention', detail: 'Repeat Campaigns & Brand Retainers' }
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
            PROVEN IMPACT
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
                  <AnimatedCounter target={stat.target} suffix={stat.suffix} decimals={stat.decimals} />
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
