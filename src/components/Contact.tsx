import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" style={{ padding: '60px 40px', backgroundColor: '#fff', borderBottom: 'none' }}>
      <h2 style={{ marginBottom: '4px' }}>Step 7</h2>
      <h3 style={{ marginBottom: '20px', fontWeight: 'normal', fontSize: '1rem', opacity: 0.6, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Contact</h3>
      <div style={{ maxWidth: '600px' }}>
        <p style={{ marginBottom: '10px' }}>
          Email: <a href="mailto:rymn.exe@gmail.com" style={{ color: 'var(--technical-blue)' }}>rymn.exe@gmail.com</a>
        </p>
        <p style={{ marginBottom: '30px' }}>
          Instagram: <a href="https://www.instagram.com/assemblysuggested" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--technical-blue)' }}>@assemblysuggested</a>
        </p>
      </div>
      <footer style={{ marginTop: '60px', textAlign: 'center', fontSize: '0.8rem', opacity: 0.6 }}>
        &copy; 2026 Assembly Süggested. A play by Rymn Wadhwa. All rights reserved.
      </footer>
    </section>
  );
};

export default Contact;
