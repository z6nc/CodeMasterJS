/** @type {import('tailwindcss').Config} */
import animations from '@midudev/tailwind-animations'
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'lapizTexto': ['Comic Neue', 'sans-serif'],
				'lapizTitulo': ['Patrick Hand', 'sans-serif'],
			  },
			  colors: {
				'colorjs': '#facc15',
			  } ,
				visibility: {
				  'content-auto': 'content-visibility: auto',
				  
				}
		},
	},
	plugins: [
		[animations],
	],
}
