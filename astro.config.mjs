import { defineConfig } from "astro/config";
import partytown from "@astrojs/partytown";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  output: 'static', // Changed from 'server'
  // Removed adapter - not needed for static sites
  site: "https://example.com", // Placeholder for your future domain
  integrations: [
    tailwind(), // For styling
    icon(), // For using icons easily
    sitemap(), // Generates a sitemap for search engines
    partytown({ // Helps with third-party script performance
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
});