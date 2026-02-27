import { motion } from 'framer-motion';
import MagneticButton from './MagneticButton';

const Hero = () => {
  return (
    <section id="home" style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      paddingTop: '80px',
      background: 'var(--bg-primary)'
    }}>
      {/* Abstract Background Grid */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: 'linear-gradient(var(--border-light) 1px, transparent 1px), linear-gradient(90deg, var(--border-light) 1px, transparent 1px)',
        backgroundSize: '100px 100px',
        opacity: 0.05,
        pointerEvents: 'none'
      }}></div>

      <div className="container" style={{ 
        position: 'relative', 
        zIndex: 1,
        width: '100%',
        maxWidth: '1400px',
        padding: '0 2rem'
      }}>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'center' }}>
          
          {/* Text Content */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { 
                opacity: 1,
                transition: { staggerChildren: 0.15 }
              }
            }}
          >
            <motion.div variants={{ hidden: { x: -20, opacity: 0 }, visible: { x: 0, opacity: 1 } }}>
               <span style={{ 
                 fontFamily: 'var(--font-code)', 
                 color: 'var(--accent-secondary)', 
                 fontSize: '0.9rem',
                 letterSpacing: '0.2em',
                 textTransform: 'uppercase'
               }}>
                 // Full Stack Developer
               </span>
            </motion.div>
            
            <motion.h1 
              variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
              style={{ 
                fontSize: 'clamp(3rem, 8vw, 7rem)', 
                fontWeight: '900', 
                lineHeight: '0.9', 
                margin: '1.5rem 0',
                letterSpacing: '-0.02em',
                color: '#fff'
              }}
            >
              POOJAN <br />
              <span style={{ 
                color: 'transparent', 
                WebkitTextStroke: '2px var(--text-tertiary)',
                opacity: 0.7
              }}>SHRIVASTAV</span>
            </motion.h1>

            <motion.p 
              variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }} 
              style={{ 
                maxWidth: '500px', 
                color: 'var(--text-secondary)', 
                marginBottom: '3rem', 
                fontSize: '1.1rem',
                borderLeft: '2px solid var(--text-tertiary)',
                paddingLeft: '1.5rem'
              }}
            >
              Building digital experiences with precision and elegance. 
              Turning complex logic into clean, minimal, and high-performance applications.
            </motion.p>
            
            <motion.div variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }} style={{ display: 'flex', gap: '2rem' }}>
              <MagneticButton href="#projects" 
                style={{ 
                  background: '#fff', 
                  color: '#000', 
                  padding: '1rem 2.5rem', 
                  fontWeight: '600',
                  textDecoration: 'none',
                  fontSize: '1rem'
                }}
              >
                 VIEW WORK
              </MagneticButton>
              <MagneticButton href="#contact" 
                style={{ 
                  background: 'transparent',
                  border: '1px solid var(--border-light)',
                  color: '#fff', 
                  padding: '1rem 2.5rem', 
                  textDecoration: 'none',
                  fontSize: '1rem'
                }}
              >
                 CONTACT
              </MagneticButton>
            </motion.div>
          </motion.div>

          {/* Minimalist Graphic / Code Block */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}
          >
            {/* Background Circle */}
            <div style={{
              position: 'absolute',
              width: '80%',
              paddingBottom: '80%',
              borderRadius: '50%',
              border: '1px solid var(--border-light)',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: -1
            }}></div>

             <div className="dapper-card" style={{ 
              width: '100%', 
              maxWidth: '480px', 
              padding: '2rem', 
              borderRadius: '0', /* Proper tech look is often sharp */
              background: '#0a0a0a',
              position: 'relative',
              boxShadow: '0 20px 50px -20px #000'
             }}>
                <div style={{ display: 'flex', gap: '8px', marginBottom: '2rem' }}>
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#333' }}></div>
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#333' }}></div>
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#333' }}></div>
                </div>
                
                <code style={{ fontFamily: 'var(--font-code)', fontSize: '0.9rem', color: 'var(--text-secondary)', display: 'block' }}>
                  <span style={{ color: '#fff' }}>class</span> <span style={{ color: '#fff' }}>Developer</span> <span style={{ color: '#666' }}>{`{`}</span><br/>
                  &nbsp;&nbsp;<span style={{ color: '#fff' }}>constructor</span>() <span style={{ color: '#666' }}>{`{`}</span><br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#888' }}>this</span>.name = <span style={{ color: '#fff' }}>'Poojan'</span>;<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#888' }}>this</span>.vision = <span style={{ color: '#fff' }}>'Minimalist'</span>;<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#888' }}>this</span>.stack = [<span style={{ color: '#fff' }}>'MERN'</span>, <span style={{ color: '#fff' }}>'3D'</span>];<br/>
                  &nbsp;&nbsp;<span style={{ color: '#666' }}>{`}`}</span><br/><br/>
                  &nbsp;&nbsp;<span style={{ color: '#fff' }}>buildFuture</span>() <span style={{ color: '#666' }}>{`{`}</span><br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#888' }}>return</span> <span style={{ color: '#fff' }}>new Reality()</span>;<br/>
                  &nbsp;&nbsp;<span style={{ color: '#666' }}>{`}`}</span><br/>
                  <span style={{ color: '#666' }}>{`}`}</span>
                </code>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
