import React, { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center text-white transition-all duration-300 ${isScrolled
        ? 'py-4'
        : ''
        }`}
    >
      <div className="flex items-center">
        {/* Logo 2: "INDIO" - Using text with specific font to mimic the image provided, 
            or an img tag if the asset was local */}
        <img
          src="/logo-header.svg"
          alt="INDIO Logo"
          className={`h-16 md:h-20 object-contain brightness-0 invert drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all duration-300 ${isScrolled ? 'h-12 md:h-16' : ''}`}
        />
      </div>

      {/* Empty right side as requested ("limpio sin la informacion") */}
      <div></div>
    </header>
  );
}