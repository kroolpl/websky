import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import alpinejs from "@astrojs/alpinejs";
import react from "@astrojs/react";

export default defineConfig({
  integrations: [tailwind(), alpinejs(), react()],
  site: 'https://your-domain.com',
  compressHTML: true,
});