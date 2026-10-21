import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/siteData';

export default function Navbar({ onOpenContact }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Works", href: "#portfolio" },
    { label: "Services", href: "#services" },
    { label: "Experience", href: "#experience" },
    { label: "FAQ", href: "#faq" }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      scrolled 
        ? 'opacity-100 translate-y-0 bg-[#080808]/90 backdrop-blur-md border-b border-white/[0.08] py-3.5 shadow-2xl' 
        : 'opacity-0 -translate-y-full pointer-events-none'
    }`}>
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center p-1.5 transition-transform group-hover:scale-105">
            <img 
              src="/assets/Logo@4x.png" 
              alt="Prince Singh" 
              className="w-full h-full object-contain"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
          </div>
          <span className="font-display font-bold text-sm tracking-wider uppercase text-white group-hover:text-neutral-300 transition-colors">
            Prince Singh
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                if (window.lenis) {
                  window.lenis.scrollTo(link.href, { duration: 1.3 });
                } else {
                  document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="text-xs uppercase tracking-widest text-neutral-400 hover:text-white transition-colors duration-200 font-mono font-medium cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenContact}
            className="group relative inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-mono uppercase tracking-wider font-semibold text-white border border-white hover:bg-white hover:text-black transition-all duration-300 active:scale-95"
          >
            <span>CONTACT NOW</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-neutral-300 hover:text-white focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-white/10 px-6 py-6 transition-all duration-300">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-mono uppercase tracking-wider text-neutral-300 hover:text-white py-1"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
