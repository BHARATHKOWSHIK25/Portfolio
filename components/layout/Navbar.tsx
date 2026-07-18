'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu, X, Download,
  Home, User, FolderOpen, Zap, Palette, Mail, Award,
} from 'lucide-react';

const navItems = [
  { label: 'Home',         href: '#home',           Icon: Home },
  { label: 'About',        href: '#about',          Icon: User },
  { label: 'Projects',     href: '#projects',       Icon: FolderOpen },
  { label: 'Skills',       href: '#skills',         Icon: Zap },
  { label: 'Creative',     href: '#creative',       Icon: Palette },
  { label: 'Certificates', href: '#certifications', Icon: Award },
  { label: 'Contact',      href: '#contact',        Icon: Mail },
];

const ALL_SECTION_IDS = navItems.map((n) => n.href.replace('#', ''));

export default function Navbar() {
  const [scrolled,      setScrolled]      = useState(false);
  const [menuOpen,      setMenuOpen]      = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobile,      setIsMobile]      = useState(false);

  /* ── Detect mobile breakpoint ── */
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  /* ── Close menu when switching to desktop ── */
  useEffect(() => {
    if (!isMobile) setMenuOpen(false);
  }, [isMobile]);

  /* ── Scroll tracking ── */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const reversed = [...ALL_SECTION_IDS].reverse();
      for (const id of reversed) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ── Lock body scroll when mobile menu is open ── */
  useEffect(() => {
    if (isMobile) {
      document.body.style.overflow = menuOpen ? 'hidden' : '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen, isMobile]);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.getElementById(href.replace('#', ''));
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* ══ Top Navbar ══════════════════════════════════ */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 1.5 }}
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          zIndex: 1000,
          padding: '0.85rem 1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          backgroundColor: scrolled ? 'rgba(12,12,12,0.9)' : 'transparent',
          borderBottom: scrolled ? '1px solid rgba(30,30,30,0.8)' : '1px solid transparent',
          transition: 'all 0.3s ease',
        }}
      >
        {/* Logo — always visible */}
        <button
          onClick={() => handleNav('#home')}
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 800,
            fontSize: '1.5rem',
            background: 'linear-gradient(135deg, #00E5FF 0%, #FF6B35 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            letterSpacing: '-0.02em',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          BK
        </button>

        {/* Desktop nav links — hidden on mobile */}
        {!isMobile && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <button
                  key={item.label}
                  onClick={() => handleNav(item.href)}
                  style={{
                    padding: '0.5rem 1rem',
                    borderRadius: '100px',
                    border: 'none',
                    background: isActive ? 'rgba(0,229,255,0.1)' : 'transparent',
                    color: isActive ? '#00E5FF' : '#888888',
                    fontSize: '0.875rem',
                    fontFamily: 'var(--font-body)',
                    fontWeight: 500,
                    cursor: 'none',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        )}

        {/* Right side */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          {/* Resume button — desktop only */}
          {!isMobile && (
            <a
              href="/resume.pdf"
              download
              className="btn-outline"
              style={{ padding: '0.5rem 1.25rem', fontSize: '0.875rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
            >
              <Download size={14} />
              Resume
            </a>
          )}

          {/* Hamburger — mobile only */}
          {isMobile && (
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              style={{
                background: menuOpen ? 'rgba(0,229,255,0.1)' : 'transparent',
                border: `1px solid ${menuOpen ? 'rgba(0,229,255,0.4)' : 'var(--border)'}`,
                borderRadius: '10px',
                padding: '0.5rem',
                color: menuOpen ? '#00E5FF' : 'var(--text-primary)',
                cursor: 'auto',
                transition: 'all 0.25s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <AnimatePresence mode="wait" initial={false}>
                {menuOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                    style={{ display: 'flex' }}
                  >
                    <X size={20} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="open"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                    style={{ display: 'flex' }}
                  >
                    <Menu size={20} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          )}
        </div>
      </motion.nav>

      {/* ══ Mobile Backdrop — only on mobile ══════════════ */}
      {isMobile && (
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              key="mobile-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMenuOpen(false)}
              style={{
                position: 'fixed',
                inset: 0,
                zIndex: 997,
                background: 'rgba(0,0,0,0.55)',
                backdropFilter: 'blur(4px)',
              }}
            />
          )}
        </AnimatePresence>
      )}

      {/* ══ Mobile Drawer — only on mobile ════════════════ */}
      {isMobile && (
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              key="mobile-drawer"
              initial={{ opacity: 0, y: -12, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.97 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              style={{
                position: 'fixed',
                top: 68,
                left: '0.75rem',
                right: '0.75rem',
                zIndex: 998,
                background: 'rgba(14,14,16,0.98)',
                backdropFilter: 'blur(24px)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '18px',
                padding: '0.75rem',
                boxShadow: '0 24px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(0,229,255,0.04)',
                overflow: 'hidden',
              }}
            >
              {/* Nav items */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                {navItems.map((item, i) => {
                  const id = item.href.replace('#', '');
                  const isActive = activeSection === id;
                  const { Icon } = item;
                  return (
                    <motion.button
                      key={item.label}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04, duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                      onClick={() => handleNav(item.href)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.85rem',
                        padding: '0.85rem 1rem',
                        borderRadius: '12px',
                        border: 'none',
                        background: isActive
                          ? 'linear-gradient(90deg, rgba(0,229,255,0.12) 0%, rgba(0,229,255,0.04) 100%)'
                          : 'transparent',
                        color: isActive ? '#00E5FF' : 'var(--text-primary)',
                        fontSize: '1rem',
                        fontFamily: 'var(--font-body)',
                        fontWeight: isActive ? 600 : 400,
                        textAlign: 'left',
                        cursor: 'auto',
                        transition: 'all 0.2s ease',
                        width: '100%',
                        position: 'relative',
                      }}
                    >
                      {/* Active left bar */}
                      {isActive && (
                        <motion.div
                          layoutId="mobile-active-bar"
                          style={{
                            position: 'absolute',
                            left: 0, top: '50%',
                            transform: 'translateY(-50%)',
                            width: 3, height: '60%',
                            borderRadius: '0 3px 3px 0',
                            background: 'linear-gradient(180deg, #00E5FF, #FF6B35)',
                          }}
                        />
                      )}

                      {/* Icon bubble */}
                      <div
                        style={{
                          width: 36, height: 36,
                          borderRadius: '10px',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          background: isActive ? 'rgba(0,229,255,0.15)' : 'rgba(255,255,255,0.05)',
                          border: isActive ? '1px solid rgba(0,229,255,0.3)' : '1px solid rgba(255,255,255,0.07)',
                          color: isActive ? '#00E5FF' : '#888',
                          flexShrink: 0,
                          transition: 'all 0.2s ease',
                        }}
                      >
                        <Icon size={16} />
                      </div>

                      <span style={{ flex: 1 }}>{item.label}</span>

                      {/* Active glow dot */}
                      {isActive && (
                        <div
                          style={{
                            width: 7, height: 7,
                            borderRadius: '50%',
                            background: '#00E5FF',
                            boxShadow: '0 0 8px rgba(0,229,255,0.7)',
                            flexShrink: 0,
                          }}
                        />
                      )}
                    </motion.button>
                  );
                })}
              </div>

              {/* Divider */}
              <div
                style={{
                  margin: '0.75rem 0.5rem',
                  height: 1,
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)',
                }}
              />

              {/* Download Resume CTA */}
              <motion.a
                href="/resume.pdf"
                download
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.04 + 0.05, duration: 0.28 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.6rem',
                  margin: '0 0.25rem',
                  padding: '0.85rem 1rem',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #00E5FF 0%, #FF6B35 100%)',
                  color: '#000',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  textDecoration: 'none',
                  cursor: 'auto',
                  boxShadow: '0 4px 20px rgba(0,229,255,0.25)',
                }}
              >
                <Download size={16} />
                Download Resume
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </>
  );
}
