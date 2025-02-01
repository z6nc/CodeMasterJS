/** @type {import('tailwindcss').Config} */
import animations from '@midudev/tailwind-animations'
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			  colors: {
				'colorjs': '#facc15',
			  } ,
				visibility: {
				  'content-auto': 'content-visibility: auto',
				},
				dropShadow: {
					'Titulo' :'1px 6px 1px #cdcbc4',
					'logo' : '10px 9px 6px #a9a69a'
				},
		},
	},
	plugins: [
		[animations],
	],
}
