import React from 'react';

export const CallForArtistsBanner: React.FC = () => {
  return (
    <a
      href="#call-for-artists"
      style={{
        display: 'block',
        backgroundColor: '#fff9cf',
        border: 'var(--manual-border)',
        borderLeft: '10px solid var(--sweater-yellow)',
        textDecoration: 'none',
        color: 'var(--manual-black)',
        padding: '16px 22px',
        marginBottom: '10px',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '14px' }}>
        <div>
          <p style={{ margin: 0, fontWeight: 900, letterSpacing: '0.08em', textTransform: 'uppercase', fontSize: '0.78rem', lineHeight: 1.15, opacity: 0.75 }}>
            Call for Artists
          </p>
          <p style={{ margin: '6px 0 0', fontSize: '1rem', fontWeight: 700, lineHeight: 1.35, fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>
            Submit your artwork and get featured in the Assembly Sϋggested playbill and other promotional materials.
          </p>
        </div>
        <span style={{ fontSize: '1.4rem', lineHeight: 1, fontWeight: 800, opacity: 0.85 }} aria-hidden="true">
          →
        </span>
      </div>
    </a>
  );
};

const CallForArtists: React.FC = () => {
  return (
    <section id="call-for-artists" style={{ padding: '60px 40px', borderBottom: 'var(--manual-border)' }}>
      <h2 style={{ marginBottom: '4px' }}>Step 2</h2>
      <h3 style={{ marginBottom: '20px', fontWeight: 'normal', fontSize: '1rem', opacity: 0.6, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
        Call for Artists
      </h3>
      <div style={{ maxWidth: '700px' }}>
        <p style={{ marginBottom: '18px', lineHeight: 1.7 }}>
          We are inviting artists to submit original chair artwork in their own style for <em>Assembly Sϋggested</em>. Selected pieces will be featured in the playbill, on social media, and on the website.
        </p>
        <p style={{ marginBottom: '18px', lineHeight: 1.7 }}>
          To be eligible, artists must also post about the show on their social media.
        </p>
        <p style={{ marginBottom: '18px', lineHeight: 1.7 }}>
          We are also selecting a limited number of artists for poster design. Poster prints will be sold at the shows. If you are interested, send an email below indicating your interest in poster design.
        </p>
        <p style={{ marginBottom: '26px', lineHeight: 1.7 }}>
          Send submissions and questions to <a href="mailto:rymn.exe@gmail.com" style={{ color: 'var(--technical-blue)' }}>rymn.exe@gmail.com</a>.
        </p>
        <a href="mailto:rymn.exe@gmail.com" className="button-primary">
          Submit Artwork by Email
        </a>
      </div>
    </section>
  );
};

export default CallForArtists;
