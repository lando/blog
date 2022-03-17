const webpack = require('webpack');

module.exports = {
  base: '/blog/',
  title: 'Landob.log',
  description: 'A liberating blog by and for professional developers. We share things about tech, DevOps and development using but not limited to Lando.',
  configureWebpack: config => {
    return {plugins: [
      new webpack.EnvironmentPlugin({
        LANDO_API: process.env.LANDO_API || 'https://api.lando.dev',
      }),
    ]};
  },
  head: [
    ['meta', {name: 'viewport', content: 'width=device-width, initial-scale=1'}],
    ['link', {rel: 'preconnect', href: 'https://js.hs-scripts.com/6478338.js', crossorigin: 'true'}],
    ['link', {rel: 'preconnect', href: 'https://fonts.googleapis.com/css?family=Poppins:700|Source+Sans+Pro&display=swap', crossorigin: 'true'}],
    ['link', {rel: 'icon', href: '/favicon.ico'}],
    ['link', {rel: 'stylesheet', href: '/styles/overrides.css'}],
    ['link', {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Poppins:700|Source+Sans+Pro&display=swap'}],
    ['script', {src: 'https://js.hs-scripts.com/6478338.js'}],
  ],
  plugins: {
    '@vuepress/blog': {
      directories: [
        {
          title: 'Home',
          id: 'posts',
          dirname: 'posts',
          path: '/',
        },
      ],
      feed: {
        canonical_base: 'https://lando.dev/blog',
        feed_options: {
          favicon: 'https://lando.dev/favicon.ico',
          image: 'https://lando.dev/images/logo-pink-small.png',
        },
      },
      frontmatters: [
        {
          id: 'tag',
          keys: ['tag', 'tags'],
          path: '/tag/',
          frontmatter: {title: 'Tag'},
          pagination: {
            lengthPerPage: 25,
          },
        },
      ],
      sitemap: {
        hostname: 'https://lando.dev/blog',
      },
    },
    '@vuepress/google-analytics': {
      ga: 'UA-74237404-3',
    },
    'autometa': {
      image: 'https://lando.dev/images/logo-pink-medium.png',
      site: {
        name: 'Lando',
        twitter: 'devwithlando',
      },
      canonical_base: 'https://lando.dev/blog',
    },
    'robots': {
      host: 'https://lando.dev/blog',
      sitemap: '/sitemap.xml',
    },
  },
  theme: '@vuepress/theme-blog',
  themeConfig: {
    logo: '/images/logo-pink-small.png',
    docsDir: 'src',
    docsBranch: 'main',
    search: false,
    editLinks: false,
    nav: [
      {text: 'Main Site', link: 'https://lando.dev'},
      {text: 'Events', link: 'https://lando.dev/events'},
      {text: 'Case Studies', link: '/tag/case-study/'},
      {text: 'Development', link: '/tag/development/'},
      {text: 'DevOps', link: '/tag/devops/'},
      {text: 'Workflows', link: '/tag/workflows/'},
      {text: 'Lando', link: '/tag/lando/'},
    ],
  },
};
