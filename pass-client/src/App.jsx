import React from 'react'

function App() {
  const subjects = [
  { 
    name: 'Math', 
    color: '#3b82f6', 
    subcats: ['6th Grade', '7th Grade', '8th Grade', 'Prealgebra', 'Algebra 1', 'Algebra 2', 'Geometry', 'Trigonometry', 'Statistics', 'Precalculus', 'Calculus AB', 'Calculus BC'],
    apEligible: ['Statistics', 'Calculus AB', 'Calculus BC'] 
  },
  { 
    name: 'Science', 
    color: '#10b981', 
    subcats: ['Life Science', 'Physical Science', 'Earth Science', 'Biology', 'Chemistry', 'Physics', 'Environmental Science', 'Anatomy'],
    apEligible: ['Biology', 'Chemistry', 'Physics 1', 'Physics 2', 'Environmental Science'] 
  },
  { 
    name: 'Social Studies', 
    color: '#f59e0b', 
    subcats: ['World History', 'US History', 'Civics', 'Geography', 'Economics', 'Psychology', 'European History', 'Gov & Politics', 'AP Human Geography'],
    apEligible: ['World History', 'US History', 'Microeconomics', 'Macroeconomics', 'Psychology', 'Euro History', 'Gov & Politics'],
    alwaysAP: ['AP Human Geography'] 
  },
  { 
    name: 'English', 
    color: '#ef4444', 
    subcats: ['English 6-8', 'English 9', 'English 10', 'American Literature', 'British Literature', 'World Literature', 'Creative Writing', 'Journalism', 'AP English Language', 'AP English Literature'],
    apEligible: [], 
    alwaysAP: ['AP English Language', 'AP English Literature'] 
  },
  { 
    name: 'Computer Science', 
    color: '#8b5cf6', 
    subcats: ['Web Dev', 'Python', 'Cybersecurity', 'AP CSP', 'AP CSA'], 
    apEligible: [], 
    alwaysAP: ['AP CSP', 'AP CSA'] 
  },
  { 
    name: 'World Language', 
    color: '#ec4899', 
    subcats: ['Spanish', 'French', 'Mandarin', 'ASL', 'Latin', 'German'],
    apEligible: ['Spanish', 'French', 'Mandarin', 'Latin', 'German'] 
  },
  { 
    name: 'Electives', 
    color: '#64748b', 
    subcats: ['Art History', 'Music Theory', 'Personal Finance', 'Health', 'Accounting'],
    apEligible: ['Art History', 'Music Theory'] 
  }
];

  return (
    <div style={{ padding: '40px', fontFamily: 'system-ui, sans-serif', maxWidth: '900px', margin: '0 auto' }}>
      <header style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2.5rem', color: '#1e293b' }}>PASS</h1>
        <p style={{ color: '#64748b', fontSize: '1.2rem' }}>Peer Academic Study Support</p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
        {subjects.map((subj) => (
          <div 
            key={subj.name} 
            style={{ 
              backgroundColor: 'white', 
              border: `2px solid ${subj.color}`, 
              borderRadius: '12px', 
              padding: '24px', 
              textAlign: 'center',
              cursor: 'pointer',
              transition: 'transform 0.2s'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <h2 style={{ color: subj.color, margin: '0 0 10px 0' }}>{subj.name}</h2>
            <button style={{ 
              backgroundColor: subj.color, 
              color: 'white', 
              border: 'none', 
              padding: '8px 16px', 
              borderRadius: '6px',
              fontWeight: 'bold'
            }}>
              Browse
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App