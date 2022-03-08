import dotenv from 'dotenv';
dotenv.config();
const { KB_EMAIL, KB_PW, KB_TOKEN, KB_LEAGUE_ID } = process.env;

// Full Astro Configuration API Documentation:
// https://docs.astro.build/reference/configuration-reference

// @type-check enabled!
// VSCode and other TypeScript-enabled text editors will provide auto-completion,
// helpful tooltips, and warnings if your exported object is invalid.
// You can disable this by removing "@ts-check" and `@type` comments below.

// @ts-check
export default /** @type {import('astro').AstroUserConfig} */ ({
  // Enable the lit renderer to support LitHTML components and templates.
  renderers: ['@astrojs/renderer-lit'],
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
  },
  buildOptions: {
    site: 'https://felixschusi.github.io/better-kickbase-web/'
  }
});
