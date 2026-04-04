import React from 'react';

interface TeamMember {
  name: string;
  title: string;
  bio: React.ReactNode;
  link?: string;
  linkLabel?: string;
}

const members: TeamMember[] = [
  {
    name: 'Rymn Wadhwa',
    title: 'Writer & Director',
    bio: <>Rymn is a Toronto-based playwright interested in the narratives we build around everyday events. She is obsessed with the absurdity in the mundane, and how those structures <em>almost</em> hold.</>,
    link: 'https://www.instagram.com/assemblysuggested',
    linkLabel: '@assemblysuggested',
  },
  {
    name: 'Francesa Amato',
    title: 'Stage Manager',
    bio: 'Francesa is a Toronto-based stage manager with a passion for keeping chaos organized and artists supported. She brings clarity and calm to even the most absurd productions.',
    link: '',
    linkLabel: '',
  },
  {
    name: 'Olivia Korosak',
    title: 'Sound Designer',
    bio: 'Olivia is a sound designer who believes that the right sound at the right moment can say what words cannot. She creates sonic worlds that are immersive, surprising, and deeply felt.',
    link: '',
    linkLabel: '',
  },
  {
    name: 'Emma Scoble',
    title: 'The Narrator',
    bio: 'Emma is a performer whose voice carries both precision and warmth — exactly what a narrator of assembly instructions requires. She has a gift for making the absurd feel inevitable.',
    link: '',
    linkLabel: '',
  },
  {
    name: 'Brianna Newman',
    title: 'Joule',
    bio: 'Brianna is an actor who thrives in roles that require vulnerability wrapped in determination. She brings a grounded humanity to Joule\'s stubborn, hopeful pursuit of assembly.',
    link: '',
    linkLabel: '',
  },
  {
    name: 'Ruby Jaclyn',
    title: 'Violet',
    bio: 'Ruby is a performer whose instincts are sharp and whose presence is magnetic. She finds the humor and heartbreak in Violet\'s role as the reluctant, essential helper.',
    link: '',
    linkLabel: '',
  },
];

const Team: React.FC = () => {
  return (
    <section id="team" style={{ padding: '60px 40px', borderBottom: 'var(--manual-border)' }}>
      <h2 style={{ marginBottom: '4px' }}>Step 2</h2>
      <h3 style={{ marginBottom: '40px', fontWeight: 'normal', fontSize: '1rem', opacity: 0.6, textTransform: 'uppercase', letterSpacing: '0.1em' }}>The Team</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '40px' }}>
        {members.map((member) => (
          <div key={member.name} style={{ borderLeft: '4px solid var(--manual-black)', paddingLeft: '20px' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '4px' }}>{member.name}</h3>
            <p style={{ fontWeight: 'bold', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '12px', opacity: 0.7 }}>
              {member.title}
            </p>
            <p style={{ fontSize: '0.9rem', marginBottom: '12px', lineHeight: 1.6 }}>{member.bio}</p>
            {member.link ? (
              <a
                href={member.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: '0.85rem', color: 'var(--technical-blue)', textDecoration: 'none', borderBottom: '1px solid var(--technical-blue)' }}
              >
                {member.linkLabel || member.link}
              </a>
            ) : (
              <span style={{ fontSize: '0.85rem', opacity: 0.4, fontStyle: 'italic' }}>Link coming soon</span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
