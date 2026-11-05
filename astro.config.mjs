import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://goochelaarsem.nl',
  output: 'static',
  trailingSlash: 'always',
  vite: {
    define: {
      __DEV__: false,
    },
  },
  integrations: [],
});
