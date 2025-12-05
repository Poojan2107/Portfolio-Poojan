import React, { useState, useEffect, useRef } from 'react';
import { motion, useSpring, useMotionValue, useTransform } from 'framer-motion';
import { PERSONAL_DETAILS } from '../constants';

const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+-=[]{}|;':,./<>?";

const CipherText = ({ text, className }) => {
  const [displayText, setDisplayText] = useState(text);
  const [iterations, setIterations] = useState(0);

  useEffect(() => {
    let interval = null;

    // Start slightly delayed
    const startTimeout = setTimeout(() => {
      interval = setInterval(() => {
        setDisplayText((prev) => {
          return text
            .split("")
            .map((letter, index) => {
              if (index < iterations) {
                return text[index];
              }
              return LETTERS[Math.floor(Math.random() * LETTERS.length)];
            })
            .join("");
        });

        if (iterations >= text.length) {
          clearInterval(interval);
        }

        setIterations((prev) => prev + 1 / 3); // Decryption speed
      }, 30);
    }, 500);

    return () => {
      clearInterval(interval);
      clearTimeout(startTimeout);
    };
  }, [iterations, text]);

  return <span className={className}>{displayText}</span>;
};

const MagneticButton = ({ children, href, className, style }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    
    // Calculate distance from center
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;

    // Magnetic pull strength (max 20px movement)
    x.set(distanceX * 0.3);
    y.set(distanceY * 0.3);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        ...style,
        x: mouseXSpring,
        y: mouseYSpring,
        display: 'inline-block'
      }}
    >
      {children}
    </motion.a>
  );
};

const Hero = () => {
  return (
    <section id="home" style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', // Center vertically
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      paddingTop: '110px',
      paddingBottom: '4rem'
    }}>
      {/* ... background elements ... */}
      <div style={{
        position: 'absolute',
        top: '20%',
        right: '10%',
        width: '300px',
        height: '300px',
        background: 'var(--accent-primary)',
        filter: 'blur(150px)',
        opacity: '0.2',
        borderRadius: '50%'
      }}></div>
      <div style={{
        position: 'absolute',
        bottom: '10%',
        left: '5%',
        width: '200px',
        height: '200px',
        background: 'var(--accent-secondary)',
        filter: 'blur(120px)',
        opacity: '0.2',
        borderRadius: '50%'
      }}></div>

      <div className="container" style={{ 
        display: 'flex', 
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '2rem', 
        position: 'relative', 
        zIndex: 1,
        flexWrap: 'wrap',
        marginTop: '0' 
      }}>
        
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { 
              opacity: 1, 
              x: 0,
              transition: { 
                staggerChildren: 0.1,
                duration: 0.8
              }
            }
          }}
          style={{ flex: '1 1 500px', maxWidth: '600px' }}
        >
          <motion.h2 variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} style={{ color: 'var(--accent-primary)', fontFamily: 'var(--font-code)', fontSize: '1.1rem', marginBottom: '0.5rem', letterSpacing: '2px' }}>
            HELLO, WORLD! I AM
          </motion.h2>
          <motion.h1 variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} style={{ fontSize: '4.5rem', fontWeight: '800', lineHeight: '1.1', marginBottom: '1rem', letterSpacing: '-2px' }}>
            <CipherText text={PERSONAL_DETAILS.name.split(' ')[0]} /> <br />
            <span className="gradient-text">
                <CipherText text={PERSONAL_DETAILS.name.split(' ')[1]} />
            </span>
          </motion.h1>
          <motion.h3 variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} style={{ fontSize: '2rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', fontWeight: '400' }}>
            {PERSONAL_DETAILS.role}
          </motion.h3>
          <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} style={{ maxWidth: '550px', color: 'var(--text-secondary)', marginBottom: '2.5rem', fontSize: '1.1rem', lineHeight: '1.8' }}>
            {PERSONAL_DETAILS.bio}
          </motion.p>
          
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} style={{ display: 'flex', gap: '1.5rem' }}>
            <MagneticButton href="#projects" className="btn btn-primary" style={{ textDecoration: 'none', color: '#000', padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
                View Projects
            </MagneticButton>
            <MagneticButton href="#contact" className="btn btn-outline" style={{ textDecoration: 'none', padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
                Contact Me
            </MagneticButton>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="floating"
          style={{ display: 'flex', justifyContent: 'center', perspective: '1000px' }}
        >
          {/* Abstract Code Visual */}
          <div className="glass-card" style={{ 
            width: '100%', 
            maxWidth: '450px', 
            padding: '2.5rem', 
            background: 'rgba(10, 10, 10, 0.6)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            transform: 'rotateY(-10deg) rotateX(5deg)', // 3D Tilt
            boxShadow: '20px 20px 50px rgba(0,0,0,0.5)'
          }}>
            <div style={{ display: 'flex', gap: '0.6rem', marginBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem' }}>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }}></div>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }}></div>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }}></div>
            </div>
            <div className="code-font" style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>
              <p><span style={{ color: '#c678dd' }}>const</span> <span style={{ color: '#e5c07b' }}>developer</span> = <span style={{ color: '#c678dd' }}>{'{'}</span></p>
              <p style={{ paddingLeft: '1.5rem' }}>name: <span style={{ color: '#98c379' }}>'{PERSONAL_DETAILS.name}'</span>,</p>
              <p style={{ paddingLeft: '1.5rem' }}>role: <span style={{ color: '#98c379' }}>'MERN Stack'</span>,</p>
              <p style={{ paddingLeft: '1.5rem' }}>skills: <span style={{ color: '#c678dd' }}>[</span></p>
              <p style={{ paddingLeft: '3rem' }}><span style={{ color: '#98c379' }}>'React'</span>, <span style={{ color: '#98c379' }}>'Node.js'</span>,</p>
              <p style={{ paddingLeft: '3rem' }}><span style={{ color: '#98c379' }}>'MongoDB'</span>, <span style={{ color: '#98c379' }}>'Express'</span></p>
              <p style={{ paddingLeft: '1.5rem' }}><span style={{ color: '#c678dd' }}>]</span>,</p>
              <p style={{ paddingLeft: '1.5rem' }}>passion: <span style={{ color: '#98c379' }}>'infinite'</span></p>
              <p><span style={{ color: '#c678dd' }}>{'}'}</span>;</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};


export default Hero;
