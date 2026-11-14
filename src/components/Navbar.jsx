import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, ArrowDown } from 'lucide-react';

export default function Navbar({ onOpenContact }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "Works", href: "#works" },
    { label: "Practice", href: "#practice" },
    { label: "Process", href: "#process" },
    { label: "About", href: "#about" },
    { label: "Corkboard", href: "#corkboard" },
    { label: "FAQ", href: "#faq" }
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (location.pathname !== '/') {
      navigate('/' + href);
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          if (window.lenis) {
            window.lenis.scrollTo(href, { offset: -80, duration: 1.2 });
          } else {
            const y = element.getBoundingClientRect().top + window.pageYOffset - 80;
            window.scrollTo({ top: y, behavior: 'smooth' });
          }
        }
      }, 150);
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      if (window.lenis) {
        window.lenis.scrollTo(href, { offset: -80, duration: 1.2 });
      } else {
        const y = element.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="sticky top-0 z-40 px-4 sm:px-6 py-2.5 transition-all duration-300">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex items-center justify-between px-4 sm:px-6 py-2.5 rounded-full bg-[#141418]/90 backdrop-blur-xl border border-white/[0.1] shadow-2xl">
          
          {/* Brand Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-3 group select-none"
          >
            <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center p-1.5 transition-transform group-hover:scale-105">
              <img
                src="/assets/Logo@4x.png"
                alt="Prince Singh"
                className="w-full h-full object-contain"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
            </div>
            <span className="font-display font-bold text-sm tracking-wide uppercase text-white group-hover:text-neutral-300 transition-colors">
              Prince Singh
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-xs uppercase tracking-widest text-neutral-400 hover:text-white transition-colors duration-200 font-mono font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Resume Button */}
            <a
              href="mailto:princesinghcreates@gmail.com?subject=Inquiry%20-%20Prince%20Singh%20Resume%20Request"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/[0.05] hover:bg-white/10 border border-white/10 text-xs font-mono uppercase tracking-wider text-neutral-300 hover:text-white transition-all cursor-pointer"
            >
              <span>Resume</span>
              <ArrowDown className="w-3 h-3" />
            </a>

            {/* Harron-Style Primary CTA Button */}
            <button
              onClick={onOpenContact}
              className="harron-btn-primary group"
            >
              <span className="text-xs">LET'S TALK</span>
              <div className="w-7 h-7 rounded-full bg-white text-black flex items-center justify-center transition-transform group-hover:scale-110 group-hover:rotate-45">
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </div>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-neutral-300 hover:text-white focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden max-w-[1280px] mx-auto mt-2 rounded-2xl bg-[#141418]/95 backdrop-blur-2xl border border-white/10 p-6 shadow-2xl">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm uppercase tracking-widest text-neutral-300 hover:text-white font-mono py-1 border-b border-white/[0.05]"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full py-3 rounded-full bg-[#5c59e8] text-white font-mono text-xs uppercase tracking-wider font-semibold text-center"
              >
                Book Discovery Call
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
