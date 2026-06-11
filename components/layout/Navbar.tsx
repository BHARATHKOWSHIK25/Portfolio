'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Creative', href: '#creative' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'projects', 'skills', 'creative', 'contact'];
      for (const id of sections.reverse()) {
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

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 1.5 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: '1rem 2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          backgroundColor: scrolled ? 'rgba(12,12,12,0.85)' : 'transparent',
          borderBottom: scrolled ? '1px solid rgba(30,30,30,0.8)' : '1px solid transparent',
          transition: 'all 0.3s ease',
        }}
      >
        {/* Logo */}
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
          }}
          className="gradient-text font-display"
        >
          BK
        </button>

        {/* Desktop Nav */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }} className="hidden md:flex">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNav(item.href)}
              style={{
                padding: '0.5rem 1rem',
                borderRadius: '100px',
                border: 'none',
                background: activeSection === item.href.replace('#', '')
                  ? 'rgba(0,229,255,0.1)'
                  : 'transparent',
                color: activeSection === item.href.replace('#', '')
                  ? '#00E5FF'
                  : '#888888',
                fontSize: '0.9rem',
                fontFamily: 'var(--font-body)',
                fontWeight: 500,
                cursor: 'none',
                transition: 'all 0.2s ease',
              }}
              className="hover:text-white"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Resume CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <a
            href="/resume.pdf"
            download
            className="btn-outline hidden md:inline-flex"
            style={{ padding: '0.5rem 1.25rem', fontSize: '0.875rem' }}
          >
            <Download size={14} />
            Resume
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: 'transparent',
              border: '1px solid var(--border)',
              borderRadius: '8px',
              padding: '0.5rem',
              color: 'var(--text-primary)',
              cursor: 'auto',
            }}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            style={{
              position: 'fixed',
              top: 70,
              left: '1rem',
              right: '1rem',
              zIndex: 999,
              background: 'rgba(17,17,17,0.97)',
              backdropFilter: 'blur(20px)',
              border: '1px solid var(--border)',
              borderRadius: '14px',
              padding: '1rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.25rem',
            }}
          >
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNav(item.href)}
                style={{
                  padding: '0.75rem 1rem',
                  borderRadius: '8px',
                  border: 'none',
                  background: 'transparent',
                  color: '#F5F5F5',
                  fontSize: '1rem',
                  fontFamily: 'var(--font-body)',
                  textAlign: 'left',
                  cursor: 'auto',
                  transition: 'all 0.2s ease',
                }}
              >
                {item.label}
              </button>
            ))}
            <a
              href="/resume.pdf"
              download
              className="btn-outline"
              style={{ marginTop: '0.5rem', cursor: 'auto', justifyContent: 'center' }}
            >
              <Download size={14} />
              Download Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
