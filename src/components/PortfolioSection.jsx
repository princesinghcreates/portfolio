import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Volume2, Sparkles, Layers, Box, Film, Play, Compass, CheckCircle2, X, ZoomIn, Eye, ExternalLink, ArrowUpRight } from 'lucide-react';
import { 
  projects, 
  packagingPortfolio, 
  brandIdentityPortfolio, 
  reelsPortfolio, 
  motionGraphicsPortfolio,
  visualLabPosters
} from '../data/siteData';
import AudioVideoPlayer from './AudioVideoPlayer';
import BrandTicker from './BrandTicker';

export default function PortfolioSection({ onSelectProject, onOpenPosters }) {
  const [activeTab, setActiveTab] = useState('curated');
  const [selectedCreative, setSelectedCreative] = useState(null);

  const scrollToSubSection = (id) => {
    setActiveTab(id);
    if (id === 'curated') {
      const element = document.getElementById('portfolio');
      if (element) {
        const yOffset = -70;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const tabs = [
    { id: 'curated', label: 'Selected Work (Curated)' },
    { id: 'sub-motion', label: 'Motion & SaaS UI' },
    { id: 'sub-reels', label: 'Video Editing & Reels' },
    { id: 'sub-branding', label: 'Brand Identity' },
    { id: 'sub-packaging', label: 'Packaging' },
    { id: 'sub-posters', label: 'Visual Lab & Posters' }
  ];

  const featuredMotion = motionGraphicsPortfolio.videos.find(v => v.id === 'saas-1') || motionGraphicsPortfolio.videos[0];
  const otherMotionVideos = motionGraphicsPortfolio.videos.filter(v => v.id !== featuredMotion.id);

  return (
    <section id="portfolio" className="py-20 md:py-32 border-t border-white/[0.08] relative bg-[#050507] text-white">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10">
        
        {/* Section Header Marker */}
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 mb-14 text-xs font-mono uppercase tracking-widest text-neutral-400">
          <div className="flex items-center gap-2">
            <span className="text-white font-bold">02</span>
            <span className="text-blue-400 font-bold">//</span>
            <span className="text-neutral-300 font-semibold tracking-widest">SELECTED PORTFOLIO</span>
          </div>
          <div className="text-blue-400 font-mono text-[11px] hidden sm:block">
            MOTION GRAPHICS • NARRATIVE EDITING • VISUAL SYSTEMS
          </div>
          <div className="text-neutral-400">
            2026 ARCHIVE
          </div>
        </div>

        {/* Section Title & Philosophy Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
          <div className="lg:col-span-7">
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-[0.9] font-display">
              SELECTED<br />WORKS
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
              Engineered for high-growth tech founders, digital products, and ambitious consumer brands. Prioritizing retention mechanics, kinetic rhythm, and human visual taste.
            </p>
          </div>
        </div>

        {/* Sticky Sub-Section Quick Filter / Jump Bar */}
        <div className="sticky top-16 z-30 mb-16 -mx-2 px-2 py-3 bg-[#050507]/90 backdrop-blur-md border-y border-white/[0.08]">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => scrollToSubSection(tab.id)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-blue-500 text-white font-bold shadow-lg shadow-blue-500/20 border border-blue-400'
                    : 'bg-white/[0.04] text-neutral-400 hover:text-white hover:bg-white/[0.08] border border-white/[0.05]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* =========================================================================
            CURATED BENTO GRID (Visible on Curated tab or initial view)
           ========================================================================= */}
        {activeTab === 'curated' && (
          <div className="mb-28 space-y-12 animate-fadeIn">
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
              <div className="text-xs font-mono uppercase tracking-widest text-neutral-400 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] animate-pulse" />
                <span>CURATED FLAGSHIP SHOWCASE // HIGHEST CONVERSION IMPACT</span>
              </div>
              <span className="text-[11px] font-mono text-blue-400">
                4 PILLARS OF WORK
              </span>
            </div>

            {/* Curated Bento Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Pillar 1: Large Hero Card — SaaS UI Motion (7 Cols) */}
              <div className="lg:col-span-7 rounded-2xl md:rounded-3xl bg-[#0A0B10] border border-white/10 hover:border-blue-500/50 p-6 sm:p-8 flex flex-col justify-between transition-all duration-500 group shadow-2xl relative overflow-hidden">
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-[10px] font-mono uppercase tracking-widest text-blue-300">
                      FLAGSHIP MOTION GRAPHICS
                    </span>
                    <span className="text-xs font-mono text-emerald-400 font-semibold">
                      3.2x Engagement Lift
                    </span>
                  </div>

                  <AudioVideoPlayer
                    src={featuredMotion.src}
                    poster={featuredMotion.poster}
                    title={featuredMotion.title}
                    category="SaaS UI Component Motion"
                    aspectRatio="16/9"
                    className="w-full shadow-2xl"
                  />

                  <div>
                    <h4 className="font-display font-bold text-2xl sm:text-3xl text-white uppercase tracking-wide group-hover:text-blue-300 transition-colors">
                      {featuredMotion.title}
                    </h4>
                    <p className="mt-2 text-sm text-neutral-400 font-light leading-relaxed">
                      {featuredMotion.hook}
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-white/[0.08] flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {featuredMotion.tags.map((t, idx) => (
                      <span key={idx} className="px-2.5 py-1 rounded-full bg-white/[0.04] text-[10px] font-mono text-neutral-300">
                        {t}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => scrollToSubSection('sub-motion')}
                    className="text-xs font-mono uppercase tracking-wider text-blue-400 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>View All 7 Rigs</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Right Stack: Short-Form Reel + Brand Identity (5 Cols) */}
              <div className="lg:col-span-5 flex flex-col gap-8">
                
                {/* Pillar 2: 9:16 Vertical Short-Form Retention */}
                <div className="rounded-2xl md:rounded-3xl bg-[#0A0B10] border border-white/10 hover:border-purple-500/50 p-6 flex flex-col justify-between transition-all duration-500 group shadow-2xl">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-purple-500/20 border border-purple-400/30 text-[10px] font-mono uppercase tracking-widest text-purple-300">
                      SHORT-FORM RETENTION
                    </span>
                    <span className="text-xs font-mono text-emerald-400 font-semibold">
                      96% Retention
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-center">
                    <div className="sm:col-span-5 aspect-[9/16] rounded-xl overflow-hidden bg-black shadow-xl">
                      <AudioVideoPlayer
                        src="/assets/portfolio/reels/creative-studio-reel.mp4"
                        poster="/assets/portfolio/thumbnails/thumb-creative-studio-reel.jpg"
                        title="Creative Studio Reel"
                        category="Vertical 9:16"
                        aspectRatio="9/16"
                        className="w-full h-full"
                      />
                    </div>
                    <div className="sm:col-span-7 space-y-3">
                      <h4 className="font-display font-bold text-xl text-white uppercase tracking-wide">
                        High-Retention Talking Head &amp; B-Roll Sync
                      </h4>
                      <p className="text-xs text-neutral-400 font-light leading-relaxed">
                        Fast-paced kinetic jump cuts, dynamic graphic overlays, and micro-animations engineered to capture and lock in mobile viewer attention.
                      </p>
                      <button
                        onClick={() => scrollToSubSection('sub-reels')}
                        className="text-xs font-mono uppercase tracking-wider text-purple-400 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer pt-2"
                      >
                        <span>Explore Reels Suite</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Pillar 3: Flagship Brand Identity Case Study */}
                <div 
                  onClick={() => {
                    const hob = projects.find(p => p.id === 'house-of-burger') || brandIdentityPortfolio[0];
                    onSelectProject(hob);
                  }}
                  className="rounded-2xl md:rounded-3xl bg-[#0A0B10] border border-white/10 hover:border-white/30 p-6 flex flex-col justify-between transition-all duration-500 group shadow-2xl cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[10px] font-mono uppercase tracking-widest text-neutral-300">
                      BRAND ARCHITECTURE
                    </span>
                    <span className="text-xs font-mono text-neutral-400">
                      Full Case Study ↗
                    </span>
                  </div>

                  <div className="aspect-[16/9] w-full rounded-xl overflow-hidden bg-neutral-900 mb-4 relative">
                    <img
                      src="/assets/projects/house-of-burger/11655283.jpg"
                      alt="House of Burger"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-3 left-4">
                      <h4 className="font-display font-bold text-lg text-white uppercase tracking-wide">
                        House of Burger
                      </h4>
                      <p className="text-xs text-neutral-300 font-light">
                        Bold Brutalist Fast-Casual Identity System
                      </p>
                    </div>
                  </div>
                </div>

              </div>

            </div>

            {/* Jump Bar to Dive into Full Deep Dives */}
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                EXPLORE BY CATEGORY ARCHIVE:
              </span>
              <div className="flex flex-wrap gap-2.5">
                <button
                  onClick={() => scrollToSubSection('sub-motion')}
                  className="px-4 py-1.5 rounded-full bg-white/[0.05] hover:bg-white hover:text-black text-xs font-mono uppercase tracking-wider transition-all cursor-pointer"
                >
                  Motion Graphics (7)
                </button>
                <button
                  onClick={() => scrollToSubSection('sub-reels')}
                  className="px-4 py-1.5 rounded-full bg-white/[0.05] hover:bg-white hover:text-black text-xs font-mono uppercase tracking-wider transition-all cursor-pointer"
                >
                  Video Editing &amp; Reels
                </button>
                <button
                  onClick={() => scrollToSubSection('sub-branding')}
                  className="px-4 py-1.5 rounded-full bg-white/[0.05] hover:bg-white hover:text-black text-xs font-mono uppercase tracking-wider transition-all cursor-pointer"
                >
                  Brand Identity (4)
                </button>
                <button
                  onClick={() => scrollToSubSection('sub-packaging')}
                  className="px-4 py-1.5 rounded-full bg-white/[0.05] hover:bg-white hover:text-black text-xs font-mono uppercase tracking-wider transition-all cursor-pointer"
                >
                  Packaging (4)
                </button>
                <button
                  onClick={() => scrollToSubSection('sub-posters')}
                  className="px-4 py-1.5 rounded-full bg-white/[0.05] hover:bg-white hover:text-black text-xs font-mono uppercase tracking-wider transition-all cursor-pointer"
                >
                  Visual Lab &amp; Posters (8)
                </button>
              </div>
            </div>

          </div>
        )}

        {/* =========================================================================
            SUB-SECTION 1: MOTION & SAAS UI (Revenue Priority #1)
           ========================================================================= */}
        <div id="sub-motion" className="scroll-mt-36 mb-32 border-b border-white/[0.08] pb-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-4">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-blue-400 mb-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                <span>01 // MOTION GRAPHICS &amp; SAAS UI</span>
              </div>
              <h3 className="text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white font-display">
                SaaS UI Motion &amp; Explainers
              </h3>
            </div>
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-xs font-mono text-blue-300">
              <Volume2 className="w-4 h-4 text-[#00F0FF] animate-pulse" />
              <span>Hover Video For Synced Audio</span>
            </div>
          </div>
          <p className="text-sm sm:text-base text-neutral-400 max-w-3xl mb-14 font-light leading-relaxed">
            Fluid UI component interactions, dashboard transitions, and product explainer sequences designed to clarify complex B2B workflows and maximize user conversion.
          </p>

          {/* Featured Hero Rig: LeadsFinder */}
          <div className="mb-14 rounded-2xl md:rounded-3xl bg-[#0A0B10] border border-white/10 hover:border-blue-500/50 p-6 sm:p-10 transition-all duration-500 group shadow-2xl relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <AudioVideoPlayer
                  src={featuredMotion.src}
                  poster={featuredMotion.poster}
                  title={featuredMotion.title}
                  category="Featured Explainer Rig"
                  aspectRatio="16/9"
                  className="w-full shadow-2xl"
                />
              </div>
              <div className="lg:col-span-5 space-y-5">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-[10px] font-mono uppercase tracking-widest text-blue-300">
                    {featuredMotion.category}
                  </span>
                  <span className="text-xs font-mono text-emerald-400 font-semibold">
                    {featuredMotion.metrics}
                  </span>
                </div>

                <h4 className="font-display font-bold text-2xl sm:text-3xl text-white uppercase tracking-wide group-hover:text-blue-300 transition-colors">
                  {featuredMotion.title}
                </h4>

                <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                  {featuredMotion.hook}
                </p>

                <div className="pt-4 border-t border-white/[0.08] flex flex-wrap gap-2">
                  {featuredMotion.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-neutral-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Other 6 SaaS UI Motion Mini Case Studies */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherMotionVideos.map((vid) => (
              <div 
                key={vid.id} 
                className="group rounded-2xl bg-[#0A0B10] border border-white/[0.08] hover:border-blue-500/40 p-5 flex flex-col justify-between transition-all duration-500 shadow-xl"
              >
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
                    <div className="flex items-center justify-between text-[11px] font-mono">
                      <span className="text-neutral-400 uppercase">{vid.category}</span>
                      {vid.metrics && <span className="text-emerald-400 font-semibold">{vid.metrics}</span>}
                    </div>

                    <h5 className="font-display font-bold text-lg text-white uppercase tracking-wide group-hover:text-blue-300 transition-colors">
                      {vid.title}
                    </h5>

                    <p className="text-xs text-neutral-400 font-light leading-relaxed">
                      {vid.hook}
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-white/[0.06] flex flex-wrap gap-1.5">
                  {vid.tags.map((t, idx) => (
                    <span key={idx} className="px-2 py-0.5 rounded-full bg-white/[0.03] text-[10px] font-mono text-neutral-400">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* =========================================================================
            SUB-SECTION 2: REELS & VIDEO EDITING
           ========================================================================= */}
        <div id="sub-reels" className="scroll-mt-36 mb-32 border-b border-white/[0.08] pb-24">
          <div className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
            <span>02 // VIDEO EDITING &amp; SHORT-FORM RETENTION</span>
          </div>
          <h3 className="text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white font-display mb-4">
            Reels &amp; Narrative Video Editing
          </h3>
          <p className="text-sm sm:text-base text-neutral-400 max-w-3xl mb-14 font-light leading-relaxed">
            Scroll-stopping short-form edits engineered for maximum retention. Fast-paced cuts, sound-designed transitions, and narrative rhythm built to captivate audiences and trigger organic growth.
          </p>

          {/* 9:16 Vertical Mobile Reels */}
          <div className="mb-14">
            <div className="flex items-center justify-between mb-6">
              <div className="text-xs font-mono uppercase tracking-widest text-neutral-400 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-white" />
                <span>Vertical Short-Form Motion (9:16 Reels)</span>
              </div>
              <span className="text-[11px] font-mono text-neutral-400">
                INSTAGRAM REELS / TIKTOK / SHORTS READY
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 max-w-3xl mx-auto gap-8">
              {reelsPortfolio.verticalVideos.filter(v => v.aspectRatio === "9:16").map((video) => (
                <div key={video.id} className="flex flex-col">
                  <AudioVideoPlayer
                    src={video.src}
                    poster={video.poster}
                    title={video.title}
                    category={video.category}
                    aspectRatio="9/16"
                    className="w-full shadow-2xl"
                  />
                  <div className="pt-4 px-2">
                    <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400 mb-1">
                      <span>9:16 VERTICAL REEL</span>
                      <span className="text-emerald-400">{video.metrics}</span>
                    </div>
                    <h5 className="font-display font-bold text-base text-white uppercase tracking-wider">
                      {video.title}
                    </h5>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Multi-Reel Strategy & Motion Showcases (16:9) */}
          <div className="mb-14">
            <div className="flex items-center justify-between mb-6">
              <div className="text-xs font-mono uppercase tracking-widest text-neutral-400 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-white" />
                <span>Multi-Reel Strategy &amp; Motion Showcases (16:9)</span>
              </div>
              <span className="text-[11px] font-mono text-neutral-400">
                PORTFOLIO SUITES
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {reelsPortfolio.verticalVideos.filter(v => v.aspectRatio !== "9:16").map((video) => (
                <div key={video.id} className="flex flex-col">
                  <AudioVideoPlayer
                    src={video.src}
                    poster={video.poster}
                    title={video.title}
                    category={video.category}
                    aspectRatio="16/9"
                    className="w-full shadow-xl"
                  />
                  <div className="pt-4 px-2">
                    <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400 mb-1">
                      <span>16:9 SHOWCASE</span>
                      <span className="text-emerald-400">{video.metrics}</span>
                    </div>
                    <h5 className="font-display font-bold text-base text-white uppercase tracking-wider">
                      {video.title}
                    </h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* =========================================================================
            SUB-SECTION 3: BRANDING & BRAND IDENTITY
           ========================================================================= */}
        <div id="sub-branding" className="scroll-mt-36 mb-32 border-b border-white/[0.08] pb-24">
          <div className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>03 // VISUAL ARCHITECTURE &amp; BRAND SYSTEMS</span>
          </div>
          <h3 className="text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white font-display mb-4">
            Branding &amp; Brand Identity
          </h3>
          <p className="text-sm sm:text-base text-neutral-400 max-w-3xl mb-14 font-light leading-relaxed">
            End-to-end visual identities engineered for modern brands. Dive into complete case studies detailing strategic positioning, custom visual systems, and real-world applications.
          </p>

          {/* 4 Flagship Projects: House of Burger, ZENI, Matchino, Vastukey */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 mb-16">
            {brandIdentityPortfolio.map((brand) => {
              const fullProject = projects.find(p => p.id === brand.id);
              return (
                <motion.div
                  key={brand.id}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => onSelectProject(fullProject || brand)}
                  className="rounded-2xl md:rounded-3xl overflow-hidden bg-[#0A0B10] border border-white/[0.08] hover:border-white/30 transition-all duration-500 cursor-pointer group flex flex-col shadow-2xl"
                >
                  <div className="aspect-[16/10] w-full overflow-hidden bg-neutral-900 relative">
                    <img
                      src={brand.heroImage}
                      alt={brand.title}
                      className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono uppercase tracking-widest text-neutral-300">
                      {brand.year}
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-white" />
                        <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">
                          {brand.category}
                        </span>
                      </div>
                      <h4 className="text-2xl sm:text-3xl font-bold font-display uppercase tracking-wider text-white mb-2 group-hover:text-blue-300 transition-colors">
                        {brand.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-neutral-400 font-light">
                        {brand.tagline}
                      </p>
                    </div>

                    <div className="pt-6 mt-6 border-t border-white/[0.08] flex items-center justify-between">
                      <span className="text-xs font-mono uppercase tracking-wider text-white group-hover:translate-x-1 transition-transform">
                        Explore Full Case Study
                      </span>
                      <div className="w-9 h-9 rounded-full bg-white text-black flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Logofolio Brand Ticker */}
          <div className="pt-8">
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                LOGOFOLIO // STRATEGIC IDENTITY MARKS
              </span>
              <span className="text-[11px] font-mono text-neutral-400">
                DISTILLED SYMBOLISM
              </span>
            </div>
            <BrandTicker onSelectLogo={(logo) => setSelectedCreative({ image: logo.src, title: `${logo.name} - Identity Mark` })} />
          </div>
        </div>

        {/* =========================================================================
            SUB-SECTION 4: PACKAGING DESIGN
           ========================================================================= */}
        <div id="sub-packaging" className="scroll-mt-36 mb-32 border-b border-white/[0.08] pb-24">
          <div className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            <span>04 // PHYSICAL TOUCHPOINTS &amp; RETAIL IMPACT</span>
          </div>
          <h3 className="text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white font-display mb-4">
            Packaging Design
          </h3>
          <p className="text-sm sm:text-base text-neutral-400 max-w-3xl mb-16 font-light leading-relaxed">
            Physical touchpoints designed for maximum retail impact. Structural and visual packaging strategies that merge striking aesthetics with functional design to stand out on crowded shelves.
          </p>

          {/* 4 Packaging Projects: Infiya Tea, Sauz, Pasta Basta, Theory of tea */}
          <div className="space-y-28">
            {packagingPortfolio.map((project) => (
              <div key={project.id} className="space-y-8">
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
                  <h4 className="text-2xl sm:text-4xl font-bold uppercase tracking-tight text-white font-display">
                    {project.title}
                  </h4>
                  <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                    Packaging Suite
                  </span>
                </div>

                {project.heroImage && (
                  <div
                    onClick={() => setSelectedCreative({ image: project.heroImage, title: `${project.title} - Hero Showcase` })}
                    className="w-full rounded-2xl md:rounded-3xl overflow-hidden bg-[#0A0B10] border border-white/[0.08] hover:border-white/30 transition-all duration-500 group cursor-pointer relative shadow-2xl"
                  >
                    <div className="aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden relative">
                      <img
                        src={project.heroImage}
                        alt={`${project.title} Hero Showcase`}
                        className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                        loading="lazy"
                      />
                      <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono uppercase tracking-widest text-neutral-300">
                        Featured Hero
                      </div>
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                          <ZoomIn className="w-5 h-5" />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {project.images && project.images.length > 0 && (
                  <div className="space-y-3 pt-2">
                    <div className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 flex items-center justify-between">
                      <span>Detail &amp; Collateral Views</span>
                      <span>{project.images.length} ASSETS</span>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
                      {project.images.map((imgSrc, imgIdx) => (
                        <div
                          key={imgIdx}
                          onClick={() => setSelectedCreative({ image: imgSrc, title: `${project.title} - View ${imgIdx + 1}` })}
                          className="rounded-xl overflow-hidden bg-[#0A0B10] border border-white/[0.08] hover:border-white/30 transition-all duration-300 group cursor-pointer relative"
                        >
                          <div className="aspect-[4/3] w-full overflow-hidden relative">
                            <img
                              src={imgSrc}
                              alt={`${project.title} detail ${imgIdx + 1}`}
                              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                              <div className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                                <ZoomIn className="w-3.5 h-3.5" />
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* =========================================================================
            SUB-SECTION 5: VISUAL LAB & EDITORIAL POSTERS (Purged of all food flyers)
           ========================================================================= */}
        <div id="sub-posters" className="scroll-mt-36">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-4">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF]" />
                <span>05 // VISUAL LAB &amp; EDITORIAL EXPERIMENTS</span>
              </div>
              <h3 className="text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white font-display">
                Visual Lab &amp; Posters
              </h3>
            </div>
            <span className="text-[11px] font-mono text-neutral-400">
              8 EXPERIMENTAL POSTER STUDIES
            </span>
          </div>
          <p className="text-sm sm:text-base text-neutral-400 max-w-3xl mb-14 font-light leading-relaxed">
            Experimental typographic compositions, negative-space studies, and conceptual editorial posters exploring the intersection of brutalist grid discipline and expressive visual art.
          </p>

          {/* 8 High-Impact Editorial Posters Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {visualLabPosters.map((poster) => (
              <div
                key={poster.id}
                onClick={() => setSelectedCreative({ image: poster.image, title: poster.title, subtitle: poster.subtitle })}
                className="group rounded-2xl bg-[#0A0B10] border border-white/[0.08] hover:border-[#00F0FF]/50 transition-all duration-500 overflow-hidden cursor-pointer shadow-xl flex flex-col justify-between"
              >
                <div className="aspect-[3/4] w-full overflow-hidden bg-neutral-900 relative">
                  <img
                    src={poster.image}
                    alt={poster.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[9px] font-mono uppercase tracking-widest text-neutral-300">
                    {poster.tag}
                  </div>
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                      <ZoomIn className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                <div className="p-4 sm:p-5">
                  <h5 className="font-display font-bold text-base text-white uppercase tracking-wide group-hover:text-[#00F0FF] transition-colors">
                    {poster.title}
                  </h5>
                  <p className="text-xs text-neutral-400 font-light mt-1">
                    {poster.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Lightbox Modal for Posters & Creatives */}
      <AnimatePresence>
        {selectedCreative && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCreative(null)}
              className="fixed inset-0 bg-black/90 backdrop-blur-md cursor-pointer"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-4xl max-h-[90vh] z-10 flex flex-col items-center justify-center"
            >
              <button
                onClick={() => setSelectedCreative(null)}
                className="absolute -top-12 right-0 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                aria-label="Close Preview"
              >
                <X className="w-5 h-5" />
              </button>
              <img
                src={selectedCreative.image}
                alt={selectedCreative.title}
                className="max-h-[82vh] max-w-full w-auto rounded-2xl object-contain shadow-2xl border border-white/10"
              />
              {selectedCreative.title && (
                <div className="mt-3 text-center">
                  <p className="font-display font-bold text-sm uppercase tracking-wider text-white">
                    {selectedCreative.title}
                  </p>
                  {selectedCreative.subtitle && (
                    <p className="text-xs text-neutral-400 font-light">
                      {selectedCreative.subtitle}
                    </p>
                  )}
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
