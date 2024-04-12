import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
// https://github.com/HiDeoo/starlight-links-validator
import starlightLinksValidator from "starlight-links-validator";
// https://github.com/HiDeoo/starlight-image-zoom
import starlightImageZoom from "starlight-image-zoom";
// https://github.com/HiDeoo/starlight-blog
import starlightBlog from "starlight-blog";
import sitemap from "@astrojs/sitemap";
// Configure global authors here
import { authors } from "./src/content/docs/blog/authors";

const site = "https://test.truecharts.org";
// https://astro.build/config
export default defineConfig({
  site: site,
  base: "/",
  output: "static",
  outDir: "build",
  cacheDir: ".astro/cache",
  trailingSlash: "ignore",
  compressHTML: true,
  prefetch: true,
  output: "static",
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
      logo: {
        src: './src/assets/with-text.svg',
        replacesTitle: true,
      },
      social: {
        github: new URL("/s/git", site).href,
        facebook: new URL("/s/fb", site).href,
        "x.com": new URL("/s/twitter", site).href,
        discord: new URL("/s/discord", site).href,
        telegram: new URL("/s/tg", site).href,
      },
      editLink: {
        baseUrl: "https://github.com/truecharts/chart-docs/edit/main/docs",
      },
      lastUpdated: true,
      pagefind: true,
      components: {
        // Override the default `SocialIcons` component.
        Header: './src/components/CustomHeader.astro',
      },
      plugins: [
        starlightBlog({
          title: "TrueCharts News",
          postCount: 5,
          recentPostCount: 25,
          authors: authors,
        }),
        starlightImageZoom(),
        starlightLinksValidator({
          errorOnRelativeLinks: true,
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
        // {
        //   label: "Charts",
        //   collapsed: true,
        //   autogenerate: {
        //     directory: "charts",
        //   },
        // },
      ],
    }),
    sitemap(),
  ],
});
