module.exports = {
    title: 'TomasSystems Documentation',
    description: 'API & Other documentation for Tomas.GG services.',
    head: [
        ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "https://api.slushie.gg/avatar/683781987726917663?size=256"}],
        ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "https://api.slushie.gg/avatar/683781987726917663?size=256"}],
        ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "https://api.slushie.gg/avatar/683781987726917663?size=256"}],
      ],
    themeConfig: {
        smoothScroll: true,
        lastUpdated: 'Last Updated',
        nav: [
            { text: 'Website', link: 'https://tomas.systems'},
            { text: 'API', link: 'https://api.tomas.systems' },
            { text: 'GitHub', link: 'https://github.com/TomSmith-Developer'}
        ],
        sidebar: {
            '/guide/': [
                '',
                'tripleradio'
            ]
        }
    },
    dest: 'public',
}