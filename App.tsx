import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import EventDetails from './components/EventDetails';

const App: React.FC = () => {
  const handleRequestAccess = () => {
    const detailsSection = document.getElementById('details');
    if (detailsSection) {
      detailsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-wine-dark min-h-screen text-white selection:bg-gold-muted selection:text-black">
      <Header />

      <main className="w-full">
        <Hero onRequestAccess={handleRequestAccess} />
        <EventDetails id="details" />
      </main>

      <footer className="w-full py-8 text-center text-white/20 text-xs tracking-widest uppercase bg-black">
        <p>&copy; {new Date().getFullYear()} Grupo Moretto. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;