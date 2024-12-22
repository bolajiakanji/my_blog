import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
	  extend: {
		  screens: {
			mmd: '680px'  
		  }, 
		  width: {
			  wid: '33.3%',
			  width_image: '215px',
			  md_w: '45%',
			  '55%': '55%',
			  '52%': '52%',
			  '60%': '60%',
			  '46%': '45%',
			  '54%': '55%',
			  '80%': '80%',
		  },
		  margin: {
			  '4.5rem': '4.5rem',
			  '45vh': '45vh',
			  '20%': '20%',
		  },
		  height: {
			  he: '30rem',
			  '20vh': '20vh',
			  '25vh': '25vh',
			  '40vh': '40vh',
			  '35vh': '35vh',
			  180: '180px',
			  '90vh': '90vh',
			  '15vh': '15vh',
			  '10vh': '10vh'
			  

		  },
		  boxShadow: {
			  'bs': '1px 4px 40px 30px rgb(1, 3, 20, 0.85) ',
			  'whi':'1px 2px 20px 10px rgb(255, 255, 255, 0.85)  '
		  },
		  colors: {
			  id_bg: 'rgb(1, 3, 20, 0.8 )',
			  id_bgw: 'rgb(255, 255, 255, 0.7 )',
			  bg_color: '#010314',
			  accentColor: '#e93d82',
			  
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
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
				"50%": '50%'
		  },
		  zIndex: {
			  "1": "1",
			  '2': '2',
			  '3': '3',
			  '4': '4',
			  '5': '5',
			  '6': '6',
			  '7': '7',
			  '8': '8',
			  '9': '9',
			  '10': '10',
			  '70': '70',
			}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
