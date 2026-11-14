import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Play, Volume2, Sparkles, ExternalLink, X, ZoomIn } from 'lucide-react';
import { 
  motionGraphicsPortfolio, 
  reelsPortfolio, 
  brandIdentityPortfolio, 
  packagingPortfolio, 
  projects 
} from '../data/siteData';
import AudioVideoPlayer from './AudioVideoPlayer';

export default function WorksSection({ onSelectProject }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedPoster, setSelectedPoster] = useState(null);

  const filters = [
    { id: 'all', label: 'All Works' },
    { id: 'video-editing', label: 'Video Editing & Reels' },
    { id: 'saas-motion', label: 'SaaS UI Motion' },
    { id: 'branding', label: 'Brand Identity' },
    { id: 'packaging', label: 'Packaging' }
  ];

  return (
    <section id="works" className="py-24 md:py-32 relative bg-[#0a0a0c] select-none border-t border-white/[0.08]">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10">
        
        {/* Section Header Marker */}
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 mb-14 text-xs font-mono uppercase tracking-widest text-neutral-400">
          <div className="flex items-center gap-2">
            <span className="text-[#5c59e8] font-bold">02</span>
            <span className="text-white font-bold">//</span>
            <span className="text-neutral-300 font-semibold tracking-widest">SELECTED WORKS</span>
          </div>
          <div className="text-[#5c59e8] font-mono text-[11px] hidden sm:block">
            FEATURED CASE STUDIES &amp; COMMERCIAL MOTION
          </div>
          <div className="text-neutral-400">
            2026 ARCHIVE
          </div>
        </div>

        {/* Section Heading & Category Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white leading-[0.95] font-display">
              SELECTED<br />PROJECTS.
            </h2>
            <p className="mt-4 text-sm sm:text-base text-neutral-400 font-light max-w-xl">
              High-retention video cuts, 60fps kinetic SaaS UI walk-throughs, and cohesive visual identities built for venture-backed founders and modern brands.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  activeFilter === f.id
                    ? 'bg-[#5c59e8] text-white font-bold shadow-lg shadow-[#5c59e8]/30'
                    : 'bg-[#18181f] text-neutral-400 hover:text-white hover:bg-[#22222a] border border-white/[0.06]'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Display */}
        <div className="space-y-24">
          
          {/* CATEGORY 1: VIDEO EDITING & REELS */}
          {(activeFilter === 'all' || activeFilter === 'video-editing') && (
            <div className="space-y-8">
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                  // VIDEO EDITING &amp; HIGH-RETENTION SHOWCASES
                </span>
                <span className="text-xs font-mono text-emerald-400">
                  94% - 96% RETENTION
                </span>
              </div>

              {/* 16:9 Multi-Reel Suites Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {reelsPortfolio.verticalVideos.filter(v => v.aspectRatio === "16:9").slice(0, 2).map((reel) => (
                  <div key={reel.id} className="harron-card p-6 flex flex-col justify-between group">
                    <div className="space-y-4">
                      <AudioVideoPlayer
                        src={reel.src}
                        poster={reel.poster}
                        title={reel.title}
                        category={reel.category}
                        aspectRatio="16/9"
                        className="w-full shadow-2xl"
                      />

                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-xs font-mono">
                          <span className="text-[#5c59e8] uppercase">{reel.category}</span>
                          <span className="text-emerald-400 font-bold">{reel.metrics}</span>
                        </div>
                        <h4 className="font-display font-bold text-2xl text-white uppercase tracking-wide group-hover:text-[#a4a2ff] transition-colors">
                          {reel.title}
                        </h4>
                        <p className="text-xs text-neutral-400 font-light leading-relaxed">
                          Frame-accurate editing with micro-jump cuts, sound-designed transitions, and narrative rhythm engineered for algorithmic repeat loops.
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* 9:16 Vertical Mobile Reels */}
              <div className="pt-6">
                <div className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-6">
                  VERTICAL SHORT-FORM (9:16 REELS &amp; SHORTS)
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 max-w-3xl mx-auto gap-8">
                  {reelsPortfolio.verticalVideos.filter(v => v.aspectRatio === "9:16").map((reel) => (
                    <div key={reel.id} className="harron-card p-5 flex flex-col justify-between">
                      <AudioVideoPlayer
                        src={reel.src}
                        poster={reel.poster}
                        title={reel.title}
                        category={reel.category}
                        aspectRatio="9/16"
                        className="w-full shadow-2xl"
                      />
                      <div className="pt-4 px-1 space-y-1">
                        <div className="flex items-center justify-between text-xs font-mono text-neutral-400">
                          <span>{reel.category}</span>
                          <span className="text-emerald-400 font-bold">{reel.metrics}</span>
                        </div>
                        <h5 className="font-display font-bold text-lg text-white uppercase tracking-wide">
                          {reel.title}
                        </h5>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* CATEGORY 2: SAAS UI MOTION & EXPLAINERS */}
          {(activeFilter === 'all' || activeFilter === 'saas-motion') && (
            <div className="space-y-8">
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                  // SAAS UI COMPONENT MOTION &amp; PRODUCT EXPLAINERS
                </span>
                <span className="text-xs font-mono text-[#00F0FF]">
                  60FPS KINETIC PRECISION
                </span>
              </div>

              {/* Featured Explainer: LeadsFinder */}
              {motionGraphicsPortfolio.videos.filter(v => v.featured).map((vid) => (
                <div 
                  key={vid.id}
                  className="rounded-3xl p-6 sm:p-10 bg-[#141418] border border-white/10 hover:border-[#5c59e8]/60 transition-all duration-500 shadow-2xl"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    <div className="lg:col-span-7">
                      <AudioVideoPlayer
                        src={vid.src}
                        poster={vid.poster}
                        title={vid.title}
                        category="Featured Explainer"
                        aspectRatio="16/9"
                        className="w-full shadow-2xl"
                      />
                    </div>
                    <div className="lg:col-span-5 space-y-4">
                      <div className="flex items-center gap-3">
                        <span className="px-3 py-1 rounded-full bg-[#5c59e8]/20 border border-[#5c59e8]/40 text-[10px] font-mono uppercase tracking-widest text-[#a4a2ff]">
                          FLAGSHIP MOTION RIG
                        </span>
                        <span className="text-xs font-mono text-emerald-400 font-bold">
                          3.2x Engagement Lift
                        </span>
                      </div>
                      <h3 className="font-display font-bold text-2xl sm:text-3xl text-white uppercase tracking-tight">
                        {vid.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                        {vid.hook}
                      </p>
                      <div className="flex flex-wrap gap-2 pt-2">
                        {vid.tags.map((t, idx) => (
                          <span key={idx} className="px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-xs font-mono text-neutral-300">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Grid of Other 6 SaaS Motion Rigs */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {motionGraphicsPortfolio.videos.filter(v => !v.featured).map((vid) => (
                  <div key={vid.id} className="harron-card p-5 flex flex-col justify-between group">
                    <div className="space-y-4">
                      <AudioVideoPlayer
                        src={vid.src}
                        poster={vid.poster}
                        title={vid.title}
                        category={vid.category}
                        aspectRatio="16/9"
                        className="w-full shadow-lg"
                      />
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-xs font-mono text-neutral-400">
                          <span className="text-[#5c59e8]">{vid.category || "SaaS UI"}</span>
                          <span className="text-emerald-400 font-bold">{vid.metrics || "60fps"}</span>
                        </div>
                        <h4 className="font-display font-bold text-lg text-white uppercase tracking-wide group-hover:text-[#a4a2ff] transition-colors">
                          {vid.title}
                        </h4>
                        <p className="text-xs text-neutral-400 font-light leading-relaxed">
                          {vid.hook}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CATEGORY 3: BRAND IDENTITY */}
          {(activeFilter === 'all' || activeFilter === 'branding') && (
            <div className="space-y-8">
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                  // BRAND IDENTITY &amp; VISUAL ARCHITECTURE
                </span>
                <span className="text-xs font-mono text-neutral-400">
                  4 FLAGSHIP CASE STUDIES
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {brandIdentityPortfolio.map((brand) => {
                  const fullProject = projects.find(p => p.id === brand.id);
                  return (
                    <motion.div
                      key={brand.id}
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.3 }}
                      onClick={() => onSelectProject(fullProject || brand)}
                      className="harron-card overflow-hidden group cursor-pointer flex flex-col"
                    >
                      <div className="aspect-[16/10] w-full overflow-hidden bg-neutral-900 relative">
                        <img
                          src={brand.heroImage}
                          alt={brand.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[10px] font-mono uppercase tracking-widest text-neutral-300">
                          {brand.year}
                        </div>
                      </div>
                      <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                        <div>
                          <span className="text-[10px] font-mono uppercase tracking-widest text-[#5c59e8] font-bold">
                            {brand.category}
                          </span>
                          <h4 className="text-2xl sm:text-3xl font-bold font-display uppercase tracking-wider text-white mt-1 group-hover:text-[#a4a2ff] transition-colors">
                            {brand.title}
                          </h4>
                          <p className="text-xs sm:text-sm text-neutral-400 font-light mt-2">
                            {brand.tagline}
                          </p>
                        </div>
                        <div className="pt-6 mt-6 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono uppercase tracking-wider text-white">
                          <span>View Full Case Study</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          )}

          {/* CATEGORY 4: PACKAGING */}
          {(activeFilter === 'all' || activeFilter === 'packaging') && (
            <div className="space-y-8">
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                  // RETAIL PACKAGING SUITES
                </span>
                <span className="text-xs font-mono text-neutral-400">
                  PHYSICAL TOUCHPOINTS
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {packagingPortfolio.map((pkg) => (
                  <div
                    key={pkg.id}
                    onClick={() => setSelectedPoster({ image: pkg.heroImage, title: pkg.title })}
                    className="harron-card overflow-hidden group cursor-pointer"
                  >
                    <div className="aspect-[16/10] w-full overflow-hidden bg-neutral-900 relative">
                      <img
                        src={pkg.heroImage}
                        alt={pkg.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                          <ZoomIn className="w-5 h-5" />
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h4 className="font-display font-bold text-xl sm:text-2xl text-white uppercase tracking-wide">
                        {pkg.title}
                      </h4>
                      <p className="text-xs text-neutral-400 font-light mt-1">
                        Packaging Suite &amp; Structural Retail Strategy
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedPoster && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPoster(null)}
              className="fixed inset-0 bg-black/90 backdrop-blur-md cursor-pointer"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-4xl max-h-[90vh] z-10 flex flex-col items-center justify-center"
            >
              <button
                onClick={() => setSelectedPoster(null)}
                className="absolute -top-12 right-0 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                aria-label="Close Preview"
              >
                <X className="w-5 h-5" />
              </button>
              <img
                src={selectedPoster.image}
                alt={selectedPoster.title}
                className="max-h-[82vh] max-w-full w-auto rounded-2xl object-contain shadow-2xl border border-white/10"
              />
              <p className="mt-3 font-display font-bold text-sm uppercase tracking-wider text-white">
                {selectedPoster.title}
              </p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
