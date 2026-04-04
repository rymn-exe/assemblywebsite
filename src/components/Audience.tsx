import React from 'react';

const Audience: React.FC = () => {
  return (
    <section id="audience" style={{ padding: '60px 40px', borderBottom: 'var(--manual-border)' }}>
      <h2 style={{ marginBottom: '4px' }}>Step 4</h2>
      <h3 style={{ marginBottom: '20px', fontWeight: 'normal', fontSize: '1rem', opacity: 0.6, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Audience Info</h3>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
        <div>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Runtime</h3>
          <p>60 Minutes</p>
        </div>
        <div>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Age Suitability</h3>
          <p>Suitable for all ages</p>
        </div>
        <div>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Genre</h3>
          <p>Storytelling<br />Absurdist<br />Comedy</p>
        </div>
        <div>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Venue</h3>
          <p>Native Earth Performing Arts<br />Giizi's Studio<br />585 Dundas Street East, Unit 130<br />Toronto, ON</p>
        </div>
      </div>
    </section>
  );
};

export default Audience;
