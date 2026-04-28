import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import CallForArtists, { CallForArtistsBanner } from './components/CallForArtists';
import Team from './components/Team';
import ArtistGallery from './components/ArtistGallery';
import Involved from './components/Involved';
import Audience from './components/Audience';
import Press from './components/Press';
import Waitlist from './components/Waitlist';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="manual-container">
      <CallForArtistsBanner />
      <Hero />
      <About />
      <CallForArtists />
      <Team />
      <ArtistGallery />
      <Involved />
      <Audience />
      <Press />
      <Waitlist />
      <Contact />
    </div>
  );
};

export default App;
