'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Trophy, Users, Video } from 'lucide-react';
import { leadershipItems } from '@/lib/data';

const iconMap: Record<string, React.ReactNode> = {
  Trophy: <Trophy size={18} />,
  Users: <Users size={18} />,
  Video: <Video size={18} />,
};

export default function Leadership() {
  const lineRef = useRef<HTMLDivElement>(null);
  const inView = useInView(lineRef, { once: true, margin: '-100px' });

  return (
    <section
      id="leadership"
      className="relative z-10 -mt-10 sm:-mt-12 md:-mt-14 w-full rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] overflow-hidden"
      style={{ padding: '8rem 0', background: '#0C0C0C' }}
    >
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '3.5rem' }}
        >
          <p
            style={{
              color: 'var(--accent)',
              fontSize: '0.85rem',
              fontWeight: 600,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              marginBottom: '0.75rem',
            }}
          >
            Experience
          </p>
          <h2 className="section-heading" style={{ marginBottom: '0.75rem' }}>
            Leadership & Activities
          </h2>
          <p className="section-subheading">Organizing, building, and leading beyond the classroom.</p>
        </motion.div>

        {/* Timeline */}
        <div style={{ position: 'relative', maxWidth: 800 }}>
          {/* Timeline line */}
          <div
            ref={lineRef}
            style={{
              position: 'absolute',
              left: '1.5rem',
              top: 0,
              bottom: 0,
              width: 1,
              background: 'var(--border)',
              overflow: 'hidden',
            }}
          >
            <motion.div
              style={{
                width: '100%',
                background: 'linear-gradient(to bottom, var(--accent), var(--accent-secondary), transparent)',
                transformOrigin: 'top',
              }}
              initial={{ scaleY: 0 }}
              animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            />
          </div>

          {/* Timeline items */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {leadershipItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: i * 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                style={{ display: 'flex', gap: '2rem', paddingLeft: '1rem' }}
              >
                {/* Dot */}
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: '50%',
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    color: '#00E5FF',
                    position: 'relative',
                    zIndex: 1,
                    boxShadow: '0 0 20px rgba(0,229,255,0.15)',
                  }}
                >
                  {iconMap[item.icon]}
                </div>

                {/* Content */}
                <div
                  className="card"
                  style={{
                    padding: '1.5rem',
                    flex: 1,
                    marginTop: '0.25rem',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      flexWrap: 'wrap',
                      gap: '0.5rem',
                      marginBottom: '0.5rem',
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.1rem',
                        fontWeight: 700,
                        color: 'var(--text-primary)',
                      }}
                    >
                      {item.title}
                    </h3>
                    <span
                      style={{
                        fontSize: '0.78rem',
                        color: '#00E5FF',
                        fontWeight: 600,
                        background: 'rgba(0,229,255,0.1)',
                        padding: '0.2rem 0.65rem',
                        borderRadius: '100px',
                        border: '1px solid rgba(0,229,255,0.2)',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {item.period}
                    </span>
                  </div>
                  <p
                    style={{
                      fontSize: '0.82rem',
                      color: '#FF6B35',
                      fontWeight: 500,
                      marginBottom: '0.75rem',
                    }}
                  >
                    {item.organization}
                  </p>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '0.9rem' }}>
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
