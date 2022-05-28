// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Fustie's blog",
  tagline: 'Just a blog by little programmer.',
  url: 'https://blog.fustie.tech',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'fustie', // Usually your GitHub org/user name.
  projectName: 'blog', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({docs: {
					sidebarPath: require.resolve('./sidebars.js'),
					routeBasePath: "/docs",
					editUrl: 'https://github.com/fustie/blog.fustie.tech/tree/main/',
				},

				blog: {
					showReadingTime: true,
					routeBasePath: '/',
					blogSidebarCount: 'ALL',
					blogSidebarTitle: 'Все посты',
				},
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Fustie's blog",
        logo: {
          alt: 'My blog logo',
          src: 'https://i.imgur.com/ZsjfAiB.png',
        },
        items: [
          {
            type: 'dropdown',
            label: 'Блог',
            position: 'left',
            items: [
              {
                label: 'Главная',
                to: '/',
              },
              {
                label: 'Архив',
                to: '/archive'
              }
            ],
          },
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Хранилище',
          },
          {
            href: "https://t.me/fluidrl",
            position: "right",
            label: "💬 Telegram",
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
