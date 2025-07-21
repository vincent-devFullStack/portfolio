import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/serverless";

export default defineConfig({
  site: "https://www.vince-dev.fr",
  trailingSlash: "never",
  adapter: vercel(),
  integrations: [
    /* ... */
  ],
});
