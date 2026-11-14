import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, MessageSquare, Calendar, Send, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/siteData';

export default function ConnectSection({ onOpenContact }) {
  const [emailInput, setEmailInput] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const scrollToTop = () => {
    if (typeof window !== 'undefined' && window.lenis) {
      window.lenis.scrollTo(0, { duration: 1.4 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleQuickSubmit = (e) => {
    e.preventDefault();
    if (!emailInput) return;
    const url = `mailto:princesinghcreates@gmail.com?subject=Project%20Inquiry%20from%20${encodeURIComponent(emailInput)}&body=Hi%20Prince,%0D%0A%0D%0AI%20would%20like%20to%20discuss%20a%20video%20editing%20or%20motion%20design%20project.%20Please%20reach%20back%20at%20${encodeURIComponent(emailInput)}.`;
    window.location.href = url;
    setSubscribed(true);
  };

  return (
    <section id="contact" className="pt-24 pb-12 relative bg-[#070709] border-t border-white/[0.08] select-none overflow-hidden">
      
      {/* Background radial gradient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-gradient-to-t from-[#5c59e8]/15 via-[#8B5CF6]/5 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-[1280px] mx-auto px-6 sm:px-10">
        
        {/* Massive Headline */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#5c59e8]/15 border border-[#5c59e8]/30 text-xs font-mono uppercase tracking-widest text-[#a4a2ff]">
            <span className="w-2 h-2 rounded-full bg-[#61c554] live-blink-pulse" />
            <span>ACCEPTING NEW DIRECTING &amp; EDITING BRIEFS</span>
          </div>

          <h2 className="text-[12vw] sm:text-[10vw] font-black uppercase tracking-tight text-white leading-[0.88] font-display">
            LET'S WORK<br />TOGETHER.
          </h2>

          <p className="text-base sm:text-xl text-neutral-400 font-light max-w-2xl mx-auto leading-relaxed pt-2">
            Looking to elevate your product walkthrough, scale your YouTube retention, or ship a high-converting SaaS launch video? Let's connect.
          </p>
        </div>

        {/* Quick Email Connect Input (Harron Style) */}
        <div className="max-w-xl mx-auto mb-16">
          {subscribed ? (
            <div className="p-6 rounded-2xl bg-[#141418] border border-emerald-500/30 text-center space-y-2">
              <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
              <h4 className="font-display font-bold text-lg text-white uppercase">
                Opening Mail Client!
              </h4>
              <p className="text-xs text-neutral-400">
                Email prepared for princesinghcreates@gmail.com.
              </p>
            </div>
          ) : (
            <form onSubmit={handleQuickSubmit} className="relative flex items-center">
              <input
                type="email"
                required
                placeholder="Enter your email to connect..."
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                className="w-full pl-5 pr-36 py-4 rounded-full bg-[#141418] border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-[#5c59e8] text-sm font-mono shadow-2xl transition-all"
              />
              <button
                type="submit"
                className="absolute right-1.5 top-1.5 bottom-1.5 px-6 rounded-full bg-[#5c59e8] hover:bg-[#4d4ac7] text-white font-mono text-xs uppercase tracking-wider font-semibold transition-all shadow-md active:scale-95 cursor-pointer flex items-center gap-1.5"
              >
                <span>Send it</span>
                <Send className="w-3 h-3" />
              </button>
            </form>
          )}
        </div>

        {/* 3 Contact Quick-Link Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          
          {/* Card 1: 15-Min Discovery Call */}
          <a
            href="https://cal.com/princesinghcreates"
            target="_blank"
            rel="noopener noreferrer"
            className="harron-card p-6 flex flex-col justify-between group"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#5c59e8]/20 border border-[#5c59e8]/40 flex items-center justify-center text-[#a4a2ff]">
                <Calendar className="w-5 h-5" />
              </div>
              <h4 className="font-display font-bold text-lg text-white uppercase tracking-wide group-hover:text-[#a4a2ff] transition-colors">
                Book Discovery Call
              </h4>
              <p className="text-xs text-neutral-400 font-light leading-relaxed">
                Schedule a 15-minute scoping call directly on my calendar.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-neutral-300">
              <span>Cal.com Scheduling</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </a>

          {/* Card 2: WhatsApp Quick Chat */}
          <a
            href="https://wa.me/918000828880"
            target="_blank"
            rel="noopener noreferrer"
            className="harron-card p-6 flex flex-col justify-between group"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h4 className="font-display font-bold text-lg text-white uppercase tracking-wide group-hover:text-emerald-300 transition-colors">
                WhatsApp Quick Chat
              </h4>
              <p className="text-xs text-neutral-400 font-light leading-relaxed">
                Direct mobile line for urgent briefs and quick project questions.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-neutral-300">
              <span>+91 80008 28880</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </a>

          {/* Card 3: Direct Email */}
          <a
            href="mailto:princesinghcreates@gmail.com"
            className="harron-card p-6 flex flex-col justify-between group"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#00F0FF]/20 border border-[#00F0FF]/40 flex items-center justify-center text-[#00F0FF]">
                <Mail className="w-5 h-5" />
              </div>
              <h4 className="font-display font-bold text-lg text-white uppercase tracking-wide group-hover:text-[#00F0FF] transition-colors">
                Direct Email Inquiry
              </h4>
              <p className="text-xs text-neutral-400 font-light leading-relaxed">
                Detailed briefs, NDA requests, and RFP submissions.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-neutral-300">
              <span>princesinghcreates@gmail.com</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </a>

        </div>

        {/* Social Links Row */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 py-6 border-y border-white/[0.08] text-xs font-mono uppercase tracking-widest text-neutral-400">
          {personalInfo.socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors cursor-pointer"
            >
              {social.name} ↗
            </a>
          ))}
        </div>

        {/* Giant Bottom Wordmark: PRINCE SINGH */}
        <div className="py-12 select-none text-center overflow-hidden">
          <h1 className="font-display font-bold text-[17vw] leading-[0.75] tracking-[-0.04em] uppercase text-white/90">
            PRINCE SINGH
          </h1>
        </div>

        {/* Bottom Footer Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/[0.08] pt-8 text-xs font-mono uppercase tracking-widest text-neutral-500">
          <div>
            © 2026 PRINCE SINGH • SENIOR VIDEO EDITOR & MOTION DESIGNER
          </div>
          <button
            onClick={scrollToTop}
            className="hover:text-white transition-colors cursor-pointer"
          >
            BACK TO TOP ↑
          </button>
        </div>

      </div>
    </section>
  );
}
