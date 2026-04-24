// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';

import mdx from '@astrojs/mdx';
import unocss from 'unocss/astro';
import { SITE } from './src/config';

// https://astro.build/config
export default defineConfig({
  site: SITE.website,
  base: SITE.base,
  integrations: [
    sitemap(),
    robotsTxt(),
    mdx(),
    unocss({ injectReset: true })
  ],

  // https://docs.astro.build/en/reference/experimental-flags/
  experimental: {
    contentIntellisense: true,
  }
});