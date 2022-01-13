const plugin = require( 'tailwindcss/plugin' );

module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		fontFamily: {
			'body': ['Heebo', 'sans-serif']
		},
		fontSize: {
			0: '0px',
			'root-em': '16px',
			xs: '0.75rem',
			sm: '0.875rem',
			base: '1rem',
			lg: '1.125rem',
			xl: '1.25rem',
			'2xl': '1.375rem',
			'3xl': '1.5rem',
			'4xl': '1.625rem',
			'5xl': '1.75rem',
			'6xl': '1.875rem',
			'heading-xs': '2rem',
			'heading-sm': '2.125rem',
			'heading-md': '2.375rem',
			'heading-lg': '2.625rem',
			'heading-xl': '2.875rem',
			'heading-2xl': '3rem',
			'heading-3xl': '4.5rem',
		},
		spacing: {
			px: '1px',
			0: '0',
			1: '0.0625rem',
			2: '0.125rem',
			3: '0.1875rem',
			4: '0.25rem',
			5: '0.3125rem',
			6: '0.375rem',
			8: '0.5rem',
			10: '0.625rem',
			12: '0.75rem',
			16: '1rem',
			20: '1.25rem',
			24: '1.5rem',
			32: '2rem',
			40: '2.5rem',
			48: '3rem',
			56: '3.5rem',
			64: '4rem',
			68: '4.25rem',
			72: '4.5rem',
			76: '4.75rem',
			80: '5rem',
			192: '12rem',
		},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			'primary': '#3A3C49',
			'body': '#79726E',
			'white': '#ffffff',
			'black': '#333333',
			'off-white': '#EFECEA',
			'gray': '#D9D9D9',
		},
		screens: {
			phone: '300px',
			'tablet-portrait': '600px',
			'wp-admin-bar': '783px',
			'tablet-landscape': '900px',
			'desktop-min': { min: '1200px' },
			desktop: '1200px',
			'desktop-large': '1600px',
		},
		container: {
			center: true,
			padding: '1.25rem',
			screens: {
				phone: '100%',
				desktop: '1240px',
			},
		},
		extend: {
			backgroundSize: {
				'200%' : '200% 100%'
			}
		},
	},
	plugins: [
		require('tailwindcss-text-fill-stroke')(),
		plugin( ( { addBase, config } ) => {
			addBase( {
				strong: {
					fontWeight: '700',
					color: config( 'theme.colors.primary' )
				}
			} )
		} ),
		plugin( ( { addUtilities } ) => {
			const bgTextGradient = {
				'.bg-half-primary': {
					backgroundImage: 'linear-gradient( to right, #3A3C49 50%, transparent 50% )'
				}
			}

			addUtilities( bgTextGradient )
		} ),
	],
}
