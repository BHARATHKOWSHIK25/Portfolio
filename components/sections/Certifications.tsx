'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Code, Layers, Brain, Zap, Award, X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
import { certifications } from '@/lib/data';

const iconMap: Record<string, React.ReactNode> = {
  Cpu: <Cpu size={20} />,
  Code: <Code size={20} />,
  Layers: <Layers size={20} />,
  Brain: <Brain size={20} />,
  Zap: <Zap size={20} />,
  Award: <Award size={20} />,
};

export default function Certifications() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const prev = () => setLightboxIndex((i) => (i !== null ? (i - 1 + certifications.length) % certifications.length : null));
  const next = () => setLightboxIndex((i) => (i !== null ? (i + 1) % certifications.length : null));

  const current = lightboxIndex !== null ? certifications[lightboxIndex] : null;

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightboxIndex]);

  return (
    <section
      id="certifications"
      className="relative z-10 -mt-10 sm:-mt-12 md:-mt-14 w-full rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] overflow-hidden"
      style={{ padding: '8rem 0', background: '#111114' }}
    >
      <div className="section-container">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '3.5rem', textAlign: 'center' }}
        >
          <p style={{
            color: 'var(--accent)',
            fontSize: '0.85rem',
            fontWeight: 600,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            marginBottom: '0.75rem',
          }}>
            Credentials
          </p>
          <h2 className="section-heading" style={{ marginBottom: '0.75rem' }}>
            Certifications
          </h2>
          <p className="section-subheading">
            Click any certificate to view the full image.
          </p>
        </motion.div>

        {/* ── Certificate Grid ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '1.5rem',
        }}>
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -4, boxShadow: `0 12px 40px ${cert.color}25` }}
              onClick={() => openLightbox(i)}
              className="card noise"
              style={{ cursor: 'pointer', overflow: 'hidden', padding: 0 }}
            >
              {/* Certificate image preview */}
              <div style={{ position: 'relative', width: '100%', height: '180px', overflow: 'hidden' }}>
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center top', transition: 'transform 0.4s ease' }}
                  sizes="(max-width: 768px) 100vw, 350px"
                  className="cert-img"
                />
                {/* Overlay on hover */}
                <div style={{
                  position: 'absolute', inset: 0,
                  background: `linear-gradient(to bottom, transparent 40%, rgba(10,10,10,0.85) 100%)`,
                }} />
                {/* Zoom icon */}
                <div style={{
                  position: 'absolute', top: '50%', left: '50%',
                  transform: 'translate(-50%, -50%)',
                  background: 'rgba(0,0,0,0.5)',
                  backdropFilter: 'blur(8px)',
                  border: `1px solid ${cert.color}50`,
                  borderRadius: '50%',
                  width: 44, height: 44,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: cert.color,
                  opacity: 0,
                  transition: 'opacity 0.25s ease',
                }} className="cert-zoom">
                  <ZoomIn size={18} />
                </div>
              </div>

              {/* Card info */}
              <div style={{ padding: '1rem 1.25rem', display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                <div style={{
                  width: 40, height: 40, borderRadius: 10, flexShrink: 0,
                  background: `${cert.color}15`,
                  border: `1px solid ${cert.color}30`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: cert.color,
                }}>
                  {iconMap[cert.icon]}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <h3 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.92rem', fontWeight: 700,
                    color: 'var(--text-primary)',
                    marginBottom: '0.2rem',
                    whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
                  }}>
                    {cert.title}
                  </h3>
                  <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                    {cert.issuer} &nbsp;·&nbsp;
                    <span style={{ color: cert.color, fontWeight: 600 }}>{cert.year}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Lightbox Modal ── */}
      <AnimatePresence>
        {lightboxIndex !== null && current && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={closeLightbox}
            style={{
              position: 'fixed', inset: 0, zIndex: 1000,
              background: 'rgba(5,5,5,0.92)',
              backdropFilter: 'blur(16px)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: '2rem',
            }}
          >
            {/* Modal content — stop propagation so clicking image doesn't close */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.88, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.88, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              style={{
                position: 'relative',
                maxWidth: '900px',
                width: '100%',
                borderRadius: '16px',
                overflow: 'hidden',
                border: `1px solid ${current.color}40`,
                boxShadow: `0 32px 80px rgba(0,0,0,0.7), 0 0 40px ${current.color}20`,
              }}
            >
              {/* Certificate image */}
              <div style={{ position: 'relative', width: '100%', aspectRatio: '16/10', background: '#0a0a0a' }}>
                <Image
                  src={current.image}
                  alt={current.title}
                  fill
                  style={{ objectFit: 'contain' }}
                  sizes="900px"
                  priority
                />
                {/* Close button pinned to top-right of the image */}
                <button
                  onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
                  title="Close (Esc)"
                  style={{
                    position: 'absolute', top: '0.75rem', right: '0.75rem',
                    width: 36, height: 36, borderRadius: '50%',
                    background: 'rgba(0,0,0,0.65)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    color: 'white',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    cursor: 'pointer', zIndex: 10,
                    backdropFilter: 'blur(6px)',
                    transition: 'background 0.2s',
                  }}
                >
                  <X size={16} />
                </button>
              </div>

              {/* Info bar */}
              <div style={{
                padding: '1rem 1.5rem',
                background: 'rgba(12,12,12,0.95)',
                backdropFilter: 'blur(12px)',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                borderTop: `1px solid ${current.color}25`,
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: 8,
                    background: `${current.color}15`,
                    border: `1px solid ${current.color}30`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: current.color,
                  }}>
                    {iconMap[current.icon]}
                  </div>
                  <div>
                    <p style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}>
                      {current.title}
                    </p>
                    <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                      {current.issuer} · <span style={{ color: current.color }}>{current.year}</span>
                    </p>
                  </div>
                </div>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                  {lightboxIndex + 1} / {certifications.length}
                </span>
              </div>
            </motion.div>

            {/* Close button */}
            <button
              onClick={closeLightbox}
              style={{
                position: 'fixed', top: '1.25rem', right: '1.25rem',
                width: 42, height: 42, borderRadius: '50%',
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.15)',
                color: 'rgba(255,255,255,0.8)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', zIndex: 1001,
                transition: 'all 0.2s ease',
              }}
            >
              <X size={18} />
            </button>

            {/* Prev button */}
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              style={{
                position: 'fixed', left: '1rem', top: '50%', transform: 'translateY(-50%)',
                width: 44, height: 44, borderRadius: '50%',
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.15)',
                color: 'rgba(255,255,255,0.8)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', zIndex: 1001,
              }}
            >
              <ChevronLeft size={20} />
            </button>

            {/* Next button */}
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              style={{
                position: 'fixed', right: '1rem', top: '50%', transform: 'translateY(-50%)',
                width: 44, height: 44, borderRadius: '50%',
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.15)',
                color: 'rgba(255,255,255,0.8)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', zIndex: 1001,
              }}
            >
              <ChevronRight size={20} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Hover CSS ── */}
      <style>{`
        .cert-img { transition: transform 0.4s ease; }
        .card:hover .cert-img { transform: scale(1.05); }
        .card:hover .cert-zoom { opacity: 1 !important; }
      `}</style>
    </section>
  );
}
