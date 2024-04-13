import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";
// https://github.com/HiDeoo/starlight-links-validator
import starlightLinksValidator from "starlight-links-validator";
// https://github.com/HiDeoo/starlight-image-zoom
import starlightImageZoom from "starlight-image-zoom";
// https://github.com/HiDeoo/starlight-blog
import starlightBlog from "starlight-blog";
import sitemap from "@astrojs/sitemap";
// Configure global authors here
import { authors } from "./src/content/docs/blog/authors";
// Use algolia for search
import starlightDocSearch from '@astrojs/starlight-docsearch';

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
        src: "./src/assets/with-text.svg",
        replacesTitle: true,
      },
      head: [
        {
          tag: 'script',
          attrs: {
            src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9270569596814796',
            'crossorigin': 'anonymous',
            defer: true,
          },
        },
        {
          tag: 'script',
          attrs: {
            src: 'https://www.googletagmanager.com/gtag/js?id=G-Q9NT692BZZ',
            defer: true,
          },
        },
        {
          tag: 'script',
          content: "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-Q9NT692BZZ');",
        },
      ],
      social: {
        github: new URL("/s/git", site).href,
        facebook: new URL("/s/fb", site).href,
        "x.com": new URL("/s/twitter", site).href,
        discord: new URL("/s/discord", site).href,
        telegram: new URL("/s/tg", site).href,
        openCollective: new URL("/s/oc", site).href,
      },
      editLink: {
        baseUrl: "https://github.com/truecharts/chart-docs/edit/main/docs",
      },
      lastUpdated: true,
      pagefind: true,
      components: {
        // Override the default `SocialIcons` component.
        Header: "./src/components/CustomHeader.astro",
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
          errorOnRelativeLinks: false,
          errorOnFallbackPages: false,
        }),
        starlightDocSearch({
          appId: 'M5JIEOBD9S',
          apiKey: '996ff61cece86950829f65416b941711',
          indexName: 'truecharts',
        }),
      ],
      // Set English as the default language for this site.
      defaultLocale: 'root',
      locales: {
        // English docs in `src/content/docs/en/`
        root: {
          label: 'English',
          lang: 'en',
        },
        // Simplified Chinese docs in `src/content/docs/zh-CN/`
        'cn': {
          label: '简体中文',
          lang: 'zh-CN',
        },
        // Russian docs in `src/content/docs/ru/`
        ru: {
          label: 'русский',
          lang: 'ru-RU',
        },
      },
      sidebar: [
        {
          label: "General",
          collapsed: false,
          autogenerate: {
            directory: "general",
          },
        },
        {
          label: "Platforms",
          collapsed: true,
          autogenerate: {
            directory: "platforms",
          },
        },
        {
          label: "Development",
          collapsed: true,
          autogenerate: {
            directory: "development",
          },
        },
        {
          label: "Charts",
          collapsed: true,
          autogenerate: {
            directory: "charts",
          },
        },
      ],
    }),
    sitemap(),
    tailwind(),
  ],
});
