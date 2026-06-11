'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, User, Mail, MessageSquare, Loader2 } from 'lucide-react';

type Status = 'idle' | 'loading' | 'success' | 'error';

const EASE = [0.16, 1, 0.3, 1] as const;

const inputVariants = {
  idle:    { borderColor: 'rgba(255,255,255,0.08)' },
  focused: { borderColor: 'rgba(0,229,255,0.45)' },
};

function FormField({
  id,
  label,
  icon,
  type = 'text',
  placeholder,
  value,
  onChange,
  multiline = false,
  required = true,
}: {
  id: string;
  label: string;
  icon: React.ReactNode;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  multiline?: boolean;
  required?: boolean;
}) {
  const [focused, setFocused] = useState(false);
  const hasValue = value.length > 0;

  const sharedStyle: React.CSSProperties = {
    width: '100%',
    background: 'rgba(255,255,255,0.03)',
    border: `1px solid ${focused ? 'rgba(0,229,255,0.4)' : hasValue ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.07)'}`,
    borderRadius: '12px',
    padding: multiline ? '1rem 1rem 1rem 3rem' : '0.9rem 1rem 0.9rem 3rem',
    color: '#F5F5F5',
    fontFamily: 'var(--font-body)',
    fontSize: '0.9rem',
    outline: 'none',
    resize: multiline ? 'vertical' : undefined,
    minHeight: multiline ? '130px' : undefined,
    transition: 'border-color 0.25s ease, box-shadow 0.25s ease, background 0.25s ease',
    boxShadow: focused ? '0 0 0 3px rgba(0,229,255,0.08), inset 0 1px 3px rgba(0,0,0,0.2)' : 'none',
  };

  return (
    <div style={{ position: 'relative' }}>
      <label
        htmlFor={id}
        style={{
          display: 'block',
          fontSize: '0.72rem',
          fontWeight: 700,
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: focused ? 'var(--accent)' : 'rgba(255,255,255,0.4)',
          marginBottom: '0.5rem',
          transition: 'color 0.2s ease',
        }}
      >
        {label}
      </label>

      {/* Icon */}
      <div
        style={{
          position: 'absolute',
          bottom: multiline ? 'auto' : '50%',
          top: multiline ? '2.35rem' : 'auto',
          transform: multiline ? 'none' : 'translateY(40%)',
          left: '1rem',
          color: focused ? 'var(--accent)' : 'rgba(255,255,255,0.25)',
          transition: 'color 0.2s ease',
          pointerEvents: 'none',
        }}
      >
        {icon}
      </div>

      {multiline ? (
        <textarea
          id={id}
          placeholder={placeholder}
          value={value}
          required={required}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={sharedStyle}
        />
      ) : (
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          required={required}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={sharedStyle}
        />
      )}
    </div>
  );
}

export default function MessageForm() {
  const [name,    setName]    = useState('');
  const [email,   setEmail]   = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status,  setStatus]  = useState<Status>('idle');
  const [errMsg,  setErrMsg]  = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'loading') return;
    setStatus('loading');
    setErrMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, subject, message }),
      });
      const data = await res.json();

      if (!res.ok) throw new Error(data.error || 'Something went wrong.');

      setStatus('success');
      setName(''); setEmail(''); setSubject(''); setMessage('');

      // Reset back to idle after 5 s
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err: any) {
      setErrMsg(err.message || 'Failed to send. Please try again.');
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section
      className="relative z-10 -mt-10 sm:-mt-12 md:-mt-14 w-full rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] overflow-hidden"
      style={{
        padding: '6rem 0',
        background: 'linear-gradient(to bottom, #0C0C0C 0%, #0a0a0f 100%)',
        position: 'relative',
      }}
    >
      {/* Ambient glow */}
      <div
        style={{
          position: 'absolute',
          top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '70vw', height: '50vh',
          background: 'radial-gradient(ellipse, rgba(0,229,255,0.04) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="section-container" style={{ maxWidth: 720, position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <p style={{
            color: 'var(--accent)',
            fontSize: '0.8rem',
            fontWeight: 700,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            marginBottom: '0.75rem',
          }}>
            Write to me
          </p>
          <h2 className="section-heading" style={{ marginBottom: '0.75rem' }}>
            Send a Message
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', maxWidth: 440, margin: '0 auto', lineHeight: 1.7 }}>
            Have an idea, collaboration, or just want to say hi? Drop me a message and I'll get back to you.
          </p>
        </motion.div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
          style={{
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: '24px',
            padding: 'clamp(1.5rem, 4vw, 2.5rem)',
            backdropFilter: 'blur(20px)',
            boxShadow: '0 32px 80px rgba(0,0,0,0.4)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Corner glow */}
          <div style={{
            position: 'absolute', top: 0, right: 0,
            width: 300, height: 300,
            background: 'radial-gradient(circle at top right, rgba(0,229,255,0.06) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />

          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: EASE }}
                style={{
                  display: 'flex', flexDirection: 'column',
                  alignItems: 'center', justifyContent: 'center',
                  gap: '1rem', padding: '3rem 1rem', textAlign: 'center',
                }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 14, delay: 0.1 }}
                >
                  <CheckCircle size={56} color="#22c55e" strokeWidth={1.5} />
                </motion.div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 700, color: '#F5F5F5' }}>
                  Message Sent! 🎉
                </h3>
                <p style={{ color: 'var(--text-secondary)', maxWidth: 320 }}>
                  Thanks for reaching out. I'll reply to your email within 24 hours.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                ref={formRef}
                onSubmit={handleSubmit}
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
              >
                {/* Row: Name + Email */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}
                  className="form-row"
                >
                  <FormField
                    id="msg-name"
                    label="Your name"
                    icon={<User size={15} />}
                    placeholder="Your Name"
                    value={name}
                    onChange={setName}
                  />
                  <FormField
                    id="msg-email"
                    label="Email address"
                    icon={<Mail size={15} />}
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={setEmail}
                  />
                </div>

                {/* Subject */}
                <FormField
                  id="msg-subject"
                  label="Subject"
                  icon={<MessageSquare size={15} />}
                  placeholder="Project idea, collaboration, internship..."
                  value={subject}
                  onChange={setSubject}
                />

                {/* Message */}
                <FormField
                  id="msg-message"
                  label="Message"
                  icon={<MessageSquare size={15} />}
                  placeholder="Tell me about your project, idea, or anything else..."
                  value={message}
                  onChange={setMessage}
                  multiline
                />

                {/* Error */}
                <AnimatePresence>
                  {status === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      style={{
                        display: 'flex', alignItems: 'center', gap: '0.6rem',
                        padding: '0.75rem 1rem',
                        background: 'rgba(239,68,68,0.1)',
                        border: '1px solid rgba(239,68,68,0.3)',
                        borderRadius: '10px',
                        color: '#f87171',
                        fontSize: '0.85rem',
                      }}
                    >
                      <AlertCircle size={15} />
                      {errMsg}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={status === 'loading'}
                  whileHover={{ scale: status === 'loading' ? 1 : 1.02, y: status === 'loading' ? 0 : -2 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.6rem',
                    padding: '1rem 2rem',
                    background: status === 'loading'
                      ? 'rgba(0,229,255,0.15)'
                      : 'linear-gradient(135deg, #00E5FF 0%, #0099AA 100%)',
                    border: 'none',
                    borderRadius: '12px',
                    color: status === 'loading' ? 'rgba(0,229,255,0.6)' : '#000',
                    fontFamily: 'var(--font-body)',
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    letterSpacing: '0.05em',
                    cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                    transition: 'all 0.25s ease',
                    boxShadow: status === 'loading' ? 'none' : '0 8px 24px rgba(0,229,255,0.25)',
                    marginTop: '0.25rem',
                  }}
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 size={16} style={{ animation: 'spin 1s linear infinite' }} />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Fine print */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            textAlign: 'center',
            marginTop: '1.25rem',
            fontSize: '0.75rem',
            color: 'rgba(255,255,255,0.2)',
          }}
        >
          Your message goes straight to my inbox — no spam, just me.
        </motion.p>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @media (max-width: 520px) {
          .form-row { grid-template-columns: 1fr !important; }
        }
        textarea, input {
          font-family: var(--font-body) !important;
          color-scheme: dark;
        }
        textarea::placeholder, input::placeholder {
          color: rgba(255,255,255,0.18);
        }
      `}</style>
    </section>
  );
}
