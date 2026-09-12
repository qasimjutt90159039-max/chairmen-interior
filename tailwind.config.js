/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        luxury: {
          ivory: '#FAF8F5',
          offwhite: '#F5F2EC',
          bone: '#ECE6DC',
          sand: '#DFD7CB',
          border: 'rgba(216, 206, 192, 0.25)',
          borderDark: 'rgba(255, 255, 255, 0.12)',
          muted: '#8B8680',
          charcoal: '#1E1D1F',
          graphite: '#252427',
          obsidian: '#121214',
          black: '#0A0A0B',
          bronze: '#C5A880',
          bronzeLight: '#DEC9AA',
          bronzeDark: '#9C7E55',
          gold: '#BFA26F',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        cinzel: ['"Cinzel"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      fontSize: {
        '5.5xl': ['3.5rem', { lineHeight: '1.15' }],
        '6.5xl': ['4rem', { lineHeight: '1.1' }],
        '7.5xl': ['5.25rem', { lineHeight: '1.05' }],
      },
      scale: {
        '108': '1.08',
      },
      letterSpacing: {
        widest: '.2em',
        luxury: '.28em',
      },
      animation: {
        'fade-in': 'fadeIn 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      }
    },
  },
  plugins: [],
}
