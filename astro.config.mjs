import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://neurodivergent-nest.vercel.app',
  integrations: [tailwind()],
});
