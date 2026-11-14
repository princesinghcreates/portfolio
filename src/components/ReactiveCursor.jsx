import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function ReactiveCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [tag, setTag] = useState('');
  const [isHovering, setIsHovering] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Check if device supports hover
    if (window.matchMedia('(hover: none)').matches) {
      setIsTouch(true);
      return;
    }

    const onMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });

      // Determine contextual cursor label based on hovered target
      const target = e.target.closest('video, button, a, [data-cursor], .harron-card');
      if (target) {
        setIsHovering(true);
        if (target.tagName.toLowerCase() === 'video') {
          setTag('WATCH');
        } else if (target.getAttribute('data-cursor')) {
          setTag(target.getAttribute('data-cursor'));
        } else if (target.closest('#works')) {
          setTag('EXPLORE');
        } else if (target.closest('#corkboard')) {
          setTag('INSPECT');
        } else {
          setTag('');
        }
      } else {
        setIsHovering(false);
        setTag('');
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  if (isTouch) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden select-none">
      <motion.div
        className="fixed top-0 left-0 flex items-center gap-2 pointer-events-none"
        animate={{
          x: pos.x - (isHovering ? 12 : 6),
          y: pos.y - (isHovering ? 12 : 6)
        }}
        transition={{
          type: "spring",
          damping: 28,
          stiffness: 350,
          mass: 0.15
        }}
      >
        {/* Core Cursor Dot */}
        <div
          className={`rounded-full transition-all duration-300 ${
            isHovering
              ? 'w-6 h-6 bg-[#5c59e8]/50 border border-white/60 backdrop-blur-sm'
              : 'w-3 h-3 bg-white shadow-lg'
          }`}
        />

        {/* Contextual Tag Badge */}
        {tag && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8, x: -5 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="px-2.5 py-1 rounded-full bg-[#18181f]/95 border border-white/20 text-[9px] font-mono uppercase tracking-widest text-white shadow-xl backdrop-blur-md"
          >
            {tag}
          </motion.span>
        )}
      </motion.div>
    </div>
  );
}
