import { defineConfig, envField } from "astro/config";

import robotsTxt from "astro-robots-txt";

import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [
    robotsTxt(),
    sitemap({
      filter: (page) => page !== "https://gabogomez.dev/components/",
      i18n: {
        defaultLocale: "en",
        locales: {
          en: "en",
          es: "es",
        },
      },
    }),
  ],
  site: "https://gabogomez.dev/",

  env: {
    schema: {
      ISPRODUCTION: envField.boolean({
        default: false,
        context: "server",
        access: "public",
      }),
    },
  },

  i18n: {
    locales: ["en", "es"],
    defaultLocale: "en",
    routing: {
      prefixDefaultLocale: false,
    },
    fallback: {
      es: "en",
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
