const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'OpenAlbion',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'icon', href: '/openalbion.png' }],
    ['meta', { name: 'description', content: 'OpenAlbion is a free and open-source platform providing Albion Online data and an API.' }],
    [
      'script',
      {
          async: true,
          src: 'https://www.googletagmanager.com/gtag/js?id=G-VFJWJN8CJF',
      },
    ],
    [
      'script',
      {},
      [
          "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-VFJWJN8CJF');",
      ],
    ],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    algolia: {
      apiKey: '4d407fe5bd0bcaa84d2e8d897eaae56c',
      indexName: 'openalbion',
      appId: 'Y0EIQ1U6A8'
    },
    nav: [
      {
        text: 'Docs',
        link: '/docs/',
      },
      {
        text: 'API Token',
        link: 'https://api.openalbion.com'
      }
    ],
    sidebar: {
      '/docs/': [
        {
          title: 'Getting Started',
          collapsable: false,
          children: [
            '',
            'authentication',
          ]
        },
        {
          title: 'Endpoints',
          collapsable: false,
          children: [
            'categories',
            'weapons',
            'weapon-stats',
            'armors',
            'armor-stats',
            'spells'
          ]
        },
        {
          title: 'Types',
          collapsable: false,
          children: [
            'category-types',
            'enchantment-types',
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
