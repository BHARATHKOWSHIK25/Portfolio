'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Eye, Sparkles, X, ExternalLink, Film, Star } from 'lucide-react';
import { creativeItems } from '@/lib/data';

const tabs = ['All', 'Video Edits', 'Short Film', 'Banner Design', 'Websites'];

function CreativeCard({ item, onClick, index }: { item: any; onClick: () => void; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (item.type === 'video' && videoRef.current) {
      if (isHovered) {
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  }, [isHovered, item.type]);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ delay: index * 0.08 }}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
      className="card noise"
      style={{ overflow: 'hidden', cursor: 'pointer', position: 'relative' }}
    >
      <div
        style={{
          height: 200,
          background: `linear-gradient(135deg, rgba(0,229,255,0.1), rgba(255,107,53,0.1))`,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {item.type === 'video' ? (
          <>
            <video
              ref={videoRef}
              src={item.videoUrl}
              muted
              loop
              playsInline
              preload="metadata"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                opacity: isHovered ? 1 : 0.6,
                transition: 'opacity 0.3s ease',
              }}
            />
            {!isHovered && (
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'rgba(0,0,0,0.3)',
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: '50%',
                    background: 'rgba(0,0,0,0.6)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Play size={20} style={{ color: 'white', marginLeft: 2 }} />
                </div>
              </div>
            )}
          </>
        ) : (
          <div
            style={{
              width: '100%',
              height: '100%',
              backgroundImage: `url(${item.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              position: 'relative',
            }}
          >
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'rgba(0,0,0,0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: '50%',
                  background: 'rgba(0,0,0,0.6)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {item.type === 'website' || item.type === 'shortfilm' ? (
                  <ExternalLink size={20} style={{ color: 'white' }} />
                ) : (
                  <Eye size={20} style={{ color: 'white' }} />
                )}
              </div>
            </div>
          </div>
        )}
        <span
          style={{
            position: 'absolute',
            top: '0.75rem',
            right: '0.75rem',
            background: 'rgba(12,12,12,0.8)',
            border: '1px solid var(--border)',
            borderRadius: '100px',
            padding: '0.25rem 0.65rem',
            fontSize: '0.72rem',
            color: 'var(--text-secondary)',
            zIndex: 2,
          }}
        >
          {item.category}
        </span>
      </div>
      <div style={{ padding: '1.25rem' }}>
        <h4
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 600,
            fontSize: '1rem',
            color: 'var(--text-primary)',
            marginBottom: '0.5rem',
          }}
        >
          {item.title}
        </h4>
        <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
          {item.tags.map((tag: string) => (
            <span className="badge" key={tag} style={{ fontSize: '0.72rem' }}>{tag}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// ── Special highlighted Short Film Card ──────────────────────────────────────
function ShortFilmHighlight() {
  return (
    <motion.a
      href="https://the-beginning-frame-founders.netlify.app/"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.015 }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '20px',
        overflow: 'hidden',
        border: '1px solid var(--border)',
        background: 'var(--surface)',
        textDecoration: 'none',
        cursor: 'pointer',
        position: 'relative',
        marginBottom: '2.5rem',
      }}
      className="noise"
    >

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        minHeight: 280,
        position: 'relative',
      }} className="shortfilm-grid">
        {/* Left: Info */}
        <div style={{
          padding: '2.5rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: '1rem',
        }}>
          {/* Badge */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: '0.4rem',
              background: 'rgba(255,107,53,0.15)',
              border: '1px solid rgba(255,107,53,0.4)',
              borderRadius: '100px',
              padding: '0.3rem 0.8rem',
            }}>
              <Star size={12} style={{ color: '#FF6B35', fill: '#FF6B35' }} />
              <span style={{ fontSize: '0.72rem', color: '#FF6B35', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                College Short Film Contest
              </span>
            </div>
          </div>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
              <Film size={22} style={{ color: '#FF6B35' }} />
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.7rem',
                fontWeight: 800,
                color: 'var(--text-primary)',
                lineHeight: 1.15,
              }}>
                The Beginning
              </h3>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
              A short film I edited for the college Short Film Contest — cinematography, story, and post-production all in one. Click to visit the official film site.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
            {['Short Film', 'Contest Entry', 'Editor', 'Director', 'Cine Core'].map(tag => (
              <span key={tag} className="badge" style={{ fontSize: '0.72rem', borderColor: 'rgba(255,107,53,0.3)', color: '#FF6B35' }}>{tag}</span>
            ))}
          </div>

          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            background: 'linear-gradient(135deg, #FF6B35, #FF3EAA)',
            color: 'white',
            padding: '0.6rem 1.4rem',
            borderRadius: '100px',
            fontSize: '0.85rem',
            fontWeight: 700,
            width: 'fit-content',
            boxShadow: '0 4px 20px rgba(255,107,53,0.4)',
          }}>
            <ExternalLink size={14} />
            Watch the Film
          </div>
        </div>

        {/* Right: Film poster */}
        <div style={{
          backgroundImage: `url(/creative/the-beginning-poster.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: 280,
          position: 'relative',
        }}>
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to right, rgba(12,12,12,0.4) 0%, transparent 50%)',
          }} />
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .shortfilm-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </motion.a>
  );
}

// ── Main Creative Section ────────────────────────────────────────────────────
export default function Creative() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedMedia, setSelectedMedia] = useState<{ type: string; url: string; title: string } | null>(null);

  // Filter out the shortfilm from the grid — it has its own highlight
  const filtered = (activeFilter === 'All'
    ? creativeItems.filter(item => item.type !== 'shortfilm')
    : activeFilter === 'Short Film'
    ? creativeItems.filter(item => item.type === 'shortfilm')
    : creativeItems.filter(item => item.category === activeFilter && item.type !== 'shortfilm'));

  // ESC key closes the overlay
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedMedia(null);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  const handleCardClick = (item: any) => {
    // For shortfilm / website type — open external link
    if (item.type === 'shortfilm' || item.type === 'website') {
      window.open(item.websiteUrl, '_blank', 'noopener,noreferrer');
      return;
    }
    setSelectedMedia({
      type: item.type,
      url: item.type === 'video' ? (item.videoUrl || '') : (item.image || ''),
      title: item.title,
    });
  };

  return (
    <section
      id="creative"
      className="relative z-10 -mt-10 sm:-mt-12 md:-mt-14 w-full rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] overflow-hidden"
      style={{ padding: '8rem 0', background: '#0C0C0C' }}
    >
      <div className="section-container">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '3.5rem' }}
        >
          <p
            style={{
              color: 'var(--accent-secondary)',
              fontSize: '0.85rem',
              fontWeight: 600,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              marginBottom: '0.75rem',
            }}
          >
            Creative Work
          </p>
          <h2 className="section-heading" style={{ marginBottom: '0.75rem' }}>
            Beyond Code
          </h2>
          <p className="section-subheading">
            Cinematic edits, event banners, and digital experiences.
          </p>
        </motion.div>

        {/* ── Short Film Highlight (always visible) ── */}
        <ShortFilmHighlight />

        {/* Filter Tabs */}
        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              style={{
                padding: '0.45rem 1.1rem',
                borderRadius: '100px',
                border: activeFilter === tab
                  ? '1px solid rgba(255,107,53,0.5)'
                  : '1px solid var(--border)',
                background: activeFilter === tab
                  ? 'rgba(255,107,53,0.1)'
                  : 'var(--surface)',
                color: activeFilter === tab ? '#FF6B35' : 'var(--text-secondary)',
                fontSize: '0.85rem',
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Creative Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
          }}
        >
          <AnimatePresence>
            {activeFilter === 'Short Film' ? (
              // Show a link card for the short film in the grid when that tab is active
              <motion.a
                key="shortfilm-card"
                href="https://the-beginning-frame-founders.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="card noise"
                style={{ overflow: 'hidden', cursor: 'pointer', position: 'relative', textDecoration: 'none' }}
              >
                <div style={{
                  height: 200,
                  backgroundImage: `url(/creative/the-beginning-poster.png)`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  position: 'relative',
                }}>
                  <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'rgba(255,107,53,0.6)', border: '1px solid rgba(255,107,53,0.8)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Film size={22} style={{ color: 'white' }} />
                    </div>
                  </div>
                  <span style={{ position: 'absolute', top: '0.75rem', right: '0.75rem', background: 'rgba(255,107,53,0.8)', borderRadius: '100px', padding: '0.25rem 0.65rem', fontSize: '0.72rem', color: 'white', zIndex: 2 }}>
                    Short Film
                  </span>
                </div>
                <div style={{ padding: '1.25rem' }}>
                  <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                    The Beginning — College Short Film
                  </h4>
                  <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                    {['Short Film', 'Contest', 'Director', 'Editor'].map(tag => (
                      <span className="badge" key={tag} style={{ fontSize: '0.72rem' }}>{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.a>
            ) : (
              filtered.map((item, i) => (
                <CreativeCard
                  key={item.title}
                  item={item}
                  index={i}
                  onClick={() => handleCardClick(item)}
                />
              ))
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* ── Lightbox / Media Player Overlay ── */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMedia(null)}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 9999,
              background: 'rgba(5, 5, 5, 0.95)',
              backdropFilter: 'blur(8px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '2rem',
            }}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                width: '100%',
                maxWidth: '900px',
                background: 'var(--surface)',
                borderRadius: '16px',
                border: '1px solid var(--border)',
                overflow: 'hidden',
                boxShadow: '0 24px 80px rgba(0,0,0,0.8)',
                position: 'relative',
              }}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedMedia(null)}
                title="Close (Esc)"
                style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  background: 'rgba(0,0,0,0.65)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  cursor: 'pointer',
                  zIndex: 10,
                  transition: 'background 0.2s',
                  backdropFilter: 'blur(6px)',
                }}
              >
                <X size={18} />
              </button>

              {/* Media Container */}
              <div style={{ background: '#000', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                {selectedMedia.type === 'video' ? (
                  <video
                    src={selectedMedia.url}
                    controls
                    autoPlay
                    playsInline
                    style={{
                      width: '100%',
                      maxHeight: '70vh',
                      objectFit: 'contain',
                      display: 'block',
                    }}
                  />
                ) : (
                  <img
                    src={selectedMedia.url}
                    alt={selectedMedia.title}
                    style={{
                      width: '100%',
                      maxHeight: '70vh',
                      objectFit: 'contain',
                      display: 'block',
                    }}
                  />
                )}
              </div>

              {/* Info Header */}
              <div style={{ padding: '1.5rem', background: 'var(--surface)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                  }}
                >
                  {selectedMedia.title}
                </h3>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', background: 'var(--surface-2)', padding: '0.25rem 0.65rem', borderRadius: '100px', border: '1px solid var(--border)' }}>
                  Press <kbd style={{ fontFamily: 'monospace', color: 'var(--accent)' }}>Esc</kbd> to close
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
