import { defineConfig } from 'astro/config';
import { SITE, BASE_PATH_WITHOUT_DOMAIN } from './base-path.mjs';
import lit from '@astrojs/lit';

// Full Astro Configuration API Documentation:
// https://docs.astro.build/reference/configuration-reference

// @type-check enabled!
// VSCode and other TypeScript-enabled text editors will provide auto-completion,
// helpful tooltips, and warnings if your exported object is invalid.
// You can disable this by removing "@ts-check" and `@type` comments below.

// https://astro.build/config
export default defineConfig({
  // Enable the lit renderer to support LitHTML components and templates.
  integrations: [lit()],
  site: SITE,
  base: BASE_PATH_WITHOUT_DOMAIN,
  vite: {
    ssr: {
      noExternal: 'node_modules/lit'
    }
  }
});
