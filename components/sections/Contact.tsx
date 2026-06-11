'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, MessageCircle, GraduationCap } from 'lucide-react';
import { LinkedinIcon, GithubIcon, TwitterIcon, InstagramIcon } from '../ui/BrandIcons';
import { personalInfo } from '@/lib/data';

const channels = [
  {
    id: 'email',
    label: 'Email',
    value: personalInfo.email,
    subValue: 'Reply within 24 hours',
    icon: <Mail size={20} />,
    href: `mailto:${personalInfo.email}`,
    color: '#00E5FF',
  },
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    value: '+91 8977222333',
    subValue: 'Quick replies',
    icon: <MessageCircle size={20} />,
    href: 'https://wa.me/918977222333',
    color: '#22c55e',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: 'Bharath Kowshik',
    subValue: 'Connect professionally',
    icon: <LinkedinIcon size={20} />,
    href: 'https://www.linkedin.com/in/bharathkowshik25/',
    color: '#0A66C2',
  },
  {
    id: 'github',
    label: 'GitHub',
    value: '@BHARATHKOWSHIK25',
    subValue: 'See my projects',
    icon: <GithubIcon size={20} />,
    href: 'https://github.com/BHARATHKOWSHIK25',
    color: '#e2e8f0',
  },
  {
    id: 'twitter',
    label: 'Twitter / X',
    value: '@bharathkowsik25',
    subValue: 'Follow for updates',
    icon: <TwitterIcon size={20} />,
    href: 'https://twitter.com/bharathkowsik25',
    color: '#1DA1F2',
  },
  {
    id: 'instagram',
    label: 'Instagram',
    value: '@bharathkowshik.ullangula',
    subValue: 'Creative side',
    icon: <InstagramIcon size={20} />,
    href: 'https://instagram.com/bharathkowshik.ullangula',
    color: '#E1306C',
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative z-10 -mt-10 sm:-mt-12 md:-mt-14 w-full rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] overflow-hidden"
      style={{ background: '#111114', borderTop: 'none' }}
    >
      <div className="section-container">

        {/* ── Giant Heading ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ padding: '6rem 0 4rem', textAlign: 'center' }}
        >
          <p style={{
            color: 'var(--accent)',
            fontSize: '0.85rem',
            fontWeight: 600,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            marginBottom: '1.25rem',
          }}>
            Let's Connect
          </p>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.8rem, 10vw, 8rem)',
            fontWeight: 800,
            letterSpacing: '-0.04em',
            lineHeight: 0.92,
            color: 'var(--text-primary)',
            textTransform: 'uppercase',
            marginBottom: '1.5rem',
          }}>
            GET IN TOUCH
          </h2>
          <p style={{
            fontSize: '1rem',
            color: 'var(--text-secondary)',
            maxWidth: 480,
            margin: '0 auto',
            lineHeight: 1.6,
          }}>
            Open to internships, collaborations, and creative projects. Pick any channel below — I'll get back to you fast.
          </p>
        </motion.div>

        {/* ── Channel Cards Grid ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1.25rem',
          paddingBottom: '6rem',
        }}
          className="contact-grid"
        >
          {channels.map((ch, i) => (
            <motion.a
              key={ch.id}
              href={ch.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              whileHover={{ y: -5 }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '1.75rem',
                background: 'var(--surface)',
                border: `1px solid var(--border)`,
                borderRadius: '16px',
                textDecoration: 'none',
                cursor: 'none',
                position: 'relative',
                overflow: 'hidden',
                minHeight: '180px',
                transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
              }}
              className="contact-card"
              data-color={ch.color}
              data-cursor-hover
            >
              {/* Subtle radial glow in corner */}
              <div style={{
                position: 'absolute',
                top: 0, right: 0,
                width: 120, height: 120,
                borderRadius: '0 16px 0 100%',
                background: `radial-gradient(circle at top right, ${ch.color}18 0%, transparent 70%)`,
                pointerEvents: 'none',
              }} />

              {/* Top row: Icon + Arrow */}
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                <div style={{
                  width: 46, height: 46,
                  borderRadius: '12px',
                  background: `${ch.color}15`,
                  border: `1px solid ${ch.color}35`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: ch.color,
                  flexShrink: 0,
                }}>
                  {ch.icon}
                </div>
                <div style={{
                  width: 28, height: 28,
                  borderRadius: '8px',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--text-secondary)',
                }}>
                  <ArrowUpRight size={14} />
                </div>
              </div>

              {/* Bottom: Label + Value + Sub */}
              <div style={{ marginTop: '1.5rem' }}>
                <p style={{
                  fontSize: '0.68rem',
                  fontWeight: 700,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: ch.color,
                  marginBottom: '0.4rem',
                  opacity: 0.85,
                }}>
                  {ch.label}
                </p>
                <p style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  lineHeight: 1.3,
                  marginBottom: '0.3rem',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }}>
                  {ch.value}
                </p>
                <p style={{
                  fontSize: '0.75rem',
                  color: 'var(--text-secondary)',
                  opacity: 0.7,
                }}>
                  {ch.subValue}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      {/* ── Footer Bar ── */}
      <div style={{
        borderTop: '1px solid var(--border)',
        padding: '1.5rem 0',
        background: 'var(--surface)',
      }}>
        <div className="section-container" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '0.75rem',
        }}>
          <p style={{
            fontSize: '0.75rem',
            fontWeight: 500,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'var(--text-secondary)',
          }}>
            © 2025{' '}
            <span className="gradient-text" style={{ fontWeight: 700 }}>
              BHARATH KOWSHIK
            </span>
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <GraduationCap size={13} style={{ color: 'var(--text-secondary)' }} />
            <p style={{
              fontSize: '0.75rem', fontWeight: 500,
              letterSpacing: '0.08em', textTransform: 'uppercase',
              color: 'var(--text-secondary)',
            }}>
              DESIGNED &amp; BUILT IN{' '}
              <span style={{ color: 'var(--accent)', fontWeight: 700 }}>GUNTUR, INDIA</span>
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .contact-card:hover {
          border-color: rgba(255,255,255,0.15) !important;
          box-shadow: 0 16px 48px rgba(0,0,0,0.3);
        }
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 480px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
