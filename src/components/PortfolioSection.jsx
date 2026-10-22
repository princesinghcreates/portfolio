import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Volume2, Sparkles, Layers, Box, Film, Play, Compass, CheckCircle2, X, ZoomIn } from 'lucide-react';
import { 
  projects, 
  socialMediaPortfolio, 
  packagingPortfolio, 
  brandIdentityPortfolio, 
  reelsPortfolio, 
  motionGraphicsPortfolio 
} from '../data/siteData';
import AudioVideoPlayer from './AudioVideoPlayer';
import BrandTicker from './BrandTicker';

export default function PortfolioSection({ onSelectProject, onOpenPosters }) {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedCreative, setSelectedCreative] = useState(null);

  const scrollToSubSection = (id) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const tabs = [
    { id: 'all', label: 'All Disciplines' },
    { id: 'sub-reels', label: 'Reels & Video Editing' },
    { id: 'sub-motion', label: 'Motion Graphics' },
    { id: 'sub-logofolio', label: 'Logofolio' },
    { id: 'sub-branding', label: 'Brand Identity' },
    { id: 'sub-packaging', label: 'Packaging Design' },
    { id: 'sub-social', label: 'Social Media' }
  ];

  return (
    <section id="portfolio" className="py-20 md:py-32 border-t border-white/[0.08] relative bg-[#080808]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10">
        
        {/* Section Header Marker */}
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 mb-14 text-xs font-mono uppercase tracking-widest text-neutral-400">
          <div className="flex items-center gap-2">
            <span className="text-white font-bold">02</span>
          </div>
          <div className="text-neutral-400 font-semibold tracking-widest">
            //LATEST PORTFOLIO
          </div>
          <div className="hidden sm:block">
            MULTIDISCIPLINARY CREATIVE ARCHITECTURE
          </div>
        </div>

        {/* Section Title & Philosophy Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
          <div className="lg:col-span-7">
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-[0.9] font-display">
              LATEST<br />PORTFOLIO
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
              From viral short-form retention and sound-synced motion graphics to bespoke luxury packaging and complete brand identity systems.
            </p>
          </div>
        </div>

        {/* Sticky Sub-Section Quick Filter / Jump Bar */}
        <div className="sticky top-20 z-30 mb-20 -mx-2 px-2 py-3 bg-[#080808]/85 backdrop-blur-md border-y border-white/[0.08]">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  if (tab.id === 'all') {
                    setActiveTab('all');
                  } else {
                    scrollToSubSection(tab.id);
                  }
                }}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-white text-black font-bold shadow-lg shadow-white/10'
                    : 'bg-white/[0.04] text-neutral-400 hover:text-white hover:bg-white/[0.08] border border-white/[0.05]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* =========================================================================
            SUB-SECTION 1: REELS & VIDEO EDITING
           ========================================================================= */}
        <div id="sub-reels" className="scroll-mt-36 mb-32 border-b border-white/[0.08] pb-24">
          <h3 className="text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white font-display mb-4">
            Reels & Video Editing
          </h3>
          <p className="text-sm sm:text-base text-neutral-400 max-w-3xl mb-12 font-light leading-relaxed">
            Scroll-stopping short-form edits engineered for maximum retention. Fast-paced cuts and narrative sequences built to captivate audiences and trigger organic growth.
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
            SUB-SECTION 2: MOTION GRAPHICS (SaaS Motion Videos with Audio Controls)
           ========================================================================= */}
        <div id="sub-motion" className="scroll-mt-36 mb-32 border-b border-white/[0.08] pb-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-4">
            <div>
              <h3 className="text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white font-display mb-2">
                Motion Graphics
              </h3>
            </div>
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-neutral-300">
              <Volume2 className="w-4 h-4 text-emerald-400" />
              <span>Click Video for Sound</span>
            </div>
          </div>
          <p className="text-sm sm:text-base text-neutral-400 max-w-3xl mb-12 font-light leading-relaxed">
            Fluid 2D/3D animation and UI explainer sequences that bring static concepts to life. Complex visual storytelling engineered for clarity, rhythm, and high-impact digital experiences.
          </p>

          {/* SaaS Motion Graphics Video Grid (Clean without text) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
            {motionGraphicsPortfolio.videos.map((vid) => (
              <div key={vid.id} className="w-full">
                <AudioVideoPlayer
                  src={vid.src}
                  aspectRatio="16/9"
                  className="w-full shadow-2xl"
                />
              </div>
            ))}
          </div>
        </div>

        {/* =========================================================================
            SUB-SECTION 3: LOGOFOLIO
           ========================================================================= */}
        <div id="sub-logofolio" className="scroll-mt-36 mb-32 border-b border-white/[0.08] pb-24">
          <h3 className="text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white font-display mb-4">
            Logofolio
          </h3>
          <p className="text-sm sm:text-base text-neutral-400 max-w-3xl mb-12 font-light leading-relaxed">
            Distinctive identity marks built to leave a lasting impression. Strategic logo design that distills complex brand narratives into sharp, instantly recognizable visual symbols.
          </p>

          <BrandTicker />
        </div>

        {/* =========================================================================
            SUB-SECTION 4: BRANDING / BRAND IDENTITY
           ========================================================================= */}
        <div id="sub-branding" className="scroll-mt-36 mb-32 border-b border-white/[0.08] pb-24">
          <h3 className="text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white font-display mb-4">
            Branding & Brand Identity
          </h3>
          <p className="text-sm sm:text-base text-neutral-400 max-w-3xl mb-12 font-light leading-relaxed">
            End-to-end visual identities engineered for modern brands. Dive into complete case studies detailing strategic positioning, custom visual systems, and real-world applications.
          </p>

          {/* 4 Flagship Projects: House of Burger, ZENI, Matchino, Vastukey */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
            {brandIdentityPortfolio.map((brand) => {
              const fullProject = projects.find(p => p.id === brand.id);
              return (
                <motion.div
                  key={brand.id}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => onSelectProject(fullProject || brand)}
                  className="rounded-2xl md:rounded-3xl overflow-hidden bg-neutral-950 border border-white/[0.08] hover:border-white/30 transition-all duration-500 cursor-pointer group flex flex-col"
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
                      <h4 className="text-2xl sm:text-3xl font-bold font-display uppercase tracking-wider text-white mb-2 group-hover:text-neutral-300 transition-colors">
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
        </div>

        {/* =========================================================================
            SUB-SECTION 5: PACKAGING DESIGN
           ========================================================================= */}
        <div id="sub-packaging" className="scroll-mt-36 mb-32 border-b border-white/[0.08] pb-24">
          <h3 className="text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white font-display mb-4">
            Packaging Design
          </h3>
          <p className="text-sm sm:text-base text-neutral-400 max-w-3xl mb-16 font-light leading-relaxed">
            Physical touchpoints designed for maximum retail impact. Structural and visual packaging strategies that merge striking aesthetics with functional design to stand out in crowded markets.
          </p>

          {/* 4 Packaging Projects: Infiya Tea, Sauz, Pasta Basta, Theory of tea */}
          <div className="space-y-28">
            {packagingPortfolio.map((project) => (
              <div key={project.id} className="space-y-8">
                {/* Single heading of the folder / client name */}
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
                  <h4 className="text-2xl sm:text-4xl font-bold uppercase tracking-tight text-white font-display">
                    {project.title}
                  </h4>
                  <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                    Packaging Suite
                  </span>
                </div>

                {/* Hero Showcase Image (Large, commanding prominence) */}
                {project.heroImage && (
                  <div
                    onClick={() => setSelectedCreative({ image: project.heroImage, title: `${project.title} - Hero Showcase` })}
                    className="w-full rounded-2xl md:rounded-3xl overflow-hidden bg-neutral-950 border border-white/[0.08] hover:border-white/30 transition-all duration-500 group cursor-pointer relative shadow-2xl"
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

                {/* Rest of the images: smaller secondary gallery */}
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
                          className="rounded-xl overflow-hidden bg-neutral-950 border border-white/[0.08] hover:border-white/30 transition-all duration-300 group cursor-pointer relative"
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
            SUB-SECTION 6: SOCIAL MEDIA DESIGN (Single Unified Presentation)
           ========================================================================= */}
        <div id="sub-social" className="scroll-mt-36">
          <h3 className="text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white font-display mb-4">
            Social Media Design
          </h3>
          <p className="text-sm sm:text-base text-neutral-400 max-w-3xl mb-14 font-light leading-relaxed">
            High-conversion digital assets designed to command the feed. Strategic carousel sequences, launch campaigns, and grid aesthetics built for maximum dwell-time and audience retention.
          </p>

          {/* Single Unified Social Media Showcase Stream (Original Artwork with Designed Typography) */}
          <div className="space-y-10 sm:space-y-14 mb-16">
            
            {/* Poster 1: Main Heading Poster (Facebook Isometric Performance Grid) */}
            <div className="rounded-2xl md:rounded-3xl overflow-hidden bg-neutral-900 border border-white/[0.08] shadow-2xl group">
              <img
                src="/assets/portfolio/social-media/social-media-banner-facebook.jpg"
                alt="Social Media Campaign Architecture"
                className="w-full h-auto object-cover object-center group-hover:scale-[1.01] transition-transform duration-700 ease-out"
                loading="lazy"
              />
            </div>

            {/* Poster 2: Strategic Social Media Creative & Ad Design */}
            <div className="rounded-2xl md:rounded-3xl overflow-hidden bg-neutral-900 border border-white/[0.08] shadow-2xl group">
              <img
                src="/assets/portfolio/social-media/social-media-strategic-ad.jpg"
                alt="Strategic Social Media Creative & Ad Design"
                className="w-full h-auto object-cover object-center group-hover:scale-[1.01] transition-transform duration-700 ease-out"
                loading="lazy"
              />
            </div>

            {/* Poster 3: Designing with Intent: A Minimalist Approach */}
            <div className="rounded-2xl md:rounded-3xl overflow-hidden bg-neutral-900 border border-white/[0.08] shadow-2xl group">
              <img
                src="/assets/portfolio/social-media/social-media-minimalist-carousel.jpg"
                alt="Designing with Intent: A Minimalist Approach"
                className="w-full h-auto object-cover object-center group-hover:scale-[1.01] transition-transform duration-700 ease-out"
                loading="lazy"
              />
            </div>

            {/* Poster 4: Premium AI-Enhanced Visuals & Professional Static Creatives */}
            <div className="rounded-2xl md:rounded-3xl overflow-hidden bg-neutral-900 border border-white/[0.08] shadow-2xl group">
              <img
                src="/assets/portfolio/social-media/social-media-ai-visuals.jpg"
                alt="Premium AI-Enhanced Visuals & Professional Static Creatives"
                className="w-full h-auto object-cover object-center group-hover:scale-[1.01] transition-transform duration-700 ease-out"
                loading="lazy"
              />
            </div>

          </div>

          {/* Individual Campaign Creatives & Post Uploads (Gallery Grid) */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="text-xs font-mono uppercase tracking-widest text-neutral-400 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-white" />
                <span>Individual Campaign Creatives &amp; Post Uploads</span>
              </div>
              <span className="text-[11px] font-mono text-neutral-400">
                {socialMediaPortfolio.gallery.length} CREATIVES DISPLAYED
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
              {socialMediaPortfolio.gallery.map((item) => (
                <div 
                  key={item.id}
                  onClick={() => setSelectedCreative(item)}
                  className="rounded-xl overflow-hidden bg-neutral-900 border border-white/[0.08] hover:border-white/30 transition-all duration-300 group cursor-pointer relative"
                >
                  <div className="aspect-[4/5] w-full overflow-hidden relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                        <ZoomIn className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Lightbox Inspection Modal for Social Media Creatives */}
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
                className="max-h-[85vh] max-w-full w-auto rounded-2xl object-contain shadow-2xl border border-white/10"
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
