import React from 'react';
import { BRAND_LOGOS } from '../constants';

const LogoMarquee: React.FC = () => {
  return (
    <div className="w-full py-16 overflow-hidden relative border-t border-b border-white/5 bg-black/20 backdrop-blur-sm">
      <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-12 [&_img]:max-w-none animate-scroll">
          {/* Duplicate list for seamless loop */}
          {[...BRAND_LOGOS, ...BRAND_LOGOS, ...BRAND_LOGOS].map((logo, index) => (
            <li key={`${logo.id}-${index}`} className="flex-shrink-0">
              <img 
                src={logo.url} 
                alt={logo.name} 
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