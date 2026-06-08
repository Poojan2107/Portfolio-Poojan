import { motion } from 'framer-motion';

const Missions = () => {
  const activeMissions = [
    {
      symbol: "🚀",
      title: "OpenBridge",
      role: "Founder & Lead Developer",
      status: "Active Beta Prep",
      description: "Building an AI-powered open-source onboarding ecosystem designed to help beginners bridge the technical gap and contribute cleanly to major packages.",
    },
    {
      symbol: "🏢",
      title: "Oneverce",
      role: "Core Builder",
      status: "Production Phase",
      description: "Developing modern software architectures, clean interfaces, and client integrations to deliver reliable web platforms and scaling solutions.",
    },
    {
      symbol: "⚡",
      title: "Trio Labs",
      role: "Co-Founder & Tech Lead",
      status: "Active Innovation",
      description: "Directing a student-led development initiative focusing on experimental projects, AI utilities, and rapid prototype deployments.",
    }
  ];

  return (
    <section id="missions" style={{ position: 'relative', overflow: 'hidden', padding: '6rem 0', background: 'var(--bg-primary)' }}>
      
      <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '1400px', display: 'flex', flexDirection: 'column', gap: '8rem' }}>
        
        {/* Massive Header */}
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '2rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '2rem' }}>
           <h2 style={{ fontSize: 'clamp(3rem, 8vw, 10rem)', fontWeight: '900', color: '#fff', margin: 0, lineHeight: 0.8, fontFamily: 'var(--font-display)', letterSpacing: '-3px' }}>
              MISSIONS
           </h2>
           <span style={{ fontSize: '1.2rem', color: '#666', fontFamily: 'var(--font-code)', letterSpacing: '2px', textTransform: 'uppercase' }}>[ / Current Status ]</span>
        </div>

        {/* Missions Timeline Row */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {activeMissions.map((mission, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '4rem 0',
                  borderBottom: '1px solid rgba(255,255,255,0.05)',
                  position: 'relative',
                  flexWrap: 'wrap',
                  gap: '2rem'
              }}
              className="group"
            >
               {/* Icon / Status */}
               <div style={{ flex: '0 0 auto', width: '300px' }}>
                 <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                   <span style={{ fontSize: '2.5rem' }}>{mission.symbol}</span>
                   <div>
                     <p style={{ fontSize: '1rem', color: '#555', fontFamily: 'var(--font-code)', letterSpacing: '1px', fontWeight: 'bold', margin: 0 }}>
                       {mission.role}
                     </p>
                     <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.4rem' }}>
                        <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-cyber)', boxShadow: '0 0 10px var(--accent-cyber)' }}></span>
                        <span style={{ color: '#fff', fontSize: '0.75rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px' }}>{mission.status}</span>
                     </div>
                   </div>
                 </div>
               </div>

               {/* Title & Description Container */}
               <div style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '1rem', minWidth: '300px' }}>
                  <h3 style={{ 
                        fontSize: 'clamp(2rem, 4vw, 4rem)', 
                        fontWeight: '900', 
                        color: '#fff', 
                        margin: 0, 
                        fontFamily: 'var(--font-display)',
                        letterSpacing: '-2px',
                        textTransform: 'uppercase',
                        lineHeight: 1
                  }}>
                      {mission.title}
                  </h3>
                  
                  <p style={{ color: '#888', fontSize: '1.1rem', lineHeight: 1.6, maxWidth: '600px', marginTop: '0.5rem' }}>
                     {mission.description}
                  </p>
               </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Missions;
