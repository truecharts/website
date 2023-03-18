// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "TrueCharts",
  tagline: "Awesome Helm Charts and SCALE Apps",
  url: "https://truecharts.org",
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "svg/favicon.svg",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "truecharts", // Usually your GitHub org/user name.
  projectName: "website", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
    localeConfigs: {
      en: {
        htmlLang: "en-GB",
      },
    },
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: "https://github.com/truecharts/website/tree/master/"
        },
        blog: {
          routeBasePath: "news",
          editUrl: "https://github.com/truecharts/website/tree/master/",
          path: "news",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  // https://gabrielcsapo.github.io/docusaurus-plugin-image-zoom/docs/getting-started/
  plugins: [
    require.resolve("docusaurus-plugin-image-zoom"),
    require.resolve("docusaurus-plugin-google-adsense"),
    [
      "@docusaurus/plugin-ideal-image",
      {
        quality: 60,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 5, // the max number of images generated between min and max (inclusive)
        disableInDev: false,
      },
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      googleAdsense: {
        dataAdClient: "ca-pub-9270569596814796",
      },
      docs: {
        sidebar: {
          autoCollapseCategories: true,
          hideable: true,
        },
      },
      zoom: {
        selector: ".markdown :not(em) > img",
        config: {
          // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
          margin: 100,
          background: {
            light: "rgb(255, 255, 255)",
            dark: "rgb(50, 50, 50)",
          },
        },
      },
      navbar: {
        title: "",
        logo: {
          alt: "TrueCharts logo",
          src: "svg/logo.svg",
          style: {
            marginLeft: "1.5rem",
            marginRight: "1.5rem",
          },
        },
        items: [
          { to: "/news", label: "News", position: "left" },
          {
            type: "doc",
            docId: "manual/intro",
            position: "left",
            label: "Docs",
          },

          {
            type: "localeDropdown",
            position: "right",
          },
        ],
      },
      footer: {
        style: "light",
        links: [
          {
            title: "Other",
            items: [
              {
                label: "FAQ",
                href: "/manual/FAQ",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Twitter",
                href: "https://twitter.com/useTrueCharts",
              },
              {
                label: "Discord",
                href: "https://discord.gg/tVsPTHWTtr",
              },
              {
                label: "Facebook",
                href: "https://www.facebook.com/truecharts",
              },
              {
                label: "Telegram",
                href: "https://t.me/s/truecharts",
              },
            ],
          },
          {
            title: "Legal",
            items: [
              {
                label: "Code of Conduct",
                href: "/code_of_conduct",
              },
              {
                label: "License",
                href: "/LICENSE",
              },
              {
                label: "Apach2-license",
                href: "/Apach2-license",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} TrueCharts`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        // The application ID provided by Algolia
        appId: "M5JIEOBD9S",

        // Public API key: it is safe to commit it
        apiKey: "996ff61cece86950829f65416b941711",

        indexName: "truecharts",

        //... other Algolia params
      },
    }),
  webpack: {
    jsLoader: (isServer) => ({
      loader: require.resolve("swc-loader"),
      options: {
        jsc: {
          parser: {
            syntax: "typescript",
            tsx: true,
          },
          target: "es2019",
          transform: {
            react: {
              runtime: "automatic",
            },
          },
        },
        module: {
          type: isServer ? "commonjs" : "es6",
        },
      },
    }),
  },
};

module.exports = config;
