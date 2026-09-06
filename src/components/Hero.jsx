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
      className="hero-section"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--bg-primary)',
        padding: '7rem 0 5rem'
      }}
    >
      {/* Soft monochrome atmosphere */}
      <div className="hero-atmosphere" aria-hidden="true" />

      <div
        className="hero-watermark"
        aria-hidden="true"
      >
        <div className="hero-watermark-line">POOJAN</div>
        <div className="hero-watermark-line outline">SHRIVASTAV</div>
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
              transition: { staggerChildren: 0.09, delayChildren: 0.1 }
            }
          }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.15rem', maxWidth: '880px' }}
        >
          <motion.p
            variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0 } }}
            className="hero-eyebrow"
          >
            B.Tech AI · GIT · Class of 2028
          </motion.p>

          <div style={{ overflow: 'hidden', padding: '0 0.5rem' }}>
            <motion.h1
              variants={{ hidden: { y: '110%', opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.95, ease: [0.16, 1, 0.3, 1] } } }}
              className="hero-title"
            >
              POOJAN
            </motion.h1>
          </div>

          <div style={{ overflow: 'hidden', padding: '0 0.5rem' }}>
            <motion.h2
              variants={{ hidden: { y: '110%', opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.95, ease: [0.16, 1, 0.3, 1] } } }}
              className="hero-subtitle"
            >
              P. Shrivastav
            </motion.h2>
          </div>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
            className="hero-bio"
          >
            {PERSONAL_DETAILS.bio}
          </motion.p>

          <motion.p
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            className="hero-role-line"
          >
            {PERSONAL_DETAILS.roleLine}
          </motion.p>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
            className="hero-ctas"
          >
            <motion.button
              onClick={onOpenResume}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="btn-primary"
            >
              Resume
            </motion.button>
            <motion.button
              onClick={() => scrollTo('projects')}
              whileHover={{ scale: 1.03, y: -2, borderColor: '#fff', color: '#fff' }}
              whileTap={{ scale: 0.97 }}
              className="btn-ghost"
            >
              Selected work
            </motion.button>
            <motion.button
              onClick={() => scrollTo('contact')}
              whileHover={{ scale: 1.03, y: -2, borderColor: '#fff', color: '#fff' }}
              whileTap={{ scale: 0.97 }}
              className="btn-ghost"
            >
              Contact
            </motion.button>
          </motion.div>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
            className="hero-proof"
          >
            {HERO_PROOF.map((stat, i) => (
              <div key={stat.label} className="hero-proof-item">
                {i > 0 && <span className="hero-proof-rule" aria-hidden="true" />}
                <span className="hero-proof-value">{stat.value}</span>
                <span className="hero-proof-label">{stat.label}</span>
                <span className="hero-proof-desc">{stat.desc}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.button
        type="button"
        className="hero-scroll-cue"
        onClick={() => scrollTo('projects')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        aria-label="Scroll to selected work"
      >
        <span>Scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          aria-hidden="true"
        >
          ↓
        </motion.span>
      </motion.button>
    </section>
  );
};

export default Hero;
