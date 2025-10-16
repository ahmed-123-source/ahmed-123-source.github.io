/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        background: '#141a33',
        foreground: '#e6e6e6',
        primary: {
          DEFAULT: '#6366f1',
          glow: '#8b5cf6',
        },
        accent: '#22d3ee',
        muted: '#1b2040',
      },
      boxShadow: {
        medium: '0 10px 25px -10px rgba(0,0,0,0.4)',
        strong: '0 15px 35px -10px rgba(0,0,0,0.55)',
      },
    },
  },
  plugins: [],
};
