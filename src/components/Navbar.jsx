import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';
import { PERSONAL_DETAILS } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Top-Only Visibility Logic
      // Show only when at the very top (buffer of 200px)
      if (currentScrollY < 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      setScrolled(currentScrollY > 20);
    };

    // Initial check
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const styles = {
    container: {
      position: 'fixed',
      width: '100%',
      zIndex: 1000,
      top: '1.5rem',
      left: 0,
      display: 'flex',
      justifyContent: 'center',
      pointerEvents: 'none',
    },
    nav: {
      width: '90%',
      maxWidth: '1000px',
      background: scrolled ? 'rgba(5, 5, 5, 0.85)' : 'rgba(20, 20, 20, 0.7)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      borderRadius: '50px',
      padding: '0.8rem 2rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      pointerEvents: 'auto',
      boxShadow: scrolled ? '0 10px 30px rgba(0,0,0,0.5)' : '0 5px 15px rgba(0,0,0,0.2)',
      transition: 'all 0.3s ease',
      border: '1px solid rgba(255, 255, 255, 0.08)',
    },
    logo: {
      fontSize: '1.2rem',
      fontWeight: '700',
      color: 'var(--text-primary)',
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
    },
    desktopMenu: {
      display: 'flex',
      alignItems: 'center',
      gap: '2rem',
    },
    link: {
      color: 'var(--text-secondary)',
      textDecoration: 'none',
      fontWeight: '500',
      fontSize: '0.95rem',
      position: 'relative',
      transition: 'color 0.3s',
      padding: '0.5rem 0',
      cursor: 'pointer',
    },
    socialIcon: {
      color: 'var(--text-primary)',
      fontSize: '1.2rem',
      transition: 'transform 0.2s, color 0.2s',
    },
  };

  return (
    <>
      <div style={styles.container}>
        <AnimatePresence>
          {isVisible && (
            <motion.nav
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -100, opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={styles.nav}
            >
              {/* Logo */}
              <a href="#" className="code-font" style={styles.logo} onClick={(e) => scrollToSection(e, '#home')}>
                <span style={{ color: 'var(--accent-primary)' }}>&lt;</span>
                POOJAN SHRIVASTAV
                <span style={{ color: 'var(--accent-primary)' }}>/&gt;</span>
              </a>

              {/* Desktop Menu */}
              <div className="desktop-menu" style={styles.desktopMenu}>
                {navLinks.map((link) => (
                  <motion.a 
                    key={link.name} 
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    style={styles.link}
                    whileHover={{ scale: 1.05, color: 'var(--text-primary)' }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {link.name}
                    <motion.span 
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '0%',
                        height: '2px',
                        background: 'var(--accent-primary)',
                      }}
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                ))}
                
                <div style={{ width: '1px', height: '20px', background: 'rgba(255,255,255,0.1)', margin: '0 0.5rem' }}></div>

                <div style={{ display: 'flex', gap: '1rem' }}>
                  <motion.a 
                    href={PERSONAL_DETAILS.social.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={styles.socialIcon}
                    whileHover={{ scale: 1.2, rotate: 5, color: 'var(--accent-primary)' }}
                  >
                    <FaGithub />
                  </motion.a>
                  <motion.a 
                    href={PERSONAL_DETAILS.social.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={styles.socialIcon}
                    whileHover={{ scale: 1.2, rotate: -5, color: 'var(--accent-primary)' }}
                  >
                    <FaLinkedin />
                  </motion.a>
                </div>
              </div>

              {/* Mobile Toggle */}
              <div className="mobile-toggle" style={{ display: 'none', fontSize: '1.5rem', color: 'var(--text-primary)', cursor: 'pointer' }} onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <FaTimes /> : <FaBars />}
              </div>

            </motion.nav>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -20 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed',
              top: '90px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '90%',
              maxWidth: '400px',
              background: 'rgba(10, 10, 10, 0.95)',
              backdropFilter: 'blur(16px)',
              borderRadius: '20px',
              padding: '2rem',
              border: '1px solid rgba(255,255,255,0.1)',
              zIndex: 999,
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              alignItems: 'center',
              boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
            }}
          >
            {navLinks.map((link) => (
              <motion.a 
                key={link.name} 
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                whileHover={{ scale: 1.1, color: 'var(--accent-primary)' }}
                style={{
                  color: 'var(--text-primary)',
                  textDecoration: 'none',
                  fontSize: '1.2rem',
                  fontWeight: '600'
                }}
              >
                {link.name}
              </motion.a>
            ))}
            <div style={{ display: 'flex', gap: '1.5rem', marginTop: '1rem' }}>
              <a href={PERSONAL_DETAILS.social.github} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-primary)', fontSize: '1.5rem' }}>
                <FaGithub />
              </a>
              <a href={PERSONAL_DETAILS.social.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-primary)', fontSize: '1.5rem' }}>
                <FaLinkedin />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
