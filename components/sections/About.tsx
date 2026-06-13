'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { personalInfo } from '@/lib/data';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  visible: ((i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as any, delay: i * 0.1 },
  })) as any,
};

export default function About() {
  return (
    <section id="about" style={{ padding: '8rem 0' }}>
      <div className="section-container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '4rem',
            alignItems: 'center',
          }}
        >
          {/* Left — Text */}
          <div>
            <motion.p
              custom={0}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              style={{
                fontFamily: 'var(--font-body)',
                color: 'var(--accent)',
                fontSize: '0.85rem',
                fontWeight: 600,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                marginBottom: '0.75rem',
              }}
            >
              About Me
            </motion.p>
            <motion.h2
              custom={1}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              className="section-heading"
              style={{ marginBottom: '1.5rem' }}
            >
              Driven by curiosity,{' '}
              <span className="gradient-text">built for impact.</span>
            </motion.h2>

            {personalInfo.about.map((para, i) => (
              <motion.p
                key={i}
                custom={i + 2}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                style={{
                  color: 'var(--text-secondary)',
                  lineHeight: 1.8,
                  marginBottom: '1rem',
                  fontSize: '1rem',
                }}
              >
                {para}
              </motion.p>
            ))}

            {/* Stats */}
            <motion.div
              custom={5}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '1rem',
                marginTop: '2.5rem',
              }}
            >
              {personalInfo.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="card"
                  style={{ padding: '1.25rem', textAlign: 'center' }}
                >
                  <div
                    className="gradient-text"
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '2rem',
                      fontWeight: 800,
                      lineHeight: 1,
                      marginBottom: '0.25rem',
                    }}
                  >
                    {stat.number}
                  </div>
                  <div
                    style={{
                      color: 'var(--text-secondary)',
                      fontSize: '0.85rem',
                      fontWeight: 500,
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Image */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <div
              style={{
                position: 'relative',
                width: 420,
                height: 494,
              }}
            >
              {/* Glow ring */}
              <div
                style={{
                  position: 'absolute',
                  inset: -3,
                  borderRadius: 16,
                  background: 'linear-gradient(135deg, #00E5FF 0%, #FF6B35 100%)',
                  zIndex: 0,
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  borderRadius: 14,
                  overflow: 'hidden',
                  zIndex: 1,
                  boxShadow: '0 0 40px rgba(0, 229, 255, 0.25), 0 0 80px rgba(255, 107, 53, 0.1)',
                }}
              >
                <Image
                  src="/kowshik.jpg"
                  alt="Bharath Kowshik"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                  priority
                />
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                  position: 'absolute',
                  bottom: -20,
                  right: -20,
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: 12,
                  padding: '0.75rem 1rem',
                  zIndex: 2,
                  boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    color: 'var(--text-primary)',
                  }}
                >
                  🚀 Future Founder
                </div>
                <div
                  style={{
                    fontSize: '0.75rem',
                    color: 'var(--text-secondary)',
                    marginTop: '0.15rem',
                  }}
                >
                  B.Tech CSE · 2024–2028
                </div>
              </motion.div>

              {/* Top badge */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                style={{
                  position: 'absolute',
                  top: -16,
                  left: -16,
                  background: '#0a0a0a',
                  border: '1px solid rgba(0,229,255,0.3)',
                  borderRadius: 10,
                  padding: '0.5rem 0.85rem',
                  zIndex: 2,
                  backdropFilter: 'blur(10px)',
                }}
              >
                <div style={{ fontSize: '0.8rem', color: '#00E5FF', fontWeight: 600 }}>
                  ⚡ AI · IoT · Full Stack
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
