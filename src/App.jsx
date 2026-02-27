import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ReactiveBackground from './components/ReactiveBackground';
import HeroicIntro from './components/HeroicIntro';
import CustomCursor from './components/CustomCursor';


function App() {
  const [activeTech, setActiveTech] = useState(null);
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const originalTitle = document.title;
    
    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.title = "Call upon the hero! 🦸‍♂️";
      } else {
        document.title = originalTitle;
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <div className="App">
       <CustomCursor />
       <AnimatePresence mode='wait'>
        {showIntro ? (
          <HeroicIntro key="intro" onComplete={() => setShowIntro(false)} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
              <div className="ambient-light ambient-light-1"></div>
              <div className="ambient-light ambient-light-2"></div>
              <ReactiveBackground />
              <Navbar />
              <Hero />
              <TechStack setActiveTech={setActiveTech} />
              <Education />
              <Projects activeTech={activeTech} />
              <Contact />
              
              <footer style={{ 
                  padding: '2rem 0', 
                  textAlign: 'center', 
                  borderTop: '1px solid rgba(255,255,255,0.05)',
                  color: 'var(--text-secondary)'
              }}>
                  <p>Designed & Built by <span style={{ color: 'var(--accent-secondary)' }}>POOJAN SHRIVASTAV</span></p>
                  <p style={{ fontSize: '0.8rem', marginTop: '0.5rem' }}>© {new Date().getFullYear()} All rights reserved.</p>
              </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
