import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "background": "#1C1C1C",
        "main": "#FFDE16",
        "text": "#B9B9B9",
        "white": "#ffffff"
      }
    },
    screens: {
      'ssm': {
        max: '576px'
      },
      'sm': {
        min: '576px'
      },
      'md': {
        min: '768px'
      },
      'lg': {
        min: '992px'
      },
      'xl': {
        min: '1200px'
      },
      'xxl': {
        min: '1400px'
      }
    }
  },
  plugins: [],
};
export default config;
