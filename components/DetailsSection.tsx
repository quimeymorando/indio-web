import React from 'react';
import PricingCard from './PricingCard';
import LogoMarquee from './LogoMarquee';

interface DetailsSectionProps {
  id: string;
}

const DetailsSection: React.FC<DetailsSectionProps> = ({ id }) => {
  return (
    <section id={id} className="min-h-screen w-full bg-wine-dark relative flex flex-col pt-12 pb-24 space-y-32">

      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-wine-accent via-wine-dark to-black opacity-60 pointer-events-none"></div>

      {/* 1. Final Mystic Card CTA (Now First) */}
      <div className="relative z-10 w-full flex justify-center px-4">
        <div className="group relative w-full max-w-lg cursor-pointer overflow-hidden rounded-xl border border-white/5 bg-black/40 backdrop-blur-sm p-12 transition-all duration-1000 animate-mystic-heartbeat">

          {/* Internal Glow Effect */}
          <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-gold-muted/10 blur-[80px] transition-all duration-700 group-hover:bg-gold-muted/20"></div>

          <div className="relative flex flex-col items-center text-center">
            {/* Mystic Icon / Symbol - Heartbeat Animation */}
            <div className="mb-8 text-gold-muted/40 animate-heartbeat">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="h-12 w-12">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>

            <h2 className="mb-4 font-display text-2xl tracking-widest text-white/90 transition-colors duration-500 group-hover:text-white">
              EL FUTURO AGUARDA
            </h2>

            <p className="mb-10 font-serif text-sm italic leading-relaxed text-white/50 transition-colors duration-500 group-hover:text-white/70">
              "Lo que has visto es solo el comienzo. <br />
              El verdadero secreto se revela a quienes se atreven a cruzar el umbral."
            </p>

            {/* Button - Heartbeat Animation */}
            <button
              className="group/btn relative px-8 py-3 text-xs font-bold uppercase tracking-[0.25em] text-gold-muted transition-all duration-500 hover:text-black animate-heartbeat"
              onClick={() => alert("Redirigiendo al formulario de registro...")}
            >
              <span className="absolute inset-0 border border-gold-muted/30 transition-all duration-500 group-hover/btn:bg-gold-muted group-hover/btn:border-gold-muted"></span>
              <span className="relative">REGISTRARSE A LA EXPERIENCIA TOTAL</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. Pricing/Event Info Section */}
      <div className="relative z-10 w-full px-6 flex justify-center">
        <PricingCard />
      </div>

      {/* 3. Logos Carousel */}
      <div className="relative z-10 w-full">
        <div className="text-center mb-10">
          <h3 className="text-sm md:text-base tracking-[0.4em] text-white/40 uppercase font-serif">
            Grupo Moretto
          </h3>
          <div className="w-12 h-[1px] bg-white/10 mx-auto mt-4"></div>
        </div>
        <LogoMarquee />
      </div>

    </section>
  );
};

export default DetailsSection;