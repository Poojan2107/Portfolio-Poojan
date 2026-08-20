import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPrint, FaCopy, FaTimes, FaExternalLinkAlt, FaCheck } from 'react-icons/fa';
import resumeData from '../constants/resume.json';

const ResumeModal = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const rawText = `
POOJAN PALAKKUMAR SHRIVASTAV
${resumeData.basics.label}
${resumeData.basics.email} | ${resumeData.basics.phone} | ${resumeData.basics.location}
LinkedIn: ${resumeData.basics.profiles.linkedin} | GitHub: ${resumeData.basics.profiles.github} | Portfolio: ${resumeData.basics.website}

PROFESSIONAL SUMMARY
${resumeData.basics.summary}

SKILLS
• Languages: ${resumeData.skills.languages.join(', ')}
• Frontend: ${resumeData.skills.frontend.join(', ')}
• Backend & Infrastructure: ${resumeData.skills.backend.join(', ')}
• Databases & Cloud: ${resumeData.skills.databases_cloud.join(', ')}
• AI & Machine Learning: ${resumeData.skills.ai_ml.join(', ')}
• Tools & QA: ${resumeData.skills.tools_qa.join(', ')}

WORK EXPERIENCE
${resumeData.experience.map(exp => `
${exp.position} — ${exp.company} | ${exp.period} | ${exp.location}
${exp.bullets.map(b => `• ${b}`).join('\n')}
`).join('\n')}

PROJECTS
${resumeData.projects.map(proj => `
${proj.name} | ${proj.period} (${proj.link})
Tech Stack: ${proj.tech}
• ${proj.description}
`).join('\n')}

EDUCATION
${resumeData.education.degree} — ${resumeData.education.institution} | ${resumeData.education.period}

HONORS & ACHIEVEMENTS
${resumeData.achievements.map(a => `• ${a}`).join('\n')}
    `.trim();

    navigator.clipboard.writeText(rawText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="resume-modal-overlay"
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0, 0, 0, 0.92)',
          backdropFilter: 'blur(20px)',
          zIndex: 9999,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          overflowY: 'auto',
          padding: '2rem 1rem'
        }}
      >
        {/* Floating Top Control Bar (Hidden on Print) */}
        <div 
          className="no-print"
          style={{
            position: 'sticky',
            top: '1rem',
            zIndex: 10000,
            display: 'flex',
            gap: '1rem',
            alignItems: 'center',
            background: '#0a0a0a',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            padding: '0.8rem 1.6rem',
            borderRadius: '50px',
            boxShadow: '0 10px 40px rgba(0,0,0,0.9)',
            marginBottom: '2rem'
          }}
        >
          <button
            onClick={handlePrint}
            style={{
              padding: '0.6rem 1.4rem',
              background: '#ffffff',
              color: '#000000',
              border: 'none',
              borderRadius: '30px',
              fontWeight: 'bold',
              fontFamily: 'var(--font-code)',
              fontSize: '0.85rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'transform 0.2s'
            }}
          >
            <FaPrint /> PRINT / SAVE AS PDF
          </button>

          <button
            onClick={handleCopyText}
            style={{
              padding: '0.6rem 1.4rem',
              background: 'rgba(255, 255, 255, 0.08)',
              color: '#ffffff',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '30px',
              fontWeight: 'bold',
              fontFamily: 'var(--font-code)',
              fontSize: '0.85rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'all 0.2s'
            }}
          >
            {copied ? <FaCheck style={{ color: '#00ffcc' }} /> : <FaCopy />} {copied ? 'COPIED TO CLIPBOARD' : 'COPY RAW TEXT'}
          </button>

          <button
            onClick={onClose}
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              fontSize: '1rem'
            }}
          >
            <FaTimes />
          </button>
        </div>

        {/* Printable ATS Resume Document Frame */}
        <div
          id="printable-resume"
          style={{
            width: '100%',
            maxWidth: '850px',
            background: '#ffffff',
            color: '#111111',
            padding: '3rem 3.5rem',
            borderRadius: '8px',
            boxShadow: '0 20px 60px rgba(0,0,0,0.8)',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
            fontSize: '10.5pt',
            lineHeight: '1.45',
            boxSizing: 'border-box'
          }}
        >
          {/* Header */}
          <div style={{ borderBottom: '2px solid #111111', paddingBottom: '1rem', marginBottom: '1.2rem' }}>
            <h1 style={{ fontSize: '22pt', fontWeight: '800', margin: 0, color: '#000000', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>
              {resumeData.basics.name}
            </h1>
            <div style={{ fontSize: '11pt', fontWeight: '700', color: '#333333', marginTop: '4px' }}>
              {resumeData.basics.label}
            </div>
            <div style={{ fontSize: '9.5pt', color: '#444444', marginTop: '6px', display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
              <span>✉ {resumeData.basics.email}</span>
              <span>📞 {resumeData.basics.phone}</span>
              <span>📍 {resumeData.basics.location}</span>
            </div>
            <div style={{ fontSize: '9.5pt', color: '#222222', marginTop: '4px', display: 'flex', flexWrap: 'wrap', gap: '1.2rem', fontWeight: '600' }}>
              <a href={resumeData.basics.profiles.linkedin} target="_blank" rel="noreferrer" style={{ color: '#111', textDecoration: 'none' }}>
                LinkedIn: linkedin.com/in/poojanshrivastav21
              </a>
              <a href={resumeData.basics.profiles.github} target="_blank" rel="noreferrer" style={{ color: '#111', textDecoration: 'none' }}>
                GitHub: github.com/Poojan2107
              </a>
              <a href={resumeData.basics.website} target="_blank" rel="noreferrer" style={{ color: '#111', textDecoration: 'none' }}>
                Portfolio: portfolio-poojan.vercel.app
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div style={{ marginBottom: '1.2rem' }}>
            <h2 style={{ fontSize: '11pt', fontWeight: '800', textTransform: 'uppercase', borderBottom: '1px solid #cccccc', paddingBottom: '3px', marginBottom: '6px', letterSpacing: '0.5px' }}>
              PROFESSIONAL SUMMARY
            </h2>
            <p style={{ margin: 0, fontSize: '10pt', color: '#222222', textAlign: 'justify' }}>
              {resumeData.basics.summary}
            </p>
          </div>

          {/* Technical Skills */}
          <div style={{ marginBottom: '1.2rem' }}>
            <h2 style={{ fontSize: '11pt', fontWeight: '800', textTransform: 'uppercase', borderBottom: '1px solid #cccccc', paddingBottom: '3px', marginBottom: '6px', letterSpacing: '0.5px' }}>
              TECHNICAL SKILLS
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '3px', fontSize: '9.5pt' }}>
              <div><strong>Languages:</strong> {resumeData.skills.languages.join(', ')}</div>
              <div><strong>Frontend:</strong> {resumeData.skills.frontend.join(', ')}</div>
              <div><strong>Backend & Infrastructure:</strong> {resumeData.skills.backend.join(', ')}</div>
              <div><strong>Databases & Cloud:</strong> {resumeData.skills.databases_cloud.join(', ')}</div>
              <div><strong>AI & Machine Learning:</strong> {resumeData.skills.ai_ml.join(', ')}</div>
              <div><strong>Tools & QA:</strong> {resumeData.skills.tools_qa.join(', ')}</div>
            </div>
          </div>

          {/* Work Experience */}
          <div style={{ marginBottom: '1.2rem' }}>
            <h2 style={{ fontSize: '11pt', fontWeight: '800', textTransform: 'uppercase', borderBottom: '1px solid #cccccc', paddingBottom: '3px', marginBottom: '8px', letterSpacing: '0.5px' }}>
              WORK EXPERIENCE
            </h2>
            {resumeData.experience.map((exp, idx) => (
              <div key={idx} style={{ marginBottom: idx === resumeData.experience.length - 1 ? 0 : '10px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', fontWeight: 'bold', fontSize: '10.5pt' }}>
                  <span>{exp.position} — <span style={{ color: '#000000' }}>{exp.company}</span></span>
                  <span style={{ fontSize: '9.5pt', fontWeight: '600' }}>{exp.period} | {exp.location}</span>
                </div>
                <ul style={{ margin: '4px 0 0 0', paddingLeft: '18px', fontSize: '9.5pt', color: '#222222' }}>
                  {exp.bullets.map((b, bIdx) => (
                    <li key={bIdx} style={{ marginBottom: '3px' }}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Key Projects */}
          <div style={{ marginBottom: '1.2rem' }}>
            <h2 style={{ fontSize: '11pt', fontWeight: '800', textTransform: 'uppercase', borderBottom: '1px solid #cccccc', paddingBottom: '3px', marginBottom: '8px', letterSpacing: '0.5px' }}>
              KEY PROJECTS
            </h2>
            {resumeData.projects.map((proj, idx) => (
              <div key={idx} style={{ marginBottom: idx === resumeData.projects.length - 1 ? 0 : '8px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', fontWeight: 'bold', fontSize: '10pt' }}>
                  <span>{proj.name} <span style={{ fontWeight: 'normal', fontSize: '9pt', color: '#555' }}>({proj.tech})</span></span>
                  <span style={{ fontSize: '9pt', fontWeight: '600' }}>{proj.period}</span>
                </div>
                <div style={{ fontSize: '9.5pt', color: '#222222', marginTop: '2px', paddingLeft: '10px', borderLeft: '2px solid #ddd' }}>
                  {proj.description}
                </div>
              </div>
            ))}
          </div>

          {/* Education */}
          <div style={{ marginBottom: '1.2rem' }}>
            <h2 style={{ fontSize: '11pt', fontWeight: '800', textTransform: 'uppercase', borderBottom: '1px solid #cccccc', paddingBottom: '3px', marginBottom: '6px', letterSpacing: '0.5px' }}>
              EDUCATION
            </h2>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', fontSize: '10pt' }}>
              <span><strong>{resumeData.education.degree}</strong> — <em>{resumeData.education.institution}</em></span>
              <span style={{ fontSize: '9.5pt', fontWeight: '600' }}>{resumeData.education.period}</span>
            </div>
          </div>

          {/* Honors & Achievements */}
          <div>
            <h2 style={{ fontSize: '11pt', fontWeight: '800', textTransform: 'uppercase', borderBottom: '1px solid #cccccc', paddingBottom: '3px', marginBottom: '6px', letterSpacing: '0.5px' }}>
              HONORS & ACHIEVEMENTS
            </h2>
            <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '9.5pt', color: '#222222' }}>
              {resumeData.achievements.map((ach, idx) => (
                <li key={idx} style={{ marginBottom: '2px' }}>{ach}</li>
              ))}
            </ul>
          </div>

        </div>

        {/* CSS Print Styles */}
        <style>{`
          @media print {
            body {
              background: #ffffff !important;
              color: #000000 !important;
            }
            .no-print, .resume-modal-overlay {
              position: static !important;
              background: transparent !important;
              padding: 0 !important;
              backdrop-filter: none !important;
            }
            .no-print {
              display: none !important;
            }
            #printable-resume {
              box-shadow: none !important;
              border: none !important;
              padding: 0 !important;
              max-width: 100% !important;
              width: 100% !important;
            }
          }
        `}</style>
      </motion.div>
    </AnimatePresence>
  );
};

export default ResumeModal;
