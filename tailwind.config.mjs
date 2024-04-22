/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				'amano' : "url('https://images.alphacoders.com/908/908775.png')",
				'maika': "url('https://images3.alphacoders.com/962/962687.png')",
				'kaho': "url('https://images5.alphacoders.com/962/962660.png')"
			}
		},
	},
	plugins: [
		plugin(function({ addUtilities }) {
			addUtilities({
				'.no-scrollbar::-webkit-scrollbar': {
					'display': 'none',
				},
				'.no-scrollbar': {
					'-ms-overflow-style' : 'none',
					'scrollbar-width': 'none'
				}
			})
		}),
	]
}
