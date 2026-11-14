import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
  const [count, setCount] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      if (sessionStorage.getItem('ps_preloaded')) {
        setIsLoaded(true);
        return;
      }
    } catch (e) {
      setIsLoaded(true);
      return;
    }

    let current = 0;
    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 15) + 10;
      if (current >= 100) {
        current = 100;
        setCount(100);
        clearInterval(interval);
        setTimeout(() => {
          setIsLoaded(true);
          try {
            sessionStorage.setItem('ps_preloaded', 'true');
          } catch (e) {}
        }, 300);
      } else {
        setCount(current);
      }
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {!isLoaded && (
        <motion.div
          key="preloader-overlay"
          initial={{ opacity: 1 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 bg-[#0a0a0c] flex flex-col justify-between p-8 sm:p-14 select-none pointer-events-none"
        >
          <div className="flex items-center justify-between text-xs font-mono uppercase tracking-widest text-neutral-400">
            <span>PRINCE SINGH</span>
            <span>SENIOR VIDEO EDITOR &amp; MOTION DESIGNER</span>
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="font-display font-black text-7xl sm:text-9xl text-white tracking-tight">
              {count}%
            </div>
            <div className="w-48 sm:w-64 h-1 bg-white/10 rounded-full mt-6 overflow-hidden">
              <motion.div
                className="h-full bg-[#5c59e8]"
                style={{ width: `${count}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-xs font-mono uppercase tracking-widest text-neutral-400">
            <span>PORTFOLIO ARCHIVE</span>
            <span>2026 EDITION</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
