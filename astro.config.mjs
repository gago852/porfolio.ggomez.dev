import { defineConfig, envField } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import robotsTxt from 'astro-robots-txt';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), robotsTxt()],
  site: 'https://ggomez-dev.pages.dev/',
  env: {
    schema: {
      ISPRODUCTION: envField.boolean({
        default: false,
        context: 'server',
        access: 'public',
      }),
    },
  },
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'es',
    routing: {
      prefixDefaultLocale: false,
    },
    fallback: {
      en: 'es',
    },
  },
});
