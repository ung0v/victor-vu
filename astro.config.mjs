import { defineConfig } from "astro/config"
import mdx from "@astrojs/mdx"
import sitemap from "@astrojs/sitemap"
import tailwind from "@astrojs/tailwind"

export default defineConfig({
  i18n: {
    defaultLocale: "en",
    locales: ["en", "vi"],
    // fallback: {
    //   vi: "en"
    // },
    routing: {
      prefixDefaultLocale: false
  },
  },
  site: "https://vuong.pw",
  integrations: [mdx(), sitemap(), tailwind()]
});
