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
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "truecharts", // Usually your GitHub org/user name.
  projectName: "new-pub", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"]
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
          editUrl: "https://github.com/truecharts/pub"
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      })
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "TrueCharts",
        logo: {
          alt: "TrueCharts logo",
          src: "img/1024.png"
        },
        items: [

          { to: "/blog", label: "Blog", position: "left" },
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Docs"
          },
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Charts and Apps"
          },
          {
            href: "https://github.com/truecharts/apps",
            label: "GitHub",
            position: "right"
          }
        ]
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/intro"
              }
            ]
          },
          {
            title: "Community",
            items: [
              {
                label: "Twitter",
                href: "https://twitter.com/docusaurus"
              },
              {
                label: "Discord",
                href: "https://discordapp.com/invite/docusaurus"
              },
              {
                label: "Facebook",
                href: "https://stackoverflow.com/questions/tagged/docusaurus"
              },
              {
                label: "Telegram",
                href: "https://stackoverflow.com/questions/tagged/docusaurus"
              }
            ]
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog"
              },
              {
                label: "GitHub",
                href: "https://github.com/facebook/docusaurus"
              }
            ]
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} TrueCharts`
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme
      }
    })
};

module.exports = config;
