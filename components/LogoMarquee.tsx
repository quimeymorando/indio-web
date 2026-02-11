import React from 'react';
import { BRAND_LOGOS } from '../constants';

const LogoMarquee: React.FC = () => {
  // Split logos into two groups
  // Row 1: First 4 logos
  const ROW1_LOGOS_SOURCE = BRAND_LOGOS.slice(0, 4);
  // Row 2: Remaining 3 logos
  const ROW2_LOGOS_SOURCE = BRAND_LOGOS.slice(4);

  // Duplicate to ensure we cover screen width (assuming ~150px per item including margin)
  // Target ~20-25 items per row for > 3000px width coverage
  // This ensures the animation speed (which is fixed time for full width) is consistent
  const ROW1_LOGOS = Array(6).fill(ROW1_LOGOS_SOURCE).flat(); // 4 * 6 = 24 items
  const ROW2_LOGOS = Array(8).fill(ROW2_LOGOS_SOURCE).flat(); // 3 * 8 = 24 items

  return (
    <div className="w-full py-12 space-y-8 overflow-hidden relative border-t border-b border-white/5 bg-black/20 backdrop-blur-sm">

      {/* Row 1 */}
      <div
        className="w-full flex flex-nowrap overflow-hidden relative min-h-[64px] z-10"
        style={{
          maskImage: 'linear-gradient(to right, transparent 0, black 128px, black calc(100% - 128px), transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0, black 128px, black calc(100% - 128px), transparent 100%)'
        }}
      >
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-4 md:[&_li]:mx-8 [&_img]:max-w-none animate-marquee-scroll min-w-full flex-shrink-0">
          {ROW1_LOGOS.map((logo, index) => (
            <li key={`r1-1-${logo.id}-${index}`} className="flex-shrink-0">
              <img
                src={logo.url}
                alt={logo.name}
                loading="eager"
                decoding="async"
                className="h-12 md:h-16 w-auto object-contain brightness-0 invert opacity-90 logo-glow transition-opacity duration-300 hover:opacity-100"
              />
            </li>
          ))}
        </ul>
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-4 md:[&_li]:mx-8 [&_img]:max-w-none animate-marquee-scroll min-w-full flex-shrink-0" aria-hidden="true">
          {ROW1_LOGOS.map((logo, index) => (
            <li key={`r1-2-${logo.id}-${index}`} className="flex-shrink-0">
              <img
                src={logo.url}
                alt={logo.name}
                loading="eager"
                decoding="async"
                className="h-12 md:h-16 w-auto object-contain brightness-0 invert opacity-90 logo-glow transition-opacity duration-300 hover:opacity-100"
              />
            </li>
          ))}
        </ul>
      </div>

      {/* Row 2 */}
      <div
        className="w-full flex flex-nowrap overflow-hidden relative min-h-[64px] z-10"
        style={{
          maskImage: 'linear-gradient(to right, transparent 0, black 128px, black calc(100% - 128px), transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0, black 128px, black calc(100% - 128px), transparent 100%)'
        }}
      >
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-4 md:[&_li]:mx-8 [&_img]:max-w-none animate-marquee-scroll min-w-full flex-shrink-0" style={{ animationDirection: 'reverse' }}>
          {ROW2_LOGOS.map((logo, index) => (
            <li key={`r2-1-${logo.id}-${index}`} className="flex-shrink-0">
              <img
                src={logo.url}
                alt={logo.name}
                loading="eager"
                decoding="async"
                className="h-12 md:h-16 w-auto object-contain brightness-0 invert opacity-90 logo-glow transition-opacity duration-300 hover:opacity-100"
              />
            </li>
          ))}
        </ul>
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-4 md:[&_li]:mx-8 [&_img]:max-w-none animate-marquee-scroll min-w-full flex-shrink-0" aria-hidden="true" style={{ animationDirection: 'reverse' }}>
          {ROW2_LOGOS.map((logo, index) => (
            <li key={`r2-2-${logo.id}-${index}`} className="flex-shrink-0">
              <img
                src={logo.url}
                alt={logo.name}
                loading="eager"
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