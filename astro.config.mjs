// @ts-check
import { defineConfig, envField } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import vercelServerless from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  output: 'server',

  integrations: [tailwind()],

  adapter: vercelServerless({
    webAnalytics: { enabled: true }
  })
});