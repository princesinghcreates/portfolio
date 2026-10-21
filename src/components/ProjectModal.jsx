import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function ProjectModal({ project, onClose, onOpenContact }) {
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow || 'auto';
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-neutral-900 border border-white/15 rounded-3xl shadow-2xl z-10 no-scrollbar"
        >
          {/* Header Bar */}
          <div className="sticky top-0 z-20 flex items-center justify-between p-6 bg-neutral-900/90 backdrop-blur-md border-b border-white/10">
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                CASE STUDY // {project.category}
              </p>
              <h3 className="text-2xl font-black uppercase text-white tracking-tight">
                {project.title}
              </h3>
            </div>

            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center text-white transition-colors"
              aria-label="Close Case Study"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Content */}
          <div className="p-6 sm:p-10 space-y-10">
            
            {/* Hero Image */}
            <div className="rounded-2xl overflow-hidden aspect-[16/9] border border-white/10 bg-black">
              <img
                src={project.heroImage}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Metadata Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 rounded-2xl bg-neutral-950/70 border border-white/[0.08]">
              <div>
                <p className="text-[11px] font-mono text-neutral-400 uppercase">Client</p>
                <p className="text-sm font-bold text-white mt-0.5">{project.client}</p>
              </div>
              <div>
                <p className="text-[11px] font-mono text-neutral-400 uppercase">Year</p>
                <p className="text-sm font-bold text-white mt-0.5">{project.year}</p>
              </div>
              <div>
                <p className="text-[11px] font-mono text-neutral-400 uppercase">Category</p>
                <p className="text-sm font-bold text-white mt-0.5">{project.category}</p>
              </div>
              <div>
                <p className="text-[11px] font-mono text-neutral-400 uppercase">Duration</p>
                <p className="text-sm font-bold text-white mt-0.5">{project.duration}</p>
              </div>
            </div>

            {/* Description & Overview */}
            <div className="space-y-4">
              <h4 className="text-lg font-mono uppercase tracking-wider text-neutral-300">
                Project Overview
              </h4>
              <p className="text-base sm:text-lg text-neutral-300 font-light leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Deliverables List */}
            <div className="space-y-4">
              <h4 className="text-lg font-mono uppercase tracking-wider text-neutral-300">
                Key Deliverables & Scope
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.deliverables.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="text-sm text-neutral-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Project Gallery Images */}
            {project.gallery && project.gallery.length > 0 && (
              <div className="space-y-4">
                <h4 className="text-lg font-mono uppercase tracking-wider text-neutral-300">
                  Visual Assets & Showcase
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.gallery.map((imgSrc, i) => (
                    <div key={i} className="rounded-xl overflow-hidden border border-white/10 bg-neutral-950 aspect-[4/3]">
                      <img
                        src={imgSrc}
                        alt={`${project.title} showcase ${i + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Modal Bottom CTA */}
            <div className="p-8 rounded-2xl bg-neutral-950 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h5 className="text-xl font-bold uppercase text-white">
                  Inspired by this project?
                </h5>
                <p className="text-sm text-neutral-400 mt-1">
                  Let's design a customized visual identity or content campaign for your business.
                </p>
              </div>

              <button
                onClick={() => {
                  onClose();
                  onOpenContact();
                }}
                className="px-6 py-3 rounded-full bg-white text-black font-mono text-xs uppercase tracking-wider font-bold hover:bg-neutral-200 transition-colors shrink-0 flex items-center gap-2"
              >
                <span>Inquire About Similar Work</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
