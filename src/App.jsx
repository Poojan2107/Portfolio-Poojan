import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion'; 
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ReactiveBackground from './components/ReactiveBackground';
import BigBangIntro from './components/BigBangIntro';

function App() {
  const [activeTech, setActiveTech] = useState(null);
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const originalTitle = document.title;
    
    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.title = "Come back to the future! 🚀";
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
       <AnimatePresence mode='wait'>
        {showIntro && (
          <BigBangIntro onComplete={() => setShowIntro(false)} />
        )}
      </AnimatePresence>

      {!showIntro && (
        <>
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
                <p>Designed & Built by <span style={{ color: 'var(--accent-primary)' }}>POOJAN SHRIVASTAV</span></p>
                <p style={{ fontSize: '0.8rem', marginTop: '0.5rem' }}>© {new Date().getFullYear()} All rights reserved.</p>
            </footer>
        </>
      )}
    </div>
  );
}

export default App;
