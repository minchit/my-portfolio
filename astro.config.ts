import {defineConfig} from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  output: 'static',

  site: 'https://www.minchit.com',
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: true, // ✅ Ensure this is set to true
    }),
    mdx(),
  ],
  vite: {
    build: {
      assetsInlineLimit: 0, // ✅ Force external asset generation
    },
    resolve: {
      alias: {
        "/_astro/": "/assets/",
      },
    },
  },
});
