import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: "server",
  adapter: cloudflare({
    runtime: {
      mode: "local",
      type: "pages",
      bindings: {
        DB: {
          type: "d1",
        },
      },
    },
  }),
  vite: {
    optimizeDeps: {
      exclude: ["oslo"],
    },
  },
});
