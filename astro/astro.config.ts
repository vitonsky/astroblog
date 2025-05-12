import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import shikiTheme from './shiki.json';
import { SITE_ORIGIN } from './src/consts';

// https://astro.build/config
export default defineConfig({
	site: SITE_ORIGIN,
	integrations: [mdx(), sitemap(), icon()],
	markdown: {
		shikiConfig: {
			theme: shikiTheme,
		},
	},
});
