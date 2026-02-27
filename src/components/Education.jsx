import { motion } from 'framer-motion';

const Education = () => {

  return (
    <section id="education" style={{ position: 'relative', overflow: 'hidden', padding: '6rem 0', background: 'var(--bg-primary)' }}>
      
      <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '1400px', display: 'flex', flexDirection: 'column', gap: '8rem' }}>
        
        {/* Massive Header */}
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '2rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '2rem' }}>
           <h2 style={{ fontSize: 'clamp(3rem, 8vw, 10rem)', fontWeight: '900', color: '#fff', margin: 0, lineHeight: 0.8, fontFamily: 'var(--font-display)', letterSpacing: '-3px' }}>
              ORIGIN
           </h2>
           <span style={{ fontSize: '1.2rem', color: '#666', fontFamily: 'var(--font-code)', letterSpacing: '2px', textTransform: 'uppercase' }}>[ / Academic Base ]</span>
        </div>

        {/* Education Timeline Row */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
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
               {/* Year */}
               <div style={{ flex: '0 0 auto', width: '300px' }}>
                 <p style={{ fontSize: '2rem', color: '#555', fontFamily: 'var(--font-code)', letterSpacing: '1px', fontWeight: 'bold' }}>
                   '24 — '28
                 </p>
                 <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '1rem' }}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#fff', boxShadow: '0 0 10px #fff' }}></span>
                    <span style={{ color: '#fff', fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px' }}>In Progress</span>
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
                      B.Tech in Artificial Intelligence
                  </h3>
                  
                  <p style={{ color: '#888', fontSize: '1.2rem', lineHeight: 1.6, maxWidth: '600px', marginTop: '1rem' }}>
                     Gandhinagar Institute of Technology
                  </p>
               </div>
            </motion.div>

            {/* Red & White Skill Education */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
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
               <div style={{ flex: '0 0 auto', width: '300px' }}>
                 <p style={{ fontSize: '2rem', color: '#555', fontFamily: 'var(--font-code)', letterSpacing: '1px', fontWeight: 'bold' }}>
                   Bootcamp
                 </p>
                 <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '1rem' }}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--text-secondary)' }}></span>
                    <span style={{ color: '#888', fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px' }}>Certified</span>
                 </div>
               </div>

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
                      Full Stack Development (MERN)
                  </h3>
                  
                  <p style={{ color: '#888', fontSize: '1.2rem', lineHeight: 1.6, maxWidth: '600px', marginTop: '1rem' }}>
                     Red and White Skill Education Pvt Ltd.
                  </p>
               </div>
            </motion.div>

            {/* My Equation Robo AI */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.4 }}
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
               <div style={{ flex: '0 0 auto', width: '300px' }}>
                 <p style={{ fontSize: '2rem', color: '#555', fontFamily: 'var(--font-code)', letterSpacing: '1px', fontWeight: 'bold' }}>
                   Course
                 </p>
                 <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '1rem' }}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--text-secondary)' }}></span>
                    <span style={{ color: '#888', fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px' }}>Completed</span>
                 </div>
               </div>

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
                      Robotics & Artificial Intelligence
                  </h3>
                  
                  <p style={{ color: '#888', fontSize: '1.2rem', lineHeight: 1.6, maxWidth: '600px', marginTop: '1rem' }}>
                     My Equation (Robo AI)
                  </p>
               </div>
            </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Education;
