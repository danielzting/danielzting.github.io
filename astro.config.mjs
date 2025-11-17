// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://danielzting.github.io',
    trailingSlash: 'never',
    image: {
        responsiveStyles: true,
        layout: 'constrained',
    },
});
