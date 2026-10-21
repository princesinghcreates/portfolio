import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';
import { personalInfo } from '../data/siteData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-white/[0.08] bg-[#070707] text-neutral-400 text-xs font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/[0.06]">
          
          {/* Brand & Signature */}
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center p-1.5">
              <img
                src="/assets/Logo@4x.png"
                alt="Prince Singh"
                className="w-full h-full object-contain"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
            </div>
            <div>
              <p className="text-sm font-bold text-white uppercase tracking-wider">Prince Singh</p>
              <p className="text-[11px] text-neutral-500">Video Editor + Graphic Designer</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6 uppercase tracking-wider">
            {personalInfo.socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
              >
                {social.name}
              </a>
            ))}
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] hover:bg-white/[0.1] border border-white/[0.08] text-white hover:text-white transition-all cursor-pointer group"
          >
            <span>Back To Top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Copyright & Tagline */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-neutral-500 text-[11px]">
          <p>© 2026 PrinceSingh. All Rights Reserved.</p>
          <p className="flex items-center gap-1.5 flex-wrap justify-center">
            <span>Designed & Crafted for Impact</span>
            <span>•</span>
            <span>Udaipur, India</span>
            <span>•</span>
            <span className="font-mono text-neutral-400">24.58584° N, 73.71346° E</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
