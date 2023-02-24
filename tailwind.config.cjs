/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			gridTemplateColumns: {
				16: 'repeat(16, minmax(0, 1fr))',
				xxl: ' minmax(0, 1fr) 450px',
				xl: ' minmax(0, 1fr) 400px',
				lg: 'minmax(0, 1fr) 250px',
				md: 'minmax(0, 1fr) 450px',
				sm: 'minmax(0, 1fr) 450px',
				footer: '80px minmax(0, 1fr)'
			}
		},
		screens: {
			xl: { max: '1279px' },
			// => @media (max-width: 1279px) { ... }

			lg: { max: '1023px' },
			// => @media (max-width: 1023px) { ... }

			md: { max: '767px' },
			// => @media (max-width: 767px) { ... }

			sm: { max: '639px' }
			// => @media (max-width: 639px) { ... }
		}
	},
	plugins: []
};
