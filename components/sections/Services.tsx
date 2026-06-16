'use client';

import { motion } from 'framer-motion';

const EASE_EXPO = [0.16, 1, 0.3, 1] as const;

const headingReveal = {
  hidden: { opacity: 0, y: 80, filter: 'blur(12px)', skewY: 3 },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    skewY: 0,
    transition: { duration: 1, ease: EASE_EXPO },
  },
};

const rowVariants = {
  hidden: { opacity: 0, y: 32, filter: 'blur(4px)' },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.65, ease: EASE_EXPO, delay: i * 0.1 },
  }),
};

const services = [
  {
    number: '01',
    title: 'Full Stack Development',
    description:
      'Building end-to-end web applications with React, Next.js, Node.js, and Firebase — from database design to deployment.',
  },
  {
    number: '02',
    title: 'AI & Intelligent Systems',
    description:
      'Integrating large language models and AI agents into real products via Google AI, prompt engineering, and LLM pipelines.',
  },
  {
    number: '03',
    title: 'IoT Solutions',
    description:
      'Designing embedded systems with Arduino and custom sensors for real-time data monitoring and hardware-software integration.',
  },
  {
    number: '04',
    title: 'Mobile App Development',
    description:
      'Crafting cross-platform mobile applications using Flutter and Firebase — performant, beautiful, and production-ready.',
  },
];

export default function Services() {
  return (
    <section
      id="services"
      style={{
        padding: '7rem 0',
        background: 'var(--surface)',
        borderTop: '1px solid var(--border)',
      }}
    >
      <div className="section-container">
        {/* Large heading — dramatic scroll reveal */}
        <div style={{ overflow: 'hidden', marginBottom: '4rem' }}>
          <motion.h2
            variants={headingReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(3.5rem, 12vw, 9rem)',
              fontWeight: 800,
              letterSpacing: '-0.04em',
              lineHeight: 0.9,
              color: 'var(--text-primary)',
              textAlign: 'center',
            }}
          >
            SERVICES
          </motion.h2>
        </div>

        {/* List */}
        <div>
          {services.map((s, i) => (
            <motion.div
              key={s.number}
              custom={i}
              variants={rowVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              style={{
                display: 'grid',
                gridTemplateColumns: '110px 1fr 1fr',
                gap: '2rem',
                alignItems: 'start',
                padding: '2.5rem 0',
                borderTop: '1px solid var(--border)',
              }}
              className="services-row"
            >
              {/* Number */}
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '3.5rem',
                  fontWeight: 800,
                  color: 'rgba(255,255,255,0.12)',
                  letterSpacing: '-0.04em',
                  lineHeight: 1,
                }}
              >
                {s.number}
              </span>

              {/* Title */}
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1rem, 2.2vw, 1.5rem)',
                  fontWeight: 700,
                  letterSpacing: '-0.01em',
                  color: 'var(--text-primary)',
                  textTransform: 'uppercase',
                  paddingTop: '0.25rem',
                }}
              >
                {s.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  color: 'var(--text-secondary)',
                  fontSize: '0.95rem',
                  lineHeight: 1.75,
                  paddingTop: '0.25rem',
                }}
              >
                {s.description}
              </p>
            </motion.div>
          ))}

          {/* Bottom border */}
          <div style={{ borderTop: '1px solid var(--border)' }} />
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .services-row {
            grid-template-columns: 60px 1fr !important;
            grid-template-rows: auto auto;
          }
          .services-row > p {
            grid-column: 2;
          }
        }
      `}</style>
    </section>
  );
}
