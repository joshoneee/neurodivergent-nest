import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://joshoneee.github.io',
  base: '/neurodivergent-nest',
  integrations: [tailwind()],
});
