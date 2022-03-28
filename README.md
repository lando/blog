# Lando Blog

This repo contains the [blog subsite](https://lando.dev/blog) for [Lando](https://lando.dev).

## Issues, Questions and Support

If you have a question or would like some community support we recommend you [join us on Slack](https://launchpass.com/devwithlando). Note that this is the Slack community for [Lando](https://lando.dev) but we are more than happy to help with this module as well!

If you'd like to report a bug or submit a feature request then please [use the issue queue](https://github.com/lando/blog/issues/new/choose) in this repo.

## Changelog

We try to log all changes big and small in both [THE CHANGELOG](https://github.com/lando/blog/blob/main/CHANGELOG.md) and the [release notes](https://github.com/lando/blog/releases).

## Development

* Requires [Node 14+](https://nodejs.org/dist/latest-v14.x/)
* Prefers [Yarn](https://classic.yarnpkg.com/lang/en/docs/install)
* Alternatively you can also use Lando

```bash
git clone https://github.com/lando/blog.git && cd blog
```

### Using Node/Yarn

```bash
# Install deps
yarn | npm install

# Launch dev site
yarn dev

# Lint
yarn lint

# Build site
yarn build
```

### Using Lando

```bash
# Install deps
lando start

# Launch dev site
lando dev

# Lint
lando yarn lint

# Build site
lando yarn build
```

## Releasing

```bash
yarn release
```

## Contributors

<a href="https://github.com/lando/blog/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=lando/blog" />
</a>

Made with [contributors-img](https://contrib.rocks).

## Other Resources

* [Important advice](https://www.youtube.com/watch?v=WA4iX5D9Z64)
* Other stuff
