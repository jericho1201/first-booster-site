import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://jericho1201.github.io',
  base: '/first-booster-site',
  integrations: [mdx()],
});
