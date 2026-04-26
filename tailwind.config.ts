import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './content/posts/**/*.{md,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#10B981',
          dark: '#047857',
          soft: '#D1FAE5'
        },
        ink: '#111827',
        muted: '#6B7280',
        paper: '#FAFAF9'
      },
      fontFamily: {
        body: ['Inter', 'sans-serif'],
        heading: ['"Playfair Display"', 'serif']
      }
    }
  },
  plugins: []
};

export default config;
