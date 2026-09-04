import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaArrowRight } from 'react-icons/fa';
import { PERSONAL_DETAILS } from '../constants';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${PERSONAL_DETAILS.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `Portfolio Contact from ${formData.name}`
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus(''), 5000);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputStyle = {
    width: '100%',
    padding: '1.25rem 0',
    background: 'transparent',
    border: 'none',
    borderBottom: '1px solid rgba(255,255,255,0.12)',
    color: '#fff',
    fontSize: 'clamp(1.05rem, 2.5vw, 1.35rem)',
    fontFamily: 'var(--font-code)',
    outline: 'none',
    transition: 'all 0.3s',
    letterSpacing: '-0.5px'
  };

  const socialBtn = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.6rem',
    padding: '0.75rem 1.4rem',
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(255,255,255,0.15)',
    borderRadius: '30px',
    color: '#fff',
    textDecoration: 'none',
    fontFamily: 'var(--font-code)',
    fontSize: '0.8rem',
    fontWeight: '700',
    transition: 'all 0.3s'
  };

  return (
    <section
      id="contact"
      style={{
        position: 'relative',
        padding: 'clamp(4rem, 10vw, 8rem) 0 5rem',
        background: 'var(--bg-primary)',
        minHeight: 'auto',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 1, width: '100%', maxWidth: '1400px' }}>
        <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 'clamp(2.5rem, 6vw, 6rem)', alignItems: 'start' }}>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}
          >
            <div>
              <p style={{ fontFamily: 'var(--font-code)', fontSize: '0.75rem', color: '#666', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem' }}>
                Contact
              </p>
              <h2
                style={{
                  fontSize: 'clamp(2.2rem, 5vw, 4.5rem)',
                  fontWeight: '900',
                  color: '#fff',
                  lineHeight: 0.95,
                  letterSpacing: '-2px',
                  fontFamily: 'var(--font-display)',
                  marginBottom: '1.25rem'
                }}
              >
                Let&apos;s talk about
                <br />
                <span style={{ color: 'transparent', WebkitTextStroke: '1px #777' }}>internships &amp; roles</span>
              </h2>
              <p style={{ color: '#888', fontSize: '1.05rem', lineHeight: 1.65, maxWidth: '420px' }}>
                Open to software engineering internships, full-time conversations, and collaboration on production products.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontFamily: 'var(--font-code)' }}>
              <div style={{ fontSize: '0.7rem', color: '#555', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Email</div>
              <a
                href={`mailto:${PERSONAL_DETAILS.email}`}
                style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', color: '#fff', textDecoration: 'none', width: 'fit-content' }}
                className="hover-underline"
              >
                {PERSONAL_DETAILS.email}
              </a>

              <div style={{ display: 'flex', gap: '2rem', marginTop: '1.25rem', flexWrap: 'wrap' }}>
                <div>
                  <div style={{ fontSize: '0.65rem', color: '#555', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Location</div>
                  <p style={{ fontSize: '0.95rem', color: '#888', marginTop: '0.25rem' }}>{PERSONAL_DETAILS.location}</p>
                </div>
                <div>
                  <div style={{ fontSize: '0.65rem', color: '#555', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Status</div>
                  <p style={{ fontSize: '0.95rem', color: '#888', marginTop: '0.25rem' }}>Open to opportunities</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.85rem', marginTop: '1.25rem', flexWrap: 'wrap' }}>
                <a href={PERSONAL_DETAILS.social.github} target="_blank" rel="noopener noreferrer" style={socialBtn}>
                  <FaGithub /> GitHub
                </a>
                <a href={PERSONAL_DETAILS.social.linkedin} target="_blank" rel="noopener noreferrer" style={socialBtn}>
                  <FaLinkedin /> LinkedIn
                </a>
              </div>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem', paddingTop: '0.5rem' }}
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
              style={inputStyle}
              onFocus={(e) => (e.target.style.borderColor = '#fff')}
              onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.12)')}
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email address"
              required
              style={inputStyle}
              onFocus={(e) => (e.target.style.borderColor = '#fff')}
              onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.12)')}
            />

            <textarea
              name="message"
              rows="3"
              value={formData.message}
              onChange={handleChange}
              placeholder="Project, internship, or role..."
              required
              style={{ ...inputStyle, resize: 'none' }}
              onFocus={(e) => (e.target.style.borderColor = '#fff')}
              onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.12)')}
            />

            <motion.button
              whileHover={{ scale: 1.03, backgroundColor: '#f0f0f0' }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              disabled={status === 'sending'}
              style={{
                alignSelf: 'flex-start',
                background: '#fff',
                color: '#000',
                border: 'none',
                padding: '1.1rem 2.2rem',
                borderRadius: '50px',
                fontSize: '0.95rem',
                fontWeight: '800',
                fontFamily: 'var(--font-code)',
                letterSpacing: '0.04em',
                cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginTop: '0.75rem'
              }}
            >
              {status === 'sending' ? 'Sending...' : 'Send message'}
              <FaArrowRight style={{ transform: 'rotate(-45deg)' }} />
            </motion.button>

            {status === 'success' && (
              <p style={{ color: '#aaa', fontFamily: 'var(--font-code)', fontSize: '0.85rem' }}>Message sent. I&apos;ll get back to you soon.</p>
            )}
            {status === 'error' && (
              <p style={{ color: '#ff6b6b', fontFamily: 'var(--font-code)', fontSize: '0.85rem' }}>
                Something went wrong. Please email me directly.
              </p>
            )}
          </motion.form>
        </div>
      </div>

      <style>{`
        ::-webkit-input-placeholder { color: #444; }
        :-moz-placeholder { color: #444; }
        ::-moz-placeholder { color: #444; }
        :-ms-input-placeholder { color: #444; }
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default Contact;
