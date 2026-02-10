/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                'wine-dark': '#120505', // Deep brownish/red black
                'wine-accent': '#2a0a0a',
                'gold-muted': '#a88b60',
                'gold-light': '#d4af37',
            },
            fontFamily: {
                serif: ['"Playfair Display"', 'serif'],
                sans: ['"Montserrat"', 'sans-serif'],
                display: ['"Cinzel"', 'serif'],
            },
            animation: {
                'flicker': 'flicker 3s infinite alternate',
                'scroll': 'scroll 30s linear infinite',
                'border-pulse': 'border-pulse 3s infinite ease-in-out',
                'fade-in': 'fadeIn 1s ease-out forwards',
                'mystic-heartbeat': 'mysticHeartbeat 4s ease-in-out infinite',
                'heartbeat': 'heartbeat 2.5s ease-in-out infinite',
                'fadeInScale': 'fadeInScale 0.3s ease-out forwards',
            },
            keyframes: {
                flicker: {
                    '0%, 100%': { opacity: '1', filter: 'brightness(1)' },
                    '50%': { opacity: '0.85', filter: 'brightness(1.2)' },
                    '52%': { opacity: '0.6', filter: 'brightness(0.9)' },
                    '54%': { opacity: '0.85', filter: 'brightness(1.2)' },
                },
                scroll: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-100%)' },
                },
                'border-pulse': {
                    '0%, 100%': { borderColor: 'rgba(255, 255, 255, 0.1)', boxShadow: '0 0 0 rgba(212, 175, 55, 0)' },
                    '50%': { borderColor: '#d4af37', boxShadow: '0 0 15px rgba(212, 175, 55, 0.15)' },
                },
                fadeIn: {
                    '0%': { opacity: '0', transform: 'translateY(10px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                fadeInScale: {
                    '0%': { opacity: '0', transform: 'scale(0.95)' },
                    '100%': { opacity: '1', transform: 'scale(1)' },
                },
                mysticHeartbeat: {
                    '0%, 100%': {
                        borderColor: 'rgba(255, 255, 255, 0.05)',
                        backgroundColor: 'rgba(0, 0, 0, 0.4)',
                        boxShadow: '0 0 0 rgba(0,0,0,0)'
                    },
                    '50%': {
                        borderColor: 'rgba(168, 139, 96, 0.3)',
                        backgroundColor: 'rgba(0, 0, 0, 0.6)',
                        boxShadow: '0 0 60px rgba(168, 139, 96, 0.15)'
                    }
                },
                heartbeat: {
                    '0%, 100%': { transform: 'scale(1)' },
                    '50%': { transform: 'scale(1.08)' },
                }
            }
        }
    },
    plugins: [],
}
