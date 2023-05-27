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
    ['link', { rel: 'icon', href: 'https://res.cloudinary.com/pyaesoneaung/image/upload/v1685124260/openalbion/favicon.png' }],
    ['meta', { name: 'description', content: 'OpenAlbion is a free and open-source platform providing Albion Online data and an API.' }],
    ['meta', { property: 'og:title', content: 'OpenAlbion' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:url', content: 'https://openalbion.com' }],
    ['meta', { property: 'og:image', content: 'https://res.cloudinary.com/pyaesoneaung/image/upload/v1685124262/openalbion/preview.png' }],
    ['meta', { property: 'og:description', content: 'OpenAlbion is a free and open-source platform providing Albion Online data and an API.' }],
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
        text: 'Api Token',
        link: 'https://api.openalbion.com'
      },
      {
        text: 'Donate',
        link: 'https://ko-fi.com/openalbion'
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
            'accessories',
            'accessories-stats',
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
