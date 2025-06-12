import { defineConfig } from "astro/config";
import partytown from "@astrojs/partytown";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";
// import vercel from "@astrojs/vercel"; // Uncomment if deploying to Vercel

export default defineConfig({
  output: 'static',
  // adapter: vercel(),
  site: "https://www.morganawesome.com", // <-- update this
  integrations: [
    tailwind(),
    icon(),
    sitemap(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
});
