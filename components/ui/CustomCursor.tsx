'use client';

import { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isKeyboard, setIsKeyboard] = useState(false);
  const pos = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      if (cursorRef.current && dotRef.current) {
        cursorRef.current.style.transform = `translate(${pos.current.x - 20}px, ${pos.current.y - 20}px)`;
        dotRef.current.style.transform = `translate(${pos.current.x - 3}px, ${pos.current.y - 3}px)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);

    const onEnter = () => setIsHovering(true);
    const onLeave = () => setIsHovering(false);
    const onDown = () => setIsClicking(true);
    const onUp = () => setIsClicking(false);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        setIsKeyboard(true);
        document.body.classList.add('keyboard-navigation');
      }
    };

    const handleMouseMove = () => {
      setIsKeyboard(false);
      document.body.classList.remove('keyboard-navigation');
    };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mousedown', onDown);
    document.addEventListener('mouseup', onUp);
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('mousemove', handleMouseMove);

    const hoverEls = document.querySelectorAll('a, button, [data-cursor-hover]');
    hoverEls.forEach(el => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    const observer = new MutationObserver(() => {
      const newHoverEls = document.querySelectorAll('a, button, [data-cursor-hover]');
      newHoverEls.forEach(el => {
        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mouseleave', onLeave);
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      cancelAnimationFrame(rafRef.current);
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('mouseup', onUp);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
    };
  }, []);

  if (isKeyboard) return null;

  return (
    <>
      {/* Outer ring */}
      <div
        ref={cursorRef}
        className="custom-cursor"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 40,
          height: 40,
          borderRadius: '50%',
          border: `1.5px solid ${isHovering ? '#00E5FF' : 'rgba(245,245,245,0.5)'}`,
          backgroundColor: isHovering ? 'rgba(0,229,255,0.08)' : 'transparent',
          transform: 'translate(-50%, -50%)',
          transition: 'border-color 0.2s ease, background-color 0.2s ease, width 0.2s ease, height 0.2s ease',
          pointerEvents: 'none',
          zIndex: 99999,
          scale: isClicking ? '0.85' : isHovering ? '1.5' : '1',
        }}
      />
      {/* Inner dot */}
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 6,
          height: 6,
          borderRadius: '50%',
          backgroundColor: isHovering ? '#00E5FF' : '#F5F5F5',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          zIndex: 99999,
          transition: 'background-color 0.2s ease',
        }}
      />
    </>
  );
}
