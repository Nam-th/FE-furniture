import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#5F2EEA',
        secondary: '#1CC8EE',
        error: '#ED2E7E',
        success: '#00BA88',
        warning: '#F4B740',
      },
      fontFamily: {
        helveticaMedium: ['HelveticaNeueMedium', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
