/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
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
			},
		},
	},
	plugins: [require('tailwind-scrollbar')],
};
