/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		screens: {
			xs: '400px', // rsm = really small | @media (min-width: 400px)
			...defaultTheme.screens,
		},
		extend: {
			colors: {
				'button-yellow': '#FFD350',
			},
			backgroundImage: {
				'home-img': "url('/src/assets/bg-home-img.png')",
				'signup-img': "url('/src/assets/bg-signup-img.png')",
				'signin-img': "url('/src/assets/bg-signin-img.png')",
				'reset-password-img': "url('/src/assets/bg-reset-password.png')",
				'addpet-img': "url('/src/assets/bg-addpet-img.png')",
				'pet-list-img': "url('/src/assets/bg-petlist-img.png')",
			},
		},
	},
	plugins: [require('tailwind-scrollbar')],
};
