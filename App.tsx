import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import DetailsSection from './components/DetailsSection';

const App: React.FC = () => {
  const [showDetails, setShowDetails] = useState(false);

  const handleRequestAccess = () => {
    setShowDetails(true);
    // Ensure we start at the top of the new view
    window.scrollTo(0, 0);
  };

  return (
    <div className="bg-wine-dark min-h-screen text-white selection:bg-gold-muted selection:text-black">
      <Header />
      
      <main className="w-full">
        {!showDetails ? (
          <Hero onRequestAccess={handleRequestAccess} />
        ) : (
          <div className="animate-fade-in flex flex-col min-h-screen">
            <div className="flex-grow">
              <DetailsSection id="details" />
            </div>
            <footer className="w-full py-8 text-center text-white/20 text-xs tracking-widest uppercase bg-black">
              <p>&copy; {new Date().getFullYear()} Grupo Moretto. All rights reserved.</p>
            </footer>
          </div>
        )}
      </main>
    </div>
  );
};

export default App;