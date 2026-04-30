import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://jericho1201.github.io',
  base: '/first-booster-site',
  integrations: [mdx(), sitemap()],
});
