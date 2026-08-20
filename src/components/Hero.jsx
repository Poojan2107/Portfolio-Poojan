import { motion } from 'framer-motion';
import { PERSONAL_DETAILS, SOCIAL_PROOF_BADGES } from '../constants';

const Hero = () => {
  return (
    <section id="home" style={{ 
      minHeight: '100vh', /* Shrunk vertically just a bit to pull next section closer */
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--bg-primary)'
    }}>
      
      {/* Massive Abstract Typography Background */}
      <div style={{
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
          opacity: 0.05
      }}>
          <h1 style={{ fontSize: '25vw', margin: '-5vw 0', fontWeight: '900', lineHeight: 0.8, color: '#ffffff', fontFamily: 'var(--font-display)', whiteSpace: 'nowrap' }}>POOJAN</h1>
          <h1 style={{ fontSize: '25vw', margin: '-5vw 0', fontWeight: '900', lineHeight: 0.8, fontFamily: 'var(--font-display)', whiteSpace: 'nowrap', WebkitTextStroke: '2px #fff', color: 'transparent' }}>SHRIVASTAV</h1>
      </div>

      <div className="container" style={{ 
        position: 'relative', 
        zIndex: 2,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        marginTop: '6rem' /* Added margin to completely clear the floating navbar */
      }}>
        {/* Background Glitch Ribbons */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
            {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ 
                      x: ['-100%', '200%'],
                      opacity: [0, 0.15, 0],
                      height: [2, 10, 2]
                  }}
                  transition={{ 
                      duration: 0.8, 
                      repeat: Infinity, 
                      repeatDelay: Math.random() * 5 + 2,
                      delay: i * 2 
                  }}
                  style={{
                      position: 'absolute',
                      top: (20 + (i * 25)) + '%',
                      width: '50%',
                      background: 'linear-gradient(90deg, transparent, var(--accent-primary), transparent)',
                      filter: 'blur(1px)'
                  }}
                />
            ))}
        </div>
        
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { 
              opacity: 1, 
              transition: { staggerChildren: 0.1, delayChildren: 0.3 }
            }
          }}
        >
          <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } } }}>
             <h2 style={{ 
                  fontFamily: 'var(--font-code)', 
                  color: 'var(--accent-primary)', 
                  fontSize: '0.8rem',
                  letterSpacing: '0.4em',
                  textTransform: 'uppercase',
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '1rem',
                  flexWrap: 'wrap'
             }}>
                  <span style={{ color: 'var(--text-secondary)' }}>//</span> 
                  {PERSONAL_DETAILS.roles.map((role, idx) => (
                    <span key={idx} style={{ display: 'inline-flex', alignItems: 'center' }}>
                      {role}
                      {idx < PERSONAL_DETAILS.roles.length - 1 && (
                        <span style={{ color: 'var(--text-secondary)', margin: '0 0.8rem' }}>•</span>
                      )}
                    </span>
                  ))}
                  <span style={{ color: 'var(--text-secondary)' }}>//</span>
             </h2>
          </motion.div>
          
          {/* Main Title - Split into words for masking effect */}
          <div style={{ overflow: 'hidden', padding: '0 1rem', position: 'relative' }}>
              <motion.h1 
                variants={{ hidden: { y: '100%', opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } } }}
                style={{ 
                  fontSize: 'clamp(4rem, 12vw, 10rem)', 
                  fontWeight: '900', 
                  lineHeight: '0.9', 
                  margin: '0',
                  letterSpacing: '-0.03em',
                  fontFamily: 'var(--font-display)',
                  position: 'relative',
                  textTransform: 'uppercase',
                  WebkitTextStroke: '1.5px rgba(255,255,255,0.4)',
                  color: 'transparent',
                  display: 'flex',
                  justifyContent: 'center'
                }}
              >
                {/* The 'Live' Shine Layer - Clipped to Text */}
                <motion.span
                  animate={{ backgroundPosition: ['200% 0%', '-200% 0%'] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), rgba(255,255,255,0.5), rgba(255,255,255,0.2), transparent)',
                    backgroundSize: '200% 100%',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    WebkitTextStroke: '0px',
                    zIndex: 2,
                    pointerEvents: 'none'
                  }}
                >
                    POOJAN
                </motion.span>
                
                {/* Static Base Stroke */}
                POOJAN
              </motion.h1>
          </div>
          <div style={{ overflow: 'hidden', padding: '0 1rem', position: 'relative' }}>
              {/* High-Fidelity Liquid Mask Shine */}
              <motion.div
                animate={{ 
                    x: ['-150%', '150%'],
                    opacity: [0, 1, 0]
                }}
                transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    repeatDelay: 2
                }}
                style={{
                  position: 'absolute',
                  top: '-20%',
                  left: 0,
                  width: '40%',
                  height: '140%',
                  background: 'linear-gradient(110deg, transparent, rgba(255,255,255,0.2), rgba(255,255,255,0.4), rgba(255,255,255,0.2), transparent)',
                  zIndex: 3,
                  pointerEvents: 'none',
                  skewX: -25,
                  filter: 'blur(5px)'
                }}
              />
              <motion.h1 
                variants={{ hidden: { y: '100%' }, visible: { y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } } }}
                style={{ 
                  fontSize: 'clamp(3rem, 7vw, 6rem)', 
                  fontWeight: '900', 
                  lineHeight: '0.9', 
                  margin: '0',
                  letterSpacing: '-2px',
                  color: '#ffffff',
                  fontFamily: 'var(--font-display)',
                  position: 'relative',
                  display: 'inline-block'
                }}
              >
                {/* Dynamic Ghost Interference Layer */}
                <motion.span 
                    animate={{ 
                        opacity: [0.1, 0.3, 0.1],
                        x: [-1, 1, -1]
                    }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                    style={{ 
                        position: 'absolute', 
                        top: '4px', 
                        left: '4px', 
                        zIndex: -1, 
                        color: 'transparent',
                        WebkitTextStroke: '1px rgba(255,255,255,0.15)',
                        width: '100%',
                        pointerEvents: 'none',
                        userSelect: 'none'
                    }}
                >
                    P. SHRIVASTAV
                </motion.span>
                P. SHRIVASTAV
              </motion.h1>
          </div>

          <motion.div 
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 1, delay: 0.8 } } }}
            style={{ marginTop: '2.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}
          >
             <p style={{ 
                maxWidth: '600px', 
                color: '#aaaaaa', 
                fontSize: '1.2rem',
                lineHeight: '1.6',
                fontFamily: 'var(--font-main)'
             }}>
                {PERSONAL_DETAILS.bio}
             </p>

             {/* Immediate Social Proof Badges */}
             <div style={{
                 display: 'flex',
                 flexWrap: 'wrap',
                 justifyContent: 'center',
                 gap: '1rem',
                 maxWidth: '800px',
                 marginTop: '0.5rem'
             }}>
                 {SOCIAL_PROOF_BADGES.map((badge, idx) => (
                     <motion.div
                         key={idx}
                         whileHover={{ scale: 1.02, borderColor: 'rgba(255, 255, 255, 0.2)' }}
                         style={{
                             padding: '0.6rem 1.2rem',
                             background: 'rgba(255, 255, 255, 0.02)',
                             border: '1px solid rgba(255, 255, 255, 0.08)',
                             borderRadius: '5px',
                             color: '#ccc',
                             fontFamily: 'var(--font-code)',
                             fontSize: '0.8rem',
                             display: 'flex',
                             alignItems: 'center',
                             gap: '0.5rem',
                             boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
                             transition: 'all 0.3s',
                             cursor: 'default'
                         }}
                     >
                         <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-cyber)', display: 'inline-block' }}></span>
                         {badge.text}
                     </motion.div>
                 ))}
             </div>

             {/* Call To Actions */}
             <div style={{
                 display: 'flex',
                 gap: '1.2rem',
                 marginTop: '1rem',
                 flexWrap: 'wrap',
                 justifyContent: 'center'
             }}>
                 <motion.a
                     href="/resume.pdf"
                     download
                     whileHover={{ scale: 1.05, backgroundColor: '#fff', color: '#000' }}
                     whileTap={{ scale: 0.95 }}
                     style={{
                         padding: '0.8rem 2rem',
                         background: 'transparent',
                         border: '1px solid #fff',
                         borderRadius: '30px',
                         color: '#fff',
                         fontSize: '0.85rem',
                         fontWeight: 'bold',
                         fontFamily: 'var(--font-code)',
                         letterSpacing: '1px',
                         textDecoration: 'none',
                         cursor: 'pointer',
                         transition: 'background 0.3s, color 0.3s'
                     }}
                 >
                     DOWNLOAD RESUME
                 </motion.a>
                 <motion.a
                     href={PERSONAL_DETAILS.social.github}
                     target="_blank"
                     rel="noopener noreferrer"
                     whileHover={{ scale: 1.05, borderColor: 'var(--accent-cyber)', color: '#fff' }}
                     whileTap={{ scale: 0.95 }}
                     style={{
                         padding: '0.8rem 2rem',
                         background: 'rgba(255,255,255,0.03)',
                         border: '1px solid rgba(255,255,255,0.1)',
                         borderRadius: '30px',
                         color: '#aaa',
                         fontSize: '0.85rem',
                         fontWeight: 'bold',
                         fontFamily: 'var(--font-code)',
                         letterSpacing: '1px',
                         textDecoration: 'none',
                         cursor: 'pointer',
                         transition: 'all 0.3s'
                     }}
                 >
                     GITHUB
                 </motion.a>
                 <motion.a
                     href={PERSONAL_DETAILS.social.linkedin}
                     target="_blank"
                     rel="noopener noreferrer"
                     whileHover={{ scale: 1.05, borderColor: 'var(--accent-cyber)', color: '#fff' }}
                     whileTap={{ scale: 0.95 }}
                     style={{
                         padding: '0.8rem 2rem',
                         background: 'rgba(255,255,255,0.03)',
                         border: '1px solid rgba(255,255,255,0.1)',
                         borderRadius: '30px',
                         color: '#aaa',
                         fontSize: '0.85rem',
                         fontWeight: 'bold',
                         fontFamily: 'var(--font-code)',
                         letterSpacing: '1px',
                         textDecoration: 'none',
                         cursor: 'pointer',
                         transition: 'all 0.3s'
                     }}
                 >
                     LINKEDIN
                 </motion.a>
                 <motion.a
                     href={`mailto:${PERSONAL_DETAILS.email}`}
                     whileHover={{ scale: 1.05, borderColor: 'var(--accent-cyber)', color: '#fff' }}
                     whileTap={{ scale: 0.95 }}
                     style={{
                         padding: '0.8rem 2rem',
                         background: 'rgba(255,255,255,0.03)',
                         border: '1px solid rgba(255,255,255,0.1)',
                         borderRadius: '30px',
                         color: '#aaa',
                         fontSize: '0.85rem',
                         fontWeight: 'bold',
                         fontFamily: 'var(--font-code)',
                         letterSpacing: '1px',
                         textDecoration: 'none',
                         cursor: 'pointer',
                         transition: 'all 0.3s'
                     }}
                 >
                     GET IN TOUCH
                 </motion.a>
             </div>

             {/* Tactical Metrics Grid */}
              <div 
                style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', 
                  gap: '1.5rem', 
                  width: '100%', 
                  maxWidth: '1200px', 
                  marginTop: '4rem',
                  border: '1px solid rgba(0, 240, 255, 0.15)',
                  padding: '2.5rem 2rem',
                  background: 'rgba(8, 14, 26, 0.7)',
                  backdropFilter: 'blur(20px)',
                  boxShadow: '0 20px 50px rgba(0,0,0,0.8), 0 0 30px rgba(0, 240, 255, 0.08)',
                  borderRadius: '16px'
                }}
                className="metrics-grid"
              >
                {[
                  { value: "2.5K+", label: "Active CRM Users", desc: "KaryaUp SaaS Internship" },
                  { value: "5+ APPS", label: "Production Shipped", desc: "SaaS, Agency & AI Products" },
                  { value: "~80%", label: "Payload Optimization", desc: "36MB → 6.89MB Sprint" },
                  { value: "RUNNER-UP", label: "Build With AI", desc: "OpenBridge Platform" },
                  { value: "13 UTOPIA", label: "Agency Full Stack", desc: "FormX & Navkar Web Apps" }
                ].map((stat, idx) => (
                 <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem', textAlign: 'center' }}>
                   <span style={{ 
                     fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)', 
                     fontWeight: '900', 
                     color: '#fff', 
                     fontFamily: 'var(--font-display)', 
                     lineHeight: 1,
                     letterSpacing: '-1px'
                   }}>
                     {stat.value}
                   </span>
                   <span style={{ 
                     fontSize: '0.75rem', 
                     color: 'var(--accent-primary)', 
                     fontFamily: 'var(--font-code)', 
                     letterSpacing: '1px', 
                     textTransform: 'uppercase', 
                     fontWeight: 'bold',
                     marginTop: '0.2rem'
                   }}>
                     {stat.label}
                   </span>
                   <span style={{ 
                     fontSize: '0.75rem', 
                     color: '#555', 
                     fontFamily: 'var(--font-code)',
                     textTransform: 'uppercase',
                     letterSpacing: '1px'
                   }}>
                     {stat.desc}
                   </span>
                 </div>
               ))}
             </div>

             {/* Scroll Indicator */}
             <div style={{
                 width: '1px',
                 height: '60px',
                 background: 'rgba(255,255,255,0.1)',
                 position: 'relative',
                 marginTop: '2rem',
                 overflow: 'hidden'
             }}>
                 <motion.div
                     animate={{ y: ['-100%', '100%'] }}
                     transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
                     style={{
                         position: 'absolute',
                         top: 0,
                         left: 0,
                         width: '100%',
                         height: '100%',
                         background: '#ffffff'
                     }}
                 />
             </div>
          </motion.div>
        </motion.div>

      </div>

      {/* Dynamic Gap Filler: Horizontal Scrolling Tech Tape */}
      <div style={{
          position: 'absolute',
          bottom: '0',
          width: '100%',
          overflow: 'hidden',
          background: 'rgba(255,255,255,0.01)',
          borderTop: '1px solid rgba(255,255,255,0.05)',
          padding: '1rem 0',
          display: 'flex',
          whiteSpace: 'nowrap',
          zIndex: 1
      }}>
          <motion.div
            animate={{ x: [0, '-50%'] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            style={{ display: 'flex', gap: '6rem', paddingRight: '6rem' }}
          >
              {[...Array(8)].map((_, i) => (
                  <span key={i} style={{ 
                      fontFamily: 'var(--font-code)', 
                      fontSize: '0.65rem', 
                      color: 'rgba(255,255,255,0.2)', 
                      letterSpacing: '3px',
                      textTransform: 'uppercase'
                  }}>
                      CORE_ARCHITECTURE_STABLE // ARCHITECTING_V4 // NEURAL_MODEL_LOADED // POOJAN_P_SHRIVASTAV // SYSTEM_NORMAL
                  </span>
              ))}
          </motion.div>
      </div>
    </section>
  );
};

export default Hero;
