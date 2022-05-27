export const swumpIntegration = {
  name: 'swump-integration',
  hooks: {
    'astro:config:setup': ({ injectScript }) => {
      // This gets injected into the user's page
      injectScript('page', `import Swup from 'swup'; const swup = new Swup();`);
    }
  }
};
