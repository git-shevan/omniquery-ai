/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'omni-dark': '#0f0f12',
        'omni-darker': '#080809',
        'omni-red': '#ff2a4f',
        'omni-blue': '#3df7ff',
        'omni-purple': '#9d00ff',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-roboto-mono)', 'monospace'],
        display: ['var(--font-orbitron)', 'sans-serif'],
      },
      keyframes: {
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
            opacity: 0.99,
            filter: 'drop-shadow(0 0 1px rgba(61, 247, 255, 0.7)) drop-shadow(0 0 4px rgba(61, 247, 255, 0.5))',
          },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
            opacity: 0.4,
            filter: 'none',
          },
        },
        glow: {
          '0%, 100%': {
            filter: 'drop-shadow(0 0 8px rgba(61, 247, 255, 0.7))',
          },
          '50%': {
            filter: 'drop-shadow(0 0 16px rgba(255, 42, 79, 0.9))',
          },
        },
        scan: {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '0% 100%' },
        },
      },
      animation: {
        flicker: 'flicker 5s linear infinite',
        glow: 'glow 3s ease-in-out infinite',
        scan: 'scan 1.5s linear infinite',
      },
    },
  },
  plugins: [],
}