import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://goochelaarsem.nl',
  output: 'static',
  vite: {
    define: {
      __DEV__: false,
    },
  },
  integrations: [],
});
