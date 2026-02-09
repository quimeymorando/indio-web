import React from 'react';

interface HeroProps {
  onRequestAccess: () => void;
}

const Hero: React.FC<HeroProps> = ({ onRequestAccess }) => {
  return (
    <section className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-wine-dark">

      {/* Radial Gradient Background for Depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-wine-accent via-wine-dark to-black opacity-80 pointer-events-none" />

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center space-y-12 text-center max-w-4xl px-4">

        {/* Logo 1: The Wooden Head (Simulated with a placeholder + flicker animation) */}
        {/* In production: <img src="/assets/wood-head.png" className="w-64 h-64 object-contain animate-flicker" /> */}
        <div className="relative group cursor-default">
          <img
            src="/logo-central.svg"
            alt="Wine Sunset Logo"
            loading="eager"
            fetchPriority="high"
            decoding="sync"
            className="w-48 h-48 md:w-64 md:h-64 object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
          />
        </div>

        {/* Text Content */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-sans font-bold tracking-[0.2em] text-gray-100 uppercase drop-shadow-lg">
            Wine Sunset
          </h1>
          <div className="flex items-center justify-center space-x-4 opacity-80 max-w-xl mx-auto">
            <span className="hidden md:block h-[1px] w-8 bg-gold-muted/50"></span>
            <p className="text-gold-muted font-serif italic text-base md:text-lg tracking-widest text-center leading-relaxed">
              ¿ESTÁS LISTO PARA LA EXPERIENCIA?
            </p>
            <span className="hidden md:block h-[1px] w-8 bg-gold-muted/50"></span>
          </div>
        </div>



        {/* CTA Button */}
        <button
          onClick={onRequestAccess}
          className="mt-12 px-10 py-4 border animate-border-pulse bg-transparent hover:bg-white/5 text-gray-300 hover:text-gold-light transition-all duration-500 tracking-[0.25em] text-sm uppercase font-semibold"
        >
          Solicitar Acceso
        </button>
      </div>

      {/* Decorative noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
    </section>
  );
};

export default Hero;