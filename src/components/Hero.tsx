import React from 'react';
import { AllenKey, WobblyChair } from './ManualVisuals';

const Hero: React.FC = () => {
  return (
    <section className="hero" style={{ textAlign: 'center', backgroundColor: '#fff', border: 'var(--manual-border)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '20px', left: '20px', opacity: 0.1 }}>
        <AllenKey size={120} />
      </div>
      <div style={{ position: 'absolute', bottom: '20px', right: '20px', opacity: 0.1 }}>
        <WobblyChair size={150} />
      </div>
      <div style={{ padding: '100px 40px', position: 'relative', zIndex: 1 }}>
        <h1 style={{ fontSize: '4.5rem', marginBottom: '10px', fontWeight: 900 }}>Assembly Süggested</h1>
        <p style={{ fontSize: '1rem', fontWeight: 'bold', marginBottom: '0px', letterSpacing: '0.15em', textTransform: 'uppercase', lineHeight: 1 }}>
          Build Your Perfect Life in Only
        </p>
        <p style={{ fontSize: '3.5rem', fontWeight: 900, marginBottom: '40px', letterSpacing: '0.05em', lineHeight: 1.1, marginTop: '2px' }}>
          26 SIMPLE STEPS
        </p>
        <div style={{ marginBottom: '50px', borderTop: '1px solid #000', borderBottom: '1px solid #000', display: 'inline-block', padding: '20px 40px' }}>
          <p style={{ textTransform: 'uppercase', letterSpacing: '0.2em', margin: 0 }}>Toronto Fringe Festival</p>
          <p style={{ fontSize: '1.2rem', margin: '5px 0' }}>June 30 – July 12, 2026</p>
        </div>
        <br />
        <a href="#waitlist" className="button-primary" style={{ fontSize: '1.2rem' }}>Join the Waitlist</a>
      </div>
    </section>
  );
};

export default Hero;
