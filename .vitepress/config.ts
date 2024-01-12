import { defineConfigWithTheme } from "vitepress";
import type { ThemeConfig } from '@hempworks/pilgrim'
import config from '@hempworks/pilgrim/config'

export default defineConfigWithTheme<ThemeConfig>({
    extends: config,
    title: 'OpenAlbion',
    description: 'OpenAlbion is a free and open-source platform providing Albion Online data and an API.',
    base: '/',
    cleanUrls: false,
    srcDir: 'src',
    sitemap: {
        hostname: 'https://openalbion.com'
    }

    head: [
        ['link', {
            rel: 'shortcut icon',
            href: 'https://res.cloudinary.com/pyaesoneaung/image/upload/v1685124260/openalbion/favicon.png',
            type: 'image/x-icon',
        }],
        ['link', {
            rel: 'icon',
            href: 'https://res.cloudinary.com/pyaesoneaung/image/upload/v1685124260/openalbion/favicon.png',
            type: 'image/x-icon',
        }],
        ['meta', {
            name: 'description',
            content: 'OpenAlbion is a free and open-source platform providing Albion Online data and an API.',
        }],
        ['meta', {
            name: 'keywords',
            content: 'openalbion,albiononline-api,openalbion-weaponry',
        }],
        ['meta', {
            property: 'og:title',
            content: 'OpenAlbion',
        }],
        ['meta', {
            property: 'og:description',
            content: 'OpenAlbion is a free and open-source platform providing Albion Online data and an API.',
        }],
        ['meta', {
            property: 'og:image',
            content: 'https://res.cloudinary.com/pyaesoneaung/image/upload/v1685124262/openalbion/preview.png',
        }],
        ['meta', {
            property: 'og:url',
            content: 'https://openalbion.com',
        }],
        ['meta', {
            property: 'twitter:title',
            content: 'OpenAlbion',
        }],
        ['meta', {
            property: 'twitter:description',
            content: 'OpenAlbion is a free and open-source platform providing Albion Online data and an API.',
        }],
        ['meta', {
            property: 'twitter:image',
            content: 'https://res.cloudinary.com/pyaesoneaung/image/upload/v1685124262/openalbion/preview.png',
        }],
        ['meta', {
            property: 'twitter:card',
            content: 'https://openalbion.com',
        }],
        ['script', {
            async: '',
            src: 'https://www.googletagmanager.com/gtag/js?id=G-VFJWJN8CJF'
        }],
        ['script', {}, "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-VFJWJN8CJF');"]
    ],

    themeConfig: {
        logo: {
            light: 'https://res.cloudinary.com/pyaesoneaung/image/upload/v1685124260/openalbion/favicon.png',
            dark: 'https://res.cloudinary.com/pyaesoneaung/image/upload/v1685124260/openalbion/favicon.png',
        },
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Application', link: 'https://play.google.com/store/apps/details?id=com.openalbion.weaponry' },
        ],
        sidebar: [
            {
                text: 'Getting started',
                items: [
                    { text: 'Introduction', link: '/' },
                ],
            },
            {
                text: 'Endpoints',
                items: [
                    { text: 'Categories', link: '/categories' },
                    { text: 'Weapons', link: '/weapons' },
                    { text: 'Weapon Stats', link: '/weapon-stats' },
                    { text: 'Armors', link: '/armors' },
                    { text: 'Armor Stats', link: '/armor-stats' },
                    { text: 'Accessories', link: '/accessories' },
                    { text: 'Accessory Stats', link: '/accessories-stats' },
                    { text: 'Consumables', link: '/consumables' },
                    { text: 'Consumable Stats', link: '/consumable-stats' },
                    { text: 'Consumable Craftings', link: '/consumable-craftings' },
                    { text: 'Spells', link: '/spells' },
                ],
            },
            {
                text: 'Types',
                items: [
                    { text: 'Category Types', link: '/category-types' },
                    { text: 'Enchantment Types', link: '/enchantment-types' },
                ],
            }
        ],
        search: {
            provider: 'algolia',
            options: {
                indexName: 'openalbion',
                appId: 'Y0EIQ1U6A8',
                apiKey: '4d407fe5bd0bcaa84d2e8d897eaae56c',
                placeholder: 'Search...'
            }
        },
        githubUrl: 'https://github.com/OpenAlbion'
    }
})
