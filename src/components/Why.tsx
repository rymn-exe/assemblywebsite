import React from 'react';

const Why: React.FC = () => {
  return (
    <section id="why" style={{ padding: '60px 40px', backgroundColor: '#fef7e0', borderBottom: 'var(--manual-border)' }}>
      <h2 style={{ marginBottom: '20px' }}>03. Why This Play Exists</h2>
      <div style={{ maxWidth: '600px' }}>
        <p style={{ fontStyle: 'italic', marginBottom: '20px' }}>
          "Step ten: apologize to the chair for judging it."
        </p>
        <p>
          This story needed to be told because of the universal feeling of building a life without a manual. 
          As a first-time playwright, I wanted to capture the "first-time playwright energy" of intent—the idea that even if the furniture wobbles, 
          the act of assembly is where the meaning lies.
        </p>
      </div>
    </section>
  );
};

export default Why;
