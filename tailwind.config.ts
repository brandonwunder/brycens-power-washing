import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1B4F72',
          dark: '#154360',
          deeper: '#0E2F44',
        },
        secondary: {
          DEFAULT: '#E67E22',
          dark: '#D35400',
        },
        accent: {
          DEFAULT: '#3498DB',
          dark: '#2980B9',
        },
        gold: {
          DEFAULT: '#D4A017',
          light: '#F4D03F',
          dark: '#B8860B',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          alt: '#F4F6F7',
        },
        text: {
          DEFAULT: '#2C3E50',
          light: '#5D6D7E',
        },
        border: '#D5DBDB',
        star: '#F1C40F',
        success: '#27AE60',
        error: '#E74C3C',
      },
      fontFamily: {
        heading: ['var(--font-montserrat)', 'Arial', 'Helvetica', 'sans-serif'],
        body: ['var(--font-opensans)', 'Arial', 'Helvetica', 'sans-serif'],
      },
      maxWidth: {
        site: '1200px',
      },
      borderRadius: {
        DEFAULT: '8px',
        lg: '12px',
      },
      boxShadow: {
        sm: '0 1px 3px rgba(0, 0, 0, 0.1)',
        md: '0 4px 6px rgba(0, 0, 0, 0.1)',
        lg: '0 10px 25px rgba(0, 0, 0, 0.15)',
        cta: '0 4px 15px rgba(230, 126, 34, 0.4)',
        'cta-hover': '0 6px 20px rgba(230, 126, 34, 0.5)',
        gold: '0 0 20px rgba(212, 160, 23, 0.15)',
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, #1B4F72 0%, #154360 50%, #0E2F44 100%)',
        'gradient-gold': 'linear-gradient(135deg, #D4A017, #F4D03F)',
        'gradient-cta': 'linear-gradient(135deg, #E67E22, #D35400)',
      },
      keyframes: {
        shimmer: {
          '0%': { left: '-100%' },
          '100%': { left: '100%' },
        },
        'crown-float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'mist-drift': {
          '0%, 100%': { backgroundPosition: '0% 0%' },
          '50%': { backgroundPosition: '100% 100%' },
        },
      },
      animation: {
        shimmer: 'shimmer 3s infinite',
        'crown-float': 'crown-float 3s ease-in-out infinite',
        'mist-drift': 'mist-drift 8s ease-in-out infinite',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
