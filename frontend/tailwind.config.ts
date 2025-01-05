import { transform } from "next/dist/build/swc/generated-native";
import type { Config } from "tailwindcss";
const { fontFamily } = require('tailwindcss/defaultTheme');

const config: Config = {
  darkMode: "class",
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   'pattern': "url('/patterns/argyle.png')", 
      // },
      fontFamily: {
        play: ['var(--font-play)', ...fontFamily.sans],
        nunito: ['var(--font-nunito)', ...fontFamily.sans],
        allura: ['var(--font-allura)', ...fontFamily.sans],
      },
      rotate:{
        '15':'-10deg',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to bottom, #B78BF2 0%, #A8FF8A 100%)',
      },
      colors: {
        beige: '#BBAA89',
        rose: '#FE191F',
        tan: '#B29b7e',
        light:'#e4e1dc'
      },
      animation: {
        'spin-slow': 'spin 7s linear infinite',
        flash: 'flash 2.5s infinite',
        "loop-scroll": "loop-scroll 80s linear infinite"
      },
      keyframes: {
        flash: {
          '0%, 100%': { backgroundColor: '#333333' },
          '50%': { backgroundColor: '#B78BF2 ' },
        },
        "loop-scroll":{
          from: {transform: "translateX(0)"},
          to: {transform: "translateX(-100%)"},
        }
      
      },
      
    },
    
  },
};

export default config;
