import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';
import { PERSONAL_DETAILS } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
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
    { name: 'HOME', href: '#home' },
    { name: 'WORK', href: '#projects' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'CONTACT', href: '#contact' },
  ];

  const styles = {
    container: {
      position: 'fixed',
      width: '100%',
      zIndex: 1000,
      top: 0,
      left: 0,
      display: 'flex',
      justifyContent: 'center',
      padding: scrolled ? '1rem 2rem' : '2rem',
      transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
      background: scrolled ? 'rgba(0,0,0,0.8)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border-light)' : 'none',
    },
    nav: {
      width: '100%',
      maxWidth: '1400px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    logo: {
      fontSize: '1.5rem',
      fontWeight: '900',
      color: '#fff',
      textDecoration: 'none',
      letterSpacing: '-1px',
      fontFamily: 'var(--font-main)',
      textTransform: 'uppercase',
    },
    desktopMenu: {
      display: 'flex',
      alignItems: 'center',
      gap: '3rem',
    },
    link: {
      color: 'var(--text-secondary)',
      textDecoration: 'none',
      fontWeight: '500',
      fontSize: '0.9rem',
      letterSpacing: '1px',
      transition: 'color 0.3s',
      cursor: 'pointer',
      textTransform: 'uppercase',
    },
    activeLink: {
      color: '#fff',
    }
  };

  return (
    <>
      <div style={styles.container}>
        <nav style={styles.nav}>
          <a href="#" style={styles.logo} onClick={(e) => scrollToSection(e, '#home')}>
            POOJAN<span style={{ color: '#666' }}>.</span>
          </a>

          <div className="desktop-menu" style={styles.desktopMenu}>
            {navLinks.map((link) => (
              <motion.a 
                key={link.name} 
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                style={styles.link}
                whileHover={{ color: '#fff', y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.name}
              </motion.a>
            ))}
            
            <div style={{ width: '1px', height: '20px', background: '#333' }}></div>
            
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <motion.a href={PERSONAL_DETAILS.social.github} target="_blank" style={{ color: '#fff' }} whileHover={{ opacity: 0.7 }}><FaGithub size={20} /></motion.a>
              <motion.a href={PERSONAL_DETAILS.social.linkedin} target="_blank" style={{ color: '#fff' }} whileHover={{ opacity: 0.7 }}><FaLinkedin size={20} /></motion.a>
            </div>
          </div>

          <div className="mobile-toggle" style={{ display: 'none', color: '#fff', cursor: 'pointer' }} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100vh',
              background: '#000',
              zIndex: 999,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '2rem'
            }}
          >
             <div style={{ position: 'absolute', top: '2rem', right: '2rem', color: '#fff', cursor: 'pointer' }} onClick={() => setIsOpen(false)}>
              <FaTimes size={30} />
            </div>
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                style={{ fontSize: '2rem', color: '#fff', textDecoration: 'none', fontWeight: '900', textTransform: 'uppercase' }}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
