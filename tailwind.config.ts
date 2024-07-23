import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        slider: {
          '100%': { left: '-100%' },
        },
        show: {
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        show: 'show 0.5s ease-in-out forwards',
      },
    },
  },
  plugins: [],
};
export default config;
