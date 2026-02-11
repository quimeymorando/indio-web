
import React from 'react';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full relative bg-black/40 backdrop-blur-md border-t border-white/5 overflow-hidden">
            {/* Decorative top highlight */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-gold-muted/30 to-transparent" />

            <div className="max-w-7xl mx-auto px-6 py-8">
                <div className="flex flex-col items-center justify-center space-y-6">

                    {/* Minimal Logo / Brand Mark */}
                    <div className="flex flex-col items-center gap-3 group cursor-default">
                        <div className="w-10 h-10 flex items-center justify-center rounded-full border border-gold-muted/10 bg-wine-dark/30 group-hover:border-gold-muted/30 group-hover:bg-wine-dark/50 transition-all duration-500">
                            <span className="font-display text-lg text-gold-muted/80 pt-0.5">M</span>
                        </div>
                        <span className="font-serif text-gold-muted/40 text-[10px] tracking-[0.3em] uppercase group-hover:text-gold-muted/70 transition-colors duration-500">
                            Grupo Moretto
                        </span>
                    </div>

                    {/* Copyright */}
                    <div className="text-center">
                        <p className="font-serif text-white/20 text-[10px] tracking-widest">
                            &copy; {currentYear} TODOS LOS DERECHOS RESERVADOS
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
