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
  favicon: "img/favicon/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "truecharts", // Usually your GitHub org/user name.
  projectName: "new-pub", // Usually your repo name.

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
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/truecharts/website/tree/master/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  // https://gabrielcsapo.github.io/docusaurus-plugin-image-zoom/docs/getting-started/
  plugins: [require.resolve("docusaurus-plugin-image-zoom")],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
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
        title: "TrueCharts",
        logo: {
          alt: "TrueCharts logo",
          src: "img/1024.png",
        },
        items: [
          {
            type: "doc",
            docId: "about/intro",
            position: "left",
            label: "About",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            type: "doc",
            docId: "manual/intro",
            position: "left",
            label: "Manual",
          },
          {
            type: "doc",
            docId: "charts/intro",
            position: "left",
            label: "Charts",
          },
          {
            type: "localeDropdown",
            position: "right",
          },
          {
            href: "https://github.com/truecharts/apps",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
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
              // {
              //   label: "Facebook",
              //   href: "https://stackoverflow.com/questions/tagged/docusaurus",
              // },
              {
                label: "Telegram",
                href: "https://t.me/s/truecharts",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/truecharts",
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
    }),
};

module.exports = config;
