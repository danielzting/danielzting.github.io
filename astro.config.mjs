// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://danielzting.github.io',
  trailingSlash: 'never',
  image: {
    responsiveStyles: true,
    layout: 'constrained',
  },
  integrations: [sitemap()],
  markdown: {
    shikiConfig: {
      theme: 'rose-pine-dawn',
    },
  },
  prefetch: true,
});
