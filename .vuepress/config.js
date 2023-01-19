import {defineUserConfig} from '@vuepress/cli';
import {blogTheme} from './theme/index.js';

export default defineUserConfig({
  base: '/blog/',
  title: 'Lando',
  description: 'A liberating blog by and for professional developers. We share things about tech, DevOps and development using but not limited to Lando.',
  theme: blogTheme({
    // PARENT CONFIG
    colorMode: 'auto',
    colorModeSwitch: true,
    contributors: true,
    docsDir: '.',
    docsBranch: 'main',
    editLink: true,
    editLinkText: 'Suggest an edit to this page',
    lastUpdated: true,
    lastUpdatedText: 'Updated',
    logo: '/images/logo.png',
    logoDark: '/images/logo-white.png',
    repo: 'lando/blog',

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
      {text: 'Events', link: 'https://lando.dev/events'},
      {text: 'Support', link: 'https://lando.dev/support/'},
      {text: 'Docs', link: 'https://docs.lando.dev'},
    ],
    sidebar: false,
    sidebarHeader: false,
    search: true,
    social: false,
    sponsors: false,
    tags: true,
    toc: true,
    versionsPage: false,
  }),
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
});
