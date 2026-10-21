import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import { postersGallery } from '../data/siteData';

export default function PostersModal({ isOpen, onClose }) {
  const [selectedPoster, setSelectedPoster] = useState(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (selectedPoster) {
          setSelectedPoster(null);
        } else {
          onClose();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow || 'auto';
    };
  }, [isOpen, selectedPoster, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/90 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto bg-neutral-900 border border-white/15 rounded-3xl shadow-2xl z-10 no-scrollbar"
        >
          {/* Header */}
          <div className="sticky top-0 z-20 flex items-center justify-between p-6 bg-neutral-900/90 backdrop-blur-md border-b border-white/10">
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                GALLERY // 2018 - 2026
              </p>
              <h3 className="text-2xl font-black uppercase text-white tracking-tight">
                Poster & Visual Arts Showcase
              </h3>
            </div>

            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center text-white transition-colors"
              aria-label="Close Poster Gallery"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Posters Grid */}
          <div className="p-6 sm:p-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {postersGallery.map((poster) => (
                <div
                  key={poster.id}
                  onClick={() => setSelectedPoster(poster)}
                  className="group relative rounded-2xl overflow-hidden bg-neutral-950 border border-white/10 hover:border-white/30 transition-all duration-300 cursor-pointer aspect-[3/4] flex flex-col justify-end"
                >
                  <img
                    src={poster.image}
                    alt={poster.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                  <div className="relative z-10 p-4">
                    <span className="text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded bg-white/10 text-white backdrop-blur-md">
                      {poster.tag}
                    </span>
                    <h4 className="text-sm font-bold text-white uppercase mt-1 tracking-wide">
                      {poster.title}
                    </h4>
                  </div>

                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-white">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Lightbox Preview if a specific poster is clicked */}
        {selectedPoster && (
          <div
            className="fixed inset-0 z-60 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedPoster(null)}
          >
            <button
              onClick={() => setSelectedPoster(null)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="max-w-4xl max-h-[85vh] relative select-none" onClick={(e) => e.stopPropagation()}>
              <div className="relative">
                <img
                  src={selectedPoster.image}
                  alt={selectedPoster.title}
                  draggable="false"
                  onContextMenu={(e) => e.preventDefault()}
                  className="max-h-[80vh] w-auto rounded-2xl object-contain border border-white/20 shadow-2xl mx-auto select-none pointer-events-none"
                />
                {/* Transparent protective shield */}
                <div className="absolute inset-0 pointer-events-auto cursor-default" onContextMenu={(e) => e.preventDefault()} />
              </div>
              <div className="text-center mt-4">
                <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                  {selectedPoster.tag}
                </span>
                <p className="text-lg font-bold text-white uppercase tracking-wider">
                  {selectedPoster.title}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </AnimatePresence>
  );
}
