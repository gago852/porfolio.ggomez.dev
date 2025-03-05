import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import robotsTxt from 'astro-robots-txt';

// https://astro.build/config
// TODO: Add your site URL
export default defineConfig({
  integrations: [tailwind(), robotsTxt()],
  site: 'https://example.com',
});
