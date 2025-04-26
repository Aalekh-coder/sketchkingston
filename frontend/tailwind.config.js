/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
	theme: {
		fontFamily: {
			poppins: ["Poppins", "sans-serif"],
			montserrat: ["Montserrat", "sans-serif"],
		},
		
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
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
					foreground: 'hsl(var(--primary-foreground))',
					50: '#f3e8fa',
					100: '#e7d1f5',
					200: '#cfa3eb',
					300: '#b775e0',
					400: '#9f47d6',
					500: '#7209B7', // primary
					600: '#5b07a3',
					700: '#45058f',
					800: '#2e037a',
					900: '#170266',
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
					50: '#fee8f3',
          100: '#ffd1e7',
          200: '#ffa3cf',
          300: '#ff75b7',
          400: '#ff479f',
          500: '#F72585', // secondary
          600: '#e31b78',
          700: '#cc116b',
          800: '#b5085e',
          900: '#9e0051',
					
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
					50: '#e6f9fe',
					100: '#cdf4fd',
					200: '#9be9fb',
					300: '#69def9',
					400: '#36d3f7',
					500: '#4CC9F0', // accent
					600: '#02bfe9',
					700: '#01aad3',
					800: '#0195bc',
					900: '#0080a6',
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
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}

