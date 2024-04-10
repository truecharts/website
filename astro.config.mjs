import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightLinksValidator from "starlight-links-validator";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://charts.truecharts.org",
  base: "/",
  output: "static",
  cacheDir: ".astro/cache",
  trailingSlash: "ignore",
  compressHTML: true,
  prefetch: true,
  build: {
    output: "directory",
  },
  experimental: {
    // TODO: Enable this after bug is fixed
    //  https://github.com/withastro/astro/issues/9353
    contentCollectionCache: false,
  },
  integrations: [
    starlight({
      title: "TrueCharts Charts",
      tagline: "Awesome Helm Charts",
      social: {
        github: "https://github.com/truecharts/charts",
      },
      editLink: {
        baseUrl: "https://github.com/truecharts/chart-docs/edit/main/docs",
      },
      lastUpdated: true,
      pagefind: false,
      plugins: [
        starlightLinksValidator({
          errorOnRelativeLinks: false,
        }),
      ],
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: "Example Guide",
              link: "/guides/example/",
            },
          ],
        },
        {
          label: "Reference",
          autogenerate: {
            directory: "reference",
          },
        },
      ],
    }),
    sitemap(),
  ],
});
