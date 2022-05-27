import { defineConfig } from 'astro/config';
import { SITE, BASE_PATH_WITHOUT_DOMAIN } from './base-path.mjs';
import { swumpIntegration } from './astro-swump-integration.mjs';
import dotenv from 'dotenv';
import lit from '@astrojs/lit';
dotenv.config();
const { KB_EMAIL, KB_PW, KB_TOKEN, KB_LEAGUE_ID } = process.env;

// Full Astro Configuration API Documentation:
// https://docs.astro.build/reference/configuration-reference

// @type-check enabled!
// VSCode and other TypeScript-enabled text editors will provide auto-completion,
// helpful tooltips, and warnings if your exported object is invalid.
// You can disable this by removing "@ts-check" and `@type` comments below.

// https://astro.build/config
export default defineConfig({
  // Enable the lit renderer to support LitHTML components and templates.
  integrations: [lit(), swumpIntegration],
  site: SITE,
  base: BASE_PATH_WITHOUT_DOMAIN,
  vite: {
    define: {
      KB_PW: `'${KB_PW}'`,
      KB_EMAIL: `'${KB_EMAIL}'`,
      KB_TOKEN: `'${KB_TOKEN}'`,
      KB_LEAGUE_ID: `'${KB_LEAGUE_ID}'`
    },
    server: {
      proxy: {
        '^/api/.*': {
          target: 'https://api.kickbase.com',
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, ''),
          headers: {
            cookie: `kkstrauth=${KB_TOKEN}`
          }
        }
      }
    }
  }
});
