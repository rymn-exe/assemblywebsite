import React from 'react';
import { WarningBox } from './ManualVisuals';

const About: React.FC = () => {
  return (
    <section id="about" style={{ padding: '60px 40px', borderBottom: 'var(--manual-border)', position: 'relative' }}>
      <h2 style={{ marginBottom: '4px' }}>Step 1</h2>
      <h3 style={{ marginBottom: '20px', fontWeight: 'normal', fontSize: '1rem', opacity: 0.6, textTransform: 'uppercase', letterSpacing: '0.1em' }}>About the Play</h3>
      <div style={{ maxWidth: '650px' }}>
        <div style={{ borderLeft: '10px solid var(--sweater-yellow)', paddingLeft: '20px', marginBottom: '30px' }}>
          <p style={{ fontSize: '1.4rem', fontWeight: 'bold', margin: 0, lineHeight: 1.5 }}>
            Joule is doing everything right this time.
          </p>
          <p style={{ fontSize: '1.1rem', margin: '14px 0 0', lineHeight: 1.8, color: '#333' }}>
            <span style={{ display: 'block' }}>She's certain that every moment of her life has led her here, with Violet,</span>
            <span style={{ display: 'block' }}>holding herself together by the turn of an Allen key.</span>
          </p>
        </div>
        <p style={{ marginBottom: '30px', lineHeight: 1.7 }}>
          <em>Assembly Sϋggested</em> is an absurd, sharply funny, and quietly devastating play about closeness, misalignment, and the stories we tell ourselves to keep something alive long after it's already changed.
        </p>
        <WarningBox>
          <div>
            <p style={{ margin: '0 0 8px', fontWeight: 'bold' }}>IT ASKS A SIMPLE QUESTION:</p>
            <p style={{ margin: '0 0 4px', fontSize: '0.95rem' }}>When something breaks, do you fix it?</p>
            <p style={{ margin: 0, fontSize: '0.95rem' }}>Or convince yourself it isn't broken?</p>
          </div>
        </WarningBox>
      </div>
    </section>
  );
};

export default About;
