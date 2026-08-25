/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          purple: '#7C4DFF',
          blue: '#4FC3F7',
          green: '#4CAF50',
          orange: '#FF9800',
          pink: '#EC407A',
          darkBg: '#121212',
          darkCard: '#1E1E1E',
          darkBorder: '#2C2C2C',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow-purple': '0 0 20px rgba(124, 77, 255, 0.35)',
        'glow-blue': '0 0 20px rgba(79, 195, 247, 0.35)',
        'glow-green': '0 0 20px rgba(76, 175, 80, 0.35)',
        'glow-pink': '0 0 20px rgba(236, 64, 122, 0.35)',
        'glow-orange': '0 0 20px rgba(255, 152, 0, 0.35)',
        'card-soft': '0 10px 30px -5px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.02)',
        'card-dark': '0 10px 30px -5px rgba(0, 0, 0, 0.5), 0 4px 6px -2px rgba(0, 0, 0, 0.3)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      }
    },
  },
  plugins: [],
}
