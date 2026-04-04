import React, { useState } from 'react';

const Waitlist: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section id="waitlist" style={{ padding: '80px 40px', backgroundColor: 'var(--sweater-yellow)', borderBottom: 'var(--manual-border)' }}>
      <div style={{ maxWidth: '560px' }}>
        <h2 style={{ marginBottom: '4px' }}>Step 6</h2>
        <h3 style={{ marginBottom: '10px', fontWeight: 'normal', fontSize: '1rem', opacity: 0.6, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Join the Waitlist</h3>
        <p style={{ fontSize: '1.1rem', marginBottom: '30px' }}>
          Tickets aren't on sale yet — but when they drop, you'll be the first to know.
          Enter your email below and we'll send you a heads-up the moment they go live.
        </p>

        {submitted ? (
          <div style={{ padding: '24px', border: 'var(--manual-border)', backgroundColor: '#fff' }}>
            <p style={{ fontWeight: 'bold', fontSize: '1.1rem', margin: 0 }}>You're on the list.</p>
            <p style={{ margin: '8px 0 0', fontSize: '0.9rem', opacity: 0.7 }}>We'll be in touch when tickets are available.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <input
              type="email"
              required
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                padding: '14px',
                fontSize: '1rem',
                border: 'var(--manual-border)',
                backgroundColor: '#fff',
                width: '100%',
                boxSizing: 'border-box',
              }}
            />
            <button type="submit" className="button-primary" style={{ fontSize: '1rem', padding: '14px' }}>
              Notify Me When Tickets Drop
            </button>
          </form>
        )}

        <p style={{ marginTop: '16px', fontSize: '0.8rem', opacity: 0.6 }}>
          No spam. Just one email when tickets go live.
        </p>
      </div>
    </section>
  );
};

export default Waitlist;
