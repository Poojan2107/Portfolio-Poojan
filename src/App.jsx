import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Dossier from './components/Dossier';
import Philosophy from './components/Philosophy';
import TechStack from './components/TechStack';
import Education from './components/Education';
import Missions from './components/Missions';
import Projects from './components/Projects';
import Playbook from './components/Playbook';
import Contact from './components/Contact';
import ReactiveBackground from './components/ReactiveBackground';
import ResumeModal from './components/ResumeModal';
import { PERSONAL_DETAILS } from './constants';

function App() {
  const [activeTech, setActiveTech] = useState(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="App">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <ReactiveBackground />
        <Navbar onOpenResume={() => setIsResumeOpen(true)} />
        <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />

        {/* Left Persistent Socials */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
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
          className="side-rail"
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
          transition={{ duration: 0.8, delay: 0.2 }}
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
          className="side-rail"
        >
          <a
            href={`mailto:${PERSONAL_DETAILS.email}`}
            style={{
              color: '#fff',
              fontFamily: 'var(--font-code)',
              fontSize: '0.8rem',
              letterSpacing: '2px',
              writingMode: 'vertical-rl',
              textDecoration: 'none',
              transition: 'transform 0.3s'
            }}
            className="hover:-translate-y-2"
          >
            {PERSONAL_DETAILS.email}
          </a>
          <div style={{ width: '1px', height: '100px', background: 'rgba(255,255,255,0.4)', marginTop: '0.5rem' }}></div>
        </motion.div>

        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <Projects activeTech={activeTech} />
        <Missions />
        <Dossier />
        <Philosophy />
        <TechStack setActiveTech={setActiveTech} />
        <Playbook />
        <Education />
        <Contact />

        <div
          style={{
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
          }}
        >
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{ ease: 'linear', duration: 28, repeat: Infinity }}
            style={{
              display: 'flex',
              gap: '2rem',
              color: 'transparent',
              WebkitTextStroke: '1px rgba(255,255,255,0.35)'
            }}
          >
            <span>FULL STACK · AI STUDENT</span>
            <span style={{ color: '#fff', WebkitTextStroke: '0' }}>·</span>
            <span>KARYAUP · 13 UTOPIA</span>
            <span style={{ color: '#fff', WebkitTextStroke: '0' }}>·</span>
            <span>FORMX · AIA · NAVKAR</span>
            <span style={{ color: '#fff', WebkitTextStroke: '0' }}>·</span>
            <span>FULL STACK · AI STUDENT</span>
            <span style={{ color: '#fff', WebkitTextStroke: '0' }}>·</span>
            <span>KARYAUP · 13 UTOPIA</span>
            <span style={{ color: '#fff', WebkitTextStroke: '0' }}>·</span>
            <span>FORMX · AIA · NAVKAR</span>
            <span style={{ color: '#fff', WebkitTextStroke: '0' }}>·</span>
          </motion.div>
        </div>

        <footer
          style={{
            padding: '6rem 0 4rem 0',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            background: 'var(--bg-primary)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '6rem', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <p style={{ fontFamily: 'var(--font-code)', color: '#666', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8vw' }}>
              Available for internships &amp; full-time opportunities
            </p>

            <motion.div
              initial="idle"
              whileHover="hover"
              style={{ position: 'relative', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}
            >
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
                Let&apos;s build something that ships
              </motion.div>

              <motion.h1
                variants={{ idle: { y: 0 }, hover: { y: '-3vw' } }}
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
                  clipPath: 'polygon(0 0%, 100% 0%, 100% 50%, 0% 50%)',
                  whiteSpace: 'nowrap',
                  userSelect: 'none',
                  zIndex: 2
                }}
              >
                POOJAN
              </motion.h1>

              <motion.h1
                variants={{ idle: { y: 0 }, hover: { y: '3vw' } }}
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
                  clipPath: 'polygon(0 50%, 100% 50%, 100% 100%, 0% 100%)',
                  whiteSpace: 'nowrap',
                  userSelect: 'none'
                }}
              >
                POOJAN
              </motion.h1>
            </motion.div>
          </div>

          <div
            style={{
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
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ width: '10px', height: '10px', background: '#fff', borderRadius: '50%' }}></span>
              <p style={{ fontSize: '0.9rem', letterSpacing: '1px' }}>© {new Date().getFullYear()} Poojan Shrivastav</p>
            </div>

            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              whileHover={{ y: -5, color: '#fff' }}
              style={{ color: '#888', background: 'transparent', border: 'none', cursor: 'pointer', fontSize: '0.9rem', letterSpacing: '2px', fontWeight: 'bold', transition: 'color 0.3s' }}
            >
              BACK TO TOP ↑
            </motion.button>
          </div>
        </footer>

        <style>{`
          @media (max-width: 900px) {
            .side-rail { display: none !important; }
          }
        `}</style>
      </motion.div>
    </div>
  );
}

export default App;
