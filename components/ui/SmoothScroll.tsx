'use client';
import { useEffect } from 'react';

export default function SmoothScroll() {
  useEffect(() => {
    let lenis: any;
    let rafId: number;

    const init = async () => {
      const LenisModule = await import('@studio-freight/lenis');
      const Lenis = LenisModule.default;

      lenis = new Lenis({
        // Ultra-smooth feel: slightly longer duration + buttery expo ease
        duration: 1.4,
        easing: (t: number) => 1 - Math.pow(1 - t, 4), // easeOutQuart — heavy decel
        smoothWheel: true,
        wheelMultiplier: 0.9,   // slightly subdued so it feels controlled
        touchMultiplier: 1.8,   // responsive on touch
        infinite: false,
        orientation: 'vertical',
        gestureOrientation: 'vertical',
      });

      // Expose lenis to window so framer-motion scroll hooks stay in sync
      (window as any).__lenis = lenis;

      const raf = (time: number) => {
        lenis.raf(time);
        rafId = requestAnimationFrame(raf);
      };
      rafId = requestAnimationFrame(raf);
    };

    init();

    return () => {
      cancelAnimationFrame(rafId);
      if (lenis) lenis.destroy();
      delete (window as any).__lenis;
    };
  }, []);

  return null;
}
