import React from 'react';

const Tickets: React.FC = () => {
  return (
    <section id="tickets" style={{ padding: '60px 40px', backgroundColor: '#fff', borderBottom: 'var(--manual-border)' }}>
      <h2 style={{ marginBottom: '20px' }}>07. Tickets</h2>
      <div style={{ maxWidth: '600px' }}>
        <p style={{ fontSize: '1.2rem', marginBottom: '20px' }}>
          On-sale date: To Be Announced (Spring 2026)
        </p>
        <p style={{ marginBottom: '20px' }}>
          Ticket pricing: $10 – $15 (Fringe Pricing)
        </p>
        <div style={{ padding: '20px', border: '1px solid #ccc', backgroundColor: '#f9f9f9' }}>
          <h3 style={{ fontSize: '1rem', marginBottom: '10px' }}>Fringe Pass Holders</h3>
          <p style={{ fontSize: '0.9rem' }}>
            Multi-pass holders are welcome! Check the Toronto Fringe website for more details on how to use your pass.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Tickets;
