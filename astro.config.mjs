import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site:'https://unrivaled-peony-43c7ec.netlify.app/',
  integrations: [react(), tailwind(), mdx()]
});