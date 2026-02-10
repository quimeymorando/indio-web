import React from 'react';
import { BRAND_LOGOS } from '../constants';

const LogoMarquee: React.FC = () => {
  return (
    <div className="w-full py-16 overflow-hidden relative border-t border-b border-white/5 bg-black/20 backdrop-blur-sm">
      <div className="w-full inline-flex flex-nowrap overflow-hidden">
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-14 [&_img]:max-w-none animate-scroll will-change-transform py-6 min-w-full w-max" style={{ animationDuration: '60s' }}>
          {/* Duplicate list 12 times to ensure seamless loop on even the widest screens */}
          {Array(12).fill(BRAND_LOGOS).flat().map((logo, index) => (
            <li key={`${logo.id}-${index}`} className="flex-shrink-0">
              <img
                src={logo.url}
                alt={logo.name}
                loading="lazy"
                decoding="async"
                className="h-12 md:h-16 w-auto object-contain brightness-0 invert opacity-90 logo-glow transition-opacity duration-300 hover:opacity-100"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LogoMarquee;