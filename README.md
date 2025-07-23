# Lando Blog

This repo contains the [blog subsite](https://lando.dev/blog) for [Lando](https://lando.dev).

## Issues, Questions and Support

If you have a question or would like some community support we recommend you [join us on Slack](https://launchpass.com/devwithlando). Note that this is the Slack community for [Lando](https://lando.dev) but we are more than happy to help with this module as well!

If you'd like to report a bug or submit a feature request then please [use the issue queue](https://github.com/lando/blog/issues/new/choose) in this repo.

## Changelog

We try to log all changes big and small in both [THE CHANGELOG](https://github.com/lando/blog/blob/main/CHANGELOG.md) and the [release notes](https://github.com/lando/blog/releases).

## Creating Content

To post content create a markdown file in the `content` directory. Ideally, you should name the file using the format `YYYY-MM-DD-slug-about-content.md` where `YYYY-MM-DD` corresponds to the publish date of the content.

In order to be treated like a `blog post` your markdown file _must_ contain the following frontmatter:

```md
---
title: "Making A Blog Post: It's sort of like a guide but it's sort of not like a guide"
byline: Blog posts are free form articles that may or may not be techincal in nature. They differ slightly from guides primarily in their presentation and authorship.
blog: true
---
```

Also note that you can use all of the markdown containers available [over here](https://vuepress-theme-default-plus.lando.dev/containers.html).

## Development

* Requires [Node 14+](https://nodejs.org/dist/latest-v14.x/)
* Prefers [Yarn](https://classic.yarnpkg.com/lang/en/docs/install)
* Prefers a [GitHub Personal Access Token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token), needed if you are hitting the GitHub API rate limit while developing locally
* Alternatively you can also use Lando

```bash
git clone https://github.com/lando/blog.git && cd blog
```

### Using Node/Yarn

```bash
# Install deps
yarn | npm install

# Launch dev site
DEBUG="@lando/*" yarn dev

# Set a GitHub personal access token to avoid rate limiting
GITHUB_TOKEN=MY_TOKEN DEBUG="@lando/*" yarn dev

# Lint
yarn lint

# Build site
DEBUG="@lando/*" yarn build
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

* [LICENSE](/LICENSE)
* [TERMS OF USE](https://docs.lando.dev/terms)
* [PRIVACY POLICY](https://docs.lando.dev/privacy)
* [CODE OF CONDUCT](https://docs.lando.dev/coc)
