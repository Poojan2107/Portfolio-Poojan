import React, { useState, useRef, useEffect } from 'react';
import { FaTerminal } from 'react-icons/fa';

const TerminalFooter = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', content: 'Welcome to PoojanOS v1.0. Type "help" for commands.' }
  ]);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [history]);

  const handleCommand = (cmd) => {
    const command = cmd.trim().toLowerCase();
    const newHistory = [...history, { type: 'user', content: command }];

    switch (command) {
      case 'help':
        newHistory.push({ type: 'system', content: 'Available commands: help, about, projects, contact, clear, social' });
        break;
      case 'about':
         newHistory.push({ type: 'system', content: 'Poojan Shrivastav. MERN Stack Architect. Building digital realities since 2024.' });
         // Optional: scroll to home/about
         break;
      case 'projects':
         newHistory.push({ type: 'system', content: 'Navigating to Project Sector...' });
         document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
         break;
      case 'contact':
         newHistory.push({ type: 'system', content: 'Opening graphical communication interface...' });
         document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
         break;
      case 'social':
         newHistory.push({ type: 'system', content: 'GitHub: /Poojan2107 | LinkedIn: /in/poojanshrivastav21' });
         break;
      case 'clear':
         setHistory([]);
         return; // Don't add clear command to history if we just cleared it
      default:
         newHistory.push({ type: 'error', content: `Command not found: ${command}. Type "help".` });
    }

    setHistory(newHistory);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand(input);
      setInput('');
    }
  };

  return (
    <footer style={{ 
        background: '#0a0a0a', 
        borderTop: '1px solid #333', 
        fontFamily: '"Fira Code", monospace',
        padding: '2rem 0',
        minHeight: '300px',
        fontSize: '0.9rem'
    }}>
        <div className="container" style={{ maxWidth: '800px' }}>
             <div 
                style={{ 
                    background: '#000', 
                    borderRadius: '8px', 
                    border: '1px solid #333',
                    padding: '1rem',
                    height: '250px',
                    overflowY: 'auto',
                    boxShadow: 'inset 0 0 20px rgba(0,0,0,0.8)'
                }}
                className="terminal-window"
                onClick={() => inputRef.current?.focus()}
             >
                {history.map((line, i) => (
                    <div key={i} style={{ marginBottom: '0.5rem', color: line.type === 'user' ? '#fff' : line.type === 'error' ? '#ff5f56' : '#4ade80' }}>
                        {line.type === 'user' ? <span style={{ color: 'var(--accent-primary)', marginRight: '0.5rem' }}>➜ ~</span> : ''}
                        {line.content}
                    </div>
                ))}
                
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <span style={{ color: 'var(--accent-primary)', marginRight: '0.5rem' }}>➜ ~</span>
                    <input 
                        ref={inputRef}
                        type="text" 
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        style={{ 
                            background: 'transparent', 
                            border: 'none', 
                            color: '#fff', 
                            width: '100%', 
                            outline: 'none',
                            fontFamily: 'inherit'
                        }}
                        autoFocus
                    />
                </div>
                <div ref={messagesEndRef} />
             </div>

             <div style={{ textAlign: 'center', marginTop: '1.5rem', opacity: 0.5, fontSize: '0.8rem' }}>
                <p>© {new Date().getFullYear()} POOJAN SHRIVASTAV. ALL SYSTEMS OPERATIONAL.</p>
             </div>
        </div>
    </footer>
  );
};

export default TerminalFooter;
