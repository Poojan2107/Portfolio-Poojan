import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaArrowRight } from 'react-icons/fa';
import { PERSONAL_DETAILS } from '../constants';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [coords, setCoords] = useState({ lat: '28.6139', lng: '77.2090' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${PERSONAL_DETAILS.email}`, {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
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
    } catch (error) {
      setStatus('error');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleMouseMove = (e) => {
    const xSkew = (e.clientX / window.innerWidth - 0.5) * 0.01;
    const ySkew = (e.clientY / window.innerHeight - 0.5) * 0.01;
    setCoords({
        lat: (28.6139 + ySkew).toFixed(4),
        lng: (77.2090 + xSkew).toFixed(4)
    });
  };

  const inputStyle = {
    width: '100%',
    padding: '1.5rem 0',
    background: 'transparent',
    border: 'none',
    borderBottom: '1px solid rgba(255,255,255,0.1)',
    color: '#fff',
    fontSize: '1.5rem',
    fontFamily: 'var(--font-code)',
    outline: 'none',
    transition: 'all 0.4s',
    letterSpacing: '-1px'
  };

  return (
    <section 
        id="contact" 
        onMouseMove={handleMouseMove}
        style={{ 
            position: 'relative', 
            padding: '10rem 0 5rem 0', 
            background: 'var(--bg-primary)', 
            minHeight: 'auto',
            display: 'flex',
            alignItems: 'center'
        }}
    >
      
      <div className="container" style={{ position: 'relative', zIndex: 1, width: '100%', maxWidth: '1400px' }}>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '6rem', alignItems: 'start' }}>
          
          {/* Typographic Header / Details */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}
          >
            <div style={{ position: 'relative' }}>
                {/* Live Uplink Coordinates */}
                <div style={{ position: 'absolute', top: '-4rem', left: 0, fontFamily: 'var(--font-code)', fontSize: '0.7rem', color: 'var(--accent-primary)', display: 'flex', gap: '2rem', opacity: 0.6 }}>
                    <span>UP-LINKED: {coords.lat}° N / {coords.lng}° E</span>
                    <span>SIGNAL: STABLE</span>
                </div>

               <h2 style={{ fontSize: 'clamp(3rem, 6vw, 7rem)', fontWeight: '900', color: '#fff', lineHeight: 0.9, letterSpacing: '-4px', fontFamily: 'var(--font-display)', marginBottom: '2rem' }}>
                  SECURE <br/>
                  <span style={{ color: 'transparent', WebkitTextStroke: '1px #666' }}>UPLINK</span>
               </h2>
               <p style={{ color: '#888', fontSize: '1.1rem', lineHeight: 1.6, maxWidth: '400px', borderLeft: '1px solid rgba(255,255,255,0.1)', paddingLeft: '1.5rem' }}>
                  Transmission initiation requested. Deploy your message to re-establish coordination for new digital architecture.
               </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontFamily: 'var(--font-code)' }}>
               <div style={{ fontSize: '0.7rem', color: '#444' }}>// NODE_ADDRESS</div>
               <a href={`mailto:${PERSONAL_DETAILS.email}`} style={{ fontSize: '1.5rem', color: '#fff', textDecoration: 'none', position: 'relative', display: 'inline-block', width: 'fit-content' }} className="hover-underline">
                 {PERSONAL_DETAILS.email}
               </a>
               <div style={{ display: 'flex', gap: '2rem', marginTop: '1rem' }}>
                   <div>
                        <div style={{ fontSize: '0.6rem', color: '#444' }}>[ LOCATION ]</div>
                        <p style={{ fontSize: '1rem', color: '#666' }}>{PERSONAL_DETAILS.location}</p>
                   </div>
                   <div>
                        <div style={{ fontSize: '0.6rem', color: '#444' }}>[ STATUS ]</div>
                        <p style={{ fontSize: '1rem', color: '#666' }}>OPEN_FOR_COLLAB</p>
                   </div>
               </div>
            </div>
          </motion.div>

          {/* Minimal Form */}
          <motion.form 
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '2rem', paddingTop: '2rem' }}
          >
             <div style={{ position: 'relative' }}>
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  placeholder="WHAT'S YOUR NAME?" 
                  required 
                  style={inputStyle}
                  onFocus={(e) => e.target.style.borderColor = '#fff'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                />
             </div>
             
             <div style={{ position: 'relative' }}>
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  placeholder="EMAIL ADDRESS" 
                  required 
                  style={inputStyle}
                  onFocus={(e) => e.target.style.borderColor = '#fff'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                />
             </div>

             <div style={{ position: 'relative' }}>
                <textarea 
                  name="message" 
                  rows="3"
                  value={formData.message} 
                  onChange={handleChange} 
                  placeholder="TELL ME ABOUT IT..." 
                  required 
                  style={{ ...inputStyle, resize: 'none' }}
                  onFocus={(e) => e.target.style.borderColor = '#fff'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                />
             </div>

             <motion.button 
                whileHover={{ scale: 1.05, backgroundColor: '#f0f0f0' }}
                whileTap={{ scale: 0.95 }}
                type="submit" 
                disabled={status === 'sending'}
                style={{
                    alignSelf: 'flex-start',
                    background: '#fff',
                    color: '#000',
                    border: 'none',
                    padding: '1.5rem 3rem',
                    borderRadius: '50px',
                    fontSize: '1.2rem',
                    fontWeight: '900',
                    fontFamily: 'var(--font-display)',
                    cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    marginTop: '2rem',
                    transition: 'background 0.3s'
                }}
             >
                {status === 'sending' ? 'TRANSMITTING...' : 'SEND MESSAGE'} 
                <motion.div
                   whileHover={{ rotate: 45, x: 5 }}
                   transition={{ type: 'spring', stiffness: 300 }}
                   style={{ display: 'flex', alignItems: 'center' }}
                >
                    <FaArrowRight style={{ transform: 'rotate(-45deg)' }} />
                </motion.div>
             </motion.button>

             {status === 'success' && (
                 <p style={{ color: '#aaa', fontFamily: 'var(--font-code)' }}>[ SYSTEM ] Message delivered successfully.</p>
             )}
             {status === 'error' && (
                 <p style={{ color: '#ff4444', fontFamily: 'var(--font-code)' }}>[ ERROR ] Transmission failed. Please contact me via email.</p>
             )}

          </motion.form>

        </div>
      </div>
      
      {/* CSS For the hover links */}
      <style>{`
        ::-webkit-input-placeholder { color: #333; }
        :-moz-placeholder { color: #333; }
        ::-moz-placeholder { color: #333; }
        :-ms-input-placeholder { color: #333; }
      `}</style>
    </section>
  );
};

export default Contact;
