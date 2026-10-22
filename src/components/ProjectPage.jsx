import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Plus, Minus, X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { projects, faqs, personalInfo } from '../data/siteData';

export default function ProjectPage({ projectId, onNavigateHome, onNavigateProject, onOpenContact }) {
  // Find project or fallback to Vastukey Ventures
  const currentProject = projects.find(p => p.id === projectId) || projects[0];

  // Local live clock matching Porto navbar
  const [time, setTime] = useState('');
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const galleryImages = currentProject.gallery || [];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      setTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const nextLightbox = useCallback(() => {
    setLightboxIndex((prev) => (prev !== null && galleryImages.length > 0 ? (prev + 1) % galleryImages.length : null));
  }, [galleryImages.length]);

  const prevLightbox = useCallback(() => {
    setLightboxIndex((prev) => (prev !== null && galleryImages.length > 0 ? (prev - 1 + galleryImages.length) % galleryImages.length : null));
  }, [galleryImages.length]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextLightbox();
      if (e.key === 'ArrowLeft') prevLightbox();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, closeLightbox, nextLightbox, prevLightbox]);

  const toggleFaq = (idx) => {
    setOpenFaqIndex(openFaqIndex === idx ? -1 : idx);
  };

  const scrollToTop = () => {
    if (window.lenis) {
      window.lenis.scrollTo(0, { duration: 1.4 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Other projects for MORE WORKS
  const otherProjects = projects.filter(p => p.id !== currentProject.id);

  // Render a responsive visual card with guaranteed aspect ratio & uncropped lightbox inspection
  const renderCard = (src, alt, aspect = 'aspect-[16/9]', span = '', caption = '') => {
    const idx = galleryImages.findIndex(img => img === src);
    const displayIndex = idx >= 0 ? idx : 0;

    return (
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.6 }}
        onClick={() => openLightbox(displayIndex)}
        className={`group relative rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 bg-neutral-950 shadow-2xl transition-all duration-500 hover:border-white/40 cursor-zoom-in ${aspect} ${span}`}
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out"
          loading="lazy"
        />

        {/* Index & Caption Tag */}
        <div className="absolute top-4 left-4 sm:top-5 sm:left-5 px-3 py-1.5 rounded-full bg-black/75 backdrop-blur-md border border-white/15 text-[11px] font-mono tracking-widest text-neutral-300 pointer-events-none flex items-center gap-2">
          <span>{String(displayIndex + 1).padStart(2, '0')} / {String(galleryImages.length).padStart(2, '0')}</span>
          {caption && <span className="text-neutral-500 font-sans font-normal border-l border-white/20 pl-2 hidden sm:inline">{caption}</span>}
        </div>

        {/* Inspect Hover Pill */}
        <div className="absolute bottom-4 right-4 sm:bottom-5 sm:right-5 px-3.5 py-2 rounded-full bg-white text-black font-mono text-[11px] uppercase tracking-wider font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1.5 shadow-xl pointer-events-none">
          <Maximize2 className="w-3.5 h-3.5" />
          <span>Inspect</span>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-[#080808] text-white selection:bg-white selection:text-black relative font-sans">
      
      {/* Top Header Bar */}
      <header className="sticky top-0 z-40 bg-[#080808]/90 backdrop-blur-md border-b border-white/[0.08] py-4 transition-all duration-300">
        <div className="max-w-[1320px] mx-auto px-6 sm:px-10 flex items-center justify-between">
          
          {/* Left: Live Local Clock */}
          <div className="text-xs sm:text-sm font-mono tracking-wider text-neutral-300 flex items-center gap-1.5">
            <span className="text-neutral-500 font-semibold">LOCAL/</span>
            <span className="text-white font-medium">{time || '5:50:43 PM'}</span>
          </div>

          {/* Center: Six-dots grid icon (Home navigation) */}
          <button
            onClick={onNavigateHome}
            aria-label="Back to Homepage"
            title="Back to Homepage"
            className="group flex flex-col gap-1.5 p-2 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
          >
            <div className="flex gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-300 group-hover:bg-white transition-colors" />
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-300 group-hover:bg-white transition-colors" />
            </div>
            <div className="flex gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-300 group-hover:bg-white transition-colors" />
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-300 group-hover:bg-white transition-colors" />
            </div>
            <div className="flex gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-300 group-hover:bg-white transition-colors" />
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-300 group-hover:bg-white transition-colors" />
            </div>
          </button>

          {/* Right: Contact Now Pill Button */}
          <div>
            <button
              onClick={() => onOpenContact(currentProject.category)}
              className="px-6 py-2 rounded-full border border-white text-xs font-mono uppercase tracking-widest font-semibold text-white hover:bg-white hover:text-black transition-all duration-300 active:scale-95 cursor-pointer shadow-md"
            >
              CONTACT NOW
            </button>
          </div>

        </div>
      </header>

      {/* Main Container with subtle side guide borders */}
      <main className="max-w-[1320px] mx-auto px-6 sm:px-10 lg:px-12 border-x border-white/[0.06] pt-16 sm:pt-24 pb-20">
        
        {/* Project Header Area */}
        <section className="text-center max-w-4xl mx-auto">
          {/* Date Tag */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs font-mono uppercase tracking-[0.25em] text-neutral-400 mb-6"
          >
            {currentProject.date || 'MAY 18, 2024'}
          </motion.div>

          {/* Massive Display Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-[84px] font-black uppercase tracking-tight text-white leading-[0.95] font-display"
          >
            {currentProject.title}
          </motion.h1>

          {/* Description Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-neutral-400 font-light leading-relaxed mt-6 sm:mt-8 max-w-3xl mx-auto"
          >
            {currentProject.description}
          </motion.p>
        </section>

        {/* Hero Image Banner */}
        <div className="mt-14 sm:mt-20">
          {renderCard(currentProject.heroImage, currentProject.title, "aspect-[16/9]", "w-full", "Master Brand Hero")}
        </div>

        {/* 4-Column Metadata Strip */}
        <section className="border-y border-white/[0.08] py-8 my-16 sm:my-24 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
          <div>
            <p className="text-[11px] font-mono uppercase tracking-widest text-neutral-500">YEAR</p>
            <p className="text-base sm:text-lg font-bold font-display uppercase text-white mt-1.5">{currentProject.year}</p>
          </div>
          <div>
            <p className="text-[11px] font-mono uppercase tracking-widest text-neutral-500">CLIENT</p>
            <p className="text-base sm:text-lg font-bold font-display uppercase text-white mt-1.5 truncate">{currentProject.client}</p>
          </div>
          <div>
            <p className="text-[11px] font-mono uppercase tracking-widest text-neutral-500">CATEGORY</p>
            <p className="text-base sm:text-lg font-bold font-display uppercase text-white mt-1.5">{currentProject.category}</p>
          </div>
          <div>
            <p className="text-[11px] font-mono uppercase tracking-widest text-neutral-500">PRODUCT DURATION</p>
            <p className="text-base sm:text-lg font-bold font-display uppercase text-white mt-1.5">{currentProject.duration}</p>
          </div>
        </section>

        {/* Section: ABOUT THE BRAND */}
        {currentProject.aboutBrand && (
          <section className="my-16 sm:my-24 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4">
              <h2 className="text-xl sm:text-2xl font-bold font-display uppercase tracking-wider text-white">
                ABOUT THE BRAND
              </h2>
            </div>
            <div className="lg:col-span-8">
              <p className="text-base sm:text-lg text-neutral-300 font-light leading-relaxed">
                {currentProject.aboutBrand}
              </p>
            </div>
          </section>
        )}

        {/* Section: RESEARCH & Custom Research Visual Layout */}
        {currentProject.research && (
          <section className="my-16 sm:my-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12 sm:mb-16">
              <div className="lg:col-span-4">
                <h2 className="text-xl sm:text-2xl font-bold font-display uppercase tracking-wider text-white">
                  RESEARCH &amp; DISCOVERY
                </h2>
              </div>
              <div className="lg:col-span-8 space-y-4">
                <p className="text-base sm:text-lg text-neutral-300 font-light leading-relaxed">
                  {currentProject.research.intro}
                </p>
                {currentProject.research.points && currentProject.research.points.length > 0 && (
                  <ul className="space-y-3.5 text-sm sm:text-base text-neutral-400 font-light leading-relaxed pt-2">
                    {currentProject.research.points.map((pt, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-neutral-500 mt-1 shrink-0">•</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            {/* Custom Visual Layout for Research Section per Project */}
            {currentProject.id === "zeni-luxury-minimal-brand" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {renderCard("/assets/projects/zeni/2.jpg", "ZENI Typographic Lookbook", "aspect-[3/4]", "", "Typographic Balance")}
                {renderCard("/assets/projects/zeni/5.jpg", "ZENI Minimal Editorial Spread", "aspect-[3/4]", "", "Editorial Direction")}
              </div>
            )}

            {currentProject.id === "scrambler" && (
              <div className="space-y-6 sm:space-y-8">
                {renderCard("/assets/projects/house-of-burger/11655283.jpg", "House of Burger Master Brand Board", "aspect-[16/10]", "", "Master Brand Board")}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                  {renderCard("/assets/projects/house-of-burger/11662052.jpg", "House of Burger Menu Board", "aspect-[4/5]", "", "Menu Typography")}
                  {renderCard("/assets/projects/house-of-burger/11672183.jpg", "House of Burger Countertop Table Stand", "aspect-[4/5]", "", "Countertop Display")}
                </div>
              </div>
            )}

            {currentProject.id === "matchino-fusion-cafe-concept" && (
              <div className="space-y-6 sm:space-y-8">
                {renderCard("/assets/projects/matchino/11766332.jpg", "Matchino Master Identity Board", "aspect-[16/10]", "", "Master Brand Board")}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                  {renderCard("/assets/projects/matchino/11766335.jpg", "Matchino Cold Brew Bottle Packaging", "aspect-[4/5]", "", "Cold Brew Bottles")}
                  {renderCard("/assets/projects/matchino/11766475.jpg", "Matchino Hot Takeaway Paper Cups", "aspect-[4/5]", "", "Paper Cups & Sleeves")}
                </div>
              </div>
            )}

            {currentProject.id === "vastukey-ventures-brand-identity" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {renderCard("/assets/projects/vastukey/vastukey-sketches.jpg", "Vastukey Hand-Drawn Concept Sketches", "aspect-[16/11]", "", "Pencil & Ink Sketches")}
                {renderCard("/assets/projects/vastukey/vastukey-board.png", "Vastukey Modular Lattice Motif", "aspect-[16/11]", "", "Tessellated Lattice Motif")}
              </div>
            )}
          </section>
        )}

        {/* Section: CONCEPT & Custom Concept Visual Layout */}
        {currentProject.concept && (
          <section className="my-16 sm:my-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12 sm:mb-16">
              <div className="lg:col-span-4">
                <h2 className="text-xl sm:text-2xl font-bold font-display uppercase tracking-wider text-white">
                  CONCEPT &amp; DEVELOPMENT
                </h2>
              </div>
              <div className="lg:col-span-8 space-y-4">
                <p className="text-base sm:text-lg text-neutral-300 font-light leading-relaxed">
                  {currentProject.concept.intro}
                </p>
                {currentProject.concept.points && currentProject.concept.points.length > 0 && (
                  <ul className="space-y-3.5 text-sm sm:text-base text-neutral-400 font-light leading-relaxed pt-2">
                    {currentProject.concept.points.map((pt, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-neutral-500 mt-1 shrink-0">•</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            {/* Custom Visual Layout for Concept Section per Project */}
            {currentProject.id === "zeni-luxury-minimal-brand" && (
              <div className="space-y-6 sm:space-y-8">
                {renderCard("/assets/projects/zeni/3.jpg", "ZENI Luxury Packaging Box & Ribbon", "aspect-[16/10]", "", "Luxury Box & Ribbon")}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                  {renderCard("/assets/projects/zeni/6.jpg", "ZENI Hangtag Package Suite", "aspect-[4/5]", "", "Hangtag Suite")}
                  {renderCard("/assets/projects/zeni/7.jpg", "ZENI Blind Deboss Hangtag Detail", "aspect-[4/5]", "", "Blind Deboss & Foil")}
                </div>
              </div>
            )}

            {currentProject.id === "scrambler" && (
              <div className="space-y-6 sm:space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                  {renderCard("/assets/projects/house-of-burger/11655360.jpg", "House of Burger Snack & Drink Packaging", "aspect-[4/5]", "", "Snack & Drink Packaging")}
                  {renderCard("/assets/projects/house-of-burger/11660051.jpg", "House of Burger Wrapper Pattern", "aspect-[4/5]", "", "Burger Wrapper Pattern")}
                  {renderCard("/assets/projects/house-of-burger/11661789.jpg", "House of Burger Kraft Delivery Bag", "aspect-[4/5]", "", "Kraft Delivery Bag")}
                </div>
                {renderCard("/assets/projects/house-of-burger/11672300.jpg", "House of Burger Feast Combo Stack", "aspect-[16/9]", "", "Complete Packaging Suite")}
              </div>
            )}

            {currentProject.id === "matchino-fusion-cafe-concept" && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                {renderCard("/assets/projects/matchino/11766648.jpg", "Matchino Whole-Bean Coffee Tins", "aspect-[4/5]", "", "Whole-Bean Tins")}
                {renderCard("/assets/projects/matchino/11766469.jpg", "Matchino Kraft Takeaway Bag", "aspect-[4/5]", "", "Takeaway Carry Bag")}
                {renderCard("/assets/projects/matchino/11767266.jpg", "Matchino Sustainable Drink Carrier", "aspect-[4/5]", "", "Sustainable Carrier")}
              </div>
            )}

            {currentProject.id === "vastukey-ventures-brand-identity" && (
              <div>
                {renderCard("/assets/projects/vastukey/vastukey-cards.jpg", "Vastukey Textured Business Cards", "aspect-[16/9]", "", "Embossed Business Cards")}
              </div>
            )}
          </section>
        )}

        {/* Section: DESIGN & Custom Design Visual Layout */}
        {currentProject.design && (
          <section className="my-16 sm:my-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12 sm:mb-16">
              <div className="lg:col-span-4">
                <h2 className="text-xl sm:text-2xl font-bold font-display uppercase tracking-wider text-white">
                  DESIGN &amp; EXECUTION
                </h2>
              </div>
              <div className="lg:col-span-8 space-y-6 text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
                {currentProject.design.visualElements && (
                  <div className="space-y-2">
                    <p className="text-white font-medium">Visual elements:</p>
                    <ul className="space-y-2 pl-2">
                      {currentProject.design.visualElements.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <span className="text-neutral-500 mt-0.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {currentProject.design.colorPalette && (
                  <div className="space-y-2">
                    <p className="text-white font-medium">Color palette:</p>
                    <ul className="space-y-2 pl-2">
                      {currentProject.design.colorPalette.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <span className="text-neutral-500 mt-0.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {currentProject.design.principlesApplied && (
                  <div className="space-y-2">
                    <p className="text-white font-medium">Principles applied:</p>
                    <ul className="space-y-2 pl-2">
                      {currentProject.design.principlesApplied.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <span className="text-neutral-500 mt-0.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* Custom Visual Layout for Design Section per Project */}
            {currentProject.id === "zeni-luxury-minimal-brand" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {renderCard("/assets/projects/zeni/4.jpg", "ZENI Woven Inner Garment Label", "aspect-[16/11]", "", "Woven Garment Detail")}
                {renderCard("/assets/projects/zeni/8.jpg", "ZENI Selvedge Denim Brand Label", "aspect-[16/11]", "", "Denim Textile Label")}
              </div>
            )}

            {currentProject.id === "scrambler" && (
              <div className="space-y-6 sm:space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                  {renderCard("/assets/projects/house-of-burger/11661752.jpg", "House of Burger Staff Apparel & Cap", "aspect-[4/5]", "", "Staff Uniform & Cap")}
                  {renderCard("/assets/projects/house-of-burger/11660038.jpg", "House of Burger Canvas Tote Bag", "aspect-[4/5]", "", "Canvas Tote Bag & Stickers")}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                  {renderCard("/assets/projects/house-of-burger/11672168.jpg", "House of Burger Thermal Receipts", "aspect-[16/11]", "", "Receipt & Stamp Cards")}
                  {renderCard("/assets/projects/house-of-burger/11672286.jpg", "House of Burger Illustrated Tray Liner", "aspect-[16/11]", "", "Food Tray Liner")}
                </div>
                {renderCard("/assets/projects/house-of-burger/11672291.jpg", "House of Burger Illuminated Neon Storefront", "aspect-[16/9]", "", "Outdoor Neon Signage")}
              </div>
            )}

            {currentProject.id === "matchino-fusion-cafe-concept" && (
              <div className="space-y-6 sm:space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                  {renderCard("/assets/projects/matchino/11766955.jpg", "Matchino Ceramic Latte Art Mug", "aspect-[4/5]", "", "Ceramic Drinkware")}
                  {renderCard("/assets/projects/matchino/11767251.jpg", "Matchino Cedar Wood In-Store Signage", "aspect-[4/5]", "", "In-Store Wood Signage")}
                </div>
                {renderCard("/assets/projects/matchino/11766958.jpg", "Matchino Complete Café Stationery & Coasters", "aspect-[16/9]", "", "Stationery Suite")}
              </div>
            )}

            {currentProject.id === "vastukey-ventures-brand-identity" && (
              <div>
                {renderCard("/assets/projects/vastukey/Vastukey Ventures Final.jpg", "Vastukey Master Corporate Collateral", "aspect-[16/10]", "", "Final Brand Architecture")}
              </div>
            )}
          </section>
        )}

        {/* Full Brand System Index Strip */}
        <section className="my-16 sm:my-24 pt-10 border-t border-white/[0.08]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 gap-3">
            <div className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-[0.2em] text-neutral-400">
              <span className="w-2 h-2 rounded-full bg-white" />
              <span>SYSTEM ARCHIVE // {currentProject.title}</span>
            </div>
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
              {galleryImages.length} ASSETS • CLICK ANY THUMBNAIL TO INSPECT
            </span>
          </div>

          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-none snap-x">
            {galleryImages.map((imgSrc, idx) => (
              <motion.button
                key={idx}
                whileHover={{ y: -3 }}
                onClick={() => openLightbox(idx)}
                className="group relative shrink-0 w-28 sm:w-36 aspect-[4/3] rounded-xl overflow-hidden border border-white/10 hover:border-white/50 bg-neutral-900 transition-all cursor-zoom-in shadow-lg snap-start"
                title={`Inspect Asset ${idx + 1}`}
              >
                <img
                  src={imgSrc}
                  alt={`${currentProject.title} Asset ${idx + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/25 group-hover:bg-transparent transition-colors" />
                <div className="absolute bottom-1.5 left-2 text-[10px] font-mono tracking-widest text-white/90 drop-shadow">
                  {String(idx + 1).padStart(2, '0')}
                </div>
              </motion.button>
            ))}
          </div>
        </section>

        {/* Section: MORE WORKS Banner & Project Strip */}
        <section className="pt-20 sm:pt-28 pb-12 border-t border-white/[0.08]">
          {/* Running Ticker / Heading: MORE WORKS */}
          <div className="py-8 overflow-hidden select-none border-b border-white/[0.08] mb-16">
            <div className="flex w-max animate-marquee space-x-12 items-center">
              {[...Array(6)].map((_, i) => (
                <span key={i} className="font-display font-black text-4xl sm:text-6xl md:text-7xl uppercase tracking-wider text-white shrink-0">
                  MORE WORKS <span className="text-neutral-600 mx-4">•</span>
                </span>
              ))}
            </div>
          </div>

          {/* Cards for other works */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.slice(0, 3).map((proj) => (
              <motion.div
                key={proj.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                onClick={() => onNavigateProject(proj.id)}
                className="group cursor-pointer block"
              >
                <div className="relative aspect-[4/3] w-full rounded-2xl md:rounded-3xl overflow-hidden bg-neutral-900 border border-white/[0.08] group-hover:border-white/30 transition-all duration-500 shadow-lg">
                  <img
                    src={proj.id === 'scrambler' ? '/assets/projects/burger-sign.jpg' : proj.heroImage}
                    alt={proj.title}
                    className="w-full h-full object-cover object-center group-hover:scale-[1.04] transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                </div>

                <div className="flex items-center justify-between pt-5 px-2">
                  {/* Dots */}
                  <div className="flex items-center gap-1.5 text-neutral-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-white" />
                    <span className="w-1.5 h-1.5 rounded-full bg-white" />
                    <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  </div>

                  {/* Title & Category */}
                  <div className="text-center">
                    <h3 className="font-display font-bold text-base sm:text-lg text-white uppercase tracking-wider group-hover:text-neutral-300 transition-colors">
                      {proj.title}
                    </h3>
                    <p className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-neutral-400 mt-0.5">
                      {proj.category}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="text-white group-hover:translate-x-1.5 transition-transform duration-300">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Section: 03 // FAQ (CONCERNS) */}
        <section className="py-20 border-t border-white/[0.08]">
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 mb-16 text-xs font-mono uppercase tracking-widest text-neutral-400">
            <div className="flex items-center gap-2">
              <span className="text-white font-bold">03</span>
            </div>
            <div className="text-neutral-400 font-semibold tracking-widest">
              //FAQ
            </div>
            <div>
              CONCERNS
            </div>
          </div>

          <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div key={index} className="py-6 transition-colors">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between text-left group gap-4 focus:outline-none cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display font-bold text-base md:text-xl text-white group-hover:text-neutral-200 transition-colors uppercase tracking-wide">
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
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="mt-4 text-sm sm:text-base text-neutral-400 font-light leading-relaxed max-w-4xl">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </section>

        {/* Section: LET'S WORK TOGETHER & Giant PRINCE Footer */}
        <section className="pt-24 pb-8 border-t border-white/[0.08]">
          <div className="text-center mb-8">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-[12vw] sm:text-[11vw] lg:text-[10vw] font-black uppercase tracking-tight text-white leading-[0.85] font-display"
            >
              LET'S WORK<br />TOGETHER
            </motion.h2>

            <div className="mt-8 flex justify-center">
              <button
                onClick={() => onOpenContact()}
                className="px-8 py-3 rounded-full border border-white text-xs font-mono uppercase tracking-widest font-semibold text-white hover:bg-white hover:text-black transition-all duration-300 active:scale-95 cursor-pointer shadow-lg"
              >
                CONTACT NOW
              </button>
            </div>
          </div>

          {/* Central Portrait & Location */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center my-16">
            {/* Left Metadata */}
            <div className="md:col-span-3 text-center md:text-right font-display text-xs sm:text-sm uppercase tracking-wider text-neutral-400 space-y-1">
              <p className="text-neutral-300 font-bold">BASED IN UDAIPUR,</p>
              <p className="font-medium text-neutral-400">INDIA</p>
            </div>

            <div className="md:col-span-6 flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="w-64 sm:w-80 aspect-[3/4] rounded-3xl overflow-hidden bg-[#c11c1c] border border-white/10 shadow-2xl relative"
              >
                <img
                  src="/assets/2510.jpg"
                  alt="Prince Singh"
                  className="w-full h-full object-cover object-center filter contrast-110"
                  loading="lazy"
                />
              </motion.div>
            </div>

            {/* Right Metadata */}
            <div className="md:col-span-3 text-center md:text-left font-display text-xs sm:text-sm uppercase tracking-wider text-neutral-400 space-y-1">
              <p className="text-neutral-300 font-bold">VIDEO EDITOR +</p>
              <p className="font-medium text-neutral-400">GRAPHIC DESIGNER</p>
            </div>
          </div>

          {/* Bio Philosophy Banner */}
          <div className="max-w-3xl mx-auto text-center my-10 px-4">
            <p className="text-xs sm:text-sm font-display font-semibold uppercase tracking-wider text-neutral-300 leading-relaxed">
              {personalInfo.philosophy}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-8 sm:gap-16 py-8 text-xs font-mono uppercase tracking-widest text-neutral-400">
            <a
              href="https://instagram.com/princesinghcreates"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors cursor-pointer"
            >
              INSTAGRAM ↗
            </a>
            <a
              href="https://pinterest.com/princesinghcreates"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors cursor-pointer"
            >
              PINTEREST ↗
            </a>
          </div>

          {/* Giant Bottom Wordmark: PRINCE */}
          <div className="py-12 select-none text-center overflow-hidden">
            <h1 className="font-display font-bold text-[20vw] leading-[0.75] tracking-[-0.04em] uppercase text-white">
              PRINCE
            </h1>
          </div>

          {/* Bottom Footer Row */}
          <div className="flex items-center justify-between border-t border-white/[0.08] pt-8 text-xs font-mono uppercase tracking-widest text-neutral-400">
            <div>
              ©2026 PRINCESINGH
            </div>
            <button
              onClick={scrollToTop}
              className="hover:text-white transition-colors cursor-pointer"
            >
              BACK TO TOP ↑
            </button>
          </div>
        </section>

      </main>

      {/* Lightbox Modal for Full Resolution Brand Asset Inspection */}
      <AnimatePresence>
        {lightboxIndex !== null && galleryImages[lightboxIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-8"
          >
            {/* Top Bar */}
            <div
              className="flex items-center justify-between w-full max-w-7xl mx-auto z-10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3">
                <span className="font-display font-bold uppercase tracking-wider text-sm sm:text-base text-white">
                  {currentProject.title}
                </span>
                <span className="text-neutral-500 font-mono">•</span>
                <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                  {String(lightboxIndex + 1).padStart(2, '0')} / {String(galleryImages.length).padStart(2, '0')}
                </span>
              </div>

              <button
                onClick={closeLightbox}
                className="w-10 h-10 rounded-full border border-white/20 hover:border-white bg-neutral-900/80 hover:bg-white hover:text-black text-white flex items-center justify-center transition-all cursor-pointer"
                aria-label="Close Preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Main Image Stage */}
            <div
              className="relative flex-1 flex items-center justify-center w-full max-w-7xl mx-auto my-4 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Prev Button */}
              {galleryImages.length > 1 && (
                <button
                  onClick={prevLightbox}
                  className="absolute left-2 sm:left-4 z-20 w-11 h-11 rounded-full bg-black/70 hover:bg-white hover:text-black border border-white/20 text-white flex items-center justify-center transition-all backdrop-blur-md cursor-pointer"
                  aria-label="Previous Image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
              )}

              {/* The Image */}
              <motion.img
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25 }}
                src={galleryImages[lightboxIndex]}
                alt={`${currentProject.title} Preview ${lightboxIndex + 1}`}
                className="max-h-[82vh] max-w-full object-contain rounded-2xl shadow-2xl select-none"
              />

              {/* Next Button */}
              {galleryImages.length > 1 && (
                <button
                  onClick={nextLightbox}
                  className="absolute right-2 sm:right-4 z-20 w-11 h-11 rounded-full bg-black/70 hover:bg-white hover:text-black border border-white/20 text-white flex items-center justify-center transition-all backdrop-blur-md cursor-pointer"
                  aria-label="Next Image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              )}
            </div>

            {/* Bottom Keyboard Navigation Hint */}
            <div
              className="text-center text-[11px] font-mono uppercase tracking-widest text-neutral-500 z-10"
              onClick={(e) => e.stopPropagation()}
            >
              Press <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-neutral-300">ESC</kbd> to exit • <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-neutral-300">←</kbd> / <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-neutral-300">→</kbd> to navigate
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
