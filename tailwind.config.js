/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				'dark-dark-blue': '#2b3945',
				'dark-very-dark-blue': '#202c37',
				'light-very-dark-blue': '#111517',
				'light-dark-gray': '#858585',
				'light-very-light-gray': '#fafafa',
			},
			fontFamily: {
				'Nunito-Sans': ['Nunito Sans', 'sans-serif'],
			},
			screens: {
				'4k': '2500px',
			},
		},
	},
	plugins: [],
};
