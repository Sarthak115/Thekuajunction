/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        text: 'var(--text)',
        card: 'var(--card)',
        accent: 'var(--accent)',
        'accent-hover': 'var(--accent-hover)',
        border: 'var(--border)',
      },
      animation: {
        'scroll': 'scroll-left 30s linear infinite',
        'ripple': 'ripple-effect 0.6s linear',
        'fadeIn': 'fadeIn 0.6s ease-out',
      },
      keyframes: {
        'scroll-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'ripple-effect': {
          'to': { 
            transform: 'translate(-50%, -50%) scale(4)', 
            opacity: '0' 
          },
        },
        'fadeIn': {
          'from': { 
            opacity: '0', 
            transform: 'translateY(20px)' 
          },
          'to': { 
            opacity: '1', 
            transform: 'translateY(0)' 
          },
        },
      },
      fontFamily: {
        'sans': ['Segoe UI', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'],
      },
    },
  },
  plugins: [],
};