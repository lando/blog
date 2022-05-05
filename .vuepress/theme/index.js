const _ = require('lodash');
const {path} = require('@vuepress/utils');
const debug = require('debug')('@lando/theme-blog');

const parentTheme = require('@lando/vuepress-theme-default-plus');
const {palettePlugin} = require('@vuepress/plugin-palette');
const {registerComponentsPlugin} = require('@vuepress/plugin-register-components');

module.exports = options => {
  return {
    name: '@lando/theme-blog',
    extends: parentTheme(options),
    alias: {
      '@theme/BlogHeader.vue': path.resolve(__dirname, 'components', 'BlogHeaderCustom.vue'),
      '@theme/Home.vue': path.resolve(__dirname, 'components', 'Home.vue'),
      '@theme/Navbar.vue': path.resolve(__dirname, 'components', 'NavbarCustom.vue'),
      '@theme/TagPageCard.vue': path.resolve(__dirname, 'components', 'TagPageCardCustom.vue'),
      '@theme/TOC.vue': path.resolve(__dirname, 'components', 'TOCCustom.vue'),
    },
    darkMode: true,
    logoDark: '/images/logo-white.png',
    layouts: path.resolve(__dirname, 'layouts'),
    plugins: [
      palettePlugin({
        preset: 'sass',
        userStyleFile: path.resolve(__dirname, 'styles', 'index.scss'),
        userPaletteFile: path.resolve(__dirname, 'styles', 'palette.scss'),
      }),
      registerComponentsPlugin({
        componentsDir: path.resolve(__dirname, './components'),
        componentsPatterns: ['*.vue', '**/*.vue'],
      }),
    ],
    extendsPageOptions: (pageOptions, app) => {
      if (pageOptions.filePath && pageOptions.filePath.startsWith(app.dir.source('content'))) {
        pageOptions.frontmatter = pageOptions.frontmatter || {};
        pageOptions.frontmatter.permalinkPattern = '/:year/:month/:day/:slug.html';
        debug('reset permalink pattern to %s for %s', pageOptions.frontmatter.permalinkPattern, pageOptions.filePath);
      }
    },
    onInitialized(app) {
      // Add all "content" pages to the site data
      app.siteData.content = _(app.pages)
        .filter(page => page.filePath && page.filePath.startsWith(app.dir.source('content')))
        .map(page => _.pick(page, ['data', 'key', 'path', 'title', 'lang', 'frontmatter', 'slug']))
        .map(page => _.merge({}, page, {
          authors: page.frontmatter.author ? [page.frontmatter.author] : page.frontmatter.authors,
          contributors: _.get(page, 'data.git.contributors'),
          date: _.get(page.frontmatter, 'updated.timestamp'),
          image: page.frontmatter.image,
          summary: page.frontmatter.description || page.frontmatter.byline || page.frontmatter.summary,
          tags: page.frontmatter.tags,
          updated: _.get(page, 'data.git.updatedTime'),
        }))
        .value();
      debug('found content pages: %o', _.map(app.siteData.content, page => page.path));

      // Add all tags to the sitedata
      app.siteData.tags = _(app.pages)
        .filter(page => _.has(page, 'data.tags'))
        .map(page => page.data.tags)
        .flatten()
        .compact()
        .uniqBy('key')
        .value();
      debug('found tags: %o', app.siteData.tags);

      app.siteData.frontpageTags = _(app.siteData.tags)
        .filter(tag => _.includes(displayedFrontpageTags, tag.name));

      debug('found front page tags: %o', app.siteData.frontpageTags);

      const displayedFrontpageTags = [
        'case study',
        'devops',
        'development',
        'lando',
        'workflows',
      ];
    },
  };
};
