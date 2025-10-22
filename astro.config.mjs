import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";

export default defineConfig({
  site: "https://www.vince-dev.fr",
  trailingSlash: "never",
  adapter: vercel({ mode: "serverless" }),
  integrations: [
    /* ... */
  ],
  vite: {
    server: {
      headers: {
        "Cross-Origin-Embedder-Policy": "credentialless",
        "Cross-Origin-Opener-Policy": "same-origin",
      },
    },
  },
});
