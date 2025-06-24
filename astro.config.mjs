// @ts-check
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  // integrations: [relativeLinks()]
  trailingSlash: "always",
  site: "https://dorsetgolfclub.com.au/",
  integrations: [sitemap()],
});
