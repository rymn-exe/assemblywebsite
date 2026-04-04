import React from 'react';

const Involved: React.FC = () => {
  return (
    <section id="involved" style={{ padding: '60px 40px', backgroundColor: '#e0e0e0', borderBottom: 'var(--manual-border)' }}>
      <h2 style={{ marginBottom: '4px' }}>Step 3</h2>
      <h3 style={{ marginBottom: '20px', fontWeight: 'normal', fontSize: '1rem', opacity: 0.6, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Get Involved</h3>
      <div style={{ maxWidth: '600px' }}>
        <p style={{ marginBottom: '20px' }}>
          This project is for people who like to build..
          We’re looking for creative spirits, support staff, and those who want to be part of the "Fringe" energy.
        </p>
        <p style={{ marginBottom: '30px' }}>
          Offering credit, profit-sharing, and collaboration opportunities.
        </p>
        <a href="#contact" className="button-primary">Reach Out</a>
      </div>
    </section>
  );
};

export default Involved;
