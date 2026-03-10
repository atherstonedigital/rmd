/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        navy: {
          dark: '#0F2035',
          DEFAULT: '#1A3C5E',
          light: '#2A5278',
        },
        amber: {
          DEFAULT: '#E8A020',
          light: '#F5B942',
        },
        'warm-white': '#FAFAF8',
        'off-white': '#F3F2EF',
        stone: {
          DEFAULT: '#E8E5DF',
          200: '#E8E5DF',
        },
        charcoal: '#1C1C1C',
        'mid-grey': '#6B7280',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        heading: ['Inter', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      fontSize: {
        base: ['16px', { lineHeight: '1.75' }],
      },
      borderRadius: {
        '2xl': '1rem',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(-100% - var(--gap)))' },
        },
        'marquee-vertical': {
          from: { transform: 'translateY(0)' },
          to: { transform: 'translateY(calc(-100% - var(--gap)))' },
        },
      },
      animation: {
        marquee: 'marquee var(--duration) linear infinite',
        'marquee-vertical': 'marquee-vertical var(--duration) linear infinite',
      },
    },
  },
  plugins: [],
};
