'use client';

import { motion } from 'framer-motion';
import { ArrowUp, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon, TwitterIcon } from '../ui/BrandIcons';
import { socialLinks } from '@/lib/data';

const socialIcons: Record<string, React.ReactNode> = {
  GitHub: <GithubIcon size={16} />,
  LinkedIn: <LinkedinIcon size={16} />,
  Instagram: <InstagramIcon size={16} />,
  Twitter: <TwitterIcon size={16} />,
};

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer
      className="relative z-10 -mt-10 sm:-mt-12 md:-mt-14 w-full rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] overflow-hidden"
      style={{
        background: '#111114',
        padding: '4rem 0 2rem',
      }}
    >
      <div className="section-container">
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '2rem',
          }}
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center' }}
          >
            <div
              className="gradient-text"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '2.5rem',
                fontWeight: 800,
                letterSpacing: '-0.04em',
                marginBottom: '0.5rem',
              }}
            >
              BK
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              Building the future, one project at a time.
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.5rem' }}>
              🕉️ Faith in God 🔥Fire in soul
            </p>
          </motion.div>

          {/* Social links */}
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            {socialLinks.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  color: 'var(--text-secondary)',
                  transition: 'all 0.2s ease',
                }}
                className="hover:border-[#00E5FF] hover:text-[#00E5FF]"
              >
                {socialIcons[social.platform]}
              </a>
            ))}
          </div>

          {/* Nav links */}
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            {['Home', 'About', 'Projects', 'Skills', 'Creative', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => {
                  const el = document.getElementById(item.toLowerCase());
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: 'var(--text-secondary)',
                  fontSize: '0.85rem',
                  cursor: 'none',
                  fontFamily: 'var(--font-body)',
                  transition: 'color 0.2s ease',
                }}
                className="hover:text-white"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Divider */}
          <div style={{ width: '100%', height: 1, background: 'var(--border)' }} />

          {/* Copyright + Back to top */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
              flexWrap: 'wrap',
              gap: '1rem',
            }}
          >
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.82rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              Designed &amp; Built by{' '}
              <span className="gradient-text" style={{ fontWeight: 600 }}>Bharath Kowshik</span>
              {' '}© 2025 · Made with{' '}
              <Heart size={12} style={{ color: '#FF6B35', fill: '#FF6B35' }} />
            </p>

            <button
              onClick={scrollToTop}
              style={{
                width: 40,
                height: 40,
                borderRadius: '10px',
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-secondary)',
                cursor: 'none',
                transition: 'all 0.2s ease',
              }}
              className="hover:border-[#00E5FF] hover:text-[#00E5FF]"
              data-cursor-hover
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
