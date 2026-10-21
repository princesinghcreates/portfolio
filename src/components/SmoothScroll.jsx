import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

export default function SmoothScroll({ isPaused = false }) {
  const lenisRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    // Initialize Lenis with luxury deceleration curve
    const lenis = new Lenis({
      duration: 1.25, // smooth glide duration
      // easeOutExpo deceleration: fast initial glide then slow, silky deceleration to a soft stop
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.5,
      infinite: false,
    });

    lenisRef.current = lenis;
    window.lenis = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      window.lenis = null;
    };
  }, []);

  // When route changes, immediately reset scroll to top
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    }
  }, [location.pathname]);

  // Pause Lenis when modal overlays (like contact or poster lightbox) are open
  useEffect(() => {
    if (lenisRef.current) {
      if (isPaused) {
        lenisRef.current.stop();
      } else {
        lenisRef.current.start();
      }
    }
  }, [isPaused]);

  return null;
}
