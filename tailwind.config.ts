import type { Config } from 'tailwindcss';

const config: Config ={
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
    './src/features/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1D4ED8', // Example custom color
        secondary: '#9333EA',
        
      },
    },
  },
  plugins: [],
};

export default config;