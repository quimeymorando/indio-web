import React, { useState, useEffect } from 'react';
import PricingCard from './PricingCard';
import LogoMarquee from './LogoMarquee';
import Modal from './Modal';

interface EventDetailsProps {
    id: string;
}

const EventDetails: React.FC<EventDetailsProps> = ({ id }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        // Tally embed script
        const d = document;
        const w = "https://tally.so/widgets/embed.js";
        const v = () => {
            if (typeof (window as any).Tally !== "undefined") {
                (window as any).Tally.loadEmbeds();
            } else {
                d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((e) => {
                    (e as HTMLIFrameElement).src = (e as HTMLElement).dataset.tallySrc || "";
                });
            }
        };

        if (typeof (window as any).Tally !== "undefined") {
            v();
        } else if (d.querySelector(`script[src="${w}"]`) === null) {
            const s = d.createElement("script");
            s.src = w;
            s.onload = v;
            s.onerror = v;
            d.body.appendChild(s);
        }
    }, []);

    return (
        <section id={id} className="relative w-full bg-wine-dark text-gray-200 overflow-hidden">

            {/* Background Ambience */}
            <div className="absolute inset-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-wine-accent/40 via-wine-dark to-black opacity-60 pointer-events-none"></div>

            <div className="relative z-10 max-w-5xl mx-auto px-6 py-24 space-y-32">

                {/* 1. Concept Section */}
                <div className="text-center space-y-8 animate-fade-in">
                    <div className="inline-block p-3 rounded-full bg-gold-muted/5 border border-gold-muted/20 mb-4 animate-heartbeat text-gold-light">
                        {/* Abstract Wine/Sun Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                        </svg>
                    </div>

                    <h2 className="font-display text-3xl md:text-4xl text-white tracking-widest uppercase">
                        CONEXIÓN REAL
                    </h2>

                    <div className="max-w-2xl mx-auto font-serif text-lg leading-relaxed text-gray-300 space-y-6">
                        <p>
                            Una experiencia de atardecer diseñada para quienes valoran el buen gusto. Un entorno versátil y una identidad propia.
                            <strong className="text-gold-light"> Indio</strong> es la intersección entre la distensión y la oportunidad.
                            Donde la música acompaña y el ambiente invita a quedarse.
                        </p>
                        <p className="italic text-sm text-gold-muted/90 font-serif tracking-wide drop-shadow-sm mt-8 border-l-2 border-gold-muted/30 pl-4 py-2">
                            "Lo que ves es solo la superficie. La verdadera experiencia se reserva para quienes están presentes."
                        </p>
                    </div>
                </div>

                {/* 2. Info Grid (What to expect) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start">
                    {/* Left: The Experience */}
                    <div className="space-y-8">
                        <h3 className="font-display text-xl text-gold-muted tracking-[0.2em] border-b border-gold-muted/20 pb-4">
                            La Experiencia
                        </h3>
                        <ul className="space-y-6">
                            {[
                                { title: "Vínculos", desc: "Conversaciones sin prisa. El encuentro real sucede entre copas, fuera del ruido cotidiano." },
                                { title: "Vinos de Altura", desc: "Una curaduría de etiquetas seleccionadas para acompañar el atardecer." },
                                { title: "Cocina de Autor", desc: "Tapeo diseñado por SUA para maridar la experiencia." },
                                { title: "Atmósfera Sonora", desc: "4 horas de un extended set en el que MELE, se ocupará de complementar la experiencia con su performance artística." },
                            ].map((item, idx) => (
                                <li key={idx} className="group">
                                    <h4 className="text-white font-serif font-medium text-lg group-hover:text-gold-light transition-colors">{item.title}</h4>
                                    <p className="text-sm text-gray-400 mt-1 leading-relaxed">{item.desc}</p>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right: Details & logistics */}
                    <div className="space-y-8 bg-white/5 p-8 rounded-xl border border-white/5 shadow-2xl backdrop-blur-sm">
                        <h3 className="font-display text-xl text-gold-muted tracking-[0.2em] border-b border-gold-muted/20 pb-4">
                            Bitácora
                        </h3>

                        <div className="space-y-6 text-sm font-sans tracking-wide">
                            <div>
                                <span className="block text-xs uppercase text-white/40 mb-1">Ubicación</span>
                                <p className="text-white text-lg font-serif">Club Hípico y Golf City Bell</p>
                                <p className="text-gray-400">Calle 12 entre 467 y 470</p>
                                <p className="text-gray-500 text-xs mt-1">Quincho contiguo al restaurante Moro</p>
                            </div>

                            <div>
                                <span className="block text-xs uppercase text-white/40 mb-1">Horario</span>
                                <p className="text-white text-lg font-serif">19:00 — 23:00 hs</p>
                            </div>

                            <div>
                                <span className="block text-xs uppercase text-white/40 mb-1">Acceso</span>
                                <p className="text-gray-300">Capacidad limitada</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 3. Pricing & Tickets */}
                <div className="flex justify-center w-full">
                    <PricingCard />
                </div>

                {/* 4. Tally Form Embed */}
                {/* 4. Tally Form Embed */}
                <div className="max-w-2xl mx-auto text-center space-y-6 pt-12 border-t border-white/5">
                    <h3 className="font-display text-xl text-gold-muted tracking-[0.2em] uppercase">
                        MANTENER EL VÍNCULO
                    </h3>
                    <p className="font-serif italic text-gray-400">
                        Suscríbete para recibir invitaciones a futuros encuentros y novedades exclusivas del ecosistema.
                    </p>
                    <iframe
                        data-tally-src="https://tally.so/embed/J9Ak9o?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                        loading="lazy"
                        width="100%"
                        height="200"
                        frameBorder="0"
                        title="INDIO - Tickets"
                        className="w-full bg-transparent"
                    ></iframe>
                </div>

                {/* 5. Logos */}
                <div className="pt-20">
                    <div className="text-center mb-10">
                        <h3 className="text-sm tracking-[0.4em] text-white uppercase font-serif font-bold drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]">
                            Grupo Moretto
                        </h3>
                        <div className="w-8 h-[1px] bg-white/10 mx-auto mt-4"></div>
                    </div>
                    <div className="opacity-60 hover:opacity-100 transition-opacity duration-700">
                        <LogoMarquee />
                    </div>
                </div>

            </div>

            {/* Ticket Modal */}
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSfLBzLicVznPw_VbUCm5hWW8MCsyhDNQ8DGlN93Pe-pEicdEA/viewform?embedded=true"
                    width="100%"
                    height="800"
                    frameBorder="0"
                    marginHeight={0}
                    marginWidth={0}
                    title="Formulario de Inscripción"
                    className="w-full min-h-[500px] md:min-h-[600px] bg-black"
                >
                    Cargando...
                </iframe>
            </Modal>

        </section>
    );
};

export default EventDetails;
