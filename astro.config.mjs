import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  vite: {
    define: {
      __DEV__: false,
    },
  },
  integrations: [],
});
