import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Dossier = () => {
  const [activeTab, setActiveTab] = useState('about');

  const tabs = [
    { id: 'about', label: 'ABOUT.sys' },
    { id: 'skills', label: 'SKILLS.cfg' },
    { id: 'journey', label: 'JOURNEY.log' },
    { id: 'missions', label: 'ACTIVE_MISSIONS.sh' }
  ];

  const currentlyLearning = [
    "System Design & Scalable Architectures",
    "Advanced DSA & Continuous Problem Solving",
    "Autonomous AI Agents & RAG Workflows",
    "Nginx & Reverse Proxy Streaming Optimization",
    "Eliminating University Foundation Backlogs (9.23 CGPA)"
  ];

  const journeyLog = [
    { year: "2024", text: "Began B.Tech Artificial Intelligence at Gandhinagar Institute of Technology." },
    { year: "2024", text: "Mastered full-stack engineering basics: HTML, CSS, JS, React, Node, Express, MongoDB." },
    { year: "2025", text: "Shifted focus to building production AI applications with Gemini and OpenAI APIs." },
    { year: "2026", text: "Built OpenBridge & won Runner-Up position at Build With AI Ahmedabad." },
    { year: "2026", text: "Co-founded Oneverce & delivered Tripzy travel booking platform at travebie.com." },
    { year: "2026", text: "Joined 13 UTOPIA Pvt. Ltd. as Full Stack Dev building FormX & Navkar web applications." },
    { year: "2026", text: "Joined KaryaUp as Developer Intern engineering AI CRM for 2,500+ active users." },
    { year: "2026", text: "Led ~80% production payload optimization sprint (36MB → 6.89MB) and Nginx stream flushing." }
  ];

  const activeMissions = [
    { label: "Scale KaryaUp AI Voice Calling & Location Systems", status: true },
    { label: "Deliver FormX 40+ Route Next.js 16 Architectural Site", status: true },
    { label: "Ship Tripzy (travebie.com) 19-Intent AI Engine", status: true },
    { label: "Clear 4 foundation backlogs while keeping 9.23 CGPA", status: false },
    { label: "Deepen System Design & Advanced DSA capabilities", status: false },
    { label: "Target European Master's (Germany) & Product Company Roles", status: false }
  ];

  return (
    <section id="dossier" style={{ position: 'relative', overflow: 'hidden', padding: '6rem 0', background: 'var(--bg-primary)' }}>
      <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '1400px', display: 'flex', flexDirection: 'column', gap: '4rem' }}>
        
        {/* Section Header */}
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '2rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '2rem' }}>
           <h2 style={{ fontSize: 'clamp(3rem, 8vw, 10rem)', fontWeight: '900', color: '#fff', margin: 0, lineHeight: 0.8, fontFamily: 'var(--font-display)', letterSpacing: '-3px' }}>
              DOSSIER
           </h2>
           <span style={{ fontSize: '1.2rem', color: '#666', fontFamily: 'var(--font-code)', letterSpacing: '2px', textTransform: 'uppercase' }}>[ / System Index ]</span>
        </div>

        {/* Outer Split Layout */}
        <div className="modal-grid-3" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem' }}>
          
          {/* Main Terminal Frame */}
          <div style={{
            background: 'var(--bg-secondary)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 20px 40px rgba(0,0,0,0.6)',
            display: 'flex',
            flexDirection: 'column',
            minHeight: '450px'
          }}>
            {/* Terminal Window Header Bar */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.02)',
              borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
              padding: '1rem 1.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)' }} />
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)' }} />
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)' }} />
              </div>
              <span style={{ fontFamily: 'var(--font-code)', fontSize: '0.75rem', color: '#666', letterSpacing: '1px' }}>
                GUEST@OS-POOJAN: ~
              </span>
            </div>

            {/* Monospace Tab Selectors */}
            <div style={{
              display: 'flex',
              background: 'rgba(0, 0, 0, 0.5)',
              borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
              flexWrap: 'wrap'
            }}>
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    background: activeTab === tab.id ? 'var(--bg-secondary)' : 'transparent',
                    border: 'none',
                    borderRight: '1px solid rgba(255, 255, 255, 0.05)',
                    padding: '0.8rem 1.5rem',
                    color: activeTab === tab.id ? '#fff' : '#666',
                    fontFamily: 'var(--font-code)',
                    fontSize: '0.8rem',
                    fontWeight: activeTab === tab.id ? 'bold' : 'normal',
                    cursor: 'pointer',
                    outline: 'none',
                    transition: 'all 0.3s',
                    position: 'relative'
                  }}
                >
                  {tab.label}
                  {activeTab === tab.id && (
                    <span style={{ position: 'absolute', bottom: '-1px', left: 0, width: '100%', height: '2px', background: '#fff' }} />
                  )}
                </button>
              ))}
            </div>

            {/* Terminal Body Content */}
            <div style={{ padding: '2.5rem', flex: 1, fontFamily: 'var(--font-code)', fontSize: '0.95rem', color: '#ccc', lineHeight: 1.7 }}>
              <AnimatePresence mode="wait">
                {activeTab === 'about' && (
                  <motion.div
                    key="about"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                      <p style={{ color: '#fff', fontSize: '1.1rem', fontWeight: 'bold' }}>
                        // IDENTITY: POOJAN P. SHRIVASTAV
                      </p>
                      <p>
                        Full Stack Developer & AI Engineering Student operating simultaneously across product engineering, creative tech studio development, and startup client delivery.
                      </p>
                      <p style={{ borderLeft: '2px solid #fff', paddingLeft: '1rem', color: '#fff' }}>
                        Engineering production SaaS features at KaryaUp (~2,500 active users), architecting enterprise web applications at 13 UTOPIA (FormX Consultants & Navkar Tubes), and co-founding Oneverce (Tripzy / travebie.com).
                      </p>
                      <p>
                        Maintains a 9.23 CGPA in B.Tech Artificial Intelligence at Gandhinagar Institute of Technology (92.2% 5th sem midterm score across Deep Learning, Computer Vision, Networks, & AI).
                      </p>
                      <p style={{ color: '#666', marginTop: '1rem' }}>
                        &gt; CORE_BELIEF: Real software is measured by production impact, user volume, and engineering rigor.
                      </p>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'skills' && (
                  <motion.div
                    key="skills"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      <p style={{ color: '#fff', fontWeight: 'bold' }}>// PRIMARY STACK CAPABILITIES</p>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                        <p><span style={{ color: '#fff' }}>Frontend:</span> React, Next.js, TypeScript, JavaScript, HTML, CSS, Tailwind CSS</p>
                        <p><span style={{ color: '#fff' }}>Backend:</span> Node.js, Express.js, REST APIs, Authentication, WebSockets</p>
                        <p><span style={{ color: '#fff' }}>Databases:</span> PostgreSQL, MongoDB, Supabase, Firebase, Prisma ORM</p>
                        <p><span style={{ color: '#fff' }}>AI Systems:</span> Gemini API, OpenAI API, LangChain, Prompt Engineering, Machine Learning, RAG Systems</p>
                        <p><span style={{ color: '#fff' }}>Developer Tools:</span> Git, GitHub, Prisma ORM, Postman, Vercel, Supabase</p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'journey' && (
                  <motion.div
                    key="journey"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxHeight: '300px', overflowY: 'auto', paddingRight: '1rem' }}>
                      <p style={{ color: '#fff', fontWeight: 'bold' }}>// CHRONOLOGICAL SHIPPING LOG</p>
                      {journeyLog.map((log, idx) => (
                        <div key={idx} style={{ display: 'flex', gap: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.03)', paddingBottom: '0.6rem' }}>
                          <span style={{ color: '#fff', fontWeight: 'bold' }}>[{log.year}]</span>
                          <span>{log.text}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {activeTab === 'missions' && (
                  <motion.div
                    key="missions"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                      <p style={{ color: '#fff', fontWeight: 'bold' }}>// ACTIVE MISSIONS & ROADMAP</p>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                        {activeMissions.map((mission, idx) => (
                          <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <span style={{ 
                              width: '14px', 
                              height: '14px', 
                              border: '1px solid #fff', 
                              display: 'inline-flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              fontSize: '0.6rem',
                              color: '#fff'
                            }}>
                              {mission.status ? "x" : " "}
                            </span>
                            <span style={{ color: mission.status ? '#666' : '#ccc' }}>
                              {mission.label}
                            </span>
                          </div>
                        ))}
                      </div>
                      <p style={{ color: '#666', fontSize: '0.75rem', marginTop: '1rem' }}>
                        * Goals represent target zones of exploration and production shipping.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Right Section: Currently Learning Card */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.01)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            borderRadius: '12px',
            padding: '2.5rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }} className="currently-learning-card">
            <span style={{ fontFamily: 'var(--font-code)', fontSize: '0.7rem', color: '#666', letterSpacing: '2px', textTransform: 'uppercase' }}>
              [ PIPELINE GROWTH ]
            </span>
            <h4 style={{ color: '#fff', fontSize: '1.5rem', fontFamily: 'var(--font-display)', marginTop: '0.5rem', marginBottom: '2rem', textTransform: 'uppercase', letterSpacing: '-1px' }}>
              CURRENTLY LEARNING
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', fontFamily: 'var(--font-code)', fontSize: '0.85rem' }}>
              {currentlyLearning.map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <span style={{ width: '4px', height: '4px', background: '#fff', borderRadius: '50%' }}></span>
                  <span style={{ color: '#aaa' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Dossier;
