// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://bnjetwashes.co.uk',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      serialize(item) {
        if (item.url === 'https://bnjetwashes.co.uk/') {
          item.priority = 1.0;
          item.changefreq = 'weekly';
        } else if (item.url.includes('/services') || item.url.includes('/areas')) {
          item.priority = 0.8;
        } else if (item.url.includes('/contact')) {
          item.priority = 0.9;
        }
        return item;
      },
    }),
  ],
});
