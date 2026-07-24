import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Switzer', ...defaultTheme.fontFamily.sans],
        heading: ['Khand', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.6' }],
        lg: ['1.125rem', { lineHeight: '1.75' }],
        xl: ['1.25rem', { lineHeight: '1.75' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['2rem', { lineHeight: '2.5rem' }],
        '4xl': ['2.75rem', { lineHeight: '3.25rem' }],
        '5xl': ['3.5rem', { lineHeight: '4rem' }],
      },
      colors: {
        cream: '#f8f2e9',
        paper: '#fffaf2',
        ink: '#23110d',
        red: {
          700: '#5a1f14',
          800: '#3f140d',
          100: '#f3e3cc',
        },
        gold: {
          500: '#9f6a3c',
          300: '#e3c58f',
        },
      },
    },
  },
  plugins: [],
};
