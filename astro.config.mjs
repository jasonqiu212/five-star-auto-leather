import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://www.fivestarautoleather.com',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [icon(), sitemap(), react()],
});
