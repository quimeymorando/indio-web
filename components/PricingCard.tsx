import React from 'react';
import { PRICING_CONTENT } from '../constants';

const PricingCard: React.FC = () => {
  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      {/* Card Container */}
      <div className="relative flex flex-col items-center p-8 md:p-12 border border-gold-muted/30 bg-[#1a0505] rounded-2xl shadow-2xl overflow-hidden group hover:border-gold-muted/50 transition-colors duration-500">

        {/* Decorative corner glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-red-900/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

        {/* Eyebrow */}
        <h3 className="text-gold-muted/70 text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-4 text-center">
          {PRICING_CONTENT.eyebrow}
        </h3>

        {/* Main Title */}
        <h2 className="text-3xl md:text-5xl font-sans font-bold text-gray-100 mb-6 text-center uppercase leading-tight drop-shadow-md">
          {PRICING_CONTENT.title}
        </h2>

        {/* New Additional Text */}
        <div className="flex flex-col items-center space-y-2 mb-8 text-center">
          <p className="text-lg md:text-xl font-serif text-gray-200 tracking-wide drop-shadow-md">
            Tres encuentros. La misma magia.
          </p>
          <p className="text-xs md:text-sm font-light text-gold-muted/80 tracking-wider">
            Accede al pack completo y obtén Beneficios Exclusivos
          </p>
        </div>

        {/* Features List (Only show if there are features) */}
        {PRICING_CONTENT.features.length > 0 && (
          <ul className="space-y-6 w-full max-w-lg mb-12 flex flex-col items-center">
            {PRICING_CONTENT.features.map((feature, idx) => (
              <li key={idx} className="flex items-center space-x-4">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-5 h-5 rounded-full border border-gold-muted/50 flex items-center justify-center bg-gold-muted/10">
                    <svg className="w-3 h-3 text-gold-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                </div>

                {/* Text */}
                <span className="font-sans text-sm md:text-base font-medium leading-relaxed text-gray-200">
                  {feature.text}
                </span>
              </li>
            ))}
          </ul>
        )}

        {/* Action Button */}
        <button
          onClick={() => window.open("https://www.masentrada.app/events/indio-wine-sunset?referred_by=ce83a4c2-4fbe-4777-8031-338f9862ca17", "_blank")}
          className="relative overflow-hidden px-8 py-3 bg-gold-light text-black font-bold text-xs tracking-[0.2em] uppercase shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_35px_rgba(212,175,55,0.5)] transition-all duration-300 transform hover:-translate-y-1"
        >
          SOLICITAR ACCESO
        </button>

      </div>
    </div>
  );
};

export default PricingCard;