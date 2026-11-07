import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, MessageSquare, Mail, MapPin, CheckCircle2, Calendar, ArrowUpRight } from 'lucide-react';

export default function ContactModal({ isOpen, onClose, defaultService }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: defaultService || 'SaaS UI & Explainer Motion',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Hello Prince,\n\nName: ${formData.name}\nEmail: ${formData.email}\nService: ${formData.service}\nMessage: ${formData.message}`;
    const url = `https://wa.me/918000828880?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-3xl bg-[#0A0B10] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl overflow-hidden z-10 max-h-[90vh] overflow-y-auto text-white"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-blue-400">
              // LET'S COLLABORATE
            </span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white mt-1 font-display">
              Initiate Project Brief
            </h2>
            <p className="text-sm text-neutral-400 mt-2 font-light">
              Direct partnership for SaaS product launches, narrative video editing, and motion design systems.
            </p>
          </div>

          {/* Instant Discovery Call Banner */}
          <div className="mb-8 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-blue-950/40 via-purple-950/20 to-transparent border border-blue-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-center sm:text-left">
              <div className="w-10 h-10 rounded-full bg-blue-500/20 border border-blue-400/40 flex items-center justify-center text-blue-300 shrink-0">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <p className="font-display font-bold text-sm uppercase tracking-wide text-white">
                  Prefer a 15-Min Discovery Call?
                </p>
                <p className="text-xs text-neutral-400 font-light">
                  Skip the form and pick a time directly on my calendar.
                </p>
              </div>
            </div>
            <a
              href="https://cal.com/princesinghcreates"
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap px-5 py-2.5 rounded-full bg-white text-black font-mono text-xs uppercase tracking-wider font-bold hover:bg-neutral-200 transition-all flex items-center gap-1.5 shadow-md active:scale-95"
            >
              <span>Schedule Call</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {submitted ? (
            <div className="py-12 flex flex-col items-center justify-center text-center space-y-5">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-white uppercase tracking-tight">
                Project Brief Prepared!
              </h3>
              <p className="text-sm text-neutral-300 max-w-md font-light leading-relaxed">
                WhatsApp has been launched with your project details. Prince responds directly to all project inquiries within 24 hours.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
                <a
                  href={`https://wa.me/918000828880?text=${encodeURIComponent(`Hello Prince,\n\nName: ${formData.name}\nEmail: ${formData.email}\nService: ${formData.service}\nMessage: ${formData.message}`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-mono text-xs uppercase tracking-wider font-bold transition-all shadow-lg shadow-emerald-500/20"
                >
                  Open WhatsApp ↗
                </a>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-mono text-xs uppercase tracking-wider font-semibold transition-all border border-white/10 cursor-pointer"
                >
                  Edit Message
                </button>
                <button
                  onClick={onClose}
                  className="px-6 py-3 rounded-full bg-white text-black font-mono text-xs uppercase tracking-wider font-bold transition-all cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            
              {/* Form */}
              <form onSubmit={handleSubmit} className="md:col-span-7 space-y-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Vance"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-blue-400 transition-colors text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-blue-400 transition-colors text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                    Service Needed
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#12141F] border border-white/10 text-white focus:outline-none focus:border-blue-400 transition-colors text-sm"
                  >
                    <option value="SaaS UI & Explainer Motion">SaaS UI & Explainer Motion</option>
                    <option value="Narrative & Documentary Video Editing">Narrative & Documentary Video Editing</option>
                    <option value="Short-Form Retention Edits (Reels & Shorts)">Short-Form Retention Edits (Reels & Shorts)</option>
                    <option value="Brand Identity & Visual Systems">Brand Identity & Visual Systems</option>
                    <option value="Packaging Design">Packaging Design</option>
                    <option value="Creator Vault / Custom Motion Rig">Creator Vault / Custom Motion Rig</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                    Message / Project Brief
                  </label>
                  <textarea
                    rows="4"
                    required
                    placeholder="Tell me about your product, timelines, and deliverables..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-blue-400 transition-colors text-sm resize-none"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    type="submit"
                    className="flex-1 py-3.5 rounded-xl bg-blue-500 hover:bg-blue-400 text-white font-mono text-xs uppercase tracking-wider font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-blue-500/25 active:scale-95"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Project Brief</span>
                  </button>
                  <a
                    href="mailto:princesinghcreates@gmail.com"
                    className="py-3.5 px-5 rounded-xl bg-white/[0.05] hover:bg-white/10 text-white border border-white/10 font-mono text-xs uppercase tracking-wider font-semibold transition-all flex items-center justify-center gap-2 text-center"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Email Direct</span>
                  </a>
                </div>
              </form>

              {/* Direct Info */}
              <div className="md:col-span-5 flex flex-col justify-between space-y-6 border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 md:pl-8">
                <div className="space-y-4">
                  <p className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                    Direct Contact
                  </p>

                  <a
                    href="mailto:princesinghcreates@gmail.com"
                    className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-blue-400/30 transition-colors group"
                  >
                    <Mail className="w-5 h-5 text-blue-400" />
                    <div>
                      <p className="text-[11px] font-mono text-neutral-400 uppercase">Email Directly</p>
                      <p className="text-xs font-bold text-white group-hover:text-blue-300 transition-colors">
                        princesinghcreates@gmail.com
                      </p>
                    </div>
                  </a>

                  <a
                    href="https://wa.me/918000828880"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-emerald-400/30 transition-colors group"
                  >
                    <MessageSquare className="w-5 h-5 text-emerald-400" />
                    <div>
                      <p className="text-[11px] font-mono text-neutral-400 uppercase">Quick Chat / WhatsApp</p>
                      <p className="text-xs font-bold text-white group-hover:text-emerald-400 transition-colors">
                        +91 80008 28880
                      </p>
                    </div>
                  </a>

                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                    <MapPin className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[11px] font-mono text-neutral-400 uppercase">Location &amp; Timezone</p>
                      <p className="text-xs text-neutral-300 font-light leading-relaxed">
                        Udaipur, India — Operating Worldwide (UTC+5:30)
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5 space-y-2">
                  <p className="text-[11px] font-mono text-neutral-500 uppercase">
                    Connect Across Networks
                  </p>
                  <div className="flex flex-wrap gap-3 text-xs font-mono uppercase text-neutral-300">
                    <a href="https://linkedin.com/in/princesinghcreates" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors">LinkedIn ↗</a>
                    <a href="https://youtube.com/@PrinceSinghCreates" target="_blank" rel="noreferrer" className="hover:text-red-400 transition-colors">YouTube ↗</a>
                    <a href="https://instagram.com/princesinghcreates" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Instagram ↗</a>
                  </div>
                </div>
              </div>

            </div>
          )}

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
