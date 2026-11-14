import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Download, ExternalLink, Sparkles, Box, Code2, Film, Layers, CheckCircle2 } from 'lucide-react';
import { creatorVaultAssets } from '../data/siteData';

export default function CreatorVaultSection({ onOpenContact }) {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section id="vault" className="py-20 md:py-32 border-t border-white/[0.08] relative bg-[#050507] text-white">
      {/* Ambient gradient aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-cyan-500/10 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10">
        
        {/* Section Marker */}
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 mb-14 text-xs font-mono uppercase tracking-widest text-neutral-400">
          <div className="flex items-center gap-2">
            <span className="text-white font-bold">03</span>
            <span className="text-blue-400 font-bold">//</span>
            <span className="text-neutral-300 font-semibold tracking-widest">CREATOR VAULT</span>
          </div>
          <div className="text-blue-400 font-mono text-[11px] hidden sm:block">
            PRODUCTION-READY MOTION ASSETS &amp; RIGS
          </div>
          <div className="text-neutral-400">
            AFTER EFFECTS TOOLS
          </div>
        </div>

        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-[11px] font-mono uppercase tracking-widest text-blue-300 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#5c59e8]" />
              <span>COMMERCIAL SOURCE FILES &amp; PRESETS</span>
            </div>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-[0.9] font-display">
              CREATOR<br />VAULT
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
              Production-ready motion rigs, After Effects source files, and expression toolkits built for video editors, motion designers, and SaaS product teams looking to ship high-retention visuals and seamless motion.
            </p>
          </div>
        </div>

        {/* 3-Column Asset Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {creatorVaultAssets.map((asset) => (
            <motion.div
              key={asset.id}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              onMouseEnter={() => setHoveredCard(asset.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group rounded-2xl md:rounded-3xl bg-[#0A0B10] border border-white/[0.08] hover:border-blue-500/50 transition-all duration-500 overflow-hidden flex flex-col justify-between shadow-2xl relative"
            >
              {/* Top Specular Glow Accent */}
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div>
                {/* 16:9 Video Preview on Hover */}
                <div className="aspect-[16/9] w-full overflow-hidden bg-black relative">
                  <img
                    src={asset.poster}
                    alt={asset.title}
                    className={`w-full h-full object-cover object-center transition-opacity duration-300 ${
                      hoveredCard === asset.id ? 'opacity-0' : 'opacity-100'
                    }`}
                    loading="lazy"
                  />
                  <video
                    src={asset.preview}
                    autoPlay={hoveredCard === asset.id}
                    loop
                    muted
                    playsInline
                    className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-300 ${
                      hoveredCard === asset.id ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                  
                  {/* Category Pill Tag */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[10px] font-mono uppercase tracking-widest text-neutral-300">
                    {asset.category}
                  </div>

                  {/* Price Tag */}
                  <div className="absolute top-4 right-4 px-3.5 py-1 rounded-full bg-blue-500/20 backdrop-blur-md border border-blue-400/40 text-xs font-mono font-bold text-white shadow-lg">
                    {asset.price}
                  </div>
                </div>

                {/* Content Block */}
                <div className="p-6 sm:p-7 space-y-4">
                  <div className="space-y-1">
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-white uppercase tracking-wide group-hover:text-blue-300 transition-colors">
                      {asset.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                      {asset.subtitle}
                    </p>
                  </div>

                  {/* Compatibility Pill */}
                  <div className="pt-2 flex items-center gap-2 text-[11px] font-mono text-neutral-400 border-t border-white/[0.06]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span>{asset.compatibility}</span>
                  </div>
                </div>
              </div>

              {/* Action Footer */}
              <div className="p-6 sm:p-7 pt-0">
                <a
                  href={asset.gumroadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-full bg-white/[0.06] hover:bg-white text-white hover:text-black border border-white/10 hover:border-white font-mono text-xs uppercase tracking-wider font-semibold transition-all duration-300 flex items-center justify-center gap-2 active:scale-95 cursor-pointer shadow-md"
                >
                  <span>GET ON GUMROAD</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom Preset / Enterprise Rig Banner */}
        <div className="rounded-2xl md:rounded-3xl p-8 sm:p-10 bg-gradient-to-r from-blue-950/30 via-[#0A0B10] to-purple-950/20 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="font-display font-bold text-xl sm:text-2xl text-white uppercase tracking-wide">
              Need a Bespoke Motion System or Custom AE Script?
            </h4>
            <p className="text-xs sm:text-sm text-neutral-400 font-light max-w-2xl">
              I build custom After Effects automation scripts, reusable team motion design kits, and high-performance component rigs tailored to your brand's unique design token language.
            </p>
          </div>
          <button
            onClick={onOpenContact}
            className="whitespace-nowrap px-8 py-3.5 rounded-full bg-blue-500 hover:bg-blue-400 text-white font-mono text-xs uppercase tracking-wider font-bold transition-all active:scale-95 cursor-pointer shadow-lg shadow-blue-500/25 shrink-0"
          >
            REQUEST CUSTOM RIG
          </button>
        </div>

      </div>
    </section>
  );
}
