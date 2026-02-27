import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

const Navbar = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Hide on scroll down, show on scroll up
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const navLinks = [
    { name: 'INDEX', href: '#home' },
    { name: 'ARSENAL', href: '#skills' },
    { name: 'ORIGIN', href: '#education' },
    { name: 'ARCHIVE', href: '#projects' },
    { name: 'CONTACT', href: '#contact' },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
       const yOffset = -100; // Provide enough offset so the navbar doesn't cover content
       const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
       window.scrollTo({top: y, behavior: 'smooth'});
    }
  };

  return (
    <motion.div
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: '-100%', opacity: 0 }
      }}
      initial="visible"
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} // Custom smooth ease-out
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        padding: '20px 0',
        zIndex: 1000,
        pointerEvents: 'none' // allow clicking through empty space
      }}
    >
      <nav 
        style={{
           display: 'flex',
           alignItems: 'center',
           background: 'rgba(10, 10, 10, 0.85)',
           backdropFilter: 'blur(20px)',
           border: '1px solid rgba(255, 255, 255, 0.1)',
           padding: '8px 8px',
           borderRadius: '100px',
           boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
           pointerEvents: 'auto' // clickable inside pill
        }}
      >
        {/* Sleek magnetic logo */}
        <a href="#home" onClick={(e) => scrollToSection(e, '#home')} style={{ 
            textDecoration: 'none', 
            color: '#fff', 
            fontFamily: 'var(--font-code)', 
            fontWeight: '900', 
            fontSize: '1.2rem',
            padding: '0 20px',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            overflow: 'hidden' // For the neon scanner
        }}>
            {/* Neon Scanning Bar */}
            <motion.div
                animate={{ left: ['-100%', '200%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
                style={{
                    position: 'absolute',
                    top: 0,
                    width: '30px',
                    height: '100%',
                    background: 'linear-gradient(90deg, transparent, var(--accent-primary), transparent)',
                    opacity: 0.3,
                    zIndex: 0,
                    pointerEvents: 'none',
                    skewX: -20
                }}
            />
            <motion.div
                whileHover="hover"
                style={{ display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer' }}
            >
                <motion.span 
                    variants={{ hover: { x: -2, skewX: -10, color: '#fff' } }}
                    style={{ color: 'var(--accent-primary)', zIndex: 1, letterSpacing: '-2px' }}
                >
                    POOJAN
                </motion.span>
                <motion.span 
                    variants={{ hover: { scaleY: 0.8, opacity: 0.5 } }}
                    style={{ color: '#fff', zIndex: 1, letterSpacing: '-2px', marginLeft: '2px' }}
                >
                    P.
                </motion.span>
                <motion.span 
                    variants={{ hover: { x: 2, skewX: 10, color: 'var(--accent-primary)' } }}
                    style={{ color: '#fff', zIndex: 1, letterSpacing: '-2px', opacity: 0.8 }}
                >
                    SHRIVASTAV
                </motion.span>
                <motion.div 
                    animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    style={{ width: '6px', height: '6px', background: 'var(--accent-primary)', borderRadius: '50%', marginLeft: '6px', zIndex: 1 }}
                />
            </motion.div>
        </a>

        {/* Separator */}
        <div style={{ width: '1px', height: '24px', background: 'rgba(255,255,255,0.2)', margin: '0 10px' }}></div>

        {/* Apple-style Sliding Pill Links with Awwwards Split-Text Hover Effect */}
        <div style={{ display: 'flex', position: 'relative' }}>
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                position: 'relative',
                padding: '10px 24px',
                color: hoveredIndex === index ? '#000' : '#888',
                fontFamily: 'var(--font-code)',
                fontSize: '0.8rem',
                textDecoration: 'none',
                letterSpacing: '2px',
                fontWeight: '600',
                transition: 'color 0.3s ease',
                zIndex: 1,
                overflow: 'hidden', // Required for sliding text
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {/* Dynamic Navbar Pill Background */}
              {hoveredIndex === index && (
                <motion.span
                  layoutId="nav-pill"
                  transition={{ type: "spring", stiffness: 350, damping: 25, mass: 0.6 }}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: '#ffffff',
                    borderRadius: '100px',
                    zIndex: -1
                  }}
                />
              )}
              
              {/* Simple Translating Container for Perfect Alignment */}
              <div style={{ height: '1.2rem', overflow: 'hidden', position: 'relative' }}>
                <motion.div
                    animate={{ y: hoveredIndex === index ? '-1.2rem' : '0' }}
                    transition={{ 
                        type: "spring",
                        stiffness: 350,
                        damping: 25,
                        mass: 0.6
                    }}
                    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                >
                    <span style={{ height: '1.2rem', lineHeight: '1.2rem', display: 'block' }}>
                       {link.name}
                    </span>
                    <span style={{ 
                        height: '1.2rem', 
                        lineHeight: '1.2rem', 
                        display: 'block', 
                        color: '#000', 
                        fontWeight: '900',
                        textShadow: '0 0 10px rgba(0,0,0,0.2)'
                    }}>
                       {link.name}
                    </span>
                </motion.div>
              </div>
            </a>
          ))}
        </div>
      </nav>

      <style>{`
        @media (max-width: 900px) {
            nav { padding: 10px 20px !important; }
            nav a { padding: 8px 12px !important; font-size: 0.7rem !important; }
            nav > a:first-child { display: none !important; } 
        }
        @media (max-width: 600px) {
            nav > div > a { display: none !important; }
            nav > div > a:first-child { display: block !important; }
            nav > div > a:last-child { display: block !important; }
            nav::after { content: 'USE DESKTOP FOR FULL EXPERIENCE'; color: #666; font-family: var(--font-code); font-size: 0.7rem; letter-spacing: 1px; padding: 0 10px; }
        }
      `}</style>
    </motion.div>
  );
};

export default Navbar;
