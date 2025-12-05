import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ReactiveBackground from './components/ReactiveBackground';
import CustomCursor from './components/CustomCursor';
import TerminalFooter from './components/TerminalFooter';

function App() {
  const [activeTech, setActiveTech] = useState(null);

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
      <CustomCursor />
      <div className="ambient-light ambient-light-1"></div>
      <div className="ambient-light ambient-light-2"></div>
      <ReactiveBackground />
      <Navbar />
      <Hero />
      <TechStack setActiveTech={setActiveTech} />
      <Education />
      <Projects activeTech={activeTech} />
      <Contact />
      
      <TerminalFooter />
    </div>
  );
}

export default App;
