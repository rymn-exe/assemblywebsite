import React from 'react';

const ArtistGallery: React.FC = () => {
  return (
    <section id="artist-gallery" style={{ padding: '60px 40px', borderBottom: 'var(--manual-border)' }}>
      <h2 style={{ marginBottom: '4px' }}>Step 4</h2>
      <h3 style={{ marginBottom: '20px', fontWeight: 'normal', fontSize: '1rem', opacity: 0.6, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
        Artist Gallery
      </h3>
      <p style={{ margin: 0, fontSize: '1.05rem', fontStyle: 'italic', opacity: 0.8 }}>
        Coming soon.
      </p>
    </section>
  );
};

export default ArtistGallery;
