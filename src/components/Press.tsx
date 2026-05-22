import React from 'react';

const Press: React.FC = () => {
  return (
    <section id="press" style={{ padding: '60px 40px', borderBottom: 'var(--manual-border)' }}>
      <h2 style={{ marginBottom: '4px' }}>Step 7</h2>
      <h3 style={{ marginBottom: '20px', fontWeight: 'normal', fontSize: '1rem', opacity: 0.6, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Press / Updates</h3>
      <div style={{ maxWidth: '600px' }}>
        <p style={{ marginTop: '20px' }}>
          <a href="/AssemblySuggested_Media_Release.pdf" download className="button-primary">
            Download Press Release
          </a>
        </p>
      </div>
    </section>
  );
};

export default Press;
