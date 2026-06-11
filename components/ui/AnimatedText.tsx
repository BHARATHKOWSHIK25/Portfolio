'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AnimatedTextProps {
  texts: string[];
  className?: string;
}

export default function AnimatedText({ texts, className = '' }: AnimatedTextProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % texts.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <div className={`relative overflow-hidden ${className}`} style={{ height: '1.2em' }}>
      <AnimatePresence mode="wait">
        <motion.span
          key={texts[index]}
          initial={{ y: 40, opacity: 0, filter: 'blur(8px)' }}
          animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
          exit={{ y: -40, opacity: 0, filter: 'blur(8px)' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            display: 'block',
            background: 'linear-gradient(135deg, #00E5FF 0%, #FF6B35 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          {texts[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
