import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ReactiveBackground from './components/ReactiveBackground';

function App() {
  return (
    <div className="App">
      <div className="ambient-light ambient-light-1"></div>
      <div className="ambient-light ambient-light-2"></div>
      <ReactiveBackground />
      <Navbar />
      <Hero />
      <TechStack />
      <Projects />
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
    </div>
  );
}

export default App;
