/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ["class"],
  theme: {
  	extend: {
		fontSize: {
			xs: ['0.75rem', { lineHeight: '1rem' }],   // 12px
			sm: ['0.875rem', { lineHeight: '1.25rem' }], // 14px
			base: ['1rem', { lineHeight: '1.5rem' }],    // 16px
			lg: ['1.125rem', { lineHeight: '1.75rem' }], // 18px
			xl: ['1.25rem', { lineHeight: '1.75rem' }],  // 20px
			'2xl': ['1.5rem', { lineHeight: '2rem' }],   // 24px
			'3xl': ['1.875rem', { lineHeight: '2.25rem' }], // 30px
			'4xl': ['2.25rem', { lineHeight: '2.5rem' }],  // 36px
			'5xl': ['3rem', { lineHeight: '1' }],       // 48px
			'6xl': ['3.75rem', { lineHeight: '1' }],    // 60px
			'7xl': ['4.5rem', { lineHeight: '1' }],     // 72px
			'8xl': ['6rem', { lineHeight: '1' }],       // 96px
			'9xl': ['8rem', { lineHeight: '1' }],       // 128px
		},
  		gridTemplateColumns: {
  			'autofit-300': 'repeat(auto-fit, minmax(300px, 1fr))',
  			'autofill-300': 'repeat(auto-fill, minmax(300px, 1fr))',
			'52': 'repeat(52, minmax(0, 1fr))',
  		},
  		colors: {
  			themeColor: '#02a76e',
  			themeColorSoft: '#5ce49b',
  			themeColorObscure: '#162528',
  			themeColorLightSoft: '#f0f8f4',

			// themeColor: '#0077b6',       
			// themeColorSoft: '#69c0ff',   
			// themeColorObscure: '#0a192f',
			// themeColorLightSoft: '#ebf8ff',

			// themeColor: '#f5c518',      
			// themeColorSoft: '#ffe066',   
			// themeColorObscure: '#3b2f01',
			// themeColorLightSoft: '#fffbea',

			themeColor: '#93d02b',
			themeColorSoft: '#c9e57d',
			themeColorObscure: '#253608',
			themeColorLightSoft: '#eef7d9',
  			
			customBlack: '#131a21',
  			cardGray: '#1c252e',
  			customGray: '#283440',
  			customGraySoft: '#f1f1f1',

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
  		boxShadow: {
  			custom: '0 4px 26px rgba(0, 0, 0, 0.6), 0 2px 4px rgba(0, 0, 0, 0.6)'
  		},
  		fontFamily: {
  			sans: ['Graphik', 'sans-serif'],
  			serif: ['Merriweather', 'serif'],
  			fontPrimary: ['publicSans'],
  			fontSecondary: ['barlow']
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			},
			// 'fade-in': {
			// '0%': { opacity: 0, transform: 'scale(0.95)' },
			// '100%': { opacity: 1, transform: 'scale(1)' },
			// },
			// 'fade-out': {
			// '0%': { opacity: 1, transform: 'scale(1)' },
			// '100%': { opacity: 0, transform: 'scale(0.95)' },
			// },
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
			'fade-in': 'fade-in 0.2s ease-out',
        	'fade-out': 'fade-out 0.2s ease-in',
  		}
  	},
  	screens: {
  		sm: '640px',
  		md: '768px',
  		lg: '1024px',
  		xl: '1280px',
  		'2xl': '1536px',
  		iphone: '400px'
  	}
  },
  plugins: [require("tailwindcss-animate")],
}