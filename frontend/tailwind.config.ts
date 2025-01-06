import { transform } from "next/dist/build/swc/generated-native";
import type { Config } from "tailwindcss";
const { fontFamily } = require('tailwindcss/defaultTheme');

const config: Config = {
  darkMode: ["class", "class"],
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
			flex:{
				full: "0 0 100%",
			},
  		fontFamily: {
  			play: [
  				'var(--font-play)',
                    ...fontFamily.sans
                ],
  			nunito: [
  				'var(--font-nunito)',
                    ...fontFamily.sans
                ],
  			allura: [
  				'var(--font-allura)',
                    ...fontFamily.sans
                ]
  		},
  		rotate: {
  			'15': '-10deg'
  		},
  		backgroundImage: {
  			'custom-gradient': 'linear-gradient(to bottom, #B78BF2 0%, #A8FF8A 100%)'
  		},
  		colors: {
  			beige: '#BBAA89',
  			rose: '#FE191F',
  			tan: '#B29b7e',
  			light: '#e4e1dc',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		animation: {
  			'spin-slow': 'spin 7s linear infinite',
  			flash: 'flash 2.5s infinite',
  			'loop-scroll': 'loop-scroll 80s linear infinite'
  		},
  		keyframes: {
  			flash: {
  				'0%, 100%': {
  					backgroundColor: '#333333'
  				},
  				'50%': {
  					backgroundColor: '#B78BF2 '
  				}
  			},
  			'loop-scroll': {
  				from: {
  					transform: 'translateX(0)'
  				},
  				to: {
  					transform: 'translateX(-100%)'
  				}
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
    plugins: [require("tailwindcss-animate")]
};

export default config;
