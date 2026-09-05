import { motion } from 'framer-motion';
import { PERSONAL_DETAILS } from '../constants';

const HERO_PROOF = [
  { value: '~96%', label: 'KaryaUp ownership', desc: 'Primary post-join contributor' },
  { value: '3', label: 'Clients from scratch', desc: 'FormX · AIA · Navkar' },
  { value: '1×', label: 'Hackathon', desc: 'OpenBridge Runner-Up' },
];

const Hero = ({ onOpenResume }) => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.pageYOffset - 100;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--bg-primary)',
        padding: '7rem 0 4.5rem'
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '100vw',
          zIndex: 0,
          pointerEvents: 'none',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          opacity: 0.055
        }}
        aria-hidden="true"
      >
        <div style={{ fontSize: '18vw', margin: '-3vw 0', fontWeight: '900', lineHeight: 0.8, color: '#ffffff', fontFamily: 'var(--font-display)', whiteSpace: 'nowrap' }}>POOJAN</div>
        <div style={{ fontSize: '18vw', margin: '-3vw 0', fontWeight: '900', lineHeight: 0.8, fontFamily: 'var(--font-display)', whiteSpace: 'nowrap', WebkitTextStroke: '1.5px #fff', color: 'transparent' }}>SHRIVASTAV</div>
      </div>

      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center'
        }}
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.08, delayChildren: 0.12 }
            }
          }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.25rem', maxWidth: '860px' }}
        >
          <motion.p
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
            style={{
              fontFamily: 'var(--font-code)',
              color: '#888',
              fontSize: '0.75rem',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              margin: 0
            }}
          >
            B.Tech AI · GIT · Class of 2028
          </motion.p>

          <div style={{ overflow: 'hidden', padding: '0 1rem' }}>
            <motion.h1
              variants={{ hidden: { y: '100%', opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } } }}
              style={{
                fontSize: 'clamp(3.5rem, 11vw, 8.5rem)',
                fontWeight: '900',
                lineHeight: 0.9,
                margin: 0,
                letterSpacing: '-0.03em',
                fontFamily: 'var(--font-display)',
                textTransform: 'uppercase',
                color: '#fff'
              }}
            >
              POOJAN
            </motion.h1>
          </div>

          <div style={{ overflow: 'hidden', padding: '0 1rem' }}>
            <motion.h2
              variants={{ hidden: { y: '100%', opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } } }}
              style={{
                fontSize: 'clamp(1.6rem, 4.5vw, 3.2rem)',
                fontWeight: '700',
                lineHeight: 1,
                margin: 0,
                letterSpacing: '-1px',
                color: 'rgba(255,255,255,0.7)',
                fontFamily: 'var(--font-display)',
                textTransform: 'uppercase'
              }}
            >
              P. Shrivastav
            </motion.h2>
          </div>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
            style={{
              maxWidth: '560px',
              color: '#aaa',
              fontSize: 'clamp(1.05rem, 2vw, 1.2rem)',
              lineHeight: 1.6,
              fontFamily: 'var(--font-main)',
              margin: '0.25rem 0 0'
            }}
          >
            {PERSONAL_DETAILS.bio}
          </motion.p>

          <motion.p
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            style={{
              margin: 0,
              color: '#777',
              fontFamily: 'var(--font-code)',
              fontSize: '0.78rem',
              letterSpacing: '0.06em',
              textTransform: 'uppercase'
            }}
          >
            {PERSONAL_DETAILS.roleLine}
          </motion.p>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
            style={{
              display: 'flex',
              gap: '0.9rem',
              marginTop: '0.5rem',
              flexWrap: 'wrap',
              justifyContent: 'center'
            }}
          >
            <motion.button
              onClick={onOpenResume}
              whileHover={{ scale: 1.03, backgroundColor: '#fff', color: '#000' }}
              whileTap={{ scale: 0.97 }}
              style={{
                padding: '0.85rem 1.75rem',
                background: '#fff',
                border: '1px solid #fff',
                borderRadius: '999px',
                color: '#000',
                fontSize: '0.8rem',
                fontWeight: '700',
                fontFamily: 'var(--font-code)',
                letterSpacing: '1px',
                cursor: 'pointer'
              }}
            >
              Resume
            </motion.button>
            <motion.button
              onClick={() => scrollTo('projects')}
              whileHover={{ scale: 1.03, borderColor: '#fff', color: '#fff' }}
              whileTap={{ scale: 0.97 }}
              style={{
                padding: '0.85rem 1.75rem',
                background: 'transparent',
                border: '1px solid rgba(255,255,255,0.25)',
                borderRadius: '999px',
                color: '#ccc',
                fontSize: '0.8rem',
                fontWeight: '700',
                fontFamily: 'var(--font-code)',
                letterSpacing: '1px',
                cursor: 'pointer'
              }}
            >
              Selected work
            </motion.button>
            <motion.button
              onClick={() => scrollTo('contact')}
              whileHover={{ scale: 1.03, borderColor: '#fff', color: '#fff' }}
              whileTap={{ scale: 0.97 }}
              style={{
                padding: '0.85rem 1.75rem',
                background: 'transparent',
                border: '1px solid rgba(255,255,255,0.25)',
                borderRadius: '999px',
                color: '#ccc',
                fontSize: '0.8rem',
                fontWeight: '700',
                fontFamily: 'var(--font-code)',
                letterSpacing: '1px',
                cursor: 'pointer'
              }}
            >
              Contact
            </motion.button>
          </motion.div>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
              gap: '1.25rem',
              width: '100%',
              maxWidth: '720px',
              marginTop: '2rem',
              borderTop: '1px solid rgba(255,255,255,0.1)',
              paddingTop: '1.75rem'
            }}
            className="hero-proof"
          >
            {HERO_PROOF.map((stat) => (
              <div key={stat.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.35rem', textAlign: 'center' }}>
                <span style={{ fontSize: 'clamp(1.4rem, 2.2vw, 1.9rem)', fontWeight: '900', color: '#fff', fontFamily: 'var(--font-display)', lineHeight: 1, letterSpacing: '-1px' }}>
                  {stat.value}
                </span>
                <span style={{ fontSize: '0.7rem', color: '#fff', fontFamily: 'var(--font-code)', letterSpacing: '1px', textTransform: 'uppercase', fontWeight: '700' }}>
                  {stat.label}
                </span>
                <span style={{ fontSize: '0.7rem', color: '#666', fontFamily: 'var(--font-code)' }}>
                  {stat.desc}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
