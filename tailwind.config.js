// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      animation: {
        'float-slow': 'float-slow 6s ease-in-out infinite',
        'float-slower': 'float-slower 8s ease-in-out infinite',
        'float-slowest': 'float-slowest 12s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'drift': 'drift 20s ease-in-out infinite alternate',
        'scroll-progress': 'scroll-progress linear',
      },
      keyframes: {
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(2deg)' },
        },
        'float-slower': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-15px) rotate(-3deg)' },
        },
        'float-slowest': {
          '0%, 100%': { transform: 'translateY(0px) scale(1)' },
          '50%': { transform: 'translateY(-10px) scale(1.05)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.6', filter: 'brightness(1)' },
          '50%': { opacity: '1', filter: 'brightness(1.3)' },
        },
        'drift': {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '100%': { transform: 'translate(30px, -20px) scale(1.1)' },
        },
      },
      colors: {
        // Primary structural colors (slate/navy)
        primary: {
          50: '#f1f5f9',
          100: '#e2e8f0',
          200: '#cbd5e1',
          300: '#94a3b8',
          400: '#64748b',
          500: '#475569',
          600: '#334155',
          700: '#1e293b',
          800: '#0f172a',
          900: '#020617',
          950: '#00030a'
        },
        // Premium accent (gold/bronze)
        accent: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#FFB347',
          500: '#FF9933',
          600: '#e68a00',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12'
        },
        // Spiritual highlight (saffron)
        saffron: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#FFB347',
          500: '#FF9933',
          600: '#e68a00',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12'
        },
        // Warm surfaces
        cream: {
          50: '#F5F0E8',
          100: '#FAF7F2',
          200: '#F5EEE0',
        },
        // Background colors
        background: {
          light: '#FDF8F0',
          dark: '#0f172a',
          card: {
            light: '#FAF7F2',
            dark: '#1e293b'
          }
        },
        // Text colors
        text: {
          primary: {
            light: '#1a1a1a',
            dark: '#f1f5f9'
          },
          secondary: {
            light: '#475569',
            dark: '#94a3b8'
          }
        }
      }
    },
  },
  plugins: [],
}