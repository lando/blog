const {path} = require('@vuepress/utils');

module.exports = (options, app) => {
  return {
    theme: path.resolve(__dirname, '.'),
    extends: '@lando/vuepress-theme-default-plus',
    alias: {
      // '@theme/Navbar.vue': path.resolve(__dirname, 'components', 'NavbarCustom.vue'),
      // '@theme/ToggleSidebarButton.vue': path.resolve(__dirname, 'components', 'ToggleSidebarButtonCustom.vue'),
    },
    darkMode: false,
    layouts: path.resolve(__dirname, 'layouts'),
    plugins: [
      ['@vuepress/container',
        {
          type: 'caption',
          defaultTitle: '',
        },
      ],
      ['@vuepress/container',
        {
          type: 'thumbnail',
          defaultTitle: '',
        },
      ],
      ['@vuepress/plugin-palette',
        {
          preset: 'sass',
          userStyleFile: path.resolve(__dirname, 'styles', 'index.scss'),
          userPaletteFile: path.resolve(__dirname, 'styles', 'palette.scss'),
        },
      ],
      ['@vuepress/register-components',
        {
          componentsDir: path.resolve(__dirname, 'components'),
          componentsPatterns: ['*.vue', '**/*.vue'],
        },
      ],
    ],
  };
};
