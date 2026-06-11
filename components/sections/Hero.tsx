'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowDown, Download, ChevronRight, Volume2, VolumeX } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon, TwitterIcon } from '../ui/BrandIcons';
import AnimatedText from '../ui/AnimatedText';
import { personalInfo, socialLinks } from '@/lib/data';

const SocialIcon = ({ platform, url }: { platform: string; url: string }) => {
  const icons: Record<string, React.ReactNode> = {
    GitHub: <GithubIcon size={18} />,
    LinkedIn: <LinkedinIcon size={18} />,
    Instagram: <InstagramIcon size={18} />,
    Twitter: <TwitterIcon size={18} />,
  };
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        width: 42,
        height: 42,
        borderRadius: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(255,255,255,0.08)',
        border: '1px solid rgba(255,255,255,0.15)',
        color: 'rgba(255,255,255,0.7)',
        transition: 'all 0.2s ease',
        backdropFilter: 'blur(8px)',
      }}
      className="hover:border-[#00E5FF] hover:text-[#00E5FF] hover:shadow-[0_0_16px_rgba(0,229,255,0.2)]"
    >
      {icons[platform]}
    </a>
  );
};

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  // Start muted by default
  const [muted, setMuted] = useState(true);
  // Use the section element so the video pauses the moment Hero leaves the viewport
  const isInView = useInView(sectionRef, { amount: 0 });

  // Ensure video element is muted on mount
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
  }, []);

  // Play / pause based on section visibility
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (isInView) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [isInView]);

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    const newMuted = !video.muted;

    if (!newMuted) {
      // Unmuting — restart the video from beginning with sound
      video.muted = false;
      video.currentTime = 0;
      video.play().catch(() => {
        // Browser blocked unmuted play — stay muted
        video.muted = true;
        setMuted(true);
        return;
      });
      setMuted(false);
    } else {
      // Muting — just silence it, keep playing
      video.muted = true;
      setMuted(true);
    }
  };

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(8px)' },
    visible: {
      opacity: 1, y: 0, filter: 'blur(0px)',
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as any },
    },
  };

  return (
    <section
      ref={sectionRef}
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'flex-end',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '5rem',
        paddingBottom: '6rem',
      }}
    >
      {/* ── Fullscreen Video Background ── */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden' }}>
        <video
          ref={videoRef}
          src="/creative/ai-showreel.mp4"
          autoPlay
          muted
          loop
          playsInline
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%' }}
        />
        {/* Multi-layer overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, rgba(12,12,12,0.70) 0%, rgba(12,12,12,0.55) 50%, rgba(12,12,12,0.88) 100%)',
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse at center, transparent 35%, rgba(12,12,12,0.55) 100%)',
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 70% 60% at 30% 50%, rgba(0,229,255,0.06) 0%, transparent 70%)',
          mixBlendMode: 'screen', pointerEvents: 'none',
        }} />
      </div>

      {/* ── Content ── */}
      <div style={{ width: '100%', position: 'relative', zIndex: 10, paddingLeft: '5vw', paddingRight: '5vw' }}>
        <motion.div variants={containerVariants} initial="hidden" animate="visible" style={{ maxWidth: '650px' }}>

          {/* Availability Badge */}
          <motion.div variants={itemVariants}>
            <span className="badge animate-pulse-soft" style={{
              display: 'inline-flex', marginBottom: '2rem',
              color: '#22c55e', borderColor: 'rgba(34,197,94,0.4)',
              background: 'rgba(34,197,94,0.12)', fontSize: '0.85rem',
              fontWeight: 500, backdropFilter: 'blur(8px)',
            }}>
              <span style={{ fontSize: '0.6rem', marginRight: '0.25rem' }}>🟢</span>
              Open to Internships &amp; Collaborations
            </span>
          </motion.div>

          {/* Greeting */}
          <motion.p variants={itemVariants} style={{
            fontFamily: 'var(--font-body)', fontSize: '1.1rem',
            color: 'rgba(245,245,245,0.65)', marginBottom: '0.5rem', fontWeight: 400,
          }}>
            Hey, I&apos;m
          </motion.p>

          {/* Name */}
          <motion.h1 variants={itemVariants} className="section-heading" style={{
            fontSize: 'clamp(2rem, 5vw, 4.5rem)', letterSpacing: '-0.03em',
            lineHeight: 1, marginBottom: '0.5rem', color: '#ffffff',
            textShadow: '0 2px 40px rgba(0,0,0,0.6)',
          }}>
            {personalInfo.name}
          </motion.h1>

          {/* Animated Roles */}
          <motion.div variants={itemVariants} style={{
            fontFamily: 'var(--font-display)', fontSize: 'clamp(1rem, 2.5vw, 1.8rem)',
            fontWeight: 700, marginBottom: '1.5rem', height: '1.3em',
          }}>
            <AnimatedText texts={personalInfo.roles} />
          </motion.div>

          {/* Tagline */}
          <motion.p variants={itemVariants} style={{
            maxWidth: '500px', lineHeight: 1.6, marginBottom: '2.5rem',
            fontSize: '0.95rem', color: 'rgba(245,245,245,0.7)',
            fontFamily: 'var(--font-body)',
          }}>
            {personalInfo.tagline}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
            <button className="btn-primary" onClick={() => handleScroll('projects')} style={{ gap: '0.5rem' }}>
              View My Work <ChevronRight size={16} />
            </button>
            <a href="/BHARATH_KOWSHIK_RESUME.pdf" download className="btn-outline" style={{
              backdropFilter: 'blur(8px)',
              background: 'rgba(255,255,255,0.06)',
              borderColor: 'rgba(255,255,255,0.2)',
            }}>
              <Download size={16} /> Download Resume
            </a>
          </motion.div>

          {/* Social */}
          <motion.div variants={itemVariants} style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            {socialLinks.map((link) => (
              <SocialIcon key={link.platform} platform={link.platform} url={link.url} />
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* ── Mute / Unmute Button ── */}
      <motion.button
        onClick={toggleMute}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2.2, duration: 0.4 }}
        title={muted ? 'Unmute video' : 'Mute video'}
        style={{
          position: 'absolute',
          bottom: '2.5rem',
          right: '2rem',
          zIndex: 20,
          width: 46,
          height: 46,
          borderRadius: '50%',
          border: '1px solid rgba(255,255,255,0.2)',
          background: 'rgba(12,12,12,0.55)',
          backdropFilter: 'blur(12px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: muted ? 'rgba(255,255,255,0.5)' : '#00E5FF',
          cursor: 'none',
          transition: 'all 0.25s ease',
          boxShadow: muted ? 'none' : '0 0 18px rgba(0,229,255,0.3)',
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        data-cursor-hover
      >
        {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
      </motion.button>

      {/* ── Scroll Indicator ── */}
      <motion.button
        onClick={() => handleScroll('about')}
        style={{
          position: 'absolute', bottom: '2.5rem', left: '50%',
          transform: 'translateX(-50%)', display: 'flex',
          flexDirection: 'column', alignItems: 'center', gap: '0.5rem',
          background: 'transparent', border: 'none',
          color: 'rgba(255,255,255,0.4)', cursor: 'none', zIndex: 10,
        }}
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-body)', letterSpacing: '0.14em' }}>SCROLL</span>
        <ArrowDown size={14} />
      </motion.button>
    </section>
  );
}
