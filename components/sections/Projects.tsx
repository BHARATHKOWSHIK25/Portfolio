'use client';

import { useRef, useEffect, useState, useCallback } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { GithubIcon } from '../ui/BrandIcons';
import { projects } from '@/lib/data';

/* ─── Shared variants ─────────────────────────────────────── */
const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 70,
    filter: 'blur(10px)',
    scale: 0.97,
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    scale: 1,
    transition: {
      duration: 0.85,
      ease: EASE_OUT_EXPO,
      delay: i * 0.12,
    },
  }),
};

const headerVariants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease: EASE_OUT_EXPO },
  },
};

/* ─── Browser Mockup ──────────────────────────────────────── */
function BrowserMockup({ image, title }: { image: string; title: string }) {
  return (
    <div className="relative w-full aspect-[4/3] sm:aspect-video rounded-xl overflow-hidden bg-[#1a1a1a] border border-white/10 group shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
      {/* Chrome bar */}
      <div className="h-6 sm:h-8 bg-[#111] flex items-center px-3 gap-1.5 border-b border-white/5 relative z-10">
        <div className="flex gap-1.5">
          {['#FF5F57', '#FEBC2E', '#28C840'].map((c) => (
            <div key={c} className="w-2 h-2 rounded-full" style={{ background: c }} />
          ))}
        </div>
        {/* Fake URL bar */}
        <div className="ml-2 flex-1 h-3.5 bg-white/5 rounded-full border border-white/5 max-w-[180px]" />
      </div>
      {/* Screen */}
      <div className="relative w-full h-[calc(100%-1.5rem)] sm:h-[calc(100%-2rem)] overflow-hidden bg-[#0C0C0C]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain block transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.07]"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
      </div>
    </div>
  );
}

/* ─── Project Card ────────────────────────────────────────── */
function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const cardRef = useRef<HTMLElement>(null);
  const num = String(project.id).padStart(2, '0');
  const isKaggle = project.github.includes('kaggle');

  /* Magnetic tilt */
  const rotX = useMotionValue(0);
  const rotY = useMotionValue(0);
  const glowX = useMotionValue(50);
  const glowY = useMotionValue(50);

  const springCfg = { damping: 22, stiffness: 200, mass: 0.5 };
  const sRotX = useSpring(rotX, springCfg);
  const sRotY = useSpring(rotY, springCfg);
  const sGlowX = useSpring(glowX, { damping: 18, stiffness: 120 });
  const sGlowY = useSpring(glowY, { damping: 18, stiffness: 120 });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;  // 0–1
    const py = (e.clientY - rect.top) / rect.height;  // 0–1
    rotX.set((py - 0.5) * -10);   // tilt up/down ±5°
    rotY.set((px - 0.5) * 10);    // tilt left/right ±5°
    glowX.set(px * 100);
    glowY.set(py * 100);
  }, [rotX, rotY, glowX, glowY]);

  const handleMouseLeave = useCallback(() => {
    rotX.set(0);
    rotY.set(0);
    glowX.set(50);
    glowY.set(50);
  }, [rotX, rotY, glowX, glowY]);

  const handleClick = useCallback(() => {
    window.open(project.live || project.github, '_blank', 'noopener,noreferrer');
  }, [project]);

  return (
    <motion.article
      ref={cardRef}
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      style={{
        rotateX: sRotX,
        rotateY: sRotY,
        transformStyle: 'preserve-3d',
        transformPerspective: 800,
        cursor: 'pointer',
      }}
      whileHover={{ y: -10 }}
      transition={{ type: 'spring', stiffness: 200, damping: 22 }}
      className="group relative w-full flex flex-col gap-5 sm:gap-6 rounded-[28px] sm:rounded-[36px] bg-[#0C0C0C]/70 backdrop-blur-2xl p-5 sm:p-6 md:p-8 border border-white/8 overflow-hidden motion-card"
    >
      {/* Dynamic spotlight glow that follows cursor */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(400px circle at ${sGlowX}% ${sGlowY}%, ${project.color}18 0%, transparent 65%)`,
        }}
      />

      {/* Border glow on hover */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        style={{
          boxShadow: `inset 0 0 0 1px ${project.color}35`,
        }}
      />

      {/* Bottom outer glow */}
      <motion.div
        className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 w-4/5 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl rounded-full"
        style={{ background: `${project.color}20` }}
      />

      <div className="relative z-10 flex flex-col gap-4 h-full items-center text-center">
        {/* Header */}
        <div className="flex flex-col items-center w-full">
          <div className="flex items-center justify-between w-full mb-2">
            <span
              className="font-display text-5xl sm:text-6xl font-extrabold leading-none select-none"
              style={{ color: `${project.color}20` }}
            >
              {num}
            </span>
            <span
              className="text-[0.62rem] font-bold tracking-widest uppercase px-3 py-1 rounded-full border"
              style={{
                color: project.color,
                borderColor: `${project.color}35`,
                background: `${project.color}12`,
              }}
            >
              {project.category}
            </span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight w-full text-left">
            {project.title.toUpperCase()}
          </h2>
        </div>

        <p className="text-white/55 text-sm sm:text-[0.92rem] leading-relaxed text-left w-full">
          {project.description}
        </p>

        {/* Browser Mockup */}
        <div className="w-full mt-1 mb-1">
          <BrowserMockup image={project.image} title={project.title} />
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-auto pt-2 w-full">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-[0.7rem] font-medium rounded-full border text-white/60"
              style={{
                background: `${project.color}08`,
                borderColor: `${project.color}25`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA Button */}
        <motion.a
          whileHover={{ scale: 1.03, y: -2 }}
          whileTap={{ scale: 0.97 }}
          href={project.live || project.github}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="group/btn flex items-center justify-center gap-2.5 mt-2 w-full py-3.5 rounded-2xl text-xs sm:text-sm font-semibold tracking-widest uppercase no-underline transition-all duration-300"
          style={{
            background: `linear-gradient(135deg, ${project.color}18 0%, ${project.color}08 100%)`,
            border: `1px solid ${project.color}30`,
            color: project.color,
            boxShadow: `0 0 0 0 ${project.color}00`,
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 24px ${project.color}25`;
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.boxShadow = `0 0 0 0 ${project.color}00`;
          }}
        >
          {project.live ? 'Live Project' : isKaggle ? 'View on Kaggle' : 'View on GitHub'}
          {project.live
            ? <ArrowRight size={15} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
            : <ExternalLink size={15} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />}
        </motion.a>
      </div>
    </motion.article>
  );
}

/* ─── Section ─────────────────────────────────────────────── */
export default function Projects() {
  const containerRef = useRef<HTMLElement>(null);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  /* Parallax offsets */
  const rightColY   = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const bgBlobY1    = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const bgBlobY2    = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const headingOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0.3]);

  const leftProjects  = projects.filter((_, i) => i % 2 === 0);
  const rightProjects = projects.filter((_, i) => i % 2 !== 0);

  return (
    <section
      ref={containerRef}
      id="projects"
      className="relative z-10 -mt-10 sm:-mt-12 md:-mt-14 w-full rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] bg-[#0C0C0C] px-4 sm:px-6 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-24 overflow-hidden motion-section"
    >
      {/* ── Ambient background blobs ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          style={{ y: bgBlobY1 }}
          animate={{ scale: [1, 1.25, 1], x: [0, 60, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 left-1/4 w-[45vw] h-[45vw] bg-[#00E5FF]/5 rounded-full blur-[130px]"
        />
        <motion.div
          style={{ y: bgBlobY2 }}
          animate={{ scale: [1, 1.4, 1], x: [0, -50, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-1/4 right-1/4 w-[38vw] h-[38vw] bg-[#FF00E5]/5 rounded-full blur-[130px]"
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 right-1/3 w-[25vw] h-[25vw] bg-[#FF6B35]/4 rounded-full blur-[100px]"
        />
      </div>

      <div className="relative z-10 w-full flex flex-col items-center" style={{ margin: '0 auto', maxWidth: '1200px' }}>

        {/* ── Section Header ── */}
        <div className="pb-16 w-full flex flex-col items-center">
          <motion.p
            variants={headerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-[#00E5FF] text-[0.8rem] font-semibold tracking-[0.2em] uppercase mb-4 text-center"
          >
            Selected Work
          </motion.p>

          <motion.div
            style={{ opacity: headingOpacity }}
            className="overflow-hidden"
          >
            <motion.h2
              variants={headerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="font-display text-[clamp(4rem,15vw,12rem)] font-extrabold tracking-[-0.05em] leading-[0.85] text-white/5 select-none whitespace-nowrap text-center"
            >
              PROJECTS
            </motion.h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: EASE_OUT_EXPO }}
            className="text-white/35 text-sm tracking-wide text-center max-w-sm mt-2"
          >
            Click any card to explore the project
          </motion.p>
        </div>

        {/* ── Masonry Grid ── */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
          {/* Left Column */}
          <div className="flex flex-col gap-6 sm:gap-8 md:gap-10">
            {leftProjects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i * 2} />
            ))}
          </div>

          {/* Right Column — parallax offset on desktop */}
          <motion.div
            style={{ y: isDesktop ? rightColY : 0 }}
            className="flex flex-col gap-6 sm:gap-8 md:gap-10 md:mt-24"
          >
            {rightProjects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i * 2 + 1} />
            ))}
          </motion.div>
        </div>

        {/* ── GitHub CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE_OUT_EXPO }}
          className="flex justify-center pt-24 md:pt-32"
        >
          <motion.a
            whileHover={{ scale: 1.06, y: -3, boxShadow: '0 20px 48px rgba(0,229,255,0.18)' }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 280, damping: 20 }}
            href="https://github.com/BHARATHKOWSHIK25"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-8 py-4 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 text-white font-medium transition-colors duration-300"
          >
            <GithubIcon size={18} />
            <span className="tracking-wide">View all on GitHub</span>
            <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform duration-300 ml-1" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
