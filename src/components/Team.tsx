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
    bio: 'Francesca is an interdisciplinary writer, musician, and theatre artist crafting bold, queer, character-driven work. Guided by authentic storytelling and lived experiences, her practice includes comedy, drag, music, devised theatre, jewelry design, and sculptural set building.',
    link: 'https://francesca00cm.wixsite.com/francescatheartist',
    linkLabel: 'Website',
  },
  {
    name: 'Olivia Korosak',
    title: 'Sound Designer',
    bio: 'Olivia is a sound designer who believes that the right sound at the right moment can say what words cannot. She creates sonic worlds that are immersive, surprising, and deeply felt.',
    link: 'https://oliviakorosak.com/',
    linkLabel: 'Website',
  },
  {
    name: 'Emma Scoble',
    title: 'The Narrator',
    bio: <>Emma Scoble (she/her) is an actor and graduate of Theatre and Drama Studies at the University of Toronto who recently appeared as Face in <em>The Alchemist</em> and Malvolio in <em>Twelfth Night</em> (Theatre Erindale). When she is not acting, she enjoys painting, playwriting, practicing stage combat, and consuming copious amounts of sci-fi media and classical plays.</>,
    link: 'https://www.instagram.com/scoberlone_',
    linkLabel: 'Instagram',
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
    bio: 'Ruby Jaclyn is a Canadian actor and graduate of Vancouver Film School with a passion for live performance. With a love for comedy, she is thrilled to bring wit and heart to the role of Violet.',
    link: 'https://www.instagram.com/rubyjaclynn',
    linkLabel: 'Instagram',
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
