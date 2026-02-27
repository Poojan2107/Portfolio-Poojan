import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ReactiveBackground from './components/ReactiveBackground';
import HeroicIntro from './components/HeroicIntro';
import CustomCursor from './components/CustomCursor';
import { PERSONAL_DETAILS } from './constants';

const SectionBrackets = () => {
    return (
        <div style={{ position: 'absolute', inset: '2rem', pointerEvents: 'none', zIndex: 0 }}>
            {/* Top Left */}
            <motion.div 
                initial={{ width: 0, height: 0, opacity: 0 }}
                whileInView={{ width: '40px', height: '40px', opacity: 0.3 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                style={{ position: 'absolute', top: 0, left: 0, borderLeft: '1px solid #fff', borderTop: '1px solid #fff' }}
            />
            {/* Top Right */}
            <motion.div 
                initial={{ width: 0, height: 0, opacity: 0 }}
                whileInView={{ width: '40px', height: '40px', opacity: 0.3 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                style={{ position: 'absolute', top: 0, right: 0, borderRight: '1px solid #fff', borderTop: '1px solid #fff' }}
            />
            {/* Bottom Left */}
            <motion.div 
                initial={{ width: 0, height: 0, opacity: 0 }}
                whileInView={{ width: '40px', height: '40px', opacity: 0.3 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                style={{ position: 'absolute', bottom: 0, left: 0, borderLeft: '1px solid #fff', borderBottom: '1px solid #fff' }}
            />
            {/* Bottom Right */}
            <motion.div 
                initial={{ width: 0, height: 0, opacity: 0 }}
                whileInView={{ width: '40px', height: '40px', opacity: 0.3 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                style={{ position: 'absolute', bottom: 0, right: 0, borderRight: '1px solid #fff', borderBottom: '1px solid #fff' }}
            />
        </div>
    );
};

function App() {
  const [activeTech, setActiveTech] = useState(null);
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const originalTitle = document.title;
    const handleVisibilityChange = () => {
      document.title = document.hidden ? "Call upon the hero! 🦸‍♂️" : originalTitle;
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  return (
    <div className="App">
       <AnimatePresence mode='wait'>
        {showIntro ? (
          <HeroicIntro key="intro" onComplete={() => setShowIntro(false)} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
              <ReactiveBackground />
              
              {/* Subtle CRT / Scanline Overlay */}
              <div style={{
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  width: '100vw',
                  height: '100vh',
                  background: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.1) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.01), rgba(0, 255, 0, 0.01), rgba(0, 0, 255, 0.01))',
                  backgroundSize: '100% 4px, 3px 100%',
                  pointerEvents: 'none',
                  zIndex: 9999,
                  opacity: 0.3
              }}></div>

              <CustomCursor />
              <Navbar />
              
              {/* Left Persistent Socials */}
              <motion.div 
                 initial={{ opacity: 0, x: -50 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ duration: 1, delay: 0.5 }}
                 style={{
                     position: 'fixed',
                     left: '40px',
                     bottom: '0',
                     display: 'flex',
                     flexDirection: 'column',
                     alignItems: 'center',
                     gap: '2rem',
                     zIndex: 1000,
                     mixBlendMode: 'difference'
                 }}
              >
                 <a href={PERSONAL_DETAILS.social.github} target="_blank" rel="noopener noreferrer" style={{ color: '#fff', fontSize: '1.2rem', transition: 'transform 0.3s' }} className="hover:scale-125">
                     <FaGithub />
                 </a>
                 <a href={PERSONAL_DETAILS.social.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: '#fff', fontSize: '1.2rem', transition: 'transform 0.3s' }} className="hover:scale-125">
                     <FaLinkedin />
                 </a>
                 <div style={{ width: '1px', height: '100px', background: 'rgba(255,255,255,0.4)', marginTop: '0.5rem' }}></div>
              </motion.div>

              {/* Right Persistent Email */}
              <motion.div 
                 initial={{ opacity: 0, x: 50 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ duration: 1, delay: 0.5 }}
                 style={{
                     position: 'fixed',
                     right: '40px',
                     bottom: '0',
                     display: 'flex',
                     flexDirection: 'column',
                     alignItems: 'center',
                     gap: '2rem',
                     zIndex: 1000,
                     mixBlendMode: 'difference'
                 }}
              >
                 <a href={`mailto:${PERSONAL_DETAILS.email}`} style={{ 
                     color: '#fff', 
                     fontFamily: 'var(--font-code)', 
                     fontSize: '0.8rem', 
                     letterSpacing: '2px', 
                     writingMode: 'vertical-rl', 
                     textDecoration: 'none',
                     transition: 'transform 0.3s'
                 }} className="hover:-translate-y-2">
                     {PERSONAL_DETAILS.email}
                 </a>
                 <div style={{ width: '1px', height: '100px', background: 'rgba(255,255,255,0.4)', marginTop: '0.5rem' }}></div>
              </motion.div>

              <div style={{ position: 'relative' }}>
                <Hero />
              </div>

              <div style={{ position: 'relative' }}>
                <TechStack setActiveTech={setActiveTech} />
              </div>

              <div style={{ position: 'relative' }}>
                <Education />
              </div>

              <div style={{ position: 'relative' }}>
                <Projects activeTech={activeTech} />
              </div>

              <div style={{ position: 'relative' }}>
                <Contact />
              </div>
              
              {/* Infinite Scrolling Marquee Pattern */}
              <div style={{ 
                  width: '100%', 
                  background: 'transparent',
                  padding: '4rem 0',
                  overflow: 'hidden',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2rem, 5vw, 4rem)',
                  fontWeight: '900',
                  whiteSpace: 'nowrap',
                  textTransform: 'uppercase',
                  WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
                  maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
              }}>
                 <motion.div
                    animate={{ x: ['0%', '-50%'] }}
                    transition={{ ease: 'linear', duration: 25, repeat: Infinity }}
                    style={{ 
                        display: 'flex', 
                        gap: '2rem',
                        color: 'transparent',
                        WebkitTextStroke: '1px rgba(255,255,255,0.4)',
                    }}
                 >
                    {/* Creative Dev Student Oriented Text */}
                    <span>MERN STACK ALCHEMIST</span>
                    <span style={{ color: 'var(--accent-primary)', WebkitTextStroke: '0' }}>//</span>
                    <span>AI INTEGRATOR</span>
                    <span style={{ color: 'var(--accent-primary)', WebkitTextStroke: '0' }}>//</span>
                    <span>CREATING DIGITAL MASTERPIECES</span>
                    <span style={{ color: 'var(--accent-primary)', WebkitTextStroke: '0' }}>//</span>
                    <span>DEV STUDENT</span>
                    <span style={{ color: 'var(--accent-primary)', WebkitTextStroke: '0' }}>//</span>
                    <span>MERN STACK ALCHEMIST</span>
                    <span style={{ color: 'var(--accent-primary)', WebkitTextStroke: '0' }}>//</span>
                    <span>AI INTEGRATOR</span>
                    <span style={{ color: 'var(--accent-primary)', WebkitTextStroke: '0' }}>//</span>
                    <span>CREATING DIGITAL MASTERPIECES</span>
                    <span style={{ color: 'var(--accent-primary)', WebkitTextStroke: '0' }}>//</span>
                    <span>DEV STUDENT</span>
                    <span style={{ color: 'var(--accent-primary)', WebkitTextStroke: '0' }}>//</span>
                 </motion.div>
              </div>

              {/* Hyper-Cinematic Footer */}
              <footer style={{ 
                  padding: '6rem 0 4rem 0', 
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  background: 'var(--bg-primary)',
                  position: 'relative',
                  overflow: 'hidden'
              }}>
                  <div style={{ textAlign: 'center', marginBottom: '6rem', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      
                      <p style={{ fontFamily: 'var(--font-code)', color: '#666', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8vw' }}>
                          [ END OF TRANSMISSION ]
                      </p>
                      
                      {/* Massive Typography Name with Glow/Split effect AND Interactive Hover Reveal */}
                      <motion.div 
                        initial="idle"
                        whileHover="hover"
                        style={{ position: 'relative', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}
                      >
                        
                        {/* Hidden Text Revealed on Hover */}
                        <motion.div
                           variants={{
                               idle: { opacity: 0, scale: 0.8, letterSpacing: '0vw' },
                               hover: { opacity: 1, scale: 1, letterSpacing: '0.5vw' }
                           }}
                           transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                           style={{
                               position: 'absolute',
                               zIndex: 1,
                               color: 'var(--accent-primary)',
                               fontFamily: 'var(--font-code)',
                               fontSize: 'clamp(0.8rem, 1.5vw, 2rem)',
                               fontWeight: 'bold',
                               textTransform: 'uppercase',
                               whiteSpace: 'nowrap'
                           }}
                        >
                            LET'S BUILD SOMETHING EXTRAORDINARY
                        </motion.div>

                        {/* Top Half of the text */}
                        <motion.h1 
                            variants={{
                                idle: { y: 0 },
                                hover: { y: '-3vw' }
                            }}
                            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            style={{ 
                              fontSize: '14vw', 
                              fontWeight: '900', 
                              margin: 0, 
                              lineHeight: 0.75, 
                              fontFamily: 'var(--font-display)',
                              color: '#ffffff',
                              letterSpacing: '-1vw',
                              position: 'absolute',
                              clipPath: 'polygon(0 0%, 100% 0%, 100% 50%, 0% 50%)', // Top Half
                              whiteSpace: 'nowrap',
                              userSelect: 'none',
                              zIndex: 2
                          }}>
                              POOJAN
                          </motion.h1>

                        {/* Bottom Half of the text */}
                        <motion.h1 
                            variants={{
                                idle: { y: 0 },
                                hover: { y: '3vw' }
                            }}
                            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            style={{ 
                              fontSize: '14vw', 
                              fontWeight: '900', 
                              margin: 0, 
                              lineHeight: 0.75, 
                              fontFamily: 'var(--font-display)',
                              color: 'transparent',
                              WebkitTextStroke: '2px rgba(255,255,255,0.4)',
                              letterSpacing: '-1vw',
                              position: 'relative',
                              zIndex: 2,
                              clipPath: 'polygon(0 50%, 100% 50%, 100% 100%, 0% 100%)', // Bottom Half
                              whiteSpace: 'nowrap',
                              userSelect: 'none'
                          }}>
                              POOJAN
                          </motion.h1>
                      </motion.div>

                  </div>

                  <div style={{ 
                      width: '100%', 
                      maxWidth: '1600px', 
                      display: 'flex', 
                      justifyContent: 'space-between', 
                      alignItems: 'center',
                      borderTop: '1px solid rgba(255,255,255,0.1)', 
                      padding: '3rem 4rem 0 4rem',
                      color: '#666',
                      fontFamily: 'var(--font-code)',
                      flexWrap: 'wrap',
                      gap: '2rem'
                  }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                          <span style={{ width: '10px', height: '10px', background: '#fff', borderRadius: '50%' }}></span>
                          <p style={{ fontSize: '0.9rem', letterSpacing: '1px' }}>© {new Date().getFullYear()} POOJAN SHRIVASTAV.</p>
                      </div>
                      
                      <div style={{ display: 'flex', gap: '3rem' }}>
                         <motion.button 
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
                            whileHover={{ y: -5, color: '#fff' }}
                            style={{ color: '#888', background: 'transparent', border: 'none', cursor: 'pointer', fontSize: '0.9rem', letterSpacing: '2px', fontWeight: 'bold', transition: 'color 0.3s' }}>
                            BACK TO TOP ↑
                         </motion.button>
                      </div>
                  </div>
              </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
