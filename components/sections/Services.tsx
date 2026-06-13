'use client';

import { motion } from 'framer-motion';

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
        {/* Large heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '4rem' }}
        >
          <h2
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
          </h2>
        </motion.div>

        {/* List */}
        <div>
          {services.map((s, i) => (
            <motion.div
              key={s.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
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
