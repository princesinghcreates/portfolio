import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Pin, X, ZoomIn, Sparkles } from 'lucide-react';
import { visualLabPosters } from '../data/siteData';

export default function CorkboardSection() {
  const [activeItem, setActiveItem] = useState(null);

  const pinnedItems = [
    {
      id: "pin-1",
      type: "poster",
      title: "System Overthink",
      subtitle: "Experimental Typographic & Cognitive Layout Study",
      image: visualLabPosters[0]?.image || "/assets/projects/posters/poster-system-overthink.webp",
      tag: "Editorial & Typography",
      rotate: "-2deg",
      span: "col-span-12 sm:col-span-6 lg:col-span-3"
    },
    {
      id: "pin-note-1",
      type: "note",
      title: "Retention Principle #1",
      content: "The first 3 seconds decide the entire retention curve. If the hook lacks an emotional state-shift or kinetic curiosity gap, 60% of viewers scroll before the thesis is introduced.",
      tag: "DIRECTOR'S NOTE",
      bg: "bg-[#25252e]",
      rotate: "3deg",
      span: "col-span-12 sm:col-span-6 lg:col-span-3"
    },
    {
      id: "pin-2",
      type: "poster",
      title: "Creative Workplace",
      subtitle: "Architectural Workspace & Spatial Rhythm",
      image: visualLabPosters[1]?.image || "/assets/projects/posters/poster-creative-workplace.webp",
      tag: "Visual Architecture",
      rotate: "1.5deg",
      span: "col-span-12 sm:col-span-6 lg:col-span-3"
    },
    {
      id: "pin-note-2",
      type: "note",
      title: "Easing Formula",
      content: "After Effects Custom Curve:\ncubic-bezier(0.16, 1, 0.3, 1)\n\nFast snap entrance with asymptotic deceleration. Feels instant to the eye without inducing motion fatigue.",
      tag: "AE EXPRESSION",
      bg: "bg-[#1f1d36]",
      rotate: "-3deg",
      span: "col-span-12 sm:col-span-6 lg:col-span-3"
    },
    {
      id: "pin-3",
      type: "poster",
      title: "Design Above Noise",
      subtitle: "Negative Space & High-Contrast Communication",
      image: visualLabPosters[2]?.image || "/assets/projects/posters/poster-design-above-noise.webp",
      tag: "Manifesto Series",
      rotate: "-1deg",
      span: "col-span-12 sm:col-span-6 lg:col-span-3"
    },
    {
      id: "pin-4",
      type: "poster",
      title: "Skybound Solitude",
      subtitle: "Cinematic Mood & Chromatic Gradients",
      image: visualLabPosters[3]?.image || "/assets/projects/posters/poster-skybound-solitude.webp",
      tag: "Atmospheric Visual",
      rotate: "2.5deg",
      span: "col-span-12 sm:col-span-6 lg:col-span-3"
    },
    {
      id: "pin-5",
      type: "poster",
      title: "Cosmic Concrete",
      subtitle: "Brutalist Architectural Grid & Texture",
      image: visualLabPosters[4]?.image || "/assets/projects/posters/poster-cosmic-concrete.webp",
      tag: "Brutalist Study",
      rotate: "-2.5deg",
      span: "col-span-12 sm:col-span-6 lg:col-span-3"
    },
    {
      id: "pin-6",
      type: "poster",
      title: "Electric Reverie",
      subtitle: "Analog Cathode-Ray Visual Culture",
      image: visualLabPosters[5]?.image || "/assets/projects/posters/poster-electric-reverie.webp",
      tag: "Retro Futurism",
      rotate: "1deg",
      span: "col-span-12 sm:col-span-6 lg:col-span-3"
    }
  ];

  return (
    <section id="corkboard" className="py-24 md:py-32 relative bg-[#0e0e12] select-none border-t border-white/[0.08] overflow-hidden">
      
      {/* Studio Pinboard Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 relative">
        
        {/* Section Header Marker */}
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 mb-14 text-xs font-mono uppercase tracking-widest text-neutral-400">
          <div className="flex items-center gap-2">
            <span className="text-[#5c59e8] font-bold">03</span>
            <span className="text-white font-bold">//</span>
            <span className="text-neutral-300 font-semibold tracking-widest">STUDIO CORKBOARD</span>
          </div>
          <div className="text-[#5c59e8] font-mono text-[11px] hidden sm:block">
            VISUAL ARTIFACTS, POSTERS &amp; WORKING NOTES
          </div>
          <div className="text-neutral-400">
            CREATIVE ARCHIVE
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white leading-[0.95] font-display">
            STUDIO<br />CORKBOARD.
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
            A real-time pinboard of creative experiments, editorial poster studies, timeline equations, and visual references pinned directly to the studio wall.
          </p>
        </div>

        {/* Corkboard Grid with Pinned Elements */}
        <div className="grid grid-cols-12 gap-6 sm:gap-8 items-start">
          {pinnedItems.map((item) => (
            <motion.div
              key={item.id}
              style={{ transform: `rotate(${item.rotate})` }}
              whileHover={{ scale: 1.03, rotate: '0deg', zIndex: 20 }}
              transition={{ duration: 0.3 }}
              className={`${item.span} relative group`}
            >
              {/* Metallic Push Pin at the Top Center */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-30 pointer-events-none drop-shadow-md">
                <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#ff5500] to-[#b33300] border border-white/40 flex items-center justify-center shadow-lg">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/70" />
                </div>
              </div>

              {item.type === "poster" ? (
                /* Poster Card */
                <div
                  onClick={() => setActiveItem(item)}
                  className="rounded-2xl overflow-hidden bg-[#16161b] border border-white/10 p-3 pb-4 shadow-2xl cursor-pointer group-hover:border-[#5c59e8]/50 transition-colors"
                >
                  <div className="aspect-[3/4] w-full rounded-xl overflow-hidden bg-black relative mb-3">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                        <ZoomIn className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                  <div className="px-1">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-[#5c59e8] font-bold">
                      {item.tag}
                    </div>
                    <h5 className="font-display font-bold text-sm text-white uppercase tracking-wide mt-0.5">
                      {item.title}
                    </h5>
                  </div>
                </div>
              ) : (
                /* Note Card */
                <div className={`rounded-2xl p-6 ${item.bg} border border-white/10 shadow-2xl space-y-3`}>
                  <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-wider text-neutral-400">
                    <span className="text-[#a4a2ff] font-bold">{item.tag}</span>
                    <span>STUDIO LOG</span>
                  </div>
                  <h5 className="font-display font-bold text-base text-white uppercase tracking-wide">
                    {item.title}
                  </h5>
                  <p className="text-xs text-neutral-300 font-mono leading-relaxed whitespace-pre-line">
                    {item.content}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveItem(null)}
              className="fixed inset-0 bg-black/90 backdrop-blur-md cursor-pointer"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-4xl max-h-[90vh] z-10 flex flex-col items-center justify-center"
            >
              <button
                onClick={() => setActiveItem(null)}
                className="absolute -top-12 right-0 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                aria-label="Close Preview"
              >
                <X className="w-5 h-5" />
              </button>
              <img
                src={activeItem.image}
                alt={activeItem.title}
                className="max-h-[82vh] max-w-full w-auto rounded-2xl object-contain shadow-2xl border border-white/10"
              />
              <div className="mt-3 text-center">
                <p className="font-display font-bold text-base uppercase tracking-wider text-white">
                  {activeItem.title}
                </p>
                <p className="text-xs text-neutral-400 font-light mt-0.5">
                  {activeItem.subtitle}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
