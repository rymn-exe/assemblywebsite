import React from 'react';

const Press: React.FC = () => {
  return (
    <section id="press" style={{ padding: '60px 40px', borderBottom: 'var(--manual-border)' }}>
      <h2 style={{ marginBottom: '4px' }}>Step 7</h2>
      <h3 style={{ marginBottom: '20px', fontWeight: 'normal', fontSize: '1rem', opacity: 0.6, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Press / Updates</h3>
      <div style={{ maxWidth: '600px' }}>
        <p style={{ fontStyle: 'italic', marginBottom: '20px' }}>        </p>
        <p>
          We're currently in the "pre-assembly" phase. Check back for rehearsal photos, announcements, and quotes as we build this project from the ground up.
        </p>
      </div>
    </section>
  );
};

export default Press;
