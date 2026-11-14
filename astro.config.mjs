// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
	site: 'https://portfolio.vercel.app',
	output: 'static',
	adapter: vercel(),
	i18n: {
		locales: ['en', 'es'],
		defaultLocale: 'en',
		routing: {
			prefixDefaultLocale: true,
		},
	},
	redirects: {
		'/': '/en',
	},
	vite: {
		plugins: [tailwindcss()],
	},
});
