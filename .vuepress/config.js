const {path} = require('@vuepress/utils');

module.exports = {
  base: '/blog/',
  title: 'Landob.log',
  description: 'A liberating blog by and for professional developers. We share things about tech, DevOps and development using but not limited to Lando.',
  theme: path.resolve(__dirname, './theme'),
  themeConfig: {
    // PARENT CONFIG
    contributors: true,
    darkMode: true,
    docsDir: '.',
    docsBranch: 'main',
    editLink: true,
    editLinkText: 'Suggest an edit to this page',
    lastUpdated: true,
    lastUpdatedText: 'Updated',
    logo: '/lando/icon.svg',
    // logoDark: '/images/logo-white.png',
    repo: 'lando/blog',
    sidebar: [],

    // THEME CONFIG
    baseUrl: 'https://lando.dev',
    autometa: {
      twitter: '@devwithlando',
      canonicalUrl: 'https://lando.dev/',
    },
    carbonAds: false,
    contributorsPage: {
      auto: true,
      exclude: [
        'dependabot[bot]',
      ],
    },
    contributorsExclude: [
      'dependabot[bot]',
    ],
    contributorsPage: {
      auto: true,
      exclude: [
        'dependabot[bot]',
      ],
    },
    ga: {
      id: 'G-HPJSRFPPPR',
    },
    hubspot: {
      id: '6478338',
    },
    jobs: false,
    readMode: {
      focusName: 'MAKE READING EASIER',
      distractName: 'MAKE READING HARDER',
    },
    rightbar: true,
    robots: {
      allowAll: true,
    },
    sitemap: true,
    sharedNavbar: [
      {text: 'Blog', link: '/'},
      {text: 'Support', link: 'https://lando.dev/support/'},
      {text: 'Docs', link: 'https://docs.lando.dev'},
    ],
    sidebar: false,
    sidebarHeader: false,
    search: true,
    social: [{
      title: 'Twitter',
      svg: {
        attributes: {
          'viewBox': '0 0 24 24',
          'fill': 'none',
          'stroke-width': 2,
          'stroke-linecap': 'round',
          'stroke-linejoin': 'round',
        },
        path: {
          d: 'M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z',
        },
      },
      link: 'https://twitter.com/devwithlando',
    },
    {
      title: 'GitHub',
      svg: {
        attributes: {
          'viewBox': '0 0 24 24',
          'fill': 'none',
          'stroke-width': 2,
          'stroke-linecap': 'round',
          'stroke-linejoin': 'round',
        },
        path: {
          d: 'M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22',
        },
      },
      link: 'https://github.com/lando/',
    },
    {
      title: 'YouTube',
      svg: {
        attributes: {
          'viewBox': '0 0 24 24',
          'fill': 'none',
          'stroke-width': 2,
          'stroke-linecap': 'round',
          'stroke-linejoin': 'round',
        },
        path: {
          d: 'M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z',
        },
        polygon: {
          points: '9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02',
        },
      },
      link: 'https://www.youtube.com/channel/UCl_QBNuGJNoo7yH-n18K7Kg',
    }],
    sponsors: false,
    tags: true,
    toc: true,
    versionsPage: false,
  },
  head: [
    ['link', {rel: 'preconnect', href: '//fonts.googleapis.com'}],
    ['link', {rel: 'preconnect', href: '//fonts.gstatic.com', crossorigin: true}],
    ['link', {rel: 'stylesheet', href: '//fonts.googleapis.com/css2?family=Lexend:wght@500&display=swap'}],
    ['link', {rel: 'icon', href: '/favicon.svg'}],
    ['link', {rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png'}],
    ['link', {rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png'}],
    ['link', {rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png'}],
    ['link', {rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#DD3F8F'}],
    ['meta', {name: 'msapplication-TileColor', content: '#DD3F8F'}],
    ['meta', {name: 'theme-color', content: '#ffffff'}],
  ],
};
